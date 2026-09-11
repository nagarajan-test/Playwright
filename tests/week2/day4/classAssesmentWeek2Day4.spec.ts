
import { test } from "@playwright/test"

test("TestLeaf assesment", async ({ page }) => {

    await page.goto(" http://leaftaps.com/opentaps/control/main")


    // login the les page
    await page.locator("input[id='username']").fill("democsr2")
    await page.locator("input[id='password']").fill("crmsfa")
    await page.locator("input[type='submit']").click()

    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click()

    // select the leads option


    await page.locator('a:has-text("Create Lead")').click()

    //  get all the source options
    const source: String[] = await page.locator('select[name="dataSourceId"] option').allTextContents()
    console.log(source);

    // iterate to all the source test
    for (let src of source) {

        console.log(src);

    }


})