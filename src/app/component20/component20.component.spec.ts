import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component20Component } from './component20.component';

describe('Component20Component', () => {
  let component: Component20Component;
  let fixture: ComponentFixture<Component20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
