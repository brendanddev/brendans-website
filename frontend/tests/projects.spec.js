
/**
 * @file projects.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the projects page of the website.
 */

// npx playwright test

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://brendans-website.vercel.app');
  await page.click('a[href="/projects"]');
});

test('Projects page h1 loads correctly', async ({ page }) => {
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('MY PROJECTS');
});

test('Projects page subtitle loads correctly', async ({ page }) => {
  const subtitle = page.locator('p.text-lg');
  await expect(subtitle).toHaveText('Explore my work');
});
