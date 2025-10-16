/**
 * @file A module for the ExpenseFormHandler that extracts the value from an input element named 'expense' and 'editExpense'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { Parser } from "../utils/parser"
import { Validator } from "../utils/validator"

export class ExpenseFormHandler {

    constructor() {
    this.parser = new Parser()
    this.validator = new Validator()
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
    const parsedFormInput = this.parser.parseValueToNumber(inputValue)
    this.validator.validateNumber(parsedFormInput)
  }
}
