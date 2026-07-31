const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const locationBtn = document.getElementById("locationBtn");

const loader = document.getElementById("loader");

const cityName = document.getElementById("cityName");

const currentDate = document.getElementById("currentDate");

const weatherIcon = document.getElementById("weatherIcon");

const temperature = document.getElementById("temperature");

const condition = document.getElementById("condition");

const feelsLike = document.getElementById("feelsLike");

const maxTemp = document.getElementById("maxTemp");

const minTemp = document.getElementById("minTemp");

const humidity = document.getElementById("humidity");

const visibility = document.getElementById("visibility");

const windSpeed = document.getElementById("windSpeed");

const pressure = document.getElementById("pressure");

const sunrise = document.getElementById("sunrise");

const sunset = document.getElementById("sunset");


function showLoader(){

    loader.classList.remove("hide");

}

function hideLoader(){

    loader.classList.add("hide");

}

function getFormattedDate(){

    const today = new Date();

    return today.toLocaleDateString("en-US",{

        weekday:"long",

        day:"numeric",

        month:"long",

        year:"numeric"

    });

}

function formatTime(unix){

    const date = new Date(unix * 1000);

    return date.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });

}

async function getWeather(city){

    showLoader();

    try{

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if(!response.ok){

            throw new Error("City not found");

        }

        const data = await response.json();

        updateWeatherUI(data);

    }

    catch(error){

        alert(error.message);

    }

    finally{

        hideLoader();

    }

}

function updateWeatherUI(data){

    cityName.textContent =
    `${data.name}, ${data.sys.country}`;

    currentDate.textContent =
    getFormattedDate();

    temperature.textContent =
    `${Math.round(data.main.temp)}°C`;

    feelsLike.textContent =
    `Feels Like ${Math.round(data.main.feels_like)}°C`;

    condition.textContent =
    data.weather[0].description;

    updateWeatherFact(data.weather[0].main);
    updateBackground(data.weather[0].main);

function updateClock(){

    const now = new Date();

    currentDate.textContent =
    now.toLocaleString("en-US",{

        weekday:"long",

        day:"numeric",

        month:"long",

        year:"numeric",

        hour:"2-digit",

        minute:"2-digit"

    });

}

setInterval(updateClock,1000);

updateClock();

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

const voiceBtn=document.getElementById("voiceBtn");

const SpeechRecognition=

window.SpeechRecognition||

window.webkitSpeechRecognition;



if(SpeechRecognition){

    const recognition=new SpeechRecognition();

    recognition.lang="en-US";

    recognition.interimResults=false;

    voiceBtn.addEventListener("click",()=>{

        recognition.start();

    });

    recognition.onresult=(event)=>{

        const city=

        event.results[0][0].transcript;

        cityInput.value=city;

        getWeather(city);

    };

}
else{

    voiceBtn.style.display="none";

}
    maxTemp.textContent =
    `${Math.round(data.main.temp_max)}°C`;

    minTemp.textContent =
    `${Math.round(data.main.temp_min)}°C`;

    humidity.textContent =
    `${data.main.humidity}%`;

    visibility.textContent =
    `${(data.visibility/1000).toFixed(1)} km`;

    windSpeed.textContent =
    `${data.wind.speed} m/s`;

    pressure.textContent =
    `${data.main.pressure} hPa`;

    sunrise.textContent =
    formatTime(data.sys.sunrise);

    sunset.textContent =
    formatTime(data.sys.sunset);

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    createCharts(data);

    getHourlyForecast(data.coord.lat, data.coord.lon);

    getAirQuality(data.coord.lat, data.coord.lon);

    updateMap(
    data.coord.lat,
    data.coord.lon,
    data.name
);

addRecent(data.name);

updateComfortScore(

    data.main.temp,

    data.main.humidity

);

outfitSuggestion(

    data.main.temp

);

hydrationReminder(

    data.main.temp

);

travelAdvice(

    data.weather[0].main

);
}

searchBtn.addEventListener("click",()=>{

    const city = cityInput.value.trim();

    if(city===""){

        alert("Please enter a city.");

        return;

    }

    getWeather(city);

});

