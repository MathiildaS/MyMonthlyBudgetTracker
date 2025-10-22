/**
 * @file A module for the Validator. This class provides methods to validate number and string inputs. Throws error messages for developer and user.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class Validator {

  /**
   * @param {} value - The unknown value to validate as number.
   * @throws {Error} - Throws error with a developer message and a user-friendly message.
   */
  validateNumber(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      this.#throwError('The value must be a number, not positive Infinity, not negative Infinity or NaN.', 'Please enter a valid number.')
    }
    if (value <= 0) {
      this.#throwError('The value must be larger than or zero.', 'Please enter a value larger than zero.')
    }
    if (Number.isNaN(value)) {
      this.#throwError('The value cannot be NaN.', 'Please enter a valid number.')
    }
    if (typeof value === 'string') {
      this.#throwError('The value must not be a string.', 'Please enter a valid number.')
    }
    if (value === null || value === undefined) {
      this.#throwError('The value is missing or undefined.', 'Please enter value in input field before submitting.')
    }
    if (value > 10000000) {
      this.#throwError('The value must be less than 10.000.000', 'Please enter a numer less than 10.000.000')
    }
  }

  /**
   * @param {} value - The unknown value to validate as string.
   * @throws {Error} - Throws error with a developer message and a user-friendly message.
   */
  validateString(value) {
    if (typeof value !== 'string') {
      this.#throwError('The value must be a string.', 'Please enter a valid word.')

    }
    if (value === null || value === undefined) {
      this.#throwError('The value is missing or undefined.', 'Please enter a valid word.')
    }
    if (typeof value === 'string' && value.trim() === '') {
      this.#throwError('The value must not be empty.', 'Please enter value in input field before submitting.')
    }
  }

  /**
   * @param {string} message - The message for the developer.
   * @param {string} userMessage - The user friendly message.
   * @throws {Error} - Throws error with the developer message and the user-friendly message.
   */
  #throwError(message, userMessage) {
    const error = new Error(message)
    error.userMessage = userMessage
    throw error
  }
}