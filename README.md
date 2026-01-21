# Weather-App
# 🌦️ Weather App

A modern **Weather Application** built with **React** and **Vite** that provides current weather conditions, hourly forecasts, and multi-day forecasts with clean visuals and charts.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌤️ Current weather details (temperature, condition, wind, humidity, etc.)
* ⏰ Hourly forecast view
* 📅 7-day weather forecast
* 🌙 Moon phase calculation
* ⚡ Fast development and build with Vite

---

## 🛠️ Tech Stack

* **Frontend:** React 19, Vite
* **Charts:** Chart.js, react-chartjs-2
* **APIs:**

  * [wttr.in](https://wttr.in/) – current weather data
  * [Open-Meteo](https://open-meteo.com/) – daily weather forecast
* **Styling:** CSS
* **Linting:** ESLint

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── api/              # API calls (weather & forecast)
│   ├── assets/           # Icons and static assets
│   ├── components/       # Reusable UI components
│   ├── utils/            # Utility functions (moon phase, etc.)
│   ├── App.jsx           # Root component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and go to:

   ```
   http://localhost:5173
   ```

---

## 📦 Available Scripts

* `npm run dev` – Start development server
* `npm run build` – Build for production
* `npm run preview` – Preview production build
* `npm run lint` – Run ESLint

---

## 🌐 APIs Used

### wttr.in

Used for fetching current weather data by city name.

### Open-Meteo

Used for fetching daily weather forecasts including:

* Max & min temperature
* Wind speed
* Sunrise & sunset times

> ✅ No API key is required for these services.

---

## 📸 Screenshots

*Add screenshots here if needed*

---

## 🧩 Future Improvements

* 📍 Location-based weather (GPS)
* 🌡️ Unit toggle (°C / °F)
* 🌙 Dark mode
* 📱 Improved mobile responsiveness

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

* wttr.in
* Open-Meteo
* Chart.js

Happy coding! ☀️
