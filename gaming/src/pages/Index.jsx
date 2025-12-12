import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Index() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/games');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <div className="text-center py-5">Loading games...</div>;
  if (error) return <div className="text-center py-5">Error: {error}</div>;

  // Get trending games (first 4)
  const trendingGames = games.slice(0, 4);
  
  // Get random "most played" games
  const mostPlayedGames = [...games]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);
  
  // Get unique categories
  const categories = [...new Set(games.map(game => game.genre))].slice(0, 5);

  return (
    <div>
      {/* Preloader - You might want to remove or update this based on your loading state */}
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

      {/* Main Banner */}
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h6>Welcome to our store</h6>
                <h2>BEST GAMING DEALS ANYWHERE!</h2>
                <p>
                  Discover the hottest games at the best prices. Download now and start playing today!
                </p>
                <div className="search-input">
                  <form id="search">
                    <input
                      type="text"
                      placeholder="Search games..."
                      aria-label="Search games"
                    />
                    <button>Search Now</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="right-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/images/banner-image.jpg`} 
                  alt="Special offer" 
                  loading="lazy" 
                />
                <span className="price">$22</span>
                <span className="offer">-40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="image">
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/featured-01.png`} 
                    alt="" 
                    style={{ maxWidth: '44px' }} 
                  />
                </div>
                <h4>Instant Delivery</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="image">
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/featured-02.png`} 
                    alt="" 
                    style={{ maxWidth: '44px' }} 
                  />
                </div>
                <h4>24/7 Support</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="image">
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/featured-03.png`} 
                    alt="" 
                    style={{ maxWidth: '44px' }} 
                  />
                </div>
                <h4>Best Prices</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <div className="image">
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/featured-04.png`} 
                    alt="" 
                    style={{ maxWidth: '44px' }} 
                  />
                </div>
                <h4>Secure Payments</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Games */}
      <div className="section trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>Trending</h6>
                <h2>Trending Games</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <Link to="/shop">View All</Link>
              </div>
            </div>
            
            {trendingGames.map(game => (
              <div className="col-lg-3 col-md-6" key={game.id}>
                <div className="item">
                  <div className="thumb">
                    <Link to={`/ProductDT/${game.id}`}>
                      <img 
                        src={`${process.env.PUBLIC_URL}/${game.image}`}
                        alt={game.title}
                        loading="lazy"
                      />
                    </Link>
                    <span className="price">
                      {game.original_price && <em>${game.original_price}</em>}
                      ${game.price}
                    </span>
                  </div>
                  <div className="down-content">
                    <span className="category">{game.genre}</span>
                    <h4>{game.title}</h4>
                    <Link to={`/ProductDT/${game.id}`} aria-label={`Buy ${game.title}`}>
                      <i className="fa fa-shopping-bag"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Played */}
      <div className="section most-played">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>TOP GAMES</h6>
                <h2>Most Played</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <Link to="/shop">View All</Link>
              </div>
            </div>
            
            {mostPlayedGames.map(game => (
              <div className="col-lg-2 col-md-6 col-sm-6" key={game.id}>
                <div className="item">
                  <div className="thumb">
                    <Link to={`/ProductDT/${game.id}`}>
                      <img 
                        src={`${process.env.PUBLIC_URL}/${game.image}`}
                        alt={game.title}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="down-content">
                    <span className="category">{game.genre}</span>
                    <h4>{game.title}</h4>
                    <Link to={`/ProductDT/${game.id}`}>Explore</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="section categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Categories</h6>
                <h2>Top Categories</h2>
              </div>
            </div>
            
            {categories.map((category, index) => (
              <div className="col-lg col-sm-6 col-xs-12" key={category}>
                <div className="item">
                  <h4>{category}</h4>
                  <div className="thumb">
                    <Link to={`/shop?category=${category.toLowerCase().replace(/\s+/g, '-')}`}>
                      <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/categories-0${index + 1}.jpg`}
                        alt={category}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="shop">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>Our Shop</h6>
                      <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                    </div>
                    <p>Get exclusive deals and discounts when you pre-order your favorite games.</p>
                    <div className="main-button">
                      <Link to="/shop">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2 align-self-end">
              <div className="subscribe">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>NEWSLETTER</h6>
                      <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
                    </div>
                    <div className="search-input">
                      <form id="subscribe">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email..."
                          aria-label="Email for newsletter"
                          required
                        />
                        <button>Subscribe Now</button>
                      </form>
                    </div>
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

export default Index;