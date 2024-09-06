import { MangaType } from '@/types/types';
import shortTitle from '@/utils/shortTitle';
import Link from 'next/link';
import React from 'react'

interface MangaCardProps {
    manga: {
        img?: string
        title: string
        mangaID?: any
        id?: any
    };
}

const MangaCard: React.FC<MangaCardProps> = ({manga}) => {
    return (
        <div className='w-64 h-96'>
            <Link href={`/${manga.title}/${manga.mangaID || manga.id}`} className="group relative block bg-darkBg rounded-lg h-full">
                <img
                    alt=""
                    src={manga.img}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
                />

                <div className="relative p-4 sm:p-6 lg:p-8 h-full" style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)'
                }}>
                    {/* <p className="bg-primary text-secondary text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-secondary dark:text-primary w-16 text-center">{manga.year}</p> */}

                    <p className="text-xl font-bold text-primary">{shortTitle(manga.title)}</p>

                    <div className="">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            {/* <p className="text-sm text-white">
                               {manga.description}
                            </p> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MangaCard