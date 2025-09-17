class DateUtils {
  static daysBetween(date1, date2) {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  }
}

module.exports = DateUtils;