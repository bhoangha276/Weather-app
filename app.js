async function callAPI() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");

  const jsonResponse = await response.json();
  console.log('vao 1', jsonResponse);
}

callAPI();
