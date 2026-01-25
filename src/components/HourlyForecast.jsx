export default function HourlyForecast({ hourly }) {
  const displayItems = hourly.time.map((t, i) => ({
    time: t.split('T')[1],
    temp: hourly.temperature_2m[i]
  })).filter((_, i) => i % 3 === 0).slice(0, 8);

  return (
    <div className="hourly-row">
      {displayItems.map((item, i) => (
        <div key={i} className="hour-card">
          <span>{item.time}</span>
          <p>{Math.round(item.temp)}°</p>
        </div>
      ))}
    </div>
  );
}
