import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BudgetDetails } from '../models/budget-details.model';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-payee-transacions',
  templateUrl: './payee-transacions.component.html',
  styleUrls: ['./payee-transacions.component.scss']
})
export class PayeeTransacionsComponent implements OnInit {

  public transactions: any;

  constructor(private route: ActivatedRoute, private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log(34, queryParams)
        this.budgetService.getPayeeTransactions(queryParams['budgetid'], queryParams['payeeid']).subscribe((data: any) => {
          console.log(666, data)
          this.transactions = data.data.transactions;
          console.log(909090, this.transactions)
        })
      }
    );
  }

}
