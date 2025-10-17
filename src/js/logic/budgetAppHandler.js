/**
 * @file A module for the BudgetAppHandler.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetAppHandler {
  #dateHandler
  #parser

  #yearMonthKey
  #currency = 'KR'
  #addedBudget = 0
  #addedExpense
  #editedExpense
  #editedExpenseIndex
  #collectedExpenses
  #remainingValue

  constructor(dateHandler, parser) {
    this.#dateHandler = dateHandler
    this.#parser = parser

    this.#yearMonthKey = this.#dateHandler.getCurrentYearMonth()
  }

  setBudget(budgetAddedEvent) {
    this.#addedBudget = this.#parser.parseValueToNumber(budgetAddedEvent.detail.budget)
    this.#currency = budgetAddedEvent.detail.currency
  }

  getBudget() {
    const budget = this.#addedBudget
    const currency = this.#currency
    return { budget, currency }
  }

  getYearMonth() {
    return this.#yearMonthKey
  }
}