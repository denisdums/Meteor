const weatherRepository = {
    async getCurrentWeatherByLocation(coordinates) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}${process.env.REACT_APP_API_WEATHER_ROUTE_CURRENT}?lat=${coordinates.lat}&lon=${coordinates.lon}${process.env.REACT_APP_API_WEATHER_SETTINGS}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            return await response.json();
        } catch (err) {
            console.log("error : ", err)
        }
    },
    async getWeatherForecastByLocation(coordinates) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}${process.env.REACT_APP_API_WEATHER_ROUTE_ONE}?lat=${coordinates.lat}&lon=${coordinates.lon}${process.env.REACT_APP_API_WEATHER_SETTINGS}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            return await response.json();
        } catch (err) {
            console.log("error : ", err)
        }
    },
    async getWeatherByCityName(name) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}${process.env.REACT_APP_API_WEATHER_ROUTE_CURRENT}?q=${name}${process.env.REACT_APP_API_WEATHER_SETTINGS}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            return await response.json();
        } catch (err) {
            console.log("error : ", err)
        }
    },
}

export default weatherRepository