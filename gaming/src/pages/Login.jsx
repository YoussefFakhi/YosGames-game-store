import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Authentication logic will go here
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  // Page styling with red accent theme
  const pageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/login-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    paddingTop: '120px',
    paddingBottom: '50px'
  };

  const contentStyle = {
    backgroundColor: 'rgba(35, 35, 35, 0.9)',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    color: '#fff'
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid #444',
    color: '#fff',
    marginBottom: '15px'
  };

  return (
    <div style={pageStyle}>
      {/* Preloader */}
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

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={contentStyle}>
              <div className="row">
                {/* Left Column - Welcome Message */}
                <div className="col-lg-6">
                  <div className="section-heading mb-4">
                    <h6 className="text-danger">WELCOME BACK</h6>
                    <h2 className="text-white">LOGIN TO YOUR ACCOUNT</h2>
                  </div>
                  <p className="text-muted mb-4">
                    Access your game library, wishlist, and exclusive member benefits. Get back to gaming!
                  </p>
                  
                  <div className="login-benefits mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-gamepad text-danger me-3"></i>
                      <span>Track your game collection</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-tags text-danger me-3"></i>
                      <span>Exclusive member discounts</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-bolt text-danger me-3"></i>
                      <span>Faster checkout process</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-muted">Don't have an account?</p>
                    <Link to="/register" className="btn btn-outline-danger">
                      Create Account
                    </Link>
                  </div>
                </div>

                {/* Right Column - Login Form */}
                <div className="col-lg-6">
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="alert alert-danger">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {error}
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label text-white">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        style={inputStyle}
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label text-white">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        style={inputStyle}
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="remember-me"
                        />
                        <label className="form-check-label text-muted" htmlFor="remember-me">
                          Remember me
                        </label>
                      </div>
                      <Link to="/forgot-password" className="text-danger small">
                        Forgot password?
                      </Link>
                    </div>
                    
                    <button type="submit" className="btn btn-danger w-100 py-3 mb-3 fw-bold">
                      <i className="fas fa-sign-in-alt me-2"></i> LOGIN
                    </button>
                    
                    <div className="text-center text-muted mt-3">
                      <span>Or login with</span>
                    </div>
                    
                    <div className="d-flex justify-content-center mt-3">
                      <button type="button" className="btn btn-outline-light me-3 rounded-circle social-btn">
                        <i className="fab fa-google"></i>
                      </button>
                      <button type="button" className="btn btn-outline-light me-3 rounded-circle social-btn">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" className="btn btn-outline-light rounded-circle social-btn">
                        <i className="fab fa-twitter"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;