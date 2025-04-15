import React from "react";
function Hero() {
  return (
    <div className="container " style={{ padding: "30px 0 0 0" }}>
      <div className="row eventrow p-5 mt-5 ">
        <div
          className="aboutus text-center fw-bold mb-5"
          style={{ color: "rgb(20 184 166 )" }}
        >
          Our Events
        </div>
        <div className="col eventcol ">
          <div
            class="cardss card text-white"
            style={{
              width: "30 rem",
              backgroundColor: " rgba(0, 0, 0, 0.9)",
              borderRadius: "18px",
            }}
          >
            <img
              src="./media/finance.png"
              class="m-3 pb-5"
             
              alt="finance"
            />
            <div class="card-body">
              <h5 class="card-title"  style={{
                  color: "rgba(94, 234, 212, 0.8)"
                }}> Wall Street Wizards</h5>
              <p class="card-text">
                Wall Street Wizards, is an exharating challenge to test
                participants' financial acumen, strategic thinking, and msrket
                instincts. hteis event...
              </p> <a
                href="#"
                class="btn"
                style={{
                  backgroundColor: "rgba(94, 234, 212, 0.8)",
                  width: "100%",
                }}
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col eventcol">
          <div
            class="cardss card text-white"
            style={{
              width: "30 rem",
              backgroundColor: " rgba(0, 0, 0, 0.9)",
              borderRadius: "18px",
            }}
          >
            <img
              src="./media/finvest.png"
              class="m-3 "
              style={{ borderRadius: "15px", width: "35rem" }}
              alt="finit"
            />
            <div class="card-body">
              <h5 class="card-title" style={{
                  color: "rgba(94, 234, 212, 0.8)"
                }}>F-invest : The Flagship Event of FiNIT</h5>
              <p class="card-text ">
                F-invest, yhe flagship event of FiFNIT, is a two-day celebration
                of finincial literacy, innovation, and strategic thinking, set
                to take place this March a...
              </p>
              <a
                href="#"
                class="btn"
                style={{
                  backgroundColor: "rgba(94, 234, 212, 0.8)",
                  width: "100%",
                }}
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
<h1>Hero</h1>;
