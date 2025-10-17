/**
 * @file A module for the BudgetAppService. This class handles the instantiation of DateHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { Parser } from '../utils/parser.js'
import { DateHandler } from '../logic/dateHandler.js'
import { BudgetAppHandler } from '../logic/budgetAppHandler.js'

export class BudgetAppService {
    #dateHandler
    #parser

    constructor() {
        this.#dateHandler = new DateHandler()
        this.#parser = new Parser()
    }

    getBudgetAppHandler() {
        return new BudgetAppHandler(this.#dateHandler, this.#parser)
    }
}