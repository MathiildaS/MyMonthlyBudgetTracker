/**
 * @file A module with a html template for the custom budget-app web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
<div class='main'>
  <section class='left'>
    <div class="monthYear">
      <h1><span id='budgetYearMonth'></span></h1>
    </div>
    <div class="theme">
      <h3>Change theme</h3>
      <button>Light</button>
      <button>Dark</button>
      <button>Colourful</button>
    </div>
    <div class="reset">
      <button id="resetBudget">Reset budget</button>
    </div>
  </section>
  <section class='middle'>
    <button class='pieButton'>Display pie?</button> 
    <div class='budgetForm'>
      <budget-form></budget-form>
    </div>
    <div class='budgetPie'>
      <pie-element></pie-element>
    </div>
    <error-popup></error-popup>
    <div class='expenseForm'>
      <expense-form></expense-form>
    </div>
  </section>
  <section class='right'>
    <h2><u>Budget:</u> <span id='budgetValue'></span></h2>
    <div class="expenses-remaining">
      <p id="expenses"><u>Expenses:</u></p>
      <div id="expensesValue">—</div>
      <p id="remaining"><u>Remaining:</u></p>
      <div id="remainingValue">—</div>
    </div>
  </section>
</div>
`