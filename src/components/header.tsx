import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { darkBg, darkText } from '@/utils/color';
import Image from 'next/image';
import { HeaderProps } from '@/types/types';
import MobileHeader from './MobileHeader';



const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [show, setShow] = useState<Boolean | null>(null);


  return (
    <header className={`bg-secondary dark:bg-darkBg flex`}>
      <div className="mx-auto hidden md:flex h-16 w-full md:max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-0">
        <a className="p-4 md:flex hidden items-center flex-col text-primary dark:text-primary" href="#">

          <Image
            src="/manga-nest.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <span className='hidden xl:flex'>Manga Nest</span>
        </a>
        <div>

          <div className="relative">
            <label htmlFor="Search" className="sr-only"> Search For... </label>

            <input
              type="text"
              id="Search"
              placeholder="search Manga"
              className={`w-[420px] rounded-md border-gray-200 p-2.5 pe-10 shadow-sm sm:text-sm dark:border-darkBg dark:bg-darkInput dark:text-white`}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span className="sr-only">Search</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

              </button>
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-primary dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-primary dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Manga List
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-primary dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Latest
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-primary dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Popular
                </a>
              </li>
            </ul>
          </nav>



          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className='flex items-center justify-evenly gap-2'>
                <svg className='md:flex hidden' width="24px" height="24px" viewBox="0 0 24 24" fill={`${darkText}`} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C7.71983 1.25 4.25004 4.71979 4.25004 9V9.7041C4.25004 10.401 4.04375 11.0824 3.65717 11.6622L2.50856 13.3851C1.17547 15.3848 2.19318 18.1028 4.51177 18.7351C5.26738 18.9412 6.02937 19.1155 6.79578 19.2581L6.79768 19.2632C7.56667 21.3151 9.62198 22.75 12 22.75C14.378 22.75 16.4333 21.3151 17.2023 19.2632L17.2042 19.2581C17.9706 19.1155 18.7327 18.9412 19.4883 18.7351C21.8069 18.1028 22.8246 15.3848 21.4915 13.3851L20.3429 11.6622C19.9563 11.0824 19.75 10.401 19.75 9.7041V9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3764 19.537C13.1335 19.805 10.8664 19.8049 8.62349 19.5369C9.33444 20.5585 10.571 21.25 12 21.25C13.4289 21.25 14.6655 20.5585 15.3764 19.537ZM5.75004 9C5.75004 5.54822 8.54826 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V9.7041C18.25 10.6972 18.544 11.668 19.0948 12.4943L20.2434 14.2172C21.0086 15.3649 20.4245 16.925 19.0936 17.288C14.4494 18.5546 9.5507 18.5546 4.90644 17.288C3.57561 16.925 2.99147 15.3649 3.75664 14.2172L4.90524 12.4943C5.45609 11.668 5.75004 10.6972 5.75004 9.7041V9Z" /> </g></svg>


                <div className="hidden cursor-pointer md:flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                  <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="logo" />
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="theme-toggle"
                    className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 dark:bg-[#D69738] transition"
                  >
                    <input
                      type="checkbox"
                      id="theme-toggle"
                      className="peer sr-only"
                      checked={theme === 'dark'}
                      onChange={() => toggleTheme()}
                    />
                    <span
                      className="absolute inset-y-0 start-0 m-1 w-6 rounded-full bg-[#322514] transition-transform peer-checked:translate-x-6 dark:bg-[#322514]"
                    ></span>
                  </label>

                  <button
        onClick={toggleSidebar}
        className="p-2 text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400"
      >
        Filters {/* You can replace this text with an icon */}
      </button>
                </div>


              </div>
              {/* <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a> */}
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-darkBg dark:text-white dark:hover:text-white/75"
              onClick={() => setShow(!show)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </button>
          </div>
        </div>
      </div>


      {/* Mobile Header */}
      <MobileHeader show={show} setShow={setShow} />

    </header>
  );
};

export default Header;

{/* <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm font-medium bg-gray-300 dark:bg-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button> */}
