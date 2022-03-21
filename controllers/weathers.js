const axios = require('axios');

const get = async (req, res) => {
  const { woeid } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}`);
  res.json(response.data);
}

const searchCountry = async (req, res) => {
  const { query } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
  res.json(response.data);
}

module.exports = { get, searchCountry }