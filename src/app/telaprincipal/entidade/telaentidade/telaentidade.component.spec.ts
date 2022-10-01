import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaentidadeComponent } from './telaentidade.component';

describe('TelaentidadeComponent', () => {
  let component: TelaentidadeComponent;
  let fixture: ComponentFixture<TelaentidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaentidadeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaentidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
