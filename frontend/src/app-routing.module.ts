import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';

const routes: Routes = [
  { path: 'investments', component: InvestmentListComponent },
  { path: 'add-investment', component: AddInvestmentComponent },
  { path: '', redirectTo: '/investments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }