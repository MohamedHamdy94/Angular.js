import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCardsComponent } from './next-cards.component';

describe('NextCardsComponent', () => {
  let component: NextCardsComponent;
  let fixture: ComponentFixture<NextCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
