const express = require('express');
require('dotenv').config();
const cors = require('cors');
const weathers = require('./routes/weathers');
const cryptos = require('./routes/cryptos');

const app = express();

app.use(cors());
app.use('/cryptos', cryptos);
app.use('/weathers', weathers);

app.listen(process.env.PORT, () => {
  console.log('Server on port 8000');
})