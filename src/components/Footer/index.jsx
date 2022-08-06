/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font-alt">
                <ul>
                  <li>
                    <span>Email : </span><a href="mailto:hello@mrk-digital.com"> hello@mrk-digital.com</a>
                  </li>
                  
                  <li >
                    <span>Phone : </span> <a href="tel:3467041856">(+1) 346 704 1856</a>
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/mrk.digitalsolutions/" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/mrk.digitalsolutions/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
          <h6 className="custom-font stit simple-btn">NAVIGATE</h6>
          <div className="con-info custom-font-alt">
                <ul>
                <li >
                  <Link href="/contact/">
                    <a className="nav-link">Contact</a>
                  </Link>
                  </li>
                  <li>
                    <Link href="/contact/">
                      <a className="nav-link">Privacy Policy</a>
                    </Link>
                  </li>
                  
                  <li >
                    <Link href="/contact/">
                      <a className="nav-link">Terms and Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2022, All rights reserved.
            <a href="https://mrk-digital.com">Meraki Digital LLC</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
