import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("Check Next button", () => {
    test('testing for next button on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        await page.click('text=Next')
    })
})

test.describe("Check Back button", () => {
    test('testing for back button on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        await page.click('text=Back')
    })
})