import "./App.css";
import axios from "axios";
import Widget from "./components/widget";
import Input from "./components/input";
import { useState } from "react";

function App() {

  const [city, setCity] = useState("")

  const [shouldOpen , setShouldOpen] = useState(false)

  const [weatherData, setWeatherData] = useState(null)

  const getWeather = () => {   

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=371a4f6b13f536664db98aae6dcd7441`;

    axios.get(url).then((res) => {
      const weatherData = res.data;
      console.log(weatherData)
      setShouldOpen(true)
      setWeatherData(weatherData)    
    }).catch((err) => {
      console.log(err)
    })

    function getHours() {

      const date = new Date()

      const hour = date.getHours
    } 
  };

  return (
    <main className="bg-main min-h-screen flex justify-center items-center">
      { shouldOpen ? <Widget city={city} weatherData={weatherData}  /> : <Input city={city} setCity={setCity} getWeather={getWeather}  /> }      
    </main>
  );
}

export default App;
