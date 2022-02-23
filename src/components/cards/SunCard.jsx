import icon_sunrise from '../../assets/img/sunrise.svg';
import icon_sunset from '../../assets/img/sunset.svg';

function SunCard({sunrise, sunset}) {

    return (
        <div className='w-full p-6 rounded-xl bg-white drop-shadow flex justify-between'>
            <div className='flex flex-col items-center text-sm gap-2'>
                <span className='text-base text-grey'>Lever du soleil</span>
                <div className='flex gap-4 items-end'>
                    <div className='w-6 h-6'>
                        <img src={icon_sunrise} alt="icon sunrise"
                             className='w-full h-full object-contain object-center'/>
                    </div>
                    <span>{sunrise}</span>
                </div>
            </div>
            <div className='flex flex-col items-center text-sm gap-2'>
                <span className='text-base text-grey'>Coucher du soleil</span>
                <div className='flex gap-4 items-end'>
                    <div className='w-6 h-6'>
                        <img src={icon_sunset} alt="icon sunset"
                             className='w-full h-full object-contain object-center'/>
                    </div>
                    <span>{sunset}</span>
                </div>
            </div>
        </div>
    )
}

export default SunCard;