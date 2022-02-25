import Skeleton from "react-loading-skeleton";

function SkeletonSunCard() {

    return (
        <div className='w-full p-6 rounded-xl bg-white drop-shadow flex justify-between'>
            <div className='flex flex-col items-center text-sm gap-2'>
                <span className='text-base text-grey w-32'><Skeleton/></span>
                <div className='flex gap-4 items-end'>
                    <div className='w-6 h-6'>
                        <Skeleton className='w-6 h-6'/>
                    </div>
                    <span className='w-12'><Skeleton/></span>
                </div>
            </div>
            <div className='flex flex-col items-center text-sm gap-2'>
                <span className='text-base text-grey w-32'><Skeleton/></span>
                <div className='flex gap-4 items-end'>
                    <div className='w-6 h-6'>
                        <Skeleton className='w-6 h-6'/>
                    </div>
                    <span className='w-12'><Skeleton/></span>
                </div>
            </div>
        </div>
    )
}

export default SkeletonSunCard;