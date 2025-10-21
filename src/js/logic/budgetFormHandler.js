/**
 * @file A module for the BudgetFormHandler. This class handles the extraction, parsing and validation of the value from form-element with input named 'budget' and the select-element named 'currency'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates and initializes an instance of the class BudgetFormHandler with Parser and Validator dependencies to parse and validate input values before returning them.
 *
 */
export class BudgetFormHandler {
  #parser
  #validator

  constructor(parser, validator) {
    this.#parser = parser
    this.#validator = validator
  }

  /**
  * @param {HTMLFormElement} budgetForm - a form-element named budgetForm
  * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
  * @returns {number} - The validated and parsed `budget` input value.
  */
  getValidatedInputFromBudgetForm(budgetForm) {
    const budgetFormData = new FormData(budgetForm)
    const inputValue = budgetFormData.get('budget')
    return this.#validateFormInput(inputValue)
  }

  /**
   * @param {HTMLFormElement} budgetForm - A form-element namned budgetForm
   * @returns {string} - The selected option from select-element named `currency`.
   */
  getSelectedOptionFromBudgetForm(budgetForm) {
    const budgetFormData = new FormData(budgetForm)
    const optionValue = budgetFormData.get('currency')
    return optionValue
  }

  /**
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   * @returns {number} - The validated and parsed input value.
   */
  #validateFormInput(inputValue) {
    const parsedFormInput = this.#parser.parseValueToNumber(inputValue)
    this.#validator.validateNumber(parsedFormInput)
    return parsedFormInput
  }
}