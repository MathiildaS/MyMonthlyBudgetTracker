/**
 * @file A module for a custom web component that renders a form to submit a budget and choose a currency.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './budget-form.html.js'
import { cssTemplate } from './budget-form.css.js'

import { BudgetFormHandler } from '../../logic/budgetFormHandler.js'

customElements.define('budget-form-element',

  class extends HTMLElement {

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // Creates a new BudgetFormHandler instance to extract form values.
      this.budgetFormHandler = new BudgetFormHandler()

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
      const { budgetFormInput, budgetFormOption } = this.#collectFormValues()
      this.#dispatchFormValues(budgetFormInput, budgetFormOption)
    }

    #collectFormValues() {
      try {
        const { budgetFormInput, budgetFormOption } = this.budgetFormHandler.getInputAndOption(this.form)
        return { budgetFormInput, budgetFormOption }
      } catch (error) {
        console.error('An error occured when collecting and sending values from the budget form', error)
      }
    }

    #dispatchFormValues(budgetFormInput, budgetFormOption) {
      const budgetAdded = new CustomEvent('budgetAdded', {
        detail: {
          budget: budgetFormInput,
          currency: budgetFormOption,
        },

        bubbles: true,
      })
      this.dispatchEvent(budgetAdded)
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
