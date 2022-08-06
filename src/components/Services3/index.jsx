import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>BRANDING &amp; GRAPHIC DESIGN</h6>
              <p>
              Creativity is our passion, we create designs that we are proud of and share with the world
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>WEB DESIGN &amp; DEVELOPMENT</h6>
              <p>
              We create responsive, mobile-first websites which are 100% customisable to fit your business needs and help grow your online sales.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>DIGITAL MARKETING</h6>
              <p>
              We combine our creative flair and digital expertise to create targeted, automated digital marketing solutions to help your business grow. 
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Services3;
