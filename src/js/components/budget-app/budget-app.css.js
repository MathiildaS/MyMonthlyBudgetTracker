/**
 * @file A module with a css template for the custom budget-app web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const cssTemplate = document.createElement('template')

cssTemplate.innerHTML = `
<style>
  .main {
    display: grid;
    grid-template-columns: 300px 800px 300px;
    grid-template-areas: "left middle right";
    gap: 1rem;
    color: #2f2f3a;
  }

  .left, .middle, .right {
    min-height: 0;
  }

  .left { 
    grid-area: left;
    background-color: #ede9ff;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    overflow: auto;
  }

  .allowance > daily-allowance {
    display: block;
    width: 100%;
    max-width: 200px;
    padding: 1rem;
    border: 2px solid rgba(31,35,48,.08);
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
     background: #faf9fe;
  }

  .reset {
    margin-top: auto;
  }

  .middle { 
    grid-area: middle;
    background-color: #ede9ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  }

  .right { 
    grid-area: right;
    background-color: #ede9ff;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    overflow: auto;
  }

  .budgetForm {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expenseForm {
    display: none;
    align-items: center;
    justify-content: center;
  }

  .pieButton {
    display: none;
  }

  button {
    font-family: "DynaPuff";
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

  .budgetPie {
    display: none;
  }

  .expenses-remaining {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    row-gap: .25rem;
    align-items: start;
    justify-items: start; 
  }

  .expenses-remaining p {
    margin: 0;
    line-height: 1.5;
  }

  #expenses {
    grid-row: 1;
  }

  #expensesValue {
    grid-row: 2;
    justify-self: start;
  }

  #remaining {
    grid-row: 1;
  }

  #remainingValue {
    grid-row: 2;
    justify-self: center;
  }

  .edit-button, .delete-button {
    font-family: "DynaPuff";
    background-color: #b0a8d6;
    font-size: 0.6rem;
    color:  #ffffff;
    padding: 0.2rem 0.4rem;
    margin-left: 0.2rem;
    }

  @media (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 1.5fr 1fr;
      grid-template-areas: 'left middle right';
    }
  }

  @media (max-width: 1000px) {
    .main {
      grid-template-columns: 0.5fr 1fr 0.6fr;
      grid-template-areas: 'left middle right';
    }
  }

  @media (max-width: 600px) {
    .main {
      grid-template-columns: 1fr;
      grid-template-areas: 'left' 'middle' 'right';
    }
  }

  @media (max-width: 400px) {
    .main {
      gap: 0.5rem;
    }
  }
</style>
`