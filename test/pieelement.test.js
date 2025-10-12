/* @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi } from "vitest"
import "../src/js/components/pie/index.js"

let pieElement

describe("test pie-element component", () => {
  beforeEach(() => {
    document.body.innerHTML = ""

    pieElement = document.createElement("pie-element")
    document.body.appendChild(pieElement)
  })

  it("should be initialized with base value", () => {
    expect(pieElement.shadowRoot).not.toBeNull()
  })

  it("should display slice of pie based on input 100", () => {
    pieElement.pieRender = { createSlice: vi.fn() }
    pieElement.displaySliceOnPieBasedOnInput(100)
    expect(pieElement.pieRender.createSlice).toHaveBeenCalledWith(100)
  })
})
