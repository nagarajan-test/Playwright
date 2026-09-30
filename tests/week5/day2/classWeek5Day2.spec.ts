import { test, expect } from "@playwright/test"

import dotenv from 'dotenv'

let fileName = process.env.envfile || "qa_sf" || "prod_sf"

dotenv.config({ path: `Data/${fileName}.env` })

let URL = process.env.lf_url as string
let USERNAME = process.env.lf_username as string
let PASSWORD = process.env.lf_password as string

test("reading from env to test salesforce login", async ({ page }) => {
    await page.goto(URL)
    await page.locator('//input[@id="username"]').fill(USERNAME)
    await page.locator('//input[@id="Login"]').click()
    await page.locator('//input[@id="password"]').fill(PASSWORD)
    await page.locator('//input[@id="Login"]').click()
    await page.waitForTimeout(3000)
})