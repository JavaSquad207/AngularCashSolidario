import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menudoacao',
  templateUrl: './menudoacao.component.html',
  styleUrls: ['./menudoacao.component.scss'],
})
export class MenudoacaoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  Menu() {
    this.router.navigate(['']);
  }

  novaDoacao() {
    this.router.navigate(['novadoacao']);
  }

  cadDoacao() {
    this.router.navigate(['listadoacao']);
  }
}
