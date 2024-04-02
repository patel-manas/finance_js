# Financial Utilities Library

This library provides a collection of utility functions for various financial calculations such as debt management, investment analysis, retirement planning, and more.

## Installation

You can install this library via npm:

```bash
npm i personal-finance-calculator
```

## Usage

```javascript
// Import individual functions as needed
const { calculateDTI, debtSnowball, debtAvalanche, sipReturns, lumpSumReturns } = require('financial-utils');

// Calculate Debt-to-Income (DTI) ratio
const dtiRatio = calculateDTI(1500, 5000);
console.log("Debt-to-Income (DTI) ratio:", dtiRatio + "%");

// Implement Debt Snowball method
const debtsSnowball = [
   { name: "Credit Card A", balance: 5000 },
   { name: "Credit Card B", balance: 2500 },
   { name: "Personal Loan", balance: 10000 }
];
const snowballOrder = debtSnowball(debtsSnowball);
console.log("Debt Snowball order:", snowballOrder.map(debt => debt.name));

// Implement Debt Avalanche method
const debtsAvalanche = [
   { name: "Student Loan", balance: 15000, interestRate: 0.06 },
   { name: "Car Loan", balance: 10000, interestRate: 0.08 },
   { name: "Credit Card", balance: 5000, interestRate: 0.18 }
];
const avalancheOrder = debtAvalanche(debtsAvalanche);
console.log("Debt Avalanche order:", avalancheOrder.map(debt => debt.name));

// Calculate SIP (Systematic Investment Plan) returns
const sipReturnsAmount = sipReturns(1000, 12, 0.08);
console.log("Total SIP returns after 12 months:", sipReturnsAmount);

// Calculate lump sum returns
const lumpSumReturnsAmount = lumpSumReturns(10000, 5, 0.08);
console.log("Total lump sum returns after 5 years:", lumpSumReturnsAmount);
```

## Documentation

- [API Reference](#) - Detailed documentation for all available functions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any new features, improvements, or bug fixes.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
