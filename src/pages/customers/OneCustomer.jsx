import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const OneCustomer = () => {
  return (
    <div>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>One Cosy</h1>
      </div>
    </div>
  );
};

export default OneCustomer;
