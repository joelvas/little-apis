const axios = require('axios');

const searchCountry = async (req, res) => {
  const { query } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
  res.send(response.data);
}


module.exports = { searchCountry }