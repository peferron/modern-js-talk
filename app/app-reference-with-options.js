// Asynchronously calls callback with an array of lovely days.
function getLovelyDays(options, callback) {
  options = options || {};
  options.maxHumidity = options.maxHumidity || 90;
  options.minTemperature = options.minTemperature || 80;
  callback = callback || options;

  var request = new XMLHttpRequest();
  request.open('GET', 'sf-forecast.json', true);

  request.addEventListener('load', function() {
    var forecasts = JSON.parse(request.responseText);
    var lovelyDays = [];
    for (var i = 0; i < forecasts.count; i++) {
      var forecast = forecasts[i];
      if (forecast.humidity <= maxHumidity &&
        forecast.temperature >= minTemperature) {
        lovelyDays.push(forecast.day);
      }
    }
    callback(lovelyDays);
  });

  request.send();
}

// Called on button click.
function showLovelyDays() {
  getLovelyDays({maxHumidity: 95}, function(lovelyDays) {
    var html = '';
    for (var i = 0; i < lovelyDays.length; i++) {
      html += '<li>' + lovelyDays[i] + '</li>';
    }
    document.getElementById('lovely-days').innerHTML = html;
  });
}
