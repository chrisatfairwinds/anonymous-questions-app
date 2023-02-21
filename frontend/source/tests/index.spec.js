// @ts-check
const { test, expect } = require('@playwright/test');

const { GlobalPage } = require('./page-objects/global');
const { IndexPage } = require('./page-objects/index');


test('app title', async ({ page }) => {
  const indexPage = new IndexPage(page);
  const globalPage = new GlobalPage(page);

  await indexPage.goto();

  await expect(globalPage.appTitle).toBeVisible();
});
