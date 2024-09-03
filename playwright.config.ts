import { defineConfig, devices } from '@playwright/test';

/* https://playwright.dev/docs/test-configuration */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://playwright.dev/',

    /* https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json */
    ...devices['Desktop Edge'],
  },

  /* Configure different projects. See https://playwright.dev/docs/test-projects. */
  projects: [
    {
      name: 'Setup',
      testDir: 'setup',
    },
    {
      name: 'E2E Tests',
      dependencies: ['Setup'],
      use: {
        storageState: '.auth/user.json',
      },
    },
  ],
});
