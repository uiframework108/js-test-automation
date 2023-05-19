## Prerequisites

1. Node JS
2. Optional: Java 8 for Allure Reporter

## Install the project

Install project dependencies with: npm install

## Run tests:

1. Using Runner: npm run cypress:runner
2. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
3. Standard execution: npm run cypress:execution
4. Standard execution based on tags (not integrated with allure):
   1. npm run cypress:e2e
   2. npm run cypress:functional

After the test execution, two new folders are added:
1. ./cypress/videos
2. ./cypress/screenshots