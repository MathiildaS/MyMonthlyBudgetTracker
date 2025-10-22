/**
 * @file A module for the custom web component pie-element that initializes a new PieRender instance from the imported pie-render module. 
 * The component uses methods form the PieRender API that renders a pie on canvas and allow visual configuration of it.
 * The pie-element is used as a visualization of a monthly budget.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { cssTemplate } from './pie-element.css.js'
import { htmlTemplate } from './pie-element.html.js'

import { PieRender } from "pie-render"

customElements.define("pie-element",

  class extends HTMLElement {

    constructor() {
      super()

      // Injects the components CSS and HTML template to the shadow root for encapsulation
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true))
      this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true))

      // References to the elements in the DOM for reusability and readability.
      this.canvas = this.shadowRoot.querySelector("#canvasElement")
      
      this.pieRender
    }

    /**
     * Initializes and stores a PieRender instance created with the canvas element in the html template and set budget.
     *
     * @param {number} budget - The base amount of the pie representing the set budget.
     */
    initializePieRenderWithBudget(budget) {
      this.pieRender = new PieRender(this.canvas, budget)
    }

    /**
     * Makes sure the pie-render instance is initialized before adding a new slice on the pie based on added expense.
     *
     * @param {number} expense - The expense value to be visualized as a slice on the pie.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    displaySliceOnPieBasedOnExpense(expense) {
      this.#checkPieExistence()
      this.pieRender.createSlice(expense)
    }

    /**
     * Makes sure the pie-render instance is initialized before determining the boundaries for when the pie reaches warning and danger state. 
     *
     * @param {number} warningBoundary - The boundary for when budget reaches the warning-state.
     * @param {number} dangerBoundary - The boundary for when budget reaches the danger-state.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    setWarningAndDangerBoundariesForPie(warningBoundary, dangerBoundary) {
      this.#checkPieExistence()
      this.pieRender.setPieBoundaries(warningBoundary, dangerBoundary)
    }

    /**
     * Makes sure the pie-render instance is initialized before determining the colour of the remaining budget for when the pie reaches warning and danger state. 
     * 
     * @param {string} warningColour - The colour of the visualized remaining budget for when the pie reaches warning state.
     * @param {string} dangerColour - The colour of the visualized remaining budget for when the pie reaches danger state.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    setColoursOfWarningAndDangerBoundaries(warningColour, dangerColour) {
      this.#checkPieExistence()
      this.pieRender.setStateColours(warningColour, dangerColour)
    }

    /**
     * Makes sure the pie-render instance is initialized before setting the colour of the visualized budget of the pie.
     *
     * @param {string} colourOfBudget - The colour of the budget a.k.a the pie.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    setColourOfBudget(colourOfBudget) {
      this.#checkPieExistence()
      this.pieRender.setPieColour(colourOfBudget)
    }

    /**
     * Makes sure the pie-render instance is initialized before setting the colour of the visualized expenses of the pie.
     *
     * @param {string} colourOfExpense - The colour of the expenses a.k.a the slices of the pie.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    setColourOfExpense(colourOfExpense) {
      this.#checkPieExistence()
      this.pieRender.setSliceColour(colourOfExpense)
    }

    /**
     * Makes sure the pie-render instance is initialized before displaying the text of the remaining percent of the budget.
     *
     * @param {boolean} boolean - true for displaying the text and false for not displaying the text.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    displayRemainingPercentOfBudget(boolean) {
      this.#checkPieExistence()
      this.pieRender.displayPercentText(boolean)
    }

    /**
     * Makes sure the pie-render instance is initialized before setting the colour of the text showing remaining percent of budget.
     *
     * @param {string} colourOfText - The font colour of the text.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    setPercentTextColour(colourOfText) {
      this.#checkPieExistence()
      this.pieRender.setFontColour(colourOfText)
    }

    /**
     * Makes sure the pie-render instance is initialized before setting the size of the text showing remaining percent of budget.
     *
     * @param {number} sizeOfText - The font size of the text.
     * @throws {Error} If the PieRender instance has not yet been initialized.
     */
    setPercentTextSize(sizeOfText) {
      this.#checkPieExistence()
      this.pieRender.setFontSize(sizeOfText)
    }

    #checkPieExistence() {
      if (!this.pieRender) {
        throw new Error('The pie-render has not yet been initialized')
      }
    }
  }
)
