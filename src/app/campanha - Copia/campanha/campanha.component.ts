import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campanha } from '../../shared/model/campanha';
import { CampanhaService } from '../../shared/service/campanha.service';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.scss']
})
export class CampanhaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'fkIdentidade', 'dataInicio','dataFinal','actions'];

  public dataSource: Array<Campanha> = new Array();

  constructor(
    private router: Router,
    private campanhaService: CampanhaService,

  ) {}

  ngOnInit(): void {
    this.buscarCampanhas();
  }
  public buscarCampanhas() {
    this.campanhaService.list().subscribe(
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
    this.campanhaService.excluir(id);
    this.dataSource = this.dataSource.filter((p) => p.id != id);
  }

  public ondAdd() {
    this.router.navigate(['novacampanha']);
  }

  public onEdit(id: number) {

    this.router.navigate(['editcampanha/'+id]);
  }

}
