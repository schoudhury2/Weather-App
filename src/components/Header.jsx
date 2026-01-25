export default function Header({ city, country }) {
  return (
    <header className="header">
      <h1>{city}, {country}</h1>
      <p>{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</p>
    </header>
  );
}