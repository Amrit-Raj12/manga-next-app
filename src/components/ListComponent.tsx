import React from 'react'
import ListCard from './ListCard'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const List = new Array(10).fill(0)


const ListComponent = () => {

    // const { data, error, isLoading } = useQuery({
    //     queryKey: ["mangaList", 1],
    //     queryFn: () => getLatestMangaList(1),
    //   });

    const mangaTop10List = useSelector((state: RootState) => state?.manga?.mangaList);

    return (
        <div className='m-4'>
            <div className='flex flex-row gap-2 mb-4'>
            <svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth={3} stroke="#D69738" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M30,52.16c.81-2.07,7.06-17,19.76-19.86a.09.09,0,0,0,0-.18c-2.14-.86-15.22-6.57-19.38-20.26a.09.09,0,0,0-.18,0c-.51,2.27-3.94,14.43-20,20a.1.1,0,0,0,0,.19c2.24.38,13.48,3.14,19.62,20.15A.1.1,0,0,0,30,52.16Z" /><path d="M48.79,25.08c.29-.74,2.52-6.07,7.06-7.09a0,0,0,0,0,0-.07c-.76-.3-5.43-2.34-6.92-7.23a0,0,0,0,0-.07,0c-.18.82-1.4,5.16-7.14,7.13a0,0,0,0,0,0,.07c.8.14,4.81,1.12,7,7.2A0,0,0,0,0,48.79,25.08Z" /></g></svg>
            <h2 className='text-primary'>
                Trending
            </h2>
            </div>
            <div className='bg-white dark:bg-darkInput p-4 w-auto border-8 border-black rounded-md h-80  xl:h-[26rem] overflow-y-scroll scrollbar-hidden'>

            {mangaTop10List.map((item, index) => (<ListCard key={index} manga={item} index={index} />)) }
            </div>
        </div>
    )
}

export default ListComponent
