import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum05Component } from './praktikum05.component';

describe('Praktikum05Component', () => {
  let component: Praktikum05Component;
  let fixture: ComponentFixture<Praktikum05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
