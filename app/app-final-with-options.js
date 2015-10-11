// Returns an array of lovely days.
async function getLovelyDays({maxHumidity = 90, minTemperature = 80} = {}) {
  var response = await fetch('sf-forecast.json');
  var forecasts = await response.json();
  return forecasts
    .filter(forecast => forecast.humidity <= maxHumidity &&
      forecast.temperature >= minTemperature)
    .map(forecast => forecast.day);
}

// Called on button click.
async function showLovelyDays() {
  var lovelyDays = await getLovelyDays({maxHumidity: 95});
  var html = lovelyDays.map(day => `<li>${day}</li>`).join('');
  document.getElementById('lovely-days').innerHTML = html;
}
