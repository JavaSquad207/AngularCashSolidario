import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Entidade } from '../../../shared/model/entidade';
import { EntidadeService } from './../../../shared/service/entidade.service';

@Component({
  selector: 'app-formentidade',
  templateUrl: './formentidade.component.html',
  styleUrls: ['./formentidade.component.scss'],
})
export class FormentidadeComponent implements OnInit {
  form: FormGroup;
  public idCliente: number;
  public entidade: Entidade;

  public dataSourceEntidade: Array<Entidade> = new Array();

  constructor(
    private formBuilder: FormBuilder,
    private serviceentidade: EntidadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
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
        const dado$ = this.serviceentidade.buscarEntidadeId(id);
        dado$.subscribe((entidade) => {
          this.updatedFormEntidade(entidade);
        });

        this.createForm(new Entidade());
      } else {
        this.createForm(new Entidade());
      }
    });
  }

  get nome() {
    return this.form.get('nome')!;
  }

  get cnpj() {
    return this.form.get('cnpj')!;
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

  public createForm(entidade: Entidade) {
    this.form = this.formBuilder.group({
      id: [entidade.id],
      nome: [entidade.nome, [Validators.required]],
      cnpj: [entidade.cnpj, [Validators.required]],
      logradouro: [entidade.logradouro, [Validators.required]],
      numero: [entidade.numero, [Validators.required]],
      complemento: [entidade.complemento, [Validators.required]],
      bairro: [entidade.bairro, [Validators.required]],
      cep: [entidade.cep, [Validators.required]],
      cidade: [entidade.cidade, [Validators.required]],
      uf: [entidade.uf, [Validators.required]],
      endId: [entidade.endId],
    });
  }

  public onCancel() {
    this.router.navigate(['entidade']);
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.serviceentidade.salvar(this.form.value);
    this.router.navigate(['entidade']);
  }

  public buscarClientes(id: number) {
    this.serviceentidade.buscarEntidadeId(id);
  }

  public updatedFormEntidade(entidade: Entidade) {
    this.form.patchValue({
      id: entidade.id,
      nome: entidade.nome,
      cnpj: entidade.cnpj,
      logradouro: entidade.logradouro,
      numero: entidade.numero,
      complemento: entidade.complemento,
      bairro: entidade.bairro,
      cep: entidade.cep,
      cidade: entidade.cidade,
      uf: entidade.uf,
      endId: entidade.endId,
    });
  }
}
