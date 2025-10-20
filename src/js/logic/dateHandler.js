/**
 * @file A module for the DateHandler class. Collects and returns the current month, year, day of month and remaining days of month.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class DateHandler {
  /**
   * @returns {string} The current year and the name of the current month.
   */
  getCurrentYearMonthString() {
    return `${this.#getCurrentYear()}-${this.#getNameOfCurrentMonth()}`
  }

  /**
   * @returns {number} The amount of days remaining in current month based on the date of today.
   */
  getRemainingDaysOfCurrentMonth() {
    const daysOfMonth = this.#getDaysInCurrentMonth()
    const dayOfToday = this.#getCurrentDayOfMonth()

    const remainingDaysOfCurrentMonth = Math.max(daysOfMonth - dayOfToday, 0)
    return remainingDaysOfCurrentMonth
  }

  /**
   * @returns {Date} - A Date object with the date and time of today and now.
   */
  #getCurrentDate() {
    return new Date()
  }

  /**
   * @returns {number} - The current year of the date of today e.g. 2025.
   */
  #getCurrentYear() {
    const currentYear = this.#getCurrentDate().getFullYear()
    return currentYear
  }

  /**
   * @returns {number} - The current month of the date of today, between 1-12 e.g. 10 for October.
   */
  #getCurrentMonth() {
    return this.#getCurrentDate().getMonth() + 1
  }

  /**
   * @returns {number} - The current day in the month of the date of today between 1-31.
   */
  #getCurrentDayOfMonth() {
    return this.#getCurrentDate().getDate()
  }

  /**
   * @returns {string} - The name of the current month e.g "October"
   */
  #getNameOfCurrentMonth() {
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

  /**
   * @returns {number} - The amount of days in current month e.g. 31 for the month "October" 
   */
  #getDaysInCurrentMonth() {
    const daysInMonth = {
      January: 31,
      February: 28,
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31
    }

    return daysInMonth[this.#getNameOfCurrentMonth()]
  }
}
