

// var requestURL = "api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=321209c45c35994e21682f6d537953e7";

var cityName = document.getElementById("city");

console.log(cityName);

function weatherSearch(cityName, requestURL) {
    fetch(requestURL)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
    })
    
}

