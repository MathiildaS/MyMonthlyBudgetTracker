# Test Specification
This is a specification of all the test cases for the project. The project has been manually tested to ensure that the implemented functionality works as intended.

## Table Of Contents
- [How to read the documentation](#how-to-read-the-documentation)  
- [Test Cases](#test-cases)  
-- [TC1-Frontpage](#tc1-frontpage)  
--- [TC1-Development](#tc1-development)  
--- [TC1-Production](#tc1-production)  
-- [TC2-Display of Year and Month](#tc2-display-of-year-and-month)  
--- [TC2-Development](#development)  
--- [TC2-Production](#production)  
-- [TC3-Budget-form](#tc3-budget-form)  
--- [TC3-Development](#development)  
--- [TC3-Production](#production)  

## How to read the documenatation
The test cases has been documented during the development of the project.

| **Test case**       | Title/Description          |
|---------------------|----------------------------|
| **Main scenario** | What the user is trying to do |
| **Preconditions** | State before the test |
| **Input data** | Values, dates, amounts… |
| **Steps** | 1) …  2) …  3) … |
| **Expected result** | What should happen |

# Test Cases

## TC1-Frontpage 
### TC1-Development

| **Test case** | Application is running |
| **Main scenario** | Application is running and a frontpage is displayed |
| **Preconditions** | * Dependencies have been installed with `npm install`|
| **Input data** | --- |
| **Steps** | 1) Run the application `npm run dev`  2) Open localhost |
| **Expected result** | A frontpage is displayed with header, footer and main content |

### TC1-Production
| **Test case** | Application is running |
| **Main scenario** | Application is running and a frontpage is displayed |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | --- |
| **Steps** | 1) Visit ... |
| **Expected result** | A frontpage is displayed with header, footer and main content |

## TC2-Display of year and month
### TC2-Development

| **Test case** | Display current year and month |
| **Main scenario** | The current year is displayed as numbers and the current month is displayed in text |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1) Visit localhost 2) Check the content on the left side of the page 3) Compare with the current year and month |
| **Expected result** | The current year is displayed as number and the current month is displayed next to the year in text |

### TC2-Production
| **Test case** | Display current year and month |
| **Main scenario** | The current year is displayed as numbers and the current month is displayed in text |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | --- |
| **Steps** | 1) Visit ... 2) Check the content on the left side of the page 3) Compare with the current year and month |
| **Expected result** | The current year is displayed as number and the current month is displayed next to the year in text |

## TC3-Budget-form
### TC3-Development

| **Test case** | Display form to add a budget |
| **Main scenario** | A form is displayed for the user on the front page with an input field, a dropdown selection-element and a button |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1) Visit localhost in a browser 2) Check the content under the header |
| **Expected result** | A form is displayed with an input field with the placeholder text `Add this months budget`, a dropdown selection-element with the text `SEK` and a button with the text `ADD BUDGET` |

| **Test case** | Change option in dropdown selection-element |
| **Main scenario** | The dropdown selection-element is displaying several currency-options when user clicks on it. The text `SEK` is changed to `AUD` when the user clicks on `AUD` |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the dropdown selection-element with the text `SEK` 4) Find and click on the text `AUD` among the options |
| **Expected result** | The dropdown selection-element is displaying seven different currencies and changes `SEK` to `AUD` when click on `AUD`|

| **Test case** | Add value to input field of the budget form |
| **Main scenario** | The text of the placeholder disappears when the user clicks on input field and replaced when the user types input data |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 100 |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `100` |
| **Expected result** | When click on input fied, the text `Add this months budget` is removed. The input data `100` is visible when typed in field |

| **Test case** | Submit value in input field with button |
| **Main scenario** | The value disappears from the input field when the user clicks on `ADD BUDGET` button |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 100 |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `100` 5) Click on `ADD BUDGET` button |
| **Expected result** | When click on `ADD BUDGET` button, the input is submitted and visible next to the `Budget:`-header |

