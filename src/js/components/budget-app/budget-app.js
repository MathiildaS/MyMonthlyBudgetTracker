/**
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

      // Creates a new budgetAppService instance to 
      this.budgetAppService = new BudgetAppService()
      this.budgetAppHandler = this.budgetAppService.getBudgetAppHandler()

      this.budgetForm = this.shadowRoot.querySelector('budget-form')
      this.expenseForm = this.shadowRoot.querySelector('expense-form')
      this.pieElement = this.shadowRoot.querySelector('pie-element')

      this.budgetPie = this.shadowRoot.querySelector('.budgetPie')
      this.budgetFormDiv = this.shadowRoot.querySelector('.budgetForm')
      this.expenseFormDiv = this.shadowRoot.querySelector('.expenseForm')
      this.pieButton = this.shadowRoot.querySelector('.pieButton')
      this.currentBudget = this.shadowRoot.querySelector('#budgetValue')
      this.currentYearMonth = this.shadowRoot.querySelector('#budgetYearMonth')
      this.allAddedExpenses = this.shadowRoot.querySelector('#expensesValue')
      this.remainingOfBudget = this.shadowRoot.querySelector('#remainingValue')
      this.resetBudgetButton = this.shadowRoot.querySelector('#resetBudget')
    }

    connectedCallback() {
      //this.displayStoredBudgetAndExpenses()

      this.budgetForm.addEventListener('budgetAdded', (event) => {
        this.budgetAppHandler.setBudget(event)
        this.#getAndDisplayBudget()
        this.#getAndDisplayYearMonth()

        this.hideBudgetFormDisplayExpenseForm()
        this.displayPieButton()
        this.storeBudgetAndExpenses()
      })

      this.expenseForm.addEventListener('expenseAdded', (event) => {
        this.budgetAppHandler.addExpense(event)
        this.displayAddedExpensesAndRemainingOfBudget()
        this.storeBudgetAndExpenses()
      })

      this.allAddedExpenses.addEventListener('click', (event) => {
        this.editOrDeleteExpense(event)
      })

      this.expenseForm.addEventListener('expenseEdited', (event) => {
       this.budgetAppHandler.editExpense(event)

        this.displayAddedExpenses()
        this.displayRemainingBudgetAfterAddedExpense()
        this.storeBudgetAndExpenses()
        this.pieElement.initializePieRenderModuleWithBaseAmount(this.addedBudget)
        this.drawAddedExpensesOnPie()
      })

      this.pieButton.addEventListener('click', () => {
        this.toggleTextAndDisplayButton()
      })

      this.resetBudgetButton.addEventListener('click', () => {
        this.removeStoredBudgetAndExpenses()
      })
    }

    hideBudgetFormDisplayExpenseForm() {
      this.budgetFormDiv.style.display = 'none'
      this.expenseFormDiv.style.display = 'flex'
    }

    displayBudgetPie(addedBudget) {
      this.pieElement.initializePieRenderModuleWithBaseAmount(addedBudget)
    }

    displayPieButton() {
      this.pieButton.style.display = 'block'
    }

    toggleTextAndDisplayButton() {
      this.displayPieButton()
      if (this.pieButton.textContent === 'Display pie?') {
        this.pieButton.textContent = 'Hide pie?'
        this.budgetPie.style.display = 'block'
        this.displayBudgetPie(this.addedBudget)
        this.drawAddedExpensesOnPie()
      } else if (this.pieButton.textContent === 'Hide pie?') {
        this.pieButton.textContent = 'Display pie?'
        this.budgetPie.style.display = 'none'
      }
    }


    #getAndDisplayYearMonth() {
      const currentYearMonth = this.budgetAppHandler.getYearMonth()
      this.currentYearMonth.textContent = currentYearMonth
    }

    #getAndDisplayBudget() {
      const { budget, currency } = this.budgetAppHandler.getBudget()
      this.currentBudget.textContent = `${budget} ${currency}`
    }

displayAddedExpensesAndRemainingOfBudget() {
  this.displayAddedExpensesAndDrawOnPie()
  this.displayRemainingBudget()
}

    displayAddedExpensesAndDrawOnPie() {
      const allExpenses = this.budgetAppHandler.getAllAddedExpenses()

      this.allAddedExpenses.replaceChildren()
      this.#checkLenghtOfCollection(allExpenses)

      allExpenses.forEach((expense, currency, index) => {
        const pElement = document.createElement('p')
        pElement.textContent = `${expense} ${currency}`

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

      this.drawAddedExpensesOnPie(allExpenses)
    }

    drawAddedExpensesOnPie(allExpenses) {
      allExpenses.forEach((expense) => {
        this.pieElement.displaySliceOnPieBasedOnInput(expense)
      })
    }

    displayRemainingBudget() {
      this.remainingOfBudget.replaceChildren()

      const { currency } = this.budgetAppHandler.getBudget()
      const collectionOfRemainingValues = this.budgetAppHandler.getRemainingOfBudget()

      this.#checkLenghtOfCollection(collectionOfRemainingValues)

      collectionOfRemainingValues.forEach((value) => {
        const pElement = document.createElement('p')
        pElement.textContent = `${value} ${currency}`
        this.remainingOfBudget.appendChild(pElement)
      })
    }

    displayStoredBudgetAndExpenses() {
      const storedData = localStorage.getItem(this.yearMonthKey)
      if (!storedData) {
        this.addedBudget = 0
        this.collectedExpenses = []
        this.refreshDisplayWithNoAddedBudget()
      } else {
        try {
          const parsedData = JSON.parse(storedData)
          this.addedBudget = parsedData.budget
          this.collectedExpenses = parsedData.expenses
          this.currency = parsedData.currency
          this.getAndDisplayCurrentYearMonthBudget()
          this.hideBudgetFormDisplayExpenseForm()
          this.displayAddedExpenses()
          this.displayRemainingBudgetAfterAddedExpense()
          this.displayPieButton()
          if (this.budgetPie.style.display === 'block' && this.addedBudget > 0) {
            this.pieElement.initializePieRenderModuleWithBaseAmount(this.addedBudget)
            this.drawAddedExpensesOnPie()
          }
        } catch (error) {
          console.error('Could not parse the stored budget and expenses', error)
        }
      }
    }

    storeBudgetAndExpenses() {
      this.budgetAppHandler.storeBudgetAndExpenses()
    }

    removeStoredBudgetAndExpenses() {
      this.budgetAppHandler.removeStoredBudgetAndExpenses()
      this.refreshDisplayWithNoAddedBudget()
    }

    refreshDisplayWithNoAddedBudget() {
      this.budgetFormDiv.style.display = 'flex'
      this.expenseFormDiv.style.display = 'none'
      this.pieButton.style.display = 'none'
      this.budgetPie.style.display = 'none'
      this.pieButton.textContent = 'Display pie?'

      this.currentBudget.textContent = '—'
      this.allAddedExpenses.replaceChildren()
      this.allAddedExpenses.textContent = '—'
      this.remainingOfBudget.replaceChildren()
      this.remainingOfBudget.textContent = '—'
      this.getAndDisplayCurrentYearMonthBudget()
    }

    editOrDeleteExpense(event) {
      if (event.target.classList.contains('edit-button')) {
        const expenseIndex = event.target.dataset.expenseIndex
        const expenseToEdit = this.collectedExpenses[expenseIndex]
        this.expenseForm.displayEditExpenseForm(expenseToEdit, expenseIndex)
      } else if (event.target.classList.contains('delete-button')) {
        const expenseIndex = event.target.dataset.expenseIndex
        this.collectedExpenses.splice(expenseIndex, 1)
        this.displayAddedExpenses()
        this.displayRemainingBudgetAfterAddedExpense()
        this.storeBudgetAndExpenses()
        this.pieElement.initializePieRenderModuleWithBaseAmount(this.addedBudget)
        this.drawAddedExpensesOnPie()
      }
    }

    #checkLenghtOfCollection(expenses) {
      if (expenses.length === 0) {
        this.allAddedExpenses.textContent = '—'
        return
      }
    }
  }
)
