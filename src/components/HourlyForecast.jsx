// import "./HourlyForecast.css";

// function formatTime(t) {
//   return String(t).padStart(4, "0").slice(0, 2) + ":00";
// }

// export default function HourlyForecast({ hourly, unit }) {
//   if (!hourly) return null;

//   const nowHour = new Date().getHours();

//   // find closest upcoming hour
//   const startIndex = hourly.findIndex(
//     (h) => parseInt(h.time, 10) / 100 >= nowHour,
//   );

//   const next3Hours = hourly.slice(
//     startIndex === -1 ? 0 : startIndex,
//     (startIndex === -1 ? 0 : startIndex) + 3,
//   );

//   return (
//     <div className="hourly">
//       <div className="hourly-cards">
//         {next3Hours.map((h, i) => (
//           <div key={i} className="hour-card">
//             <p className="hour">{formatTime(h.time)}</p>
//             <span className="hour-icon">☁️</span>
//             <p className="hour-temp">{unit === "C" ? h.tempC : h.tempF}°</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import "./HourlyForecast.css";

function formatTime(t) {
  return String(t).padStart(4, "0").slice(0, 2) + ":00";
}

export default function HourlyForecast({ hourly, unit }) {
  if (!hourly || hourly.length === 0) return null;

  const nowHour = new Date().getHours();

  // Normalize hours (wttr / open-meteo format)
  const parsed = hourly.map((h) => ({
    ...h,
    hour: parseInt(h.time, 10) / 100,
  }));

  // Get remaining hours today
  let upcoming = parsed.filter((h) => h.hour >= nowHour);

  // 🔑 If less than 3, wrap from start (next day)
  if (upcoming.length < 3) {
    upcoming = upcoming.concat(parsed.slice(0, 3 - upcoming.length));
  }

  const next3Hours = upcoming.slice(0, 3);

  return (
    <div className="hourly">
      <div className="hourly-cards">
        {next3Hours.map((h, i) => (
          <div key={i} className="hour-card">
            <p className="hour">{formatTime(h.time)}</p>
            <span className="hour-icon">☁️</span>
            <p className="hour-temp">{unit === "C" ? h.tempC : h.tempF}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
