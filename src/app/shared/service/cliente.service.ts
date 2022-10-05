import { Cliente } from './../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'http://localhost:8080/cliente';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Cliente[]>(this.API + '/listatodos');
  }

  salvar(cliente: Cliente) {
    return this.httpClient
      .post<Cliente>(this.API + '/salvar', cliente)
      .subscribe((data) => console.log(data));
  }

  excluir(id: number) {
    return this.httpClient
      .get(this.API + '/delete/' + id)
      .subscribe((data) => console.log(data));
  }
}
