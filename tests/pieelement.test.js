/* @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi } from "vitest"
import "../src/js/components/pie/index.js"

let pieElement
describe("test pie-element component", () => {
  beforeEach(() => {
    document.body.innerHTML = ""

    pieElement = document.createElement("pie-element")
  })

  it("should be initialized with base value", () => {
    expect(pieElement.shadowRoot).not.toBeNull()
  })

  it("should display slice of pie based on input 100", () => {
    pieElement.pieRender = { createSlice: vi.fn() }
    pieElement.displaySliceOnPieBasedOnInput(100)
    expect(pieElement.pieRender.createSlice).toHaveBeenCalledWith(100)
  })

  it("should set colour of pie", () => {
    pieElement.pieRender = { setPieColour: vi.fn() }
    pieElement.setColourOfPie('#FFFFFF')
    expect(pieElement.pieRender.setPieColour).toHaveBeenCalledWith('#FFFFFF')
  })

  it("should set colour of slice on pie", () => {
    pieElement.pieRender = { setSliceColour: vi.fn() }
    pieElement.setColourOfSlicesOnPie('#590000')
    expect(pieElement.pieRender.setSliceColour).toHaveBeenCalledWith('#590000')
  })

  it("should set warning and dangerous boundaries of pie", () => {
    pieElement.pieRender = { setPieBoundaries: vi.fn() }
    pieElement.setWarningAndDangerBoundariesForPie(25, 10)
    expect(pieElement.pieRender.setPieBoundaries).toHaveBeenCalledWith(25, 10)
  })

  it("should set colour of pie when reaching warning and danger state", () => {
    pieElement.pieRender = { setStateColours: vi.fn() }
    pieElement.setColoursOfWarningAndDangerBoundaries('#ffae00', '#590000')
    expect(pieElement.pieRender.setStateColours).toHaveBeenCalledWith('#ffae00', '#590000')
  })

  it("should display text next to pie", () => {
    pieElement.pieRender = { displayPercentText: vi.fn() }
    pieElement.displayTextOnCanvas(true)
    expect(pieElement.pieRender.displayPercentText).toHaveBeenCalledWith(true)
  })

  it("should set font colour of text on pie", () => {
    pieElement.pieRender = { setFontColour: vi.fn() }
    pieElement.setColourOfTextOnCanvas('#ffae00')
    expect(pieElement.pieRender.setFontColour).toHaveBeenCalledWith('#ffae00')
  })

  it("should set font size of text on pie", () => {
    pieElement.pieRender = { setFontSize: vi.fn() }
    pieElement.setSizeOfTextOnCanvas(45)
    expect(pieElement.pieRender.setFontSize).toHaveBeenCalledWith(45)
  })
})
