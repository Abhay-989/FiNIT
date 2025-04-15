import React from "react";
import Animation from "./Animation";
function Hero() {
  return (
    <div className="container " style={{margin:"0 0 0 0", padding:"140px 90px 0 90px"}}>
      <div className="row homerow gap-10 items-center text-white z-10">
        <div className="home homecol col-6 text-center md:text-left space-y-2">
<Animation/>
<h2  className="fw-bold" style={{color:"rgb(20 184 166 )"}} >The Finance Society</h2>
<h2  className="text-light  fw-bold">NIT BHOPAL</h2>
<br/>
<span  className="text-light fs-3 fw-bold">where innovation meets </span><span className=" fs-3 fw-bold" style={{color:"rgb(155 81 224 )"}}>financial literacy.</span>
<br/><br/>
<button
          className="finitbtn p-2 text-light fs-5 "
       
        >
          FiNIT Brochure 
        </button><br/><br/>
        <a href="" className="text-light fs-3" style={{textDecoration:"none",margin:"0 15px 0 0"}}><i class="fa-brands fa-youtube"></i></a>
          <a href="" className="text-light fs-3" style={{textDecoration:"none",margin:"0 15px 0 0"}}><i class="fa-brands fa-x-twitter" ></i></a>
          <a href="" className="text-light fs-3" style={{textDecoration:"none",margin:"0 15px 0 0"}}> <i class="fa-brands fa-linkedin"></i></a>
          <a href="" className="text-light fs-3" style={{textDecoration:"none",margin:"0 15px 0 0"}}><i class="fa-brands fa-instagram"></i></a>
            </div>
      
        <div className="col-6 homecol ">
        <img
          src="media/finitmonitor.png"
          alt="Hero Image"
          className="monitor mb-5"
        /> 
        </div>

      </div>
    </div>
  );
}

export default Hero;
