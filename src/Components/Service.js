import React from 'react'
import '../App.css';

const Service = () => {
  return (
    <div className='container-fluid service  pt-4'>
      <div className="section-title text-center">
        <h4 className='text-primary  text-uppercase' 
          style={{letterSpacing:'5px'}}>Services</h4>
        <h1 className='display-4 fw-bold'>Fresh & Organic Beans</h1>
      </div>
      <div className="row m-3 gx-5">
        <div className='col-lg-6 mb-5 mt-5'>
          <h4><i className="fa fa-award service-icon"></i>Best Quality Coffee</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae obcaecati nihil, quisquam odio dolorum facere perspiciatis voluptatem blanditiis esse necessitatibus illo aspernatur soluta? Quasi eaque debitis quae illo dolorum, accusantium ad atque a laboriosam porro! Ipsa labore consequuntur hic magni animi veniam nam quis ea earum commodi quaerat deserunt sapiente dolorem nesciunt, numquam, voluptas vel, dolore eveniet impedit maxime. Nesciunt!</p>
        </div>
      
        <div className='col-lg-6 mb-5 mt-5 '>
            <h4><i className="fa fa-coffee service-icon"></i>Fresh Coffee Bean</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure placeat quo aut illum. Incidunt mollitia odit necessitatibus ad voluptatum facilis cum aperiam tempore beatae, quae, accusamus natus delectus expedita, praesentium temporibus quaerat esse itaque qui! Culpa officia blanditiis minus dolor repellendus saepe provident natus, eos maxime reprehenderit placeat. Beatae.</p>
        </div>
      </div>
    </div>
    

  )
}

export default Service