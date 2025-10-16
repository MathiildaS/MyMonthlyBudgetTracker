/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { DateHandler } from '../../utils/dateHandler.js'

const foodBudgetTemplate = document.createElement('template')
foodBudgetTemplate.innerHTML = `
<style>
  .main {
    display: grid;
    grid-template-columns: 250px 800px 300px;
    grid-template-areas: "left middle right";
    gap: 1rem;
  }

  .left, .middle, .right {
    min-height: 0;
  }

  .left { 
    grid-area: left;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);
    height: 70vh;
    overflow: auto;
  }

  .middle { 
    grid-area: middle;
  }

  .right { 
    grid-area: right;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);
    height: 70vh;
    overflow: auto;
  }

  .budgetForm {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expenseForm {
    display: none;
        align-items: center;
    justify-content: center;
  }

  .pieButton {
    display: none;
  }

  button {
    font-family: "DynaPuff";
    background-color: #b0a8d6b9;
    color:  #ffffff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #9fa0d6;
  }

  .budgetPie {
    display: none;
  }

  .expenses-remaining {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    column-gap: 1rem;
    row-gap: .25rem;
    align-items: start;
  }

  .expenses-remaining p {
    margin: 0;
    line-height: 1.5;
  }

  #expenses {
    grid-row: 1;
  }

  #expensesValue {
    grid-row: 2;
  }

  #remaining {
  grid-row: 1;
  }

  #remainingValue {
    grid-row: 2;
  }

  .edit-button, .delete-button {
    font-family: "DynaPuff";
    background-color: #b0a8d6b9;
    font-size: 0.6rem;
    color:  #ffffff;
    padding: 0.2rem 0.4rem;
    margin-left: 0.2rem;
    }

  @media (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 1.5fr 1fr;
      grid-template-areas: 'left middle right';
    }
  }

  @media (max-width: 1000px) {
    .main {
      grid-template-columns: 0.5fr 1fr 0.6fr;
      grid-template-areas: 'left middle right';
    }
  }

  @media (max-width: 600px) {
    .main {
      grid-template-columns: 1fr;
      grid-template-areas: 'left' 'middle' 'right';
    }
  }

  @media (max-width: 400px) {
    .main {
      gap: 0.5rem;
    }
  }
</style>
<div class='main'>
  <section class='left'>
    <div class="monthYear">
      <h1><span id='budgetYearMonth'></span></h1>
    </div>
    <div class="theme">
      <h3>Change theme</h3>
      <button>Light</button>
      <button>Dark</button>
      <button>Colourful</button>
    </div>
    <div class="reset">
      <button id="resetBudget">Reset budget</button>
    </div>
  </section>
  <section class='middle'>
    <button class='pieButton'>Display pie?</button> 
    <div class='budgetForm'>
      <budget-form-element></budget-form-element>
    </div>
    <div class='budgetPie'>
      <pie-element></pie-element>
    </div>
    <div class='expenseForm'>
      <expense-form-element></expense-form-element>
    </div>
  </section>
  <section class='right'>
    <h2><u>Budget:</u> <span id='budgetValue'></span></h2>
    <div class="expenses-remaining">
      <p id="expenses"><u>Expenses:</u></p>
      <div id="expensesValue">—</div>
      <p id="remaining"><u>Remaining:</u></p>
      <div id="remainingValue">—</div>
    </div>
  </section>
</div>
`

customElements.define(
  'food-budget-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the food-budget-element and attach the template to its shadow root.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        foodBudgetTemplate.content.cloneNode(true)
      )

      this.dateHandler = new DateHandler()

      this.budgetForm = this.shadowRoot.querySelector('budget-form-element')
      this.expenseForm = this.shadowRoot.querySelector('expense-form-element')
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

      this.addedBudget = 0
      this.addedExpense
      this.editedExpense
      this.editedExpenseIndex
      this.collectedExpenses = []
      this.remainingValue
      this.yearMonthKey = `${this.dateHandler.getCurrentYearMonth()}`
      this.currency = 'KR'
    }

    connectedCallback() {
      this.displayStoredBudgetAndExpenses()

      this.budgetForm.addEventListener('budgetAdded', (event) => {
        this.addedBudget = Number(event.detail.budget)
        this.currency = event.detail.currency
        this.getAndDisplayCurrentYearMonthBudget()

        this.hideBudgetFormDisplayExpenseForm()
        this.displayPieButton()
        this.storeBudgetAndExpenses()
      })

      this.expenseForm.addEventListener('expenseAdded', (event) => {
        this.addedExpense = Number(event.detail.expense)
        this.addExpenseToCollection()
        this.displayAddedExpenses()
        this.displayRemainingBudgetAfterAddedExpense()
        this.pieElement.displaySliceOnPieBasedOnInput(this.addedExpense)
        this.storeBudgetAndExpenses()
      })

      this.allAddedExpenses.addEventListener('click', (event) => {
      this.editOrDeleteExpense(event)
      })

        this.expenseForm.addEventListener('expenseEdited', (event) => {
        this.editedExpense = Number(event.detail.expense)
        this.editedExpenseIndex = Number(event.detail.index)
        this.collectedExpenses[this.editedExpenseIndex] = this.editedExpense

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
      this.hideBudgetForm()
      this.displayExpenseForm()
    }

    displayBudgetPie(addedBudget) {
      this.pieElement.initializePieRenderModuleWithBaseAmount(addedBudget)
    }

    hideBudgetForm() {
      this.budgetFormDiv.style.display = 'none'
    }

    displayExpenseForm() {
      this.expenseFormDiv.style.display = 'flex'
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


    getAndDisplayCurrentYearMonthBudget() {
      this.currentYearMonth.textContent = this.yearMonthKey
      this.currentBudget.textContent = `${this.addedBudget} ${this.currency}`
    }

    displayAddedExpenses() {
      this.allAddedExpenses.replaceChildren()

      this.collectedExpenses.forEach((expense, index) => {
        const pElement = document.createElement('p')
        pElement.textContent = `${expense} ${this.currency}`
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

    addExpenseToCollection() {
      this.collectedExpenses.push(this.addedExpense)
    }

    drawAddedExpensesOnPie() {
      this.collectedExpenses.forEach((addedExpense) => {
        this.pieElement.displaySliceOnPieBasedOnInput(addedExpense)
      })
    }

    displayRemainingBudgetAfterAddedExpense() {
      this.remainingOfBudget.replaceChildren()

      this.remainingValue = this.addedBudget

      this.collectedExpenses.forEach((expense) => {
        this.remainingValue -= expense
        const pElement = document.createElement('p')
        pElement.textContent = `${this.remainingValue} ${this.currency}`
        this.remainingOfBudget.appendChild(pElement)
      })
    }

    storeBudgetAndExpenses() {
      const budgetAndExpensesToStore = {
        budget: this.addedBudget,
        expenses: this.collectedExpenses,
        currency: this.currency,
      }
      localStorage.setItem(this.yearMonthKey, JSON.stringify(budgetAndExpensesToStore))
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

    removeStoredBudgetAndExpenses() {
      localStorage.removeItem(this.yearMonthKey)
      this.addedBudget = 0
      this.collectedExpenses = []
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
        this.expenseForm.editExpense(expenseToEdit, expenseIndex)
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
  }
)
