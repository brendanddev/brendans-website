
/**
 * @file about.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the about page of the website.
 */

import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app/about');
});

test('About page h1 loads correctly', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('ABOUT ME');
});
