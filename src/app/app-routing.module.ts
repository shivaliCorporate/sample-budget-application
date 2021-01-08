import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBudgetsComponent } from './budget/all-budgets/all-budgets.component';
import { BudgetDetailsComponent } from './budget/budget-details/budget-details.component';



// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       // { path: '', component: AllBudgetsComponent, data: { title: 'Home' } },
//       {
//         path: 'all-budgets',
//         component: AllBudgetsComponent,
//         data: { title: 'Add Income' }
//       },


//       {
//         path: 'budget-details',
//         component: BudgetDetailsComponent,
//         data: { title: 'Add Income' }
//       }
//     ]
//   }
// ];

export const routes: Routes = [
  { path: '', redirectTo: '/budget', pathMatch: 'full' },
  {
    path: 'budget',
    loadChildren: () => import('src/app/budget/budget.module').then(m => m.BudgetModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
