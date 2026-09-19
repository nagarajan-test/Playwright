import { test, expect, Locator } from "@playwright/test"

test("Decathlon demo", async ({ page }) => {

    await page.goto("https://www.decathlon.in")
    await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App")
    console.log(await page.title())
    const searchBox: Locator = page.locator("//input[@type='search']")
    await expect(searchBox).toBeEnabled()
    await searchBox.fill("shoes")
    await searchBox.press("Enter");
    await page.waitForTimeout(3000)
    const title: string = await page.title()
    console.log(await page.title())
    expect(title).toBe("Search | shoes")
    await page.locator("//button[contains(@aria-controls,'sport_pratice_en')]").click() // select sports filter
    await page.getByRole("checkbox", { name: "Running 29" }).check() // select running option
    // await page.locator('//span[text()="Men"]').click()
    await page.locator('//span[text()="Gender"]').click() // select gender filter
    // await page.getByText("Men", { exact: true }).click();
    await page.locator('[data-test-id="filter-item-gender_id_en-MEN"]').click(); // select men option
    await page.locator("//span[normalize-space()='Size']").click() //select size filter
    // const size = page.locator(
    //     '[data-test-id="filter-checkbox-indian_size-UK 10.5 - EU 45"]'
    // );

    // await expect(size).toBeVisible();
    // await size.check();


    // get all sizes and check the UK 10.5 available or not
    // const sizes = page.locator('[data-test-id^="filter-checkbox-indian_size-"]');

    // for (const checkbox of await sizes.all()) {
    //     console.log(await checkbox.getAttribute("data-test-id"));
    // }

    const size: Locator = page.locator('[data-test-id="filter-checkbox-indian_size-UK 10.5 - EU 45"]')
    await expect(size).toBeVisible()
    await size.check() // select size from filter
    await page.getByRole("button", { name: "Most relevant" }).click() // click dropdown relevant
    await page.getByRole("option", { name: "Price (low → high)" }).click() // sort price lo - high
    await page.locator('[data-test-id="searchpage-desk-container-10"]').nth(0).click() // selevct first product
    await page.getByRole("button", { name: "Select size 10.5" }).click() //select size
    await page.getByRole("button", { name: "Add to cart" }).click() // add to cart
    await page.getByRole('button', { name: 'Close', exact: true }).click() // close the popup
    await page.getByRole("link", { name: "Cart" }).click()
    const total: string = await page.locator('[data-test-id="cart:cart-checkout-total-cart-value"]').innerText()
    console.log(total)




})