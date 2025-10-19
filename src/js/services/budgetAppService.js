/**
 * @file A module for the BudgetAppService. This class handles the instantiation of DateHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { Parser } from '../utils/parser.js'
import { DateHandler } from '../logic/dateHandler.js'
import { BudgetAppHandler } from '../logic/budgetAppHandler.js'
import { StorageHandler } from '../logic/storageHandler.js'

export class BudgetAppService {
    #dateHandler
    #parser
    #storageHandler

    constructor() {
        this.#dateHandler = new DateHandler()
        this.#parser = new Parser()
        this.#storageHandler = new StorageHandler()
    }

    getBudgetAppHandler() {
        return new BudgetAppHandler(this.#dateHandler, this.#parser, this.#storageHandler)
    }
}