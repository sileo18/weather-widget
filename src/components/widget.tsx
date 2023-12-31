import { useState } from "react";
import Switch from "./switch";

interface WidgetProps {
  city: string;
  weatherData: any;
}

export default function Widget({ city, weatherData }: WidgetProps) {
  const [typeTemp, setTypeTemp] = useState(false);

  const tempInCelsius = (weatherData.main.temp - 273.15).toFixed(2);

  const tempInFarenheit = (
    ((weatherData.main.temp - 273.15) * 9) / 5 +
    32
  ).toFixed(2);

  const descriptionWeather = weatherData.weather[0].description

  const firstCaracter = descriptionWeather.substring(0, 1).toUpperCase()

  const rest = descriptionWeather.substring(1)

  const descriptionWeatherFormated = firstCaracter + rest
  

  return (
    <div className="bg-white w-[600px] h-[600px] rounded-widget shadow-2xl flex flex-col items-center justify-start py-10 gap-6">
      <Switch typeTemp={typeTemp} setTypeTemp={setTypeTemp} />

      <div className="relative">
        <p className="text-deegres font-bold tracking-tight">
          {typeTemp ? tempInCelsius : tempInFarenheit}
        </p>
        <span className="absolute top-[40px] right-[-32px] text-8xl">°</span>
      </div>

      <p className="text-4xl font-medium cursor-pointer">
        {city.length > 25
          ? city.slice(0, 25).concat("...")
          : city + ", " + weatherData.sys.country}
      </p>

      <div className="flex gap-12">
        <p className="flex flex-col justify-center items-center">          
          <span className="text-lg">{descriptionWeatherFormated}</span>
        </p>
       
      </div>
    </div>
  );
}
