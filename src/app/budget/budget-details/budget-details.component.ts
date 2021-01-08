import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss']
})
export class BudgetDetailsComponent implements OnInit {

  public budgetData: any;
  public budgetMonths: any;
  public selectedMonth: any;
  public select: any = 1 - 2 - 21;


  constructor(private budgetService: BudgetService,) { }

  ngOnInit(): void {
    this.budgetService.getBudgetData(history.state.data).subscribe(data => {
      this.budgetData = data.data.budget;
      this.budgetMonths = this.budgetData.months;

      this.budgetData.months.forEach((element: any) => {
        var result = element.categories.reduce(function (r: any, a: any) {
          r[a.category_grp_name] = r[a.category_grp_name] || [];
          r[a.category_grp_name].push(a);
          return r;
        }, {});
        console.log(result)
        element.categories = result;

      });

      console.log(23, data)
    })
  }

  selectChange(event: any) {
    this.budgetMonths.forEach((element: any) => {
      if (event.target.value === element.month) {
        this.selectedMonth = element;
      }
    });
    console.log(event.target.value)
  }



}
