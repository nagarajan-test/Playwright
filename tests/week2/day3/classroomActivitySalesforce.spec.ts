import { test, expect } from "@playwright/test";

test("classroom assesment salesforec page login test", async ({ page }) => {
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
  await page.waitForLoadState("domcontentloaded")

  // await expect(page.locator("span[title='Quarterly Performance']")).toBeVisible({ timeout: 15000 })
  // await page.waitForTimeout(8000)
  // console.log(await page.title())
  // await page.waitForTimeout(5000)

  // this checks only initial load , while loading inbetween title may "" are some other value but it check with screenshot and fails
  // expect(await page.title()).toBe("Home | Salesforce")
  // console.log(await page.title());

  // Automatically polls until Salesforce finishes redirecting and title matches
  await expect(page).toHaveTitle("Home | Salesforce", { timeout: 15000 });

  console.log("Verified Title:", await page.title());


});
