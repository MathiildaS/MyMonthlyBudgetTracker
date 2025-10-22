/**
 * @file A module for the BudgetAppService. This class handles the instantiation of DateHandler class and StorageHandler class and injects them as dependencies 
 * when instantiating the BudgetAppHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { DateHandler } from '../logic/dateHandler.js'
import { BudgetAppHandler } from '../logic/budgetAppHandler.js'
import { StorageHandler } from '../logic/storageHandler.js'

/**
 * The class provides DateHandler and StorageHandler instances used as dependency injections to the BudgetAppHandler.
 */
export class BudgetAppService {
    #dateHandler
    #storageHandler

    constructor() {
        this.#dateHandler = new DateHandler()
        this.#storageHandler = new StorageHandler()
    }

    /**
     * @returns {BudgetAppHandler} - A BudgetAppHandler instance with DateHandler and StorageHandler dependencies.
     */
    getBudgetAppHandler() {
        return new BudgetAppHandler(this.#dateHandler, this.#storageHandler)
    }
}