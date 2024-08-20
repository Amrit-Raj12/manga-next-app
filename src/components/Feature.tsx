import React from 'react'
import MultiCarausel from './MultiCarausel';
import Link from 'next/link';
import { FeatureProps } from '@/types/types';

const Feature: React.FC<FeatureProps> = ({ title, href, mangaList }) => {
  return (
    <div className='m-4 p-4'>
      <div className='flex justify-between items-center'>
         <h2 className='text-primary mb-4 font-bold'>
                {title}
            </h2>
            <Link href={href} className='text-primary underline'>See All</Link>
      </div>
            <MultiCarausel mangaData={mangaList} />
    </div>
  )
}

export default Feature