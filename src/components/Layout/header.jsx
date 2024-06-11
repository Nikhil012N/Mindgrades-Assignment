"use client";
import { useState } from "react";
import { MdPermPhoneMsg, MdOutlineLocalFireDepartment } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 ">
        <div className="flex-shrink-0 lg:font-bold lg:text-2xl sm:text-2xl">
          Welcome Rahul!
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M1 1l15 15M1 16L16 1" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
  <ul className="font-medium self-start gap-4 flex flex-col p-2 md:p-0 mt-2 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
      <button className="flex items-center justify-center px-2 py-1 bg-white border-2 rounded-full border-neon text-yellow-500 font-semibold  space-x-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-neon">
        <MdOutlineLocalFireDepartment className="w-6 h-6" />
        <span className="text-black">2</span>
      </button>
    </li>
    <li>
      <button
        type="button"
        className="transition-all duration-200 border border-blue-600 text-blue-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      >
        Explore Community
      </button>
    </li>
    <li>
      <select className="text-white sm:w-auto bg-gradient-to-r sm:align-baseline from-blue-900 via-blue-800 to-blue-500 hover:bg-gradient-to-r  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pr-10 pl-2 py-2 text-left inline-flex items-center dark:focus:ring-[#4285F4]/55 w-full max-w-xs h-9">
        <option selected>Polity</option>
      </select>
    </li>
    <li className="flex items-center justify-center">
      <MdPermPhoneMsg className="text-blue-600 w-6 h-6" />
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
};

export default Header;
