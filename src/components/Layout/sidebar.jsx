"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DiAptana } from "react-icons/di";
import { CgProfile } from "react-icons/cg";
import { BiSolidFilePdf } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { PiNotebookBold } from "react-icons/pi";
import { TbGraphFilled } from "react-icons/tb";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-row text-gray-800">
      <div
        className={`fixed ${
          isOpen ? "w-64" : "w-20"
        } top-0 left-0 h-full bg-white border-r transition-width duration-300`}
      >
        <div className="flex items-center justify-between h-14  px-3">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
              <DiAptana className="w-8 h-8 text-blue-900" />
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex flex-col h-full">
          <ul className="flex flex-col py-4 space-y-1 flex-grow">
            <li>
              <Link href="#" className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center w-12">
                  <BsFillQuestionSquareFill className="w-5 h-5" />
                </span>
                {isOpen && <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center w-12">
                  <FaClipboardCheck className="w-6 h-6" />
                </span>
                {isOpen && <span className="ml-2 text-sm tracking-wide truncate">Inbox</span>}
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center w-12">
                  <PiNotebookBold className="w-6 h-6" />
                </span>
                {isOpen && <span className="ml-2 text-sm tracking-wide truncate">Book</span>}
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center w-12">
                  <TbGraphFilled className="w-6 h-6" />
                </span>
                {isOpen && <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col py-4 space-y-1 mt-auto mb-10">
            <li>
              <Link href="#" className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center w-12">
                  <BiSolidFilePdf className="w-8 h-8 text-blue-900 text-3xl" />
                </span>
                {isOpen && <span className="ml-2 text-sm tracking-wide truncate">PDF</span>}
              </Link>
            </li>
            <li>
              <Link href="#" className="relative flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center w-12">
                  <CgProfile className="w-8 h-8 text-blue-900 text-3xl" />
                </span>
                {isOpen && <span className="ml-2 text-sm tracking-wide truncate">Profile</span>}
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
      <div className={`flex-grow ${isOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
