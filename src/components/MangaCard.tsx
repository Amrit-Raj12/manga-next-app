import { MangaType } from '@/types/types';
import Link from 'next/link';
import React from 'react'

interface MangaCardProps {
    manga: MangaType;
}

const MangaCard: React.FC<MangaCardProps> = ({manga}) => {

     let mangaTitle = 'One Piece'
    let mangaId = '5789a6b9aa4a2a5118417664'

    return (
        <div className='w-64 h-96'>
            <Link href={`/${mangaTitle}/${mangaId}`} className="group relative block bg-darkBg rounded-lg h-full">
                <img
                    alt=""
                    src={manga.poster}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="bg-primary text-secondary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-secondary dark:text-primary w-16 text-center">{manga.year}</p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{manga.title}</p>

                    <div className="">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                               {manga.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MangaCard