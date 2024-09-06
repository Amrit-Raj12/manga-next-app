import React, { useState } from 'react'
import InfiniteScrollList from './InfiniteScroll';
import { Chapter } from '@/types/types';

interface ChapterListProps {
    mangaData: {
        chapterList: Chapter[];
    };
}

const ChapterList: React.FC<ChapterListProps> = ({mangaData}) => {
    const [allChapters] = useState(mangaData.chapterList);

     // Function to fetch data for a specific page
  const fetchData = async (page: number) => {
    // Simulate fetching new data for each page
    const itemsPerPage = 2;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    // Mocking a delay like a real API call
    return new Promise<Chapter[]>((resolve) => {
      setTimeout(() => {
        resolve(allChapters.slice(start, end));
      }, 1000);
    });
  };

    // console.log("fetchItems", fetchItems())

    return (
        <div className='overflow-hidden'>
            <div className="bg-gray-400 dark:bg-[#1A1A1A] p-2 mb-2 flex items-center justify-between">
                <div>
                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 text-nowrap rounded-lg border-primary bg-gray-400 dark:bg-[#1A1A1A] text-white sm:text-sm outline-none"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </div>
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            id="Search"
                            placeholder="chapter name/chapter number"
                            className={`w-[420px] rounded-md border-gray-200 p-2.5 pe-10 shadow-sm sm:text-sm dark:border-darkBg dark:bg-darkInput dark:text-white`}
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button
                                type="button"
                                className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                            >
                                <span className="sr-only">Search</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className=' h-96 overflow-y-auto scrollbar-hidden'>
                <InfiniteScrollList fetchData={fetchData} />
            </div>
        </div>
    )
}

export default ChapterList