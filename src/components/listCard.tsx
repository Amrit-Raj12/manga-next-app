import { LatestMangaType } from '@/types/types'
import shortTitle from '@/utils/shortTitle'
import React from 'react'

interface Props {
    manga: LatestMangaType,
    index: number
}

const ListCard: React.FC<Props> = ({ manga, index }) => {
    return (
        <div className='flex flex-row gap-4 items-center'>
            <div className='mb-2 text-md text-lightText dark:text-darkText'>
                {index + 1}
            </div>
            <div className='mb-2'>
                <img src={manga.img} alt='manga1' className='w-10 h-16 object-fill' />
            </div>
            <div className='mb-2 text-md'>
                <p className='text-lightText dark:text-primary'>{shortTitle(manga.title)}</p>
                <div className='flex flex-row gap-2 items-center my-1'>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <p className='text-[14px] text-gray-400'>{manga.view}</p>

                    {/* <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <p className='text-[14px] text-gray-400'>200k+</p> */}
                </div>
            </div>
        </div>
    )
}

export default ListCard