import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container ">
        <footer className="py-5">
          <div className="row">
            {/* Column 1: Logo */}
            <div className="col-12 col-md-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="img-fluid mb-3"
              />
              <p className="">
                Building a better future through innovation and technology.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-6 col-md-3 mb-4 ">
              <h5>Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className=" p-0 ">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className=" p-0 ">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="p-0 ">
                    Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="p-0 ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Address and Social Media */}
            <div className="col-6 col-md-3 mb-4">
              <h5>Contact Us</h5>
              <p className="">
              DSK Vishva Road, Behind Royal Hotel, Barangani Mala, Dhayari, Pune - 411041

              </p>
              
            </div>

            {/* Column 4: Contact Info */}
            <div className="col-12 col-md-3 mb-4">
  <h5>Get in Touch</h5>
  <p>
    Subhash Patel: +91 9511613492
  </p>
  <p>
    Shubham Patel: +91 7030517156
    <br />
    <span className="text-wrap d-inline-block">
      shraddhaentp74@gmail.com
    </span>
  </p>
  <form>
    {/* Add any form fields here */}
  </form>
</div>

          </div>

          {/* Footer Bottom */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Shraddha Enterprises. Crafting Precision & Quality Since 2015. All Rights Reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a href="#" className="link-dark">
                  <i className="bi bi-twitter" style={{ fontSize: "1.5rem" ,color:"#1DA1F2"}} />
                </a>
              </li>
              <li className="ms-3">
                <a href="#" className="link-dark">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "1.5rem" ,color:"#d62976"}}
                  />
                </a>
              </li>
              <li className="ms-3">
                <a href="#" className="link-dark">
                  <i className="bi bi-facebook" style={{ fontSize: "1.5rem" ,color:"blue"}} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
