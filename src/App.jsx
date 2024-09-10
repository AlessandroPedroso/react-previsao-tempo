import { useState, useRef } from 'react'
import axios from 'axios';
import WeatherInformations from './components/WeatherInformations/WeatherInformations';

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity() {
  
    const city = inputRef.current.value;
    const key = '077cbd45a9ea2bf6d8da89720a5859fa';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiDataWeather = await axios.get(url);
    setWeather(apiDataWeather.data);

  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity} >Buscar</button>
      <WeatherInformations weather={ weather} />
    </div>
  )
}

export default App
