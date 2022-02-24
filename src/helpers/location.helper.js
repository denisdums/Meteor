const locationHelper = {
    getLocalisation() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve({lat: position.coords.latitude, lon: position.coords.longitude});
            }, reject);
        });
    }
}

export default locationHelper