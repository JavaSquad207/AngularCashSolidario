import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      id:  [null],
      nome:  [null, [Validators.required]],
      cpf:  [null, [Validators.required]],
    });
    this.formEnd = this.formBuilder.group({
      logradouro: [ null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      cliente: this.form
    });
  }

  ngOnInit(): void {
    this.createForm(new Cliente());
    this.createFormend(new EndCliEnt());
    this.router.navigate(['novocliente']);
  }

  get nome() {
    return this.form.get('nome')!;
  }

  get cpf() {
    return this.form.get('cpf')!;
  }

  get logradouro() {
    return this.formEnd.get('logradouro')!;
  };
  get numero() {
    return this.formEnd.get('numero')!;
  };
  get complemento() {
    return this.formEnd.get('complemento')!;
  };
  get bairro() {
    return this.formEnd.get('bairro')!;
  };
  get cep() {
    return this.formEnd.get('cep')!;
  };
  get cidade() {
    return this.formEnd.get('cidade')!;
  };
  get uf() {
    return this.formEnd.get('uf')!;
  };


  public createForm1(cliente: Cliente) {
    this.form = new FormGroup({
      nome: new FormControl(cliente.nome),
      cpf: new FormControl(cliente.cpf),
    });
  }

  public createFormend1(endereco: EndCliEnt) {
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

  public createForm(cliente: Cliente) {
    this.form = this.formBuilder.group({
      nome: [cliente.nome, [Validators.required]],
      cpf: [cliente.cpf, [Validators.required]],
    });
  }

  public createFormend(endereco: EndCliEnt) {
    this.formEnd = this.formBuilder.group({
      logradouro: [endereco.logradouro, [Validators.required]],
      numero: [endereco.numero, [Validators.required]],
      complemento: [endereco.complemento, [Validators.required]],
      bairro: [endereco.bairro, [Validators.required]],
      cep: [endereco.cep, [Validators.required]],
      cidade:[endereco.cidade, [Validators.required]],
      uf: [endereco.uf, [Validators.required]],
      cliente: this.form,
      // entidade: this.formEntid
      });
  }

  public onCancel() {
    this.router.navigate(['cliente']);

  }

  public onSubmit() {
    if (this.formEnd.invalid) {

      return
    }
    this.serviceendereco.salvar(this.formEnd.value);
    this.router.navigate(['cliente']);

  }

}
