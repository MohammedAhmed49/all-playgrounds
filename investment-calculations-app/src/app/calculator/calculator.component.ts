import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { AnnualData, InvestmentData } from './calculator.model';
import { calculateInvestmentResults } from '../../investment-results';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [UserInputComponent, InvestmentResultsComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  calculatorData: AnnualData[] = [];
  onCalculate = (investmentData: InvestmentData) => {
    this.calculatorData = calculateInvestmentResults(investmentData);
  };
}
