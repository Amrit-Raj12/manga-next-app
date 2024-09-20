import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import ReadSideBar from '@/components/ReadSideBar';
import ReadMode from '@/components/ReadMode';
import { useState } from 'react';

type ChapterPageProps = {
  mangaTitle: string;
  mangaId: string;
  chapter: string;
  chapterData: any;
};


const ChapterPage: NextPage<ChapterPageProps> = ({ mangaTitle, mangaId, chapter, chapterData }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // console.log('chapterData', chapterData)

  return (
    <div className='relative h-screen'>
      <ReadSideBar title={mangaTitle} chapterData={chapterData} mangaId={mangaId} setIsLoading={setIsLoading} />
      <ReadMode chapterData={chapterData} isLoading={isLoading} />
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { mangaTitle, mangaId, chapter } = context.query;

  const apiUrl = `https://manga-api-v1.vercel.app/fetch-chapter/${mangaId}/${chapter}`;

  let chapterData = null;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    chapterData = await response.json();
  } catch (error) {
    console.error(error);
  }

  // Pass the data to the page via props
  return {
    props: {
      mangaTitle: mangaTitle || '',
      mangaId: mangaId || '',
      chapter: chapter || '',
      chapterData,
    },
  };
};

export default ChapterPage;
