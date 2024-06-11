"use client";
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { AiFillLike, AiFillComment } from "react-icons/ai";

const CommunitySection = () => {
  return (
    <div className="container mx-auto ">
      <div>
        <h1 className="text-xl font-bold">Community</h1>
      </div>
      <div className="mt-4 flex items-center border-b py-2">
  {/* Span Tags */}
  <div className="flex flex-wrap gap-2 place-items-center w-full">
    <span className="inline-block rounded-full border border-blue-500 px-4 py-2 text-sm font-medium leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg dark:bg-gray-600 dark:text-gray-200 dark:active:bg-gray-400">
      All
    </span>
    <span className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-400">
      Preparation Strategy
    </span>
    <span className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-400">
      Interview
    </span>
    <button className="sm:float-left ml-auto flex items-center gap-2 rounded-full border bg-blue-600 text-white px-4 py-2 text-sm font-medium leading-normal shadow-md transition duration-150 ease-in-out dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-400">
      <FaPenToSquare />
      <span> Write</span>
    </button>
  </div>
</div>


    </div>
  );
};

export default CommunitySection;
