import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

// css
import "./customers.css";

const Customers = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Customers</h1>
      </div>
    </div>
  );
};

export default Customers;
