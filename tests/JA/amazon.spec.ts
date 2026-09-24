import { test, expect, Locator } from "@playwright/test";

test("amazon get lowest priced mobile", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('mobiles')
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let products: Locator[] = await page.locator('//div[@role="listitem"]').all()
    let productCount: number = products.length
    let lowestPrice = Infinity
    let prodductName: string = ''
    let productPrice = ''
    for (let pt of products) {
        productPrice = await pt.locator("//span[@class='a-price-whole']").innerText()
        console.log(productPrice, " \t")
    }


})