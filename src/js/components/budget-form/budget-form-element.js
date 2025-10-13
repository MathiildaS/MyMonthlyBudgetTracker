/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const budgetFormTemplate = document.createElement('template')
budgetFormTemplate.innerHTML = `
<style>
</style>
<div>
<form id="budgetForm">
<input type="text" name="budget" placeholder="Add this months budget" required />
<button type="submit">Add as budget</button>
</form>
</div>
`

customElements.define('budget-form-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(budgetFormTemplate.content.cloneNode(true))
    }
  }
)
