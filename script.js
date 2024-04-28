/**let weather = {
    paris: {
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        temp: -5,
        humidity: 20
    }
};
let city = prompt("Enter city").toLowerCase();

if (weather[city] !== undefined) {
    let temp = Math.floor(weather[city].temp);
    let humidity = weather[city].humidity;

    let farhenheit = Math.floor(((9 * temp) / 5) + 32);

    alert(`It is currently ${temp}°C (${farhenheit}°F) in Paris with a humidity of ${humidity}%`)
}
else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`)
}

let speeds = prompt("What unit speed?");
let units = prompt("In what unit metric or imperial?");
function isWindy(speed, unit) {
    if (speed > 5 && unit === "metric") {
        return true;
    } else {
        return false;
    }
}
if (isWindy(speeds, units)) {
    alert("It is windy");
} else {
    alert("It is not windy");
}


let now = new Date();
let month = now.getMonth();
let year = now.getFullYear();
let day = now.getDay();
let date = now.getDate();

console.log(now.toString());
console.log(now.getMilliseconds.toString());
console.log(now.getMilliseconds());
console.log(day);
console.log(year);
console.log(month);


let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(`Today is ${days[day]}, ${months[month]} ${date}, ${year}`)
function formatDate() {


    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Saturday'];
    return `Today is ${days[day]}, ${months[month]} ${date}, ${year}`;

}

console.log(formatDate(new Date()));

function Click() {
    let butt = document.querySelector("h1");
    butt.innerHTML = "18 degrees";
}
let butt = document.querySelector("h1");
butt.addEventListener("click", Click);



<script>
      function currentDate(event) {
        event.preventDefault();

        let date_time = document.querySelector("span.date");
        let input = document.querySelector(".search-input");
        let city = document.querySelector(".current-city");
        let day = new Date();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thurday",
          "Friday",
          "Saturday",
        ];

        let output = `${
          days[day.getDay()]
        } ${day.getHours()}:${day.getMinutes()}`;
        date_time.innerHTML = output;

        city.innerHTML = input.value;
      }

      let date = document.querySelector("form");
      date.addEventListener("submit", currentDate);
    </script> **/
function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;

    //weather

    let city = searchInputElement.value;

    let apiKey = "f831500415adaof5bc93fd0tde1db8d4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    function weather(response) {
        console.log(response.data);
        let current_city = response.data.city;

        let temperature = Math.round(response.data.temperature.current);

        let change_city = document.querySelector(".current-city");
        let temp = document.querySelector("span.current-temperature-value");

        change_city.innerHTML = current_city;
        temp.innerHTML = temperature;
    }
    axios.get(apiUrl).then(weather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
