import "./Forecast.css";

const iconMap = {
  0: "☀️", // Clear
  1: "🌤️", // Mainly clear
  2: "⛅", // Partly cloudy
  3: "☁️", // Overcast
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  80: "🌦️",
  81: "🌦️",
  82: "🌧️",
};

const toF = (c) => Math.round((c * 9) / 5 + 32);

export default function Forecast({ data, unit }) {
  if (!data) return null;

  return (
    <div className="forecast">
      <h3 className="forecast-title">Week in review</h3>

      <div className="forecast-grid">
        {data.time.map((date, i) => (
          <div key={date} className="forecast-day">
            {/* Day */}
            <p className="day">
              {new Date(date).toLocaleDateString("en", {
                weekday: "short",
              })}
            </p>

            {/* Icon */}
            <span className="f-icon">
              {iconMap[data.weathercode[i]] || "🌦️"}
            </span>

            {/* Temp Range */}
            <p className="range">
              {unit === "C"
                ? `${Math.round(data.temperature_2m_max[i])}° / ${Math.round(
                    data.temperature_2m_min[i],
                  )}°`
                : `${toF(data.temperature_2m_max[i])}° / ${toF(
                    data.temperature_2m_min[i],
                  )}°`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
