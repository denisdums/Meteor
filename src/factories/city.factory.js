const cityFactory = {
    formatRawCityDataToCoordinates(RawCityData) {
        console.log()
        return {
            lat: RawCityData.coord.lat,
            lon: RawCityData.coord.lon,
        }
    },
}

export default cityFactory