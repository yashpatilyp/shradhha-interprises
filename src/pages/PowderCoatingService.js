import React from "react";
import Slider from "react-slick";

const PowderCoatingService = () => {
  const cards = [
    { id: 1, image: "/images/p1.png", title: "Mild Steel" },
    { id: 2, image: "/images/p2.png", title: "Galvanized Iron (GI) " },
    { id: 3, image: "/images/p3.png", title: "Aluminum  " },
    { id: 4, image: "/images/p4.png", title: "Cast Iron" },
    
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
        <h1>Powder Coating Services</h1>
        <p>Durable Powder Coating Finishes That Enhance and Protect </p>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 img-div">
            <img src="/images/p5.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="para1">
            At Shraddha Enterprises, we provide top-quality powder coating services that enhance the durability and appearance of your products. Our powder coating process ensures a smooth, uniform finish that is resistant to corrosion, chipping, and fading, making it ideal for both industrial and decorative applications. With advanced equipment and skilled technicians, we deliver flawless results that meet your specifications every time.         </p>
          </div>

          <div className="mt-5">
            <h4>Our Powder Coating Services:</h4>
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
  <h5>1. Key Benefits of Our Powder Coating Services:</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>Durable Finish: Provides a tough, long-lasting layer that protects against wear and environmental elements.</li>
    <li>Corrosion and Scratch Resistance: Ensures products remain in excellent condition even in harsh conditions.</li>
    <li>Vibrant, Consistent Colors: Available in a wide range of colors and textures, including matte, glossy, and metallic finishes.</li>
    <li>Environmentally Friendly: A sustainable, eco-friendly coating option with minimal waste.</li>
  </ul>
</div>

<div className="mt-4">
  <h5>2. Why Choose Our Powder Coating Services ?</h5>
  <ul className="para1" style={{lineHeight:"35px"}}>
    <li>Advanced Technology : State-of-the-art equipment for consistent, high-quality finishes.</li>
    <li>Wide Range of Colors & Finishes : From vibrant hues to subtle textures, we offer a variety of coating options.</li>
    <li>Experienced Technicians : Skilled professionals who ensure precision and quality in every project.</li>
    <li>Fast Turnaround : Efficient service to meet tight deadlines without sacrificing quality.</li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default PowderCoatingService;
