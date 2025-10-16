/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './expense-form.html.js'
import { cssTemplate } from './expense-form.css.js'

import { ExpenseFormHandler } from '../../logic/expenseFormHandler.js'


customElements.define('expense-form',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the expenses-form-element and attach the template to its shadow root.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))


      this.expenseFormHandler = new ExpenseFormHandler()

      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.expenseForm = this.shadowRoot.querySelector('#expenseForm')
      this.editExpenseForm = this.shadowRoot.querySelector('#editExpenseForm')

      this.expenseToEditIndex
    }

    connectedCallback() {
      this.editExpenseForm.style.display = 'none'

      this.expenseForm.addEventListener('submit', (event) => {
        this.#collectAndSendExpenseFormInput(event)
      }, { signal: this.abortController.signal })

      this.editExpenseForm.addEventListener('submit', (event) => {
        this.#collectAndSendEditedExpense(event)
        this.#displayExpenseForm()
      }, { signal: this.abortController.signal })
    }

    displayEditFormAndExpense(expense, expenseIndex) {
      this.#displayEditExpenseForm()
      this.editExpenseForm.editExpense.value = expense
      this.expenseToEditIndex = expenseIndex
      this.editExpenseForm.editExpense.focus()
    }

    #collectAndSendExpenseFormInput(event) {
      event.preventDefault()
      const expenseForm = this.expenseForm
      try {
        this.#collectFormInputAndSendExpense(expenseForm)
      } catch (error) {
        console.error('An error occured when collecting and sending values from the expense form', error)
      }
    }

    #collectFormInputAndSendExpense(expenseForm) {
      const expenseFormInput = this.expenseFormHandler.getInputValue(expenseForm)
      this.#setAndSendExpense(expenseFormInput)
    }

    #setAndSendExpense(expenseFormInput) {
      const expenseAdded = new CustomEvent('expenseAdded', {
        detail: {
          expense: expenseFormInput,
        },
        bubbles: true,
      })
      this.dispatchEvent(expenseAdded)
      this.expenseForm.reset()
    }

    #collectAndSendEditedExpense(event) {
      event.preventDefault()
      const editExpenseForm = this.editExpenseForm
      try {
        this.#collectFormInputAndSendEditedExpense(editExpenseForm)
      } catch (error) {
        console.error('An error occured when collecting and sending values from the expense form', error)
      }
    }

    #collectFormInputAndSendEditedExpense(editExpenseForm) {
      const editExpenseFormInput = expenseFormHandler.getEditedInputValue(editExpenseForm)
      this.#setAndSendEditedExpense(editExpenseFormInput)
    }

    #setAndSendEditedExpense(editExpenseFormInput) {
      const expenseEdited = new CustomEvent('expenseEdited', {
        detail: {
          expense: editExpenseFormInput,
          index: this.expenseToEditIndex,
        },
        bubbles: true,
      })
      this.dispatchEvent(expenseEdited)
      this.editExpenseForm.reset()
    }

    #displayExpenseForm() {
      this.editExpenseForm.style.display = 'none'
      this.expenseForm.style.display = 'block'
    }

    #displayEditExpenseForm() {
      this.editExpenseForm.style.display = 'block'
      this.expenseForm.style.display = 'none'
    }

    /**
     * Called when disconnected from DOM. 
     * Aborts event listeners to prevent memory leaks.
     */
    disconnectedCallback() {
      this.abortController.abort()
    }
  }
)
