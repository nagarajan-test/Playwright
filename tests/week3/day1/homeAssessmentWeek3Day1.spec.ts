import { test, expect } from "@playwright/test"
test("home Assessment Assertion", async ({ page }) => {

    await page.goto("https://leafground.com/input.xhtml")
    const babuInput = page.locator('//input[@placeholder="Babu Manickam"]');

    await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled()
    await expect(babuInput).toBeEnabled()
    await babuInput.fill("Nagarajan")
    await expect.soft(babuInput).toBeDisabled()
    const learningInput = page.locator('//input[@value="My learning is superb so far."]')
    await learningInput.fill("Playwright Learning")
    console.log(await learningInput.inputValue())



})