import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="navbar navbar-expand-md mainlayout" style={{position:"sticky",top:"0",zIndex:"100"}}>
      <div className="container ">
        {/* Left: Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle: Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 nav-menu">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/#about" },
              { name: "Working Sector", path: "/working-sector" },
            ].map(({ name, path }) =>
              name === "About Us" ? (
                <li
                  key={name}
                  className={`nav-item ${
                    activeMenu === name ? "active-menu" : ""
                  }`}
                  onClick={() => handleMenuClick(name)}
                >
                  <HashLink className="nav-link" smooth to={path}>
                    {name}
                  </HashLink>
                </li>
              ) : (
                <li
                  key={name}
                  className={`nav-item ${
                    activeMenu === name ? "active-menu" : ""
                  }`}
                  onClick={() => handleMenuClick(name)}
                >
                  <Link className="nav-link" to={path}>
                    {name}
                  </Link>
                </li>
              )
            )}
            {/* Dropdown Menu for Services */}
            <li className="nav-item dropdown">
  <Link
    className={`nav-link dropdown-toggle ${
      activeMenu === "Services" ? "active-menu" : ""
    }`}
    to="#"
    id="servicesDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    onClick={() => handleMenuClick("Services")}
  >
    Services
  </Link>
  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
    {[
      { name: "Fabrication", path: "/services/fabrication" },
      { name: "Machining", path: "/services/machining" },
      { name: "Laser Cutting", path: "/services/laser-cutting" },
      { name: "Powder Coating", path: "/services/powder-coating" },
    ].map(({ name, path }) => (
      <li key={name}>
        <Link className="dropdown-item" to={path}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
</li>


            {/* Add Contact Button in Menu for Mobile View */}
            <li className="nav-item d-md-none">
              <Link to="/contact" className="btn nav-btn mt-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Button (Visible in Large Viewports Only) */}
        <div className="d-none d-md-flex ms-auto">
          <Link to="/contact" className="btn nav-btn">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
