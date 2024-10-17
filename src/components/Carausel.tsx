import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/router';
import { LatestMangaType } from '@/types/types';
import { motion } from "framer-motion";
import shortTitle from '@/utils/shortTitle';

// const carouselData = new Array(3).fill(0)

type CarauselProps = {
    carouselData: LatestMangaType[]
}

const CarauselComponent: React.FC<CarauselProps> = ({ carouselData }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const route = useRouter()

    let mangaTitle = 'One Piece'
    let mangaId = '5789a6b9aa4a2a5118417664'

    // console.log('carouselData', carouselData)

    const handlePush = (mangaTitle: string, mangaId: string) => {
        route.push(`/read/${mangaTitle}/${mangaId}/chapter-1`)
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const motionItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
      if(carouselData.length === 0) return <div>Loading...</div>
    return (
        <Carousel
        autoPlay
      infiniteLoop={true}
      showThumbs={false}
      statusFormatter={() => ''}
      selectedItem={currentSlide}
      onChange={(index) => setCurrentSlide(index)}
        >
            {carouselData.map((item, index) => (
                <div key={index}>
                    {/* For Descktop */}
                    <div className='h-96 relatives hidden md:block' style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='text-white p-2 rounded h-full w-full absolute' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }} />
                        <motion.div
                            animate={index === currentSlide ? { scale: 1.3, rotate: 12 } : {}} className={`lg:rotate-0 xl:rotate-12 absolute lg:right-2 xl:right-48 h-full border-[10px] border-solid border-primary transform lg:scale-100 xl:scale-125 xl:hover:scale-150 duration-500`}>

                            <img src={item.img} className="h-full w-full object-contain" />
                        </motion.div>
                        <div className="absolute bottom-4 left-4  text-white p-2 rounded duration-500">
                            <motion.div variants={container}
                                initial="hidden"
                                animate={(index === currentSlide ? "visible" : "hidden")}
                                className='flex flex-col items-start w-96'>

                                <motion.h3 variants={motionItem} className="text-sm flex mb-2 font-bold duration-500">{item.latestChapter} [EN]</motion.h3>
                                <motion.h3 variants={motionItem} className='text-2xl font-bold mb-2 text-start'>{shortTitle(item.title)}</motion.h3>
                                {/* <p className='text-[12px] text-gray-400 mb-2'>Chap: 20</p> */}

                                <motion.div variants={motionItem} className='flex flex-row gap-2 mb-2'>
                                    {/* Solid */}

                                    <div
                                        className="flex flex-row gap-1 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                                    >
                                        {item.view} <svg width="20px" height="20px" viewBox="0 0 24 24" className='dark:stroke-gray-100 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    {/* <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                Comedy
                            </span>
                            <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                Martial Art
                            </span>
                            <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                Super Power
                            </span> */}

                                    {/* Outlined */}

                                    {/* <span
                                className="whitespace-nowrap rounded-full border border-primary px-2.5 py-0.5 text-sm text-primary dark:text-purple-100"
                            >
                                8.5*
                            </span> */}
                                </motion.div>
                                <motion.p variants={motionItem} className={`text-sm text-start ${isExpanded ? '' : 'line-clamp-2'
                                    }`}>{item.description}</motion.p>
                                {!isExpanded && (
                                    <motion.p
                                        variants={motionItem}
                                        onClick={() => setIsExpanded(true)}
                                        className="cursor-pointer text-sm hover:underline"
                                    >
                                        + More
                                    </motion.p>
                                )}

                                <motion.div variants={motionItem} className='flex flex-row gap-2 items-center justify-start mt-2'>
                                    <button className='rounded-lg bg-secondary px-2.5 py-1 text-sm text-primary dark:text-purple-100' onClick={() =>handlePush(item.title, item.mangaID)}>Read Now</button>
                                    <button className='rounded-lg bg-primary px-2.5 py-1 text-sm text-gray-100 underline'>More Info</button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    {/* For Mobile */}
                    <div className='md:hidden block h-96 relatives w-full'>
                        <img src={item.img} className="h-full w-full object-contain" />
                        <div className="absolute bottom-4 left-0  text-white p-2 rounded" style={{backgroundColor:'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)'}}>
                            <div className='flex flex-col items-start w-96'>

                                <h3 className="text-xs flex mb-2 font-bold">{item.latestChapter} [EN]</h3>
                                <h3 className='text-sm font-bold mb-2 text-start'>{shortTitle(item.title)}</h3>
                                {/* <p className='text-[12px] text-gray-400 mb-2'>Chap: 20</p> */}

                                <div className='flex flex-row gap-2 mb-2'>
                                    {/* Solid */}

                                    <div
                                        className="flex flex-row gap-1 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                                    >
                                        {item.view} <svg width="20px" height="20px" viewBox="0 0 24 24" className='dark:stroke-gray-100 stroke-primary' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    {/* <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                Comedy
                            </span>
                            <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                Martial Art
                            </span>
                            <span
                                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-primary dark:bg-primary dark:text-purple-100"
                            >
                                Super Power
                            </span> */}

                                    {/* Outlined */}

                                    {/* <span
                                className="whitespace-nowrap rounded-full border border-primary px-2.5 py-0.5 text-sm text-primary dark:text-purple-100"
                            >
                                8.5*
                            </span> */}
                                </div>
                                <p className={`text-xs px-2 text-start ${isExpanded ? '' : 'line-clamp-2'
                                    }`}>{item.description}</p>
                                {!isExpanded && (
                                    <p
                                        onClick={() => setIsExpanded(true)}
                                        className=" cursor-pointer text-sm hover:underline"
                                    >
                                        + More
                                    </p>
                                )}

                                <div className='flex flex-row gap-2 items-center justify-start mt-2'>
                                    <button className='rounded-lg bg-secondary px-2.5 py-1 text-sm text-primary dark:text-purple-100' onClick={() =>handlePush(item.title, item.mangaID)}>Read Now</button>
                                    <button className='rounded-lg bg-primary px-2.5 py-1 text-sm text-primary dark:text-purple-100 underline'>More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </Carousel>
    )
}

export default CarauselComponent
