const DateUtils = require('../dateUtils.js');



describe('DateUtils', () => {
  it('Retornar a quantidade de dias entre duas datas', () => {
    const date1 = new Date('2025-09-10');
    const date2 = new Date('2025-09-16');
    
    const result = DateUtils.daysBetween(date2, date1);
    expect(6).toBe(result);
  })
})