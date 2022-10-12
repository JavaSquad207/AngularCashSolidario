import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Entidade } from '../model/entidade';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {
  private readonly API = 'http://localhost:8080/entidade';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Entidade[]>(this.API + '/listatodos');
  }

  salvar(entidade: Entidade) {
    return this.httpClient
      .post<Entidade>(this.API + '/salvar', entidade)
      .subscribe((data) => console.log(data));
  }

  excluir(id: number) {
    return this.httpClient
      .get(this.API + '/delete/' + id)
      .subscribe((data) => console.log(data));
  }

  listid(id: Number) {
    return this.httpClient.get<Entidade[]>(this.API + '/entidadeid/'+id);
  }


}
