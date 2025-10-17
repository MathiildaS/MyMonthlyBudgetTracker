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
        this.#drawBudgetPieWithExpenses()
      } else if (this.pieButton.textContent === 'Hide pie?') {
        this.pieButton.textContent = 'Display pie?'
        this.budgetPie.style.display = 'none'
      }
    }

    #drawBudgetPieWithExpenses() {
      const { budget } = this.budgetAppHandler.getBudget()
      this.displayBudgetPie(budget)
      this.drawAddedExpensesOnPie(this.budgetAppHandler.getAllAddedExpenses())
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

      allExpenses.forEach(({ expense, currency, index }) => {
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
      allExpenses.forEach(({ expense }) => {
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
      try {
        const { budget, expenses, currency, isStoredValues } = this.budgetAppHandler.getStoredBudgetAndExpenses()

        this.#getAndDisplayYearMonth()
        this.#getAndDisplayBudget()

        if (!isStoredValues) {
          this.refreshDisplayWithNoAddedBudget()
          return
        } else {
          this.hideBudgetFormDisplayExpenseForm()
          this.displayAddedExpensesAndDrawOnPie()
          this.displayRemainingBudget()
          this.displayPieButton()
          if (this.budgetPie.style.display === 'block' && budget > 0) {
            this.displayBudgetPie(budget)
            this.drawAddedExpensesOnPie(expenses)
          }
        }
      } catch (error) {

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
      this.getAndDisplayYearMonth()
    }

    editOrDeleteExpense(event) {
      const editButton = event.target.classList.contains('edit-button')
      const deleteButton = event.target.classList.contains('delete-button')
      const allAddedExpenses = this.budgetAppHandler.getAllAddedExpenses()

      const expenseToEditIndex = event.target.dataset.expenseIndex
      const expenseToEdit = allAddedExpenses[expenseToEditIndex]

      if (editButton) {
        this.expenseForm.displayEditExpenseForm(expenseToEdit, expenseToEditIndex)
      } else if (deleteButton) {
        this.budgetAppHandler.deleteExpense(expenseIndex)
        this.displayAddedExpensesAndRemainingOfBudget()
        this.storeBudgetAndExpenses()

        const { budget } = this.budgetAppHandler.getBudget()
        this.displayBudgetPie(budget)
        this.drawAddedExpensesOnPie(this.budgetAppHandler.getAllAddedExpenses())
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
