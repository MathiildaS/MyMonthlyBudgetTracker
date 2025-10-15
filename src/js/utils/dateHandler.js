export class DateHandler {

  getCurrentDate() {
    return new Date()
  }

  getCurrentMonth() {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    let nameOfCurrentMonth = month[this.getCurrentDate().getMonth()]
    return nameOfCurrentMonth
  }

  getCurrentYear() {
    let currentYear = this.getCurrentDate().getFullYear()
    return currentYear
  }

  getCurrentYearMonth() {
    return `${this.getCurrentYear()}-${this.getCurrentMonth()} `
  }
}
