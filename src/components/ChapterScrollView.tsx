// import { ChapterType } from '@/types/types'
import { useRouter } from 'next/router';
import React from 'react'


interface PropsType {
  visible: boolean,
  setVisible: any,
  chapters:Array<String>,
  currentChapter: string,
  title: string,
  mangaId: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const ChapterScrollView: React.FC<PropsType> = ({visible, setVisible, chapters, currentChapter, title, mangaId, setIsLoading}) => {

  const router = useRouter()


  const sortedChapters = chapters
  .filter(chapter => chapter !== "chapter-0") // Exclude "chapter-0"
  .sort((a, b) => {
    const chapterNumA = parseInt(a.split('-')[1], 10);
    const chapterNumB = parseInt(b.split('-')[1], 10);
    return chapterNumA - chapterNumB;
  });

  const handleChapterPush = (chapter: String) => {
    setVisible(false)
    setIsLoading(true)
    setTimeout(() => {
      router.push(`/read/${title}/${mangaId}/${chapter}`)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className='absolute -top-4 left-[240px] h-full w-64 z-50 bg-gray-100 dark:bg-darkInput shadow-lg p-4 border-2 border-solid border-primary'>
        <h3 className='text-white text-center font-bold'>Chapter List</h3>
        <div className='flex flex-col gap-2 mt-2 overflow-y-auto h-[calc(100%-40px)]'>
            {sortedChapters.map((chapter, index) => (
                <div onClick={() =>handleChapterPush(chapter)} key={index} className={`flex items-center gap-2 cursor-pointer p-2 ${currentChapter === chapter ? 'bg-primary' : 'bg-secondary'} hover:bg-gray-200 dark:hover:bg-primary text-white shadow-2xl`}>
                    {/* <p>Chapter {chapter.chapterNumber}</p> */}
                    <p>{chapter}</p>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default ChapterScrollView
