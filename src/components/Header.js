import React, { useState } from "react";


const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        {/* Left: Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="d-inline-block align-text-top"
          />
        </a>

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
              "Home",
              "About Us",
              "Services",
              "Working Sector",
            ].map((menu) => (
              <li
                key={menu}
                className={`nav-item ${
                  activeMenu === menu ? "active-menu" : ""
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                <a className="nav-link" href={`#${menu.toLowerCase()}`}>
                  {menu}
                </a>
              </li>
            ))}

            {/* Add Sign Up Button in Menu for Mobile View */}
            <li className="nav-item d-md-none">
              <button className="btn nav-btn mt-2" type="button">
              Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Right: Sign Up Button (Visible in Large Viewports Only) */}
        <div className="d-none d-md-flex ms-auto">
          <button className="btn nav-btn" type="button">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;