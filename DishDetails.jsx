import React, { useState } from 'react';
import '../style/DishDetails.css';
import Header from './Header';
import dishimage from './8190a4f56acb0a34465c34285c32dbf3d99f1c65.png';

const DishDetails = ({ dish }) => {
  const fallbackDish = {
    name: "Veg Biryani",
    isVeg: true,
    shortDescription: "Aromatic rice with spices",
    description: "This biryani is cooked with basmati rice, mixed vegetables, saffron, and aromatic spices.",
    priceHalf: 120,
    priceFull: 200,
    rating: 4.3,
    orders: 340
  };

  const currentDish = dish || fallbackDish;

  const [portion, setPortion] = useState('half');
  const [halfQty, setHalfQty] = useState(0);
  const [fullQty, setFullQty] = useState(0);

  const handleRadioChange = (e) => {
    setPortion(e.target.value);
  };

  const handleAdd = () => {
    if (portion === 'half') {
      setHalfQty((prev) => prev + 1);
    } else {
      setFullQty((prev) => prev + 1);
    }
  };

  const handleDecrease = (portionType) => {
    if (portionType === 'half' && halfQty > 0) {
      setHalfQty((prev) => prev - 1);
    } else if (portionType === 'full' && fullQty > 0) {
      setFullQty((prev) => prev - 1);
    }
  };

  const halfPrice = currentDish.priceHalf * halfQty;
  const fullPrice = currentDish.priceFull * fullQty;
  const totalPrice = halfPrice + fullPrice;
  const totalItems = halfQty + fullQty;

  const handleBackClick = () => {
    // Add navigation logic here
    console.log('Back button clicked');
  };

  const handleHeartClick = () => {
    // Add favorite toggle logic here
    console.log('Heart button clicked');
  };

  return (
    <div className="content-frame">
      <Header />

      <div className="dish-container">
        <img src={dishimage} alt={currentDish.name} className="dish-img" />

        <button className="icon-button back-arrow" onClick={handleBackClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="icon-button heart-icon" onClick={handleHeartClick}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
              2 6.5 3.5 5 5.5 5
              c1.54 0 3.04 1.04 3.57 2.36
              h1.87C13.46 6.04 14.96 5 16.5 5
              c2 0 3.5 1.5 3.5 3.5
              c0 3.78-3.4 6.86-8.65 11.54L12.1 21.35z"
              fill="#FF6F00"
            />
          </svg>
        </button>
      </div>

      <div className="rectangle-62">
        <div className="veg-label">
          <div className="veg-icon-wrapper">
            <div className="veg-square">
              <div className="veg-circle"></div>
            </div>
          </div>
          <span className="veg-text">{currentDish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}</span>
        </div>

        <div className="frame-36">
          <div className="frame-34">
            <div className="frame-38">
              <div className="dish-name">{currentDish.name}</div>
              <div className="dish-description">{currentDish.shortDescription}</div>
            </div>
            <div className="frame-37">
              <div className="star-icon">⭐</div>
              <div className="rating-text">
                {currentDish.rating} ({currentDish.orders} ordered)
              </div>
            </div>
          </div>
        </div>

        <div className="dish-full-description">{currentDish.description}</div>

        <div className="portion-selection">
          {/* Half Portion */}
          <div className="portion-row">
            <div className="portion-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="radio"
                id="half"
                name="portion"
                value="half"
                checked={portion === 'half'}
                onChange={handleRadioChange}
                style={{ cursor: 'pointer' }}
              />
              <label htmlFor="half" className="portion-label" style={{ cursor: 'pointer' }}>Half</label>
            </div>
            <div className="portion-right">
              <div className="quantity-controls">
                {halfQty > 0 && (
                  <button 
                    className="quantity-btn decrease-btn" 
                    onClick={() => handleDecrease('half')}
                  >
                    -
                  </button>
                )}
                <div className="add-button" onClick={portion === 'half' ? handleAdd : undefined}>
                  <span className="add-text">
                    {halfQty === 0 ? 'Add' : halfQty < 10 ? `0${halfQty}` : halfQty}
                  </span>
                  <span className="plus-icon">+</span>
                </div>
              </div>
              <div className="price">₹{halfPrice}</div>
            </div>
          </div>

          {/* Full Portion */}
          <div className="portion-row">
            <div className="portion-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                type="radio"
                id="full"
                name="portion"
                value="full"
                checked={portion === 'full'}
                onChange={handleRadioChange}
                style={{ cursor: 'pointer' }}
              />
              <label htmlFor="full" className="portion-label" style={{ cursor: 'pointer' }}>Full</label>
            </div>
            <div className="portion-right">
              <div className="quantity-controls">
                {fullQty > 0 && (
                  <button 
                    className="quantity-btn decrease-btn" 
                    onClick={() => handleDecrease('full')}
                  >
                    -
                  </button>
                )}
                <div className="add-button" onClick={portion === 'full' ? handleAdd : undefined}>
                  <span className="add-text">
                    {fullQty === 0 ? 'Add' : fullQty < 10 ? `0${fullQty}` : fullQty}
                  </span>
                  <span className="plus-icon">+</span>
                </div>
              </div>
              <div className="price">₹{fullPrice}</div>
            </div>
          </div>
        </div>

        {totalItems > 0 && (
          <div className="order-summary">
            <div className="summary-content">
              <span className="total-items">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
              <span className="total-price">₹{totalPrice}</span>
            </div>
          </div>
        )}

        <div className="order-status">
          <div className="d-flex align-items-center justify-content-between px-3 py-2">
            <div className="d-flex align-items-start">
              <i className="fas fa-fire status-icon me-3"></i>
              <div className="status-text">
                <div className="status-title">Yum! Your order is heating up.</div>
                <div className="status-subtitle">Add more or place order.</div>
              </div>
              <div className="arrow-icon">
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;