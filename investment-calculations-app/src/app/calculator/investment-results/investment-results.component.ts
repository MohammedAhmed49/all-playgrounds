import { AnnualData } from './../calculator.model';
import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private calculatorService = inject(CalculatorService);

  get annualData() {
    return this.calculatorService.annualData;
  }
}
