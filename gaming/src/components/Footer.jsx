import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">About YosGames Gaming</h5>
            <p>
              Your first destination for the latest and greatest in gaming. 
              We offer competitive prices, instant delivery, and 24/7 support 
              for all your gaming needs.
            </p>
            <div className="social-icons mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-instagram"></i></a>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fab fa-discord"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/shop">Shop</Link></li>
              <li className="mb-2"><Link to="/cart">Cart</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/support">Help Center</Link></li>
              <li className="mb-2"><Link to="/returns">Returns & Refunds</Link></li>
              <li className="mb-2"><Link to="/shipping">Shipping Info</Link></li>
              <li className="mb-2"><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <p>Subscribe for exclusive deals and gaming news</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Your email"
              />
              <button className="btn btn-primary" type="button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="small text-muted">
              We'll never share your email with anyone else.
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} YOSGAMES Gaming Company. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/images/payment-methods.png`} 
              alt="Payment methods" 
              className="img-fluid" 
              style={{maxHeight: '30px'}}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
