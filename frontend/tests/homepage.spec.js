
/**
 * @file homepage.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the homepage of the website.
 */

import { test } from '@playwright/test';

test('Homepage loads correctly', async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app/');
});