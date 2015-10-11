async function logConvivaSource() {
  try {
    var response = await fetch('http://www.conviva.com');
    var text = await response.text();
    console.log(text);
  } catch (err) {
    console.err(err);
  }
}
