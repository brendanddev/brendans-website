
/**
 * @file projects.spec.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines tests for the projects page of the website.
 */


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

test('Projects filter section is visible', async ({ page }) => {
    const filterHeader = page.getByRole('heading', { name: 'filter_projects' });
    await expect(filterHeader).toBeVisible();

    const allProjectsButton = page.getByRole('button', { name: /All Projects/ });
    await expect(allProjectsButton).toBeVisible();
});

test('Projects list contains expected projects', async ({ page }) => {
    const project1 = page.getByRole('heading', { name: 'Simulated Heap' });
    const project2 = page.getByRole('heading', { name: 'Collectible Finder' });
    const project3 = page.getByRole('heading', { name: 'Black-Ops-3 GSC Mod Menu' });
    const project4 = page.getByRole('heading', { name: 'VSCode Readme Previewer' });
    const project5 = page.getByRole('heading', { name: 'Fantasy Analyzer' });
    const project6 = page.getByRole('heading', { name: 'Multimodal Bot' });

    await expect(project1).toBeVisible();
    await expect(project2).toBeVisible();
    await expect(project3).toBeVisible();
    await expect(project4).toBeVisible();
    await expect(project5).toBeVisible();
    await expect(project6).toBeVisible();
});

test('Tech stack badges are rendered for a project', async ({ page }) => {
    const techStackBadge = page.locator('span', { hasText: 'Java' });
    await expect(techStackBadge.first()).toBeVisible();
});