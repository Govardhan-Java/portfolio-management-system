import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent {

  investment = { name: '', amount: 0 };

  constructor(private portfolioService: PortfolioService) { }

  addInvestment(): void {
    this.portfolioService.addInvestment(this.investment).subscribe(() => {
      alert('Investment added!');
    });
  }
}
