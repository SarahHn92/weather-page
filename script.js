var storedCities = [];
// var requestURL = "api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=321209c45c35994e21682f6d537953e7";


function saveCities() {
    localStorage.setItem("cities", JSON.stringify(storedCities));
}

var cityEl = document.querySelector(".savedCities");
console.log(cityEl);
var cityBtn = document.createElement("<button class='list-group-item list-group-item-action cityButton' data-city='{city}'>{city}</button>")
console.log(cityBtn);

function createSavedCities() {
    cityEl.empty();
    storedCities.forEach(function(city) {
        cityEl.prepend(cityBtn);
    })
}

// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);

// var element = document.getElementById("div1");
// element.appendChild(para);

