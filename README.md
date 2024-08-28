Set proxy for cloning the repository:

- git config --global http.https://github.com.proxy <proxyHost:proxyPort>
- git config --global https.https://github.com.proxy <proxyHost:proxyPort>

Clone into `C:\dev`, otherwise npx is blocked by group policies

## Prerequisites (before the workshop)

1.  [Node.js](https://nodejs.org/) 18+
2.  A code editor, e.g. [Visual Studio Code](https://code.visualstudio.com/) (optional with the [Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright))
3.  Run `npm install` in the root directory
4.  Download all Playwright browser dependencies:
    - Set proxy if needed ([Install behind a firewall or a proxy](https://playwright.dev/docs/browsers#install-behind-a-firewall-or-a-proxy))
    - Run `npx playwright install`
5.  Check if everything works by running `npx playwright test`

## Todos in the workshop

### 1. Change configuration

- Change the `baseURL` in the `playwright.config.ts` to the url of the application you want to test.

### 2. Write some test cases

- Edit the `example.spec.ts` or create a new `.spec.ts` file.
- Find right **Locators** (https://playwright.dev/docs/locators)
- Call **Actions** on the Locators (https://playwright.dev/docs/input)
- Do **Assertions** on the Locators (https://playwright.dev/docs/test-assertions)

### 3. Use page object models

For better maintainability, enhance your test case design with the usage of page object models (POM, https://playwright.dev/docs/pom). You can see an example in the `tests-examples` folder.

- Create a new POM in the `page-object-models` folder and define Locators (and functions for repetitive tasks).
- Add the new POM to `myFixture.ts`.
- Import the new POM into your test case and reuse the Locators (and functions) from there.
