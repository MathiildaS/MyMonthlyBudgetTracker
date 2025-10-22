# MyMonthlyBudgetTracker
MyMonthlyBudgetTracker is a web application that helps users manage their monthly budget in a visual way. 
By setting a base value representing this months budget and adding expenses as they occur during the month, users can easily keep track of how much they have spent, their daily allowance and how much of their budget remains.

This application was developed as part of a course at Linnaeus University and focuses on applying Clean Code-principles.

This application is available at: [https://mymonthlybudgettracker.netlify.app/](https://mymonthlybudgettracker.netlify.app/)

## Features
**Set a monthly budget** – Define a monthly budget for the current month.  
**Manage expenses** – Add expenses, edit or delete them.  
**Monthly visualization** - See the monthly budget appear as a decreasing percentual pie as you add expenses.  
**Daily Allowance** - See your daily allowance to stay within budget at the end of the month.  
**Local data storage** – No account needed. Data is stored locally.  
**Responsive design** – Adaptive to different screens.    

## Upcoming Features
**View monthly history** – Navigate and see past months budget and spendings.

### Tech-stack
- Webcomponents with HTML/CSS/Javascript
- Vite for building the application
- pie-render package for visualizing the budget as a pie chart.

### Architecture

```java
src/
 ├─ components/       → Custom Web Components
 ├─ logic/            → Business logic and data management
 ├─ services/         → Dependency injection and shared utilities
 ├─ utils/            → Helper classes for validation
 ├─ tests/            → Automated tests
 └─ index.html        → Application main entry point
```

## Usage and Examples
[MyMonthlyBudgetTracker](./src/images/screenshot.png)

## Getting Started
Follow this installation guide to run this application locally.

### Prerequisites
Node.js and npm should be installed.
ECMAScript should be supported.
HTML5 should be supported.

### Installation
**1. Clone the repository**
```bash
git clone https://github.com/MathiildaS/MyMonthlyBudgetTracker.git
```

**2. Navigate to folder and install dependencies**
```bash
cd MyMonthlyBudgetTracker
npm install
```

**3. Start the application in development mode**
```bash
npm run dev
``` 

**4. Run tests**
```bash
npm run test
``` 

## Testing
The application has been tested both manually and with automated tests based on this 
[Test Specification](./docs/testspecification.md) and [Test Report](./docs/testreport.md)

For traceability, please see the [Requirement Specification](./docs/requirementspec.md)

## License
This application is licensed under the [MIT License](./LICENSE).

## Author
Mathilda Segerlund - Web Development student at Linnaeus University, Sweden.
