import { test, expect } from "@playwright/test";
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

let values: any[] = parse(fs.readFileSync('utils/loginData.csv', 'utf-8'), { columns: true, skip_empty_lines: true })

for (let data of values) {


    test(`retrive data from csv file ${data.testId}`, async ({ page }) => {
        await page.goto(" https://leaftaps.com/opentaps/control/main")
        await page.locator('#username').fill(data.username)
        await page.locator('#password').fill(data.password)
        await page.locator('.decorativeSubmit').click()
        console.log(await page.locator('#form h2').innerText())
    })
}