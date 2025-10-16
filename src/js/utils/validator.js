/**
 * @file A module with methods to validate input.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class Validator {

  validateNumberInput(input) {
    if (typeof input !== "number" || !Number.isFinite(input)) {
      throw new Error("The value must be a number, not positive Infinity, not negative Infinity or NaN.")
    }
    if (input <= 0) {
      throw new Error("The value must be larger than or zero.")
    }
    if (Number.isNaN(input)) {
      throw new Error('The value cannot be NaN.')
    }
    if (typeof input === 'string') {
      throw new Error('The value must not be a string.')
    }
    if (input === null || input === undefined) {
      throw new Error('The value is missing or undefined.')
    }
    if (input > 10000000) {
      throw new Error("The value must be less than 10.000.000")
    }
  }

  validateStringInput(input) {
    if (typeof input !== "string") {
      throw new Error("The value must be a string.")
    }
    if (input === null || input === undefined) {
      throw new Error('The value is missing or undefined.')
    }
  }

  validateInputExist(input) {
    if (!input)
      return
  }
}