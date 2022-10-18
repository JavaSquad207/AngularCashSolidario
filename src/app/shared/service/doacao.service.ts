import { Observable } from 'rxjs';
import { Doacao } from '../model/doacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  private readonly API = 'http://localhost:8080/doacao';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Doacao[]>(this.API + '/listatodos');
  }

  salvar(doacao: Doacao) {
    let dataCliente: Doacao;
    this.httpClient
      .post<Doacao>(this.API + '/salvar', doacao)
      .subscribe((data) => {
        console.log(data);
        dataCliente = data;

      });
      return dataCliente!;
  }


  excluir(id: number) {
    return this.httpClient
      .get(this.API + '/delete/' + id)
      .subscribe((data) => console.log(data));
  }

  listid(id: number): Observable<Doacao> {
    return this.httpClient.get<Doacao>(this.API + '/doacaoid/'+id);
  }

}
