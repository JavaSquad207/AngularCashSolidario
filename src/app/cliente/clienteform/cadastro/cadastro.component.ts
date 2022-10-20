import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

import { Cliente } from '../../shared/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servicecliente: ClienteService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      cpf: [null],
    });
  }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.form = new FormGroup({
      nome: new FormControl(cliente.nome),
      cpf: new FormControl(cliente.cpf),
    });
  }
  public onCancel() {
    this.router.navigate(['menucliente']);
  }
  public onSubmit() {
    this.servicecliente.salvar(this.form.value);
    this.router.navigate(['menucliente']);
  }
}
