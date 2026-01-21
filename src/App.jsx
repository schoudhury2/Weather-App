import { useState, useEffect } from "react";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import { fetchWeather } from "./api/weatherApi";

async function fetchWeeklyForecast(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`,
  );
  return res.json();
}

export default function App() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState("C");
  const [loading, setLoading] = useState(true);

  async function search(city) {
    setLoading(true);

    try {
      const currentData = await fetchWeather(city);
      const area = currentData.nearest_area[0];
      const lat = area.latitude;
      const lon = area.longitude;

      // 🚀 Fetch both in parallel instead of sequential
      const [forecastData] = await Promise.all([fetchWeeklyForecast(lat, lon)]);

      setCurrent(currentData);
      setForecast(forecastData.daily);
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    search("Paris");
  }, []);

  return (
    <div className="app">
      {/* HEADER */}
      <Header onSearch={search} />

      {/* LOADING */}
      {loading && <Loader />}

      {/* DASHBOARD */}
      {!loading && (
        <div className="dashboard">
          {/* LEFT PANEL */}
          <div className="left-panel">
            {current && (
              <CurrentWeather data={current} unit={unit} setUnit={setUnit} />
            )}

            {/* ⬇️ Future: AirConditions, HourlyForecast */}
            {/* <AirConditions /> */}
            {/* <HourlyForecast /> */}
          </div>

          {/* RIGHT PANEL */}
          <div className="right-panel">
            {forecast && <Forecast data={forecast} unit={unit} />}
          </div>
        </div>
      )}
    </div>
  );
}
