/* eslint-disable @next/next/no-img-element */
import React from "react";
import Clients1Data from "../../data/sections/clientsfull.json";
import Split from "../Split";

const Clients1 = ({ theme, subBG }) => {
  var first = Clients1Data;

  return (
    <section className={`clients section-padding ${subBG ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 valign">
            <div className="sec-head custom-font mb-0">
              <h6 style={{ textAlign: "center" }}>Clients</h6>
              <h3>
                FULL LIST
              </h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-2 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href={"javascript:;"}
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.name}
                          </a>
                        </Split>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients1;
