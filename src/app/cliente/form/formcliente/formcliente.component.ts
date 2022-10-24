import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Cliente } from '../../../shared/model/cliente';
import { ClienteService } from '../../../shared/service/cliente.service';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.scss'],
})
export class FormclienteComponent implements OnInit {
  form: FormGroup;
  public idCliente: number;
  public cliente: Cliente;

  public dataSource: Array<Cliente> = new Array();

  constructor(
    private formBuilder: FormBuilder,
    private servicecliente: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      endId: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let id: number = +params['id'];

      if (id) {
        const dado$ = this.servicecliente.buscarClienteId(id);
        dado$.subscribe((cliente) => {
          this.updatedFormCliente(cliente);
        });

        this.createForm(new Cliente());
      } else {
        this.createForm(new Cliente());
      }
    });
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
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required]],
      cpf: [cliente.cpf, [Validators.required]],
      logradouro: [cliente.logradouro, [Validators.required]],
      numero: [cliente.numero, [Validators.required]],
      complemento: [cliente.complemento, [Validators.required]],
      bairro: [cliente.bairro, [Validators.required]],
      cep: [cliente.cep, [Validators.required]],
      cidade: [cliente.cidade, [Validators.required]],
      uf: [cliente.uf, [Validators.required]],
      endId: [cliente.endId],
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
    this.router.navigate(['../cliente/cadastrocliente']);
  }

  public buscarClientes(id: number) {
    this.servicecliente.buscarClienteId(id);
  }

  public updatedFormCliente(cliente: Cliente) {
    this.form.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      cpf: cliente.cpf,
      logradouro: cliente.logradouro,
      numero: cliente.numero,
      complemento: cliente.complemento,
      bairro: cliente.bairro,
      cep: cliente.cep,
      cidade: cliente.cidade,
      uf: cliente.uf,
      endId: cliente.endId,
    });
  }
}
