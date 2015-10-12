// Returns an array of lovely days.
async function getLovelyDays() {
  var forecasts = await response.json();
  return forecasts
    .filter(forecast => forecast.humidity <= 90)
    .map(forecast => forecast.day);
}

// Called on button click.
async function showLovelyDays() {
  var lovelyDays = await getLovelyDays();
  var html = lovelyDays.map(day => `<li>${day}</li>`).join('');
  document.getElementById('lovely-days').innerHTML = html;
}
