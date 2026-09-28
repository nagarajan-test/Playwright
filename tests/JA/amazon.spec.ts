import { test, expect, Locator } from "@playwright/test";

test("amazon get lowest priced mobile", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    let searchBox = page.locator('//input[@id="twotabsearchtextbox"]')
    await searchBox.fill('mobiles')
    await searchBox.press('Enter')
    await page.waitForLoadState("domcontentloaded");


    const products = page.locator(
        '//div[@data-component-type="s-search-result"]'
    );
    const productsCount = await products.count()
    const priceTexts = (await products.locator(".a-price-whole").allInnerTexts())
    const price: number[] = priceTexts.map(price => Number(price.replace(/,/g, '')))
    const sortedPrice = price.sort((a, b) => a - b)
    // console.log(sortedPrice)
    let lowestPrice = sortedPrice[0]
    for (let i = 0; i < productsCount; i++) {
        const priceLocator: Locator = products.nth(i).locator('.a-price-whole')
        if (await priceLocator.count() === 0) {
            continue
        }
        const priceText = await priceLocator.first().innerText()
        const currentPrice = Number(priceText.replace(/,/g, ''))
        if (currentPrice === lowestPrice) {
            console.log(await products.nth(i).locator('h2').innerText(), await products.nth(i).locator('.a-price-whole').innerText(), lowestPrice)
            break
        }
    }



})