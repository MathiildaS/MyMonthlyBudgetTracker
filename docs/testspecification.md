# Test Specification
This is a specification of all the test cases for the project.  
Please see the [Requirement Specification](./requirementspec.md) for traceability to the corresponding requirement.

The project has been manually tested to ensure that the implemented functionality works as intended.

## Table Of Contents
- [How to read the documentation](#how-to-read-the-documentation)
- [Test Cases](#test-cases)

- [TC1-Frontpage](#tc1-frontpage)
  - [TC1-Development](#tc1-development)
  - [TC1-Production](#tc1-production)

- [TC2-Display of Year and Month](#tc2-display-of-year-and-month)
  - [TC2-Development](#tc2-development)
  - [TC2-Production](#tc2-production)

- [TC3-Budget](#tc3-budget)
  - [TC3-Development](#tc3-development)
  - [TC3-Production](#tc3-production)

- [TC4-Expenses](#tc4-expenses)
  - [TC4-Development](#tc4-development)
  - [TC4-Production](#tc4-production)

- [TC5-Daily Allowance](#tc5-daily-allowance)
  - [TC5-Development](#tc5-development)
  - [TC5-Production](#tc5-production)

- [TC6-Stored Budget](#tc6-stored-budget)
  - [TC6-Development](#tc6-development)
  - [TC6-Production](#tc6-production)  

## How to read the documentation
The test cases has been documented during the development of the project.

| **Test case**       | Title/Description          |
|---------------------|----------------------------|
| **Requirement ID** | The corresponding requirement |
| **Main scenario** | What the user is trying to do |
| **Preconditions** | State before the test |
| **Input data** | Values, dates, amounts… |
| **Steps** | 1. …  2. …  3. … |
| **Expected result** | What should happen |

# Test Cases
**TC1** - Test the appliaction startup and view.  
**TC2** - Test the view of the current Date.  
**TC3** - Test the budget input and validation.  
**TC4** - Test the expense input, update and validation.  
**TC5** - Tests the daily allowance.  
**TC6** - Tests the storage functionality.  

## TC1-Frontpage 
### TC1-Development

| **Test case** | Application is running |
|---------------------|----------------------------|
| **Requirement ID** | - |
| **Main scenario** | Application is running and a frontpage is displayed |
| **Preconditions** | * Dependencies have been installed with `npm install`|
| **Input data** | --- |
| **Steps** | 1. Run the application `npm run dev`  2. Open localhost |
| **Expected result** | A frontpage is displayed with header, footer and main content |

### TC1-Production
| **Test case** | Application is running |
|---------------------|----------------------------|
| **Requirement ID** | - |
| **Main scenario** | Application is running and a frontpage is displayed |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Expected result** | A frontpage is displayed with header, footer and main content |

## TC2-Display of year and month
### TC2-Development

| **Test case** | Display current year and month |
|---------------------|----------------------------|
| **Requirement ID** | US-1 |
| **Main scenario** | The current year is displayed as numbers and the current month is displayed in text |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1. Visit localhost 2. Check the content on the left side of the page 3. Compare with the current year and month |
| **Expected result** | The current year is displayed as number and the current month is displayed next to the year in text |

### TC2-Production
| **Test case** | Display current year and month |
|---------------------|----------------------------|
| **Requirement ID** | US-1 |
| **Main scenario** | The current year is displayed as numbers and the current month is displayed in text |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Check the content on the left side of the page 3. Compare with the current year and month |
| **Expected result** | The current year is displayed as number and the current month is displayed next to the year in text |

## TC3-Budget
### TC3-Development

| **Test case** | Display form to add a budget |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | A form is displayed for the user on the front page with an input field, a dropdown selection-element and a button |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1. Visit localhost in a browser 2. Check the content under the header |
| **Expected result** | A form is displayed with an input field with the placeholder text `Add this months budget`, a dropdown selection-element with the text `SEK` and a button with the text `ADD BUDGET` |

| **Test case** | Change currency option in dropdown selection-element |
|---------------------|----------------------------|
| **Requirement ID** | US-4 |
| **Main scenario** | The dropdown selection-element is displaying several currency-options when user clicks on it. The text `SEK` is changed to `AUD` when the user clicks on `AUD` |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1. Visit localhost in a browser 2. Find the budget-form under the header 3. Click on the dropdown selection-element with the text `SEK` 4. Find and click on the text `AUD` among the options |
| **Expected result** | The dropdown selection-element is displaying seven different currencies and changes `SEK` to `AUD` when click on `AUD`|

| **Test case** | Add value to input field of the budget form |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | The text of the placeholder disappears when the user clicks on input field and replaced when the user types input data |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `100` and press `Enter`-key |
| **Expected result** | When click on input fied, the text `Add this months budget` is replaced. The input data `100` is visible when typed in field |

| **Test case** | Submit value in input field with button |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | The value disappears from the input field when the user clicks on `ADD BUDGET` button |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `100` 6. Click on `ADD BUDGET` button |
| **Expected result** | When click on `ADD BUDGET` button, the input is submitted and visible next to the `Budget:`-header |

| **Test case** | Submit value in input field with pressed `Enter` key |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | The value disappears from the input field when the user press `Enter` key |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `100` and press `Enter`-key |
| **Expected result** | When `Enter`-key is pressed, the input is submitted and visible next to the `Budget:`-header |

| **Test case** | Submit negative value |
|---------------------|----------------------------|
| **Requirement ID** | US-2, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a negative input value |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | -100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `-100` and press `Enter`-key |
| **Expected result** | When submitting the negative input data `-100`, a pop-up is displayed in the middle of the screen with the error message `Please enter a value greater than zero` |

| **Test case** | Submit a string value |
|---------------------|----------------------------|
| **Requirement ID** | US-2, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a string as input value |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | Hello |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `Hello` and press `Enter`-key |
| **Expected result** | When submitting the string input data `Hello`, a pop-up is displayed in the middle of the screen with the error message `Please enter a valid number` |

| **Test case** | Submit a value with whitespaces |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a input value with whitespaces |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | ` 500 ` |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data ` 500 ` and press `Enter`-key |
| **Expected result** | When submitting the input data ` 500 `, with whitespaces, the value is submitted with no errors and visible with no whitespaces next to the `Budget:` header |

| **Test case** | See budget visualized as a pie |
|---------------------|----------------------------|
| **Requirement ID** | US-3 |
| **Main scenario** | After added budget, the user clicks on the `Display pie?` button and a green pie is diplayed representing 100% of the budget |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | `500` |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `500` and press `Enter`-key 7. Click on the displayed button `Display pie?` |
| **Expected result** | When submitting the input data `500` the value is visible next to the `Budget:` header. A button is displayed with the text `Display pie?`|

### TC3-Production

| **Test case** | Display form to add a budget |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | A form is displayed with an input field, a dropdown selection-element and a button |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Check the content under the header |
| **Expected result** | A form is displayed with an input field with the placeholder text `Add this months budget`, a dropdown selection-element with the text `SEK` and a button with the text `ADD BUDGET` |

| **Test case** | Change currency option in dropdown selection-element |
|---------------------|----------------------------|
| **Requirement ID** | US-4 |
| **Main scenario** | The dropdown selection-element is displaying several currency-options when clicked on. The text `SEK` is changed to `AUD` when the user clicks on `AUD` |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Find the budget-form under the header 3. Click on the dropdown selection-element with the text `SEK` 4. Find and click on the text `AUD` among the options |
| **Expected result** | The dropdown selection-element is displaying seven different currencies and changes `SEK` to `AUD` when click on `AUD`|

| **Test case** | Add value to input field of the budget-form |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | The text of the placeholder disappears when click on input field and replaced when typing input data |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Find the budget-form under the header 3. Click on the input field 4. Type input data `100` |
| **Expected result** | When click on input fied, the text `Add this months budget` is replaced. The input data `100` is visible when typed in field |

| **Test case** | Submit value in input field with button  |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | The value disappears from the input field when the user clicks on `ADD BUDGET` button |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `100` 6. Click on `ADD BUDGET` button |
| **Expected result** | When click on `ADD BUDGET` button, the input is submitted and visible next to the `Budget:`-header |

| **Test case** | Submit value in input field with pressed `Enter` key |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | The value disappears from the input field when the user press `Enter` key |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `100` and press `Enter`-key |
| **Expected result** | When `Enter`-key is pressed, the input is submitted and visible next to the `Budget:`-header|

| **Test case** | Submit negative value |
|---------------------|----------------------------|
| **Requirement ID** | US-2, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a negative input value |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | -100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `-100` and press `Enter` key |
| **Expected result** | When submitting the negative input data `-100`, a pop-up is displayed in the middle of the screen with the error message `Please enter a value greater than zero` |

| **Test case** | Submit a string value |
|---------------------|----------------------------|
| **Requirement ID** | US-2, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a string as input value |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | Hello |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `Hello` and press `Enter` key |
| **Expected result** | When submitting the string input data `Hello`, a pop-up is displayed in the middle of the screen with the error message `Please enter a valid number` |

| **Test case** | Submit a value with whitespaces |
|---------------------|----------------------------|
| **Requirement ID** | US-2 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a input value with whitespaces |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | ` 500 ` |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data ` 500 ` and press `Enter` key |
| **Expected result** | When submitting the input data ` 500 `, with whitespaces, the value is submitted with no errors and visible with no whitespaces next to the `Budget:` header |

| **Test case** | See budget visualized as a pie |
|---------------------|----------------------------|
| **Requirement ID** | US-3 |
| **Main scenario** | After added budget, the user clicks on the `Display pie?` button and a green pie is diplayed representing 100% of the budget |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | `500` |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `500` 6. Press enter 7. Click on the displayed button `Display pie?` |
| **Expected result** | When submitting the input data `500` the value is visible next to the `Budget:` header. A button is displayed with the text `Display pie?`|

## TC4-Expenses
### TC4-Development

| **Test case** | Display form to add an expense |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | A form is displayed for the user on the with an input field and a button |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | `1000` |
| **Steps** | 1. Visit localhost in a browser 2. Type `1000` in the input field of the budget form and press `Enter` key 3. Observe the appearance of an expense-form |
| **Expected result** | A form is displayed with an input field with the placeholder text `Add your expense here` and a button with the text `ADD YOUR EXPENSE` |

| **Test case** | Add value to input field of the expense form |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | The text of the placeholder disappears when the user clicks on input field and replaced when the user types input data |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `100` in the input field of the displayed expense form |
| **Expected result** | When click on input field of the expense form, the text `Add your expense here` is replaced. The input data `100` is visible when typed in field |

| **Test case** | Submit value in input field with button |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | The value disappears from the input field when the user clicks on `ADD YOUR EXPENSE` button |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `100` in the input field of the displayed expense form and click `ADD YOUR EXPENSE` button |
| **Expected result** | When click on `ADD YOUR EXPENSE` button, the input is submitted and visible under the `Expenses:`-header |

| **Test case** | Submit value in input field with pressed `Enter` key |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | The value disappears from the input field when the user press `Enter` key |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `100` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When pressed `Enter` key, the input is submitted and visible under the `Expenses:`-header |

| **Test case** | Submit negative value |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a negative input value |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, -100 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `-100` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the negative input data `-100`, a pop-up is displayed in the middle of the screen with the error message `Please enter a value greater than zero` |

| **Test case** | Submit a string value |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a string as input value |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, Hello |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `Hello` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the string input data `Hello`, a pop-up is displayed in the middle of the screen with the error message `Please enter a valid number` |

| **Test case** | Submit a value with whitespaces |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | No pop-up is displayed with an error message when the user submits a input value with whitespaces |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, ` 500 ` |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `Hello` in the input field of the displayed expense form and press ` 500 ` key |
| **Expected result** | When submitting the input data ` 500 `, with whitespaces, the value is submitted with no errors and visible with no whitespaces next to the `Expenses:` header |

| **Test case** | See expense visualized on the budget pie |
|---------------------|----------------------------|
| **Requirement ID** | US-8 |
| **Main scenario** | After added expense, the decreasing of the budget is visualized as the pie shrinking |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 300 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `1000` and press `Enter`-key 7. Click on the displayed button `Display pie?` 8. Type input data `300` in the input field of the displayed expense form and press `Enter` key 9. Observe the pie |
| **Expected result** | When submitting the input data `300` the value is visible next to the `Expense:` header and the amount is taken of the pie |

| **Test case** | See several expenses visualized on the budget pie |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-8 |
| **Main scenario** | After added expense, the decreasing of the budget is visualized as the pie is shrinking |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 300, 20, 150 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `1000` and press `Enter`-key 7. Click on the displayed button `Display pie?` 8. Type input data `300` in the input field of the displayed expense form and press `Enter` key 9. Type input data `20` in the input field of the displayed expense form and press `Enter` key 10. Type input data `150` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the input data `300`, `20` and `150` the values taken of the pie one by one |

| **Test case** | See a list of added expenses and remaining value of budget |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-6, US-7 |
| **Main scenario** | After the user adds an expense, the value appears under the `Expenses:` header and the remaining value of the budget is displayed next to the expense under the `Remaining:` header |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 300, 20, 150 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `1000` and press `Enter`-key 7. Type input data `300` in the input field of the displayed expense form and press `Enter` key 8. Type input data `20` in the input field of the displayed expense form and press `Enter` key 9. Type input data `150` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the input data `300`, `20` and `150` the values are visible under each other next to the `Expense:` header and the decreasing remainings of the budget is displayed next to each expense under the `Remaining` header |

| **Test case** | Edit an added expense and see the remaining value and the pie update |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-9, US-10, US-11 |
| **Main scenario** | The user adds an expense and clicks on the `Edit` button next to it under the `Expenses` header |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 100, 500 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Click on the displayed button `Display pie?` 5. Type input data `100` in the input field of the displayed expense form and press `Enter` key 6. Observe the value taken of the pie and the remaining value next to the expense 7. Click the `Edit` button next to the expense 8. Update the input value `100` to `500` |
| **Expected result** | When editing the added expense, the remaining value next to the expense is updated and the pie updates by taking of an equally large piece of the pie |

| **Test case** | Delete an added expense and see the remaining value and the pie update |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-9, US-10, US-11 |
| **Main scenario** | The user adds an expense and clicks on the `Delete` button next to it under the `Expenses` header |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 100, 200 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Click on the displayed button `Display pie?` 5. Type input data `100` in the input field of the displayed expense form and press `Enter` key 6. Observe the value taken of the pie and the remaining value next to the expense 7. Type input data `200` in the input field of the displayed expense form and press `Enter` key 8. Observe the value taken of the pie and the remaining value next to the expense 9. Click the `Delete` button next to the `200` expense |
| **Expected result** | When deleting the added expense, the remaining value next to the `100` expense is increased and the pie updates by increasing a piece the size equally the deleted expense |

### TC4-Production

| **Test case** | Display form to add an expense |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | A form is displayed for the user on the with an input field and a button |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/)  |
| **Input data** | `1000` |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Type `1000` in the input field of the budget form and press `Enter` key 3. Observe the appearance of an expense-form |
| **Expected result** | A form is displayed with an input field with the placeholder text `Add your expense here` and a button with the text `ADD YOUR EXPENSE` |

| **Test case** | Add value to input field of the expense form |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | The text of the placeholder disappears when the user clicks on input field and replaced when the user types input data |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/)  |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `100` in the input field of the displayed expense form |
| **Expected result** | When click on input field of the expense form, the text `Add your expense here` is replaced. The input data `100` is visible when typed in field |

| **Test case** | Submit value in input field with button |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | The value disappears from the input field when the user clicks on `ADD YOUR EXPENSE` button |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/)  |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `100` in the input field of the displayed expense form and click `ADD YOUR EXPENSE` button |
| **Expected result** | When click on `ADD YOUR EXPENSE` button, the input is submitted and visible under the `Expenses:`-header |

| **Test case** | Submit value in input field with pressed `Enter` key |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | The value disappears from the input field when the user press `Enter` key |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `100` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When pressed `Enter` key, the input is submitted and visible under the `Expenses:`-header |

| **Test case** | Submit negative value |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a negative input value |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, -100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `-100` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the negative input data `-100`, a pop-up is displayed in the middle of the screen with the error message `Please enter a value greater than zero` |

| **Test case** | Submit a string value |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-13, NFR-4 |
| **Main scenario** | A pop-up is displayed with an error message when the user submits a string as input value |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, Hello |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `Hello` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the string input data `Hello`, a pop-up is displayed in the middle of the screen with the error message `Please enter a valid number` |

| **Test case** | Submit a value with whitespaces |
|---------------------|----------------------------|
| **Requirement ID** | US-5 |
| **Main scenario** | No pop-up is displayed with an error message when the user submits a input value with whitespaces |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, ` 500 ` |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/)  2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Type input data `Hello` in the input field of the displayed expense form and press ` 500 ` key |
| **Expected result** | When submitting the input data ` 500 `, with whitespaces, the value is submitted with no errors and visible with no whitespaces next to the `Expenses:` header |

| **Test case** | See expense visualized on the budget pie |
|---------------------|----------------------------|
| **Requirement ID** | US-8 |
| **Main scenario** | After added expense, the decreasing of the budget is visualized as the pie shrinking |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, 300 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `1000` and press `Enter`-key 7. Click on the displayed button `Display pie?` 8. Type input data `300` in the input field of the displayed expense form and press `Enter` key 9. Observe the pie |
| **Expected result** | When submitting the input data `300` the value is visible next to the `Expense:` header and the amount is taken of the pie |

| **Test case** | See a list of added expenses and remaining value of budget |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-6, US-7 |
| **Main scenario** | After the user adds an expense, the value appears under the `Expenses:` header and the remaining value of the budget is displayed next to the expense under the `Remaining:` header |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, 300, 20, 150 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Find the budget-form under the header 4. Click on the input field 5. Type input data `1000` and press `Enter`-key 7. Type input data `300` in the input field of the displayed expense form and press `Enter` key 8. Type input data `20` in the input field of the displayed expense form and press `Enter` key 9. Type input data `150` in the input field of the displayed expense form and press `Enter` key |
| **Expected result** | When submitting the input data `300`, `20` and `150` the values are visible under each other next to the `Expense:` header and the decreasing remainings of the budget is displayed next to each expense under the `Remaining` header |

| **Test case** | Edit an added expense and see the remaining value and the pie update |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-9, US-10, US-11 |
| **Main scenario** | The user adds an expense and clicks on the `Edit` button next to it under the `Expenses` header |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, 100, 500 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Click on the displayed button `Display pie?` 5. Type input data `100` in the input field of the displayed expense form and press `Enter` key 6. Observe the value taken of the pie and the remaining value next to the expense 7. Click the `Edit` button next to the expense 8. Update the input value `100` to `500` |
| **Expected result** | When editing the added expense, the remaining value next to the expense is updated and the pie updates by taking of an equally large piece of the pie |

| **Test case** | Delete an added expense and see the remaining value and the pie update |
|---------------------|----------------------------|
| **Requirement ID** | US-5, US-9, US-10, US-11 |
| **Main scenario** | The user adds an expense and clicks on the `Delete` button next to it under the `Expenses` header |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, 100, 200 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Click on the displayed button `Display pie?` 5. Type input data `100` in the input field of the displayed expense form and press `Enter` key 6. Observe the value taken of the pie and the remaining value next to the expense 7. Type input data `200` in the input field of the displayed expense form and press `Enter` key 8. Observe the value taken of the pie and the remaining value next to the expense 9. Click the `Delete` button next to the `200` expense |
| **Expected result** | When deleting the added expense, the remaining value next to the `100` expense is increased and the pie updates by increasing a piece the size equally the deleted expense |

## TC5-Daily Allowance
### TC5-Development

| **Test case** | Display daily allowance with no budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user finds the `Daily Allowance` header and the allowance is displayed as 0 KR / DAY |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Check the content on the left side of the page 4. Find the `Daily Allowance` header and observe the text |
| **Expected result** | The daily allowance when no added budget is displayed as `0 KR / DAY`  |

| **Test case** | Display daily allowance with added budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user finds the `Daily Allowance` header and the allowance is displayed as `value KR / DAY` |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000 |
| **Steps** | 1. Visit localhost 2. Check the content on the left side of the page 3. Find the `Daily Allowance` header and observe the text 4. Type input data `1000` in the budget form and press `Enter`-key 4. Observe the text under the `Daily Allowance` header |
| **Expected result** | The daily allowance when added budget is displayed as `value KR / DAY`  |

| **Test case** | Display daily allowance with added expense |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user finds the `Daily Allowance` header and adds a budget of `1000` and then adds the expense of `100` and notices the change of daily allowance.  |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit localhost 2. Check the content on the left side of the page 3. Find the `Daily Allowance` header and observe the text 4. Type input data `1000` in the budget form and press `Enter`-key 4. Observe the text under the `Daily Allowance` header 5. Type input data `100` in the input field of the displayed expense form and press `Enter` 6. Observe the text under the `Daily Allowance` header |
| **Expected result** | The daily allowance when added budget is displayed as `value KR / DAY` and when added expense is displayed as `increased value KR / DAY` |

### TC5-Production

| **Test case** | Display daily allowance with no budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user finds the `Daily Allowance` header and the allowance is displayed as 0 KR / DAY |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Check the content on the left side of the page 3. Find the `Daily Allowance` header and observe the text |
| **Expected result** | The daily allowance when no added budget is displayed as `0 KR / DAY`  |

| **Test case** | Display daily allowance with added budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user finds the `Daily Allowance` header and the allowance is displayed as `value KR / DAY` |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Check the content on the left side of the page 3. Find the `Daily Allowance` header and observe the text 4. Type input data `1000` in the budget form and press `Enter`-key 4. Observe the text under the `Daily Allowance` header |
| **Expected result** | The daily allowance when added budget is displayed as `value KR / DAY`  |

| **Test case** | Display daily allowance with added expense |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user finds the `Daily Allowance` header and adds a budget of `1000` and then adds the expense of `100` and notices the change of daily allowance.  |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000, 100 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Check the content on the left side of the page 3. Find the `Daily Allowance` header and observe the text 4. Type input data `1000` in the budget form and press `Enter`-key 4. Observe the text under the `Daily Allowance` header 5. Type input data `100` in the input field of the displayed expense form and press `Enter` 6. Observe the text under the `Daily Allowance` header |
| **Expected result** | The daily allowance when added budget is displayed as `value KR / DAY` and when added expense is displayed as `decreased value KR / DAY` |

## TC6-Stored Budget

### TC6-Development

| **Test case** | Store added budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user adds a budget and verifies the added budget in the Local Storage |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | 1000 |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Open the inspector 5. Click on the `Storage` menu and click on the `Local Storage` submenu 6. Click on localhost and observe the key as current Year-Month |
| **Expected result** | The budget has been stored as an object containing "budget": 1000, "expenses": [] and "currency": "KR". 

| **Test case** | Load stored budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user adds a budget, closes the application and the budget is loaded when returning to the application |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Open the inspector 5. Click on the `Storage` menu and click on the `Local Storage` submenu 6. Click on localhost and observe the key as current Year-Month 7. Close the application 8. Visit localhost in a browser again and observe the budget |
| **Expected result** | The budget has been stored and is loaded from localStorage and the view remains the same as when leaving the application.

| **Test case** | Delete stored budget |
|---------------------|----------------------------|
| **Requirement ID** | US-14 |
| **Main scenario** | The user adds a budget, clicks on the `Reset Budget` button and observes the removal of the budget |
| **Preconditions** | * Application is running with `npm run dev` |
| **Input data** | --- |
| **Steps** | 1. Visit localhost in a browser 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Click on the `Reset Budget` button 5. Open the inspector 6. Click on the `Storage` menu and click on the `Local Storage` submenu 7. Click on localhost and control that there's no data stored for the current Year-Month key|
| **Expected result** | The budget has been deleted and the `localhost` in `Local Storage` does not contain a Year-Month key.

### TC6-Production

| **Test case** | Store added budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user adds a budget and verifies the added budget in the Local Storage |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | 1000 |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Open the inspector 5. Click on the `Storage` menu and click on the `Local Storage` submenu 6. Click on localhost and observe the key as current Year-Month |
| **Expected result** | The budget has been stored as an object containing "budget": 1000, "expenses": [] and "currency": "KR". 

| **Test case** | Load stored budget |
|---------------------|----------------------------|
| **Requirement ID** | US-16 |
| **Main scenario** | The user adds a budget, closes the application and the budget is loaded when returning to the application |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Open the inspector 5. Click on the `Storage` menu and click on the `Local Storage` submenu 6. Click on localhost and observe the key as current Year-Month 7. Close the application 8. Visit localhost in a browser again and observe the budget |
| **Expected result** | The budget has been stored and is loaded from localStorage and the view remains the same as when leaving the application.

| **Test case** | Delete stored budget |
|---------------------|----------------------------|
| **Requirement ID** | US-14 |
| **Main scenario** | The user adds a budget, clicks on the `Reset Budget` button and observes the removal of the budget |
| **Preconditions** | * The application has been deployed at [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) |
| **Input data** | --- |
| **Steps** | 1. Visit [mymonthlybudgettracker.netlify.app](https://mymonthlybudgettracker.netlify.app/) 2. Click on the `Reset budget` button 3. Type input data `1000` in the budget form and press `Enter`-key 4. Click on the `Reset Budget` button 5. Open the inspector 6. Click on the `Storage` menu and click on the `Local Storage` submenu 7. Click on localhost and control that there's no data stored for the current Year-Month key|

| **Expected result** | The budget has been deleted and the `localhost` in `Local Storage` does not contain a Year-Month key.

