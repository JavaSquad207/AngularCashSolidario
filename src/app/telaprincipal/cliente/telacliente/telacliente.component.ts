import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telacliente',
  templateUrl: './telacliente.component.html',
  styleUrls: ['./telacliente.component.scss'],
})
export class TelaclienteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public Menu() {
    this.router.navigate(['']);
  }

  public cadCliente() {
    this.router.navigate(['menucliente']);
  }
}
