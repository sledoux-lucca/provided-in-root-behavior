import { expect, test } from '@playwright/test';

test.describe('Basic navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle('ProvidedInRootBehavior');
  });

  test('get started link', async ({ page }) => {
    await page.getByRole('link', { name: 'Child 1' }).click();

    await expect(
      page.getByRole('heading', { name: 'Child1Component' })
    ).toBeVisible();
  });
});
