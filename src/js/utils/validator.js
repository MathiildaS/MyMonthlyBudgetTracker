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
      throw new Error("The value must be larger than zero")
    }
  }

  validateStringInput(input) {

    throw new Error("")
  }

  validateInputExist(input) {
    if (!input)
      return
  }
}