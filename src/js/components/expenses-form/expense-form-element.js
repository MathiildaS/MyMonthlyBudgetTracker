/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const expenseFormTemplate = document.createElement('template')
expenseFormTemplate.innerHTML = `
<style>
</style>
<div>
<form id='expenseForm'>
<input type='text' name='expense' placeholder='Add your expense here' required />
<button type='submit'>Add your expense</button>
</form>
</div>
`

customElements.define('expense-form-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the expenses-form-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(expenseFormTemplate.content.cloneNode(true))

      this.form = this.shadowRoot.querySelector('#expenseForm')
      this.currentExpense = 0
      this.totalOfExpenses = []
    }

    connectedCallback() {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.collectFormDataAndSendExpense()
      })
    }

    collectFormDataAndSendExpense() {
      const formData = new FormData(this.form)
      const expense = formData.get('expense')
      this.sendAddedExpense(expense)
    }

    sendAddedExpense(expense) {
      const expenseAdded = new CustomEvent('expenseAdded', {
        detail: {
          expense: expense,
        },
        bubbles: true,
      })
      this.dispatchEvent(expenseAdded)
    }
  }
)
