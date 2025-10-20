/**
 * @file A module for the ExpenseFormHandler that extracts, validates and parses the value from form-elements with input named 'expense' and 'editExpense'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class ExpenseFormHandler {
#parser
#validator

/**
 * Creates and initializes an instance of the class with an instance of Parser and Validator classes to parse and validate input values.
 *
 * @param {Parser} parser - An isntance of the Parser-class.
 * @param {Validator} validator - An instance of the Validator-class.
 */
    constructor(parser, validator) {
    this.#parser = parser
    this.#validator = validator
  }

  /**
   * Extracts, validates and parses the input value named `expense` to make sure it's a valid number before returning the value.
   *
   * @param {HTMLFormElement} expenseForm - a form element named expenseForm
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   * @returns The validated and parsed `expense` input value.
   */
  getInputValueFromExpenseForm(expenseForm) {
    const expenseFormData = new FormData(expenseForm)
    const inputValue = expenseFormData.get('expense')
    this.#parseAndValidateFormInput(inputValue)
    return inputValue
  }

  /**
   * Extracts, validates and parses the input value named `editExpense` to make sure it's a valid number before returning the value.
   *
   * @param {HTMLFormElement} editExpenseForm - A form element namned editExpenseForm
   * @throws {Error} - Throws error with custom userMessage if fail when parsing and validating the input value.
   * @returns The validated and parsed `editExpense` input value.
   */
  getInputValueFromEditExpenseForm(editExpenseForm) {
    const editExpenseFormData = new FormData(editExpenseForm)
    const editedInputValue = editExpenseFormData.get('editExpense')
    this.#parseAndValidateFormInput(editedInputValue)
    return editedInputValue
  }

  #parseAndValidateFormInput(inputValue) {
    const parsedFormInput = this.#parser.parseValueToNumber(inputValue)
    this.#validator.validateNumber(parsedFormInput)
  }
}
