const axios = require('axios');

const get = async (req, res) => {
  const { woeid } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}`);
  const forecast = [...response.data.consolidated_weather].map((item) => {
    const fc = {
      state_abbr: item.weather_state_abbr,
      the_temp: Math.floor(item.the_temp),
      min_temp: Math.floor(item.min_temp),
      max_temp: Math.floor(item.max_temp),
      state_weather: item.weather_state_name,
      date: item.applicable_date,
    }
    return fc
  })
  const weather = {
    title: response.data.title,
    forecast: forecast,
  };
  res.json(weather);
}

const searchCountry = async (req, res) => {
  const { query } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
  res.json(response.data);
}

module.exports = { get, searchCountry }