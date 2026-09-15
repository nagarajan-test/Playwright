import { expect, test } from "@playwright/test"

test("classroom assessment xpath advance", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in")
    page.locator('//label[contains(@for,"username")]/following::input[@name="username"]').fill("dilipkumar.rajendran@testleaf.com")
    page.locator('//label[contains(@for,"username")]/following::input[@name="Login"]').click()
    page.locator('//label[contains(@for,"username")]/following::input[@name="pw"]').fill("TestLeaf@2025")
    page.locator('//input[contains(@id,"remember")]/preceding::input[@id="Login"]').click()

    await expect(page).toHaveTitle("Home | Salesforce", { timeout: 25000 })
})