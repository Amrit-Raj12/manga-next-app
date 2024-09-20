import React, { useRef, useState, useEffect } from 'react';

interface HorizontalComicReaderProps {
    images: string[];
}

const HorizontalComicReader: React.FC<HorizontalComicReaderProps> = ({ images }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);

    // Scroll to the specific page
    const scrollToPage = (pageIndex: number) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: pageIndex * window.innerWidth,
                behavior: 'smooth',
            });
        }
    };

    // Handle click to go to the previous page
    const handlePrevPage = () => {
        if (currentPage > 0) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            scrollToPage(newPage);
        }
    };

    // Handle click to go to the next page
    const handleNextPage = () => {
        if (currentPage < images.length - 1) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            scrollToPage(newPage);
        }
    };

    // Set up resizing logic to adjust scroll when window is resized
    useEffect(() => {
        const handleResize = () => {
            scrollToPage(currentPage);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentPage]);

    return (
        <div className="relative w-full h-screen">
            {/* Comic Images */}
            <div
                ref={containerRef}
                className="w-full h-full overflow-hidden flex flex-row"
                style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Comic Page ${index + 1}`}
                        className="w-full h-full object-contain"
                        style={{ scrollSnapAlign: 'center' }}
                    />
                ))}
            </div>

            {/* Previous Page Button */}
            {currentPage > 0 && (
                <button
                    onClick={handlePrevPage}
                    className="absolute left-4 top-[50%] transform -translate-y-1/2 p-3 bg-primary text-white rounded-full shadow-lg hover:opacity-80"
                >
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            )}

            {/* Next Page Button */}
            {currentPage < images.length - 1 && (
                <button
                    onClick={handleNextPage}
                    className="absolute right-4 top-[50%] transform -translate-y-1/2 p-3 bg-primary text-white rounded-full shadow-lg hover:opacity-80"
                >
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default HorizontalComicReader;
