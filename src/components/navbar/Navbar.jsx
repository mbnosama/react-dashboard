import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <input type="search" placeholder="search...." />
      </div>
      <div className="navbar-items">
        <div className="navbar-one-item"> dark&light</div>
        <div className="navbar-one-item"> English</div>
        <div className="navbar-one-item"> user</div>
      </div>
    </div>
  );
};

export default Navbar;
