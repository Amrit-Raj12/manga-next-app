import ChapterList from '@/components/ChapterList';
import MangaDetails from '@/components/MangaDetails';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface MangaPageProps {
  mangaData: any; 
}

const MangaPage: React.FC<MangaPageProps> = ({ mangaData }) => {
  const router = useRouter();

  // Fallback loading state for SSR
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log("mangaData",mangaData);

  const characterArray = new Array(7).fill(0).map((_, index) => (
    <div key={index} className='flex flex-row gap-2 items-center mt-2'>
      <img
        src='https://img.mreadercdn.com/_m/100x100/100/8e/51/8e51b6913a1c21135765fbc0b783204f/8e51b6913a1c21135765fbc0b783204f.jpg'
        alt='character'
        className='w-12 h-12 rounded-full'
      />
      <div>
        <p className='text-lightText dark:text-darkText'>Character Name</p>
        <p className='text-lightText dark:text-darkText text-xs opacity-30'>Supporting</p>
      </div>
    </div>
  ));

  return (
    <div className='mx-auto max-w-7xl my-10 px-4 bg-white dark:bg-darkBg'>
      <MangaDetails mangaData={mangaData} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg bg-white dark:bg-darkBg lg:col-span-2 m-2 p-2">
          <ChapterList mangaData={mangaData} />
        </div>
        <div className="rounded-lg bg-white dark:bg-darkBg">
          <h3 className='text-lightText dark:text-darkText font-bold text-xl'>Characters</h3>
          {characterArray}
          <button
            className="mt-2 inline-block rounded bg-primary px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:opacity-75 w-full"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

// Fetch data for each request (Server-Side Rendering)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mangaName, id } = context.params as { mangaName: string; id: string };

  // Fetch manga details from your API
  const response = await fetch(`https://manga-server-api.vercel.app/api/manga/${id}`);
  const mangaData = await response.json();

  // Check if manga data exists
  if (!mangaData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mangaData, // Pass the fetched manga data as a prop
    },
  };
};

export default MangaPage;
