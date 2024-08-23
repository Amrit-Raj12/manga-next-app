import React from 'react'
import InfiniteScrollList from './InfiniteScroll';

const ChapterList = () => {

    const fetchItems = async (page: number): Promise<string[]> => {
        // Simulate fetching data (e.g., from an API)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return Array.from({ length: 10 }, (_, index) => `Item ${index + 1 + (page - 1) * 10}`);
    };

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
                <InfiniteScrollList fetchData={fetchItems} />
            </div>
        </div>
    )
}

export default ChapterList