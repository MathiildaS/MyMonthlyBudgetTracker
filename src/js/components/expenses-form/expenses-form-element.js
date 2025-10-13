/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const expensesFormTemplate = document.createElement('template')
expensesFormTemplate.innerHTML = `
<style>
</style>
<div>
<form id='expensesForm'>
<input type='text' name='expense' placeholder='Add your expense here' required />
<button type='submit'>Add your expense</button>
</form>
</div>
`

customElements.define('expenses-form-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the expenses-form-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(expensesFormTemplate.content.cloneNode(true))

      this.form = this.shadowRoot.querySelector('#expensesForm')
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
  }
)
