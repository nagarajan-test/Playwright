import { test } from "@playwright/test"

test("TestLeaf assesment", async ({ page }) => {

    await page.goto(" http://leaftaps.com/opentaps/control/main")


    // login the les page
    await page.getByRole("textbox", { name: "USERNAME" }).fill("democsr2")
    await page.getByRole("textbox", { name: "PASSWORD" }).fill("crmsfa")
    await page.getByRole("button", { name: "Login" }).click() 

})