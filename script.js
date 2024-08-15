const apiKey = 'YOUR_API_KEY';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', fetchWeather);

function fetchWeather() {
    const cityName = cityInput.value.trim();
    if (cityName !== '') {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error('Error fetching the weather data:', error));
    }
}

function displayWeather(data) {
    if (data.cod === 200) {
        const cityName = data.name;
        const temperature = `${data.main.temp} °C`;
        const weatherDescription = data.weather[0].description;
        const humidity = `Humidity: ${data.main.humidity}%`;
        const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById('city-name').textContent = cityName;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('weather-description').textContent = weatherDescription;
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('wind-speed').textContent = windSpeed;

        weatherInfo.style.display = 'block';
    } else {
        alert('City not found! Please try again.');
    }
}
