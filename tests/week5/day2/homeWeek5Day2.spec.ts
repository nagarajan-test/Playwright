import { test } from "@playwright/test"
import dotenv from 'dotenv'

let fileName = process.env.envfile || "qa" || "prod"
dotenv.config({ path: `Data/${fileName}.env` })

let url = process.env.lf_url as string
let username = process.env.lf_username as string
let password = process.env.lf_password as string
let company = process.env.lf_company as string
let firstname = process.env.lf_firstname as string
let lastname = process.env.lf_lastname!
let source = <string>process.env.lf_source
test("home assessment data parameterization", async ({ page }) => {

    await page.goto(url)

    // login
    await page.locator("//input[@id='username']").fill(username)
    await page.locator("//input[@id='password']").fill(password)
    await page.locator("//input[@type='submit']").click()

    // Click CRM/SFA
    await page.getByText('CRM/SFA').click()

    // Click leads
    await page.locator('//a[contains(text(),"Leads")]').click()

    //  Create Leads
    await page.locator('//a[contains(text(),"Create Lead")]').click()

    // Fill all the mandatory fields such as Company name, First name and Last name
    await page.locator('//input[contains(@id,"createLeadForm_companyName")]').fill(company)
    await page.locator('//input[@id="createLeadForm_firstName"]').fill(firstname)
    await page.locator('//input[@id="createLeadForm_lastName"]').fill(lastname)

    // Select Direct Mail from the Source dropdown using data parameterization

    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption(source)

    // select source  using label
    // await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({ label: 'Direct Mail' })

    // select marketing campaign using value
    await page.locator('//select[@id="createLeadForm_marketingCampaignId"]').selectOption({ value: 'DEMO_MKTG_CAMP' })

    // get the count and print values in matketing campaign
    let marketingCampaignOptions: string[] = (await page.locator('//select[@id="createLeadForm_marketingCampaignId"]//option').allInnerTexts()).map(option => option.trim())
    console.log(marketingCampaignOptions)
    console.log("count of marketing options", marketingCampaignOptions.length)

    // select General Services using index
    await page.locator('//select[@id="createLeadForm_industryEnumId"]').selectOption({ index: 6 })

    // select inr from preferred currency
    await page.locator('//select[@id="createLeadForm_currencyUomId"]').selectOption('INR')

    // Select India from the Country dropdown
    await page.locator('//select[@id="createLeadForm_generalCountryGeoId"]').selectOption('IND')

    // Select any state from the State dropdown 
    await page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]').selectOption('IN-TN')

    // Get the count of all states and print the values
    let stateOption: string[] = (await page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]//option').allInnerTexts()).map(option => option.trim())
    console.log(stateOption)
    console.log("count of state", stateOption.length)

    // create the lead
    await page.locator('//input[@name="submitButton"]').click()

    // await page.waitForTimeout(3000)

})

