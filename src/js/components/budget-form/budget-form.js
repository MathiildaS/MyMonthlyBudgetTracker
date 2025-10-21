/**
 * @file A module for the custom web component budget-form that renders a form to submit an budget and choose a currency.
 * Validation is done through an FormService-instance and user interaction events are dispatched for other components to listen to.
 * User-friendly error messages are dispatched and handled by other component.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './budget-form.html.js'
import { cssTemplate } from './budget-form.css.js'

import { FormService } from '../../services/formService.js'

customElements.define('budget-form',

  class extends HTMLElement {

    constructor() {
      super()

      // Injects the components CSS and HTML template to the shadow root for encapsulation
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // Creates a new FormService instance to validate and extract form values.
      this.formService = new FormService()
      this.budgetFormHandler = this.formService.getBudgetFormHandler()

      // Reference to the element in the DOM for reusability and readability.
      this.form = this.shadowRoot.querySelector('#budgetForm')
    }

    /**
     * Called when the component is added to the DOM. Listens for events to control the view and to collect the input values from the form-element.
     * The value representing the budget and currency are dispatched in a custom event for other components to listen to.
     * Dispatches an errorOccured custom event if error occurs.
     */
    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.form.addEventListener('submit', (event) => {
        event.preventDefault()

        try {
        this.#collectAndDispatchBudget()
        this.form.reset()
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
     * Collects and returns the validated budget through the ExpenseFormHandler-instance.
     *
     * @returns {object} - An object containing the validated budget and selected currency option.
     */
    #getBudgetAndCurrency() {
      const budgetAmount = this.budgetFormHandler.getValidatedInputFromBudgetForm(this.form)
      const optionCurrency = this.budgetFormHandler.getSelectedOptionFromBudgetForm(this.form)
      return { budgetAmount, optionCurrency }
    }


    #collectAndDispatchBudget() {
        const { budgetAmount, optionCurrency } = this.#getBudgetAndCurrency()
        this.#dispatchBudgetAmountAndCurrency(budgetAmount, optionCurrency)
    }

    /**
     * @param {Error} error - The error object containing custom userMessage for user display.
     */
    #handleError(error) {
      console.error('An error occured:', error.message, error)
      const userMessage = error.userMessage
      this.#dispatchErrorMessage(userMessage)
    }

    #dispatchBudgetAmountAndCurrency(inputAmount, optionCurrency) {
      const budgetAdded = new CustomEvent('budgetAdded', {
        detail: {
          budget: inputAmount,
          currency: optionCurrency,
        },

        bubbles: true,
      })
      this.dispatchEvent(budgetAdded)
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
        composed: true,
      })
      this.dispatchEvent(errorOccurred)
    }
  }
)
