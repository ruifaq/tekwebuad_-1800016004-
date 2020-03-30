import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum03Component } from './praktikum03.component';

describe('Praktikum03Component', () => {
  let component: Praktikum03Component;
  let fixture: ComponentFixture<Praktikum03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
