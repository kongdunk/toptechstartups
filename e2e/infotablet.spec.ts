import { test, devices, expect } from "@playwright/test";

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width:820, height:1180}
})

test.describe("Testing for home tablet", () => {
    test("Testing for link text", async ({ page }) => {
        await page.goto('http://localhost:3000/info')
        await expect(page.locator('a.allJobsLink')).toHaveText('back to home');
    })  
})