/**
 * @file A module for the DateHandler class. Collects and returns the current month and year.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

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
    return `${this.getCurrentYear()}-${this.getCurrentMonth()}`
  }
}
