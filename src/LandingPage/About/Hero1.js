import React from "react";
function Hero1() {
  return (
    <div className="container" style={{padding:"40px 0"}}>
      <div className="row  aboutrow gap-10 items-center text-white z-10">
      <div className="aboutus text-center fw-bold" style={{ color: "rgb(20 184 166 )" }}>
          About us
        </div>
      </div>
      <div
        className="row aboutrow p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 aboutcol p-5  ">
          <img src="./media/mainbuilding.avif" className="mainbuilding"  />
        </div>
        <div className="our aboutcol col-6 ">
          <h1
            className="fs-2 text-center mt-4"
            style={{ color: "rgb(20 184 166 )" }}
          >
            Our Vision
          </h1>
          <p className="   text-light mt-2">
            Our vision is to cultivate a financially empowered generation by
            equipping students with the knowledge and skills to navigate the
            complexities of personal and professional finance. We aspire to
            foster a culture of financial literacy, where students confidently
            make informed decisions about budgeting, saving, and investing. By
            providing insights into diverse income opportunities and innovative
            entrepreneurial ventures, we aim to inspire financial independence
            and creativity.
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default Hero1;
