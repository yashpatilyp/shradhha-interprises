import React from 'react'

const HomeAbout = () => {
  return (
    <div className=' homeAbout' id='about'>
          <h1 className='text-center'>About Us</h1>
          <p>Shraddha Enterprises has been providing top-quality Mechanical solutions since 2015. We specialize in custom manufacturing, offering precision in every project  which is related with fabrication, Machining , laser cutting &  Bending, Powder coating. Our skilled team ensures that each solution is tailored to meet client needs, delivering exceptional results and achieve precision and accuracy in every project. With expertise in bending and forming, we can create complex shapes and structures that meet the most stringent specifications. Our commitment to quality and attention to detail ensures that every fabrication project meets industry standards and exceeds client expectations.
</p>
<p>With a strong focus on innovation and quality, we handle a wide range of fabrication projects, including robotics fencing, environmental products, and custom structures. Our customer-first approach, combined with advanced technology and expert craftsmanship, guarantees satisfaction and long-lasting partnerships.

</p>
<p>We pride ourselves on trust, transparency, and delivering cost-effective solutions that meet the highest standards</p>


<h4 className='mb-4'>Key Values</h4>

<div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card ">
            <img src="/images/c1.png" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end">
              <p className="card-text text-center">Trustworthiness</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card ">
            <img src="/images/c2.png" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end">
              <p className="card-text text-center">Creative Thinking
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card ">
            <img src="/images/c3.png" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end">
              <p className="card-text text-center">Accountability</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card ">
            <img src="/images/c4.png" className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-end">
              <p className="card-text text-center ">Passion for the Job</p>
            </div>
          </div>
        </div>
      </div>


   {/* Corrected layout */}
   <div className="d-flex flex-column flex-sm-row justify-content-center mt-5">
  <div className="m-2">
    <img src="/images/ha1.png" alt="About Us Image 1" className="img-fluid" />
  </div>
  <div className="m-2 image-container">
    <img src="/images/ha2.png" alt="About Us Image 2" className="img-fluid hover-image" />
    <div className="hover-overlay">
      <div className="hover-text">" We transfer ideas into pricious solutions in fabrication, Machining, laser cutting, powder coating and Bending . Trusted quality, innovative results. "</div>
    </div>
  </div>
</div>

    </div>


  )
}

export default HomeAbout