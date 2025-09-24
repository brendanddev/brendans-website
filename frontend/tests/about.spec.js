
/**
 * @file about.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the about page of the website.
 */

import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app');
    await page.click('a[href="/about"]');
});

test('About page h1 loads correctly', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('ABOUT ME');
});

test('About page subtitle loads correctly', async ({ page }) => {
    await page.click('a[href="/about"]');
    const subtitle = page.locator('p.text-lg');
    await expect(subtitle).toHaveText('Get to know me');
});

test('About page education section is visible', async ({ page }) => {
    const header = page.getByRole('heading', { name: 'education' });
    await expect(header).toBeVisible();
});