const CalculatorModule = require('../Calculator.js');
const CalculatorModuleOld = require('../CalculatorOld.js');
const DateUtils = require('../dateUtils.js');
const Monthly = require('../Monthly.js');
const SemiAnnual = require('../SemiAnnual.js');
const Yearly_Splited = require('../YearlySplited.js');
const { RecurrencyType, createRecurrencyType } = require('../RecurrencyType.js');

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

describe('DateUtils', () => {
  it('Retornar a quantidade de dias entre duas datas', () => {
    const date1 = new Date('2025-09-10');
    const date2 = new Date('2025-09-16');
    
    const result = DateUtils.daysBetween(date2, date1);
    expect(6).toBe(result);
  })
})

describe('RecurrencyType', () => {
  it('RecurrencyType gera um erro por nao ter getMonth implementado', () => {
    const recurrencyType = new RecurrencyType();
    expect(() => recurrencyType.getMonth()).toThrow("Not implemented");
  })

  it('RecurrencyType gera um erro por nao ter getMonth implementado', () => {
    expect(() => createRecurrencyType()).toThrow("Unknown recurrence type");
  })

  it('Cria o recurrencyType corretamente para MONTHLY', () => {
    const result = createRecurrencyType('MONTHLY');
    expect(result).toBeInstanceOf(Monthly);
  })

  it('Cria o recurrencyType corretamente para SEMIANNUAL', () => {
    const result = createRecurrencyType('SEMIANNUAL');
    expect(result).toBeInstanceOf(SemiAnnual);
  })

  it('Cria o recurrencyType corretamente para YEARLY_SPLITED', () => {
    const result = createRecurrencyType('YEARLY_SPLITED');
    expect(result).toBeInstanceOf(Yearly_Splited);
  })

  it('Cria o recurrencyType corretamente para YEARLY', () => {
    const result = createRecurrencyType('YEARLY');
    expect(result).toBeInstanceOf(Yearly_Splited);
  })

  it('Retorna a quantidade de meses para o tipo Monthly', () => {
    const monthly = new Monthly();
    const result = monthly.getMonth();
    expect(1).toBe(result);
  })
  
  it('Retorna a quantidade de meses para o tipo SemiAnnual', () => {
    const semiAnnual = new SemiAnnual();
    const result = semiAnnual.getMonth();
    expect(6).toBe(result);
  })
  
  it('Retorna a quantidade de meses para o tipo Yearly_Splited', () => {
    const yearly_Splited = new Yearly_Splited();
    const result = yearly_Splited.getMonth();
    expect(12).toBe(result);
  })
})