import Skeleton from 'react-loading-skeleton'

function SkeletonWeatherCard() {

    return (
        <div className='w-full p-6 rounded-xl bg-white drop-shadow bg-bottom bg-no-repeat bg-contain md:bg-cover relative'>

                <div className='w-full flex justify-between items-center'>
                    <div className='w-24 h-24 overflow-hidden relative'>
                        <Skeleton className='h-3/4 w-3/4'/>
                    </div>
                    <div className='flex flex-col justify-center items-center w-32'>
                            <span className='w-full text-6xl text-white font-semibold'><Skeleton/></span>
                            <span className='w-full text-sm text-white font-light'><Skeleton/></span>
                    </div>
                </div>
            <div className='w-32'>
                <p className='text-white text-lg'><Skeleton/></p>
                <p className='text-white text-sm'><Skeleton/></p>
            </div>
        </div>

    )
}

export default SkeletonWeatherCard;

