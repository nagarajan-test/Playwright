import { test, expect } from "@playwright/test"

test.use(
    {
        storageState: 'Data/sf_gauthami_login.json'
    }
)

test('chatter marathon', async ({ page }) => {
    // mine login
    // await page.goto("https://orgfarm-6175b497e9-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

    // gauthami login
    await page.goto("https://orgfarm-6d28dcc693-dev-ed.develop.lightning.force.com/lightning/page/home")
    // https://orgfarm-6d28dcc693-dev-ed.develop.lightning.force.com/lightning/page/home
    await page.waitForLoadState('domcontentloaded')

    // app launcher
    await page.locator("//button[@title='App Launcher']").click()

    // view all option
    await page.locator("//button[normalize-space()='View All']").click()

    // search service
    await page.getByRole('combobox', { name: "Search apps or items..." }).fill('service')

    // select service
    await page.locator("//p[normalize-space()='Service']").click()

    // select Cases tab
    await page.locator('//a[@title="Cases"]').click()

    // click new
    await page.getByRole('button', { name: "New" }).click()

    // click search contact
    await page.getByRole('combobox', { name: "Contact Name" }).click()

    // add new contact
    await page.getByRole('option', { name: "Add New Contact" }).click()

    // mandatory fileds filling
    await page.getByRole('combobox', { name: "Salutation" }).click()
    await page.locator("//span[@title='Mr.']").click()
    await page.locator('//input[@name="firstName"]').fill('Nagrajan')
    await page.locator('//input[@name="lastName"]').fill('M')
    // await page.locator('//input[@name="Company"]').fill('Nagarajan test')

    // save
    await page.getByRole('button', { name: "Save" }).click()

    // click on account name search
    await page.getByRole('combobox', { name: "Account Name" }).click()

    // add new ACCOUNT link
    await page.getByRole('option', { name: "Add New Account" }).click()

    await page.getByRole('textbox', { name: "Account Name" }).fill('Nagarajan Account')

    await page.getByRole('textbox', { name: "Account Number" }).fill('123456789')

    await page.getByRole('combobox', { name: "Rating" }).click()

    await page.getByRole('option', { name: "Hot" }).click()

    await page.getByRole('button', { name: "Save" }).click()

    await page.getByRole('combobox', { name: "Priority" }).click()

    await page.getByRole('option', { name: "High" }).click()

    await page.getByRole('combobox', { name: "Case Origin" }).click()

    await page.getByRole('option', { name: "Email" }).click()

    await page.getByRole('textbox', { name: "Subject" }).fill('Product Return Request')

    await page.getByRole('textbox', { name: "Description" }).fill('Requesting areturn for a defective product')

    await page.locator('(//button[@name="SaveEdit"])[1]').click()

    await page.getByRole("button", { name: 'Edit Status' }).click()

    await page.getByRole('combobox', { name: "Status" }).click()

    await page.getByRole('option', { name: "Escalated" }).click()

    await page.getByRole("button", { name: 'Save' }).click()

    await page.getByRole("button", { name: 'Share an update...' }).click()

    await page.getByRole("textbox", { name: 'Share an update...' }).fill('test issue escalated')

    const caseNumber = page.locator(
        '//div[p[normalize-space()="Case Number"]]//lightning-formatted-text'
    );

    const value = await caseNumber.innerText();
    console.log(value);


    // await page.getByRole("button", { name: 'Share' }).click()
    await page.locator('//button[@title="Click, or press Ctrl+Enter"]').click()

    await page.getByRole("button", { name: 'Actions for this Feed Item' }).first().click()
    await page.waitForTimeout(1000)

    // await page.getByRole("menuitem", { name: 'Like on Chatter' }).first().click()
    await page.locator('//span[text()="Like on Chatter"]').click()

    await page.locator('//a[@title="Chatter"]').click()

    await expect(page.getByText(value)).toBeVisible()





    // // click dropdown for convert lead
    // await page.locator("lightning-button-menu[class='menu-button-item slds-dropdown_actions slds-dropdown-trigger slds-dropdown-trigger_click'] button[type='button']").click()

    // // select convert
    // await page.locator("//span[text()='Convert']").click()

    // // change opportunity name
    // await page.locator("//button[normalize-space()='Nagarajan test-']").click()
    // await page.getByRole('textbox', { name: "Opportunity Name" }).fill('QA')

    // // click convert
    // await page.locator("//button[normalize-space()='Convert']").click()

    // // goto leads tab
    // await page.locator("//button[normalize-space()='Go to Leads']").click()

    // // search for the created lead 
    // await page.getByRole('button', { name: "Search" }).click()
    // await page.getByRole('combobox', { name: 'Search by object type' }).click()
    // await page.getByRole('option', { name: "Leads" }).click()
    // const leadSearch = page.getByRole('searchbox', { name: "Search Leads" })
    // await leadSearch.fill('Nagrajan M')
    // await leadSearch.press('Enter')

    // // verify the text No results
    // await expect(page.getByText("No results for")).toBeVisible()

    // // Navigate to the Opportunities tab
    // await page.locator("//span[@class='slds-truncate'][normalize-space()='Opportunities']").click()
    // // click serch
    // await page.getByRole('button', { name: "Search" }).click()
    // // search for opportunity
    // const searchBox1 = page.getByRole('searchbox', { name: "Search Opportunities and more" })
    // await searchBox1.fill('QA')
    // await searchBox1.press("Enter");

    // // select first QA
    // await page.getByRole('link', { name: 'QA' }).first().click();

    // // verify the opportunity visible
    // await expect(page.locator('//lightning-formatted-text[text()="QA"]')).toBeVisible();


})