import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBudgetsComponent } from './all-budgets/all-budgets.component';
import { BudgetAccountsComponent } from './budget-accounts/budget-accounts.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { PayeeTransacionsComponent } from './payee-transacions/payee-transacions.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AllBudgetsComponent, data: { title: 'Home' } },
      {
        path: 'all-budgets',
        component: AllBudgetsComponent,
        data: { title: 'All Budget' }
      },
      {
        path: 'budget-details',
        component: BudgetDetailsComponent

      },
      {
        path: 'accounts',
        component: BudgetAccountsComponent

      },
      {
        path: 'payees',
        component: PayeeTransacionsComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
