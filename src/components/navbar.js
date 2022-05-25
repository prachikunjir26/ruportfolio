import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="bg-transperant">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center ">
            <a href="https://prachikunjir26.github.io/prachiportfolio/" className="text-white flex-shrink-0 font-poppins">
              Home
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/education"
                >
                  Education
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/work"
                >
                  Work
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="white"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden">
          <div className="md-px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="https://prachikunjir26.github.io/prachiportfolio/"
            >
              Home
            </a>
            <a
              className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/about"
            >
              About
            </a>
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/education"
            >
              Education
            </a>
            <a
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/work"
            >
              Work
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
