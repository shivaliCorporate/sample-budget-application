import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Account {
  name: string;
  type: string;
  balance: number;

}


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private totalBudgetsUrl = 'https://api.youneedabudget.com/v1/budgets';
  private budgetsUrl = 'https://api.youneedabudget.com/v1/budgets/';




  constructor(private http: HttpClient) { }

  getTotalBudgets() {
    return this.http
      .get(this.totalBudgetsUrl);

  }

  getBudgetData(budgetId: any) {
    return this.http
      .get(`${this.budgetsUrl}/${budgetId}`).pipe(map(res => {
        console.log(res)
        return this.modelMapper(res);
      }))


  }
  modelMapper(res: any) {
    res.data.budget.months.forEach((month: any) => {
      month.categories.forEach((cat: any) => {
        res.data.budget.category_groups.forEach((cat_group: any) => {
          if (cat.category_group_id == cat_group.id) {
            cat.category_grp_name = cat_group.name;
          }
        });

      });
    });
    res.data.budget.transactions.forEach((trans: any) => {

      res.data.budget.accounts.forEach((account: any) => {
        if (trans.account_id == account.id) {
          trans.account_name = account.name;
        }
      });
      res.data.budget.payees.forEach((payees: any) => {
        if (trans.payee_id == payees.id) {
          trans.payee_name = payees.name;
        }
      });

      //   // res.data.budget.payees.forEach((payees: any) => {
      //   //   if (trans.payee_id == payees.id) {
      //   //     trans.payee_name = payees.name;
      //   //   }
      //   // });
      //   // if (res.data.budget.category_groups.id.includes(cat.category_group_id)) {
      //   //   cat.category_group_name = res.data.budget.category_groups.id.indexOf(cat.category_group_id)
      //   // }

    });
    return res
  }

  addAccount(id: string, event: Account): Observable<Account> {
    return this.http.post<Account>(`${this.totalBudgetsUrl}/${id}/accounts`, { account: event });
  }
}
