import { test as base } from '@playwright/test';
import { TutorialPage } from '../page-object-models/tutorial.page';

// https://playwright.dev/docs/pom
type MyPageObjectModels = {
  tutorialPage: TutorialPage;
};

/**
 * Extend base test by providing "tutorialPage" page object model.
 * This new "test" can be used in multiple test files, and each of them will get the fixtures.
 */
export const test = base.extend<MyPageObjectModels>({
  // https://playwright.dev/docs/test-fixtures#overriding-fixtures
  page: async ({ page }, use) => {
    // Each test case starts with the navigation to the baseURL defined in the playwright.config.ts
    await page.goto('/');
    await use(page);
  },
  tutorialPage: async ({ page }, use) => {
    await use(new TutorialPage(page));
  },
});

export { expect } from '@playwright/test';
