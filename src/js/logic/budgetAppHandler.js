/**
 * @file A module for the BudgetAppHandler. This class is responsible for the internal logic of the application.
 * This includes keeping track of budget, expenses, remaining value of budget and a daily allowance and also handles storage management through the StorageHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates and initializes an instance of the class BudgetAppHandler with an instance of DateHandler and StorageHandler classes to
 * help manage date logic and storage logic.
 */
export class BudgetAppHandler {
  #dateHandler
  #storageHandler

  #budgetCurrency = 'KR'
  #budgetAmount = 0
  #collectedExpenses = []

  constructor(dateHandler, storageHandler) {
    this.#dateHandler = dateHandler
    this.#storageHandler = storageHandler
  }

  /**
   * Sets the state of the amount and currency of the budget.
   *
   * @param {number} budgetAmount - The parsed and validated budget value of the month.
   * @param {string} budgetCurrency - The currency of the budget.
   */
  setBudget(budgetAmount, budgetCurrency) {
    this.#budgetAmount = budgetAmount
    this.#budgetCurrency = budgetCurrency
  }

  /**
   * @returns {object} - The current amount and currency of the budget.
   */
  getBudget() {
    const budget = {
      budgetAmount: this.#budgetAmount,
      currency: this.#budgetCurrency
    }
    return budget
  }

  /**
   * Adds an expense to the collection of expenses. 
   *
   * @param {number} - The amount of the expense.
   */
  addExpense(expenseAmount) {
    const amount = expenseAmount

    const expense = {
      expenseAmount: amount,
      currency: this.#budgetCurrency,
      index: this.#collectedExpenses.length
    }

    this.#addExpenseToExpenses(expense)
  }

  /**
   * @returns {Array} - The collection of all added expenses.
   */
  getAllAddedExpenses() {
    if (this.#collectedExpenses.length === 0) {
      return []
    }
    return this.#collectedExpenses
  }

  /**
   * Updates the amount value of an added expense.
   *
   * @param {number} expenseAmount - The new expense amount value.
   * @param {number} expenseIndex - The index of the expense to be updated.
   */
  editExpense(expenseAmount, expenseIndex) {
    this.#collectedExpenses[expenseIndex].expenseAmount = expenseAmount
  }

  /**
   * Removes an expense from given index and updates the indexation of the expenses in the collection of expenses.
   *
   * @param {number} expenseIndex - The index of the expense to be deleted.
   */
  deleteExpense(expenseIndex) {
    this.#collectedExpenses.splice(expenseIndex, 1)

    this.#updateIndexOfExpenses()
  }

  /**
   * Substracts each expense from the budget and collects each remaining value of the budget.
   *
   * @returns {Array} - The collection of all remaining values.
   */
  getRemainingValuesOfBudget() {
    const { budgetAmount } = this.getBudget()
    let remainingValue = budgetAmount
    const remainingValues = []

    const allExpenses = this.getAllAddedExpenses()

    allExpenses.forEach(({ expenseAmount }) => {
      remainingValue -= expenseAmount
      remainingValues.push(remainingValue)
    })
    return remainingValues
  }

  /**
   * @returns {string} - The current year and month e.g. "2025-October"
   */
  getYearMonth() {
    return this.#dateHandler.getCurrentYearMonthString()
  }

  /**
   * Saves the budget with a created key-value pair through the StorageHandler-instance.
   */
  storeBudgetAndExpenses() {
    const { yearMonthKey, budgetPayload } = this.#createBudgetPayload()
    this.#storageHandler.saveBudget(yearMonthKey, budgetPayload)
  }

  /**
   * Creates the key-value pair used when storing the current budget. 
   *
   * @returns {object} - The key and budget payload containing budget, expenses and currency.
   */
  #createBudgetPayload() {
    const yearMonthKey = this.getYearMonth()
    const { budgetAmount, currency } = this.getBudget()
    const budgetPayload = {
      budget: budgetAmount,
      expenses: this.#collectedExpenses,
      currency: currency
    }
    return { yearMonthKey, budgetPayload }
  }

  /**
   * Deletes the key created for current month through the StorageHandler-instance.
   */
  removeStoredAndResetBudget() {
    this.#storageHandler.deleteStoredBudget(this.getYearMonth())
    this.#setDefaultBudget()
  }

  /**
   * Loads existing, saved budget. Updates the state with stored budget-values if existing.
   *
   * @returns {object} - The budget payload with default values or stored values.
   */
  getStoredBudgetAndExpenses() {
    const storedBudget = this.#loadBudgetWithKey()
    let storedBudgetPayload = {}

    if (!storedBudget) {
      storedBudgetPayload = {
        budgetAmount: 0,
        expenses: [],
        currency: this.#budgetCurrency,
        isStoredBudget: false
      }

      return storedBudgetPayload
    }

    const { budget, expenses, currency } = storedBudget

    this.#budgetAmount = budget
    this.#collectedExpenses = expenses
    this.#budgetCurrency = currency

    storedBudgetPayload = {
      budgetAmount: budget,
      expenses: expenses,
      currency: currency,
      isStoredBudget: true
    }

    return storedBudgetPayload
  }

  /**
   * @returns {number} - The daily allowance of the current month based on remaining budget and days of month.
   */
  getDailyAllowance() {
    return this.#calculateDailyAllowance()
  }

  /**
   * @returns {object} - The loaded, stored object.
   */
  #loadBudgetWithKey() {
    const yearMonthKey = this.getYearMonth()
    const storedBudget = this.#storageHandler.loadBudget(yearMonthKey)
    return storedBudget
  }

  /**
   * @returns {number} - The daily allowance based on remaining budget / remaining days of current month with prevention of divison by zero.
   */
  #calculateDailyAllowance() {
    return Math.max(this.#getRemainingValueOfBudget(), 0) / this.#getRemainingDaysOfMonth()
  }

  /**
   * @returns {number} - The amount of days left of current month with minimum 1 day left.
   */
  #getRemainingDaysOfMonth() {
    return Math.max(this.#dateHandler.getRemainingDaysOfCurrentMonth(), 1)
  }

  /**
   * @returns {number} - The remainig budget.
   */
  #getRemainingValueOfBudget() {
    const allExpenses = this.getAllAddedExpenses()
    return this.#calculateRemainingValueOfBudget(allExpenses)
  }

  /**
   * @param {Array} allExpenses - The collection of all added expenses.
   * @returns {number} - The amount of current budget.
   */
  #calculateRemainingValueOfBudget(allExpenses) {
    let currentBudget = this.#budgetAmount
    allExpenses.forEach(({ expenseAmount }) => {
      currentBudget -= expenseAmount
    })
    return currentBudget
  }

  /**
   * @param {object} expense - The expense object containing amount, currency and index.
   */
  #addExpenseToExpenses(expense) {
    this.#collectedExpenses.push(expense)
  }

  #updateIndexOfExpenses() {
    this.#collectedExpenses.forEach((expense, expenseIndex) => {
      expense.index = expenseIndex
    })
  }

  #setDefaultBudget() {
    this.#budgetAmount = 0
    this.#collectedExpenses = []
  }
}