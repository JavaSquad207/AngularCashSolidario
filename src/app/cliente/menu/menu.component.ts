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

  public Menu() {
    this.router.navigate(['']);
  }

  public novoCliente() {
    this.router.navigate(['novocliente']);
  }

  public cadCliente() {
    this.router.navigate(['../cliente/cadastrocliente']);
  }
}
