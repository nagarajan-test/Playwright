import { test } from "@playwright/test"

test('auth file to skip the login', async ({ page }) => {


    await page.goto('https://login.salesforce.com/')

    // await page.locator('#username').fill('nagunglit.f940b1f5cd23@agentforce.com')
    await page.locator('#username').fill('gauthami.vn@testleaf.com')

    await page.locator('#Login').click()

    // await page.locator('#password').fill('Nagarajan@test1')
    await page.locator('#password').fill('Qeagle@123')

    await page.locator('#Login').click()

    await page.waitForTimeout(15000)

    // await page.context().storageState({ path: 'Data/sflogin.json' })
    await page.context().storageState({ path: 'Data/sf_gauthami_login.json' })
    await page.waitForTimeout(2000)

})