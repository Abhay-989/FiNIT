import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg items-center items-center  mt-3  position-fixed" style={{margin:"0 10vw",width:"90vw"}}>
      <div className="container-fluid ">
        <Link className="navbar-brand" to="#">
          <img src="./media/finitlogo.png" alt="FiNIT Logo" className="brand-logo" style={{height:"50px "}}  />
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
         
              <li className="nav-item " >
                <Link className="nav-link" to="/Home" >Home</Link>
              </li>
              <li className="nav-item " >
                <Link className="nav-link" to="/About" >About</Link>
              </li>
              <li className="nav-item " >
                <Link className="nav-link" to="/Team" >Team</Link>
              </li>
              <li className="nav-item " >
                <Link className="nav-link" to="/Event" >Events</Link>
              </li>
              <li className="nav-item " >
                <Link className="nav-link" to="/Contact" >Contact Us</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
      );
}

export default Navbar;
