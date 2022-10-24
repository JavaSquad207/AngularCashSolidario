import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Campanha } from 'src/app/shared/model/campanha';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/service/cliente.service';

import { Doacao } from '../../shared/model/doacao';
import { CampanhaService } from '../../shared/service/campanha.service';
import { DoacaoService } from '../../shared/service/doacao.service';

@Component({
  selector: 'app-formdoacao',
  templateUrl: './formdoacao.component.html',

  styleUrls: ['./formdoacao.component.scss'],
})
export class FormdoacaoComponent implements OnInit {
  doacaoform: FormGroup;
  public dataSource: Array<Doacao> = new Array();
  public campanhas: Campanha[] = new Array();
  public clientes: Cliente[] = new Array();
  public doacao: Doacao = new Doacao();
  public idCampanha: number;
  public idCliente: number;

  constructor(
    private formBuilder: FormBuilder,
    private servicedoacao: DoacaoService,
    private servicecampanhas: CampanhaService,
    private serviceclientes: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.doacaoform = this.formBuilder.group({
      id: [null, [Validators.required]],
      fkIdCliente: [this.idCliente, [Validators.required]],
      fkIdCampanha: [this.idCampanha, [Validators.required]],
      valor: [Number],
      dataRegistroDoacao: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let id: number = +params['id'];

      if (id) {
        //se o id do cliente existe então estamos alterando
        const dado$ = this.servicedoacao.listid(id);
        dado$.subscribe((doacao) => {
          this.updatedFormDoacao(doacao);
        });
        console.log(this.doacao);

        this.createdDoacaoForm(new Doacao());
      } else {
        this.createdDoacaoForm(new Doacao());
      }
    });

    this.buscarCampanhas();
    this.buscarClientes();
  }

  public createdDoacaoForm(doacao: Doacao) {
    this.doacaoform = new FormGroup({
      id: new FormControl(doacao.id),
      fkIdCliente: new FormControl(this.idCliente),
      fkIdCampanha: new FormControl(this.idCampanha),
      valor: new FormControl(doacao.valor),
      dataRegistroDoacao: new FormControl(doacao.dataRegistroDoacao),
    });
  }

  public onCancel() {
    this.router.navigate(['menudoacao']);
  }

  public onSubmit() {
    this.servicedoacao.salvar(this.doacaoform.value);
    this.router.navigate(['listadoacao']);
  }

  buscarCampanhas() {
    this.servicecampanhas.list().subscribe(
      (resultado) => {
        this.campanhas = resultado;
      },
      (erro) => {
        console.log('DEU ERRO. Causa: ' + erro);
      }
    );
  }

  buscarClientes() {
    this.serviceclientes.list().subscribe(
      (resultado) => {
        this.clientes = resultado;
      },
      (erro) => {
        console.log('DEU ERRO. Causa: ' + erro);
      }
    );
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }

  public updatedFormDoacao(doacao: Doacao) {
    this.doacaoform.patchValue({
      id: doacao.id,
      fkIdCliente: doacao.fkIdCliente,
      fkIdCampanha: doacao.fkIdCampanha,
      valor: doacao.valor,
      dataRegistroDoacao: doacao.dataRegistroDoacao,
    });
  }
}
