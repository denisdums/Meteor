import weatherBg from "../../assets/img/weather-bg.svg";
import AddToFavs from "../AddToFavs";
import {Link} from "react-router-dom";

function WeatherCard({weather}) {

    return (
        <div
            className='w-full p-6 rounded-xl bg-blue drop-shadow bg-bottom bg-no-repeat bg-contain md:bg-cover relative'
            style={{backgroundImage: `url(${weatherBg})`}}>
            <AddToFavs city={weather.city}/>
            <Link to={`/city/${weather.city}`}>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-24 h-24 overflow-hidden relative'>
                        <img src={weather.icon} alt='icon'
                             className='w-32 h-32 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 object-cover object-center'/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                            <span
                                className='text-6xl text-white font-semibold'>{weather.temperature}°C</span>
                        <span
                            className='text-sm text-white font-light'>Ressentis {weather.feels}°C</span>
                    </div>
                </div>
            </Link>
            <div className='w-full'>
                <p className='text-white text-lg'>{weather.description}</p>
                <p className='text-white text-sm'>{weather.city}</p>
            </div>
        </div>

    )
}

export default WeatherCard;

