//css
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./employees.css";
const Employees = () => {
  return (
    <div className="employees">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Employees</h1>
      </div>
    </div>
  );
};

export default Employees;
