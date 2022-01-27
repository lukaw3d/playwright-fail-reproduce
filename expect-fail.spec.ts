import { test, expect } from '@playwright/test';

test('good in all versions', async ({ page }) => {
  test.fail();
  await page.evaluate(() => console.log(''))
  expect(1).toBe(2);
});

test('bad in 1.17 and 1.18', async ({ page }) => {
  test.fail();
  page.on('console', () => {
    expect(1).toBe(2);
  });
  await page.evaluate(() => console.log(''))
});
