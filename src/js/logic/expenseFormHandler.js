/**
 * @file A module for the ExpenseFormHandler that extracts, validates and parses the value from form-elements with input named 'expense' and 'editExpense'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates and initializes an instance of the class ExpenseFormHandler with Parser and Validator dependencies to parse and validate input values before returning them.
 */
export class ExpenseFormHandler {
  #parser
  #validator

  constructor(parser, validator) {
    this.#parser = parser
    this.#validator = validator
  }

  /**
   * @param {HTMLFormElement} expenseForm - a form element named expenseForm
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   * @returns {number} - The validated and parsed `expense` input value.
   */
  getValidatedInputValueFromExpenseForm(expenseForm) {
    const expenseFormData = new FormData(expenseForm)
    const inputValue = expenseFormData.get('expense')
    return this.#parseAndValidateFormInput(inputValue)
  }

  /**
   * @param {HTMLFormElement} editExpenseForm - A form element namned editExpenseForm
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   * @returns {number} - The validated and parsed `editExpense` input value.
   */
  getValidatedInputValueFromEditExpenseForm(editExpenseForm) {
    const editExpenseFormData = new FormData(editExpenseForm)
    const editedInputValue = editExpenseFormData.get('editExpense')
    return this.#parseAndValidateFormInput(editedInputValue)
  }

  /**
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   */
  #parseAndValidateFormInput(inputValue) {
    const parsedFormInput = this.#parser.parseValueToNumber(inputValue)
    this.#validator.validateNumber(parsedFormInput)
    return parsedFormInput
  }
}
