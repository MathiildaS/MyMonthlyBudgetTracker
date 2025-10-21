# <expense-form>
This is a custom web component that displays two forms. One form to add a new expense and one form to update an existing expense.
The component listens for events from these forms to control the view and to collect the input values. 

The component creates a new FormService instance to validate and extract the form values 
before they are dispatched in a custom event for other components to listen to.

## Usage
```javascript
import './expense-form.js'
```

Then in your HTML

```html
<expense-form></expense-form>
```

## Example 
// TODO: Insert image

## Files and Structure
expense-form.js - Main web component logic that defines the custom element.
expense-form.html.js - HTML template with structure of the component.
expense-form.css.js - CSS template for styling the component.