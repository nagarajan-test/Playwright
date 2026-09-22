import { test, expect } from "@playwright/test";

test("automating prompt dialogbox", async ({ page }) => {
    await page.goto('https://www.leafground.com/alert.xhtml')
    // register event before action
    page.on('dialog', async (alert) => {
        if (alert.type() === 'prompt') {
            alert.accept("Playwright")
            console.log(await page.locator("#confirm_result").innerText())
        }
    })
    // clcik the button
    await page.locator('(//span[text()="Show"])[5]').click()

})