| **Test case** | Submit value in input field with pressed `Enter` key |
| **Main scenario** | The value disappears from the input field when the user press `Enter` key |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 100 |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `100` 5) Press `Enter`-key |
| **Expected result** | When `Enter`-key is pressed, the input is submitted and visible next to the `Budget:`-header |

| **Test case** | Submit negative value |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a negative input value |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | -100 |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `-100` |
| **Expected result** | When submitting the negative input data `-100`, a pop-up is displayed in the middle of the screen with the error message `Please enter a value greater than zero` |

| **Test case** | Submit a string value |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a string as input value |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | Hello |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `Hello` |
| **Expected result** | When submitting the string input data `Hello`, a pop-up is displayed in the middle of the screen with the error message `Please enter a valid number` |

| **Test case** | Submit a value with whitespaces |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a input value with whitespaces |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | ` 500 ` |
| **Steps** | 1) Visit localhost in a browser 2) Find the budget-form under the header 3) Click on the input field 4) Type input data ` 500 ` |
| **Expected result** | When submitting the input data ` 500 `, with whitespaces, the value is submitted with no errors and visible with no whitespaces next to the `Budget:` header |

### TC3-Production

| **Test case** | Display form to add a budget |
| **Main scenario** | A form is displayed with an input field, a dropdown selection-element and a button |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | --- |
| **Steps** | 1) Visit ... 2) Check the content under the header |
| **Expected result** | A form is displayed with an input field with the placeholder text `Add this months budget`, a dropdown selection-element with the text `SEK` and a button with the text `ADD BUDGET` |

| **Test case** | Change option in dropdown selection-element |
| **Main scenario** | The dropdown selection-element is displaying several currency-options when clicked on. The text `SEK` is changed to `AUD` when the user clicks on `AUD` |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | --- |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the dropdown selection-element with the text `SEK` 4) Find and click on the text `AUD` among the options |
| **Expected result** | The dropdown selection-element is displaying seven different currencies and changes `SEK` to `AUD` when click on `AUD`|

| **Test case** | Add value to input field of the budget-form |
| **Main scenario** | The text of the placeholder disappears when click on input field and replaced when typing input data |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | 100 |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `100` |
| **Expected result** | When click on input fied, the text `Add this months budget` is removed. The input data `100` is visible when typed in field |

| **Test case** | Submit value in input field with button  |
| **Main scenario** | The value disappears from the input field when the user clicks on `ADD BUDGET` button |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | 100 |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `100` 5) Click on `ADD BUDGET` button |
| **Expected result** | When click on `ADD BUDGET` button, the input is submitted and visible next to the `Budget:`-header |

| **Test case** | Submit value in input field with pressed `Enter` key |
| **Main scenario** | The value disappears from the input field when the user press `Enter` key |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | 100 |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `100` 5) Press `Enter`-key |
| **Expected result** | When `Enter`-key is pressed, the input is submitted and visible next to the `Budget:`-header|

| **Test case** | Submit negative value |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a negative input value |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | -100 |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `-100` |
| **Expected result** | When submitting the negative input data `-100`, a pop-up is displayed in the middle of the screen with the error message `Please enter a value greater than zero` |

| **Test case** | Submit a string value |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a string as input value |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | Hello |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the input field 4) Type input data `Hello` |
| **Expected result** | When submitting the string input data `Hello`, a pop-up is displayed in the middle of the screen with the error message `Please enter a valid number` |

| **Test case** | Submit a value with whitespaces |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a input value with whitespaces |
| **Preconditions** | * The application has been deployed at ... |
| **Input data** | ` 500 ` |
| **Steps** | 1) Visit ... 2) Find the budget-form under the header 3) Click on the input field 4) Type input data ` 500 ` |
| **Expected result** | When submitting the input data ` 500 `, with whitespaces, the value is submitted with no errors and visible with no whitespaces next to the `Budget:` header |