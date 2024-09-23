import NewMangaCard from '@/components/NewMangaCard';
import { getLatestReleaseList, searchManga } from '@/services/mangaService';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import GridLoader from '@/components/content-loaders/GridLoader';
import { debounce } from '@/utils/debounce';
import LoadingGif from '@/components/content-loaders/Loading';

const AllListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const ITEMS_PER_PAGE = 12;

  // Fetch latest releases if no search query
  const { data: releaseListAll, isLoading: isReleaseAllLoading } = useQuery({
    queryKey: ['releaseList', currentPage],
    queryFn: () => getLatestReleaseList(currentPage),
    enabled: !debouncedQuery, // Only fetch latest releases if no debounced query
  });

  // Fetch search results if there is a debounced query
  const { data: searchResults, isLoading: isSearchLoading } = useQuery({
    queryKey: ['searchManga', debouncedQuery, currentPage],
    queryFn: () => searchManga(debouncedQuery, currentPage),
    enabled: !!debouncedQuery, // Only fetch search results if there is a debounced query
  });

  // Combine results based on search state
  const results = debouncedQuery ? searchResults?.results || [] : releaseListAll?.results || [];

  console.log("results", results)

  // Pagination logic
  const paginatedResults = results.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

  // Debounced search handler
  useEffect(() => {
    const handler:any = debounce((query: string) => {
      setDebouncedQuery(query);
      setCurrentPage(1); 
    }, 2000); 

    handler(searchQuery);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  if (isReleaseAllLoading) {
    return <GridLoader />;
  }

  return (
    <div className='mx-20 my-10 w-full md:mx-0 md:my-0 md:w-auto'>
      <div className='text-center py-10'>
        <h1 className='text-2xl text-lightText dark:text-darkText'>Explore Your Favorite Manga</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="relative">
          <input
            type="text"
            className="h-12 w-[550px] pr-8 pl-5 bg-secondary text-white rounded z-0 focus:shadow focus:outline-none"
            placeholder="Search your favorite manga..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
      </div>

      {/* List */}
      {isSearchLoading ? <><LoadingGif /></> :<div className='mx-auto max-w-screen-xl lg:items-center mt-10'>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {paginatedResults.map((item:any, index:number) => (
            <NewMangaCard
              key={index}
              mangId={item?.id}
              title={item?.title}
              author={item?.author || 'Hajime Isayama'}
              views={item?.views || 1200000}
              posterUrl={item?.img || 'https://m.media-amazon.com/images/I/51fpiDh74UL.jpg'}
            />
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 mx-2 bg-secondary w-10 h-10 rounded-full hover:bg-primary flex items-center justify-center cursor-pointer text-white"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &larr;
          </button>

          <span className="px-4 py-2 text-gray-400">Page {currentPage} of {totalPages}</span>

          <button
            className="px-4 py-2 mx-2 bg-secondary w-10 h-10 rounded-full hover:bg-primary flex items-center justify-center cursor-pointer text-white"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &rarr;
          </button>
        </div>
      </div>}
    </div>
  );
};

export default AllListPage;
