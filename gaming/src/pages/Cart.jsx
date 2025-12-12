import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalPrice, 
    totalItems 
  } = useCart();

  // Fix header background on mount
  useEffect(() => {
    const header = document.querySelector('.header-area');
    header.classList.add('background-header');
    
    return () => {
      header.classList.remove('background-header');
    };
  }, []);

  // Background image style
  const pageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/cart-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    paddingTop: '120px', // Adjusted to account for header
    paddingBottom: '50px'
  };

  // Content container
  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div style={contentStyle}>
              <h1 className="mb-4">Your Cart</h1>
              
              {cart.length === 0 ? (
                <div className="text-center py-5">
                  <h4>Your cart is empty</h4>
                  <Link to="/shop" className="btn btn-primary mt-3">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="row">
                  <div className="col-lg-8">
                    {cart.map(item => (
                      <div key={item.id} className="card mb-4">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${process.env.PUBLIC_URL}/${item.image}`}
                              className="img-fluid rounded-start"
                              alt={item.title}
                              style={{
                                objectFit: 'cover',
                                height: '100%',
                                maxHeight: '200px'
                              }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text text-muted">{item.genre}</p>
                              <p className="card-text">${item.price.toFixed(2)} each</p>
                              
                              <div className="d-flex align-items-center mt-3">
                                <button 
                                  className="btn btn-outline-secondary btn-sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                                
                                <span className="mx-3 fs-5">{item.quantity}</span>
                                
                                <button 
                                  className="btn btn-outline-secondary btn-sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                                
                                <span className="ms-auto fw-bold fs-5">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="btn btn-outline-danger ms-3"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Order Summary</h4>
                        <div className="d-flex justify-content-between mb-2">
                          <span>Items ({totalItems}):</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <span>Shipping:</span>
                          <span className="text-success">Free</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                          <span>Total:</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        
                        <Link to="/checkout" className="btn btn-danger w-100 mb-3 py-2">
                          Proceed to Checkout
                        </Link>
                        
                        <button 
                          onClick={clearCart}
                          className="btn btn-outline-secondary w-100 mb-2 py-2"
                        >
                          Clear Cart
                        </button>
                        
                        <Link to="/shop" className="btn btn-outline-primary w-100 py-2">
                          Continue Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}