// Asynchronously calls callback with an array of lovely days.
function getLovelyDays(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', 'sf-forecast.json', true);

  request.addEventListener('load', function() {
    var forecasts = JSON.parse(request.responseText);
    var lovelyDays = [];
    for (var i = 0; i < forecasts.count; i++) {
      var forecast = forecasts[i];
      if (forecast.humidity <= 90) {
        lovelyDays.push(forecast.day);
      }
    }
    callback(lovelyDays);
  });

  request.send();
}

// Called on button click.
function showLovelyDays() {
  getLovelyDays(function(lovelyDays) {
    var html = '';
    for (var i = 0; i < lovelyDays.length; i++) {
      html += '<li>' + lovelyDays[i] + '</li>';
    }
    document.getElementById('lovely-days').innerHTML = html;
  });
}
