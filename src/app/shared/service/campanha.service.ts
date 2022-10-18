import { Observable } from 'rxjs';
import { Campanha } from '../model/campanha';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  private readonly API = 'http://localhost:8080/campanha';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Campanha[]>(this.API + '/listartodos');
  }

  salvar(campanha: Campanha) {
    let dataCampanha: Campanha;
    this.httpClient
      .post<Campanha>(this.API + '/salvar', campanha)
      .subscribe((data) => {
        console.log(data);
        dataCampanha = data;

      });
      return dataCampanha!;
  }

  excluir(id: number) {
    return this.httpClient
      .get(this.API + '/delete/' + id)
      .subscribe((data) => console.log(data));
  }

  listid(id: number): Observable<Campanha> {
    return this.httpClient.get<Campanha>(this.API + '/campanhaid/'+id);
  }

}
