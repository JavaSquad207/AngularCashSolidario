import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menucampanha',
  templateUrl: './menucampanha.component.html',
  styleUrls: ['./menucampanha.component.scss']
})
export class MenucampanhaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public Menu() {
    this.router.navigate([''])

  }

  public novaCampanha() {
    this.router.navigate(['novacampanha'])

  }

  public cadCampanha() {
    this.router.navigate(['cadastroCampanha'])

  }

}
