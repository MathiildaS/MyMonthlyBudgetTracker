/**
 * @file A module for the budgetAppService. This class handles the instantiation of DateHandler class.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { DateHandler } from '../../logic/dateHandler.js'

export class budgetAppService {
  #dateHandler

  constructor() {
    this.#dateHandler = new DateHandler()
  }

  createDateHandler() {
    return this.#dateHandler
  }
}