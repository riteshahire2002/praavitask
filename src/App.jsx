import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Attendance from "./components/Attendance";
const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Header />
          <div className="flex flex-col md:flex-row">
            <UserList />
            <div className="flex-grow p-4 space-y-4">
              <UserDetails />
              <Attendance />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
