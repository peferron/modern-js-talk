fetch('http://www.conviva.com')
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(err => console.err(err));
