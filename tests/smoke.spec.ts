import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {

  test('Default homepage renders minimal hero and variant switcher pill', async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle(/Fernando Valenzuela Jr\.|Technology Leader/);
    await expect(page.locator('.hero-minimal-name')).toContainText('Fernando Valenzuela Jr.');
    
    const switchPill = page.locator('.variant-toggle-pill a');
    await expect(switchPill).toBeVisible();
    await expect(switchPill).toHaveAttribute('href', /.*\/home-v2/);
  });

  test('Alternate route /home-v2 renders command center and marquee', async ({ page }) => {
    await page.goto('./home-v2');
    
    const bannerTag = page.locator('.version-tag');
    await expect(bannerTag).toContainText('VARIANT B: COMMAND CENTER');

    const backBtn = page.locator('.version-switch-btn');
    await expect(backBtn).toBeVisible();
    await expect(backBtn).toHaveAttribute('href', /.*\//);

    await expect(page.locator('.blueprint-container')).toBeVisible();
    await expect(page.locator('.expertise-section')).toBeVisible();
  });

  test('User can toggle between Minimal and Command Center layouts via switchers', async ({ page }) => {
    await page.goto('./');
    await page.locator('.variant-toggle-pill a').click();
    
    await expect(page).toHaveURL(/.*\/home-v2/);
    await expect(page.locator('.version-tag')).toBeVisible();

    await page.locator('.version-switch-btn').click();
    await expect(page).toHaveURL(/.*\/$/);
    await expect(page.locator('.hero-minimal')).toBeVisible();
  });

  test('Navigation links route successfully', async ({ page }) => {
    await page.goto('./');
    const nav = page.locator('nav');
    
    await nav.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/.*\/about/);

    await nav.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/.*\/projects/);

    await nav.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/.*\/contact/);
  });

});