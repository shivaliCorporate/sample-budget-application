import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BudgetDetails } from '../models/budget-details.model';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-accounts',
  templateUrl: './budget-accounts.component.html',
  styleUrls: ['./budget-accounts.component.scss']
})
export class BudgetAccountsComponent implements OnInit {
  public transactions: any;
  public budgetData: any;

  public accountTypes = ['checking', 'savings', 'creditCard', 'cash', 'lineOfCredit', 'otherAsset', 'otherLiability']
  constructor(private budgetService: BudgetService, private fb: FormBuilder, private route: ActivatedRoute) { }
  accountForm = this.fb.group({


    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    type: new FormControl('', Validators.required),
    balance: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
  });

  @ViewChild('closebutton') closebutton: any;
  ngOnInit(): void {

    this.budgetService.activeProject.subscribe((data: any) => {
      this.transactions = data;


    })
    if (!this.transactions) {
      this.route.queryParams.subscribe(
        (queryParams: Params) => {
          this.budgetService.getBudgetData(queryParams['data']).subscribe((data: BudgetDetails) => {
            this.transactions = data.budget.transactions;
          })
        }
      );

    }
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
    }).subscribe(res => {
      this.budgetData.accounts.push(res.data.account)
      this.budgetService.getTransactions(this.budgetData.id).subscribe((data: any) => {
        this.transactions = data.data.transactions;
      });
      this.closebutton.nativeElement.click();
    });



  }




}
