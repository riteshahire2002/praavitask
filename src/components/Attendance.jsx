import {
  faChevronDown,
  faComment,
  faEllipsisV,
  faLink,
  faMapMarkerAlt,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React from "react";

const Attendance = () => {
  const data = [
    {
      date: "M 31-Jun-2025",
      planned: "09:00 AM - 06:30 PM 09:00 H",
      actual: "09:01 AM - 06:32 PM 09:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P",
      finalAtt: "P",
    },
    {
      date: "M 30-Jun-2025",
      planned: "09:00 AM - 06:30 PM 09:00 H",
      actual: "09:01 AM - 06:32 PM 09:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P",
      finalAtt: "P",
    },
    {
      date: "W 29-Jun-2025",
      planned: "09:00 AM - 06:30 PM 09:00 H",
      actual: "09:01 AM - 02:32 PM 04:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P",
      finalAtt: "HD",
    },
    {
      date: "T 28-Jun-2025",
      planned: "09:00 AM - 06:30 PM 09:00 H",
      actual: "09:01 AM - 09:32 PM 12:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + OT",
      finalAtt: "P + OT",
    },
    {
      date: "F 27-Jun-2025",
      planned: "09:00 AM - 06:30 PM 09:00 H",
      actual: "09:00 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P - LT",
      finalAtt: "P - LT",
    },
    {
      date: "S 26-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 06:32 PM 09:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO",
      finalAtt: "P + WO",
    },
    {
      date: "S 25-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 06:32 PM 09:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO + OT",
      finalAtt: "P + WO + OT",
    },
    {
      date: "M 24-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "T 23-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "W 22-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "T 21-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "F 20-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "S 19-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "S 18-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "M 17-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "T 16-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "W 15-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "T 14-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "F 13-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "S 12-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "S 11-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "M 10-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "T 9-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "W 8-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
    {
      date: "T 7-Jun-2025",
      planned: "-:-",
      actual: "09:01 AM - 05:32 PM 08:01 H",
      fine: "+₹500",
      bonus: "+₹900",
      error: "",
      calAtt: "P + WO - LT",
      finalAtt: "P + WO - LT",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-xs">
          <thead>
            <tr className="bg-white">
              <th className="border border-gray-200 px-2 py-1">Date</th>
              <th className="border border-gray-200 px-2 py-1">
                Time planned + WH
              </th>
              <th className="border border-gray-200 px-2 py-1">Actual Time</th>
              <th className="border border-gray-200 px-2 py-1">Fine/Bonus</th>
              <th className="border border-gray-200 px-2 py-1">Error</th>
              <th className="border border-gray-200 px-2 py-1">Cal. Att.</th>
              <th className="border border-gray-200 px-2 py-1">Final Att.</th>
              <th className="border border-gray-200 px-2 py-1"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-200 px-2 py-1">{row.date}</td>
                <td className="border border-gray-200 px-2 py-1">
                  {row.planned}
                </td>
                <td className="border border-gray-200 px-2 py-1">
                  {row.actual}
                </td>
                <td
                  className={`border border-gray-200 px-2 py-1 ${
                    row.fine.startsWith("+") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <div className="flex items-center justify-between w-full px-1">
                    <div className="flex items-center gap-x-2">
                      <span>{row.fine}</span>
                      <span className="line-through text-gray-500 text-xs">
                        {row.bonus}
                      </span>
                    </div>
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      className="text-gray-500 text-xs"
                    />
                  </div>
                </td>

                <td className="border border-gray-200 px-2 py-1">
                  <div className="flex items-center justify-center space-x-1">
                    {index >= 2 && (
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-red-500 text-[10px]"
                      />
                    )}
                    {index >= 3 && (
                      <FontAwesomeIcon
                        icon={faStopwatch}
                        className="text-red-500 text-[10px]"
                      />
                    )}
                    {index >= 3 && (
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-red-500 text-[10px]"
                      />
                    )}
                  </div>
                </td>
                <td className="border border-gray-200 px-2 py-1 text-green-500">
                  {row.calAtt}
                </td>
                <td className="border border-gray-200 px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <span>{row.finalAtt}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-gray-600 text-xs"
                    />
                  </div>
                </td>
                <td className="border border-gray-200 px-2 py-1">
                  <div className="flex items-center justify-center space-x-2">
                    <FontAwesomeIcon
                      icon={faLink}
                      className="text-black text-xs cursor-pointer"
                    />
                    <span className="text-sm">3</span>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-black text-xs cursor-pointer"
                    />
                    <span className="text-sm">3</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-black text-xs cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Attendance;
