/**
 * @file A module for a custom web component that works as an Controller. 
 * It listens for events from views, manages the visibility of the views and connects the user interactions to the right internal logic of the MyMonthlyBudgetTracker-application.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { cssTemplate } from './budget-app.css.js'
import { htmlTemplate } from './budget-app.html.js'

import { BudgetAppService } from '../../services/budgetAppService.js'

customElements.define('budget-app',

  class extends HTMLElement {

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // Creates a new budgetAppService instance to get access to the budgetAppHandler responsible for managing the business logic of the application.
      this.budgetAppService = new BudgetAppService()
      this.budgetAppHandler = this.budgetAppService.getBudgetAppHandler()

      this.budgetForm = this.shadowRoot.querySelector('budget-form')
      this.expenseForm = this.shadowRoot.querySelector('expense-form')
      this.pieElement = this.shadowRoot.querySelector('pie-element')

      this.budgetPie = this.shadowRoot.querySelector('.budgetPie')
      this.budgetFormDiv = this.shadowRoot.querySelector('.budgetForm')
      this.expenseFormDiv = this.shadowRoot.querySelector('.expenseForm')
      this.displayPieButton = this.shadowRoot.querySelector('.pieButton')
      this.currentBudget = this.shadowRoot.querySelector('#budgetValue')
      this.currentYearMonth = this.shadowRoot.querySelector('#budgetYearMonth')
      this.allAddedExpenses = this.shadowRoot.querySelector('#expensesValue')
      this.remainingOfBudget = this.shadowRoot.querySelector('#remainingValue')
      this.resetBudgetButton = this.shadowRoot.querySelector('#resetBudget')
    }

    /**
     * Called when added to the DOM. Display an popup with error message for 3 seconds when errorOccured custom event is dispatched.
     */
    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.#refreshBudgetView()

      this.budgetForm.addEventListener('budgetAdded', (event) => {
        try {
          this.setAddedBudget(event)
          this.#renderAddedBudgetView()
          this.#storeBudgetState()
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })

      this.expenseForm.addEventListener('expenseAdded', (event) => {
        try {
          this.addExpense(event)
          this.#renderAddedExpenseView()
          this.#storeBudgetState()
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })

      this.allAddedExpenses.addEventListener('click', (event) => {
        try {
          this.#editOrDeleteExpense(event)
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })

      this.expenseForm.addEventListener('expenseEdited', (event) => {
        try {
          this.editExpense(event)
          this.#renderAddedExpenseView()
          this.#storeBudgetState()
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })

      this.displayPieButton.addEventListener('click', () => {
        this.#toggleDisplayPie()
      }, { signal: this.abortController.signal })

      this.resetBudgetButton.addEventListener('click', () => {
        try {
          this.#removeStoredBudgetState()
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })
    }

    /**
     * Called when disconnected from DOM. 
     * Aborts event listeners to prevent memory leaks.
     */
    disconnectedCallback() {
      this.abortController.abort()
    }

    setAddedBudget(event) {
      const budgetAmount = event.detail.budget
      const budgetCurrency = event.detail.currency
      this.budgetAppHandler.setBudget(budgetAmount, budgetCurrency)
    }

    addExpense(event) {
      const expenseAmount = event.detail.expense
      this.budgetAppHandler.addExpense(expenseAmount)
    }

    editExpense(event) {
      const expenseAmount = event.detail.expense
      const expenseIndex = event.detail.index
      this.budgetAppHandler.editExpense(expenseAmount, expenseIndex)
    }

    #refreshBudgetView() {
      try {
        this.#getVerifyAndDisplayStoredBudgetAndExpenses()
        queueMicrotask(() => this.#getAndDispatchDailyAllowance())
      } catch (error) {
        this.#handleError(error)
      }
    }

    #renderAddedBudgetView() {
      this.#getAndDisplayBudget()
      this.#getAndDisplayYearMonth()
      this.#hideBudgetFormDisplayExpenseForm()
      this.#renderPieButton()
      this.#displayBudgetPieWithPercent()
      this.#getAndDispatchDailyAllowance()
    }

    #renderAddedExpenseView() {
      this.#displayAddedExpensesAndRemainingOfBudget()
      this.#refreshBudgetPie()
      this.#getAndDispatchDailyAllowance()
    }

    #getVerifyAndDisplayStoredBudgetAndExpenses() {
      const { isStoredBudget } = this.budgetAppHandler.getStoredBudgetAndExpenses()

      this.#getAndDisplayYearMonth()
      this.#getAndDisplayBudget()

      if (!isStoredBudget) {
        this.#refreshDisplayWithNoAddedBudget()
        return
      }

      this.#hideBudgetFormDisplayExpenseForm()
      this.#displayAddedExpensesAndRemainingOfBudget()
      this.#renderPieButton()

      this.#refreshPieIfVisibleWithAddedBudget()

      this.#getAndDispatchDailyAllowance()
    }

    #refreshPieIfVisibleWithAddedBudget() {
      if (this.budgetPie.style.display === 'block') {
        this.#refreshBudgetPie()
      }
    }

    #getAndDisplayBudget() {
      const { budgetAmount, currency } = this.budgetAppHandler.getBudget()
      this.currentBudget.textContent = `${budgetAmount} ${currency}`
    }

    #displayAddedExpensesAndRemainingOfBudget() {
      this.#displayAddedExpenses()
      this.#displayRemainingBudget()
    }

    #displayAddedExpenses() {
      const allExpenses = this.budgetAppHandler.getAllAddedExpenses()
      this.allAddedExpenses.replaceChildren()

      allExpenses.forEach(({ expenseAmount, currency, index }) => {
        const pElement = document.createElement('p')
        pElement.textContent = `${expenseAmount} ${currency}`

        const editButton = document.createElement('button')
        editButton.classList.add('edit-button')
        editButton.textContent = 'Edit'
        editButton.dataset.expenseIndex = index
        pElement.appendChild(editButton)

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')
        deleteButton.textContent = 'Delete'
        deleteButton.dataset.expenseIndex = index
        pElement.appendChild(deleteButton)

        this.allAddedExpenses.appendChild(pElement)
      })
    }

    #drawAddedExpensesOnPie() {
      const allExpenses = this.budgetAppHandler.getAllAddedExpenses()
      allExpenses.forEach(({ expenseAmount }) => {
        this.pieElement.displaySliceOnPieBasedOnExpense(expenseAmount)
      })
    }

    #displayRemainingBudget() {
      this.remainingOfBudget.replaceChildren()

      const { currency } = this.budgetAppHandler.getBudget()
      const collectionOfRemainingValues = this.budgetAppHandler.getRemainingValuesOfBudget()

      collectionOfRemainingValues.forEach((value) => {
        const pElement = document.createElement('p')
        pElement.textContent = `${value} ${currency}`
        this.remainingOfBudget.appendChild(pElement)
      })
    }

    #getAndDisplayYearMonth() {
      const currentYearMonth = this.budgetAppHandler.getYearMonth()
      this.currentYearMonth.textContent = currentYearMonth
    }

    #storeBudgetState() {
      this.budgetAppHandler.storeBudgetAndExpenses()
    }

    #toggleDisplayPie() {
      this.#renderPieButton()
      this.#toggleTextOnPieButtonAndDisplayPie()
    }

    #renderPieButton() {
      this.displayPieButton.style.display = 'block'
    }

    #toggleTextOnPieButtonAndDisplayPie() {
      if (this.displayPieButton.textContent === 'Display pie?') {
        this.displayPieButton.textContent = 'Hide pie?'
        this.budgetPie.style.display = 'block'
        this.#refreshBudgetPie()
      } else if (this.displayPieButton.textContent === 'Hide pie?') {
        this.displayPieButton.textContent = 'Display pie?'
        this.budgetPie.style.display = 'none'
      }
    }

    #refreshBudgetPie() {
      this.#displayBudgetPieWithPercent()
      this.#drawAddedExpensesOnPie()
    }

    #hideBudgetFormDisplayExpenseForm() {
      this.budgetFormDiv.style.display = 'none'
      this.expenseFormDiv.style.display = 'flex'
    }

    #editOrDeleteExpense(event) {
      const editButton = event.target.classList.contains('edit-button')
      const deleteButton = event.target.classList.contains('delete-button')
      const allAddedExpenses = this.budgetAppHandler.getAllAddedExpenses()

      const expenseToEditIndex = Number(event.target.dataset.expenseIndex)

      if (editButton) {
        const expenseToEdit = allAddedExpenses[expenseToEditIndex]
        this.expenseForm.displayEditExpenseForm(expenseToEdit.expenseAmount, expenseToEditIndex)
      } else if (deleteButton) {
        this.budgetAppHandler.deleteExpense(expenseToEditIndex)
        this.#renderAddedExpenseView()
        this.#storeBudgetState()
      }
    }

    #displayBudgetPieWithPercent() {
      const { budgetAmount } = this.budgetAppHandler.getBudget()
      this.pieElement.initializePieRenderWithBudget(budgetAmount)
      this.#setAndUpdateTextOnPie()
    }

    #setAndUpdateTextOnPie() {
      this.pieElement.displayRemainingPercentOfBudget(true)
      this.pieElement.setPercentTextSize(25)
    }

    #removeStoredBudgetState() {
      this.budgetAppHandler.removeStoredAndResetBudget()
      this.#refreshDisplayWithNoAddedBudget()
      this.#getAndDispatchDailyAllowance()
    }

    #refreshDisplayWithNoAddedBudget() {
      this.budgetFormDiv.style.display = 'flex'
      this.expenseFormDiv.style.display = 'none'
      this.displayPieButton.style.display = 'none'
      this.budgetPie.style.display = 'none'
      this.displayPieButton.textContent = 'Display pie?'

      this.currentBudget.textContent = ''
      this.allAddedExpenses.replaceChildren()
      this.allAddedExpenses.textContent = ''
      this.remainingOfBudget.replaceChildren()
      this.remainingOfBudget.textContent = ''
      this.#getAndDisplayYearMonth()
    }

    #getAndDispatchDailyAllowance() {
      const dailyAllowance = this.budgetAppHandler.getDailyAllowance()
      const { currency } = this.budgetAppHandler.getBudget()

      const updateAllowance = new CustomEvent('update-allowance', {
        detail: {
          allowance: dailyAllowance,
          currency: currency
        },
        bubbles: true,
        composed: true,
      })
      document.dispatchEvent(updateAllowance)
    }

    #handleError(error) {
      console.error('An error occured:', error.message, error)
      const userMessage = error.userMessage
      this.#dispatchErrorMessage(userMessage)
    }

    #dispatchErrorMessage(userMessage) {
      const errorOccurred = new CustomEvent('errorOccurred', {
        detail: {
          message: userMessage
        },
        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(errorOccurred)
    }
  }
)
