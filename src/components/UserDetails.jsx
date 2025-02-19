import React from "react";

const UserDetails = () => {
  return (
    <>
      <div className="bg-white shadow p-2 flex flex-col items-center md:items-start md:flex-row md:space-x-4 border border-transparent rounded-2xl w-full md:w-[100%] lg:w-[100%] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-4 w-96">
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt="Profile picture of Bhaskar Sharma"
              className="rounded-full w-14 h-14"
            />
            <div>
              <p className="font-semibold">Bhaskar Sharma</p>
              <p className="text-gray-500 text-sm">
                Sales Manager | Sales Dept.
              </p>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-left">
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    {" "}
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    P
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    A
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    WO
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    ∑ Bonus /Fine
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    OT
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    LT
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    OT+LT
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    Final Att.
                  </th>
                  <th className="border border-gray-300 px-3 py-2 font-semibold">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    Cal.
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    17.5
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    2.5
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    11
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    +2000
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    17:32 H
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    -12:00 H
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    05:32 H
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    20
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-500">
                    Finalised by Rahul
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    Final
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    23.5
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    3.5
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    4
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    +400
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    12:30 H
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    -19:00
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    -06:30 H
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold">
                    27
                  </td>
                  <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-500">
                    Locked by Shriniwas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
