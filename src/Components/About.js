import React from 'react'
import '../App.css';

const About = () => {
  return (
    <div className='container-fluid about  py-4' style={{height:'600px'}}>
      <div className="section-title">
        <h1 className='text-primary text-center  display-4 text-uppercase' 
          style={{letterSpacing:'5px'}}>About Us</h1>
      </div>
      <div className="row gx-5  m-2">
        <div className="col-lg-6 py-3 ">
          <h1 className='mb-4'>Our Story</h1>
          <h5 className='mb-3'>
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur nulla error, blanditiis exercitationem debitis voluptatem aperiam culpa beatae atque quam veniam eligendi neque molestias. Excepturi minima quaerat quo ea.</p>
          <a className='btn btn-secondary font-weight-bold py-2 -x-4 mt-2'>Learn More</a>
        </div>
        <div className="col-lg-6 py-5" >
            
              <img className='img-fluid mt-5' src="./images/about-image.webp"
                 />
              

        </div>
      </div>

    </div>
  )
}

export default About