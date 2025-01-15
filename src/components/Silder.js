import React from 'react';

const Silder = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/Slide1.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Slide2.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Slide3.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/Slide4.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Silder;
