import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalExpenses = 0;
  totalCredit = 0;
  savings = 0;
  budgetService: BudgetService;

  constructor(budgetService: BudgetService) {
    this.budgetService = budgetService;
  }

  ngOnInit(): void {
    this.totalExpenses = this.budgetService.getTotalAmount();
    this.totalCredit = this.budgetService.getTotalCredit();
    this.savings = this.totalCredit - this.totalExpenses;
  }
}