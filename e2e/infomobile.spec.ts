import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("Check show button", () => {
    test('testing for colours on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/info')
        await page.click('text=show')
    })
})

test.describe("Check Back button", () => {
    test('testing for colours on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/info')
        await expect(page.locator('h1')).toHaveText('Top Tech Startup Company List');
    })
})