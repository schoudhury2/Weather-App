export function icons(desc) {
  if (desc.includes("thunder")) return "⛈️";
  if (desc.includes("rain")) return "🌧️";
  if (desc.includes("cloud")) return "☁️";
  return "☀️";
}
