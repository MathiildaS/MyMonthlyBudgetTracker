/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const foodBudgetTemplate = document.createElement('template')
foodBudgetTemplate.innerHTML = `
<style>
.budgetForm {
display: block;
}

.expenseForm {
  display: none;
}

</style>
<div class="budgetForm">
<budget-form-element></budget-form-element>
</div>
<div class="ExpenseForm">
<expense-form-element></expense-form-element>
</div>
<pie-element></pie-element>
`

customElements.define('food-budget-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the food-budget-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(foodBudgetTemplate.content.cloneNode(true))

      this.budgetForm = this.shadowRoot.querySelector('budget-form-element')
      this.expenseForm = this.shadowRoot.querySelector('expense-form-element')
      this.pieElement = this.shadowRoot.querySelector('pie-element')

      this.budgetFormDiv = this.shadowRoot.querySelector('.budgetForm')
    }

  connectedCallback () {
  this.budgetForm.addEventListener('budgetAdded', (event) => {
    const budget = Number(event.detail.budget)
    this.hideBudgetForm()
    this.pieElement.initializePieRenderModuleWithBaseAmount(budget)
  })

  this.expenseForm.addEventListener('expenseAdded', (event) => {
    const expense = Number(event.detail.expense)
    this.pieElement.displaySliceOnPieBasedOnInput(expense)
  })
}

hideBudgetForm() {
this.budgetFormDiv.style.display = 'none'
}
  }
)
