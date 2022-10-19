import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Campanha } from 'src/app/shared/model/campanha';

import { CampanhaService } from '../../../shared/service/campanha.service';

import { Entidade } from 'src/app/shared/model/entidade';

import { EntidadeService } from 'src/app/shared/service/entidade.service';

@Component({
  selector: 'app-formcampanha',
  templateUrl: './formcampanha.component.html',
  styleUrls: ['./formcampanha.component.scss'],
})
export class FormcampanhaComponent implements OnInit {
  form: FormGroup;
  public dataSource: Array<Campanha> = new Array();
  public entidades: Entidade[] = new Array();
  public campanha: Campanha = new Campanha();
  public idEntidade: number;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private servicecampanha: CampanhaService,
    private serviceentidade: EntidadeService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]],
      fkIdentidade: [this.idEntidade, [Validators.required]],
      nome: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      dataFinal: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      let id: number = +params['id'];

      if (id) {
        //se o id do cliente existe então estamos alterando
        const dado$ = this.servicecampanha.listid(id);
        dado$.subscribe((campanha) => {
          this.updatedFormCampanha(campanha);
        });
        console.log(this.campanha)

        this.createForm(new Campanha());
      } else {
        this.createForm(new Campanha());
      }
    });

    this.buscarEntidades();
  }

  public createForm(campanha: Campanha) {
    this.form = new FormGroup({
      id: new FormControl(campanha.id),
      fkIdentidade: new FormControl(this.idEntidade),
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

  buscarEntidades()   {
    this.serviceentidade.list().subscribe(
      resultado => {
        this.entidades = resultado;

      },
      erro => {
        console.log("DEU ERRO. Causa: " + erro)
      }
    )
    ;

  }


  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }



  public updatedFormCampanha(campanha: Campanha) {
    this.form.patchValue({
      id: campanha.id,
      nome: campanha.nome,
      fkIdentidade: campanha.fkIdentidade,
      dataInicio: campanha.dataInicio,
      dataFinal: campanha.dataFinal
    });
  }
}
