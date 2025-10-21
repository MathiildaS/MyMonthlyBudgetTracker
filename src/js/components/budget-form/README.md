# <budget-form>
This is a custom web component that displays a form to set a budget with a selected currency.
The component listens for events from this form to control the view and to collect the input value.

The component creates a new FormService instance to validate and extract the form value 
before it is dispatched in a custom event for other components to listen to.

## Usage
```javascript
import './budget-form.js'
```

Then in your HTML

```html
<budget-form></budget-form>
```

## Example 
// TODO: Insert image

## Files and Structure
budget-form.js - Main web component logic that defines the custom element.
budget-form.html.js - HTML template with structure of the component.
budget-form.css.js - CSS template for styling the component.

