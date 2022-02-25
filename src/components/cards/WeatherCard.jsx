import weatherBg from "../../assets/img/weather-bg.svg";
import AddToFavs from "../AddToFavs";
import windIcon from '../../assets/img/wind.svg';
import {Link} from "react-router-dom";

function WeatherCard({weather}) {

    return (
        <div
            className='w-full px-6 py-10 rounded-xl bg-blue drop-shadow bg-bottom bg-no-repeat bg-contain md:bg-cover relative'
            style={{backgroundImage: `url(${weatherBg})`}}>
            <div className='absolute top-4 right-4 flex gap-2'>
                <AddToFavs city={weather.city}/>
            </div>
            <Link to={`/city/${weather.city}`}>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-24 h-24 overflow-hidden relative'>
                        <img src={weather.icon} alt='icon' className='w-full h-full object-contain object-centerr'/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-6xl text-white font-semibold'>{weather.temperature}°C</span>
                        <span className='text-sm text-white font-light'>Ressentis {weather.feels}°C</span>
                    </div>
                </div>
            </Link>
            <div className='w-full'>
                <p className='text-white text-lg'>{weather.description}</p>
                <div className='flex items-center gap-2'>
                    <img src={windIcon} alt="wind icon" className='w-6'/>
                    <span className='text-white text-sm'>{weather.wind}Km/h</span>
                </div>
                <p className='text-white text-sm'>{weather.city} | {weather.time}</p>
            </div>
        </div>

    )
}

export default WeatherCard;

