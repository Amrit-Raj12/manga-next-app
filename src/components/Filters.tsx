import { filterOptions } from '@/data/data';
import React, { useState } from 'react';

const Filters: React.FC<any> = ({toggleSidebar}) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const toggleFilter = (filter: string) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(item => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    return (
        <div className="flex items-center gap-2 bg-white dark:bg-darkBg m-2 p-2 w-4/5  overflow-x-scroll mx-auto">
           
            {filterOptions.map((filter) => (
                <span
                    key={filter}
                    className={`hidden md:block whitespace-nowrap text-center rounded-full px-4 py-1 text-xs md:text-[12px] cursor-pointer ${
                        selectedFilters.includes(filter)
                            ? 'bg-primary text-white'
                            : 'border border-primary dark:text-purple-100 bg-transparent text-primary'
                    }`}
                    onClick={() => toggleFilter(filter)}
                >
                    {filter}
                </span>
            ))}
            <h1 className='text-primary md:hidden block' onClick={toggleSidebar}>Genre</h1>
        </div>
    );
};

export default Filters;
