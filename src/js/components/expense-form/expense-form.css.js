/**
 * @file A module with a css template for the custom expense-form web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
<style>
  .expenseForm {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    padding: 0.75rem;
    background: #ffffff;
    border: 1px solid rgba(31,35,48,.08);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,.06);
  }

  button {
    font-family: 'DynaPuff';
    background-color: #b0a8d6b9;
    color:  #ffffff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #b0a8d6;
  }

  input {
    font-family: 'DynaPuff';
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
  }

  #expenseForm {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "expense" 
      "submit";
    gap: 0.5rem;
    align-items: stretch;
  }

    #editExpenseForm {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "editExpense" 
      "submit";
    gap: 0.5rem;
    align-items: stretch;
  }

  #expenseForm input { 
    grid-area: expense;
  }

  #editExpenseForm input {
    grid-area: editExpense;
  }

  #expenseForm button, #editExpenseForm button { 
    grid-area: submit;
  }
</style>
`