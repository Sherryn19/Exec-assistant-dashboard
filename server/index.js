const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend from the client folder
app.use(express.static(path.join(__dirname, '../client')));

// Weather API route
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.json({ error: "City not found" });
    }

    res.json({
      weather: data.weather[0].main,
      temp: data.main.temp,
    });
  } catch (error) {
    res.json({ error: "Failed to fetch weather data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
