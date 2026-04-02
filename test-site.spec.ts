import { test, expect, type Page } from '@playwright/test';

const SITE_URL = 'https://workflowclick.com';
const SCREENSHOT_PATH = './test-screenshots';

test.describe('WorkFlowClick Website Desktop Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('1. Audience Gate - Load and Button Functionality', async ({ page }) => {
    await page.goto(SITE_URL);

    // Check if audience gate loads
    const gateTitle = page.locator('text=/choose your path|select audience|agency|insurtech/i').first();
    await expect(gateTitle).toBeVisible({ timeout: 10000 });

    // Take screenshot of gate
    await page.screenshot({ path: `${SCREENSHOT_PATH}/01-audience-gate.png`, fullPage: true });

    // Test Agency button exists and is clickable
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    await expect(agencyButton).toBeVisible();

    // Test InsurTech button exists and is clickable
    const insurtechButton = page.locator('button:has-text("InsurTech"), a:has-text("InsurTech")').first();
    await expect(insurtechButton).toBeVisible();

    console.log('✓ Audience gate loaded with both buttons visible');
  });

  test('2. Agency Path - Hero and Stats Verification', async ({ page }) => {
    await page.goto(SITE_URL);

    // Click Agency button
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    await agencyButton.click();
    await page.waitForLoadState('networkidle');

    // Verify hero headline for Agency
    const agencyHero = page.locator('text=/Grow Your Commercial Book.*With Cold Email/i');
    await expect(agencyHero).toBeVisible({ timeout: 10000 });

    // Verify stats bar
    const stats50M = page.locator('text=/\\$50M\\+/i').first();
    await expect(stats50M).toBeVisible();

    const stats25Years = page.locator('text=/25\\+/i').first();
    await expect(stats25Years).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: `${SCREENSHOT_PATH}/02-agency-hero.png`, fullPage: true });

    console.log('✓ Agency hero shows correct headline and stats');
  });

  test('3. InsurTech Tab - Content Switch Verification', async ({ page }) => {
    await page.goto(SITE_URL);

    // Click InsurTech button
    const insurtechButton = page.locator('button:has-text("InsurTech"), a:has-text("InsurTech")').first();
    await insurtechButton.click();
    await page.waitForLoadState('networkidle');

    // Verify hero changes to InsurTech version
    const insurtechHero = page.locator('text=/Grow Your Pipeline/i');
    await expect(insurtechHero).toBeVisible({ timeout: 10000 });

    // Verify InsurTech stats
    const stats50M = page.locator('text=/\\$50M\\+/i').first();
    await expect(stats50M).toBeVisible();

    const stats25Years = page.locator('text=/25\\+/i').first();
    await expect(stats25Years).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: `${SCREENSHOT_PATH}/03-insurtech-hero.png`, fullPage: true });

    console.log('✓ InsurTech tab shows correct content and stats');
  });

  test('4. Navigation Links - Header and Footer', async ({ page }) => {
    await page.goto(SITE_URL);

    // Navigate past gate if present
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
    }

    // Test header navigation links
    const headerLinks = [
      'Services',
      'About',
      'Contact',
      'Case Studies',
      'Resources'
    ];

    const headerResults: string[] = [];
    for (const linkText of headerLinks) {
      const link = page.locator(`header a:has-text("${linkText}"), nav a:has-text("${linkText}")`).first();
      const isVisible = await link.isVisible({ timeout: 2000 }).catch(() => false);
      headerResults.push(`${linkText}: ${isVisible ? '✓ Found' : '✗ Not found'}`);
    }

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Test footer links
    const footerLinks = [
      'Privacy Policy',
      'Terms of Service'
    ];

    const footerResults: string[] = [];
    for (const linkText of footerLinks) {
      const link = page.locator(`footer a:has-text("${linkText}")`).first();
      const isVisible = await link.isVisible({ timeout: 2000 }).catch(() => false);
      footerResults.push(`${linkText}: ${isVisible ? '✓ Found' : '✗ Not found'}`);
    }

    // Take screenshot
    await page.screenshot({ path: `${SCREENSHOT_PATH}/04-footer-links.png`, fullPage: true });

    console.log('Header links:', headerResults.join(', '));
    console.log('Footer links:', footerResults.join(', '));
  });

  test('5. CTA Buttons - Book a Strategy Call', async ({ page }) => {
    await page.goto(SITE_URL);

    // Navigate past gate
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
    }

    // Find all CTA buttons
    const ctaButtons = page.locator('button:has-text("Book a Strategy Call"), a:has-text("Book a Strategy Call")');
    const count = await ctaButtons.count();

    console.log(`Found ${count} CTA buttons`);

    if (count > 0) {
      // Test first CTA button
      const firstCTA = ctaButtons.first();
      await expect(firstCTA).toBeVisible();

      // Check if it's a link or button and get href/action
      const href = await firstCTA.getAttribute('href').catch(() => null);
      const onclick = await firstCTA.getAttribute('onclick').catch(() => null);

      console.log(`CTA href: ${href}`);
      console.log(`CTA onclick: ${onclick}`);

      // Take screenshot
      await page.screenshot({ path: `${SCREENSHOT_PATH}/05-cta-buttons.png`, fullPage: true });
    }
  });

  test('6. FAQ Accordions - Expand/Collapse', async ({ page }) => {
    await page.goto(SITE_URL);

    // Navigate past gate
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
    }

    // Scroll to FAQ section
    const faqSection = page.locator('text=/FAQ|Frequently Asked Questions/i').first();
    if (await faqSection.isVisible({ timeout: 5000 }).catch(() => false)) {
      await faqSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      // Find FAQ items/accordions
      const faqItems = page.locator('[data-accordion-item], .accordion-item, details').first();

      if (await faqItems.isVisible({ timeout: 3000 }).catch(() => false)) {
        // Take screenshot before expansion
        await page.screenshot({ path: `${SCREENSHOT_PATH}/06-faq-collapsed.png`, fullPage: true });

        // Try to click/expand first FAQ
        await faqItems.click();
        await page.waitForTimeout(500);

        // Take screenshot after expansion
        await page.screenshot({ path: `${SCREENSHOT_PATH}/06-faq-expanded.png`, fullPage: true });

        console.log('✓ FAQ accordion interaction tested');
      } else {
        console.log('! FAQ section found but no accordion items detected');
      }
    } else {
      console.log('! No FAQ section found on page');
    }
  });

  test('7. Form Submissions - Audit and Contact Forms', async ({ page }) => {
    await page.goto(SITE_URL);

    // Navigate past gate
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
    }

    // Look for forms
    const forms = page.locator('form');
    const formCount = await forms.count();

    console.log(`Found ${formCount} forms on page`);

    if (formCount > 0) {
      // Test first form
      const firstForm = forms.first();
      await firstForm.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      // Take screenshot of form
      await page.screenshot({ path: `${SCREENSHOT_PATH}/07-form.png`, fullPage: true });

      // Check form fields
      const inputs = firstForm.locator('input[type="text"], input[type="email"], input[type="tel"], textarea');
      const inputCount = await inputs.count();
      console.log(`Form has ${inputCount} input fields`);

      // Try to identify form type
      const formText = await firstForm.textContent();
      if (formText?.toLowerCase().includes('audit')) {
        console.log('✓ Found audit form');
      } else if (formText?.toLowerCase().includes('contact')) {
        console.log('✓ Found contact form');
      } else {
        console.log('✓ Found form (type unknown)');
      }
    } else {
      console.log('! No forms found on page');
    }
  });

  test('8. Visual Regression - Key Sections Screenshots', async ({ page }) => {
    await page.goto(SITE_URL);

    // Navigate past gate to Agency
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
    }

    // Full page screenshot
    await page.screenshot({ path: `${SCREENSHOT_PATH}/08-full-page-agency.png`, fullPage: true });

    // Hero section
    const hero = page.locator('h1').first();
    if (await hero.isVisible({ timeout: 3000 }).catch(() => false)) {
      await hero.screenshot({ path: `${SCREENSHOT_PATH}/08-hero-section.png` });
    }

    // Stats section
    const stats = page.locator('text=/\\$50M\\+/i').first();
    if (await stats.isVisible({ timeout: 3000 }).catch(() => false)) {
      await stats.screenshot({ path: `${SCREENSHOT_PATH}/08-stats-section.png` });
    }

    console.log('✓ Screenshots captured for key sections');
  });

  test('9. Mobile Responsiveness Check', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
    await page.goto(SITE_URL);

    // Check if gate is responsive
    await page.screenshot({ path: `${SCREENSHOT_PATH}/09-mobile-gate.png`, fullPage: true });

    // Navigate past gate
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: `${SCREENSHOT_PATH}/09-mobile-agency.png`, fullPage: true });
    }

    console.log('✓ Mobile responsiveness screenshots captured');
  });

  test('10. Performance and Console Errors', async ({ page }) => {
    const consoleMessages: string[] = [];
    const errors: string[] = [];

    // Listen for console messages
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
      consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
    });

    // Listen for page errors
    page.on('pageerror', error => {
      errors.push(error.message);
    });

    await page.goto(SITE_URL);

    // Navigate past gate
    const agencyButton = page.locator('button:has-text("Agency"), a:has-text("Agency")').first();
    if (await agencyButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await agencyButton.click();
      await page.waitForLoadState('networkidle');
    }

    // Wait for full page load
    await page.waitForTimeout(3000);

    console.log(`Console messages: ${consoleMessages.length}`);
    console.log(`Errors detected: ${errors.length}`);

    if (errors.length > 0) {
      console.log('Errors:', errors.join('\n'));
    }

    // Check for 404s or failed resources
    const failedResources: string[] = [];
    page.on('response', response => {
      if (response.status() >= 400) {
        failedResources.push(`${response.status()} - ${response.url()}`);
      }
    });

    if (failedResources.length > 0) {
      console.log('Failed resources:', failedResources.join('\n'));
    }
  });
});
