import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Endereco } from './../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private readonly API = 'http://localhost:8080/endereco';
  constructor(private httpClient: HttpClient) {}


  list() {
    return this.httpClient.get<Endereco[]>(this.API + '/listatodos');
  }

  salvar(endereco: Endereco) {
    return this.httpClient
      .post<Endereco>(this.API + '/salvar', endereco)
      .subscribe((data) => console.log(data));
  }

  excluir(id: number) {
    return this.httpClient
      .get(this.API + '/delete/' + id)
      .subscribe((data) => console.log(data));
  }

  listid(id: number) {
    
    return this.httpClient.get<Endereco[]>(this.API + '/enderecoid/'+id);
  }
}
