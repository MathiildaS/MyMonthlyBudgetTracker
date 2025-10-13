/**
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { PieRender } from "pie-render"

const pieTemplate = document.createElement("template")
pieTemplate.innerHTML = `
<style>
</style>
<canvas id="canvasElement" width="300" height="300"></canvas>
`

customElements.define(
  "pie-element",

  class extends HTMLElement {
    /**
     * Create a shadow DOM for the pie-element and attach the template to its shadow root.
     */
    constructor() {
      super()

      this.attachShadow({ mode: "open" }).appendChild(
        pieTemplate.content.cloneNode(true)
      )
      this.canvas = this.shadowRoot.querySelector("#canvasElement")
      this.pieRender
    }

    connectedCallback() {

    }

    initializePieRenderModuleWithBaseAmount(baseAmountOfBudget) {
      this.pieRender = new PieRender(this.canvas, baseAmountOfBudget)
    }

    displaySliceOnPieBasedOnInput(expenseAmount) {
      this.pieRender.createSlice(expenseAmount)
    }

    setWarningAndDangerBoundariesForPie(warningBoundary, dangerBoundary) {
      this.pieRender.setPieBoundaries(warningBoundary, dangerBoundary)
    }

    setColoursOfWarningAndDangerBoundaries(warningColour, dangerColour) {
      this.pieRender.setStateColours(warningColour, dangerColour)
    }

    setColourOfPie(colourOfPie) {
      this.pieRender.setPieColour(colourOfPie)
    }

    setColourOfSlicesOnPie(colourOfSlice) {
      this.pieRender.setSliceColour(colourOfSlice)
    }

    displayTextOnCanvas(boolean) {
      this.pieRender.displayPercentText(boolean)
    }

    setColourOfTextOnCanvas(colourOfText) {
      this.pieRender.setFontColour(colourOfText)
    }

    setSizeOfTextOnCanvas(sizeOfText) {
      this.pieRender.setFontSize(sizeOfText)
    }

    getStateOfPie() {
      this.pieRender.getCurrentStateOfPie()
    }
  }
)
