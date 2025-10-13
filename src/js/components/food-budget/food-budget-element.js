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

.pieButton {
display: none;
}

</style>
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
      this.expenseFormDiv = this.shadowRoot.querySelector('.expenseForm')
      this.pieButton = this.shadowRoot.querySelector('.pieButton')

      this.addedBudget
    }

  connectedCallback () {
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
