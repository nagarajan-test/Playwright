import { test, expect } from "@playwright/test";

test("home assesment", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    page.on('dialog', async (alert) => {
        console.log("alert message: ", alert.message())
        await alert.accept()
        // await alert.dismiss()
    })
    await page.frameLocator('#iframeResult').getByRole('button', { name: "Try it" }).click()
    await expect(page.frameLocator('#iframeResult').getByRole('button', { name: "Try it" })).toBeVisible()
    console.log(await page.frameLocator('#iframeResult').locator('#demo').innerText())

})