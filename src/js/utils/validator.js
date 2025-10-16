/**
 * @file A module with methods to validate input.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class Validator {

  validateNumber(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error("The value must be a number, not positive Infinity, not negative Infinity or NaN.")
    }
    if (value <= 0) {
      throw new Error("The value must be larger than or zero.")
    }
    if (Number.isNaN(value)) {
      throw new Error('The value cannot be NaN.')
    }
    if (typeof value === 'string') {
      throw new Error('The value must not be a string.')
    }
    if (value === null || value === undefined) {
      throw new Error('The value is missing or undefined.')
    }
    if (value > 10000000) {
      throw new Error("The value must be less than 10.000.000")
    }
  }

  validateString(value) {
    if (typeof value !== "string") {
      throw new Error("The value must be a string.")
    }
    if (value === null || value === undefined) {
      throw new Error('The value is missing or undefined.')
    }
    if (typeof value === 'string' && value.trim() === '') {
      throw new Error('The value must not be empty.')
    }
  }
}