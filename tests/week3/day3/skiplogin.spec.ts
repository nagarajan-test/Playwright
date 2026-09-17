import { test } from "@playwright/test"


test.use(
    {
        storageState: 'Data/sflogin.json'
    }
)

test('auth file to skip the login', async ({ page }) => {

    // await page.goto("https://login.salesforce.com/")
    await page.goto("https://orgfarm-6175b497e9-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

    await page.waitForLoadState('domcontentloaded')

    console.log(await page.title());
    // https://orgfarm-6175b497e9-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome
    // https://orgfarm-6175b497e9-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome

    // https://orgfarm-6175b497e9-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome

})