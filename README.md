# TS_UI_API

A TypeScript-based testing framework combining API testing with Jest/Axios and UI testing with Playwright.

## Prerequisites
- Node.js (v16 or higher)
- npm

How to run:
1. Install NPM on your machine
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2. Open terminal, navigate to folder containing project.

3. Install dependencies using cmd:
   ```bash
   npm install
   ```

4. Create a .env file in this folder. See example:
```
DEFAULT_PASSWORD=secret_sauce
STANDARD_USER=standard_user
LOCKED_OUT_USER=locked_out_user
PROBLEM_USER=problem_user
ERROR_USER=error_user
VISUAL_USER=visual_user
CI=false
API_BASE_URL=https://reqres.in
UI_BASE_URL=https://www.saucedemo.com/
```
(Kept sensitive information here for the purpose of this current interview. otherwise it would be represented as {{ secrets.DEFAULT_PASSWORD }} )

5. Execute API tests using cmd:
```bash
npm run API:test
```

6. Execute UI tests using cmd:
```bash
npm run UI:test
```

7. Locate test results in API-test-results and/or in UI-test-results folder respectivly.

## Project Structure
- `API/` - API tests using Jest and Axios
- `UI/` - UI tests using Playwright  
- `API/client/` - API client classes
- `API/data/` - Data models and enums
- `UI/pageObjects/` - Page Objects


Extra notes:
Looking back on this solution, it might have been a good ideea to go with playwright for the API testing also, but i haven't really used it for the purpose of fully testing an API so far, so i just instictivly went with the JEST&Axios solution.