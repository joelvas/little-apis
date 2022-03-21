const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const getAll = async (req, res) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https;://coinmarketcap.com/');

  await page.screenshot({ path: 'image.png' })

  const pageData = await page.evaluate(() => {
    return {
      html: document.documentElement.innerHTML,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  })

  const $ = cheerio.load(pageData.html)

  await browser.close;
  res.send('web');
}

module.exports = { getAll }