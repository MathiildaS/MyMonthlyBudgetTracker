/**
 * @file A module with methods to parse values.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class Parser {

  // Trim and remove whitespaces before parsing to number.
  parseValueToNumber(value) {
    const trimmedValue = String(value).trim()
    const wsRemoved = trimmedValue.replace(/\s+/g, '')
    const parsedValue = Number(wsRemoved)

    return parsedValue
  }

  // Parse value to string, trim and remove whitespaces.
  parseValueToString(value) {
    const parsedToString = String(value)
    const trimmedString = parsedToString.trim()
    const stringValue = trimmedString.replace(/\s+/g, '')

    return stringValue
  }
}