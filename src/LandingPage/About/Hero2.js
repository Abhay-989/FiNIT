import React from "react";
function Hero2() {
  return (
    <div className="container">
      <div
        className="row aboutrow p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="our aboutcol col-7 ">
          <h1
            className="fs-2 text-center mt-4 "
            style={{ color: "rgb(20 184 166 )" }}
          >
          Our Mission
          </h1>
          <p className="text-light mt-2 ">
            Our mission is to empower students with practical financial
            knowledge and skills, enabling them to make informed decisions and
            achieve financial independence. We are committed to providing
            engaging educational opportunities that cover essential topics such
            as budgeting, saving, investing, and money management. By exploring
            diverse income avenues and fostering entrepreneurial innovation, we
            inspire students to pursue their financial goals with confidence.
          </p>
        </div>
        <div className="col-5 aboutcol p-5 ">
          <img src="./media/ourmission.png" className="ourmission" />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
