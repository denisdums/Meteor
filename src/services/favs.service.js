import weatherService from "./weather.service";

const favsService = {
    async getFavsWeather(favs) {
        const FavsWeather = await Promise.all(favs.map( async (fav)=>{
            return await weatherService.getWeatherByCityName(fav);
        }));
        return FavsWeather;
    }
}

export default favsService;