import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { DateHandler } from "../src/js/utils/dateHandler.js"

describe("test dateHandler class", () => {
  let dateHandler

  beforeEach(() => {
    vi.useFakeTimers()

    dateHandler = new DateHandler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should return the current date", () => {
    vi.setSystemTime(new Date())
    const currentDate = new Date()
    expect(dateHandler.getCurrentDate()).toStrictEqual(currentDate)
  })

  it("should return the name of the current month", () => {
    vi.setSystemTime(new Date(2025, 9, 14))
    expect(dateHandler.getCurrentMonth()).toBe("October")
  })

  it("should return the current year", () => {
    vi.setSystemTime(new Date(2025, 9, 14))
    expect(dateHandler.getCurrentYear()).toBe(2025)
  })

  it("should update month", () => {
    vi.setSystemTime(new Date(2026, 2, 14))
    expect(dateHandler.getCurrentMonth()).toBe("March")
  })

  it("should update year", () => {
    vi.setSystemTime(new Date(2026, 2, 14))
    expect(dateHandler.getCurrentYear()).toBe(2026)
  })
})
