import React from "react";

const SiteIsDown: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/down.webp')" }}>
      <div className="bg-[#322514] bg-opacity-80 p-8 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-4xl font-bold text-primary mb-4">We're Down for Maintenance</h1>
        <p className="text-white mb-6">
          Our site is currently undergoing maintenance. We apologize for the inconvenience and appreciate your patience.
        </p>
        <p className="text-gray-500 bg-primary">Please check back later.</p>
      </div>
    </div>
  );
};

export default SiteIsDown;
