/**
 * @file A module with a css template for the custom budget-form web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
<style>
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

  input, select {
    font-family: 'DynaPuff';
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
  }

  #budgetForm {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "budget currency"
      "submit submit";
    gap: 0.5rem;
    align-items: stretch;
  }

  #budgetForm input {
    grid-area: budget;
  }

  #budgetForm select {
    grid-area: currency;
  }
  
  #budgetForm button {
    grid-area: submit;
  }

  #currency {
    background-color: #b0a8d6b9;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  #currency:hover {
    background-color: #b0a8d6;
  }
</style>
`