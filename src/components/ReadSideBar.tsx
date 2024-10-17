import React, { useEffect, useState } from 'react'
import ChapterScrollView from './ChapterScrollView'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { ChapterPropsType } from '@/types/types'

interface PropsType {
  title: string
  chapterData: any,
  mangaId: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const ReadSideBar: React.FC<PropsType> = ({ title, chapterData, mangaId, setIsLoading }) => {

  const [showChapterList, setShowChapterList] = useState(false)

  const [sidebarVisible, setSidebarVisible] = useState(true)

  const { currentChapter, chapters } = chapterData.results;

  const [selectedChapter, setSelectedChapter] = useState(currentChapter)

  const router = useRouter()


  const chapterScrollProps = {
    visible:showChapterList,
    setVisible:setShowChapterList, 
    chapters,
    currentChapter,
    title,
    mangaId,
    setIsLoading
  }


  const changeChapter = (value: number) => {
    setIsLoading(true)
    const crrChapter = parseInt(selectedChapter.split('-')[1])
    const newChapter = crrChapter + value
    setSelectedChapter(`chapter-${newChapter}`)

    setTimeout(() => {
      router.push(`/read/${title}/${mangaId}/${selectedChapter}`)
      setIsLoading(false)
    },2000)
  }

  const toggleSidebar =() => {
    setSidebarVisible(!sidebarVisible)
  }

  const sideBarButton = () => {
    return (
      <div className='flex md:hidden flex-col items-center justify-center p-4' onClick={toggleSidebar}>
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M5 12H18" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /> <path d="M5 17H11" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /> <path d="M5 7H15" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" /> </g></svg>
      </div>
    )
  }
  const sideCrossButton = () => {
    return (
      <div className='flex md:hidden flex-col items-center justify-center p-4 mt-4 ml-48' onClick={toggleSidebar}>
      <svg width="22px" height="22px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>cross</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" > <g id="Icon-Set" transform="translate(-467.000000, -1039.000000)" fill="#ffffff"> <path d="M489.396,1061.4 C488.614,1062.18 487.347,1062.18 486.564,1061.4 L479.484,1054.32 L472.404,1061.4 C471.622,1062.18 470.354,1062.18 469.572,1061.4 C468.79,1060.61 468.79,1059.35 469.572,1058.56 L476.652,1051.48 L469.572,1044.4 C468.79,1043.62 468.79,1042.35 469.572,1041.57 C470.354,1040.79 471.622,1040.79 472.404,1041.57 L479.484,1048.65 L486.564,1041.57 C487.347,1040.79 488.614,1040.79 489.396,1041.57 C490.179,1042.35 490.179,1043.62 489.396,1044.4 L482.316,1051.48 L489.396,1058.56 C490.179,1059.35 490.179,1060.61 489.396,1061.4 L489.396,1061.4 Z M485.148,1051.48 L490.813,1045.82 C492.376,1044.26 492.376,1041.72 490.813,1040.16 C489.248,1038.59 486.712,1038.59 485.148,1040.16 L479.484,1045.82 L473.82,1040.16 C472.257,1038.59 469.721,1038.59 468.156,1040.16 C466.593,1041.72 466.593,1044.26 468.156,1045.82 L473.82,1051.48 L468.156,1057.15 C466.593,1058.71 466.593,1061.25 468.156,1062.81 C469.721,1064.38 472.257,1064.38 473.82,1062.81 L479.484,1057.15 L485.148,1062.81 C486.712,1064.38 489.248,1064.38 490.813,1062.81 C492.376,1061.25 492.376,1058.71 490.813,1057.15 L485.148,1051.48 L485.148,1051.48 Z" id="cross" > </path> </g> </g> </g></svg>

      </div>
    )
  }

  return (
    <>
      {<div className={`absolute ${!sidebarVisible ? 'hidden' : ''} md:block -top-4 -left-4 h-full w-64 z-50 bg-gray-100 dark:bg-darkInput shadow-lg`}>
          {sideCrossButton()}
        <div className='flex flex-col items-center justify-center p-4'>
          <Link className="p-4 flex items-center flex-col text-primary dark:text-primary" href="/">

            <Image
              src="/manga-nest.png"
              alt="Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <span className='flex'>Manga Nest</span>
          </Link>
        </div>
        <hr className='border-1 border-gray-300 dark:border-primary' />
        <div className=''>
          <h1 className='text-md font-bold p-4 text-lightText dark:text-darkText'>{title}</h1>
          <div className='mx-4 mb-4 border-b border-t border-gray-300 dark:border-primary py-4'>
            <p className='text-black dark:text-white'>Currently Reading</p>
            <p className='text-md text-gray-500 dark:text-primary capitalize'>{currentChapter.replace("-", " ")}</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center p-4'>
          <button onClick={() => setShowChapterList(!showChapterList)} className={`${showChapterList ? 'bg-primary' : 'bg-secondary'} text-white px-4 py-2 rounded-md mb-2 w-full hover:opacity-80 hover:bg-primary`}>
            {currentChapter.replace("-", " ").toUpperCase()}
          </button>
          <div className='flex justify-between w-full gap-4'>
            <button onClick={() => changeChapter(-1)} className='bg-secondary text-white px-4 py-2 rounded-md mb-2 w-full hover:opacity-80 hover:bg-primary'>&larr;</button>
            <button onClick={() => changeChapter(1)} className='bg-secondary text-white px-4 py-2 rounded-md mb-2 w-full hover:opacity-80 hover:bg-primary'>&rarr;</button>
          </div>
        </div>
      </div>}
      {sideBarButton()}
      {showChapterList && <ChapterScrollView  {...chapterScrollProps}/>}
    </>
  )
}

export default ReadSideBar