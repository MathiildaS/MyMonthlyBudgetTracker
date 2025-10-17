/**
 * @file A module for the ExpenseFormHandler that extracts the value from an input element named 'expense' and 'editExpense'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class ExpenseFormHandler {
#parser
#validator

    constructor(parser, validator) {
    this.#parser = parser
    this.#validator = validator
  }

  getInputValue(expenseForm) {
    const expenseFormData = new FormData(expenseForm)
    const inputValue = expenseFormData.get('expense')
    this.#validateFormInput(inputValue)
    return inputValue
  }

  getEditedInputValue(editExpenseForm) {
    const editExpenseFormData = new FormData(editExpenseForm)
    const editedInputValue = editExpenseFormData.get('editExpense')
    this.#validateFormInput(editedInputValue)
    return editedInputValue
  }

  #validateFormInput(inputValue) {
    const parsedFormInput = this.#parser.parseValueToNumber(inputValue)
    this.#validator.validateNumber(parsedFormInput)
  }
}
