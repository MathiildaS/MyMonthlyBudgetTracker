class BudgetHandler {

getBudgetAndCurrencyFromForm(form) {
        const formData = new FormData(form)
        const budget = formData.get('budget')
        const currency = formData.get('currency')
        return { budget, currency }
    }
}

export const budgetHandler = new BudgetHandler