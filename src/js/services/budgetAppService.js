/**
 * @file A module for the BudgetAppService. This class handles the instantiation of DateHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { DateHandler } from '../logic/dateHandler.js'
import { BudgetAppHandler } from '../logic/budgetAppHandler.js'
import { StorageHandler } from '../logic/storageHandler.js'

export class BudgetAppService {
    #dateHandler
    #storageHandler

    constructor() {
        this.#dateHandler = new DateHandler()
        this.#storageHandler = new StorageHandler()
    }

    getBudgetAppHandler() {
        return new BudgetAppHandler(this.#dateHandler, this.#storageHandler)
    }
}