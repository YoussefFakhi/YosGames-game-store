import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card'
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.match(/^\d{5}(-\d{4})?$/)) newErrors.zipCode = 'Valid ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // On success:
      const orderNumber = Math.floor(Math.random() * 1000000); // Generate random order number
      navigate('/order-confirmation', { 
        state: { 
          orderNumber,
          items: [...cart], // Create a copy of the cart
          total: totalPrice * 1.1,
          shippingInfo: {...formData} // Create a copy of form data
        } 
      });
      
      clearCart();
    } catch (error) {
      console.error('Payment error:', error);
      setErrors({ payment: 'Payment processing failed. Please try again.' });
    } finally {
      setIsProcessing(false);
    }
  };

  // Page styling to match your theme
  const pageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/checkout-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    paddingTop: '120px',
    paddingBottom: '50px'
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  };

  if (cart.length === 0) {
    return (
      <div style={pageStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center" style={contentStyle}>
              <h2>Your cart is empty</h2>
              <p>There's nothing to checkout yet.</p>
              <Link to="/shop" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={contentStyle}>
              <h1 className="mb-4">Checkout</h1>
              
              {errors.payment && (
                <div className="alert alert-danger mb-4">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {errors.payment}
                </div>
              )}
              
              <div className="row">
                {/* Left Column - Shipping and Payment */}
                <div className="col-lg-7">
                  <form onSubmit={handleSubmit}>
                    <div className="card mb-4">
                      <div className="card-header bg-white text-dark border-bottom">
                        <h5 className="mb-0">Shipping Information</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">First Name*</label>
                            <input
                              type="text"
                              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Last Name*</label>
                            <input
                              type="text"
                              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="form-label">Email*</label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        
                        <div className="mb-3">
                          <label className="form-label">Address*</label>
                          <input
                            type="text"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>
                        
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">City*</label>
                            <input
                              type="text"
                              className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                            />
                            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">ZIP Code*</label>
                            <input
                              type="text"
                              className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleChange}
                            />
                            {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card mb-4">
                      <div className="card-header bg-white text-dark border-bottom">
                        <h5 className="mb-0">Payment Method</h5>
                      </div>
                      <div className="card-body">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="credit-card"
                            value="credit-card"
                            checked={formData.paymentMethod === 'credit-card'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="credit-card">
                            Credit Card
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="paypal"
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="paypal">
                            PayPal
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="crypto"
                            value="crypto"
                            checked={formData.paymentMethod === 'crypto'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="crypto">
                            Cryptocurrency
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="d-grid">
                      <button 
                        type="submit" 
                        className="btn btn-danger btn-lg py-3"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          `Pay $${(totalPrice * 1.1).toFixed(2)}`
                        )}
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Right Column - Order Summary */}
                <div className="col-lg-5">
                  <div className="card">
                    <div className="card-header bg-white text-dark border-bottom">
                      <h5 className="mb-0">Order Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        {cart.map(item => (
                          <div key={item.id} className="d-flex justify-content-between mb-2">
                            <div>
                              <span className="fw-bold">{item.title}</span>
                              <span className="text-muted"> x {item.quantity}</span>
                            </div>
                            <div>${(item.price * item.quantity).toFixed(2)}</div>
                          </div>
                        ))}
                      </div>
                      
                      <hr />
                      
                      <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal ({totalItems} items)</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Shipping</span>
                        <span className="text-success">FREE</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Tax (10%)</span>
                        <span>${(totalPrice * 0.1).toFixed(2)}</span>
                      </div>
                      
                      <hr />
                      
                      <div className="d-flex justify-content-between fw-bold fs-5">
                        <span>Total</span>
                        <span>${(totalPrice * 1.1).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <Link to="/cart" className="btn btn-outline-secondary w-100">
                      Back to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}