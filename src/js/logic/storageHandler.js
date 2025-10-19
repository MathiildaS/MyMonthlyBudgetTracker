/**
 * @file A module for the StorageHandler. This class handles logic to save and load to and from localStorage.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetFormHandler {
  #yearMonthKey
  #budgetToStore

constructor(yearMonthKey, budgetToStore) {
this.#yearMonthKey = yearMonthKey
this.#budgetToStore = budgetToStore
}

setYearMonthKey(yearMonthKey) {
this.#yearMonthKey = yearMonthKey
}

setBudgetToStore(budgetToStore) {
this.#budgetToStore = budgetToStore
}

saveBudget() {

}

loadBudget() {

}

deleteStoredBudget() {
  
}
}