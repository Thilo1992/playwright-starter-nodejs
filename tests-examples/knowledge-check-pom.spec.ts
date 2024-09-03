// Import expect & test from your fixture to access the TutorialPage
import { expect, test } from '../fixtures/myFixture';

/**
 * These testcases are using the "tutorialPage" page object model (https://playwright.dev/docs/pom)
 * In order to run these tests, just put them in the "tests" folder.
 */
test('successful knowledge check', async ({ tutorialPage }) => {
  await tutorialPage.goto();
  await expect(tutorialPage.startHeader).toBeVisible();

  await tutorialPage.knowledgeCheck.click();
  await expect(tutorialPage.knowledgeHeader).toBeVisible();

  await tutorialPage.answerQuestion1('page');
  await tutorialPage.answerQuestion2('describe');
  await tutorialPage.answerQuestion3('getByRole.');
  await tutorialPage.checkAnswers.click();
  await tutorialPage.closeModalBtn.click();

  await expect(tutorialPage.correctAnswer1).toBeVisible();
  await expect(tutorialPage.correctAnswer2).toBeVisible();
  await expect(tutorialPage.correctAnswer3).toBeVisible();
});

test('failed knowledge check', async ({ tutorialPage }) => {
  await tutorialPage.goto();
  await expect(tutorialPage.startHeader).toBeVisible();

  await tutorialPage.knowledgeCheck.click();
  await expect(tutorialPage.knowledgeHeader).toBeVisible();

  await tutorialPage.answerQuestion1('page');
  await tutorialPage.answerQuestion2('describe');
  await tutorialPage.answerQuestion3('toBeVisible');
  await tutorialPage.checkAnswers.click();
  await tutorialPage.closeModalBtn.click();

  await expect(tutorialPage.correctAnswer1).toBeVisible();
  await expect(tutorialPage.correctAnswer2).toBeVisible();
  await expect(tutorialPage.incorrectAnswer3).toBeVisible();
});
