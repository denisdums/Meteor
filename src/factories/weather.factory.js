import weatherHelper from "../helpers/weather.helper";

const weatherFactory = {
    async formatRawWeatherToWeather(rawWeather) {
        return {
            city: rawWeather.name,
            temperature: weatherHelper.getRoundedTemp(rawWeather.main.temp),
            feels: weatherHelper.getRoundedTemp(rawWeather.main.feels_like),
            name: rawWeather.weather[0].main,
            description: rawWeather.weather[0].description,
            icon: weatherHelper.getWeatherIconUrl(rawWeather.weather[0].icon),
            wind: rawWeather.wind.speed,
            sunrise: weatherHelper.convertTimestampToTime(rawWeather.sys.sunrise),
            sunset: weatherHelper.convertTimestampToTime(rawWeather.sys.sunset),
        }
    },
    async formatRawWeatherForecastToWeatherForecast(rawWeatherForecast) {
        const forecastArray = weatherHelper.getNextDayForecast(rawWeatherForecast.hourly);
        let forecast = [];
        forecastArray.map((item, index) => {
            forecast.push({
                time:weatherHelper.getForecastTimeByIndex(index),
                temperature: weatherHelper.getRoundedTemp(item.temp),
                description: item.weather[0].description,
                icon: weatherHelper.getWeatherIconUrl(item.weather[0].icon)
            })
        })
        return forecast;
    }
}

export default weatherFactory