cityInput.addEventListener("keypress",(event)=>{

    if(event.key==="Enter"){

        searchBtn.click();

    }

});

window.addEventListener("load",()=>{

    getWeather("Dehradun");

});


locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported.");

        return;

    }

    showLoader();

    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const lat = position.coords.latitude;

            const lon = position.coords.longitude;

            try {

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
                );

                const data = await response.json();

                updateWeatherUI(data);
                getHourlyForecast(lat, lon);

            } catch (error) {

                alert("Unable to fetch location weather.");

            }

            hideLoader();

        },

        () => {

            hideLoader();

            alert("Location permission denied.");

        }

    );

});


function updateBackground(weather){

    const condition = weather.toLowerCase();

    if(condition.includes("clear")){

        document.body.style.background =
        "linear-gradient(135deg,#38bdf8,#2563eb,#0f172a)";

    }

    else if(condition.includes("cloud")){

        document.body.style.background =
        "linear-gradient(135deg,#64748b,#475569,#1e293b)";

    }

    else if(condition.includes("rain")){

        document.body.style.background =
        "linear-gradient(135deg,#0f172a,#1d4ed8,#0f766e)";

    }

    else if(condition.includes("snow")){

        document.body.style.background =
        "linear-gradient(135deg,#f8fafc,#cbd5e1,#94a3b8)";

        document.body.style.color="black";

    }

    else if(condition.includes("thunder")){

        document.body.style.background =
        "linear-gradient(135deg,#111827,#312e81,#000000)";

    }

}

async function getHourlyForecast(lat, lon){

    try{

        const response = await fetch(

            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

        );

        const data = await response.json();

        displayHourlyForecast(data.list);
displayWeeklyForecast(data.list);

    }

    catch(error){

        console.log(error);

    }

}


function displayHourlyForecast(list){

    const container = document.getElementById("hourlyForecast");

    container.innerHTML = "";

    list.slice(0,8).forEach(item=>{

        const time = new Date(item.dt * 1000);

        const hour = time.toLocaleTimeString([],{

            hour:"numeric"

        });

        container.innerHTML += `

        <div class="hour-card glass">

            <p>${hour}</p>

            <img
            src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">

            <h3>${Math.round(item.main.temp)}°C</h3>

        </div>

        `;

    });

}

function displayWeeklyForecast(list){

    const container = document.getElementById("weeklyForecast");

    container.innerHTML = "";

    const dailyForecast = [];

    for(let i = 0; i < list.length; i += 8){

        dailyForecast.push(list[i]);

    }

    dailyForecast.slice(0,5).forEach(day=>{

        const date = new Date(day.dt * 1000);

        const dayName = date.toLocaleDateString("en-US",{
            weekday:"long"
        });

        container.innerHTML += `

        <div class="forecast-card glass">

            <h3>${dayName}</h3>

            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

            <p>${day.weather[0].main}</p>

            <h4>${Math.round(day.main.temp)}°C</h4>

        </div>

        `;

    });

}


