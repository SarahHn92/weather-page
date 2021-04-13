var storedCities = [];
// var UVIURL = "https://api.openweathermap.org/data/2.5/uvi?lat=${cityLat}&lon=${cityLong}&appid=321209c45c35994e21682f6d537953e7"
var searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click", searchCity)

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that

function searchCity(e) {
    e.preventDefault()
    var cityInput = document.querySelector("#city").value;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=metric&appid=321209c45c35994e21682f6d537953e7";
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=321209c45c35994e21682f6d537953e7";
    fetch(forecastURL)
    .then(function (response) {
        if (response.ok) { // Only do everything if the city name is valid and the fetch worked
            return response.json()
        } else {
            // Do nothing because url is invalid or didn't work for some reason
        }
    })
    .then(function (JSONResponse) {
        console.log("json", JSONResponse)
        saveCities(cityInput);
        displayCityWeather(JSONResponse);
        return JSONResponse;
    })
//  TODO: make the fetches seperate functions then call those functions
//  inside searchCity
    fetch(requestURL)
    .then (function(response) {
        if (response.ok) {
            return response.json()
        } else {
        }
    })
    .then (function(JSONResponse) {
        console.log("json", JSONResponse);
        displayCityWeather(JSONResponse);
        return JSONResponse;
    })
  }
  
// city is added to the search history
// save input data to array in local storage "search history"  

function saveCities(cityInput) {
    storedCities.push(cityInput);
    console.log(storedCities);
    localStorage.setItem("searchHistory", JSON.stringify(storedCities));
}

// display current: city name, date, current weather icon, temp, humidity, wind speed, UV index
// do this by getting the info from the api json and using element.innerHTML

function displayCityWeather(cityWeather) {
    console.log("City weather: ", cityWeather)
    displayCurrentWeather(cityWeather);
    displayFutureWeather(cityWeather);
}

function displayCurrentWeather(cityWeather) {
    const currentWeather = cityWeather.list[2]; // Seems to always be the time closest to current time
// to use requestURL to get current weather data
}

function displayFutureWeather(cityWeather) {
    const $fiveDayForecast = $("#fiveDayForecast")
    $("#fiveDayForecast").empty();

     let tableHeader = (
        `<table>
            <tr>
                <th>Date</th>
                <th>Icon</th>
                <th>Temperature</th>
                <th>Wind Speed</th>
                <th>Humidity</th>
            </tr>`
    )

    const totalDays = 5;
    const recordingsPerDay = 8;

    for (var day = 0; day < totalDays; day++) { // 5 days
        var index = day * recordingsPerDay; // current array index that we're up to
        var weatherRecord = cityWeather.list[index];

        var date = weatherRecord.dt_txt;
        var icon = weatherRecord.weather[0].icon;
        var temperature = weatherRecord.main.temp + "degrees C";
        var windSpeed = weatherRecord.wind.speed + "km/hr";
        var humidity = weatherRecord.main.humidity + "% RH";

        tableHeader += 
            `<tr>
                <td>${date}</td>
                <td><img src="http://openweathermap.org/img/w/${icon}.png"></td>
                
                <td>${temperature}</td>
                
                <td>${windSpeed}</td>
                
                <td>${humidity}</td>
            </tr>`
        
    }

    tableHeader += `</table>`
    
    $("#fiveDayForecast").append( 
        tableHeader
    )
}

// 

// input data to search for city weather through api and return 

// current: city name, date, current weather icon, temp, humidity, wind speed, UV index

// UV index needs to change colour for favourable, moderate or severe

// 5 day forecast to load with all of the above info

// make buttons for previous searches
function prevCitySearch(storedCities) {
    // let prevCityBtn = document.createElement()
    // if ()
}

// append local storage data to buttons

// buttons to reload previous city data






var cityEl = document.querySelector(".savedCities");
// console.log(cityInput);



function createSavedCities() {
    for (var i = 0; i < storedCities.length; i++) {
        prevCityBtn.innerHTML(storedCities[i]);
        cityEl.appendChild(prevCityBtn);
    }
}

function populate() {
    var prevCities = JSON.parse(localStorage.getItem("cities"));
    if (prevCities !== null) {
        storedCities = prevCities;
    }

    createSavedCities();

    if (storedCities !== null) {
        var currentCity = storedCities[storedCities.length -1]
        getWeather(currentCity, requestURL);
        getNext5Days(currentCity, requestURL);
    }
}








// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);

// var element = document.getElementById("div1");
// element.appendChild(para);

