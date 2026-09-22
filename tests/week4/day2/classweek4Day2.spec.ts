
import test from "@playwright/test";


test("iframe demo", async ({ page }) => {

    await page.goto("https://www.leafground.com/frame.xhtml;jsessionid=node010v7f8i0bl86029kzghi1rgys205944.node0")
    await page
        .frameLocator("//iframe[@src='page.xhtml']")
        .frameLocator('//iframe[@src="framebutton.xhtml"]')
        .getByRole("button", { name: "Click Me" }).click()
})