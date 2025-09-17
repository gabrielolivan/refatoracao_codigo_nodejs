const { RecurrencyType } = require("./RecurrencyType");

class SemiAnnual extends RecurrencyType {
  getMonth() {
    return 6;
  }
}
module.exports = SemiAnnual;