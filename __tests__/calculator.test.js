const CalculatorModule = require('../Calculator.js');
const CalculatorModuleOld = require('../CalculatorOld.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
     calculatorOld = new CalculatorModuleOld();
  });

  it('test', () => {
    const oldPrice = 100;
    const newPrice = 300;
    const dueDate = '2025-04-15';
    const recurrencyType = 'MONTHLY';
    const result = calculatorOld.calculateProportionalDifferencePrice(oldPrice, newPrice, dueDate, recurrencyType);
    expect(-1509.6774193548388).toBe(result);
  })

  it('função formatada funcionando com os mesmos parâmetros anteriores', () => {
    calculator = new CalculatorModule(100, 300, '2025-04-15', 'MONTHLY');
    const result = calculator.calculateProportionalDifferencePrice();
    expect(-1509.6774193548388).toBe(result);
  })

  it('DaysLeft <= 0', () => {
    calculator = new CalculatorModule(100, 300, new Date().setMonth(new Date().getMonth() + 1), 'MONTHLY');
    const result = calculator.calculateProportionalDifferencePrice();
    expect(200).toBe(result);
  })

  it('RemainingDays > 0', () => {
    const today = new Date(); // digamos 17/09/2025
    const dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);
    calculator = new CalculatorModule(100, 300, dueDate, 'MONTHLY');
    const result = calculator.calculateProportionalDifferencePrice();
    expect(58.064516129032256).toBe(result);
  })
});
