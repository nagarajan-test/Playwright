import { test, expect } from "@playwright/test";
import path from 'path'

test.only("multiple file upload", async ({ page }) => {
    await page.goto("https://www.leafground.com/file.xhtml")

    // await page.waitForLoadState('domcontentloaded')
    // await page.waitForTimeout(3000)
    let upload = page.locator('input[type="file"]').nth(1)
    await upload.setInputFiles([path.join(__dirname, '../../../Data/test1.jpg'), path.join(__dirname, '../../../Data/test.jpeg')])
    let texts = await page.locator('div[class="ui-fileupload-filename"]').allInnerTexts()
    expect(texts).toContain('test1.jpg')
    expect(texts).toContain('test.jpeg')

    // await page.waitForLoadState('domcontentloaded')
    // await page.waitForTimeout(3000)

    // // event register
    // const uploadRef = page.waitForEvent('filechooser')
    // // // trigger action
    // await page.locator("//span[@id='j_idt97:j_idt98_label']").click()
    // // // resolve promise and store
    // const fileUpload = await uploadRef
    // console.log(__dirname)

    // await fileUpload.setFiles([path.join(__dirname, '../../Data/test.jpeg'), path.join(__dirname, '../../../Data/test1.jpg')])
    // let images = await page.locator('div[class="ui-fileupload-filename"]').allInnerTexts()
    // // await expect(images).toContain('test1.jpg')s
    // expect(images).toContain('test.jpeg')



})
