import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracaoService } from '../shared/service/configuracao.service';


@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss']
})
export class ConfiguracaoComponent implements OnInit {

  public voltar() {
    this.router.navigate(['']);
  }
  public menu() {
    this.router.navigate(['']);
  }
  public onCancel() {
    this.router.navigate(['']);
  }
 

  constructor(
    private router: Router,
    private configuracaoService: ConfiguracaoService,
  ) {}
    
  ngOnInit(): void {
   
  }
 

}


