import React from "react";
import Slider from "react-slick";

const MachineService = () => {
  const cards = [
    { id: 1, image: "/images/m1.png", title: "CNC Machining" },
    { id: 2, image: "/images/m2.png", title: "VMC Machining" },
    { id: 3, image: "/images/m3.png", title: "Lathe Machining " },
    { id: 4, image: "/images/m4.png", title: "Drilling " },
    { id: 5, image: "/images/m5.png", title: "Milling " },
  ];

  const sliderSettings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of cards visible at once
    slidesToScroll: 1, // Number of cards to scroll at a time
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 690, // Adjust settings for small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500, // Adjust settings for small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="fab-main">
      <div className="fab-img">
        <h1>Machining Services</h1>
        <p>High-Precision Machining Solutions Crafted for Excellence</p>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 img-div">
            <img src="/images/m6.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="para1">
            At Shraddha Enterprises, we provide high-precision machining services designed to meet the diverse needs of our clients. Our state-of-the-art equipment and skilled technicians enable us to deliver components with exceptional accuracy and quality. Whether you require milling, turning, grinding, or drilling, we have the expertise to handle projects of all sizes.
            </p>
          </div>

          <div className="mt-5">
            <h4>Our machining capabilities include</h4>
            <Slider {...sliderSettings}>
              {cards.map((card) => (
                <div key={card.id} style={{ padding: "10px" }}>
                  <div
                    className="card"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "10px",
                      margin:"10px",
                      height: "240px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                     
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 className="mt-2" style={{ margin: "0", fontSize: "16px", color: "#333",textAlign:"center" }}>
                      {card.title}
                    </h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>


          <div className="mt-5">
  <h5>1. Our machining capabilities include</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>CNC Machining : Utilizing advanced CNC technology for high-volume production and intricate designs.</li>
    <li>Milling : Offering precision milling services for flat and contoured surfaces.</li>
    <li>Turning : Producing cylindrical parts with precision, ensuring tight tolerances.</li>
    <li>Grinding : Providing finishing services that enhance surface quality and dimensional accuracy.</li>
  </ul>
</div>

<div className="mt-4">
  <h5>2.Why Choose Us ?</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>Expertise : Skilled technicians with years of experience in machining.</li>
    <li>Quality Assurance :  Rigorous inspection processes to ensure precision and reliability.</li>
    <li>Timely Delivery :  Committed to meeting deadlines without compromising quality.</li>
    <li>Partner with Shraddha Enterprises for all your machining needs, and experience the difference in quality and service.</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default MachineService;
