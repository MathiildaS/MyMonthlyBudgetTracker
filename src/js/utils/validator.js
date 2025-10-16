/**
 * @file A module with methods to validate input.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class Validator {

  validateNumber(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      const error = new Error('The value must be a number, not positive Infinity, not negative Infinity or NaN.')
      error.userMessage = 'Please enter a valid number.'
      throw error
    }
    if (value <= 0) {
      const error = Error('The value must be larger than or zero.')
      error.userMessage = 'Please enter a value larger than zero.'
      throw error
    }
    if (Number.isNaN(value)) {
      const error = Error('The value cannot be NaN.')
      error.userMessage = 'Please enter a valid number.'
      throw error
    }
    if (typeof value === 'string') {
      const error = Error('The value must not be a string.')
      error.userMessage = 'Please enter a valid number.'
      throw error
    }
    if (value === null || value === undefined) {
      const error = Error('The value is missing or undefined.')
      error.userMessage = 'Please enter value in input field before submitting.'
      throw error
    }
    if (value > 10000000) {
      const error = Error('The value must be less than 10.000.000')
      error.userMessage = 'Please enter a numer less than 10.000.000'
      throw error
    }
  }

  validateString(value) {
    if (typeof value !== 'string') {
      const error = Error('The value must be a string.')
      error.userMessage = 'Please enter a valid word.'
      throw error
    }
    if (value === null || value === undefined) {
      const error = Error('The value is missing or undefined.')
      error.userMessage = 'Please enter a valid word.'
      throw error
    }
    if (typeof value === 'string' && value.trim() === '') {
      const error = Error('The value must not be empty.')
      error.userMessage = 'Please enter value in input field before submitting.'
      throw error
    }
  }
}