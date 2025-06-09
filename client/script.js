async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const response = await fetch(`http://localhost:3000/api/weather/${city}`);
  const data = await response.json();

  if (data.main) {
    document.getElementById('weatherResult').innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>${data.weather[0].description}</p>
      <p>Temp: ${data.main.temp} °C</p>
    `;
  } else {
    document.getElementById('weatherResult').innerText = 'Weather not found.';
  }
}
