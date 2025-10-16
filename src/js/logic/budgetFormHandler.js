/**
 * @file A module for the BudgetFormHandler. This class handles the extraction of the input element named 'budget' and the select element named 'currency' from a budget form.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { Parser } from "../utils/parser"
import { Validator } from "../utils/validator"

export class BudgetFormHandler {

  constructor() {
    this.parser = new Parser()
    this.validator = new Validator()
  }

  getInputAndOption(budgetForm) {
    const budgetFormData = new FormData(budgetForm)
    const budgetFormInput = budgetFormData.get('budget')
    const budgetFormOption = budgetFormData.get('currency')
    this.#validateFormInput(budgetFormInput)
    return { budgetFormInput, budgetFormOption }
  }

  #validateFormInput(budgetFormInput) {
    const parsedFormInput = this.parser.parseValueToNumber(budgetFormInput)
    this.validator.validateNumber(parsedFormInput)
  }
}