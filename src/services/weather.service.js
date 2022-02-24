import locationHelper from "../helpers/location.helper";
import weatherRepository from "../repositories/weather.repository";
import weatherFactory from "../factories/weather.factory";
import cityService from "./city.service";

const weatherService = {
    async getCurrentWeatherByLocation() {
        const coordinates = await locationHelper.getLocalisation();
        const rawWeather = await weatherRepository.getCurrentWeatherByLocation(coordinates)
        const weather = weatherFactory.formatRawWeatherToWeather(rawWeather)
        return weather;
    },
    async getWeatherForecastByLocation() {
        const coordinates = await locationHelper.getLocalisation();
        const rawWeatherForecast = await weatherRepository.getWeatherForecastByLocation(coordinates);
        const weatherForecast = weatherFactory.formatRawWeatherForecastToWeatherForecast(rawWeatherForecast)
        return weatherForecast;
    },
    async getWeatherByCityName(name) {
        const rawWeather = await weatherRepository.getWeatherByCityName(name);
        if (rawWeather.name) {
            const weather = weatherFactory.formatRawWeatherToWeather(rawWeather);
            return weather;
        } else {
            return {notFound: true}
        }
    },
    async getWeatherForecastByCityName(name) {
        const coordinates = await cityService.getCoordinateByCityName(name)
        const rawWeatherForecast = await weatherRepository.getWeatherForecastByLocation(coordinates);
        const weatherForecast = weatherFactory.formatRawWeatherForecastToWeatherForecast(rawWeatherForecast)
        return weatherForecast;
    },
    async getCurrentWeatherByCoords(coords) {
        const rawWeather = await weatherRepository.getCurrentWeatherByLocation(coords)
        const weather = weatherFactory.formatRawWeatherToWeather(rawWeather)
        return weather;
    }
}

export default weatherService;