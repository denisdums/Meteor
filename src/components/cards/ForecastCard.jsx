import windIcon from "../../assets/img/wind-black.svg";

function ForecastCard({forecast}) {
    return (
        <div className='w-full p-6 rounded-xl bg-light-grey bg-opacity-30 flex gap-6'>
            <div className='w-12 h-12 overflow-hidden relative'>
                <img src={forecast.icon} alt='icon'
                     className='w-full h-full object-contain object-center'/>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p className='text-lg font-medium'>{forecast.time}h</p>
                    <p className='text-sm'>{forecast.description}</p>
                    <div className='flex items-center gap-2 mt-1'>
                        <img src={windIcon} alt="wind icon" className='w-4'/>
                        <span className='text-xs'>{forecast.wind}Km/h</span>
                    </div>
                </div>
                <p className='text-2xl font-medium text-grey'>{forecast.temperature}°C</p>
            </div>

        </div>
    )
}

export default ForecastCard;