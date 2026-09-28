import { test, expect } from "@playwright/test";

import Data from "../../../Data/login.json"

for (let data of Data) {
    test(`classroom assesment salesforce page login test data parameterization ${data.testID}`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/?locale=in");
        await page
            .locator("input[id='username']")
            .fill(data.user);
        await page
            .locator("input[type='submit']").click()

        await page
            .locator("input[type='password']")
            .fill(data.password);

        await page.locator("#Login").click()
    })
}

// if we need to test one particular testcase 
let customData = Data.find(data => data.testID === "tcid02")
if (!customData) {
    throw new Error("not find the testId")
}
test(`classroom assesment salesforce page login test data parameterization `, async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page
        .locator("input[id='username']")
        .fill(customData.user);
    await page
        .locator("input[type='submit']").click()

    await page
        .locator("input[type='password']")
        .fill(customData.password);

    await page.locator("#Login").click()
})

