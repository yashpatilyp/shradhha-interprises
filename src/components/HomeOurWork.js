import React from 'react'

const HomeOurWork = () => {
  return (
          <div className=' homeAbout'>
          <h1 className='text-center'>Our Work</h1>
<p  className='text-center'>Expert machining and fabrication services, combined with advanced laser cutting and powder coating for a flawless finish</p>

<div className="row mt-5">
  {/* First Image - Spans 6 Columns */}
  <div className="col-lg-6 col-12 mb-3 d-flex align-items-stretch">
    <img 
      src="/images/hw1.png" 
      alt="About Us Image 1" 
      className="img-fluid w-100 h-100" 
      style={{ objectFit: 'cover' }} 
    />
  </div>

  {/* Grid for 4 Smaller Images */}
  <div className="col-lg-6 col-12">
    <div className="row g-2 h-50">
      {/* Top Row of Smaller Images */}
      <div className="col-6">
        <img 
          src="/images/hw2.png" 
          alt="About Us Image 2" 
          className="img-fluid w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="col-6">
        <img 
          src="/images/hw3.png" 
          alt="About Us Image 3" 
          className="img-fluid w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
    </div>
    <div className="row g-2 h-50 mt-1">
      {/* Bottom Row of Smaller Images */}
      <div className="col-6">
        <img 
          src="/images/hw4.png" 
          alt="About Us Image 4" 
          className="img-fluid w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="col-6">
        <img 
          src="/images/hw5.png" 
          alt="About Us Image 5" 
          className="img-fluid w-100 h-100" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
    </div>
  </div>
</div>



</div>
  )
}

export default HomeOurWork