async function getAirQuality(lat, lon){

    try{

        const response = await fetch(

        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`

        );

        const data = await response.json();

        const aqi = data.list[0].main.aqi;

        const aqiValue = document.getElementById("aqiValue");

        const aqiStatus = document.getElementById("aqiStatus");

        const aqiCircle = document.querySelector(".aqi-circle");

        const levels = {

            1:{
                text:"Good 😊",
                color:"#22C55E"
            },

            2:{
                text:"Fair 🙂",
                color:"#84CC16"
            },

            3:{
                text:"Moderate 😐",
                color:"#FACC15"
            },

            4:{
                text:"Poor 😷",
                color:"#F97316"
            },

            5:{
                text:"Very Poor ☠",
                color:"#EF4444"
            }

        };

        aqiValue.textContent = aqi;

        aqiStatus.textContent = levels[aqi].text;

        aqiCircle.style.background = levels[aqi].color;

    }

    catch(error){

        console.log(error);

    }

}


document.getElementById("uvIndex").textContent = "--";

let temperatureChart;
let humidityChart;
let windChart;
let pressureChart;



function createCharts(data){

    const labels = [
        "Current",
        "Min",
        "Max"
    ];

    if(temperatureChart){

        temperatureChart.destroy();

    }

    temperatureChart = new Chart(

        document.getElementById("temperatureChart"),

        {

            type:"line",

            data:{

                labels:labels,

                datasets:[{

                    label:"Temperature °C",

                    data:[

                        data.main.temp,

                        data.main.temp_min,

                        data.main.temp_max

                    ],

                    borderWidth:3,

                    tension:.4,

                    fill:false

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

    if(humidityChart){

        humidityChart.destroy();

    }

    humidityChart = new Chart(

        document.getElementById("humidityChart"),

        {

            type:"bar",

            data:{

                labels:["Humidity"],

                datasets:[{

                    data:[data.main.humidity]

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );


    if(windChart){

        windChart.destroy();

    }

    windChart = new Chart(

        document.getElementById("windChart"),

        {

            type:"radar",

            data:{

                labels:["Wind"],

                datasets:[{

                    data:[data.wind.speed]

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

    if(pressureChart){

        pressureChart.destroy();

    }

    pressureChart = new Chart(

        document.getElementById("pressureChart"),

        {

            type:"doughnut",

            data:{

                labels:["Pressure"],

                datasets:[{

                    data:[

                        data.main.pressure,

                        1100-data.main.pressure

                    ]

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

}

let map;
let marker;

function initializeMap(lat = 28.6139, lon = 77.2090){

    if(map){

        map.remove();

    }

    map = L.map("map").setView([lat, lon], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{

        attribution:"© OpenStreetMap"

    }).addTo(map);

    marker = L.marker([lat, lon]).addTo(map);

}


function updateMap(lat, lon, city){

    if(!map){

        initializeMap(lat, lon);

        return;

    }

    map.setView([lat, lon], 10);

    marker.setLatLng([lat, lon]);

    marker.bindPopup(city).openPopup();

}


let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

function saveFavorite(city){

    if(!favorites.includes(city)){

        favorites.push(city);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        renderFavorites();

    }

}


function renderFavorites(){

    const container =
    document.getElementById("favoriteCities");

    container.innerHTML = "";

    favorites.forEach(city=>{

        container.innerHTML += `

        <div class="favorite-card glass">

            <i class="fa-solid fa-star"></i>

            <h3>${city}</h3>

            <button
            onclick="getWeather('${city}')">

            View

            </button>

        </div>

        `;

    });

}


let recent =
JSON.parse(localStorage.getItem("recent")) || [];

function addRecent(city){

    recent = recent.filter(c=>c!==city);

    recent.unshift(city);

    if(recent.length>5){

        recent.pop();

    }

    localStorage.setItem(

        "recent",

        JSON.stringify(recent)

    );

    renderRecent();

}


function renderRecent(){

    const container =
    document.getElementById("recentSearches");

    container.innerHTML = "";

    recent.forEach(city=>{

        container.innerHTML += `

        <button
        class="recent-btn"
        onclick="getWeather('${city}')">

        ${city}

        </button>

        `;

    });

}


window.addEventListener("load",()=>{

    initializeMap();

    renderFavorites();

    renderRecent();

});

const favoriteBtn = document.getElementById("favoriteBtn");

if (favoriteBtn) {

    favoriteBtn.addEventListener("click", () => {

        saveFavorite(cityName.textContent.split(",")[0]);

    });

}

const theme = localStorage.getItem("theme");

if(theme==="dark"){

    document.body.classList.add("dark");

}

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

        }

        else{

            localStorage.setItem("theme","light");

        }

    });

}


const facts=[

"Lightning is five times hotter than the Sun's surface.",

"The highest temperature ever recorded on Earth was 56.7°C.",

"The coldest temperature recorded was −89.2°C.",

"Clouds can weigh millions of kilograms.",

"Raindrops are not tear-shaped—they're round.",

"Wind has no color but shapes our climate.",

"Snow is actually transparent.",

"Thunder is caused by rapidly expanding air."

];

const factElement=document.getElementById("weatherFact");
const weatherFacts = {
    Clear: [
        "☀️ The Sun provides energy that powers almost all life on Earth.",
        "🌡️ Heat waves are periods of unusually high temperatures lasting several days.",
        "☀️ The Earth's surface absorbs sunlight and converts it into heat."
    ],

    Rain: [
        "🌧️ Rain helps maintain Earth's water cycle.",
        "☔ A single thunderstorm can release millions of raindrops.",
        "🌧️ Rainwater helps plants grow and replenishes rivers and lakes."
    ],

    Snow: [
        "❄️ Snow acts like a natural blanket that helps protect the ground from extreme cold.",
        "⛄ Every snowflake has a unique crystal structure.",
        "❄️ Snow forms when water vapor freezes into ice crystals."
    ],

    Thunderstorm: [
        "⚡ Lightning can heat the air around it extremely quickly.",
        "🌩️ Thunder is created when lightning rapidly expands the surrounding air.",
        "⚡ A thunderstorm contains powerful electrical energy."
    ],

    Clouds: [
        "☁️ Clouds are made of tiny water droplets or ice crystals.",
        "☁️ Some clouds can travel thousands of kilometers with wind."
    ]
};
if(factElement){

    factElement.textContent=

    facts[Math.floor(Math.random()*facts.length)];

}


function updateComfortScore(temp,humidity){

    let score=100;

    if(temp>35) score-=25;

    if(temp<5) score-=20;

    if(humidity>80) score-=20;

    if(humidity<25) score-=15;

    const element=document.getElementById("comfortScore");

    if(element){

        element.textContent=score+"/100";

    }

}

function outfitSuggestion(temp){

    let text="";

    if(temp<10){

        text="🧥 Wear a heavy jacket.";

    }

    else if(temp<20){

        text="🧥 Light jacket recommended.";

    }

    else if(temp<30){

        text="👕 T-shirt is perfect.";

    }

    else{

        text="🩳 Wear light cotton clothes.";

    }

    const box=document.getElementById("outfitSuggestion");

    if(box){

        box.textContent=text;

    }

}

function hydrationReminder(temp){

    let msg="Drink water regularly.";

    if(temp>35){

        msg="💧 Very hot today! Drink 3-4 liters of water.";

    }

    else if(temp>30){

        msg="💧 Stay hydrated. Drink at least 3 liters.";

    }

    const box=document.getElementById("hydration");

    if(box){

        box.textContent=msg;

    }

}


function travelAdvice(weather){

    let advice="";

    weather=weather.toLowerCase();

    if(weather.includes("rain")){

        advice="🌧 Carry an umbrella.";

    }

    else if(weather.includes("snow")){

        advice="❄ Drive carefully.";

    }

    else if(weather.includes("clear")){

        advice="☀ Perfect day for travelling.";

    }

    else{

        advice="🌤 Enjoy your day.";

    }

    const box=document.getElementById("travelAdvice");

    if(box){

        box.textContent=advice;

    }

}

async function shareWeather(){

    if(!navigator.share){

        alert("Sharing not supported.");

        return;

    }

    await navigator.share({

        title:"WeatherSphere AI",

        text:

        cityName.textContent+

        " "+temperature.textContent+

        " "+condition.textContent

    });

}

const shareBtn=document.getElementById("shareBtn");

if(shareBtn){

    shareBtn.addEventListener("click",shareWeather);

}


const compareBtn = document.getElementById("compareBtn");

if(compareBtn){

    compareBtn.addEventListener("click", async () => {

        const city = document.getElementById("compareCity").value;

        if(city === ""){
            alert("Enter city name");
            return;
        }

        try {

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            const data = await response.json();

            console.log(data);

            document.getElementById("comparisonResult").innerHTML = `
                <h2>${data.name}</h2>
                <h3>${data.main.temp}°C</h3>
                <p>${data.weather[0].description}</p>
            `;

        } catch(error){
            console.log(error);
            alert("Unable to fetch weather");
        }

    });

}
function updateWeatherFact(condition) {

    let facts = weatherFacts[condition] || weatherFacts["Clouds"];

    let randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("weatherFact").innerHTML = randomFact;
}