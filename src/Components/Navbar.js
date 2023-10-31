import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <div className='container-fluid m-0 p-0'>
        <nav className="navbar navbar-expand-lg bg-danger navbar-dark" 
        >
            <div className="container-fluid">
                <h2 className='text-white'>COFFEE</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center   mx-auto   mb-2 mb-lg-0">
                        <NavLink to="/" >
                            <li className="nav-item nav-link active">Home</li>
                        </NavLink>
                        <NavLink  to="/about">
                            <li className="nav-item nav-link ">About</li>
                        </NavLink>
                        <NavLink  to="/service">
                            <li className="nav-item nav-link">Service</li>
                        </NavLink>
                        
                        <NavLink  to="/contact">
                            <li className="nav-item nav-link">Contact</li>
                        </NavLink>
                       
                    </ul>
                
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar