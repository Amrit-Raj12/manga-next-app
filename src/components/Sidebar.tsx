import React from "react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-darkBg shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        className="p-4 text-right text-gray-600 dark:text-gray-400"
        onClick={closeSidebar}
      >
        &times; {/* Close Icon */}
      </button>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Category</h3>
          <ul>
            <li>
              <input type="checkbox" id="category1" name="category1" />
              <label htmlFor="category1" className="ml-2">Category 1</label>
            </li>
            <li>
              <input type="checkbox" id="category2" name="category2" />
              <label htmlFor="category2" className="ml-2">Category 2</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
