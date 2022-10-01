import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaenderecoComponent } from './telaendereco.component';

describe('TelaenderecoComponent', () => {
  let component: TelaenderecoComponent;
  let fixture: ComponentFixture<TelaenderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaenderecoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaenderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
