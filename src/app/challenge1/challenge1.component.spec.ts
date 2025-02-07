import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge1Component } from './challenge1.component';

describe('Challenge1Component', () => {
  let component: Challenge1Component;
  let fixture: ComponentFixture<Challenge1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Challenge1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
