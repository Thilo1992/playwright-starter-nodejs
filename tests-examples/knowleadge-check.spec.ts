import { expect, test } from '@playwright/test';

test('successful knowledge check', async ({ page }) => {
  await page.goto(
    'https://learn.microsoft.com/en-us/training/modules/build-with-playwright/',
  );
  await expect(
    page.getByRole('heading', {
      name: 'Build Your first end-to-end test with Playwright',
    }),
  ).toBeVisible();

  page.getByRole('link', { name: 'Knowledge check' }).click();
  await expect(
    page.getByRole('heading', { name: 'Knowledge check' }).first(),
  ).toBeVisible();

  await page
    .getByLabel('1. Which of the following is a fixture in Playwright?')
    .getByLabel('page')
    .check();
  await page
    .getByLabel(
      '2. Which of the following groups related tests together in Playwright?',
    )
    .getByLabel('describe')
    .check();
  await page
    .getByLabel('3. Which of the following is a locator in Playwright?')
    .getByLabel('getByRole.')
    .check();
  await page.getByRole('button', { name: 'Check your answers' }).click();

  await page
    .locator('[data-test-id="modal-container"]')
    .getByLabel('Close')
    .click();
  await expect(
    page.getByText(
      'Correct: In Playwright a page is a built-in fixture which is passed into your tests to ensure test isolation.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Correct: Describe allows us to group Test Case objects logically in a file.',
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Correct: getByRole is a locator that is used to find an element on the page by its accessible role.',
    ),
  ).toBeVisible();
});

test('failed knowledge check', async ({ page }) => {
  await page.goto(
    'https://learn.microsoft.com/en-us/training/modules/build-with-playwright/',
  );
  await expect(
    page.getByRole('heading', {
      name: 'Build Your first end-to-end test with Playwright',
    }),
  ).toBeVisible();

  page.getByRole('link', { name: 'Knowledge check' }).click();
  await expect(
    page.getByRole('heading', { name: 'Knowledge check' }).first(),
  ).toBeVisible();

  await page
    .getByLabel('1. Which of the following is a fixture in Playwright?')
    .getByLabel('page')
    .check();
  await page
    .getByLabel(
      '2. Which of the following groups related tests together in Playwright?',
    )
    .getByLabel('describe')
    .check();
  await page
    .getByLabel('3. Which of the following is a locator in Playwright?')
    .getByLabel('toBeVisible')
    .check();
  await page.getByRole('button', { name: 'Check your answers' }).click();
  await page
    .locator('[data-test-id="modal-container"]')
    .getByLabel('Close')
    .click();
  await expect(
    page.getByText(
      'Incorrect: toBeVisible is an assertion for validating outcomes of automated actions.',
    ),
  ).toBeVisible();
});
