import { test, expect, Locator } from "@playwright/test";

test("handling window", async ({ page, context }) => {

    await page.goto('https://www.leafground.com/window.xhtml')
    let pagePromise = context.waitForEvent('page')
    await page.locator("//button[@id='j_idt88:new']").click()
    const newPage = await pagePromise;

    await newPage.waitForLoadState('domcontentloaded');
    console.log(await newPage.title());
    await page.bringToFront();
    console.log(await page.title());



})