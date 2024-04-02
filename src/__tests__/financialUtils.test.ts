import { 
    calculateDTI, debtSnowball, debtAvalanche, calculateEMI, lumpSumReturns , lumpSumReturnsWithInflation, sipReturns, sipReturnsWithInflation, 
    futureValueWithoutInflation, futureValueWithInflation,
    presentValueWithoutInflation, presentValueWithInflation, retirementSavingsGoal, safeWithdrawalRate 
} from '../financialUtils';

describe('calculateDTI', () => {
  it('calculates DTI correctly', () => {
    expect(calculateDTI(1500, 5000)).toEqual("30.00");
  });
});

describe('debtSnowball', () => {
  it('sorts debts by balance in ascending order', () => {
    const debts = [
      { name: "Credit Card A", balance: 5000 },
      { name: "Credit Card B", balance: 2500 },
      { name: "Personal Loan", balance: 10000 }
    ];
    expect(debtSnowball(debts)).toEqual([
      { name: "Credit Card B", balance: 2500 },
      { name: "Credit Card A", balance: 5000 },
      { name: "Personal Loan", balance: 10000 }
    ]);
  });
});

describe('debtAvalanche', () => {
  it('sorts debts by interest rate in descending order', () => {
    const debts = [
      { name: "Credit Card A", balance: 5000, interestRate: 0.18 },
      { name: "Credit Card B", balance: 2500, interestRate: 0.12 },
      { name: "Personal Loan", balance: 10000, interestRate: 0.06 }
    ];
    expect(debtAvalanche(debts)).toEqual([
      { name: "Credit Card A", balance: 5000, interestRate: 0.18 },
      { name: "Credit Card B", balance: 2500, interestRate: 0.12 },
      { name: "Personal Loan", balance: 10000, interestRate: 0.06 }
    ]);
  });
});

// describe('calculateEMI', () => {
//   it('calculates EMI correctly', () => {
//     const op = Math.floor(calculateEMI(100000, 10, 5))
//     expect(op).toEqual("2124");
//   });
// });

// describe('lumpSumReturns', () => {
//   it('calculates lump sum returns correctly', () => {
//     const op = Math.floor(lumpSumReturns(10000, 5, 0.08));
//     expect(op).toEqual("14693");
//   });
// });




describe.skip('lumpSumReturnsWithInflation', () => {
  it('calculates lump sum returns with inflation correctly', () => {
    expect(lumpSumReturnsWithInflation(10000, 5, 0.08, 0.06)).toEqual("12218.49");
  });
});

describe.skip('sipReturns', () => {
  it('calculates SIP returns correctly', () => {
    expect(sipReturns(1000, 12, 0.08)).toEqual("12682.55");
  });
});

describe.skip('sipReturnsWithInflation', () => {
  it('calculates SIP returns with inflation correctly', () => {
    expect(sipReturnsWithInflation(1000, 12, 0.08, 0.06)).toEqual("12545.52");
  });
});

describe.skip('futureValueWithoutInflation', () => {
  it('calculates future value without inflation correctly', () => {
    expect(futureValueWithoutInflation(10000, 5, 0.08)).toEqual("14693.48");
  });
});

describe.skip('futureValueWithInflation', () => {
  it('calculates future value with inflation correctly', () => {
    expect(futureValueWithInflation(10000, 5, 0.08, 0.06)).toEqual("12218.49");
  });
});


describe.skip('presentValueWithoutInflation', () => {
  it('calculates present value without inflation correctly', () => {
    expect(presentValueWithoutInflation(14693.48, 5, 0.08)).toEqual("10000.00");
  });
});

describe.skip('presentValueWithInflation', () => {
  it('calculates present value with inflation correctly', () => {
    expect(presentValueWithInflation(12218.49, 5, 0.08, 0.06)).toEqual("10000.00");
  });
});

describe.skip('retirementSavingsGoal', () => {
  it('calculates additional savings needed for retirement correctly', () => {
    expect(retirementSavingsGoal(2000, 30, 0.08, 100000)).toEqual("1297881.61");
  });
});

describe('safeWithdrawalRate', () => {
  it('calculates safe withdrawal rate for retirement correctly', () => {
    expect(safeWithdrawalRate(1000000, 30, 40000)).toEqual("4.00");
  });
});
