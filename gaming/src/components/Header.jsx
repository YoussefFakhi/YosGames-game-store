import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-area');
      if (window.scrollY > 50) {
        header.classList.add('background-header');
      } else {
        header.classList.remove('background-header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} 
                  alt="Game Store" 
                  style={{maxWidth: '110px'}}
                />
              </Link>
              
              <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li>
                  <Link to="/cart" className="position-relative">
                    <i className="fa fa-shopping-cart"></i> Cart
                    {totalItems > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
              <a href="#menu" className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
