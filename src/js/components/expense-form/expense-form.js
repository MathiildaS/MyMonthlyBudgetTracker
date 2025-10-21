/**
 * @file A module for the custom web component expense-form that renders a form to submit an expense and edit it.
 * Validation is done through an FormService-instance and user interaction events are dispatched for other components to listen to.
 * User-friendly error messages are dispatched and handled by other component.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './expense-form.html.js'
import { cssTemplate } from './expense-form.css.js'

import { FormService } from '../../services/formService.js'

customElements.define('expense-form',

  class extends HTMLElement {
    #expenseToEditIndex

    constructor() {
      super()

      // Injects the components CSS and HTML template to the shadow root for encapsulation.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // Creates a new FormService instance to validate and extract form values.
      this.formService = new FormService()
      this.expenseFormHandler = this.formService.getExpenseFormHandler()

      // References to the elements in the DOM for reusability and readability.
      this.expenseForm = this.shadowRoot.querySelector('#expenseForm')
      this.editExpenseForm = this.shadowRoot.querySelector('#editExpenseForm')

      this.#expenseToEditIndex
    }

    /**
     * Called when the component is added to the DOM. Listens for events to control the view and to collect the input values from the form-elements. 
     * The values representing the new expense or expense to edit are dispatched in a custom event for other components to listen to. 
     * Dispatches an errorOccured custom event if error occurs.
     */
    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.editExpenseForm.style.display = 'none'

      this.expenseForm.addEventListener('submit', (event) => {
        event.preventDefault()

        try {
          this.#collectAndDispatchAddedExpense()
          this.expenseForm.reset()
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })

      this.editExpenseForm.addEventListener('submit', (event) => {
        event.preventDefault()

        try {
          this.#collectAndDispatchEditedExpense()
          this.#displayExpenseForm()
        } catch (error) {
          this.#handleError(error)
        }
      }, { signal: this.abortController.signal })
    }

    /**
     * Called when disconnected from DOM. 
     * Aborts event listeners to prevent memory leaks.
     */
    disconnectedCallback() {
      this.abortController.abort()
    }

    /**
     * @param {number} currentExpense - The current value of the expense to edit.
     * @param {number} currentExpenseIndex - The index of the current expense to edit.
     */
    displayEditExpenseForm(currentExpense, currentExpenseIndex) {
      this.editExpenseForm.editExpense.value = currentExpense
      this.#expenseToEditIndex = currentExpenseIndex

      this.#displayEditExpenseForm()
      this.editExpenseForm.editExpense.focus()
    }

    /**
     * Reset the editExpenseForm to remove old input before viewing the expenseForm.
     */
    #displayExpenseForm() {
      this.editExpenseForm.reset()
      this.editExpenseForm.style.display = 'none'
      this.expenseForm.style.display = 'grid'
    }

    #displayEditExpenseForm() {
      this.editExpenseForm.style.display = 'grid'
      this.expenseForm.style.display = 'none'
    }

    #collectAndDispatchAddedExpense() {
      const expenseAmount = this.#getExpense()
      this.#dispatchExpense(expenseAmount)
    }

    /**
     * Collects and returns the validated expense through the ExpenseFormHandler-instance.
     *
     * @returns {number} - The validated number representing an expense.
     */
    #getExpense() {
      const expenseAmount = this.expenseFormHandler.getValidatedInputValueFromExpenseForm(this.expenseForm)
      return expenseAmount
    }

    #collectAndDispatchEditedExpense() {
      const editedExpenseAmount = this.#collectEditedExpense()
      this.#dispatchEditedExpense(editedExpenseAmount)
    }

    /**
     * Collects and returns the validated updated expense through the ExpenseFormHandler-instance.
     *
     * @returns {number} - The validated number representing the edited expense.
     */
    #collectEditedExpense() {
      const inputValue = this.expenseFormHandler.getValidatedInputValueFromEditExpenseForm(this.editExpenseForm)
      return inputValue
    }

    /**
     * @param {Error} error - The error object containing custom userMessage for user display.
     */
    #handleError(error) {
      console.error('An error occured:', error.message, error)
      const userMessage = error.userMessage
      this.#dispatchErrorMessage(userMessage)
    }

    /**
     * @param {number} expenseAmount - The expense to store as expense.
     */
    #dispatchExpense(expenseAmount) {
      const expenseAdded = new CustomEvent('expenseAdded', {
        detail: {
          expense: expenseAmount,
        },
        bubbles: true,
        composed: true
      })
      this.dispatchEvent(expenseAdded)
    }

    /**
     * @param {number} editedExpenseAmount - The edited expense to store as expense.
     */
    #dispatchEditedExpense(editedExpenseAmount) {
      const expenseEdited = new CustomEvent('expenseEdited', {
        detail: {
          expense: editedExpenseAmount,
          index: this.#expenseToEditIndex,
        },
        bubbles: true,
        composed: true
      })
      this.dispatchEvent(expenseEdited)
    }

    /**
     * @param {string} userMessage - The user friendly message when error occurs.
     */
    #dispatchErrorMessage(userMessage) {
      const errorOccurred = new CustomEvent('errorOccurred', {
        detail: {
          message: userMessage
        },

        bubbles: true,
        composed: true
      })
      this.dispatchEvent(errorOccurred)
    }
  }
)
