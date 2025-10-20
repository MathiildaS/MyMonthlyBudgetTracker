/**
 * @file A module for the BudgetAppHandler.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetAppHandler {
  #dateHandler
  #parser
  #storageHandler

  #budgetCurrency = 'KR'
  #budgetAmount = 0
  #collectedExpenses = []

  constructor(dateHandler, parser, storageHandler) {
    this.#dateHandler = dateHandler
    this.#parser = parser
    this.#storageHandler = storageHandler
  }

  setBudget(budgetAddedEvent) {
    const budgetAmount = budgetAddedEvent.detail.budget
    this.#budgetAmount = this.#parser.parseValueToNumber(budgetAmount)
    this.#budgetCurrency = budgetAddedEvent.detail.currency
  }

  getBudget() {
    const budget = {
      amount: this.#budgetAmount,
      currency: this.#budgetCurrency
    }
    return budget
  }

  addExpense(expenseAddedEvent) {
    const amount = expenseAddedEvent.detail.expense
    const addedExpenseAmount = this.#parser.parseValueToNumber(amount)

    const expense = {
      amount: addedExpenseAmount,
      currency: this.#budgetCurrency,
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
    const { amount } = this.getBudget()
    let remainingValue = amount
    const collectionOfRemainingValues = []

    const allExpenses = this.getAllAddedExpenses()

    allExpenses.forEach(({ expense }) => {
      remainingValue -= expense
      collectionOfRemainingValues.push(remainingValue)
    })
    return collectionOfRemainingValues
  }

  getYearMonth() {
    return this.#dateHandler.getCurrentYearMonth()
  }

  storeBudgetAndExpenses() {
    const yearMonthKey = this.getYearMonth()
    const { budget, currency } = this.getBudget()
    const budgetPayload = {
      budget: budget,
      expenses: this.#collectedExpenses,
      currency: currency
    }
    this.#storageHandler.saveBudget(yearMonthKey, budgetPayload)
  }

  removeStoredBudgetAndExpenses() {
    this.#storageHandler.deleteStoredBudget(this.getYearMonth())

    this.#budgetAmount = 0
    this.#collectedExpenses = []
  }

  editExpense(expenseEditedEvent) {
    const value = expenseEditedEvent.detail.expense
    const index = expenseEditedEvent.detail.index

    const editedExpenseAmount = this.#parser.parseValueToNumber(value)
    const editedExpenseIndex = this.#parser.parseValueToNumber(index)
    this.#collectedExpenses[editedExpenseIndex].expense = editedExpenseAmount
  }

  deleteExpense(index) {
    const expenseIndex = this.#parser.parseValueToNumber(index)
    this.#collectedExpenses.splice(expenseIndex, 1)

    this.#collectedExpenses.forEach((expense, expenseIndex) => {
      expense.index = expenseIndex
    })
  }

  getStoredBudgetAndExpenses() {
    const yearMonthKey = this.getYearMonth()
    const storedValues = this.#storageHandler.loadBudget(yearMonthKey)

    let storedBudget = {}
    let budget
    let currency
    let expenses

    if (!storedValues) {
      budget = 0
      expenses = []
      currency = this.#budgetCurrency

      storedBudget = {
        budget: budget,
        expenses: expenses,
        currency: currency,
        isStoredValues: false
      }

      return storedBudget
    }

    budget = storedValues.budget
    expenses = storedValues.expenses
    currency = storedValues.currency

    this.#budgetAmount = budget
    this.#collectedExpenses = expenses
    this.#budgetCurrency = currency

    storedBudget = {
      budget: budget,
      expenses: expenses,
      currency: currency,
      isStoredValues: true
    }

    return storedBudget
  }

  getDailyAllowance() {
    const allExpenses = this.getAllAddedExpenses()
    let remainingBudget = this.#budgetAmount

    allExpenses.forEach(({ expense }) => {
      remainingBudget -= expense
    })

    const remainingDaysOfMonth = Math.max(this.#dateHandler.getRemainingDaysOfMonth(), 1)

    const dailyAllowance = Math.max(remainingBudget, 0) / remainingDaysOfMonth

    return dailyAllowance
  }
}