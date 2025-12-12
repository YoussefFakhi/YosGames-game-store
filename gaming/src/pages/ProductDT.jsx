import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductDT() {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/games/${gameId}`);
        if (!response.ok) {
          throw new Error('Game not found');
        }
        const data = await response.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
    window.scrollTo(0, 0);
  }, [gameId]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (game) {
      addToCart(game, quantity);
      alert(`${quantity} ${game.title}(s) added to cart!`);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading game details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <h3>{error}</h3>
        <Link to="/shop" className="btn btn-primary mt-3">
          Back to Shop
        </Link>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="text-center py-5">
        <h3>Game not found</h3>
        <Link to="/shop" className="btn btn-primary mt-3">
          Back to Shop
        </Link>
      </div>
    );
  }

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${process.env.PUBLIC_URL}/${cleanPath}`;
  };

  return (
    <div className="single-product section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-image">
              <img 
                src={getImageUrl(game.image)} 
                alt={game.title}
                className="img-fluid rounded"
                onError={(e) => {
                  e.target.src = `${process.env.PUBLIC_URL}/assets/images/default-game.jpg`;
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <h4>{game.title}</h4>
            <span className="price">
              {game.originalPrice && <em>${game.originalPrice}</em>}
              ${game.price}
            </span>
            <p>{game.description}</p>
            
            <form id="qty" onSubmit={handleAddToCart}>
              <input 
                type="number" 
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="form-control"
                style={{width: '100px', display: 'inline-block', marginRight: '15px'}}
              />
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-shopping-bag"></i> ADD TO CART (${(game.price * quantity).toFixed(2)})
              </button>
            </form>
            
            <ul className="mt-4">
              <li><span>Game ID:</span> {game.id}</li>
              <li>
                <span>Genre:</span> 
                <Link to={`/shop?filter=${game.category}`}>{game.genre}</Link>
              </li>
              {game.tags && (
                <li>
                  <span>Tags:</span>
                  {JSON.parse(game.tags).map((tag, i) => (
                    <React.Fragment key={tag}>
                      <Link to={`/shop?search=${tag}`}>{tag}</Link>
                      {i < JSON.parse(game.tags).length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDT;