import React from "react";

const UserList = () => {
  return (
    <>
      <div className="bg-white shadow p-2 w-full md:w-56">
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-1 rounded-lg bg-violet-200 text-white w-full">
            <img
              src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
              alt="User profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold text-black text-sm">Bhaskar Sharma</p>
              <p className="text-black text-xs">Sales Manager | Sales Dept.</p>
            </div>
          </div>
          {Array(9)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 p-1 rounded-lg bg-neutral-200 w-full"
              >
                <img
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
                  alt="User profile"
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-black text-sm">
                    Bhaskar Sharma
                  </p>
                  <p className="text-gray-500 text-xs">
                    Sales Manager | Sales Dept.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
