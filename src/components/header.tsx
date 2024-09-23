import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { darkBg, darkText } from '@/utils/color';
import Image from 'next/image';
import { HeaderProps } from '@/types/types';
import MobileHeader from './MobileHeader';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { useRouter } from 'next/router';



const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [show, setShow] = useState<Boolean | null>(null);

  const router = useRouter();

  //get current route
  const currentRoute = router.pathname;

  if (currentRoute.includes('/read')) return null;

  const isActiveLink = (href: string) => router.pathname === href;

  return (
    <header className={`bg-secondary dark:bg-darkBg flex`}>
      <div className="mx-auto hidden md:flex md:justify-between h-16 w-full md:max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-0">
        <div>

        <Link className="p-4 md:flex hidden items-center flex-col text-primary dark:text-primary" href="/">

          <Image
            src="/manga-nest.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <span className='hidden xl:flex'>Manga Nest</span>
        </Link>
        </div>
        {/* <div>

          {isActiveLink("/all-list") &&<div className="relative">
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
          </div>}
        </div> */}

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                 className={`text-white transition hover:text-primary dark:text-white dark:hover:text-white/75 ${
                  isActiveLink("/") ? "border-b-2 border-primary" : ""
                }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white transition hover:text-primary dark:text-white dark:hover:text-white/75 ${
                    isActiveLink("/all-list") ? "border-b-2 border-primary" : ""
                  }`}
                  href="/all-list"
                >
                  Manga List
                </Link>
              </li>

              <li>
                <Link
                  className={`text-white transition hover:text-primary dark:text-white dark:hover:text-white/75 ${
                    isActiveLink("/latest") ? "border-b-2 border-primary" : ""
                  }`}
                  href="/latest"
                >
                  Latest
                </Link>
              </li>

              <li>
                <Link
                  className={`text-white transition hover:text-primary dark:text-white dark:hover:text-white/75 ${
                    isActiveLink("/popular") ? "border-b-2 border-primary" : ""
                  }`}
                  href="/popular"
                >
                  Popular
                </Link>
              </li>
            </ul>
          </nav>



          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">

              <div className='flex items-center justify-evenly gap-2'>


                {/* Later Use */}
                {/* <div className="hidden cursor-pointer md:flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                  <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png" alt="logo" />
                </div> */}

                <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                <div className="hidden items-center">
                  <button
                    onClick={toggleSidebar}
                    className="p-2 text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer"
                  >
                    Filters {/* You can replace this text with an icon */}
                  </button>
                </div>


              </div>
              {/* <Link
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                href="/"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Register
              </Link> */}
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
