import { Component, OnInit } from '@angular/core';
import { Doacao } from '../../shared/model/doacao';
import { Router } from '@angular/router';
import { DoacaoService } from '../../shared/service/doacao.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fkIdCliente', 'fkIdCampanha', 'valor', 'dataRegistroDoacao', 'actions'];
  public dataSource: Array<Doacao> = new Array();

  constructor(private router: Router, private doacaoService: DoacaoService) { }

  ngOnInit(): void {
    this.buscarDoacoes();
  }

  public buscarDoacoes() {
    this.doacaoService.list().subscribe(
      (resultado) => {
        this.dataSource = resultado;
      },
      (erro) => {
        console.log('DEU ERRO. Causa' + erro)
      }
    )

  }

  public menu() {
    this.router.navigate(['']);

   }

   public voltar() {
    this.router.navigate(['']);

   }

   public limpar() {
    this.dataSource = new Array();
  }

  public onDelete(id: number): void {
    this.doacaoService.excluir(id);
    this.dataSource= this.dataSource.filter(p=> p.id != id);

  }

  public ondAdd() {
    this.router.navigate(['novadoacao']);
  }

  public onEdit(id: number) {}


}
