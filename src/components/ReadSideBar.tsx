import React, { useState } from 'react'
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

  return (
    <>
      <div className='absolute -top-4 -left-4 h-full w-64 z-50 bg-gray-100 dark:bg-darkInput shadow-lg'>
        <div className='flex flex-col items-center justify-center p-4'>
          <Link className="p-4 md:flex hidden items-center flex-col text-primary dark:text-primary" href="/">

            <Image
              src="/manga-nest.png"
              alt="Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <span className='hidden xl:flex'>Manga Nest</span>
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
      </div>
      {showChapterList && <ChapterScrollView  {...chapterScrollProps}/>}
    </>
  )
}

export default ReadSideBar