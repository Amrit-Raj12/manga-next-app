import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarauselComponent = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} statusFormatter={() => ''}>
            <div className='h-96 relative'>
                <img src="https://res.cloudinary.com/dcdchgx6z/image/upload/v1723198685/retro-digital-art-illustration-person-using-radio-technology_ni2cng.jpg" className="h-full w-full object-cover" />
                <div className="absolute bottom-4 left-4  text-white p-2 rounded">
                    <div className='flex flex-col items-start w-96'>

                        <h3 className="text-[12px] flex mb-2">Genre <span className='text-gray-400'> | </span> TV</h3>
                        <h3 className='text-xl font-bold mb-2'>My Hero Academia</h3>
                        <p className='text-[12px] text-gray-400 mb-2'>Chap: 20</p>

                        <div className='flex flex-row gap-2 mb-2'>
                            {/* Solid */}

                            <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                PG-13
                            </span>

                            {/* Outlined */}

                            <span
                                className="whitespace-nowrap rounded-full border border-primary px-2.5 py-0.5 text-sm text-primary dark:text-purple-100"
                            >
                                8.5*
                            </span>
                        </div>
                        <p className={`text-sm text-start ${
          isExpanded ? '' : 'line-clamp-2'
        }`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae quo! Dolor dignissimos inventore, reiciendis illo tempore corporis?.</p>
                        {!isExpanded && (
        <p
          onClick={() => setIsExpanded(true)}
          className=" cursor-pointer text-sm hover:underline"
        >
          + More
        </p>
      )}
                    </div>
                </div>
            </div>
            <div className='h-96 relative'>
                <img src="https://res.cloudinary.com/dcdchgx6z/image/upload/v1723198685/retro-digital-art-illustration-person-using-radio-technology_ni2cng.jpg" className="h-full w-full object-cover" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div className='h-96 relative'>
                <img src="https://res.cloudinary.com/dcdchgx6z/image/upload/v1723198685/retro-digital-art-illustration-person-using-radio-technology_ni2cng.jpg" className="h-full w-full object-cover" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    )
}

export default CarauselComponent