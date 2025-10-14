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
  grid-template-areas: 'left middle right';
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
}

.pieButton {
display: none;
}

  button {
    font-family: 'DynaPuff';
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
  grid-template-columns: 1fr 1fr;
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
<p>Change theme</p>
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
<h1><span id='budgetYear'></span>  <span id='budgetMonth'></span></h1>
    <h2><strong>Budget:</strong> <span id='budgetValue'></span></h2>
    <div class="expenses-remaining">
    <p id="expenses"><strong>Expenses:</strong></p>
    <p id="expensesValue">—</p>
    <p id="remaining"><strong>Remaining:</strong></p>
    <p id="remainingValue">—</p>
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
      this.currentYear = this.shadowRoot.querySelector('#budgetYear')
      this.currentMonth = this.shadowRoot.querySelector('#budgetMonth')
      this.allAddedExpenses = this.shadowRoot.querySelector('#expensesValue')
      this.remainingOfBudget = this.shadowRoot.querySelector('#remainingValue')

      this.addedBudget
      this.addedExpense
      this.collectedExpenses = []
      this.remainingValue
    }

    connectedCallback() {
      this.budgetForm.addEventListener('budgetAdded', (event) => {
        this.addedBudget = Number(event.detail.budget)
        this.getAndDisplayCurrentYearMonthBudget()

        this.hideBudgetFormDisplayExpenseForm()
        this.displayPieButton()
      })

      this.expenseForm.addEventListener('expenseAdded', (event) => {
        this.addedExpense = Number(event.detail.expense)
        this.addExpenseToCollection()
        this.displayAddedExpenses()
        this.displayRemainingBudgetAfterAddedExpense()
        this.pieElement.displaySliceOnPieBasedOnInput(this.addedExpense)
      })

      this.pieButton.addEventListener('click', () => {
        this.toggleTextAndDisplayButton()

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
      this.expenseFormDiv.style.display = 'block'
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
      this.currentYear.textContent = this.dateHandler.getCurrentYear()
      this.currentMonth.textContent = this.dateHandler.getCurrentMonth()
      this.currentBudget.textContent = this.addedBudget
    }

    displayAddedExpenses() {
      this.allAddedExpenses.replaceChildren()

      this.collectedExpenses.forEach((expense) => {
        const pElement = document.createElement('p')
        pElement.textContent = expense
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
        pElement.textContent = this.remainingValue
        this.remainingOfBudget.appendChild(pElement)
      })
    }
  }
)
