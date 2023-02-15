import { test, expect } from '@playwright/test'

test.describe("Check show button", () => {
    test('testing h2 text on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/info')
        await expect(page.locator('h2')).toHaveText('Showing 133 jobs');
    })
})