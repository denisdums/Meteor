const cityRepository = {
    async getCoordinateByCityName(city) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_GEOCODE_URL}${city}?json=1?auth=980074930608870697959x124476`);
            return await response.json();
        } catch (err) {
            console.log("error : ", err)
        }
    },
}

export default cityRepository