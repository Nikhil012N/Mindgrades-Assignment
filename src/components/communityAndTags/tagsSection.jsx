import Image from "next/image";
import React from "react";
import imageKI from "@/assets/keepup.png"
export default function TagSection() {
    const tags = ['Interview', 'Strategy', 'Economics', 'Sociology', 'Indian', 'History', 'Strategy', 'Sociology', 'Polity', 'Indian', 'History', 'Strategy', 'Sociology', 'Polity', 'Indian', 'History', 'Strategy', 'Sociology', 'Polity'];
  
    return (<>
        <div className="w-full h-auto py-4 relative">
        <Image
          src={imageKI}
          alt="Responsive"
          width={1200}
          height={400}
        />
      </div>
      <div className=" mb-4 border border-gray-300 rounded p-2">
        <h1 className="text-gray-600  text-xl border-gray-300 p-2 my-2">Tags</h1>
        <input
          type="text"
          placeholder="Search tags..."
          className="my-4 px-4 py-2 w-full border border-gray-300 rounded-md text-sm text-gray-700 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="flex flex-wrap justify-start">
          {tags.map((tag, index) => (
            (index + 1) % 4 === 0 ? (
              <React.Fragment key={index}>
                <span
                  className="mr-4 mb-2 inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-400"
                >
                  {tag}
                </span>
                <br className="block md:hidden" />
              </React.Fragment>
            ) : (
              <span
                key={index}
                className="mr-4 mb-2 inline-block rounded-full border border-gray-300 px-4 py-2 text-sm font-medium leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:bg-gray-500 dark:active:bg-gray-400"
              >
                {tag}
              </span>
            )
          ))}
        </div>
      </div>
      </>
    );
  }
  
  