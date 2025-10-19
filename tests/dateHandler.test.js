import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { DateHandler } from "../src/js/logic/dateHandler.js"

describe("test dateHandler class", () => {
  let dateHandler

  beforeEach(() => {
    vi.useFakeTimers()

    dateHandler = new DateHandler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should return year and month for the current date", () => {
    vi.setSystemTime(new Date(2025, 9, 19))
    expect(dateHandler.getCurrentYearMonth()).toBe("2025-October")
  })

  it("should update year and month when time changes", () => {
    vi.setSystemTime(new Date(2026, 2, 14))
    expect(dateHandler.getCurrentYearMonth()).toBe("2026-March")
  })

  it("should return remaining days in a month with 31 days", () => {
    vi.setSystemTime(new Date(2025, 9, 19))
    expect(dateHandler.getRemainingDaysOfMonth()).toBe(12)
  })

  it("should return remaining days in a month with 30 days", () => {
    vi.setSystemTime(new Date(2025, 3, 10))
    expect(dateHandler.getRemainingDaysOfMonth()).toBe(20)
  })

  it("should return no remaining days on the last day of the month", () => {
    vi.setSystemTime(new Date(2025, 9, 31))
    expect(dateHandler.getRemainingDaysOfMonth()).toBe(0)
  })

  it("should return one day less on the first day of the month", () => {
    vi.setSystemTime(new Date(2025, 9, 1))
    expect(dateHandler.getRemainingDaysOfMonth()).toBe(30)
  })
})