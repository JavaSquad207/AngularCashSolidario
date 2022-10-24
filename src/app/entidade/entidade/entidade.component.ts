import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Entidade } from '../../shared/model/entidade';
import { EntidadeService } from '../../shared/service/entidade.service';

@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.scss'],
})
export class EntidadeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'actions'];

  public dataSource: Array<Entidade> = new Array();

  constructor(
    private router: Router,
    private entidadeService: EntidadeService
  ) {}

  ngOnInit(): void {
    this.buscarEntidades();
  }

  public buscarEntidades() {
    this.entidadeService.list().subscribe(
      (resultado) => {
        this.dataSource = resultado;
      },
      (erro) => {
        console.log('DEU ERRO. Causa' + erro);
      }
    );
  }

  public voltar() {
    this.router.navigate(['']);
  }

  public limpar() {
    this.dataSource = new Array();
  }

  public menu() {
    this.router.navigate(['']);
  }

  public onDelete(id: number): void {
    this.entidadeService.excluir(id);
    this.dataSource = this.dataSource.filter((p) => p.id != id);
  }

  public ondAdd() {
    this.router.navigate(['novaentidade']);
  }

  public onEdit(id: number) {
    this.router.navigate(['editentidade/' + id]);
  }
}
