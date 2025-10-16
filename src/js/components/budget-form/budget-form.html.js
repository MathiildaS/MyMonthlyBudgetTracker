/**
 * @file A module with a html template for the custom budget-form web component. 
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export const htmlTemplate = document.createElement('template')

htmlTemplate.innerHTML = `
<div>
  <form id='budgetForm'>
    <input type='text' name='budget' placeholder='Add this months budget' required />
    <select name="currency" id="currency" required>
      <option value="KR">SEK</option>
      <option value="$">USD</option>
      <option value="€">EUR</option>
      <option value="£">GBP</option>
      <option value="A$">AUD</option>
      <option value="CN¥">CNY</option>
      <option value="JP¥">JPY</option>
    </select>
    <button type='submit'>ADD BUDGET</button>
  </form>
</div>
`