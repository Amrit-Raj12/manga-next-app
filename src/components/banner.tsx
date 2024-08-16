import React from 'react';

const Banner = () => {
    return (
        <div className='m-2 p-4 sm:p-6 flex flex-col-reverse sm:flex-row justify-between bg-primary rounded-lg'>
            <div className='mt-4 sm:mt-0'>
                <p className='uppercase text-black text-lg sm:text-xl font-bold mb-2'>
                    Read Hero Academia manga online
                </p>
                <div className='flex items-center mt-2 sm:mt-4'>
                    <p className='text-sm sm:text-md text-black'>High Quality</p>
                    <span className='mx-2 text-black'>|</span>
                    <p className='text-sm sm:text-md text-black'>No Sign-up</p>
                    <span className='mx-2 text-black'>|</span>
                    <p className='text-sm sm:text-md text-black'>No Ads</p>
                </div>

                <div className='flex items-baseline mt-4 sm:mt-6'>
                    <button className='bg-black rounded-md px-3 sm:px-4 py-2 mt-2 text-white'>
                        Read Now
                    </button>
                    <p className='text-black underline ml-2 cursor-pointer hover:text-secondary'>
                        Explore More
                    </p>
                </div>
            </div>
            <div className='flex justify-center sm:justify-end relative'>
                <div className='absolute hidden right-[15rem] sm:block'>
                    <div className="absolute bg-orange-300 opacity-50 rounded-full -top-4 h-32 w-32 sm:h-40 sm:w-40"></div>
                    <div className="absolute bg-orange-200 rounded-full h-24 w-24 sm:h-32 sm:w-32 top-0 left-2 sm:left-4"></div>
                    <div className="absolute bg-orange-100 rounded-full h-16 w-16 sm:h-24 sm:w-24 top-2 sm:top-4 left-4 sm:left-8"></div>
                </div>

                <div className="relative">
                    <img
                        src="./group-anime-removedbg.png"
                        alt="manga"
                        className='h-36 sm:h-44'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
