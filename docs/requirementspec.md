# Requirement Specification - MyMonthlyBudgetTracker
This requirement specification describes alla functional and non-functional requirements for the web application **MyMonthlyBudgetTracker**. 

## 1. Functional Requirements
The functional requirements are represented as user stories.

| ID | User Story |
|----|------------|
| US-1 | As a user I want to see the current year and month |
| US-2 | As a user I want to set a budget for the current month |
| US-3 | As a user I want to see the budget in a visual way as a pie |
| US-4 | As a user I want to choose a currency |
| US-5 | As a user I want to add expenses during the month |
| US-6 | As a user I want to see a list of added expenses |
| US-7 | As a user I want to see the remaining value of the budget after added expense |
| US-8 | As a user I want to see the pie update after each added expense |
| US-9 | As a user I want to edit or delete an expense |
| US-10 | As a user I want to see the pie update after each edited or deleted expense |
| US-11 | As a user I want the remaining value of the budget update after edited or deleted expense |
| US-12 | As a user I want to navigate between different months to view past budgets and lists of expenses |
| US-13 | As a user I want to receive error messages if something goes wrong |
| US-14 | As a user I want to be able to reset the months budget and expenses |
| US-15 | As a user I want to be able to change the appearance of the pie |
| US-16 | As a user I want to see how much of the remaining budget for the current month can be spent per day for the rest of the month |

## 2. Non-Functional Requirements
| ID | Requirements |
|----|------------|
| NFR-1 | The application should be responsive to different screens |
| NFR-2 | The application should be a Single Page Application |
| NFR-3 | The pie should immediately be updated after added budget, expense or change of expense |
| NFR-4 | Error messages related to the user should be displayed as a pop-up window |

## 3. Non-Functional Organizational Requirements
| ID | Requirements |
|----|------------|
| NFOR-1 | The application will be build in Javascript, HTML and CSS |
| NFOR-2 | The application will be build with custom web components |
| NFOR-3 | The application will be deployed |
| NFOR-4 | The pie-render module will be used to visualize the budget |
| NFOR-5 | Version Control will be managed with Git |
| NFOR-6 | The code will be separated into modules and based on content |
| NFOR-7 | JSDoc will be used to comment classes, functions/methods and components |
| NFOR-8 | The application will be build in an object orientated way |
| NFOR-9 | The application will follow Clean Code principles |

## 4. Non-Functional External Requirements
| ID | Requirements |
|----|------------|
| NFER-1 | The application will not store any personal data |
