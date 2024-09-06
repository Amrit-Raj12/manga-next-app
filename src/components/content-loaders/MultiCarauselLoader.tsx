import React from 'react';
import ContentLoader from 'react-content-loader';

const MultiCarauselLoader: React.FC = () => {
  return (
    <div className="flex space-x-4 mx-8 mb-8">
      {Array.from({ length: 7 }).map((_, index) => (
        <ContentLoader
          key={index}
          speed={2}
        //   width={150}
        //   height={200}
          viewBox="0 0 150 200"
          backgroundColor="#322514"
        foregroundColor="#676565"
          className="w-full"
        >
          <rect x="0" y="0" rx="8" ry="8" className='w-64 h-96'/>
      
        </ContentLoader>
      ))}
    </div>
  );
};

export default MultiCarauselLoader;
