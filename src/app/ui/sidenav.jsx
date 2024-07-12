"use client";

import { useState } from "react";
import { menu } from "../lib/placeholder-data";
import Link from "next/link";

export function SideNav() {
  const [state, setstate] = useState(false);
  const HandleNav = () => {
    if (state === !true) {
      setstate(true);
    } else {
      setstate(false);
    }
    console.log("active");
  };

  return (
    <>
      {state === false ? (
        <div className="self-end p-6 md:hidden">
          <button
            className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold"
            type="button"
            onClick={HandleNav}>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
            </svg>
          </button>
        </div>
      ) : (
        <div
          id="drawer-navigation"
          className="fixed top-0 right-0 z-40 w-64 h-screen p-4 transition-transform  bg-white dark:bg-gray-800"
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Menu
          </h5>
          <button
            type="button"
            onClick={HandleNav}
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 max-h-screen">
            <ul className="flex flex-col overflow-y-auto items-start">
              {menu.map((data) => (
                <li key={data.nombre}>
                  <Link
                    href={data.href}
                    onTouchEnd={HandleNav}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18">
                      {data.path}
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {data.nombre}
                    </span>
                    {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
