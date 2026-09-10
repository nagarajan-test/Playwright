import { expect, test, Locator, chromium, webkit } from "@playwright/test"
test("Red Bus and Flipkart test", async () => {
    const edgeBrowser = await chromium.launch({
        channel: "msedge",
        headless: false
    })
    const edgeContext = await edgeBrowser.newContext()
    const edgePage = await edgeContext.newPage()
    await edgePage.goto("https://www.redbus.in/")

    const webkitBrowser = await webkit.launch({ headless: false,channel: undefined, })
    const webkitContext = await webkitBrowser.newContext()
    const webkitPage = await webkitContext.newPage()

    console.log("This is Redbus page in edge browser")
    console.log("page title is: ", await edgePage.title());
    await webkitPage.goto('https://www.flipkart.com');
    console.log("This is Flipkart page in Webkit browser")
    console.log("page title is: ", await webkitPage.title());

})

