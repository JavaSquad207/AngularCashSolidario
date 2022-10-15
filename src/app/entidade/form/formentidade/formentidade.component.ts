import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Endereco } from '../../../shared/model/endereco';
import { Entidade } from '../../../shared/model/entidade';
import { EntidadeService } from './../../../shared/service/entidade.service';

@Component({
  selector: 'app-formentidade',
  templateUrl: './formentidade.component.html',
  styleUrls: ['./formentidade.component.scss'],
})
export class FormentidadeComponent implements OnInit {
  form: FormGroup;


  public dataSourceEntidade: Array<Entidade> = new Array();
  
  constructor(
    private formBuilder: FormBuilder,
    private serviceentidade: EntidadeService,
    private router: Router
    ) {

      this.form = this.formBuilder.group ({
        id: [null],
        nome: [null,],
        cnpj: [null,],
        logradouro: [null,],
        numero: [null, ],
        complemento: [null , ],
        bairro: [null, ],
        cep: [null, ],
        cidade: [null,],
        uf: [null,],

      });

    }

  ngOnInit(): void {
    this.createFormEntidade(new Entidade());

    this.router.navigate(['novaentidade']);
  }

  public createFormEntidade(entidade: Entidade){
    this.form = this.formBuilder.group({
      nome: [entidade.nome, [Validators.required]],
      cnpj: [entidade.cnpj, [Validators.required]],
      logradouro: [entidade.logradouro, [Validators.required]],
      numero: [entidade.numero, [Validators.required]],
      complemento: [entidade.complemento, [Validators.required]],
      bairro: [entidade.bairro, [Validators.required]],
      cep:  [entidade.cep, [Validators.required]],
      cidade: [entidade.cidade, [Validators.required]],
      uf: [entidade.uf, [Validators.required]],
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
  };
  get numero() {
    return this.form.get('numero')!;
  };
  get complemento() {
    return this.form.get('complemento')!;
  };
  get bairro() {
    return this.form.get('bairro')!;
  };
  get cep() {
    return this.form.get('cep')!;
  };
  get cidade() {
    return this.form.get('cidade')!;
  };
  get uf() {
    return this.form.get('uf')!;
  };

  public onCancel() {
    this.router.navigate(['entidade']);

  }

  public onSubmit() {
    this.serviceentidade.salvar(this.form.value);
    this.router.navigate(['entidade']);
}
}
