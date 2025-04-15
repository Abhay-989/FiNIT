import React from "react";
function Footer() {
  return (
    <footer style={{background: "linear-gradient(90deg, #0d0118 0%,rgb(75, 6, 131) 100%)"}}>
    <div className="container footercontainer border-top mt-5">
      <div className="row mt-5 ">
       
        <div className="col mb-6"><br/>
        <img src="media/finit2.png" style={{ width: "20%",margin:" 1px0 0 10px 0 " }} /><br/>
        
          <a href="" className="text-light " style={{textDecoration:"none",margin:"10px 0 30px 0"}}> FiNIT - The Finance Society</a>
          <br /><br/>
          <a href="" className="text-light " style={{textDecoration:"none",margin:"0 15px 0 0"}}><i class="fa-brands fa-youtube"></i></a>
          <a href="" className="text-light " style={{textDecoration:"none",margin:"0 15px 0 0"}}><i class="fa-brands fa-x-twitter" style={{color:"rgb(237, 236, 239)"}}></i></a>
          <a href="" className="text-light " style={{textDecoration:"none",margin:"0 15px 0 0"}}> <i class="fa-brands fa-linkedin"></i></a>
          <a href="" className="text-light " style={{textDecoration:"none",margin:"0 15px 0 0"}}><i class="fa-brands fa-instagram"></i></a>
         
        </div>
        <div className="col">
          <p className="text-light">Quick Links</p>
          <a href="" className="text-light" style={{textDecoration:"none"}}>Home </a>
          <br />
          <a href="" className="text-light" style={{textDecoration:"none"}}>About</a>
          <br />
          <a href="" className="text-light" style={{textDecoration:"none"}}>Events</a>
          <br />
          <a href="" className="text-light" style={{textDecoration:"none"}}>ContactUs</a>
          <br />
        </div>
        <div className="col">
          <p className="text-light">Contact Us</p>
          <a href="" className="text-light" style={{textDecoration:"none"}}>Shriyansh Chourasia: +91 79095 40155 </a>
          <br />
          <a href="" className="text-light" style={{textDecoration:"none"}}>Ayush Gautam: +91 6398 632 136</a>
          <br />
         
        </div>
        <div className="col">
          <p className="text-light">Locate Us</p>
          <a href="" className="text-light" style={{textDecoration:"none"}}>Maulana Azad National Institute of Technology, Bhopal</a>
          <br />
          <a href="" className="text-light" style={{textDecoration:"none"}}>MANIT square, Near Mata Mandir PIN:462003</a>
          <br />
          
        </div>
      </div>
      <div className="mt-text-light" style={{fontSize:"14px"}}>
       
    </div>
    </div>.
    </footer>
  );
}

export default Footer;
