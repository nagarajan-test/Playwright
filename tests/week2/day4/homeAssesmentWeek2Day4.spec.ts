import { test, expect, Locator } from "@playwright/test";

test(" Assesment salesforce page ", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in");
  await page
    .locator("input[id='username']")
    .fill("dilipkumar.rajendran@testleaf.com");
  await page
    .locator("input[type='submit']").click()

  await page
    .locator("input[type='password']")
    .fill("TestLeaf@2025");
  // await page.waitForTimeout(2000)
  await page.locator("#Login").click()


  await page.locator("//button[@title='App Launcher']").click() // app launcher
  await page.locator("//button[@aria-label='View All Applications']").click() // view all option
  await page.locator("//p[text()='Sales']").click() // sales option
  await page.locator('//a[@class="slds-context-bar__label-action dndItem"]/span[text()="Leads"]').click() // Leads Tab
  await page.locator('//a[@title="New"]').click() // New Button
  await page.locator('//button[@name="salutation"]').click() // Salutation
  await page.locator("//lightning-base-combobox-item[@data-value='Mr.']").click() //select option
  await page.locator("//input[@name='lastName']").fill("Nagarajan") // lastname
  await page.locator('//input[@name="Company"]').fill("Nagarajan Test") // company
  await page.locator("//button[@name='SaveEdit']").click() // save
  // console.log(await page.locator("//lightning-formatted-name[normalize-space(.)='Mr. Nagarajan']").innerText());

  await expect(page).toHaveTitle("Nagarajan | Lead | Salesforce", { timeout: 15000 })


});

test("Edit Lead", async ({ page }) => {

  await page.goto("http://leaftaps.com/opentaps/control/main")

  // login the les page
  await page.locator("input[id='username']").fill("democsr2")
  await page.locator("input[id='password']").fill("crmsfa")
  await page.locator("input[type='submit']").click()
  // await page.getByRole('button', { name: "Login" }).click()

  // click on the crm logo
  await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click()

  // select the leads option
  await page.locator('div.x-panel-header a:has-text("Leads")').click()
  // await page.locator("//a[@id='ext-gen619']").click()
  await page.locator("//a[text()='Create Lead']").click()

  //  create the lead 
  await page.locator('//input[@id="createLeadForm_companyName"]').fill("Nagarajan Test")
  await page.locator('//input[@id="createLeadForm_firstName"]').fill("Raja")
  await page.locator('//input[@id="createLeadForm_lastName"]').fill("M")
  await page.locator('//input[@value="Create Lead"]').click()

  // edit the lead
  await page.locator("//a[text()='Edit']").click()
  await page.locator('//input[@id="updateLeadForm_companyName"]').fill("Test Nagarajan")
  await page.locator('//input[@value="Update"]').click();

})


test("Create Individuals", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in");
  await page
    .locator("input[id='username']")
    .fill("dilipkumar.rajendran@testleaf.com");
  await page
    .locator("input[type='submit']").click()

  await page
    .locator("input[type='password']")
    .fill("TestLeaf@2025");
  // await page.waitForTimeout(2000)
  await page.locator("#Login").click()

  await page.locator("//button[@title='App Launcher']").click() // app launcher
  await page.locator("//button[@aria-label='View All Applications']").click() // view all option
  await page.locator("//p[normalize-space()='Individuals']").click() // Individuals option
  await page.locator("//li[@data-target-selection-name='sfdc:StandardButton.Individual.New']//div[text()='New']").click() // Individuals option
  await page.locator('//div[contains(@class,"salutation")]//a[@class="select"]').click() // Salutation option
  await page.locator('//input[contains(@class,"lastName")]').fill("Nagarajan") // Last NAme
  await page.locator('//span[text()="Save"]').click() // save
  // await expect(page).toHaveTitle("Nagarajan | Salesforce")
  let allNames: String[] = (await page.locator('//th[@data-label="Name"]//a').allTextContents()).map(text => text.trim())
  console.log(allNames);
})

test.only("Edit Individuals", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in");
  await page
    .locator("input[id='username']")
    .fill("dilipkumar.rajendran@testleaf.com");
  await page
    .locator("input[type='submit']").click()

  await page
    .locator("input[type='password']")
    .fill("TestLeaf@2025");
  // await page.waitForTimeout(2000)
  await page.locator("#Login").click()

  await page.locator("//button[@title='App Launcher']").click() // app launcher
  await page.locator("//button[@aria-label='View All Applications']").click() // view all option
  await page.locator("//p[normalize-space()='Individuals']").click() // Individuals option
  await page.locator("//li[@data-target-selection-name='sfdc:StandardButton.Individual.New']//div[text()='New']").click() // Individuals option
  await page.locator('//div[contains(@class,"salutation")]').click() // Salutation option
  await page.locator("//a[@title='Mr.']").click() // Salutation option
  await page.locator('//input[contains(@class,"lastName")]').fill("Nagarajan") // Last NAme
  await page.locator('//span[text()="Save"]').click() // save
  await page.locator('//a//div[@title="Edit"]').click() // Edit
  await page.locator('//input[contains(@class,"firstName")]').fill("Raja") // First Name
  await page.locator('//span[text()="Save"]').click() // save
  // method 1 using page title
  await expect(page).toHaveTitle("Raja Nagarajan | Salesforce", { timeout: 15000 })
  // let allNames: String[] = (await page.locator('//th[@data-label="Name"]//a').allTextContents()).map(text => text.trim())
  // maethod 2 using visible text - Name we are given displayed in header-title
  await expect(page.locator("//span[text()='Mr. Raja Nagarajan']")).toHaveText('Mr. Raja Nagarajan', { timeout: 15000 })



})