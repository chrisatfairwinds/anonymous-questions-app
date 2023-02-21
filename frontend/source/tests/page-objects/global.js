exports.GlobalPage = class GlobalPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.appTitle = page.locator('h1', { hasText: 'Anonymous Question App' })
    this.viewQuestionsLink = page.locator('a', { hasText: 'View Questions' });
    this.addQuestionLink = page.locator('a', { hasText: 'Add Question' });
  }
}