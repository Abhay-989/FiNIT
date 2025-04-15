import React from "react";
function Hero() {
  return (
    <div className="contactme">

      <div className="row ">
        <h2
          className="aboutus text-center fw-bold"
          style={{ color: "rgb(20 184 166 )" }}
        >
          Have any query?
        </h2>

        <p className="contactrow text-light  text-center">
          Let us know how we can help and we’ll respond shortly! Name
        </p>
      </div>
      <div
        className="response text-center justify-content-center" >


        <form className="space-y-6">
          <div className="flex flex-col">
            <br />
            <label
              for="name"
              className="text-white text-start font-medium mb-1"
            >
              Name
            </label>
            <br />
            <input
              typeof="text"
              id="name"
              className="p-3 border border-grey-700 bg-grey-800 text-white"  style={{ backgroundColor:" rgb(31 41 55)",width:"100%",borderRadius:"10px",height:"3rem"  }}
            />
          </div>

          <div className="flex flex-col text-center">
            <br />
            <label
              for="email"
              className="text-white text-start font-medium mb-1"
            >
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required=""
              className="p-3 border border-gray-700  text-white" style={{ backgroundColor:" rgb(31 41 55)",width:"100%",borderRadius:"10px",height:"3rem"  }}
              value=""
              
            />
          </div>


          <div className="flex flex-col text-center">
            <br />
            <label
              for="number"
              className="text-white text-start font-medium mb-1"
            >
              Phone Number
            </label>
            <br />
            <input
              type="number"
              id="number"
              name="number"
              required=""
              className="p-3 border border-gray-700  text-white" style={{ backgroundColor:" rgb(31 41 55)",width:"100%",borderRadius:"10px",height:"3rem"  }}
              value=""
             
            />
          </div>

          <div className="flex flex-col text-center">
            <br />
            <label
              for="message"
              className="text-white text-start font-medium mb-1"
            >
              Message
            </label>
            <br />
            <input
              type="text"
              id="message"
              name="message"
              required=""
              className="p-3 border border-gray-700  text-white" style={{ backgroundColor:" rgb(31 41 55)",width:"100%",borderRadius:"10px",height:"3rem" }}
              value=""
              
            />
          </div>
<br/>
          <button
            type="submit"
            className=" w-full  text-white  transition duration-300"  id="submit" style={{ backgroundColor: "rgb(20 184 166 )",width:"100%",height:"2rem",borderRadius:"10px"  }}
            
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
<h1>Hero</h1>;
