/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './expense-form.html.js'
import { cssTemplate } from './expense-form.css.js'

import { FormService } from '../../services/formService.js'

customElements.define('expense-form',

  class extends HTMLElement {

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // Creates a new FormService instance to validate and extract form values.
      this.formService = new FormService()
      this.expenseFormHandler = this.formService.getExpenseFormHandler()

      this.expenseForm = this.shadowRoot.querySelector('#expenseForm')
      this.editExpenseForm = this.shadowRoot.querySelector('#editExpenseForm')

      this.expenseToEditIndex
    }

    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.editExpenseForm.style.display = 'none'

      this.expenseForm.addEventListener('submit', (event) => {
        event.preventDefault()

        this.#collectAndDispatchFormValue()
        this.expenseForm.reset()
      }, { signal: this.abortController.signal })

      this.editExpenseForm.addEventListener('submit', (event) => {
        event.preventDefault()

        this.#collectAndDispatchEditedExpenseValue()
        this.#displayExpenseForm()
      }, { signal: this.abortController.signal })
    }

    displayEditExpenseForm(currentExpense, currentExpenseIndex) {
      this.editExpenseForm.editExpense.value = currentExpense
      this.expenseToEditIndex = currentExpenseIndex

      this.#displayEditExpenseForm()
      this.editExpenseForm.editExpense.focus()
    }

    #collectAndDispatchFormValue() {
      try {
        const expenseAmount = this.#collectFormValue()
        this.#dispatchExpense(expenseAmount)
      } catch (error) {
        console.error('An error occured:', error.message)
        const userMessage = error.userMessage
        this.#dispatchErrorMessage(userMessage)
      }
    }

    #collectFormValue() {
      const expenseAmount = this.expenseFormHandler.getValidatedInputValueFromExpenseForm(this.expenseForm)
      return expenseAmount
    }

    #dispatchExpense(expenseAmount) {
      const expenseAdded = new CustomEvent('expenseAdded', {
        detail: {
          expense: expenseAmount,
        },
        bubbles: true,
      })
      this.dispatchEvent(expenseAdded)
    }

    #collectAndDispatchEditedExpenseValue() {
      try {
        const editedExpenseAmount = this.#collectEditFormValue()
        this.#dispatchEditExpenseValue(editedExpenseAmount)
      } catch (error) {
        console.error('An error occured when collecting and sending values from the expense form', error)
      }
    }

    #collectEditFormValue() {
      const inputValue = this.expenseFormHandler.getValidatedInputValueFromEditExpenseForm(this.editExpenseForm)
      return inputValue
    }

    #dispatchEditExpenseValue(editedExpenseAmount) {
      const expenseEdited = new CustomEvent('expenseEdited', {
        detail: {
          expense: editedExpenseAmount,
          index: this.expenseToEditIndex,
        },
        bubbles: true,
      })
      this.dispatchEvent(expenseEdited)
    }

    #dispatchErrorMessage(userMessage) {
      const errorOccurred = new CustomEvent('errorOccurred', {
        detail: {
          message: userMessage
        },

        bubbles: true,
        composed: true,
      })
      this.dispatchEvent(errorOccurred)
    }


    #displayExpenseForm() {
      this.editExpenseForm.style.display = 'none'
      this.expenseForm.style.display = 'block'
      this.editExpenseForm.reset()
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
