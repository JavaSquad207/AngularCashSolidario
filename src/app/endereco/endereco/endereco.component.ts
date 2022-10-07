import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from '../../shared/model/endereco';
import { EnderecoService } from '../../shared/service/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'logradouro', 'numero', 'complemento', 'bairro', 'cep', 'cidade', 'uf', 'actions'];
  public dataSourceEnd: Array<Endereco> = new Array();

  constructor(private router: Router, private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.buscarEnderecos();
  }

  public buscarEnderecos() {
    this.enderecoService.list().subscribe(
      (resultado) => {
        this.dataSourceEnd = resultado;
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
    this.dataSourceEnd = new Array();
  }

  public onDelete(id: number): void {
    this.enderecoService.excluir(id);
    this.dataSourceEnd = this.dataSourceEnd.filter(p=> p.id != id);

  }

  public ondAdd() {
    this.router.navigate(['novoendereco']);
  }

  public onEdit(id: number) {}

  }


