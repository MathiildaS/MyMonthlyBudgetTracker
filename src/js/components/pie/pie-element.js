/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

const pieTemplate = document.createElement('template')
pieTemplate.innerHTML = `
<style>
</style>
`

customElements.define('pie-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the pie-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(pieTemplate.content.cloneNode(true))
    }
  }
)