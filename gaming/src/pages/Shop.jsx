import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  // Configuration
  const gamesPerPage = 6;
  const filters = [
    { value: '*', label: 'Show All' },
    { value: 'adv', label: 'Adventure' },
    { value: 'str', label: 'Strategy' },
    { value: 'rac', label: 'Racing' }
  ];

  // State
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('*');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch games from API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/games');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Filtered games
  const filteredGames = activeFilter === '*' 
    ? games 
    : games.filter(game => game.category === activeFilter);

  // Pagination calculations
  const totalGames = filteredGames.length;
  const totalPages = Math.ceil(totalGames / gamesPerPage);
  const currentGames = filteredGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading games...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-danger">Error: {error}</div>
        <button 
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Shop</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Our Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Shop Content */}
      <div className="section trending">
        <div className="container">
          {/* Filter Buttons */}
          <ul className="trending-filter">
            {filters.map(filter => (
              <li key={filter.value}>
                <Link
                  to="#"
                  className={activeFilter === filter.value ? 'is_active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(filter.value);
                    setCurrentPage(1);
                  }}
                >
                  {filter.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Game Grid */}
          <div className="row trending-box">
            {currentGames.length > 0 ? (
              currentGames.map(game => (
                <div 
                  key={game.id} 
                  className={`col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 ${game.category}`}
                >
                  <div className="item">
                    <div className="thumb">
                      <Link to={`/ProductDT/${game.id}`}>
                        <img 
                          src={`${process.env.PUBLIC_URL}/${game.image}`} 
                          alt={game.title} 
                          onError={(e) => {
                            e.target.src = `${process.env.PUBLIC_URL}/assets/images/default-game.jpg`;
                          }}
                        />
                      </Link>
                      <span className="price">
                        {game.originalPrice && <em>${game.originalPrice}</em>}
                        ${game.price}
                      </span>
                    </div>
                    <div className="down-content">
                      <span className="category">{game.genre}</span>
                      <h4>{game.title}</h4>
                      <Link to={`/ProductDT/${game.id}`}>
                        <i className="fa fa-shopping-bag"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No games found in this category</h4>
                <Link to="/shop" className="btn btn-primary">
                  Reset Filters
                </Link>
              </div>
            )}
          </div>

          {/* Pagination - Only show if we have games */}
          {totalGames > 0 && totalPages > 1 && (
            <div className="row">
              <div className="col-lg-12">
                <ul className="pagination">
                  <li>
                    <Link 
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(prev => Math.max(prev - 1, 1));
                      }}
                      className={currentPage === 1 ? 'disabled' : ''}
                    >
                      &lt;
                    </Link>
                  </li>
                  
                  {currentPage > 3 && (
                    <>
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(1);
                          }}
                        >
                          1
                        </Link>
                      </li>
                      {currentPage > 4 && <li className="disabled"><span>...</span></li>}
                    </>
                  )}
                  
                  {getPageNumbers().map(number => (
                    <li key={number}>
                      <Link
                        to="#"
                        className={currentPage === number ? 'is_active' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(number);
                        }}
                      >
                        {number}
                      </Link>
                    </li>
                  ))}
                  
                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && <li className="disabled"><span>...</span></li>}
                      <li>
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(totalPages);
                          }}
                        >
                          {totalPages}
                        </Link>
                      </li>
                    </>
                  )}
                  
                  <li>
                    <Link 
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(prev => 
                          prev < totalPages ? prev + 1 : prev
                        );
                      }}
                      className={currentPage >= totalPages ? 'disabled' : ''}
                    >
                      &gt;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;