import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { BudgetService } from './services/budget.service';
import { BrowserModule } from '@angular/platform-browser';
import { BudgetRoutingModule } from './budget-routing.module';
import { AllBudgetsComponent } from './all-budgets/all-budgets.component';
import { BudgetAccountsComponent } from './budget-accounts/budget-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayeeTransacionsComponent } from './payee-transacions/payee-transacions.component';



@NgModule({
  declarations: [BudgetDetailsComponent, AllBudgetsComponent, BudgetAccountsComponent, PayeeTransacionsComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class BudgetModule { }
