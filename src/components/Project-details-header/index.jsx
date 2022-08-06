import React from 'react'

const ProjectDetailsHeader = ({title,work,cover}) => {
    return (
      <section className="page-header proj-det">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                
                  <h6><span>{work}</span></h6>
                  <h2><span>{title}</span></h2>
                
              </div>
            </div>
          </div>
        </div>
        <div
          className="img-wrapper bg-img parallaxie"
          style={{ backgroundImage: `url(${cover})`,}}
        ></div>
      </section>
    );
}

export default ProjectDetailsHeader
