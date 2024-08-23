import ChapterList from '@/components/ChapterList';
import MangaDetails from '@/components/MangaDetails';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface MangaPageProps {
  mangaName: string;
  id: string;
}

const MangaPage: React.FC<MangaPageProps> = ({ mangaName, id }) => {
  const router = useRouter();

  // Fallback loading state for static generation
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const characterArray = new Array(7).fill(0).map((_, index) => (
    <div key={index} className='flex flex-row gap-2 items-center mt-2'>
            <img src='https://img.mreadercdn.com/_m/100x100/100/8e/51/8e51b6913a1c21135765fbc0b783204f/8e51b6913a1c21135765fbc0b783204f.jpg' alt='character' className='w-12 h-12 rounded-full' />
            <div>

              <p className='text-lightText dark:text-darkText'>Character Name</p>
              <p className='text-lightText dark:text-darkText text-xs opacity-30'>Supporting</p>
            </div>
          </div>
  ))

  return (
    <div className='mx-auto max-w-7xl my-10 px-4 bg-white dark:bg-darkBg'>
      <MangaDetails />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg bg-white dark:bg-darkBg lg:col-span-2 m-2 p-2">
          <ChapterList />
        </div>
        <div className=" rounded-lg bg-white dark:bg-darkBg">
          <h3 className='text-lightText dark:text-darkText font-bold text-xl'>Characters</h3>
          {characterArray}
          <button
            className="mt-2 inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:opacity-75 w-full"
          >
            View All
          </button>
        </div>
      </div>

      {/* <h1>Manga: {mangaName}</h1>
      <p>ID: {id}</p> */}
      {/* Add your manga content and components here */}
    </div>
  );
};

// For static generation with dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch manga data from an API, database, or any source
  const mangas = [
    { mangaName: 'naruto', id: '1' },
    { mangaName: 'one-piece', id: '2' },
    // Add more manga data
  ];

  const paths = mangas.map((manga) => ({
    params: { mangaName: manga.mangaName, id: manga.id },
  }));

  return { paths, fallback: true };
};

// Fetch data for each dynamic route
export const getStaticProps: GetStaticProps = async (context) => {
  const { mangaName, id } = context.params as { mangaName: string; id: string };

  // Fetch manga details based on the mangaName and id
  return {
    props: {
      mangaName,
      id,
    },
  };
};

export default MangaPage;
