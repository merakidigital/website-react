/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetailsImages = ({client}) => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-6 pr-0">
              
                <img alt="" src={"/img/portfolio/projects/" + client + "/1.jpg"} />
             
            </div>
            <div className="col-md-6">
              
                <img alt="" src={"/img/portfolio/projects/" + client + "/2.jpg"} />
              
            </div>
            <div className="col-md-2 pr-0 pt-2">
              
                <img alt="" src={"/img/portfolio/projects/" + client + "/3.jpg"} />
            
            </div>
            <div className="col-md-5 pr-0 pt-2">
             
                <img alt="" src={"/img/portfolio/projects/" + client + "/4.jpg"} />
              
            </div>
            <div className="col-md-5 pt-2">
              
                <img alt="" src={"/img/portfolio/projects/" + client + "/5.jpg"} />
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsImages;
