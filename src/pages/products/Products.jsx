import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./products.css";
const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Products</h1>
      </div>
    </div>
  );
};

export default Products;
