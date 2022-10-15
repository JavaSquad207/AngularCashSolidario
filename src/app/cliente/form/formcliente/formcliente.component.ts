import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from '../../../shared/model/cliente';
import { ClienteService } from '../../../shared/service/cliente.service';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.scss'],
})
export class FormclienteComponent implements OnInit {
  form: FormGroup;

  public dataSource: Array<Cliente> = new Array();

  constructor(
    private formBuilder: FormBuilder,
    private servicecliente: ClienteService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createForm(new Cliente());

    this.router.navigate(['novocliente']);
  }

  get nome() {
    return this.form.get('nome')!;
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  get logradouro() {
    return this.form.get('logradouro')!;
  }
  get numero() {
    return this.form.get('numero')!;
  }
  get complemento() {
    return this.form.get('complemento')!;
  }
  get bairro() {
    return this.form.get('bairro')!;
  }
  get cep() {
    return this.form.get('cep')!;
  }
  get cidade() {
    return this.form.get('cidade')!;
  }
  get uf() {
    return this.form.get('uf')!;
  }

  public createForm(cliente: Cliente) {
    this.form = this.formBuilder.group({
      nome: [cliente.nome, [Validators.required]],
      cpf: [cliente.cpf, [Validators.required]],
      logradouro: [cliente.logradouro, [Validators.required]],
      numero: [cliente.numero, [Validators.required]],
      complemento: [cliente.complemento, [Validators.required]],
      bairro: [cliente.bairro, [Validators.required]],
      cep: [cliente.cep, [Validators.required]],
      cidade: [cliente.cidade, [Validators.required]],
      uf: [cliente.uf, [Validators.required]],
    });
  }

  public onCancel() {
    this.router.navigate(['cliente']);
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.servicecliente.salvar(this.form.value);
    this.router.navigate(['cliente']);
  }
}
