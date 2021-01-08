import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAccountsComponent } from './budget-accounts.component';

describe('BudgetAccountsComponent', () => {
  let component: BudgetAccountsComponent;
  let fixture: ComponentFixture<BudgetAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
