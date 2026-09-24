import { test, expect, Locator } from "@playwright/test";

test("handling window leaf taps", async ({ page, context }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')
    // login
    await page.locator('//input[@id="username"]').fill('Demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.locator("//input[@value='Login']").click()

    // click crm
    await page.locator("img[src='/opentaps_images/integratingweb/crm.png']").click()

    // leads option select
    await page.locator("(//a[normalize-space()='Leads'])[1]").click()

    // select merge leads option
    await page.locator("(//a[normalize-space()='Merge Leads'])[1]").click()

    // const fromPagePromise = context.waitForEvent('page');

    // await page.locator("(//img[@id='ext-gen604'])[1]").click();

    // const fromPage = await fromPagePromise;

    // await fromPage.waitForLoadState();

    // await fromPage.locator("a:has-text('10002')").click();


    // console.log("From window:", await fromPage.title());

    // const toPagePromise = context.waitForEvent('page');

    // await page.locator("//img[@id='ext-gen658']").click();

    // const toPage = await toPagePromise;

    // await toPage.waitForLoadState();

    // console.log("To window:", await toPage.title());

    // await toPage.locator("a:has-text('10010')").click();

    // from lead button click and event listener
    const [fromPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//img[@src="/images/fieldlookup.gif"])[1]').click()
    ]);

    //select the first lead using direct text or first lead
    await fromPage.locator('(//a[@class="linktext"])[1]').click()
    // await fromPage.locator("a:has-text('10037')").first().click()

    // to lead button click and event listener
    const [toPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click()
    ]);

    //select the first lead using direct text or first lead
    await toPage.locator('(//a[@class="linktext"])[6]').click()
    // await toPage.locator("a:has-text('10038')").first().click()

    // alert window and handling
    page.on('dialog', async (alert) => {
        console.log(alert.type())
        console.log(alert.message())
        alert.accept()
    })

    // clcik merge action
    await page.locator('//a[@class="buttonDangerous"]').click()
    let title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle('View Lead | opentaps CRM')



})