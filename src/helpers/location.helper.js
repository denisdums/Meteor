const locationHelper = {
    getLocalisation(){
        return new Promise(function(resolve, reject){
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve({lat:position.coords.latitude, lon: position.coords.longitude});
            });
        });
    }
}

export default locationHelper