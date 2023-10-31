import React from 'react'

const Contact = () => {
  return (
    <div className='container-fluid contact  pt-4'>
      <div className="section-title text-center">
        <h4 className='text-warning  text-uppercase' 
          style={{letterSpacing:'5px'}}>Contact</h4>
        <h1 className='display-4 fw-bold'>Feel Free To Contact</h1>
      </div>
      <div className="row m-3 gx-5">
        <div className="col-lg-4 mb-5 mt-5 text-center text-center d-flex flex-column ">
         
          <i className="fa fa-2x fa-map-marker-alt mb-3 text-warning"></i>
          <h4 className='fw-bold'>Address</h4>
          <p className='mt-3'>123 Street,</p>
          <p>XXXXXXXXX,</p>
          <p>YYYYY</p>
        </div>
        <div className="col-lg-4 mb-5 mt-5 text-center">
          <i className="fa fa-2x fa-phone-alt mb-3 text-warning"></i>
          <h4 className='fw-bold'>Phone</h4>
          <p className='mt-3'>+91 1234567893</p>
        </div>
        <div className="col-lg-4 mb-5 mt-5 text-center">
          <i className="far fa-2x fa-envelope mb-3 text-warning"></i>
          <h4 className='fw-bold'>Email</h4>
          <p className='mt-3'>info@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact