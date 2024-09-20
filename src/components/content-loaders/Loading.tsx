import React from 'react';

const LoadingGif: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="https://media.tenor.com/UA8ZIMdWVfkAAAAi/cute-love.gif"
        alt="Loading..."
        className="w-24 h-24"
      />
    </div>
  );
};

export default LoadingGif;
