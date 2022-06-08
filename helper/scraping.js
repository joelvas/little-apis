const { chromium } = require('playwright')

const getImageFromGoogle = async (query) => {
  const browser = await chromium.launch({ chromiumSandbox: false })
  const page = await browser.newPage()
  await page.goto(
    'https://www.google.com/search?q=' + query.replace(/ /g, '+') + '&tbm=isch'
  )
  await page.click(
    'xpath=/html/body/div[2]/c-wiz/div[3]/div[1]/div/div/div/div[1]/div[1]/span/div[1]/div[1]/div[1]'
  )
  await page.waitForLoadState('networkidle')
  const link = await page
    .locator(
      'xpath=/html/body/div[2]/c-wiz/div[3]/div[2]/div[3]/div/div/div[3]/div[2]/c-wiz/div/div[1]/div[1]/div[3]/div/a/img'
    )
    .getAttribute('src')
  await page.close()
  await browser.close()
  return link
}
module.exports = {
  getImageFromGoogle
}
