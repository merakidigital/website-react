import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = ({description,client,date,skills}) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">
              <span>{description}</span>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href="#0"><span>{client}</span></a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-30">
              <h6>YEAR</h6>
              <p><span>{date}</span></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item mt-30">
              <h6>SKILLS</h6>
              <p>
              <span>{skills}</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
