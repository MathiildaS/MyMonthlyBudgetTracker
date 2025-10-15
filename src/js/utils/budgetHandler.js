class BudgetHandler {

getBudgetFormValues(form) {
        const formData = new FormData(form)
        const budget = formData.get('budget')
        let currency = formData.get('currency')

        return { budget, currency }
    }
}

export const budgetHandler = new BudgetHandler