import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { AnnualData, InvestmentData } from './calculator.model';
import { calculateInvestmentResults } from '../../investment-results';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [UserInputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  calculatorData: AnnualData[] = [];
  onCalculate = (investmentData: InvestmentData) => {
    this.calculatorData = calculateInvestmentResults(investmentData);
    console.log(this.calculatorData);
  };
}
