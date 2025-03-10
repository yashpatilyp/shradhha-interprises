import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeOurWork = () => {
  const navigate = useNavigate();

  // Function to navigate to different service pages
  const navigateW = (service) => {
    switch (service) {
      case "Welding":
        navigate('/services/fabrication');
        break;
      case "Machining":
        navigate('/services/machining');
        break;
      case "Powder Coating":
        navigate('/services/powder-coating');
        break;
      case "Laser Cutting":
        navigate('/services/laser-cutting');
        break;
      case "Bending":
        navigate('/services/bending');
        break;
      default:
        break;
    }
  };

  return (
    <div className="homeAbout">
      <h1 className="text-center">Our Work</h1>
      <p className="text-center">
        Expert machining and fabrication services, combined with advanced laser cutting and powder coating for a flawless finish.
      </p>

      <div className="row mt-5">
        {/* First Image - Spans 6 Columns */}
        <div className="col-lg-6 col-12 d-flex align-items-stretch image-container1">
          <img
            src="/images/hw1.png"
            alt="About Us Image 1"
            className="img-fluid w-100 h-100 hover-image"
            style={{ objectFit: 'cover' }}
          />
          <div className="hover-overlay1">
            <button className="hover-button" onClick={() => navigateW("Welding")}>
              Welding
            </button>
          </div>
        </div>

        {/* Grid for 4 Smaller Images */}
        <div className="col-lg-6 col-12">
          <div className="row g-2 h-50">
            {/* Top Row of Smaller Images */}
            <div className="col-6 image-container1">
              <img
                src="/images/hw2.png"
                alt="About Us Image 2"
                className="img-fluid w-100 h-100 hover-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="hover-overlay1">
                <button className="hover-button" onClick={() => navigateW("Machining")}>
                  Machining
                </button>
              </div>
            </div>
            <div className="col-6 image-container1">
              <img
                src="/images/hw3.png"
                alt="About Us Image 3"
                className="img-fluid w-100 h-100 hover-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="hover-overlay1">
                <button className="hover-button" onClick={() => navigateW("Powder Coating")}>
                  Powder Coating
                </button>
              </div>
            </div>
          </div>
          <div className="row g-2 h-50 mt-1">
            {/* Bottom Row of Smaller Images */}
            <div className="col-6 image-container1">
              <img
                src="/images/hw4.png"
                alt="About Us Image 4"
                className="img-fluid w-100 h-100 hover-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="hover-overlay1">
                <button className="hover-button" onClick={() => navigateW("Laser Cutting")}>
                  Laser Cutting
                </button>
              </div>
            </div>
            <div className="col-6 image-container1">
              <img
                src="/images/hw5.png"
                alt="About Us Image 5"
                className="img-fluid w-100 h-100 hover-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="hover-overlay1">
                <button className="hover-button" onClick={() => navigateW("Bending")}>
                  Bending
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOurWork;
