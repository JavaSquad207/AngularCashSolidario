import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ConfiguracaoService {
    private readonly API = 'http://localhost:8080/configuracao';
    constructor(private httpClient: HttpClient) {}
  }