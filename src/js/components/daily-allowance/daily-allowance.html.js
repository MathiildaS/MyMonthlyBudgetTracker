/**
 * @file A module with a html template for the custom daily-allowance web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
<div class="dailyAllowance">
  <h2>Daily Allowance</h2>
  <p>This month you can spend<br>
  <span id="allowance"></span><br>
  to stay within your budget.</p>
</div>
`
