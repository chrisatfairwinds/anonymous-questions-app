// @ts-check
const { test, expect } = require('@playwright/test');
const { AddQuestionPage } = require('./page-objects/add');

test('add question', async ({ page }) => {
  const addQuestionPage = new AddQuestionPage(page);

  await addQuestionPage.goto();

  page.on("dialog", async dialog => {
    expect(dialog.type()).toContain('alert');
    await dialog.accept();
  });

  await addQuestionPage.submitQuestion("How much wood would a woodchuck chuck if a woodchuck could chuck wood?");
});
