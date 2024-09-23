import Link from 'next/link';
import React from 'react';

interface MangaCardProps {
  mangId: string;
  title: string;
  author: string;
  views: number;
  posterUrl: string;
}

const NewMangaCard: React.FC<MangaCardProps> = ({ mangId, title, author, views, posterUrl }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <Link href={`/${title}/${mangId}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{ backgroundImage: `url(${posterUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 hover:from-black/90"></div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white transition-opacity duration-300">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        {/* <p className="text-sm">Author: {author}</p>
        <p className="text-sm">Views: {views.toLocaleString()}</p> */}
      </div>
      </Link>
    </div>
  );
};

export default NewMangaCard;
