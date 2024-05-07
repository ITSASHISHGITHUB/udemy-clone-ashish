import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/instructors">Instructors</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Browse Categories</h4>
            <ul>
              <li>Technology</li>
              <li>Business</li>
              <li>Photography</li>
              <li>Design</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Stay Connected</h4>
          <ul>
            <li>
              <a href="https://instagram.com/ashish_ydvv21">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://wa.me/6360431631">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ashishyadav677/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} This Website is made with
            <span role="img" aria-label="Heart">
              ❤️
            </span>
            By Ashish Yadav Feel Free To Contact Me On 6360431631 For Source
            Code .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
