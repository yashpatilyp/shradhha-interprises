import React from 'react';


const Testimonials = () => {
  return (
    <div className="homeAbout test">
      <h1 className="text-center">Testimonials</h1>
      <p className="text-center">What our clients say</p>

      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow h-100">
            <img src="/images/t1.png" className="card-img-top" alt="DRAN Engineers Pvt. Ltd." />
            <div className="card-body d-flex flex-column">
              <p className="card-text text-center font-weight-bold">DRAN Engineers Pvt. Ltd.</p>
              <span className="text-center">"Shraddha Enterprises delivers precision and quality every time. Their fabrication, machining, and laser cutting services are unmatched."</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow h-100">
            <img src="/images/t2.png" className="card-img-top" alt="Applied Environmental Research Foundation" />
            <div className="card-body d-flex flex-column">
              <p className="card-text text-center font-weight-bold">Applied Environmental Research Foundation</p>
              <span className="text-center">"We rely on Shraddha Enterprises for all our custom fabrication needs. Exceptional quality and timely delivery."</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow h-100">
            <img src="/images/t3.png" className="card-img-top" alt="Vertaxis Futuretech Pvt. Ltd." />
            <div className="card-body d-flex flex-column">
              <p className="card-text text-center font-weight-bold">Vertaxis Futuretech Pvt. Ltd.</p>
              <span className="text-center">"Reliable, precise, and efficient—Shraddha Enterprises' services have streamlined our operations."</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
