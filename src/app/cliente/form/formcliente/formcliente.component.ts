import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from '../../../shared/model/cliente';
import { EndCliEnt, Endereco } from '../../../shared/model/endereco';
import { EnderecoService } from '../../../shared/service/endereco.service';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.scss'],
})
export class FormclienteComponent implements OnInit {
  form: FormGroup;
  formEnd: FormGroup;
  formEntid: FormGroup;
  public dataSource: Array<Cliente> = new Array();
  public dataSourceEnd: Array<Endereco> = new Array();
  constructor(
    private formBuilder: FormBuilder,
    private serviceendereco: EnderecoService,
    private router: Router
  ) {

    this.formEntid = this.formBuilder.group ({
      id: [null],
      nome: [null,],
      cnpj: [null,],

    });
    this.form = this.formBuilder.group({
      id: [null, ],
      nome: [null, ],
      cpf: [null],
    });
    this.formEnd = this.formBuilder.group({
      logradouro: [ null,],
      numero: [null],
      complemento: [null],
      bairro: [null],
      cep: [null],
      cidade: [null],
      uf: [null],
      cliente: this.form
    });
  }

  ngOnInit(): void {
    this.createForm(new Cliente());
    this.createFormend(new EndCliEnt());
    this.router.navigate(['novocliente']);
  }

  public createForm(cliente: Cliente) {
    this.form = new FormGroup({
      nome: new FormControl(cliente.nome),
      cpf: new FormControl(cliente.cpf),
    });
  }

  public createFormend(endereco: EndCliEnt) {
    this.formEnd = new FormGroup({
      logradouro: new FormControl(endereco.logradouro),
      numero: new FormControl(endereco.numero),
      complemento: new FormControl(endereco.complemento),
      bairro: new FormControl(endereco.bairro),
      cep: new FormControl(endereco.cep),
      cidade: new FormControl(endereco.cidade),
      uf: new FormControl(endereco.uf),
      cliente: this.form,
      // entidade: this.formEntid
      });
  }

  public onCancel() {
    this.router.navigate(['cliente']);

  }

  public onSubmit() {
    this.serviceendereco.salvar(this.formEnd.value);
    this.router.navigate(['cliente']);

  }

}
