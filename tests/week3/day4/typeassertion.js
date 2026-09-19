function findBrowser(browser) {
    if (browser !== "chrome" && browser !== "msedge" && browser !== "webkit") {
        throw new Error("INVALID BROWSER");
    }
    console.log("the browser is", browser);
}
findBrowser("chrome");
findBrowser("firefox");
