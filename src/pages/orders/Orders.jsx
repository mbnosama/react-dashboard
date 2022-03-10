import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

// css
import "./orders.css";

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Orders</h1>
      </div>
    </div>
  );
};

export default Orders;
