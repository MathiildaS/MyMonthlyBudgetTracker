/**
 * @file A module with a html template for the custom daily-allowance web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
<div class="dailyAllowance">
  <h2>Daily Allowance</h2>
  <p>This month you <br>can spend<br>
  <h3><span id="allowance"></span></h3>
  to stay within your budget.</p>
</div>
`
