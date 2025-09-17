const { RecurrencyType } = require("./RecurrencyType");

class Monthly extends RecurrencyType {
  getMonth() {
    return 1;
  }
}
module.exports = Monthly;