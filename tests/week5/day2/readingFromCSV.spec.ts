import test from "@playwright/test"
import dotenv from 'dotenv'

// reading from single csv file
// dotenv.config({ path: 'Data/prod.env' })

// switch between files and read
let filename = process.env.envfile || "qa" || "prod"
dotenv.config({ path: `Data/${filename}.env` })

// console.log(process.env.lf_password)

test("reading from csv", async ({ page }) => {
    await page.goto(process.env.lf_url as string)
    // await page.goto(process.env.lf_url!)
    // await page.goto(<string>process.env.lf_url)
    await page.locator('//input[@id="username"]').fill(process.env.lf_username as string)
    await page.locator('//input[@id="password"]').fill(process.env.lf_password as string)
    await page.locator('//input[@type="submit"]').click()

    // page.waitForTimeout(2000)
    console.log(await page.title())

})