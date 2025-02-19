import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUsers,
  faPowerOff,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="bg-blue-800 text-white w-14 md:w-14 h-screen flex flex-col items-center py-4">
        <div className="flex flex-col items-center mb-4">
          <p className="mb-3 p-2 text-xl font-normal">P</p>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center border-t-1 border-b-1 border-gray-400 w-3xs pt-2 pb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full mb-1">
                <img
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
                  alt="profile"
                  className="w-10 h-10 bg-gray-300 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-white border-2 border-blue-200 rounded-md p-2 backdrop-blur-md"
          />
          <FontAwesomeIcon icon={faUsers} />
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className="mt-auto mb-20">
          <FontAwesomeIcon icon={faPowerOff} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
