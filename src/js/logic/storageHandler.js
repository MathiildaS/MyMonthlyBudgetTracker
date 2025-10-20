/**
 * @file A module for the StorageHandler. This class handles logic to save, delete and load data to and from localStorage.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class StorageHandler {

  /**
   * Saves a months budget in localStorage with the current year and month as key and a budget-object as value.
   *
   * @param {string} yearMonthKey - The current year and month as e.g. "2025-10"
   * @param {object} budgetPayload - The budget object containing budget, expenses and currency.
   * @throws {Error} - Throws error with custom userMessage if fail when storing the budget.
   */
  saveBudget(yearMonthKey, budgetPayload) {
    try {
      localStorage.setItem(yearMonthKey, JSON.stringify(budgetPayload))
    } catch (error) {
      console.error('An error occured when storing the budget in localStorage', error)
      error.userMessage = 'The budget could not be saved.'
      throw error
    }
  }

  /**
   * Loads a stred object from localStorage with the current year and month as provided key.
   *
   * @param {string} yearMonthKey - The current year and month as e.g. "2025-10"
   * @returns {boolean|object} false if no value or the budget object containing budget, expenses and currency.
   * @throws {Error} - Throws error with custom userMessage if fail when parsing the stored budget-object.
   */
  loadBudget(yearMonthKey) {
    const storedValues = localStorage.getItem(yearMonthKey)

    if (!storedValues) {
      return false
    } else {
      try {
        const parsedValues = JSON.parse(storedValues)
        return parsedValues
      } catch (error) {
        console.error('An error occurred when collecting stored values', error.message)
      error.userMessage = 'The saved budget could not be loaded.'
      throw error
      }
    }
  }

  /**
   *  Deletes a stored object from localStorage with the current year and month as provided key.
   *
   * @param {string} yearMonthKey - The current year and month as e.g. "2025-10"
   * @throws {Error} - Throws error with custom userMessage if fail when deleting the stored budget-object.
   */
  deleteStoredBudget(yearMonthKey) {
    try {
      localStorage.removeItem(yearMonthKey)
    } catch (error) {
      console.error('An error occurred when removing stored values', error.message)
      error.userMessage = 'The saved budget could not be deleted.'
      throw error
    }
  }
}