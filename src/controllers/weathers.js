const axios = require('axios');

const get = async (req, res) => {
  const { woeid } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}`);

  const weather = {
    title: response.data.title,
    woeid: response.data.woeid,
    latt_long: response.data.latt_long,
    forecast: response.data.consolidated_weather,
  };
  res.json(weather);
}

const searchCountry = async (req, res) => {
  const { query } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
  res.json(response.data);
}

module.exports = { get, searchCountry }