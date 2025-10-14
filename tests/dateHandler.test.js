import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { DateHandler } from "../src/js/utils/dateHandler.js"

describe("test dateHandler class", () => {
    let dateHandler

  beforeEach(() => {
    vi.useFakeTimers()

    vi.setSystemTime(new Date(2025, 9, 14))

    dateHandler = new DateHandler()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return the name of the current month', () =>  {
expect(dateHandler.getCurrentMonth()).toBe('October')
  })

    it('should return the current year', () =>  {
expect(dateHandler.getCurrentYear()).toBe(2025)
  })
})