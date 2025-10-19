/**
 * @file A module for a custom web component that displays how much of a remaining budget for a current month, can be spent per day for the rest of the month.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './budget-form.html.js'
import { cssTemplate } from './budget-form.css.js'

customElements.define('budget-form',

  class extends HTMLElement {

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

    }
})