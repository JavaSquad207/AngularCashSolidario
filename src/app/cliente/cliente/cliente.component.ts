import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/service/cliente.service';

import { Cliente } from './../../shared/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'actions'];

  public dataSource: Array<Cliente> = new Array();

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.buscarClientes();
  }
  public buscarClientes() {
    this.clienteService.list().subscribe(
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
    this.clienteService.excluir(id);
    this.dataSource = this.dataSource.filter((p) => p.id != id);
  }

  public ondAdd() {
    this.router.navigate(['novocliente']);
  }

  public onEdit(id: number) {
    this.router.navigate(['editcliente/' + id]);
  }
}
