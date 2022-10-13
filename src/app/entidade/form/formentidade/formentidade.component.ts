import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EndCliEnt, Endereco } from '../../../shared/model/endereco';
import { Entidade } from '../../../shared/model/entidade';
import { EnderecoService } from '../../../shared/service/endereco.service';



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
        logradouro: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null , [Validators.required]],
        bairro: [null, [Validators.required]],
        cep: [null, [Validators.required]],
        cidade: [null,[Validators.required]],
        uf: [null, [Validators.required]],
        entidade: this.formEntid
      });
    }

  ngOnInit(): void {
    this.createFormEntidade(new Entidade());
    this.createEntidadeEndereco(new EndCliEnt());
    this.router.navigate(['novaentidade']);
  }

  public createFormEntidade(entidade: Entidade){
    this.formEntid = this.formBuilder.group({
      nome: [entidade.nome, [Validators.required]],
      cnpj: [entidade.cnpj, [Validators.required]],
    });
  }

  public createEntidadeEndereco(endereco: EndCliEnt) {
    this.formEndEntid = this.formBuilder.group ({
      logradouro: [endereco.logradouro, [Validators.required]],
      numero: [endereco.numero, [Validators.required]],
      complemento: [endereco.complemento, [Validators.required]],
      bairro: [endereco.bairro, [Validators.required]],
      cep:  [endereco.cep, [Validators.required]],
      cidade: [endereco.cidade, [Validators.required]],
      uf: [endereco.uf, [Validators.required]],
      
      entidade: this.formEntid
    });
  }

  get nome() {
    return this.formEntid.get('nome')!;
  }

  get cnpj() {
    return this.formEntid.get('cnpj')!;
  }

  get logradouro() {
    return this.formEndEntid.get('logradouro')!;
  };
  get numero() {
    return this.formEndEntid.get('numero')!;
  };
  get complemento() {
    return this.formEndEntid.get('complemento')!;
  };
  get bairro() {
    return this.formEndEntid.get('bairro')!;
  };
  get cep() {
    return this.formEndEntid.get('cep')!;
  };
  get cidade() {
    return this.formEndEntid.get('cidade')!;
  };
  get uf() {
    return this.formEndEntid.get('uf')!;
  };

  public onCancel() {
    this.router.navigate(['entidade']);

  }

  public onSubmit() {
    this.serviceendereco.salvar(this.formEndEntid.value);
    this.router.navigate(['entidade']);


}
}
