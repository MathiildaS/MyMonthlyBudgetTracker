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
  #addedBudgetAmount = 0
  #editedExpenseAmount
  #editedExpenseIndex
  #collectedExpenses = []
  #remainingValue

  constructor(dateHandler, parser) {
    this.#dateHandler = dateHandler
    this.#parser = parser

    this.#yearMonthKey = this.#dateHandler.getCurrentYearMonth()
  }

  setBudget(budgetAddedEvent) {
    const budget = budgetAddedEvent.detail.budget
    this.#addedBudgetAmount = this.#parser.parseValueToNumber(budget)
    this.#currency = budgetAddedEvent.detail.currency
  }

  getBudget() {
    const budget = this.#addedBudgetAmount
    const currency = this.#currency
    return { budget, currency }
  }

  addExpense(expenseAddedEvent) {
    const value = expenseAddedEvent.detail.expense
    const addedExpenseAmount = this.#parser.parseValueToNumber(value)

    const expense = {
      expense: addedExpenseAmount,
      currency: this.#currency,
      index: this.#collectedExpenses.length
    }

    this.addExpenseToCollection(expense)
  }

  addExpenseToCollection(expense) {
    this.#collectedExpenses.push(expense)
  }

  getAllAddedExpenses() {
    if (this.#collectedExpenses.length === 0) {
      return []
    }

    return this.#collectedExpenses
  }

  getRemainingOfBudget() {
    const { budget } = this.getBudget()
    let remainingValue = budget
    const collectionOfRemainingValues = []

    const allExpenses = this.getAllAddedExpenses()

    allExpenses.forEach(({ expense }) => {
      remainingValue -= expense
      collectionOfRemainingValues.push(remainingValue)
    })
    return collectionOfRemainingValues
  }

  getYearMonth() {
    return this.#yearMonthKey
  }

      storeBudgetAndExpenses() {
        const { budget, currency } = this.getBudget()
      const budgetAndExpensesToStore = {
        budget: budget,
        expenses: this.#collectedExpenses,
        currency: currency,
      }
      localStorage.setItem(this.#yearMonthKey, JSON.stringify(budgetAndExpensesToStore))
    }

        removeStoredBudgetAndExpenses() {
      localStorage.removeItem(this.#yearMonthKey)
      this.#addedBudgetAmount = 0
      this.#collectedExpenses = []
    }

    editExpense(expenseEditedEvent) {
      const value = expenseEditedEvent.detail.expense
      const index = expenseEditedEvent.detail.index

 this.#editedExpenseAmount = Number(value)
        this.#editedExpenseIndex = Number(index)
        this.#collectedExpenses[this.#editedExpenseIndex] = this.#editedExpenseAmount
    }
}