import React, { useRef, useState, useEffect } from 'react';

interface VerticalComicReaderProps {
    images: string[];
}

const VerticalComicReader: React.FC<VerticalComicReaderProps> = ({ images }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Handle scroll up
    const handleScrollUp = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth',
            });
        }
    };

    // Handle scroll down
    const handleScrollDown = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth',
            });
        }
    };

    // Scroll to topmost position
    const scrollToTop = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    // Scroll to bottommost position
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    // Check if at top or bottom of the container
    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            setIsAtTop(scrollTop === 0);
            setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="relative w-full h-screen">
            {/* Comic Images */}
            <div
                ref={containerRef}
                className="w-full h-full overflow-y-scroll scrollbar-hidden flex flex-col items-center gap-4 py-4"
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Comic Page ${index + 1}`}
                        className="max-w-full w-[816px] h-auto shadow-lg border-double border-8 border-primary"
                    />
                ))}
            </div>

            {!isAtTop && <button onClick={scrollToTop} className="absolute right-4 top-[15%] transform -translate-y-full p-3 bg-primary text-white rounded-full shadow-lg hover:opacity-80 text-sm">
                Scroll To Top
            </button>}

            {/* Scroll Up Button */}
            {!isAtTop && (
                <button
                    onClick={handleScrollUp}
                    className="absolute right-52 top-[85%] transform -translate-y-full p-3 bg-primary text-white rounded-full shadow-lg hover:opacity-80 animate-bounce"
                >
                    <svg className="w-6 h-6 text-gray-900 rotate-180" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            )}

            {/* Scroll Down Button */}
            {!isAtBottom && (
                <button
                    onClick={handleScrollDown}
                    className="absolute right-52 bottom-4 p-3 bg-primary text-white rounded-full shadow-lg hover:opacity-80 animate-bounce"
                >
                    <svg className="w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            )}

            {!isAtBottom && <button onClick={scrollToBottom} className="absolute right-4 bottom-0 transform -translate-y-full p-3 bg-primary text-white rounded-full shadow-lg hover:opacity-80 text-sm">
                Scroll To Bottom
            </button>}
        </div>
    );
};

export default VerticalComicReader;
