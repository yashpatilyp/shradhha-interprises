import React from "react";
import Slider from "react-slick";

const FabricationService = () => {
  const cards = [
    { id: 1, image: "/images/f2.png", title: "Custom Panels for Control Systems" },
    { id: 2, image: "/images/f3.png", title: "Machine Bases for Heavy Machinery" },
    { id: 3, image: "/images/f4.png", title: "Robotics Fencing and Safety Enclosures" },
    { id: 4, image: "/images/f5.png", title: "Structural Components for Industrial Applications" },
    { id: 5, image: "/images/f6.png", title: "Environmental Products and Custom Storage Solutions" },
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
        <h1>Fabrication Service</h1>
        <p>Precision Fabrication Solutions Tailored to Your Needs</p>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 img-div">
            <img src="/images/f1.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="para1">
              At Shraddha Enterprises, we specialize in providing high-quality
              fabrication services that turn ideas into reality. Whether you
              need custom panels, robust machine bases, or complex structures,
              our team delivers precision, reliability, and excellence in every
              project. Since 2015, we have been a trusted partner across various
              industries, offering solutions that are crafted with skill and
              innovation.
            </p>
          </div>

          <div className="mt-5">
            <h4>Our Fabrication Projects</h4>
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
                      height: "250px",
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
  <h5>1. Our Fabrication Capabilities</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>Custom Fabrication Solution</li>
    <li>Tailored products designed to meet specific client requirements</li>
    <li>Expertise in creating parts, assemblies, and full structures based on custom designs</li>
  </ul>
</div>

<div className="mt-4">
  <h5>2. Why Choose Our Fabrication Services?</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>Expert Craftsmanship: Our skilled team uses advanced tools and techniques to ensure high precision and quality.</li>
    <li>Custom Solutions: We work closely with clients to deliver solutions that meet their specific needs, no matter how complex.</li>
    <li>Versatility: From small components to large structures, we handle projects of all sizes and industries.</li>
    <li>Quality Assurance: Every product undergoes strict quality checks to ensure it meets industry standards and client expectations.</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default FabricationService;
