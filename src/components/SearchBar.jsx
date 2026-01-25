import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length > 2) {
        try {
          const res = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5`
          );
          setSuggestions(res.data.results || []);
        } catch (err) {
          console.error("Suggestion error", err);
        }
      } else {
        setSuggestions([]);
      }
    }, 300); // 300ms Debounce

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (city) => {
    setQuery('');
    setSuggestions([]);
    onSearch(city.name);
  };

  return (
    <div className="search-container">
      <form className="search-bar" onSubmit={(e) => { e.preventDefault(); onSearch(query); setSuggestions([]); }}>
        <input 
          type="text" 
          value={query} 
          placeholder="Search city..." 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city) => (
            <li key={city.id} onClick={() => handleSelect(city)}>
              {city.name}, <span className="country-hint">{city.country_code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Search({ onSearch }) {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(async () => {
//       if (query.length > 2) {
//         const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5`);
//         setSuggestions(res.data.results || []);
//       } else {
//         setSuggestions([]);
//       }
//     }, 300);
//     return () => clearTimeout(timer);
//   }, [query]);

//   return (
//     <div className="search-wrapper">
//       <div className="search-bar-container">
//         <input 
//           type="text" 
//           value={query} 
//           placeholder="Paris" 
//           onChange={(e) => setQuery(e.target.value)} 
//         />
//       </div>
//       {suggestions.length > 0 && (
//         <ul className="glass-dropdown">
//           {suggestions.map((city) => (
//             <li key={city.id} onClick={() => { onSearch(city.name); setSuggestions([]); setQuery(''); }}>
//               {city.name}, {city.country_code}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }