/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const budgetFormTemplate = document.createElement('template')
budgetFormTemplate.innerHTML = `
<style>
</style>
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
