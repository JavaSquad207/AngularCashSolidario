import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaclienteComponent } from './telacliente.component';

describe('TelaclienteComponent', () => {
  let component: TelaclienteComponent;
  let fixture: ComponentFixture<TelaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
