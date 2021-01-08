import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-all-budgets',
  templateUrl: './all-budgets.component.html',
  styleUrls: ['./all-budgets.component.scss']
})
export class AllBudgetsComponent implements OnInit {

  public budgetData: any;

  constructor(private budgetService: BudgetService,) { }

  ngOnInit(): void {
    this.budgetService.getTotalBudgets().subscribe(data => {
      this.budgetData = data;
    })
  }

  calculateDiff(sentDate: any) {
    var date1: any = new Date(sentDate);
    var currentDate: any = new Date();
    var diffDays: any = Math.floor((currentDate - date1) / (1000 * 60 * 60 * 24));

    return diffDays;
  }



}
