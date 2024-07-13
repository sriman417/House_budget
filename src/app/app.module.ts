import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SummaryComponent } from './summary/summary.component';
import { BudgetService } from './budget.service';
import { CreditComponent } from './credit/credit.component';
import { CreditListComponent } from './credit-list/credit-list.component';




@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    BudgetListComponent,
    SummaryComponent,
    CreditComponent,
    CreditListComponent,


  
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
