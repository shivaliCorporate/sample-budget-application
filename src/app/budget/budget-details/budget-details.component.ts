import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BudgetDetails } from '../models/budget-details.model';
import { BudgetMonth } from '../models/budget-month.model';
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
  public select: any;


  constructor(private budgetService: BudgetService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.budgetService.getBudgetData(queryParams['data']).subscribe((data: BudgetDetails) => {
          this.budgetData = data.budget;
          this.budgetMonths = this.budgetData.months;
          this.select = this.budgetMonths[0].month;

          this.budgetData.months.forEach((element: any) => {
            var result = element.categories.reduce(function (r: any, a: any) {
              r[a.category_grp_name] = r[a.category_grp_name] || [];
              r[a.category_grp_name].push(a);
              return r;
            }, {});


            const mapped = Object.keys(result).map(key => ({ type: key, value: result[key] }));

            element.categories = mapped;
          });
          this.selectChange(this.select);
        })

      }
    );



  }

  selectChange(event: any) {

    if (this.budgetMonths) {
      this.budgetMonths.forEach((element: BudgetMonth) => {


        if (event == element.month || (event.target && event.target.value === element.month)) {

          this.selectedMonth = element;
        }
      });
    }

  }



}
