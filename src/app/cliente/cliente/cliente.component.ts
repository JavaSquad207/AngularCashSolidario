import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from '../../service/cliente/cliente.service';
import { Cliente } from '../shared/cliente';

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
    this.router.navigate(['telacliente']);
  }
  public limpar() {
    this.dataSource = new Array();
  }

  public menu() {
    this.router.navigate(['']);
  }

  public onDelete(id: Number) {
    location.reload();
    this.clienteService.excluir(id);
  }

  public ondAdd() {
    this.router.navigate(['novocliente']);
  }

  public onEdit(id: Number) {}
}
