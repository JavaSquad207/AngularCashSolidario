import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Endereco, EnderecoEnt, EndCliEnt } from '../../../shared/model/endereco';
import { Entidade } from '../../../shared/model/entidade';
import { EntidadeService } from '../../../shared/service/entidade.service';
import { EnderecoService } from '../../../shared/service/endereco.service';
import { Cliente } from '../../../shared/model/cliente';



@Component({
  selector: 'app-formentidade',
  templateUrl: './formentidade.component.html',
  styleUrls: ['./formentidade.component.scss'],
})
export class FormentidadeComponent implements OnInit {
  form: FormGroup;
  formEntid: FormGroup;
  formEndEntid: FormGroup;
  public dataSourceEntidade: Array<Entidade> = new Array();
  public dataSourceEntidadeEndereco: Array<Endereco> = new Array();
  constructor(
    private formBuilder: FormBuilder,
//    private serviceentidade: EntidadeService,
    private serviceendereco: EnderecoService,
    private router: Router
    ) {
      this.form = this.formBuilder.group({
        id: [null],
        nome: [null],
        cpf: [null],
      });
      this.formEntid = this.formBuilder.group ({
        id: [null],
        nome: [null],
        cnpj: [null],

      });
      this.formEndEntid = this.formBuilder.group ({
        logradouro: [null],
        numero: [null],
        complemento: [null],
        bairro: [null],
        cep: [null],
        cidade: [null],
        uf: [null],
        entidade: this.formEntid
      });
    }

  ngOnInit(): void {
    this.createFormEntidade(new Entidade());
    this.createEntidadeEndereco(new EndCliEnt());
    this.router.navigate(['novaentidade']);
  }

  public createFormEntidade(entidade: Entidade){
    this.formEntid = new FormGroup({
      nome: new FormControl(entidade.nome),
      cnpj: new FormControl(entidade.cnpj),
    });
  }

  public createEntidadeEndereco(endereco: EndCliEnt) {
    this.formEndEntid = new FormGroup ({
      logradouro: new FormControl(endereco.logradouro),
      numero: new FormControl(endereco.numero),
      complemento: new FormControl(endereco.complemento),
      bairro: new FormControl(endereco.bairro),
      cep: new FormControl(endereco.cep),
      cidade: new FormControl(endereco.cidade),
      uf: new FormControl(endereco.uf),
      //cliente: this.form,
      entidade: this.formEntid
    });
  }

  public onCancel() {
    this.router.navigate(['entidade']);

  }

  public onSubmit() {
    this.serviceendereco.salvar(this.formEndEntid.value);
    this.router.navigate(['entidade']);


}
}
