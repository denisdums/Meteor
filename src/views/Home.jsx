import CurrentWeatherByLocation from "../components/CurrentWeatherByLocation";
import WeatherForecastByLocation from "../components/WeatherForecastByLocation";

function Home() {

    return (
        <>
            <CurrentWeatherByLocation/>
            <WeatherForecastByLocation/>
        </>
    );
}

export default Home;
