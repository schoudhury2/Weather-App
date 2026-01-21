<<<<<<< HEAD
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
<img width="1915" height="871" alt="image" src="https://github.com/user-attachments/assets/abf9c951-4da1-4504-b6c2-13169d4d0159" />

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
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> d7e2c84 (Initial commit)
