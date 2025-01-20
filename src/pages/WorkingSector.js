import React from "react";


const WorkingSector = () => {
  const sectors = [
    { image: "/images/w1.png", title: "Automotive", description: "Precision fabrication for automotive parts, machine bases, and custom components." },
    { image: "/images/w2.png", title: "MANUFACTURING", description: "Custom solutions for industrial equipment, safety structures, and control panels." },
    { image: "/images/w3.png", title: "Construction", description: "Custom solutions for industrial equipment, safety structures, and control panels." },
    { image: "/images/w4.png", title: "Packaging", description: "Durable and reliable fabrication for packaging equipment and storage solutions" },
    { image: "/images/w5.png", title: "Transportation", description: "Fabricated parts and components designed for the transportation industry, ensuring durability and safety." },
    { image: "/images/w6.png", title: "Robotics", description: "Custom-designed safety fencing and components for automated robotic systems." },
    { image: "/images/w7.png", title: "Government", description: "Collaborating on projects that require precision and compliance with government standards." },
    { image: "/images/w8.png", title: "Medical", description: "Fabrication of medical equipment parts and custom solutions to meet healthcare industry standards." },
    { image: "/images/w9.png", title: "Commercial", description: " Versatile fabrication solutions for a wide range of commercial applications, from display panels to secure lockers." },
    { image: "/images/w10.png", title: "Automation ", description: "Efficient automation systems designed to streamline industrial processes, from assembly lines to robotic arms." },
  ];

  return (
    <div className="fab-main">
      <div className="fab-img text-center">
        <h1>Our Work Across Industries</h1>
        <p>
          From custom fabrication to robotic fencing, we offer a wide range of
          fabrication solutions tailored to meet your needs.
        </p>
        <div className="grid-container">
          {sectors.map((sector, index) => (
            <div className="card1" key={index}>
              <img src={sector.image} alt={sector.title} className="card-img" />
              <h3 className="card-title">{sector.title}</h3>
              <p className="card-description">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingSector;
