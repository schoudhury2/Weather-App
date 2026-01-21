export function getMoonPhase(date = new Date()) {
  const synodicMonth = 29.530588853;
  const knownNewMoon = new Date("2000-01-06T18:14:00Z");
  const daysSince =
    (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);

  const phase = daysSince % synodicMonth;

  if (phase < 1.84566) return { icon: "🌑", name: "New Moon" };
  if (phase < 5.53699) return { icon: "🌒", name: "Waxing Crescent" };
  if (phase < 9.22831) return { icon: "🌓", name: "First Quarter" };
  if (phase < 12.91963) return { icon: "🌔", name: "Waxing Gibbous" };
  if (phase < 16.61096) return { icon: "🌕", name: "Full Moon" };
  if (phase < 20.30228) return { icon: "🌖", name: "Waning Gibbous" };
  if (phase < 23.99361) return { icon: "🌗", name: "Last Quarter" };
  if (phase < 27.68493) return { icon: "🌘", name: "Waning Crescent" };

  return { icon: "🌑", name: "New Moon" };
}
