const { getImageFromGoogle } = require('../helper/scraping')

const getImage = async (req, res) => {
  console.time('getImage')
  const link = await getImageFromGoogle(req.query.query)
  console.timeEnd('getImage')
  res.status(200).json(link)
}
module.exports = {
  getImage
}
