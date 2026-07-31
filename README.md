# 🌦️ Weather - Smart Weather Application

Weather website/App is a modern and interactive weather application that provides real-time weather information with a beautiful and user-friendly interface. The application uses weather APIs to fetch live weather data and presents it with dynamic backgrounds, forecasts, air quality information, weather insights, and smart recommendations.

The goal of this project is to create a complete weather assistant experience rather than just displaying temperature.

---

## 🚀 Features

### 🌍 Real-Time Weather Updates

* Search weather by city name
* Get current temperature and weather conditions
* Displays:

  * Temperature
  * Feels Like temperature
  * Humidity
  * Wind speed
  * Pressure
  * Visibility
  * Sunrise & Sunset timing

---

### 📍 Current Location Weather

* Uses browser geolocation
* Automatically fetches weather based on user's location

---

### 🌤️ Dynamic Weather Interface

The background changes according to weather conditions:

* ☀️ Clear Sky
* ☁️ Cloudy
* 🌧️ Rain
* ❄️ Snow
* ⚡ Thunderstorm

---

### ⏰ Live Date & Time

* Real-time clock display
* Automatically updates every second

---

### 📊 Weather Analytics Dashboard

Interactive charts using Chart.js:

* Temperature comparison
* Humidity level
* Wind analysis
* Pressure information

---

### 🌧️ Forecast System

#### Hourly Forecast

* Displays upcoming weather forecast
* Shows:

  * Time
  * Temperature
  * Weather icon

#### 5-Day Forecast

* Provides future weather predictions
* Daily weather summary

---

### 🌫️ Air Quality Monitoring

Displays:

* AQI value
* Air quality status

Categories:

* Good
* Fair
* Moderate
* Poor
* Very Poor

---

### 🧠 Smart Weather Intelligence

WeatherSphere AI provides intelligent suggestions:

👕 Outfit Recommendation

* Suggests clothing according to temperature

💧 Hydration Reminder

* Provides water intake reminders during hot weather

✈️ Travel Advice

* Gives travel suggestions based on weather conditions

😊 Comfort Score

* Calculates weather comfort level based on temperature and humidity

---

### 💡 Dynamic Weather Facts

The app provides weather-based facts:

☀️ Sunny → Heat facts
🌧️ Rain → Rain facts
❄️ Snow → Snow facts
⚡ Thunderstorm → Lightning facts

Facts automatically change according to current weather conditions.

---

### 🎤 Voice Search

* Search cities using voice commands
* Uses Web Speech API

---

### ⭐ Favorite Cities

* Save frequently searched cities
* Store favorites using LocalStorage

---

### 🔎 Recent Searches

* Maintains recent searched cities
* Allows quick access

---

### 🌓 Dark Mode

* User-friendly dark theme
* Theme preference saved using LocalStorage

---

### 📤 Share Weather

* Share current weather details using device sharing feature

---

### 🌎 Weather Comparison

Compare weather between different cities:

* Temperature
* Weather condition

---

### 🗺️ Interactive Weather Map

Using Leaflet.js:

* Displays city location
* Shows weather location on map

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## APIs & Libraries

* OpenWeather API
* Chart.js
* Leaflet.js
* Font Awesome Icons

## Browser APIs

* Geolocation API
* Web Speech Recognition API
* Web Share API

## Storage

* LocalStorage

---

# 📂 Project Structure

```
WeatherSphere-AI/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── sunny.jpg
│   ├── cloudy.jpg
│   ├── rain.jpg
│   ├── snow.jpg
│   └── thunder.jpg
│
└── README.md
```

---

# ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/KavitaGoswami-27/Task5-Weather-App.git
```

### 2. Open Project Folder

```bash
cd Task5-Weather-App
```

### 3. Add API Key

Open:

```
script.js
```

Add your OpenWeather API key:

```javascript
const API_KEY = "c0f2c18b6004cc4d1cf115e6e5935741";
```

---

### 4. Run Project

Open:

```
index.html
```

in your browser.

Or use VS Code Live Server.

---

# 🔑 API Used

## OpenWeather API

Provides:

* Current weather data
* Forecast information
* Air quality data

Website:
https://openweathermap.org/

---

# 🎯 Future Improvements

* AI-based weather predictions
* Weather notifications
* PWA mobile application support
* Weather radar integration
* Multiple language support
* Backend security for API key protection

---

# 📸 Screenshots
<img width="1882" height="930" alt="image" src="https://github.com/user-attachments/assets/db0e237f-edbf-423a-838b-7103bf4e4b60" />


---

# 👩‍💻 Developer

**Kavita Goswami**

B.Tech Computer Science Engineering

Skills:

* Web Development
* JavaScript
* Python
* Data Structures
* Database Management

---

# ⭐ Project Purpose

Weather website/app was developed as a portfolio project to demonstrate frontend development skills, API integration, responsive UI design, and creating intelligent user experiences.

---

⭐ If you like this project, consider giving it a star!
