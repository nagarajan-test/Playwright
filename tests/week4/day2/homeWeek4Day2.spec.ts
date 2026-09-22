import { test, expect } from "@playwright/test";

test("home assesment", async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")//open website
    //register eventlistener before action
    page.on('dialog', async (alert) => {
        console.log("alert message: ", alert.message())
        await alert.accept()
        // await alert.dismiss()
    })
    //from iframe click button
    await page.frameLocator('#iframeResult').getByRole('button', { name: "Try it" }).click()
    //assert botton visible
    await expect(page.frameLocator('#iframeResult').getByRole('button', { name: "Try it" })).toBeVisible()
    // print the message after click
    console.log(await page.frameLocator('#iframeResult').locator('#demo').innerText())

})