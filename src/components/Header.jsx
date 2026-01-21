import { useState } from "react";
import "./Header.css";

export default function Header({ onSearch }) {
  const [city, setCity] = useState("Paris");

  return (
    <div className="header">
      <h1>Weather Web</h1>
      <input
        value={city}
        placeholder="Search city..."
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(city)}
      />
    </div>
  );
}
