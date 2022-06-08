const express = require('express')
require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()

app.use(cors())
app.use(fileUpload({ useTempFiles: true }))
app.use('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello User' })
})
app.use('/images', require('./routes/images'))
app.use('/weathers', require('./routes/weathers'))
app.use('/googles', require('./routes/googles'))

app.listen(process.env.PORT, () => {
  console.log('Server on port 8000')
})
