import {useParams} from "react-router-dom";
import CurrentWeatherByCity from "../components/CurrentWeatherByCityName";
import WeatherForecastByCityName from "../components/WeatherForecastByCityName";

function City() {
    const {city} = useParams();
    return (
        <>
            <CurrentWeatherByCity city={city}/>
            <WeatherForecastByCityName city={city}/>
        </>
    );
}

export default City;
