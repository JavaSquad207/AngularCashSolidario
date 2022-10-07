import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { EnderecoService } from 'src/app/shared/service/endereco.service';

import { Endereco } from '../../shared/model/endereco';
import { Cliente } from './../../shared/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'cidade', 'uf', 'actions'];
  public dataSource: Array<Cliente> = new Array();
  public dataSourceEnd: Array<Endereco> = new Array();

  constructor(private router: Router, private clienteService: ClienteService, private enderecoService: EnderecoService) {}

  ngOnInit(): void {
    this.buscarClientes();
    this.buscarEnderecos();

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

  public buscarEnderecos() {
    this.enderecoService.listid(1).subscribe(
      (resultado1) => {
        this.dataSourceEnd = resultado1;
      },
      (erro) => {
        console.log('DEU ERRO. Causa' + erro)
      }
    )
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
    this.dataSource = this.dataSource.filter(p=> p.id != id);

  }

  public ondAdd() {
    this.router.navigate(['novocliente']);
  }

  public onEdit(id: number) {}


}
