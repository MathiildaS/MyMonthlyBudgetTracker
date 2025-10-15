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

input {
  font-family: 'DynaPuff';
  padding: 0.5rem 1rem;
}
</style>
<div>
<form id='budgetForm'>
<input type='text' name='budget' placeholder='Add this months budget' required />
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
      this.budget = 0
    }

    connectedCallback() {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.collectFormDataAndSendBudget()
      })
    }

    collectFormDataAndSendBudget() {
      const formData = new FormData(this.form)
      const budget = formData.get('budget')
      this.sendAddedBudget(budget)
      this.form.reset()
    }

    sendAddedBudget(budget) {
      const budgetAdded = new CustomEvent('budgetAdded', {
        detail: {
          budget: budget,
        },
        bubbles: true,
      })
      this.dispatchEvent(budgetAdded)
    }
  }
)
