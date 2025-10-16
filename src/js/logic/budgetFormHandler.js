/**
 * @file A module for the BudgetFormHandler. This class handles the extraction of the input element named 'budget' and the select element named 'currency' from a budget form.
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export class BudgetFormHandler {

    getInputAndOption(budgetForm) {
        const budgetFormData = new FormData(budgetForm)
        const budgetFormInput = budgetFormData.get('budget')
        const budgetFormOption = budgetFormData.get('currency')
        return { budgetFormInput, budgetFormOption }
    }
}