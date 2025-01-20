import React from "react";
import Slider from "react-slick";

const LaserService = () => {
  const cards = [
    { id: 1, image: "/images/l2.png", title: "Precision & Accuracy" },
    { id: 2, image: "/images/l3.png", title: "Versatility ( All Types Of  Material )" },
    { id: 3, image: "/images/ll3.png", title: "Efficiency " },
    { id: 4, image: "/images/l4.png", title: "Customization" },
    
  ];

  const sliderSettings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of cards visible at once
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
        <h1>Laser Cutting & Bending Services</h1>
        <p>Advanced Laser Cutting Services for Precision and Versatility </p>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 img-div">
            <img src="/images/l1.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="para1">
            At Shraddha Enterprises, we offer advanced laser cutting services designed & bending to deliver precision and versatility across a range of projects. Our state-of-the-art laser cutting & bending machines enable us to create intricate designs and detailed components with exceptional accuracy, making us the ideal partner for industries requiring high-quality Since 2015,  has been a trusted provider of laser cutting & bending solutions, combining cutting-edge technology with skilled craftsmanship. Our commitment to quality ensures that every project is completed to the highest standards, with a focus on precision, reliability, and customer satisfaction.            </p>
          </div>

          <div className="mt-5">
            <h4>Our Laser Cutting Services:</h4>
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
  <h5>1. Applications Include:</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>Custom metal panels and enclosures.</li>
    <li>Industrial parts and components.</li>
    <li>Decorative designs and signage.</li>
    <li>Prototypes and custom projects.</li>
  </ul>
</div>

<div className="mt-4">
  <h5>2. Why Choose Our Laser Cutting Services ?</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>State-of-the-Art Equipment  : Advanced laser technology for superior results.</li>
    <li>Experienced Team :  Skilled operators ensure flawless execution.</li>
    <li>Competitive Pricing : Quality service at cost-effective rates.</li>
    <li>Timely Delivery : Fast turnaround times for urgent projects.</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default LaserService;
