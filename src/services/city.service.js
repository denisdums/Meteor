import cityRepository from "../repositories/city.repository";
import cityFactory from "../factories/city.factory";

const cityService = {
    async getCoordinateByCityName(city) {
        const RawCityData = await cityRepository.getCoordinateByCityName(city);
        const coordinates = cityFactory.formatRawCityDataToCoordinates(RawCityData)
        return coordinates;
    }
}

export default cityService;