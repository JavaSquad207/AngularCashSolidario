import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from '../../../shared/model/endereco';
import { EnderecoService } from '../../../shared/service/endereco.service';

@Component({
  selector: 'app-formendereco',
  templateUrl: './formendereco.component.html',
  styleUrls: ['./formendereco.component.scss']
})
export class FormenderecoComponent implements OnInit {
  formEnd: FormGroup;
  public dataSourceEnd: Array<Endereco> = new Array();
  constructor(
    private formBuilder: FormBuilder,
    private serviceendereco: EnderecoService,
    private router: Router
  ) {
    this.formEnd = this.formBuilder.group({
    logradouro: [null],
    numero: [null],
    complemento: [null],
    bairro: [null],
    cep: [null],
    cidade: [null],
    uf: [null],

  });

  }

  ngOnInit(): void {
    this.createFormend(new Endereco());
  }



  public createFormend(endereco: Endereco) {
    this.formEnd = new FormGroup({
      logradouro: new FormControl(endereco.logradouro),
      numero: new FormControl(endereco.numero),
      complemento: new FormControl(endereco.complemento),
      bairro: new FormControl(endereco.bairro),
      cep: new FormControl(endereco.cep),
      cidade: new FormControl(endereco.cidade),
      uf: new FormControl(endereco.uf),
    });
  }

  public onCancel() {
    this.router.navigate(['endereco']);
  }


  public onSubmit() {

    this.serviceendereco.salvar(this.formEnd.value);
    this.router.navigate(['endereco']);

  }

  public listadeenderecos() {
    this.serviceendereco.list().subscribe(
      (resultado) => {
        this.dataSourceEnd = resultado;
      },
      (erro) => {
        console.log('DEU ERRO. Causa' + erro);
      }
    );
  }
}
