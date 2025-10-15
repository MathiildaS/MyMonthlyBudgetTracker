/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

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

#budget { 
grid-area: budget; 
width: 100%; 
}

#currency { 
grid-area: currency; 
}
  #budgetForm button { 
  grid-area: submit; 
  width: 100%; 
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

customElements.define(
  'budget-form-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the element and attach the template to its shadow root.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(
        budgetFormTemplate.content.cloneNode(true)
      )

      this.form = this.shadowRoot.querySelector('#budgetForm')
      this.selectCurrency = this.shadowRoot.querySelector('#currency')
      this.budget = 0
      this.currency = 'KR'
    }

    connectedCallback() {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.collectFormDataAndSendBudget()
      })
    }

    collectFormDataAndSendBudget() {
      const formData = new FormData(this.form)
      this.budget = formData.get('budget')
      this.currency = this.selectCurrency.value
      this.sendAddedBudget()
      this.form.reset()
    }

    sendAddedBudget() {
      const budgetAdded = new CustomEvent('budgetAdded', {
        detail: {
          budget: this.budget,
          currency: this.currency,
        },
        bubbles: true,
      })
      this.dispatchEvent(budgetAdded)
    }
  }
)
