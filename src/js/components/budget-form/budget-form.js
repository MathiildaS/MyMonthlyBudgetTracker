/**
 * @file A module for a custom web component that renders a form to submit a budget and choose a currency.
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

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // Creates a new FormService instance to validate and extract form values.
      this.formService = new FormService()
      this.budgetFormHandler = this.formService.createBudgetFormHandler()

      this.form = this.shadowRoot.querySelector('#budgetForm')
    }

    /**
     * Called when added to the DOM. Collects the input value representing the budget and selected option representing the currency 
     * from the form-element and dispatches them in a custom event.
     */
    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.form.addEventListener('submit', (event) => {
        event.preventDefault()

        this.#collectAndDispatchFormValues()
        this.form.reset()
      }, { signal: this.abortController.signal })
    }

    #collectAndDispatchFormValues() {
      try {
        const { inputValue, optionValue } = this.#collectFormValues()
        this.#dispatchFormValues(inputValue, optionValue)
      } catch (error) {
        console.error('An error occured:', error.message)
        const userMessage = error.userMessage
        this.#dispatchErrorMessage(userMessage)
      }
    }

    #collectFormValues() {
      const { inputValue, optionValue } = this.budgetFormHandler.getInputOptionValue(this.form)
      return { inputValue, optionValue }
    }

    #dispatchFormValues(inputValue, optionValue) {
      const budgetAdded = new CustomEvent('budgetAdded', {
        detail: {
          budget: inputValue,
          currency: optionValue,
        },

        bubbles: true,
      })
      this.dispatchEvent(budgetAdded)
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

    /**
     * Called when disconnected from DOM. 
     * Aborts event listeners to prevent memory leaks.
     */
    disconnectedCallback() {
      this.abortController.abort()
    }
  }
)
