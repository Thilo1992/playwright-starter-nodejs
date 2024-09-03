import { expect, test } from '../fixtures/myFixture';

const username = 'your_id@talanxew.onmicrosoft.com';
const password = 'your_password';

/**
 * https://playwright.dev/docs/auth
 * This example shows how to authenticate a user using a popup dialog from https://login.microsoftonline.com/.
 */
test(`Authenticate for all following tests`, async ({ page }) => {
  const popupPromise = page.waitForEvent('popup');

  // TODO: trigger the login, e.g. by clicking a button
  // await page.getByRole('button', { name: 'Sign-in' }).click();

  const popup = await popupPromise;
  await popup.waitForLoadState();

  await popup.getByPlaceholder(/^(Email|E-Mail)/).fill(username);
  await popup.getByRole('button', { name: /Next|Weiter/ }).click();
  await popup.getByPlaceholder(/^(Password|Kennwort)/).fill(password);
  await popup.getByRole('button', { name: /Sign in|Anmelden/ }).click();

  // TODO: wait for the login to complete, e.g. by waiting for a specific element
  // await expect(page.getByText(`Logged in as ${username}`)).toBeVisible();

  // Save the authentication state
  await page.context().storageState({ path: '.auth/user.json' });
});
