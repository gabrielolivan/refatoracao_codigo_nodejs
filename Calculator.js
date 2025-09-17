const { createRecurrencyType } =  require("./RecurrencyType");
const DateUtils = require("./dateUtils");


class Calculator {

  constructor(oldPrice, newPrice, dueDate, recurrencyType) {
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
    this.dueDate = dueDate;
    this.recurrencyType = createRecurrencyType(recurrencyType);
  }

  getStartDate() {
    const startDate = new Date(this.dueDate);
    startDate.setMonth(startDate.getMonth() - this.recurrencyType.getMonth());
    return startDate;
  }

  calculateProportionalDifferencePrice() {
    const startDate = this.getStartDate();
    const today = new Date();
    const daysLeft = DateUtils.daysBetween(startDate, today);

    if (daysLeft <= 0) {
      return this.newPrice - this.oldPrice;
    }

    const totalPlanDays = DateUtils.daysBetween(startDate, new Date(this.dueDate));
    const remainingDays = totalPlanDays - daysLeft;

    const oldPriceByDay = this.oldPrice / totalPlanDays;
    const alreadyPaid = oldPriceByDay * remainingDays;

    const newPriceByDay = this.newPrice / totalPlanDays;
    const newAmountRemaining = newPriceByDay * remainingDays;

    if (remainingDays > 0)
      return newAmountRemaining - alreadyPaid;

    return newAmountRemaining;
  }
}

module.exports = Calculator;