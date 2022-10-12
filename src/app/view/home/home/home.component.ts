import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  irParaTelaCliente() {
    this.router.navigate(['cliente']);
  }
  irParaTelaEntidade() {
    this.router.navigate(['entidade']);
  }
  irParaTelaEndereco() {
    this.router.navigate(['endereco']);
  }
  irParaTelaCampanha() {
    this.router.navigate(['menucampanha']);
  }

  irParaTelaDoacao() {
    this.router.navigate(['menudoacao']);
  }
}
