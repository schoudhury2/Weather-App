export default function DailyForecast({ daily }) {
  return (
    <div className="daily-list">
      {daily.time.map((date, i) => (
        <div key={date} className="daily-item">
          <span>{new Date(date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
          <span>{Math.round(daily.temperature_2m_max[i])}° / {Math.round(daily.temperature_2m_min[i])}°</span>
        </div>
      ))}
    </div>
  );
}