import { Chapter } from '@/types/types';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

type InfiniteScrollListProps = {
  fetchData: (page: number) => Promise<Chapter[]>;
  sortOrder: string;
  items: Chapter[];
  setItems: React.Dispatch<React.SetStateAction<Chapter[]>>;
};

const InfiniteScrollList: React.FC<InfiniteScrollListProps> = ({ fetchData, sortOrder, items, setItems }) => {
  // const [items, setItems] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Sorting order state
  const observer = useRef<IntersectionObserver | null>(null);

  // Fetch data when the page changes
  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      const newItems = await fetchData(page);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
    };
    loadItems();
  }, [page, fetchData]);

  // Infinite scroll logic
  const lastItemRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  // Extract chapter number from chapter name (e.g., "Chapter 1" -> 1)
  const extractChapterNumber = (chapterName: string) => {
    const match = chapterName.match(/chapter (\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Sort the items based on the chapter name and selected sort order
  const sortedItems = [...items].sort((a, b) => {
    const chapterA = extractChapterNumber(a.name);
    const chapterB = extractChapterNumber(b.name);

    if (sortOrder === 'asc') {
      return chapterA - chapterB;
    } else {
      return chapterB - chapterA;
    }
  });

  console.log("sortedItems", sortedItems)

  return (
    <div className="w-full">
      

      {/* Infinite Scroll List */}
      <ul className="space-y-4">
        {sortedItems.map((item, index) => (
          <li
            key={index}
            ref={index === items.length - 1 ? lastItemRef : null}
            className="flex justify-between items-center p-4 bg-white dark:bg-[#1A1A1A] shadow rounded text-lightText dark:text-darkText"
          >
            <div>
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">Views: {item.view}</p>
              <p className="text-sm text-gray-400">Published: {item.createdAt}</p>
            </div>
            <Link
              href={`/read/${item.name}/${item.path.split('/').slice(2).join('/')}`}
              className="flex flex-row gap-2 bg-[#5F5F5F] rounded p-2 text-lightText dark:text-darkText cursor-pointer hover:bg-primary"
            >
              <svg width="24px" height="24px" className="fill-darkText" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14ZM10.4649 10C9.77325 8.8044 8.48056 8 7 8C5.13616 8 3.57006 9.27477 3.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3.12602C3.57006 14.7252 5.13616 16 7 16C9.20914 16 11 14.2091 11 12H13C13 14.2091 14.7909 16 17 16C18.8638 16 20.4299 14.7252 20.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20.874C20.4299 9.27477 18.8638 8 17 8C15.5194 8 14.2267 8.8044 13.5351 10H10.4649ZM15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12Z"
                  />
                </g>
              </svg>
              <p>Read</p>
            </Link>
          </li>
        ))}
      </ul>
      {loading && <p className="text-center mt-4 text-lightText dark:text-darkText">Loading...</p>}
    </div>
  );
};

export default InfiniteScrollList;
