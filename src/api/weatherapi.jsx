export async function fetchWeather(city) {
  const res = await fetch(`https://wttr.in/${city}?format=j1`);
  return res.json();
}
