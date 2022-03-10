import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// css
import "./suppliers.css";
const Suppliers = () => {
  return (
    <div className="suppliers">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Suppliers</h1>
      </div>
    </div>
  );
};

export default Suppliers;
