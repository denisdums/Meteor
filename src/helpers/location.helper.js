const locationHelper = {
    getLocalisation(){
        return new Promise(function(resolve, reject){
            navigator.geolocation.getCurrentPosition((position)=>{
                resolve({lat:position.coords.latitude, lon: position.coords.longitude});
            }, (err)=>{console.log(err)},{enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 0});
        });
    }
}

export default locationHelper