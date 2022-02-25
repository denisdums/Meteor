import Skeleton from 'react-loading-skeleton'

function ForecastCard() {

    return (
        <div className='w-full p-6 rounded-xl bg-light-grey bg-opacity-30 flex gap-6'>
            <div className='w-12 h-12 overflow-hidden relative'>
                <Skeleton/>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col'>
                    <div className='w-full text-lg font-medium'><Skeleton/></div>
                    <div className='w-ful text-sm'><Skeleton/></div>
                </div>
                <div className='w-full text-2xl font-medium text-grey'><Skeleton/></div>
            </div>

        </div>
    )
}

export default ForecastCard;