const Monthly = require('../Monthly.js');
const SemiAnnual = require('../SemiAnnual.js');
const Yearly_Splited = require('../YearlySplited.js');
const { RecurrencyType, createRecurrencyType } = require('../RecurrencyType.js');

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