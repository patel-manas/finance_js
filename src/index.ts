/**
 * Calculate Debt-to-Income (DTI) ratio.
 * @param {number} totalMonthlyDebtPayments - Total monthly debt payments.
 * @param {number} totalMonthlyIncome - Total monthly income.
 * @returns {string} The DTI ratio as a percentage string.
 */
export function calculateDTI(totalMonthlyDebtPayments: number, totalMonthlyIncome: number): string {
    return (totalMonthlyDebtPayments / totalMonthlyIncome * 100).toFixed(2);
 }
 
 /**
  * Implement Debt Snowball method.
  * @param {Array<{name: string; balance: number}>} debts - Array of debts with their names and balances.
  * @returns {Array<{name: string; balance: number}>} Array of debts sorted by balance in ascending order.
  */
 export function debtSnowball(debts: { name: string; balance: number }[]): { name: string; balance: number }[] {
    debts.sort((a, b) => a.balance - b.balance);
    return debts;
 }
 
 /**
  * Implement Debt Avalanche method.
  * @param {Array<{name: string; balance: number; interestRate: number}>} debts - Array of debts with their names, balances, and interest rates.
  * @returns {Array<{name: string; balance: number; interestRate: number}>} Array of debts sorted by interest rate in descending order.
  */
 export function debtAvalanche(debts: { name: string; balance: number; interestRate: number }[]): { name: string; balance: number; interestRate: number }[] {
    debts.sort((a, b) => b.interestRate - a.interestRate);
    return debts;
 }
 
 /**
  * Calculate EMI (Equated Monthly Installment) for a loan.
  * @param {number} principal - Principal loan amount.
  * @param {number} annualInterestRate - Annual interest rate (in percentage).
  * @param {number} tenureInYears - Loan tenure in years.
  * @returns {string} The EMI amount as a string with 2 decimal places.
  */
 export function calculateEMI(principal: number, annualInterestRate: number, tenureInYears: number): string {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const totalMonths = tenureInYears * 12;
    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    return emi.toFixed(2);
 }
 
 /**
  * Calculate lump sum returns without considering inflation.
  * @param {number} principalAmount - Principal investment amount.
  * @param {number} durationInYears - Duration of investment in years.
  * @param {number} expectedRoi - Expected rate of return (annual).
  * @returns {string} Total lump sum returns without considering inflation as a string with 2 decimal places.
  */
 export function lumpSumReturns(principalAmount: number, durationInYears: number, expectedRoi: number): string {
    const totalAmount = principalAmount * Math.pow((1 + expectedRoi), durationInYears);
    return totalAmount.toFixed(2);
 }
 

 /**
 * Calculate lump sum returns considering inflation.
 * @param {number} principalAmount - Principal investment amount.
 * @param {number} durationInYears - Duration of investment in years.
 * @param {number} expectedRoi - Expected rate of return (annual).
 * @param {number} [inflationRate=0.06] - Inflation rate (annual). Defaults to 6%.
 * @returns {string} Total lump sum returns considering inflation as a string with 2 decimal places.
 */
