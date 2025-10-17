/**
 * @file A module for the BudgetAppHandler.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetAppHandler {
  #dateHandler
  #parser

  constructor(dateHandler, parser) {
    this.#dateHandler = dateHandler
    this.#parser = parser
  }

}