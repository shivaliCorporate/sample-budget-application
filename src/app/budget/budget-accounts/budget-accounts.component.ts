import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-accounts',
  templateUrl: './budget-accounts.component.html',
  styleUrls: ['./budget-accounts.component.scss']
})
export class BudgetAccountsComponent implements OnInit {
  public budgetData: any;
  constructor(private budgetService: BudgetService) { }
  accountForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    balance: new FormControl(''),
  });
  ngOnInit(): void {

    this.budgetData = history.state.data;
  }

  addAccount() {
    var accountModel: {
      name: string,
      type: string,
      balance: number
    }

    this.budgetService.addAccount(this.budgetData.id, {
      name: this.accountForm.controls.name.value,
      type: this.accountForm.controls.type.value,
      balance: this.accountForm.controls.balance.value
    }).subscribe(res => this.budgetData.accounts.push(res));
  }




}
