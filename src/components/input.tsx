interface InputProps {
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
  getWeather: (city: string) => void

}

export default function Input( {city, setCity, getWeather }: InputProps) {  

  const handleSubmitCity = () => {    

    getWeather(city)  
  }

  return (
    <main className="flex gap-4">      
      <input onChange={ (e) => setCity(e.target.value) } className="h-12 border-2 rounded-2xl p-2 shadow-2xl text-4xl text-center" type="text" id="inputCity" placeholder="Your City Here" />
      <button onClick={handleSubmitCity} className="h-12 p-2 text-2xl rounded-2xl shadow-2xl bg-violet-800 text-white hover:scale-105 transition-transform">Got It</button>
    </main>
  )
}