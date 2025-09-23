
/**
 * @file homepage.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the homepage of the website.
 */

import { expect, test } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app/');
});

// Basics
test('Homepage h1 loads correctly', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('BRENDAN DILEO');
});

test('Homepage subtitle is visible', async ({ page }) => {
    const subtitle = page.locator('p', { hasText: 'Software Developer | Tech Enthusiast' });
    await expect(subtitle).toBeVisible();
});

test('Typed text is visible', async ({ page }) => {
    const typedText = page.locator('[data-testid="react-typed"] span:first-child');
    await expect(typedText).toHaveText(/.+/, { timeout: 5000 });
});

// Terminal related tests
test('Terminal is visible', async ({ page }) => {
    const terminal = page.locator('div[aria-label="Interactive terminal"]');
    await expect(terminal).toBeVisible();
});

test('Terminal shows welcome message', async ({ page }) => {
    const output = page.locator('div[role="log"]');
    await expect(output).toContainText("Welcome to Brendan's Terminal!");
});

test('User can type help command and see correct output', async ({ page }) => {
    const input = page.locator('#terminal-input');
    await input.fill('help');
    await input.press('Enter');

    const output = page.locator('div[role="log"]');
    await expect(output).toContainText('Here is a list of supported commands:');
});