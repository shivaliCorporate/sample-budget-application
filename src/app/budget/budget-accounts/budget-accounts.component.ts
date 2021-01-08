import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-accounts',
  templateUrl: './budget-accounts.component.html',
  styleUrls: ['./budget-accounts.component.scss']
})
export class BudgetAccountsComponent implements OnInit {
  public budgetData: any;
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {

    this.budgetData = history.state.data;
  }

  addAccount() {
    this.budgetService.addAccount(this.budgetData.id, {
      name: 'shvai',
      type: 'savings',
      balance: 780
    }).subscribe(res => this.budgetData.accounts.push(res));
  }




}
