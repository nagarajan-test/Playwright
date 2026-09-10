import { test, expect, Locator } from "@playwright/test"

test("TestLeaf assesment", async ({ page }) => {

    await page.goto(" http://leaftaps.com/opentaps/control/main")

    // login the les page
    await page.locator("input[id='username']").fill("democsr2")
    await page.locator("input[id='password']").fill("crmsfa")
    await page.locator("input[type='submit']").click()
    // await page.getByRole('button', { name: "Login" }).click()

    // click on the crm logo
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click()

    // select the leads option
    await page.locator('div.x-panel-header a:has-text("Leads")').click()
    await page.locator("span:has-text('Create Lead')").click()

    //  create the lead 
    await page.locator("input[id='ext-gen499'][name]").fill("democsr")
    const firstName: Locator = page.locator("input[id='ext-gen501']")
    await firstName.fill("Raja")
    // save the first name for future check 
    const firstNameText: any = await firstName.inputValue()
    console.log("fisrtname", firstNameText);

    await page.locator("input[id='ext-gen503']").fill("M")
    await page.locator('input[id="ext-gen511"]').fill("91")
    await page.locator('input[id="ext-gen515"]').fill("44")
    await page.locator('input[id="ext-gen519"]').fill("9677531996")
    await page.locator('input[id="ext-gen529"]').fill("nagunglit@gmail.com")

    await page.locator("button[id='ext-gen545']").click()


    // get all the firstname td and check if my entered input first name is present
    const firstNameLocators: Locator = page.locator("td.x-grid3-td-firstName a")
    const count: number = await firstNameLocators.count()
    for (let i = 0; i < count; i++) {

        const firstName = await firstNameLocators.nth(i).innerText();

        if (firstName === "Raja") {
            await firstNameLocators.nth(i).click(); // if present click that entry
            break;
        }
    }

    // await page.waitForTimeout(2000)

    // click the edit button 
    // await page.locator("a[id='ext-gen519']").click()
    await page.locator("a:has-text('Edit')").click()
    await page.locator("input[name='personalTitle']").fill("Mr.")
    await page.locator("input[name='generalProfTitle']").fill("Testing")
    await page.locator("input[name='annualRevenue']").fill("1200000")
    await page.locator("input[name='departmentName']").fill("IT")

    //  get all the source options
    const source: String[] = await page.locator('select[name="dataSourceId"] option').allTextContents()
    console.log(source);

    // iterate to all the source test
    for (let src of source) {

        console.log(src);

    }

    // await page.waitForTimeout(2000)
    // there is no phonr number and no create lead instead have update , i used that
    await page.locator('input[type="submit"][value="Update"]').click();

    await page.waitForTimeout(2000)
})