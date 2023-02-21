// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.AddQuestionPage = class AddQuestionPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.questionInput = page.getByPlaceholder("Enter Question...");
    this.submitButton = page.locator('button', { hasText: 'Submit' });
  }

  async goto() {
    await this.page.goto('/add-question');
  }

  async submitQuestion(question) {
    await this.questionInput.fill(question);
    await this.submitButton.click();
  }
}
