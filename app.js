const express = require('express');
require('dotenv').config();
const cors = require('cors');
const fileUpload = require("express-fileupload");

const weathers = require('./routes/weathers');
const cryptos = require('./routes/cryptos');
const images = require('./routes/images');

const app = express();

app.use(cors());
app.use(fileUpload({ useTempFiles: true }))
app.use('/cryptos', cryptos);
app.use('/images', images);
app.use('/weathers', weathers);

app.listen(process.env.PORT, () => {
  console.log('Server on port 8000');
})