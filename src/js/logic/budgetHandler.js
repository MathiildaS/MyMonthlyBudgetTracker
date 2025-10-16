class BudgetHandler {

getInputAndOptionValueFromBudgetForm(form) {
        const formData = new FormData(form)
        const input = formData.get('budget')
        const option = formData.get('currency')
        return { input, option }
    }
}

export const budgetHandler = new BudgetHandler