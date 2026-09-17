import { test, expect, Locator } from "@playwright/test"
test("playwright locator", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill("Demosalesmanager")
    await page.getByLabel("Password").fill("crmsfa")
    await page.getByRole("button", { name: "Login" }).click()
    await page.getByText("CRM/SFA").click()
    await page.getByRole("link", { name: "Leads" }).click()
    await page.getByRole("link", { name: "Create Lead" }).click()
    await page.locator("//input[@id='createLeadForm_companyName']").fill("NagarajanTest")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Nagarajan")
    await page.locator("//input[@id='createLeadForm_lastName']").fill("M")
    await page.locator("//input[@name='personalTitle']").fill("Mr.")
    await page.locator("//input[@name='generalProfTitle']").fill("Test")
    await page.locator("//input[@name='annualRevenugit ae']").fill("1260000")
    await page.locator("//input[@name='departmentName']").fill("IT")
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill("9653771886")
    await page.locator('input[type="submit"][value="Create Lead"]').click();
})