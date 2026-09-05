// tests/visual-regression.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Snapshot Tests', () => {

  // 1. Default Minimalist Canvas Hero (Version 1)
  test('Minimalist homepage visual layout', async ({ page }) => {
    await page.goto('./');
    // Ensure all web fonts and initial transitions settle
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('home-minimal-layout.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02, // Allows minor anti-aliasing variations
    });
  });

  // 2. Alternate Command Center Workstation & Marquee (Version 2)
  test('Command center /home-v2 visual layout', async ({ page }) => {
    await page.goto('./home-v2');
    await page.waitForLoadState('networkidle');

    // Wait for the SVG workstation element to mount
    await expect(page.locator('.workstation-wrapper, .blueprint-container')).toBeVisible();

    await expect(page).toHaveScreenshot('home-command-center-layout.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    });
  });

  // 3. Modal Backdrop Blur Overlay
  test('Tech Stack modal blur snapshot', async ({ page }) => {
    await page.goto('./');
    await page.waitForLoadState('networkidle');

    // Open Tech Stack Modal
    const stackBtn = page.locator('button[data-target="modal-stack"]');
    await stackBtn.click();

    const modal = page.locator('#modal-stack');
    await expect(modal).toHaveClass(/active/);

    // Capture visual snapshot of the modal dialog with blurred background
    await expect(page).toHaveScreenshot('tech-stack-modal-open.png', {
      maxDiffPixelRatio: 0.03,
    });
  });

  // 4. Mobile Breakpoint Layout Snapshot
  test('Mobile single-column collapse layout', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14/15 size
    await page.goto('./');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('home-minimal-mobile.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.03,
    });
  });

});