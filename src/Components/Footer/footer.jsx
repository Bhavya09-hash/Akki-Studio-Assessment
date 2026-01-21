import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        
      
        <div className="row">
          
        
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <h2 className="footer-logo">Adhishrihaan</h2>
            
            <div className="row">
              <div className="col-6">
                <h6 className="footer-heading">Email</h6>
                <a href="mailto:info@adhishrihaan.com" className="footer-link">
                  info@adhishrihaan.com
                </a>
              </div>
              <div className="col-6">
                <h6 className="footer-heading">Phone</h6>
                <a href="tel:+9706600007" className="footer-link">
                  +970 66 00 00 7
                </a>
              </div>
            </div>
          </div>

          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-lg-center">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex justify-content-lg-center gap-3">
              <a href="#" className="social-icon">
                  <i className="bi bi-facebook"></i>
                </a>
              <a href="#" className="social-icon">
                  <i className="bi bi-instagram"></i>
                </a>
              <a href="#" className="social-icon">
                  <i className="bi bi-twitter"></i>
                </a> 
              <a href="#" className="social-icon">
                  <i className="bi bi-linkedin"></i>
                </a>  
              <a href="#" className="social-icon">
                  <i className="bi bi-youtube"></i>
                </a>     
            </div>
          </div>

          
          <div className="col-lg-4 col-md-6 text-lg-end">
            <p className="mb-3 fs-5">Changing Lives, Building Futures.</p>
            <button className="btn btn-light rounded-pill px-4 py-2 fw-bold">
              DONATE NOW
            </button>
          </div>
        </div>

        
        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          
          <div className="mb-3 mb-md-0 text-secondary small">
            © 2025 Adhishrihaan | All rights reserved | Designed by Akki Studios
          </div>

          <nav>
            <ul className="list-inline mb-0 d-flex gap-3 flex-wrap justify-content-center align-items-center">
              <li className="list-inline-item">
                <a href="#" className="footer-nav-link">
                  <i className="bi bi-house-door-fill me-1"></i> Home
                </a>
              </li>
              <li className="list-inline-item nav-separator">
                <a href="#" className="footer-nav-link">About Us</a>
              </li>
              <li className="list-inline-item nav-separator">
                <a href="#" className="footer-nav-link">Initiatives</a>
              </li>
              <li className="list-inline-item nav-separator">
                <a href="#" className="footer-nav-link">Our Impact</a>
              </li>
              <li className="list-inline-item nav-separator">
                <a href="#" className="footer-nav-link">Contact Us</a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;