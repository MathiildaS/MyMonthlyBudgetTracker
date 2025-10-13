/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const expenseFormTemplate = document.createElement('template')
expenseFormTemplate.innerHTML = `
<style>
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

input {
  font-family: 'DynaPuff';
  padding: 0.5rem 1rem;
}
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