export function lumpSumReturnsWithInflation(principalAmount: number, durationInYears: number, expectedRoi: number, inflationRate: number = 0.06): string {
    const totalAmount = principalAmount * Math.pow((1 + expectedRoi - inflationRate), durationInYears);
    return totalAmount.toFixed(2);
 }
 
 /**
  * Calculate returns for SIP (Systematic Investment Plan) without considering inflation.
  * @param {number} monthlyPayment - Monthly payment for SIP.
  * @param {number} months - Duration of SIP in months.
  * @param {number} expectedRoi - Expected rate of return (annual).
  * @returns {string} Total returns for SIP as a string with 2 decimal places.
  */
 export function sipReturns(monthlyPayment: number, months: number, expectedRoi: number): string {
    let totalAmount = 0;
    for (let i = 0; i < months; i++) {
        totalAmount += monthlyPayment;
        totalAmount *= (1 + expectedRoi / 12); // Divide by 12 for monthly compounding
    }
    return totalAmount.toFixed(2);
 }
 
 /**
  * Calculate returns for SIP (Systematic Investment Plan) considering inflation.
  * @param {number} monthlyPayment - Monthly payment for SIP.
  * @param {number} months - Duration of SIP in months.
  * @param {number} expectedRoi - Expected rate of return (annual).
  * @param {number} [inflationRate=0.06] - Inflation rate (annual). Defaults to 6%.
  * @returns {string} Total returns for SIP considering inflation as a string with 2 decimal places.
  */
 export function sipReturnsWithInflation(monthlyPayment: number, months: number, expectedRoi: number, inflationRate: number = 0.06): string {
    let totalAmount = 0;
    for (let i = 0; i < months; i++) {
        totalAmount += monthlyPayment;
        totalAmount *= (1 + (expectedRoi - inflationRate) / 12); // Adjusted for inflation
    }
    return totalAmount.toFixed(2);
 }
 
 /**
  * Calculate future value of an investment without considering inflation.
  * @param {number} principalAmount - Principal investment amount.
  * @param {number} durationInYears - Duration of investment in years.
  * @param {number} expectedRoi - Expected rate of return (annual).
  * @returns {string} Future value of investment without considering inflation as a string with 2 decimal places.
  */
 export function futureValueWithoutInflation(principalAmount: number, durationInYears: number, expectedRoi: number): string {
    const totalAmount = principalAmount * Math.pow((1 + expectedRoi), durationInYears);
    return totalAmount.toFixed(2);
 }
 
 /**
  * Calculate future value of an investment considering inflation.
  * @param {number} principalAmount - Principal investment amount.
  * @param {number} durationInYears - Duration of investment in years.
  * @param {number} expectedRoi - Expected rate of return (annual).
  * @param {number} [inflationRate=0.06] - Inflation rate (annual). Defaults to 6%.
  * @returns {string} Future value of investment considering inflation as a string with 2 decimal places.
  */
 export function futureValueWithInflation(principalAmount: number, durationInYears: number, expectedRoi: number, inflationRate: number = 0.06): string {
    const totalAmount = principalAmount * Math.pow((1 + expectedRoi - inflationRate), durationInYears);
    return totalAmount.toFixed(2);
 }

 
 /**
 * Calculate present value of an investment without considering inflation.
 * @param {number} futureAmount - Future value of investment.
 * @param {number} durationInYears - Duration of investment in years.
 * @param {number} expectedRoi - Expected rate of return (annual).
 * @returns {string} Present value of investment without considering inflation as a string with 2 decimal places.
 */
export function presentValueWithoutInflation(futureAmount: number, durationInYears: number, expectedRoi: number): string {
    const presentValue = futureAmount / Math.pow((1 + expectedRoi), durationInYears);
    return presentValue.toFixed(2);
 }
 
 /**
  * Calculate present value of an investment considering inflation.
  * @param {number} futureAmount - Future value of investment.
  * @param {number} durationInYears - Duration of investment in years.
  * @param {number} expectedRoi - Expected rate of return (annual).
  * @param {number} [inflationRate=0.06] - Inflation rate (annual). Defaults to 6%.
  * @returns {string} Present value of investment considering inflation as a string with 2 decimal places.
  */
 export function presentValueWithInflation(futureAmount: number, durationInYears: number, expectedRoi: number, inflationRate: number = 0.06): string {
    const presentValue = futureAmount / Math.pow((1 + expectedRoi - inflationRate), durationInYears);
    return presentValue.toFixed(2);
 }
 
 /**
  * Calculate additional savings needed for retirement savings goal.
  * @param {number} monthlyExpenses - Monthly living expenses during retirement.
  * @param {number} yearsUntilRetirement - Number of years until retirement.
  * @param {number} annualReturnRate - Expected annual return rate (percentage).
  * @param {number} currentSavings - Current savings for retirement.
  * @returns {string} Additional savings needed for retirement as a string with 2 decimal places.
  */
 export function retirementSavingsGoal(monthlyExpenses: number, yearsUntilRetirement: number, annualReturnRate: number, currentSavings: number): string {
    const months = yearsUntilRetirement * 12;
    const monthlyReturnRate = annualReturnRate / 12 / 100;
    const futureValue = monthlyExpenses * ((Math.pow(1 + monthlyReturnRate, months) - 1) / monthlyReturnRate) * (1 + monthlyReturnRate);
    const additionalSavingsNeeded = futureValue - currentSavings;
    return additionalSavingsNeeded.toFixed(2);
 }
 
 /**
  * Calculate safe withdrawal rate for retirement.
  * @param {number} retirementSavings - Total retirement savings.
  * @param {number} retirementYears - Number of years expected to be in retirement.
  * @param {number} annualExpenses - Annual expenses during retirement.
  * @returns {string} Safe withdrawal rate for retirement as a percentage string with 2 decimal places.
  */
 export function safeWithdrawalRate(retirementSavings: number, retirementYears: number, annualExpenses: number): string {
    const withdrawalRate = annualExpenses / retirementSavings;
    const safeWithdrawalRate = withdrawalRate * 100;
    return safeWithdrawalRate.toFixed(2);
 }
 