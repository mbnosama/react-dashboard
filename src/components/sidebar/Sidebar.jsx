import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>Dashboard</h2>
      </div>
      <div className="sidebar-list">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>Products</li>
          </Link>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>Customers</li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>Orders</li>
          </Link>
          <Link to="/suppliers" style={{ textDecoration: "none" }}>
            <li>Suppliers</li>
          </Link>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <li>Employees</li>
          </Link>
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>Reports</li>
          </Link>
        </ul>
      </div>
      <hr />

      <div className="bottom">
        <h4>bottom</h4>
      </div>
    </div>
  );
};

export default Sidebar;
