
/**
 * @file contact.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the contact page of the website.
 */


// npx playwright test

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://brendans-website.vercel.app');
    await page.click('a[href="/contact"]');
});

test('Contact page h1 loads correctly', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveText('CONTACT ME');
});

test('Contact page subtitle loads correctly', async ({ page }) => {
    const subtitle = page.locator('p.text-lg');
    await expect(subtitle).toHaveText("Let's work together");
});

test('Typed text is visible', async ({ page }) => {
    const typed = page.getByTestId('react-typed');
    await expect(typed).toBeVisible();
});

test('Form inputs are visible and required', async ({ page }) => {
    const nameInput = page.locator('input#name');
    const emailInput = page.locator('input#email');
    const messageInput = page.locator('textarea#message');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();

    await expect(nameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
    await expect(messageInput).toHaveAttribute('required', '');
});

test('Submit button exists and has correct label', async ({ page }) => {
    const button = page.getByRole('button', { name: './submit' });
    await expect(button).toBeVisible();
    await expect(button).toHaveText('./submit');
});

test('User can fill the form and click submit', async ({ page }) => {
    await page.fill('#name', 'Brendan Test');
    await page.fill('#email', 'brendan@example.com');
    await page.fill('#message', 'This is a test message.');

    const button = page.getByRole('button', { name: './submit' });
    await button.click();

    const status = page.locator('#form-status');
    await expect(status).toBeVisible();
});