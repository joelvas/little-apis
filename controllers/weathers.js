const axios = require('axios');

const get = async (req, res) => {
  const { woeid } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}`);
  const forecast = response.data.consolidated_weather.map((item) => {
    const f = {
      state_abbr: item.weather_state_abbr,
      temperature: Math.floor(item.the_temp),
      state_weather: item.weather_state_name,
      date: item.applicable_date,
    }
    return f
  })
  const weather = {
    title: response.data.title,
    forecast,
  };
  res.json(weather.data);
}

const searchCountry = async (req, res) => {
  const { query } = req.params;
  const response = await axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
  res.json(response.data);
}

module.exports = { get, searchCountry }