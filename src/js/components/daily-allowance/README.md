# <daily-allowance>
This is a custom web component that displays a dynamically updated value representing an daily allowance. 
The allowance is representing how much of a remaining budget for a current month can be spent per day for the rest of the month.

The component listens for a custom event `update-allowance` on the document object and updates the displayed text with the daily allowance value and its currency.

## Usage
```javascript
import './daily-allowance.js'
```

Then in your HTML

```html
<daily-allowance></daily-allowance>
```

## Example 
// TODO: Insert image

## Files and Structure
daily-allowance.js - Main web component logic that defines the custom element.
daily-allowance.html.js - HTML template with structure of the component.
daily-allowance.css.js - CSS template for styling the component.