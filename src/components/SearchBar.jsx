import "./SearchBar.css";

export default function SearchBar({
  value,
  onChange,
  onSearch,
  onLocationClick,
}) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          type="text"
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="Search for a city..."
          aria-label="Search city"
        />
        <button
          className="location-btn"
          onClick={onLocationClick}
          title="Use current location"
          aria-label="Use current location"
        >
          📍
        </button>
      </div>
      <p className="search-hint">Press Enter to search</p>
    </div>
  );
}
