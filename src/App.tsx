import "./App.css";
import axios from "axios";
import Widget from "./components/widget";
import Input from "./components/input";
import { useState } from "react";
import classNames from "classnames";

interface WeatherData {
  main: {
    temp: number;
  };
  // Outras propriedades da resposta da API, se houver
}

function App() {
  const [city, setCity] = useState("");

  const [shouldOpen, setShouldOpen] = useState(false);

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const tempInCelsius = weatherData?.main?.temp ?? 0;

  const getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=371a4f6b13f536664db98aae6dcd7441`;

    axios
      .get<WeatherData>(url) // Anotação de tipo para a resposta da API
      .then((res) => {
        const weatherData = res.data;
        setShouldOpen(true);
        setWeatherData(weatherData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main
      className={classNames(
        "bg-main min-h-screen flex justify-center items-center transition-all",
        tempInCelsius < 22 ? "bg-custom" : "bg-custom1"
      )}
    >
      {shouldOpen ? (
        <Widget city={city} weatherData={weatherData} />
      ) : (
        <Input city={city} setCity={setCity} getWeather={getWeather} />
      )}
    </main>
  );
}

export default App;
