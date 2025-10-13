/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const expensesFormTemplate = document.createElement('template')
expensesFormTemplate.innerHTML = `
<style>
</style>
`

customElements.define('expenses-form-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the expenses-form-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(expensesFormTemplate.content.cloneNode(true))
    }
  }
)
