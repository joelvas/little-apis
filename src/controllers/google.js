const { getImageFromGoogle } = require('../helpers/scraping')

const getImage = async (req, res) => {
  const query = req.query.query
  if (!query) {
    return res.status(400).json({ msg: 'Please provide a query' })
  }
  const link = await getImageFromGoogle(req.query.query)
  res.render('index', { link })
}
module.exports = {
  getImage
}
