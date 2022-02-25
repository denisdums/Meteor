import {Component} from "react";
import SunCard from "./cards/SunCard";
import WeatherCard from "./cards/WeatherCard";
import weatherService from "../services/weather.service";
import SkeletonWeatherCard from "./skeleton/SkeletonWeatherCard";
import SkeletonSunCard from "./skeleton/SkeletonSunCard";

class CurrentWeatherByLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeather: {},
        }
    }

    async componentDidMount() {
        const currentWeather = await weatherService.getCurrentWeatherByLocation();
        this.setState({currentWeather: currentWeather});
    }

    render() {
        return (
            <div className='flex flex-col gap-6'>
                {this.state.currentWeather.temperature ? (
                    <WeatherCard weather={this.state.currentWeather}/>
                ) : (
                    <SkeletonWeatherCard/>
                )}
                {this.state.currentWeather.sunrise && this.state.currentWeather.sunset ? (
                    <SunCard sunrise={this.state.currentWeather.sunrise} sunset={this.state.currentWeather.sunset}/>
                ) : (
                    <SkeletonSunCard/>
                )}
            </div>
        )
    }
}

export default CurrentWeatherByLocation;