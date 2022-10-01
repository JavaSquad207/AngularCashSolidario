import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irParaTelaCliente() {
    this.router.navigate(['telacliente']);
  }
  irParaTelaEntidade() {
    this.router.navigate(['telaentidade']);
  }
  irParaTelaEndereco() {
    this.router.navigate(['telaendereco']);
  }
}
