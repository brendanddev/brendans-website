
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

test('About page section headings are visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'education' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'about_me' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'resume' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'languages' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'frameworks' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'databases' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'tools' })).toBeVisible();
});

test('Read more button opens modal', async ({ page }) => {
    await page.click('button:has-text("./read_more.sh")');
    const modalHeader = page.getByRole('heading', { name: 'about_brendan.txt' });
    await expect(modalHeader).toBeVisible();
    await page.click('button:has-text("×")');
    await expect(modalHeader).not.toBeVisible();
});