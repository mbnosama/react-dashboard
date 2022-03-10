import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

//css
import "./reports.css";

const Reports = () => {
  return (
    <div className="reports">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Reports</h1>
      </div>
    </div>
  );
};

export default Reports;
