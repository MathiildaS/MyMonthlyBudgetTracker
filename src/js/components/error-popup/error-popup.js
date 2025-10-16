/**
 * @file A module for a custom web component that renders a pop-up with an error message for the user.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './error-popup.html.js'
import { cssTemplate } from './error-popup.css.js'

customElements.define('error-popup',

  class extends HTMLElement {

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))
    }
    })
