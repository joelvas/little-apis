const express = require('express')
require('dotenv').config()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { engine } = require('express-handlebars')

const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use(express.static('public'))
app.use(cors())
app.use(fileUpload({ useTempFiles: true }))
app.use('/images', require('./routes/images'))
app.use('/weathers', require('./routes/weathers'))
app.use('/google', require('./routes/google'))

app.listen(process.env.PORT, () => {
  console.log('Server on port 8000')
})
