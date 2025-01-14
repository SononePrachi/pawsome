import React from "react";
// import { NavLink } from "react-router-dom";
import "./Footer.css";
import letsplay from "../images/pawsomelogo2.png";

const Footer = () => {
  return (
    <>
      <footer>
        <section class="footer-section">
          <div class="container-fluid">
            <div class="row d-flex align-items-center">
              <div class="col-md-3">
                <div class="footer-logo">
                  <a href="/#">
                    <img
                      src={letsplay}
                      class="img-fluid wow animated bounceIn slower"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-4">
                    <div class="menu-wrapper wow animated fadeIn slow">
                      <h4 class="wow animated fadeInUp slow">Quick Links</h4>
                      <ul
                        id="menu-header-menu-1"
                        class="footer-menu-list d-none d-md-block"
                      >
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-111 nav-item">
                          {/* <NavLink className="nav-link" to="/about">
                            About Us
                          </NavLink> */}
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 nav-item">
                          <a class="nav-link" href="home">
                           Home
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1136 nav-item">
                          <a class="nav-link" href="user">
                            Join the community
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63 nav-item">
                          <a class="nav-link" href="/#">
                            News and Events
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2039 nav-item">
                          <a class="nav-link" href="#">
                            Careers
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-250 nav-item">
                          <a class="nav-link" href="#">
                            Blog
                          </a>
                        </li>
                      </ul>{" "}
                      <ul class="footer-menu-list d-md-none">
                        <li>
                          <a href="#">Book Now</a>
                        </li>
                        <li>
                          <a href="#">Join Now</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="menu-wrapper wow animated fadeIn slow">
                      <h4 class="wow animated fadeInUp slow">Contact</h4>
                      <div class="footer-item-wrap">
                        <div class="content">
                          <p>
                            Pawsome <br />
                            India
                          </p>
                        </div>
                        <p class="d-none d-md-block">
                          Phone :{" "}
                          <a href="#" target="_blank">
                            +91 7420420420
                          </a>
                        </p>
                        <p>
                          Email : <a href="#">support@pawsome.in</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="menu-wrapper wow animated fadeIn slow">
                      <h4 class="wow animated fadeInUp slow">Connect Us</h4>
                      <ul class="footer-social-media">
                        <li>
                          <a class="fb" href="/#">
                            <i
                              class="fa fa-facebook-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a class="insta" href="/#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a class="linkedin" href="/#">
                            <i
                              class="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="footer-extra-menu">
          <div class="container-fluid">
            <div class="row">
              {/* <div class="col-sm-12">
                <ul id="menu-footer-menu" class="extra-menu-list">
                  <li
                    id="menu-item-88"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88 nav-item"
                  >
                    <a class="nav-link" href="/#">
                      FAQ
                    </a>
                  </li>
                  <li
                    id="menu-item-914"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-914 nav-item"
                  >
                    <a class="nav-link" href="/#">
                      Site Map
                    </a>
                  </li>
                  <li
                    id="menu-item-1119"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1119 nav-item"
                  >
                    <a class="nav-link" href="/#">
                      Terms of Service
                    </a>
                  </li>
                  <li
                    id="menu-item-1120"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1120 nav-item"
                  >
                    <a class="nav-link" href="/#">
                      Policies
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>
        <section class="copyright-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="content">
                  Copyright © 2022.Designed by{" "}
                  <a href="/#" target="_blank">
                    Shirnivas-Rushikesh-Rahul-Prachi.
                  </a>{" "}
                  | DAC 2022
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
