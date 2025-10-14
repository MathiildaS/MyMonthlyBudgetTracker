/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const foodBudgetTemplate = document.createElement('template')
foodBudgetTemplate.innerHTML = `
<style>
.main {
  display: grid;
  grid-template-columns: 250px 800px 300px;
  grid-template-areas: "left middle right";
  gap: 1rem;
}

.left { 
  grid-area: left;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);
}

.middle { 
  grid-area: middle; 
}

.right { 
  grid-area: right;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1); 
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

@media (max-width: 1200px) {
  .main{
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-areas: "left middle right";
  }

@media (max-width: 1000px) {
  .main{
  grid-template-columns: 0.5fr 1fr 0.6fr;
  grid-template-areas: "left middle right";
  }

@media (max-width: 600px) {
  .main{
  grid-template-columns: 1fr;
  grid-template-areas: "left" "middle" "right";
  }

@media (max-width: 400px) {
  .main{
  gap: 0.5rem;
  }
</style>
<div class="main">
<section class="left">
  <p>Change theme</p>
</section>
    <section class="middle">
      
<div class="budgetForm">
<budget-form-element></budget-form-element>
</div>
<button class="pieButton">Display pie?</button>
<div class="budgetPie">
<pie-element></pie-element>
</div>
<div class="expenseForm">
<expense-form-element></expense-form-element>
</div>
</section>
<section class="right">
    <h3>Overview</h3>
    <p><strong>Budget:</strong> <span id="budgetValue">—</span></p>
    <ul id="expensesList"></ul>
</section>
</div>
`

customElements.define('food-budget-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the food-budget-element and attach the template to its shadow root.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(foodBudgetTemplate.content.cloneNode(true))

      this.budgetForm = this.shadowRoot.querySelector('budget-form-element')
      this.expenseForm = this.shadowRoot.querySelector('expense-form-element')
      this.pieElement = this.shadowRoot.querySelector('pie-element')

      this.budgetFormDiv = this.shadowRoot.querySelector('.budgetForm')
      this.expenseFormDiv = this.shadowRoot.querySelector('.expenseForm')
      this.pieButton = this.shadowRoot.querySelector('.pieButton')

      this.addedBudget
    }

    connectedCallback() {
      this.budgetForm.addEventListener('budgetAdded', (event) => {
        this.addedBudget = Number(event.detail.budget)

        this.hideBudgetFormDisplayExpenseForm()
        this.displayPieButton()
      })

      this.expenseForm.addEventListener('expenseAdded', (event) => {
        const expense = Number(event.detail.expense)
        this.pieElement.displaySliceOnPieBasedOnInput(expense)
      })

      this.pieButton.addEventListener('click', () => {
        this.hidePieButton()
        this.displayBudgetPie(this.addedBudget)
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

    hidePieButton() {
      this.pieButton.style.display = 'none'
    }
  }
)
