import Skeleton from 'react-loading-skeleton'

function SkeletonMap() {

    return (
        <div className='w-full map-container'>
            <Skeleton className='w-full h-full'/>
        </div>
    )
}

export default SkeletonMap;