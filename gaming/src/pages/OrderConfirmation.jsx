import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function OrderConfirmation() {
  const { state } = useLocation();
  
  // Fallback if accessed directly
  if (!state) {
    return (
      <div className="container text-center py-5">
        <h2>Order not found</h2>
        <p>Please place an order first.</p>
        <Link to="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const { orderNumber, items, total, shippingInfo } = state;

  // Page styling to match your theme
  const pageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/confirmation-bg.jpg)`,
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
    boxShadow: '0 10px 30px rgba(255, 1, 1, 0.1)'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div style={contentStyle} className="text-center">
              <div className="mb-4">
                <i className="fas fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
              </div>
              <h2 className="mb-3">Order Confirmed!</h2>
              <p className="lead mb-4">Thank you for your purchase</p>
              
              <div className="card mb-4 text-start">
                <div className="card-header bg-white text-dark border-bottom">
                  <h5 className="mb-0">Order #{orderNumber}</h5>
                </div>
                <div className="card-body">
                  <h6 className="mb-3">Items Purchased:</h6>
                  {items.map(item => (
                    <div key={item.id} className="d-flex justify-content-between mb-2">
                      <div>
                        <span className="fw-bold">{item.title}</span>
                        <span className="text-muted"> x {item.quantity}</span>
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total Paid:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="card mb-4 text-start">
                <div className="card-header bg-white text-dark border-bottom">
                  <h5 className="mb-0">Shipping Information</h5>
                </div>
                <div className="card-body">
                  <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                  <p>{shippingInfo.address}</p>
                  <p>{shippingInfo.city}, {shippingInfo.zipCode}</p>
                  <p className="mt-2">{shippingInfo.email}</p>
                </div>
              </div>
              
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <Link to="/shop" className="btn btn-primary me-md-2">
                  Continue Shopping
                </Link>
                <Link to="/orders" className="btn btn-outline-secondary">
                  View Order History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}