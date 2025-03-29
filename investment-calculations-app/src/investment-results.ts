// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { InvestmentData } from './app/calculator/calculator.model';

export function calculateInvestmentResults(investmentData: InvestmentData) {
  const annualData = [];
  let investmentValue = investmentData.initialInvestment;

  for (let i = 0; i < investmentData.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear =
      investmentValue * (investmentData.expectedReturn / 100);
    investmentValue += interestEarnedInYear + investmentData.annualInvestment;
    const totalInterest =
      investmentValue -
      investmentData.annualInvestment * year -
      investmentData.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: investmentData.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested:
        investmentData.initialInvestment +
        investmentData.annualInvestment * year,
    });
  }

  return annualData;
}
