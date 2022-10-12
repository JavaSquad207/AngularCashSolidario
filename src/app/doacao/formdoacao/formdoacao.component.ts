import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Doacao } from '../../shared/model/doacao';
import { DoacaoService } from '../../shared/service/doacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formdoacao',
  templateUrl: './formdoacao.component.html',
  styleUrls: ['./formdoacao.component.scss'],
})
export class FormdoacaoComponent implements OnInit {
  doacaoform: FormGroup;
  public dataSource: Array<Doacao> = new Array();
  constructor(
    private formBuilder: FormBuilder,
    private servicedoacao: DoacaoService,
    private router: Router
  ) {
    this.doacaoform = this.formBuilder.group({
      id: [null],
      fkIdCliente: [null],
      fkIdCampanha: [null],
      valor: [null],
      dataRegistroDoacao: [null],
    });
  }

  ngOnInit(): void {}

  public createdDoacaoForm(doacao: Doacao) {
    this.doacaoform = new FormGroup({
      fkIdCliente: new FormControl(doacao.fkIdCliente),
      fkIdCampanha: new FormControl(doacao.fkIdCampanha),
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
}
