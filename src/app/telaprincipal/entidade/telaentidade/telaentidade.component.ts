import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telaentidade',
  templateUrl: './telaentidade.component.html',
  styleUrls: ['./telaentidade.component.scss'],
})
export class TelaentidadeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public Menu() {
    this.router.navigate(['']);
  }
}
