/* eslint-disable @next/next/no-img-element */
import React from "react";
import Clients1Data from "../../data/sections/clientsfull.json";
import Split from "../Split";

const Clients1 = ({ theme, subBG }) => {
  var first = Clients1Data.slice(0,4);
  var second = Clients1Data.slice(4, 8);
  return (
    <section className={`clients section-padding ${subBG ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="sec-head custom-font mb-0">
              <h6>Clients</h6>
              <h3>
                AMAZING BRANDS
              </h3>
            </div>
          </div>
          <div className="col-lg-7">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-6 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
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
              <div className="row">
                {second.map((item) => (
                  <div
                    key={item.id}
                    className={`${
                      item.id == 5
                        ? "col-md-3 col-6 brands sm-mb30"
                        : item.id == 6
                        ? "col-md-3 col-6 brands sm-mb30"
                        : item.id == 7
                        ? "col-md-3 col-6 brands"
                        : item.id == 8
                        ? "col-md-3 col-6 brands"
                        : ""
                    }`}
                  >
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".4"
                          : item.id == 2
                          ? ".7"
                          : item.id == 3
                          ? ".5"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
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
