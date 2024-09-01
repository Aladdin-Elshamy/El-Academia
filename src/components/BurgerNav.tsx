import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
export default function BurgerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="font-display">
      <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between py-4 md:gap-6">
        <a href="#" className="flex items-center rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            El-Academia
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full mt-4 md:mt-0 md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col bg-red-50 sm:bg-transparent md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-bold justify-center md:items-center">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white md:dark:text-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <div className="md:hidden w-full md:block md:w-auto">
              <button className="text-[#96BB7C] font-semibold mt-2 py-2 sm:mt-0 md:ml-5 w-full">
                Login
              </button>
              <button className="py-2 px-3 text-white rounded mt-2 sm:mt-0 font-semibold flex items-center gap-4 justify-center bg-[#96BB7C] px-4 py-2 w-full">
                <span>JOIN US</span>
                <FaArrowRight />
              </button>
            </div>
          </ul>
        </div>
        <div className="hidden w-full md:flex md:w-auto gap-4 justify-center md:items-center">
          <button className="text-[#96BB7C] hover:text-green-400 font-semibold md:ml-5">
            Login
          </button>
          <button className="py-4 px-3 text-white rounded font-semibold flex items-center gap-4 justify-center hover:bg-green-400 bg-[#96BB7C] px-4 py-2">
            <span className="text-white text-xs">JOIN US</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </nav>
  );
}
