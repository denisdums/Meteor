import {Component} from "react";
import weatherService from "../services/weather.service";
import ForecastCard from "./cards/ForecastCard";
import SkeletonForecastCard from "./skeleton/SkeletonForecastCard";

class WeatherForecastByLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherForecast: {},
        }
    }

    async componentDidMount() {
        const weatherForecast = await weatherService.getWeatherForecastByLocation();
        this.setState({weatherForecast: weatherForecast});
    }

    render() {
        return (
            <div className='flex flex-col gap-6 mt-6 pb-32'>
                {this.state.weatherForecast.length > 0 ? this.state.weatherForecast.map((forecast) => (
                    <ForecastCard key={forecast.time} forecast={forecast}/>
                )) :
                    <>
                        <SkeletonForecastCard/>
                        <SkeletonForecastCard/>
                        <SkeletonForecastCard/>
                        <SkeletonForecastCard/>
                        <SkeletonForecastCard/>
                        <SkeletonForecastCard/>
                    </>
                }

            </div>
        )
    }
}

export default WeatherForecastByLocation;