import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{  backgroundColor:"#4f2da0", backgroundImage: "linear-gradient(28deg, #4f2da0 0%, #000000 46%, #0019ff 100%)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>About Us</h1>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
