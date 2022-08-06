import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb- 5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our agency stands apart. We &apos;re a company that builds relationships and drives results. Being able to understand, adapt and develop innovative solutions is crucial in keeping up with the ever-changing market.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
