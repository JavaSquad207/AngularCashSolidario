import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telaendereco',
  templateUrl: './telaendereco.component.html',
  styleUrls: ['./telaendereco.component.scss'],
})
export class TelaenderecoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public Menu() {
    this.router.navigate(['']);
  }
}
