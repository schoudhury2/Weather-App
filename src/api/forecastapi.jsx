export async function fetchWeeklyForecast(lat, lon) {
  // const res = await fetch(
  //   `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`,
  // );
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast
    ?latitude=${lat}
    &longitude=${lon}
    &daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,sunrise,sunset
    &timezone=auto`,
  );
  return res.json();
}
