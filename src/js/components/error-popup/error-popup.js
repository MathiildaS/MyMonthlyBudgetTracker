/**
 * @file A module for a custom web component error-popup that renders a pop-up with an error message for the user.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { htmlTemplate } from './error-popup.html.js'
import { cssTemplate } from './error-popup.css.js'

customElements.define('error-popup',

  class extends HTMLElement {

    constructor() {
      super()

      // Injects the components CSS and HTML template to the shadow root for encapsulation
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // References to the elements in the DOM for reusability and readability.
      this.popup = this.shadowRoot.querySelector('.popup')
      this.popupText = this.shadowRoot.querySelector('.popup-error')
    }

    /**
     * Called when added to the DOM. 
     * Display an pop-up with error message for 3 seconds when errorOccured custom event is dispatched.
     */
    connectedCallback() {
      // Creates a new AbortController object instance to remove event listeners.
      this.abortController = new AbortController()

      document.addEventListener('errorOccurred', (event) => {
        const errorMessage = event.detail.message
        this.#displayPopUp(errorMessage)
      }, { signal: this.abortController.signal })
    }

    /**
     * Called when disconnected from DOM. 
     * Aborts event listeners to prevent memory leaks.
     */
    disconnectedCallback() {
      this.abortController.abort()
    }

    #displayPopUp(errorMessage) {
      this.popupText.textContent = errorMessage
      this.popup.classList.add('display')

      setTimeout(() => {
        this.popup.classList.remove('display')
      }, 3000)
    }
  })
