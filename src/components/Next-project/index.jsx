import React from "react";
import Link from "next/link";

const NextProject = ({ nextproject, projectTitle,projecturl }) => {
  return (
    <section className="next-prog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div
                className="bg-img valign"
                style={{
                  backgroundImage: `url(${nextproject})`,
                }}
                data-overlay-dark="4"
              >
                <div className="caption ontop valign">
                  <div className="o-hidden full-width">
                    <h1>
                      <Link href={".." + projecturl}>
                        <span className="stroke">{projectTitle}</span>
                      </Link>
                    </h1>
                  </div>
                </div>
                <div className="copy-cap valign">
                  <div className="cap full-width">
                    <h1>
                      <Link href={".." + projecturl}>
                        <a>
                          <span>{projectTitle}</span>
                        </a>
                      </Link>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
