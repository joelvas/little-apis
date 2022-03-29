const axios = require('axios')
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'jsonvas',
  api_key: '174897814896944',
  api_secret: '_FvzfmSj8BiluWcy2fM0_6Yqqj4',
  secure: true
});
const get = async (req, res) => {
  res.json({ text: 'hehe' })
}
const post = async (req, res) => {
  const image = req.files.image
  await cloudinary.uploader.upload(image.tempFilePath, { folder: 'image-uploader' }, (err, result) => {
    res.json({
      success: true,
      result,
      err
    })
  })
}
module.exports = { get, post }