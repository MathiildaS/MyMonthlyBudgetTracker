/**
 * @file A module for the Parser. This class contains methods to parse values.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class Parser {

  /**
   * Trim and remove whitespaces before parsing to number.
   *
   * @param {*} value - The unknown value to parse to number.
   * @returns {number} - The parsed value as number.
   */
  parseValueToNumber(value) {
    const trimmedValue = String(value).trim()
    const wsRemoved = trimmedValue.replace(/\s+/g, '')
    const parsedValue = Number(wsRemoved)

    return parsedValue
  }

  /**
   * Parse value to string, trim and remove whitespaces.
   *
   * @param {*} value - The unknown value to parse to number.
   * @returns {number} - The parsed value as number.
   */
  parseValueToString(value) {
    const parsedToString = String(value)
    const trimmedString = parsedToString.trim()
    const stringValue = trimmedString.replace(/\s+/g, '')

    return stringValue
  }
}