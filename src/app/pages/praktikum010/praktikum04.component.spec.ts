import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum04Component } from './praktikum04.component';

describe('Praktikum04Component', () => {
  let component: Praktikum04Component;
  let fixture: ComponentFixture<Praktikum04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
