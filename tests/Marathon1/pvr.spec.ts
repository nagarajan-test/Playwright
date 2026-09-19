import { test, expect, Locator } from "@playwright/test"

test("Decathlon demo", async ({ page }) => {

    await page.goto(" https://www.pvrcinemas.com")
    await page.getByRole('heading', { name: 'Chennai' }).click()
    await page.locator('//span[text()="Cinema"]').click()
    await page.locator('//span[normalize-space(.)="Select Cinema"]').click()
    const cinemas: Locator = page.locator("ul[role='listbox'] li")
    await cinemas.nth(0).click()
    await page.locator("ul[role='listbox'] li").nth(0).click()
    await page.locator("ul[role='listbox'] li").nth(0).click()
    await page.locator("ul[role='listbox'] li").nth(0).click()
    await page.locator("//button[@aria-label='Submit']").click()
    // await page.locator("//button[normalize-space()='Accept']").click()
    // Using Playwright's text selector engine
    await page.locator('button:has-text("Accept")').click();
    const availableSeats = page.locator("span.seat-current-pvr");
    console.log("Available seats:", await availableSeats.count());
    await availableSeats.first().click();
    console.log("Seat Info", await page.locator('//div[@class="seat-info"]').innerText())
    console.log("GRand total", await page.locator('//div[@class="grand-prices"]').innerText())
    const title: string = await page.title()
    console.log("page title: ", title)
    await page.locator("//button[normalize-space()='Proceed']").click()






})