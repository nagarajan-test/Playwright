import { test, expect } from "@playwright/test";
import path from 'path'
import fs from 'fs'

test("file upload using inputtype file", async ({ page }) => {
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator("//p[normalize-space()='I have work experience (excluding internships)']").click()
    const resumeupload = page.locator("//input[@id='resumeUpload']")
    await resumeupload.setInputFiles('Data/testing_purpose.pdf')
    await expect(page.locator("//span[contains(@class,'file-name')]")).toContainText("testing_purpose.pdf")

})

test("upload file using eventlistener", async ({ page }) => {
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator("//p[normalize-space()='I have work experience (excluding internships)']").click()
    //register event listener
    const uploadRef = page.waitForEvent('filechooser')
    // action 
    await page.getByRole('button', { name: "Upload Resume" }).click()
    //resolve promise
    const upload = await uploadRef

    // file upload using relative path
    // await upload.setFiles('Data/testing_purpose.pdf')

    //file upload using absolute path
    await upload.setFiles(path.join(__dirname, '../../../Data/testing_purpose.pdf'))
    console.log("current directory", __dirname, '\t', __filename)

    //assertion
    await expect(page.locator("//span[contains(@class,'file-name')]")).toContainText("testing_purpose.pdf")


})

test.only("file download", async ({ page }) => {
    await page.goto("https://www.leafground.com/file.xhtml")

    // resgister event
    const downRef = page.waitForEvent('download')

    // action trigger
    await page.locator("//span[normalize-space()='Download']").click()

    // resolve promise
    const download = await downRef

    // download file relative path
    await download.saveAs('Data/test.jpeg')

    //absolute path
    await download.saveAs(path.join(__dirname, '../../../Data/test1.jpg'))

    // save with suggestedFilename
    await download.saveAs(`Data/${download.suggestedFilename()}`)

    // to verify the download
    expect(download).toBeTruthy()

    // verify filename
    expect(download.suggestedFilename()).toBe('TestLeaf Logo.png')

    const custompath = 'Data/Testleaf Logo.png'
    expect(fs.existsSync(custompath)).toBeTruthy()


})