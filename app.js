const $search = document.querySelector('.search');
const $city = document.querySelector('.city');
const $country = document.querySelector('.country');
const $temp = document.querySelector('.temp');
const $status = document.querySelector('.status');
const $vision = document.querySelector('.vision span');
const $wind = document.querySelector('.wind span');
const $humidity = document.querySelector('.humidity span');
const $time = document.querySelector('.date-time');
const $content = document.querySelector('.content');

let apiKey = 'd2b5366adef8fe3416fa9347842d3831';
let units = 'metric';// don vi do nhiet do
let lang = 'vi';

async function changeWeather() {
  let city = $search.value.trim();
  $search.value = '';

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=vi`;
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);

  if(data.cod == 200) {
    $content.classList.remove('hide');

    $city.innerText = data.name;
    $country.innerText = data.sys.country;
    $temp.innerText = data.main.temp.toFixed(0); // lam tron chu so
    $status.innerText = data.weather[0].description;
    $vision.innerText = data.visibility/1000 + 'm';
    $wind.innerText = data.wind.speed + 'm/s';
    $humidity.innerText = data.main.humidity + '%';
    $time.innerText = new Date().toLocaleString('vi');
  }
  else {
    $content.classList.add('hide');
  }
}
changeWeather();

$search.addEventListener('keypress', function(e) {
  if(e.code === 'Enter') {
    changeWeather();
  }
})