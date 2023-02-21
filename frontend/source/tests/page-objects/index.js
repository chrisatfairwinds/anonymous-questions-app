// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.IndexPage = class IndexPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }
}