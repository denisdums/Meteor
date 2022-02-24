const cityRepository = {
    async getCoordinateByCityName(city) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_WEATHER_URL}${process.env.REACT_APP_API_WEATHER_ROUTE_CURRENT}?q=${city}${process.env.REACT_APP_API_WEATHER_SETTINGS}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);
            return await response.json();
        } catch (err) {
            console.log("error : ", err)
        }
    },
}

export default cityRepository