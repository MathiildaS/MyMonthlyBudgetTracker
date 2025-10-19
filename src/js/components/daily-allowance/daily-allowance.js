/**
 * @file A module for a custom web component that displays how much of a remaining budget for a current month, can be spent per day for the rest of the month.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './daily-allowance.html.js'
import { cssTemplate } from './daily-allowance.css.js'

customElements.define('daily-allowance',

  class extends HTMLElement {

    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      this.allowance = this.shadowRoot.querySelector('#allowance')

    }

    /**
     * Called when added to the DOM. Displays the daily allowance.
     */
    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      document.addEventListener('update-allowance', (event) => {
        const dailyAllowance = event.detail.allowance.toFixed(2)
        const currency = event.detail.currency
        this.allowance.textContent = `${dailyAllowance} ${currency}/DAY`
      }, { signal: this.abortController.signal })
    }

    /**
     * Called when disconnected from DOM. 
     * Aborts event listeners to prevent memory leaks.
     */
    disconnectedCallback() {
      this.abortController.abort()
    }
  }
)