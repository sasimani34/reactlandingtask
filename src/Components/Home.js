import React from 'react'
import '../App.css';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/caro-coffee3.jpeg"  className=" d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <h1 className='display-3 text-white'>Coffee Time</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/caro-coffee2.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h1 className='display-3 text-white'>Delicious Coffee</h1>
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/caro-coffee1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center mb-3">
        <h2 className='text-warning font-weight-medium m-0'>We have been Serving</h2>
        <h1 className='display-3 text-white m-0'>Coffee</h1>
        <h2 className='display-4 text-white m-0'>Since 2000</h2>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home