import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../../shared/service/cliente.service';
import { Cliente } from '../../../shared/model/cliente';

@Component({
  selector: 'app-formcliente',
  templateUrl: './formcliente.component.html',
  styleUrls: ['./formcliente.component.scss']
})
export class FormclienteComponent implements OnInit {

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
    this.router.navigate(['cliente']);
  }
  public onSubmit() {
    this.servicecliente.salvar(this.form.value);
    this.router.navigate(['cliente']);
  }
}
