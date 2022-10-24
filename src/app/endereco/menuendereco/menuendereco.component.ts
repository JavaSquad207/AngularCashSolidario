import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuendereco',
  templateUrl: './menuendereco.component.html',
  styleUrls: ['./menuendereco.component.scss'],
})
export class MenuenderecoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public Menu() {
    this.router.navigate(['']);
  }

  public cadEndereco() {
    this.router.navigate(['listadeendereco']);
  }
  public novoEndereco() {
    this.router.navigate(['novoendereco']);
  }
}
