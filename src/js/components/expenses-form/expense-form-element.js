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
    font-size: 1rem;
    border-radius: 4px;
  }

  #expenseForm {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "expense expense" 
      "submit submit";
    gap: 0.5rem;
    align-items: stretch;
  }

    #editExpenseForm {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "editExpense editExpense" 
      "submit submit";
    gap: 0.5rem;
    align-items: stretch;
  }

  #expenseForm input { 
    grid-area: expense;
  }

  #editExpenseForm input {
    grid-area: editExpense;
  }

  #expenseForm button, #editExpenseForm button { 
    grid-area: submit;
  }
</style>
<div>
<form id='expenseForm'>
<input type='text' name='expense' placeholder='Add your expense here' required />
<button type='submit'>Add your expense</button>
</form>
<form id='editExpenseForm'>
<input type='text' name='editExpense' placeholder='Edit your expense here' required />
<button type='submit'>Edit your expense</button>
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
      this.editForm = this.shadowRoot.querySelector('#editExpenseForm')

      this.editedExpense
      this.editedExpenseIndex
    }

    connectedCallback() {
      this.editForm.style.display = 'none'
      
      this.form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.collectFormDataAndSendExpense()
      })

      this.editForm.addEventListener('submit', (event) => {
        event.preventDefault()
        this.editedExpense = this.editForm.editExpense.value
        this.sendEditedExpense(this.editedExpense, this.editExpenseIndex)
        this.editForm.style.display = 'none'
        this.form.style.display = 'block'
        this.editForm.reset()
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
      this.form.reset()
    }

    editExpense(editExpense, editExpenseIndex) {
      this.editForm.style.display = 'flex'
      this.form.style.display = 'none'

      this.editExpenseIndex = editExpenseIndex
      this.editForm.editExpense.value = editExpense
      this.editForm.editExpense.focus()
    }

    sendEditedExpense(editedExpense, editedExpenseIndex) {
      const expenseEdited = new CustomEvent('expenseEdited', {
        detail: {
          expense: editedExpense,
          index: editedExpenseIndex,
        },
        bubbles: true,
      })
      this.dispatchEvent(expenseEdited)
    }
  }
)
