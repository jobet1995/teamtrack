
import { test, expect } from '@playwright/test';

test('Theme toggle works', async ({ page }) => {
  await page.goto('/');

  // Open the theme toggle menu
  await page.locator('button:has(svg.sun)').click();

  // Click the dark mode button
  await page.locator('button:has-text("Dark")').click();

  // Check that the html element has the dark class
  await expect(page.locator('html')).toHaveClass(/dark/);

  // Open the theme toggle menu again
  await page.locator('button:has(svg.moon)').click();

  // Click the light mode button
  await page.locator('button:has-text("Light")').click();

  // Check that the html element does not have the dark class
  await expect(page.locator('html')).not.toHaveClass(/dark/);
});
