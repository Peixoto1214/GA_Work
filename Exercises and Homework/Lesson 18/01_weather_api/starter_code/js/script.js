
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "a1670e332108de606c9e43b6b355fd4b";
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a1670e332108de606c9e43b6b355fd4b}
async function handleWeatherRequest(e) {
  e.preventDefault()
  
  // get user input value from textbox
  const searchInput = document.querySelector('#weather-search input[type=text]').value;
  
  
  // build the url address with YOUR personal API key and the users input city
  /*

Fetch:
http://api.openweathermap.org/geo/1.0/direct?q=Great+Falls&appid=a623354e392c7c881bffd470b229a3a6&limit=1

Response:
[{"name":"Great Falls","local_names":{"ru":"Грейт-Фолс","en":"Great Falls"},"lat":47.5048851,"lon":-111.29189,"country":"US","state":"Montana"}]

Fetch:
https://api.openweathermap.org/data/2.5/weather?lat=47.5048851&lon=-111.29189&appid=a623354e392c7c881bffd470b229a3a6


Response:
{"coord":{"lon":-111.2919,"lat":47.5049},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":285.82,"feels_like":283.72,"temp_min":284.6,"temp_max":286.27,"pressure":1016,"humidity":22},"visibility":10000,"wind":{"speed":8.75,"deg":230,"gust":11.32},"clouds":{"all":0},"dt":1647556450,"sys":{"type":2,"id":2035487,"country":"US","sunrise":1647524041,"sunset":1647567179},"timezone":-21600,"id":5655240,"name":"Great Falls","cod":200}


*/
  const firstFetchURL = "http://api.openweathermap.org/geo/1.0/direct?appid=" + myApiKey + "&limit=1&q=" + searchInput;
  //const firstFetch = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + myApiKey + "&limit=1";

  
  
  // make an API call using fetch() and capture the response in a variable
  const theFirstResponse = await fetch(firstFetchURL);
 
  // convert the response to a readable json format with .json()
  const theFirstResponseJson = await theFirstResponse.json();
  
  // print your data to the console to see its format, dont forget to delete later
  console.log(theFirstResponseJson)


//if we dont get anything back
if(theFirstResponseJson.length == 0){
  return false;
}
//if there is a match

const lat = theFirstResponseJson[0].lat;
const log = theFirstResponseJson[0].lon;



const theSecondFetchURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + log + "&appid=" + myApiKey;

const theSecondResponse = await fetch(theSecondFetchURL);

const theSecondResponseJson = await theSecondResponse.json();

console.log(theSecondResponseJson)



  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
  //(K − 273.15) × 9/5 + 32 = °F.
  
  let tempListItems = " ";
  
  tempListItems += "<li>The current temperature in " + theSecondResponseJson.name + " " + KelvintoF(theSecondResponseJson.main.temp).toFixed(2) + "</li>" ;
  tempListItems += "<li>Feels Like: " + KelvintoF(theSecondResponseJson.main.feels_like).toFixed(2) + "</li>";
  tempListItems += "<li>Low Temp: " + KelvintoF(theSecondResponseJson.main.temp_min).toFixed(2) +  "</li>";
  tempListItems += "<li>High Temp " + KelvintoF(theSecondResponseJson.main.temp_max).toFixed(2) +  " </li>";

  document.querySelector('#weather-results').innerHTML = tempListItems

  
  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  
  // append icon img to dom
  
}

function KelvintoF(k){
  return ((k - 273.15) * (9/5) + 32)


}
console.log(KelvintoF(300))
// Attach an event listener to the submit button
document.querySelector('#weather-search').addEventListener('submit', handleWeatherRequest);