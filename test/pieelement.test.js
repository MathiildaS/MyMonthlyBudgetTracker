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

  it("should change colour of pie", () => {
    pieElement.pieRender = { setPieColour: vi.fn() }
    pieElement.setColourOfPie('#FFFFFF')
    expect(pieElement.pieRender.setPieColour).toHaveBeenCalledWith('#FFFFFF')
  })

  it("should set warning and dangerous boundaries of pie", () => {
    pieElement.pieRender = { setPieBoundaries: vi.fn() }
    pieElement.setWarningAndDangerBoundariesForPie(25, 10)
    expect(pieElement.pieRender.setPieBoundaries).toHaveBeenCalledWith(25, 10)
  })
})
