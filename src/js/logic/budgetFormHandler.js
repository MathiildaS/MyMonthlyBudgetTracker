/**
 * @file A module for the BudgetFormHandler. This class handles the extraction of the input element named 'budget' and the select element named 'currency' from a budget form.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetFormHandler {
#parser
#validator

  constructor(parser, validator) {
  this.#parser = parser
  this.#validator = validator
  }

  getInputOptionValue(budgetForm) {
    const budgetFormData = new FormData(budgetForm)
    const inputValue = budgetFormData.get('budget')
    const optionValue = budgetFormData.get('currency')
    this.#validateFormInput(inputValue)
    return { inputValue, optionValue }
  }

  #validateFormInput(inputValue) {
    const parsedFormInput = this.#parser.parseValueToNumber(inputValue)
    this.#validator.validateNumber(parsedFormInput)
  }
}