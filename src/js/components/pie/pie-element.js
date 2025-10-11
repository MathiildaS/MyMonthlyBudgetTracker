/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { PieRender } from 'pie-render'

const pieTemplate = document.createElement('template')
pieTemplate.innerHTML = `
<style>
</style>
<canvas id="canvasElement" width="300" height="300"></canvas>
`

customElements.define('pie-element',

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the pie-element and attach the template to its shadow root.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(pieTemplate.content.cloneNode(true))
      this.canvas = this.shadowRoot.querySelector('#canvasElement')
    }

connectedCallback() {
    this.createElement()
}

    createElement() {
        const pieRender = new PieRender(this.canvas, 400)
    }
  }
)