
/**
 * @file homepage.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the homepage of the website.
 */

import { expect, test } from '@playwright/test';

test('Homepage h1 loads correctly', async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app/');

    const h1 = page.locator('h1');
    await expect(h1).toHaveText('BRENDAN DILEO');
});

test('Homepage subtitle is visible', async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app/');
    const subtitle = page.locator('p', { hasText: 'Software Developer | Tech Enthusiast' });
    await expect(subtitle).toBeVisible();
});