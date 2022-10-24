import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuentidade',
  templateUrl: './menuentidade.component.html',
  styleUrls: ['./menuentidade.component.scss'],
})
export class MenuentidadeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public Menu() {
    this.router.navigate(['']);
  }

  public novaEntidade() {
    this.router.navigate(['novaentidade']);
  }

  public cadEntidade() {
    this.router.navigate(['listaentidades']);
  }
}
