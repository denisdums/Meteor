const weatherHelper = {
    getWeatherIconUrl(iconID) {
        let icon
        switch (iconID) {
            case '01d' :
                icon = `/img/sun/26.png`;
                break;
            case '02d' :
                icon = `/img/sun/27.png`;
                break;
            case '03d' :
                icon = `/img/cloud/35.png`;
                break;
            case '04d' :
                icon = `/img/cloud/35.png`;
                break;
            case '09d' :
                icon = `/img/cloud/7.png`;
                break;
            case '10d' :
                icon = `/img/sun/8.png`;
                break;
            case '11d' :
                icon = `/img/cloud/12.png`;
                break;
            case '13d' :
                icon = `/img/cloud/23.png`;
                break;
            case '50d' :
                icon = `/img/snow/36.png`;
                break;
            default :
                icon = `/img/sun/26.png`;
                break;
        }
        return process.env.REACT_APP_URI + icon;

    },
    getRoundedTemp(temp) {
        return Math.round(temp)
    },
    convertTimestampToTime(timestamp) {
        let hours = new Date(timestamp * 1000).getHours();
        let minutes = new Date(timestamp * 1000).getMinutes();
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        return hours + ':' + minutes;
    },
    getNextDayForecast(forecast) {
        return forecast.slice(0, 24)
    },
    getForecastTimeByIndex(index) {
        const currentTime = new Date().getHours();
        let provisionalTime = currentTime + index + 1;
        if (provisionalTime >= 24) {
            provisionalTime = provisionalTime - 24;
        }
        provisionalTime = (provisionalTime < 10) ? '0' + provisionalTime : provisionalTime;
        return provisionalTime;
    },
    capitalizeWeatherDescription(desc) {
        return desc.charAt(0).toUpperCase() + desc.slice(1);
    },
    getCurrentTime(shift) {
        const offset = new Date().getTimezoneOffset() * 60;
        const currentUTCTimestamp = Math.round(Date.now() / 1000) + offset;
        const currentWeatherTimestamp = currentUTCTimestamp + shift;
        const currentTime = this.convertTimestampToTime(currentWeatherTimestamp)
        return currentTime;
    },
    convertMPerHourIntoKMPerHour(value){
        const speed = Math.round(value * 3.6)
        return speed;
    }
}

export default weatherHelper