// import "./CurrentWeather.css";
// import { getMoonPhase } from "../utils/moonPhase";
// import HourlyForecast from "./HourlyForecast";

// const toF = (c) => Math.round((c * 9) / 5 + 32);

// export default function CurrentWeather({ data, unit, setUnit }) {
//   const c = data.current_condition[0];
//   const astro = data.weather[0].astronomy[0];

//   const temp = unit === "C" ? c.temp_C : toF(c.temp_C);
//   const feels = unit === "C" ? c.FeelsLikeC : toF(c.FeelsLikeC);
//   const moon = getMoonPhase();

//   function getWeatherIcon(desc) {
//     const d = desc.toLowerCase();
//     if (d.includes("thunder")) return "⛈️";
//     if (d.includes("snow")) return "❄️";
//     if (d.includes("rain") || d.includes("drizzle")) return "🌧️";
//     if (d.includes("cloud")) return "☁️";
//     if (d.includes("fog") || d.includes("mist")) return "🌫️";
//     if (d.includes("sun") || d.includes("clear")) return "☀️";
//     return "🌤️";
//   }

//   return (
//     <div className="current-card">
//       {/* Header */}
//       <div className="card-header">
//         <span>Current Weather</span>

//         {/* °C / °F Toggle */}
//         <div
//           className={`unit-toggle ${unit === "F" ? "right" : ""}`}
//           onClick={() => setUnit(unit === "C" ? "F" : "C")}
//         >
//           <span className="toggle-option">°C</span>
//           <span className="toggle-option">°F</span>
//           <div className="toggle-slider" />
//         </div>
//       </div>

//       {/* Body */}
//       <div className="card-body">
//         {/* LEFT */}
//         <div className="left">
//           <h2>{data.nearest_area[0].areaName[0].value}</h2>

//           <div className="temp-row">
//             <span className="weather-icon">
//               {getWeatherIcon(c.weatherDesc[0].value)}
//             </span>
//             <span className="temp">{temp}°</span>
//           </div>

//           <p className="desc">{c.weatherDesc[0].value}</p>
//         </div>

//         {/* MIDDLE : MOON */}
//         <div className="moon">
//           <div className="moon-icon">{moon.icon}</div>
//           <div className="moon-name">{moon.name}</div>
//           <div className="moon-sub">Current Moon Phase</div>
//         </div>

//         {/* RIGHT : STATS */}
//         <div className="right">
//           <div className="stat">
//             🌡️ <span>Feels like</span>
//             <b>{feels}°</b>
//           </div>

//           <div className="stat">
//             💧 <span>Humidity</span>
//             <b>{c.humidity}%</b>
//           </div>

//           <div className="stat">
//             🌬️ <span>Wind</span>
//             <b>{c.windspeedKmph} kph</b>
//           </div>

//           <div className="stat">
//             📈 <span>Pressure</span>
//             <b>{c.pressure} hPa</b>
//           </div>

//           {/* 🌅 Sunrise */}
//           <div className="stat">
//             🌅 <span>Sunrise</span>
//             <b>{astro.sunrise}</b>
//           </div>

//           {/* 🌇 Sunset */}
//           <div className="stat">
//             🌇 <span>Sunset</span>
//             <b>{astro.sunset}</b>
//           </div>
//         </div>
//       </div>

//       {/* Hourly */}
//       <h3>Hourly Forecast</h3>
//       <HourlyForecast hourly={data.weather[0].hourly} unit={unit} />
//     </div>
//   );
// }

import "./CurrentWeather.css";
import { getMoonPhase } from "../utils/moonPhase";
import HourlyForecast from "./HourlyForecast";

const toF = (c) => Math.round((c * 9) / 5 + 32);

export default function CurrentWeather({ data, unit, setUnit }) {
  const c = data.current_condition[0];
  const astro = data.weather[0].astronomy[0];
  const moon = getMoonPhase();

  const temp = unit === "C" ? c.temp_C : toF(c.temp_C);
  const feels = unit === "C" ? c.FeelsLikeC : toF(c.FeelsLikeC);

  function getWeatherIcon(desc) {
    const d = desc.toLowerCase();
    if (d.includes("thunder")) return "⛈️";
    if (d.includes("snow")) return "❄️";
    if (d.includes("rain") || d.includes("drizzle")) return "🌧️";
    if (d.includes("cloud")) return "☁️";
    if (d.includes("fog") || d.includes("mist")) return "🌫️";
    if (d.includes("sun") || d.includes("clear")) return "☀️";
    return "🌤️";
  }

  return (
    <div className="weather-dashboard">
      {/* 1. TOP BAR */}
      <div className="dashboard-header">
        <div className="location-info">
          <h1>{data.nearest_area[0].areaName[0].value}</h1>
          <p>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>
        <div
          className="unit-switch"
          onClick={() => setUnit(unit === "C" ? "F" : "C")}
        >
          <span className={unit === "C" ? "active" : ""}>°C</span>
          <div className={`switch-track ${unit === "F" ? "f-active" : ""}`}>
            <div className="switch-thumb" />
          </div>
          <span className={unit === "F" ? "active" : ""}>°F</span>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="main-stats-grid">
        {/* BIG TEMP HERO */}
        <div className="hero-card">
          <div className="hero-main">
            <span className="hero-icon">
              {getWeatherIcon(c.weatherDesc[0].value)}
            </span>
            <span className="hero-temp">{temp}°</span>
          </div>
          <p className="hero-desc">{c.weatherDesc[0].value}</p>
          <p className="hero-feels">Feels like {feels}°</p>
        </div>

        {/* METRICS GRID */}
        <div className="metrics-grid">
          <StatBox icon="💧" label="Humidity" value={`${c.humidity}%`} />
          <StatBox icon="🌬️" label="Wind" value={`${c.windspeedKmph} km/h`} />
          <StatBox icon="📈" label="Pressure" value={`${c.pressure} hPa`} />
          <StatBox icon="🌅" label="Sunrise" value={astro.sunrise} />
          <StatBox icon="🌇" label="Sunset" value={astro.sunset} />
          <div className="moon-stat">
            <span className="moon-mini-icon">{moon.icon}</span>
            <div className="stat-text">
              <p className="label">Moon Phase</p>
              <p className="value">{moon.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. HOURLY FORECAST */}
      <div className="forecast-container">
        <h3>Hourly Forecast</h3>
        <HourlyForecast hourly={data.weather[0].hourly} unit={unit} />
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }) {
  return (
    <div className="stat-box">
      <span className="stat-icon">{icon}</span>
      <div className="stat-text">
        <p className="label">{label}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
}
