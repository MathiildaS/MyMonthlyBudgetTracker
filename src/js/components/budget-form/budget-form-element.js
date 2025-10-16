/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { budgetHandler } from '../../logic/budgetHandler.js'

const budgetFormTemplate = document.createElement('template')
budgetFormTemplate.innerHTML = `
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

  input, select {
    font-family: 'DynaPuff';
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
  }

  #budgetForm {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "budget currency"
      "submit submit";
    gap: 0.5rem;
    align-items: stretch;
  }

  #budgetForm input {
    grid-area: budget;
  }

  #budgetForm select {
    grid-area: currency;
  }
  
  #budgetForm button {
    grid-area: submit;
  }

  #currency {
    background-color: #b0a8d6b9;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  #currency:hover {
    background-color: #9fa0d6;
  }
</style>
<div>
  <form id='budgetForm'>
    <input type='text' name='budget' placeholder='Add this months budget' required />
    <select name="currency" id="currency" required>
      <option value="KR">SEK</option>
      <option value="$">USD</option>
      <option value="€">EUR</option>
      <option value="£">GBP</option>
      <option value="A$">AUD</option>
      <option value="CN¥">CNY</option>
      <option value="JP¥">JPY</option>
    </select>
    <button type='submit'>ADD BUDGET</button>
  </form>
</div>
`

customElements.define('budget-form-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the budget-form-element and attach the template to its shadow root.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(budgetFormTemplate.content.cloneNode(true))

      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      this.form = this.shadowRoot.querySelector('#budgetForm')
    }

    connectedCallback() {
      this.form.addEventListener('submit', (event) => {
        this.#onSubmitCollectAndSendFormValues(event)
      }, { signal: this.abortController.signal })
    }

    #onSubmitCollectAndSendFormValues(event) {
      event.preventDefault()
      const budgetForm = this.form
      try {
        this.#collectFormValuesAndSendBudget(budgetForm)
      } catch (error) {
        console.error('An error occured when collecting and sending values from the budget form', error)
      }
    }

    #collectFormValuesAndSendBudget(budgetForm) {
      const { input, option } = budgetHandler.getInputAndOptionValueFromBudgetForm(budgetForm)
      this.#setAndSendBudgetAndCurrency(input, option)
      this.form.reset()
    }

    #setAndSendBudgetAndCurrency(input, option) {
      const budgetAdded = new CustomEvent('budgetAdded', {
        detail: {
          budget: input,
          currency: option,
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
