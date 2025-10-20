/**
 * @file A module for the BudgetFormHandler. This class handles the extraction, parsing and validation of the value from form-element with input named 'budget' and the select-element named 'currency'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetFormHandler {
  #parser
  #validator

  /**
   * Creates and initializes an instance of the class BudgetFormHandler with an instance of Parser and Validator classes to parse and validate input values before returning them.
   *
   * @param {Parser} parser - An isntance of the Parser-class.
   * @param {Validator} validator - An instance of the Validator-class.
   */
  constructor(parser, validator) {
    this.#parser = parser
    this.#validator = validator
  }

  /**
  * @param {HTMLFormElement} budgetForm - a form-element named budgetForm
  * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
  * @returns {number} - The validated and parsed `budget` input value.
  */
  getValidatedInputValueFromBudgetForm(budgetForm) {
    const budgetFormData = new FormData(budgetForm)
    const inputValue = budgetFormData.get('budget')
    this.#validateFormInput(inputValue)
    return inputValue
  }

  /**
 * @param {HTMLFormElement} budgetForm - A form-element namned budgetForm
 * @returns {string} - The selected option from select-element named `currency`.
 */
  getSelectOptionFromBudgetForm(budgetForm) {
    const budgetFormData = new FormData(budgetForm)
    const optionValue = budgetFormData.get('currency')
    return optionValue
  }

  /**
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   */
  #validateFormInput(inputValue) {
    const parsedFormInput = this.#parser.parseValueToNumber(inputValue)
    this.#validator.validateNumber(parsedFormInput)
  }
}