import React, { useState } from 'react'
import VerticalComicReader from './VerticalComicReader'
import HorizontalComicReader from './HorizontalComicReader';
import { ChapterPropsType } from '@/types/types';
import LoadingGif from './content-loaders/Loading';


const ReadMode: React.FC<ChapterPropsType> = ({ chapterData, isLoading }) => {

    const { images } = chapterData.results;

    if(isLoading) {
      return <LoadingGif />
    }

  return (
    <div className='h-auto overflow-y-scroll scrollbar-hidden flex flex-col items-center justify-center mx-12'>
      <VerticalComicReader images={images} />
      {/* <HorizontalComicReader images={comicImages} /> */}
    </div>
  )
}

export default ReadMode