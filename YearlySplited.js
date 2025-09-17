const { RecurrencyType } = require("./RecurrencyType");

class Yearly_Splited extends RecurrencyType {
  getMonth() {
    return 12;
  }
}
module.exports = Yearly_Splited;