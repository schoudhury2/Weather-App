import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <h1>ReactWeather</h1>
      <div className="top-icons">
        <span>🌤️</span>
        <span>🐙</span>
      </div>
    </div>
  );
}
