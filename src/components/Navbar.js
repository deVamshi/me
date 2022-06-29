import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo pointer nav-link-item">
        <a href="https://github.com/deVamshi" target="_blank">
          deVamshi
        </a>
      </div>
      <div className="nav-links">
        <div className="pointer nav-link-item">About</div>
        <div className="pointer nav-link-item">Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
