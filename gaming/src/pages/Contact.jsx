import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Contact() {
  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      {/* Page Heading */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Contact Us</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Contact Us {/* Replace <a> with <Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Page Section */}
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>Say Hello!</h2>
                </div>
                <p>
                  YosGanes we are the best 
                </p>
                <ul>
                  <li><span>Address</span> Sunny Isles Beach, FL 33160, United States</li>
                  <li><span>Phone</span> +123 456 7890</li>
                  <li><span>Email</span> YosGames@contact.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      {/* Map content goes here */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <form id="contact-form" action="" method="post">
                      <div className="row">
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="surname" id="surname" placeholder="Your Surname..." autoComplete="on" required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea name="message" id="message" placeholder="Your Message"></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;