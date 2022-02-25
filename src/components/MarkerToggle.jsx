import AddToFavs from "./AddToFavs";
import close from "../assets/img/close.svg";
import windIcon from "../assets/img/wind-black.svg";

function MarkerToggle({weather, closeMarker}) {

    return (
        <div
            className='w-full px-6 py-10 rounded-tl-xl rounded-tr-xl bg-white drop-shadow bg-bottom bg-no-repeat bg-contain md:bg-cover relative'>
            <div className='absolute top-4 right-4 flex gap-2'>
                <AddToFavs city={weather.city}/>
                <button className='w-6 h-6 bg-light-grey rounded bg-50 bg-center bg-no-repeat'
                        onClick={() => closeMarker()} style={{backgroundImage: `url(${close})`}}/>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='w-24 h-24 overflow-hidden relative'>
                    <img src={weather.icon} alt='icon'
                         className='w-full h-full object-contain object-center'/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                            <span
                                className='text-6xl text-blaxk font-semibold'>{weather.temperature}°C</span>
                    <span
                        className='text-sm text-black font-light'>Ressentis {weather.feels}°C</span>
                </div>
            </div>
            <div className='w-full'>
                <p className='text-black text-lg'>{weather.description}</p>
                <div className='flex items-center gap-2'>
                    <img src={windIcon} alt="wind icon" className='w-6'/>
                    <span className='text-sm'>{weather.wind}Km/h</span>
                </div>
                <p className='text-black text-sm'>{weather.city} | {weather.time}</p>
            </div>
        </div>

    )
}

export default MarkerToggle;

