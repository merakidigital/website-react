import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            HOW WE HELP
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">
              OUR FEATURED <br /> SERVICES
            </h4>
            <Link href="/about">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>BRANDING &amp; GRAPHIC DESIGN</h6>
            <p>
            In a world where everyone is trying to get your attention we&apos;ll get you noticed. We design to be clicked. To be seen. And to persuade.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>
              WEB DESIGN &amp; <br /> DEVELOPMENT
            </h6>
            <p>We create responsive, mobile-first websites which are 100% customisable to fit your business needs and help grow your online sales.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>
              DIGITAL<br />MARKETING
            </h6>
            <p>We combine our creative flair and digital expertise to create targeted, automated digital marketing solutions to help your business grow. </p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
