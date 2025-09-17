class RecurrencyType {
  getMonth() {
    throw new Error("Not implemented");
  }
}

const createRecurrencyType = (type) => {
  const Monthly = require("./Monthly");
  const SemiAnnual = require("./SemiAnnual");
  const Yearly_Splited = require("./YearlySplited");

  switch (type) {
    case "MONTHLY":
      return new Monthly();
    case "SEMIANNUAL":
      return new SemiAnnual();
    case "YEARLY":
    case "YEARLY_SPLITED":
      return new Yearly_Splited();
    default:
      throw new Error("Unknown recurrence type");
  }
}

module.exports = { RecurrencyType, createRecurrencyType };