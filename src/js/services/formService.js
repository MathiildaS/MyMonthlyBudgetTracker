/**
 * @file A module for the formService. This class handles the instantiation of Parser class, Validator class and injects them as dependencies 
 * when instantiating the BudgetFormHandler class and ExpenseFormHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { Parser } from "../utils/parser.js"
import { Validator } from "../utils/validator.js"
import { BudgetFormHandler } from '../../logic/budgetFormHandler.js'
import { ExpenseFormHandler } from '../../logic/expenseFormHandler.js'

export class FormService {
  #parser
  #validator

  constructor() {
    this.#parser = new Parser()
    this.#validator = new Validator()
  }

  createBudgetFormHandler() {
    return new BudgetFormHandler(this.#parser, this.#validator)
  }

  createExpenseFormHandler() {
    return new ExpenseFormHandler(this.#parser, this.#validator)
  }
}