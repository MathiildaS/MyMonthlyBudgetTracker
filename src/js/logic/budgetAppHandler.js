/**
 * @file A module for the BudgetAppHandler.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetAppHandler {
  #dateHandler
  #storageHandler

  #budgetCurrency = 'KR'
  #budgetAmount = 0
  #collectedExpenses = []

  /**
   * Creates and initializes an instance of the class BudgetAppHandler with an instance of DateHandler and StorageHandler classes 
   *
   * @param {Parser} parser - An isntance of the Parser-class.
   * @param {} validator - An instance of the Validator-class.
   */
  constructor(dateHandler, storageHandler) {
    this.#dateHandler = dateHandler
    this.#storageHandler = storageHandler
  }

  setBudget(budgetAddedEvent) {
    this.#budgetAmount = budgetAddedEvent.detail.budget
    this.#budgetCurrency = budgetAddedEvent.detail.currency
  }

  getBudget() {
    const budget = {
      budgetAmount: this.#budgetAmount,
      currency: this.#budgetCurrency
    }
    return budget
  }

  addExpense(expenseAddedEvent) {
    const amount = expenseAddedEvent.detail.expense

    const expense = {
      expenseAmount: amount,
      currency: this.#budgetCurrency,
      index: this.#collectedExpenses.length
    }

    this.#addExpenseToCollection(expense)
  }



  getAllAddedExpenses() {
    if (this.#collectedExpenses.length === 0) {
      return []
    }

    return this.#collectedExpenses
  }

  getRemainingOfBudget() {
    const { budgetAmount } = this.getBudget()
    let remainingValue = budgetAmount
    const collectionOfRemainingValues = []

    const allExpenses = this.getAllAddedExpenses()

    allExpenses.forEach(({ expenseAmount }) => {
      remainingValue -= expenseAmount
      collectionOfRemainingValues.push(remainingValue)
    })
    return collectionOfRemainingValues
  }

  getYearMonth() {
    return this.#dateHandler.getCurrentYearMonthString()
  }

  storeBudgetAndExpenses() {
    const yearMonthKey = this.getYearMonth()
    const { budgetAmount, currency } = this.getBudget()
    const budgetPayload = {
      budget: budgetAmount,
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
    const expense = expenseEditedEvent.detail.expense
    const index = expenseEditedEvent.detail.index

    this.#collectedExpenses[index].expenseAmount = expense
  }

  deleteExpense(expenseIndex) {
    this.#collectedExpenses.splice(expenseIndex, 1)

    this.#collectedExpenses.forEach((expense, expenseIndex) => {
      expense.index = expenseIndex
    })
  }

  getStoredBudgetAndExpenses() {
    const yearMonthKey = this.getYearMonth()
    const storedValues = this.#storageHandler.loadBudget(yearMonthKey)

    let storedBudget = {}
    let amount
    let currency
    let expenses

    if (!storedValues) {
      amount = 0
      expenses = []
      currency = this.#budgetCurrency

      storedBudget = {
        budgetAmount: amount,
        expenses: expenses,
        currency: currency,
        isStoredValues: false
      }

      return storedBudget
    }

    amount = storedValues.budget
    expenses = storedValues.expenses
    currency = storedValues.currency

    this.#budgetAmount = amount
    this.#collectedExpenses = expenses
    this.#budgetCurrency = currency

    storedBudget = {
      budgetAmount: amount,
      expenses: expenses,
      currency: currency,
      isStoredValues: true
    }

    return storedBudget
  }

  getDailyAllowance() {
    const allExpenses = this.getAllAddedExpenses()
    let remainingBudget = this.#budgetAmount

    allExpenses.forEach(({ expenseAmount }) => {
      remainingBudget -= expenseAmount
    })

    const remainingDaysOfMonth = Math.max(this.#dateHandler.getRemainingDaysOfCurrentMonth(), 1)
    const dailyAllowance = Math.max(remainingBudget, 0) / remainingDaysOfMonth

    return dailyAllowance
  }  
  
  #addExpenseToCollection(expense) {
    this.#collectedExpenses.push(expense)
  }
}