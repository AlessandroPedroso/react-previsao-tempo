function WeatherInformations({ weathers }) {
    console.log(weathers)
  return (
    <div>
      <h2>{weathers.name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`}
          alt="img-weather"
        />
          <p>
              {Math.round(weathers.main.temp)}ºC
          </p>
          </div>
    </div>
  );
}

export default WeatherInformations;
