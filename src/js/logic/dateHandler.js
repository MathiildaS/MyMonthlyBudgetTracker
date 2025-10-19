/**
 * @file A module for the DateHandler class. Collects and returns the current month, year, day of month and remaining days of month.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class DateHandler {
  /**
   * Returns the year and month of the current date. 
   *
   * @returns {number} The current year - The name of the current month
   */
  getCurrentYearMonth() {
    return `${this.#getCurrentYear()}-${this.#getCurrentNameOfMonth()}`
  }

  /**
   * Returns the remaining days of the month based on the current date. 
   *
   * @returns {number} The amount of days remaining in current month.
   */
  getRemainingDaysOfMonth() {
    const daysOfMonth = this.#getDaysInCurrentMonth()
    const dayOfToday = this.#getCurrentDayOfMonth()

    const remainingDaysOfMonth = Math.max(daysOfMonth - dayOfToday, 0)
    return remainingDaysOfMonth
  }

  #getCurrentDate() {
    return new Date()
  }

  #getCurrentYear() {
    let currentYear = this.#getCurrentDate().getFullYear()
    return currentYear
  }

  #getCurrentMonth() {
    return this.#getCurrentDate().getMonth() + 1
  }

  #getCurrentDayOfMonth() {
    return this.#getCurrentDate().getDate()
  }

  #getCurrentNameOfMonth() {
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

    let nameOfCurrentMonth = month[this.#getCurrentMonth() - 1]
    return nameOfCurrentMonth
  }

  #getDaysInCurrentMonth() {
    const daysInMonth = [
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ]

    return daysInMonth[this.#getCurrentMonth() - 1]
  }
}
