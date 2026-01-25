import { getMoonPhase } from "../utils/moonPhase";
export default function CurrentWeather({ current, daily }) {
  const moon = getMoonPhase();
  return (
    <div className="current-card">
      <div className="main-temp">
        <h2>{Math.round(current.temperature_2m)}°C</h2>
        <p>Feels like {Math.round(current.apparent_temperature)}°C</p>
      </div>
      <div className="moon-middle-section">
        <span className="moon-hero-icon">{moon.icon}</span>
        <p className="moon-phase-name">{moon.name}</p>
      </div>
      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-icon">🌬️</span>
          <div className="stat-content">
            <small>Wind</small>
            <strong>{current.wind_speed_10m} km/h</strong>
          </div>
        </div>

        <div className="stat-box">
          <span className="stat-icon">🌅</span>
          <div className="stat-content">
            <small>Sunrise</small>
            <strong>{daily.sunrise[0].split('T')[1]}</strong>
          </div>
        </div>

        <div className="stat-box">
          <span className="stat-icon">🌇</span>
          <div className="stat-content">
            <small>Sunset</small>
            <strong>{daily.sunset[0].split('T')[1]}</strong>
          </div>
        </div>
        </div>
    </div>
  );
}
