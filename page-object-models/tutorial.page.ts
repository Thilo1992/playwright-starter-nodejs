import { type Locator, type Page } from '@playwright/test';

export class TutorialPage {
  readonly startHeader: Locator;
  readonly knowledgeCheck: Locator;
  readonly knowledgeHeader: Locator;
  readonly question1: Locator;
  readonly question2: Locator;
  readonly question3: Locator;
  readonly checkAnswers: Locator;
  readonly closeModalBtn: Locator;
  readonly correctAnswer1: Locator;
  readonly correctAnswer2: Locator;
  readonly correctAnswer3: Locator;
  readonly incorrectAnswer3: Locator;

  constructor(private readonly page: Page) {
    this.startHeader = page.getByRole('heading', {
      name: 'Build Your first end-to-end test with Playwright',
    });
    this.knowledgeCheck = page.getByRole('link', { name: 'Knowledge check' });
    this.knowledgeHeader = page
      .getByRole('heading', { name: 'Knowledge check' })
      .first();

    this.question1 = page.getByLabel(
      '1. Which of the following is a fixture in Playwright?',
    );
    this.question2 = page.getByLabel(
      '2. Which of the following groups related tests together in Playwright?',
    );
    this.question3 = page.getByLabel(
      '3. Which of the following is a locator in Playwright?',
    );

    this.checkAnswers = page.getByRole('button', {
      name: 'Check your answers',
    });
    this.closeModalBtn = page
      .locator('[data-test-id="modal-container"]')
      .getByLabel('Close');

    this.correctAnswer1 = page.getByText(
      'Correct: In Playwright a page is a built-in fixture which is passed into your tests to ensure test isolation.',
    );
    this.correctAnswer2 = page.getByText(
      'Correct: Describe allows us to group Test Case objects logically in a file.',
    );
    this.correctAnswer3 = page.getByText(
      'Correct: getByRole is a locator that is used to find an element on the page by its accessible role.',
    );
    this.incorrectAnswer3 = page.getByText(
      'Incorrect: toBeVisible is an assertion for validating outcomes of automated actions.',
    );
  }

  async goto() {
    await this.page.goto(
      'https://learn.microsoft.com/en-us/training/modules/build-with-playwright/',
    );
  }

  async answerQuestion1(answer: 'page' | 'click' | 'goto' | 'expect') {
    await this.question1.getByLabel(answer).check();
  }

  async answerQuestion2(
    answer: 'getByRole' | 'describe' | 'page' | 'beforeEach',
  ) {
    await this.question2.getByLabel(answer).check();
  }

  async answerQuestion3(
    answer: 'expect' | 'toBeVisible' | 'getByRole.' | 'goto.',
  ) {
    await this.question3.getByLabel(answer).check();
  }
}
