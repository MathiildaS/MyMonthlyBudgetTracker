/**
 * @file A module with a html template for the custom expense-form web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */
export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
<div>
  <form id='expenseForm'>
    <input type='text' name='expense' placeholder='Add your expense here' required />
    <button type='submit'>Add your expense</button>
  </form>
  <form id='editExpenseForm'>
    <input type='text' name='editExpense' placeholder='Edit your expense here' required />
    <button type='submit'>Edit your expense</button>
  </form>
</div>
`