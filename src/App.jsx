import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/SearchBar';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [cityDetails, setCityDetails] = useState(() => JSON.parse(localStorage.getItem('lastCity')) || { name: 'London', country: 'GB' });
  const [weatherData, setWeatherData] = useState(() => JSON.parse(localStorage.getItem('lastWeather')) || null);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      setError(null);
      // 1. Geocoding
      const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
      
      if (!geoRes.data.results) throw new Error("City not found");
      const { latitude, longitude, name, country_code } = geoRes.data.results[0];
      const newCity = { name, country: country_code };

      // 2. Weather Fetch (Temperature, Hourly, and 7-Day)
      const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`);

      setCityDetails(newCity);
      setWeatherData(res.data);

      // Cache data
      localStorage.setItem('lastCity', JSON.stringify(newCity));
      localStorage.setItem('lastWeather', JSON.stringify(res.data));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather(cityDetails.name);
  }, []);

  return (
    <div className="app-container">
      {/* <Search input={input} setInput={setInput} onSearch={fetchWeather} /> */}
      <Search onSearch={fetchWeather} />
      {error && <p className="error-msg">{error}</p>}
      
      {weatherData && (
        <>
          <Header city={cityDetails.name} country={cityDetails.country} />
          <CurrentWeather current={weatherData.current} daily={weatherData.daily} />
          <h3>Hourly Forecast</h3>
          <HourlyForecast hourly={weatherData.hourly} />
          <h3>7-Day Report</h3>
          <DailyForecast daily={weatherData.daily} />
        </>
      )}
    </div>
  );
}

export default App;