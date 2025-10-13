/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const foodBudgetTemplate = document.createElement('template')
foodBudgetTemplate.innerHTML = `
<style>
</style>
`

customElements.define('food-budget-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the food-budget-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(foodBudgetTemplate.content.cloneNode(true))
    }
  }
)
