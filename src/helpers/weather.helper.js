const weatherHelper = {
    getWeatherIconUrl(iconID) {
        return `https://openweathermap.org/img/wn/${iconID}@2x.png`
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
    getForecastTimeByIndex: function (index) {
        const currentTime = new Date().getHours();
        let provisionalTime = currentTime + index + 1;
        if (provisionalTime >= 24) {
            provisionalTime = provisionalTime - 24;
        }
        provisionalTime = (provisionalTime < 10) ? '0' + provisionalTime : provisionalTime;
        return provisionalTime;
    }
}

export default weatherHelper