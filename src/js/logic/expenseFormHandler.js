/**
 * @file A module for the ExpenseFormHandler that extracts the value from an input element named 'expense' and 'editExpense'.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export class ExpenseFormHandler {

  getInputValue(expenseForm) {
    const expenseFormData = new FormData(expenseForm)
    const expenseFormInput = expenseFormData.get('expense')
    return expenseFormInput
  }

  getEditedInputValue(editExpenseForm) {
    const editExpenseFormData = new FormData(editExpenseForm)
    const editExpenseFormInput = editExpenseFormData.get('editExpense')
    return editExpenseFormInput
  }
}
