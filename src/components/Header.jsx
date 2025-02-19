import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSliders,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="flex bg-neutral-300 border border-neutral-300 rounded overflow-hidden">
        <button className="px-5 py-2 text-gray-500 bg-neutral-300 border-r">
          Atten. Team (Admin)
        </button>
        <button className="px-5 py-2 text-gray-500 bg-neutral-300 border-r">
          Org. Details (Admin)
        </button>
        <button className="px-5 py-2 text-gray-500 bg-neutral-300 border-r">
          In/Out Logs
        </button>
        <button className="px-5 py-2 text-gray-500 bg-neutral-300 border-r">
          Finalize Atten.
        </button>
        <button className="px-5 py-2 text-gray-500 bg-neutral-300 border-r">
          Manage Employees
        </button>
        <button className="px-5 py-2 text-blue-800 font-semibold bg-white border-r">
          Final Reports
        </button>
        <button className="px-5 py-2 text-gray-500 bg-neutral-300 border-r">
          Error Reports
        </button>
        <button className="px-29.5 py-2 text-blue-800 font-semibold bg-neutral-300 rounded-r">
          Attendance Module
        </button>
      </div>

      <div className="flex items-center justify-between p-3 bg-gray-50">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center space-x-1 px-4 py-1">
            <FontAwesomeIcon icon={faSliders} />
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-1 px-4 py-1 rounded-full border border-gray-300">
            <span>Rows</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <button className="flex items-center space-x-1 px-4 py-1 rounded-full border border-gray-300">
            <span>July</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 px-4 py-1 rounded-full bg-blue-600 text-white">
            <span>Export</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <button className="flex items-center space-x-1 px-4 py-1 rounded-full border border-gray-300">
            <span>Detailed View</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
