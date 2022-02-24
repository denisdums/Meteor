import AddToFavs from "./AddToFavs";

function MarkerToggle({weather}) {

    return (
        <div
            className='w-full p-6 rounded-tl-xl rounded-tr-xl bg-white drop-shadow bg-bottom bg-no-repeat bg-contain md:bg-cover relative'>
            <AddToFavs city={weather.city}/>
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
                <p className='text-black text-sm'>{weather.city}</p>
            </div>
        </div>

    )
}

export default MarkerToggle;

