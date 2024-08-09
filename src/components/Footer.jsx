import React from "react";
import "./css/Footer.css"; // Import the CSS file that matches the header styling
import logo from '../assets/logo2.gif'

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 footer-background">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-9 mt-md-0 mt-3">
          <h5 className="footerHeader1 text-uppercase">
            <img className="footerImg" src={logo} alt="SkillRanker" />
            <p>
              SkillRanker is a platform that connects students with opportunities to learn, grow and develop their skills.
            </p>
          </h5>
          
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-2 mb-md-0 mb-3">
          <h5 className="footerheader text-uppercase">Links</h5>
          <ul  className="list-unstyled footerList">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">All Opportunities</a></li>
            <li><a href="#!">Hackathons</a></li>
            <li><a href="#!">Competitions</a></li>
            <li><a href="#!">Events</a></li>
            <li><a href="#!">About Us</a></li>

          </ul>
        </div>

       
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2024
      <a href="https://mdbootstrap.com/"> Codename Origin</a>
    </div>
  </footer>
);

export default Footer;
