import "./Child.scss";

const WeatherState = (props) => {
  const weatherState = props.weatherState;
  const allWeatherState = {
    Snow: "sn",
    Sleet: "sl",
    Hail: "h",
    Thunderstorm: "t",
    "Heavy Rain": "hr",
    "Light Rain": "lr",
    Showers: "s",
    "Heavy Cloud": "hc",
    "Light Cloud": "lc",
    Clear: "c",
  };

  const getWeatherIcon = (weatherState) => {
    const fetchState = allWeatherState[weatherState];
    return `http://localhost:8080/static/img/weather/${fetchState}.svg`;
  };

  return (
    <div className="weather-state-container">
      <div className="icon-state">
        <img src={getWeatherIcon(weatherState)} alt="weather" />
      </div>
      <div className="name-state">{weatherState}</div>
    </div>
  );
};

export default WeatherState;
