const cityFactory = {
    formatRawCityDataToCoordinates(RawCityData) {
        return {
            lat: RawCityData.latt,
            lon: RawCityData.longt,
        }
    },
}

export default cityFactory