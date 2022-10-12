import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Campanha } from 'src/app/shared/model/campanha';

import { CampanhaService } from '../../../shared/service/campanha.service';

@Component({
  selector: 'app-formcampanha',
  templateUrl: './formcampanha.component.html',
  styleUrls: ['./formcampanha.component.scss'],
})
export class FormcampanhaComponent implements OnInit {
  form: FormGroup;
  public dataSource: Array<Campanha> = new Array();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private servicecampanha: CampanhaService
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      fkIdentidade: [null],
      nome: [null],
      dataInicio: [null],
      dataFinal: [null],
    });
  }

  ngOnInit(): void {
    this.createForm(new Campanha());
    this.router.navigate(['novacampanha']);
  }

  public createForm(campanha: Campanha) {
    this.form = new FormGroup({
      fkIdentidade: new FormControl(campanha.fkIdentidade),
      nome: new FormControl(campanha.nome),
      dataInicio: new FormControl(campanha.dataInicio),
      dataFinal: new FormControl(campanha.dataFinal),
    });
  }

  public onCancel() {
    this.router.navigate(['menucampanha']);
  }

  public onSubmit() {
    console.log(this.form.value);
    this.servicecampanha.salvar(this.form.value);
    this.router.navigate(['menucampanha']);
  }
}
