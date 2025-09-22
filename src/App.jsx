import React, { useState } from "react";
import './App.css';

export default function App() {
  const [reservation, setReservation] = useState({ type: "AC", dining: "" });
  const [client] = useState({
    name: "Sakthi",
    id: 1001,
    client_no: 9,
    card_num: "NOO4512",
  });
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const menu = [
    { name: "Cheese Burgers", price: 120, category: "Main Course" },
    { name: "Plain Dosa", price: 50, category: "Main Course" },
    { name: "Butter Naan", price: 90, category: "Main Course" },
    { name: "Romali Roti", price: 40, category: "Main Course" },
    { name: "Lentil Soup", price: 45, category: "Appetizers" },
    { name: "Fruit Salad", price: 35, category: "Appetizers" },
    { name: "Sandwich", price: 96, category: "Appetizers" },
    { name: "French Fries", price: 40, category: "Appetizers" },
    { name: "Veg Nuggets", price: 120, category: "Appetizers" },
    { name: "Milkshake", price: 50, category: "Desserts" },
    { name: "Falooda", price: 70, category: "Desserts" },
    { name: "Ice-cream", price: 90, category: "Desserts" },
    { name: "Cold-Coffee", price: 60, category: "Desserts" },
    { name: "Rasgulla", price: 90, category: "Desserts" },
  ];

  const handleOrder = (item) => {
    setOrders([...orders, item]);
    setTotal(total + item.price);
  };

  return (
    <div className="app-container">
      {/* Animated Background Elements */}
      <div className="magical-background">
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
          <div className="floating-diamond diamond-1"></div>
          <div className="floating-diamond diamond-2"></div>
        </div>
        <div className="particle-system">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
      
      {/* Animated Light Rays */}
      <div className="light-rays">
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
      </div>
      
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-background-overlay"></div>
        <div className="header-content">
          <div className="logo-animation">
            <div className="logo-circle"></div>
            <div className="logo-text">E</div>
          </div>
          <h1 className="main-title neon-glow">
            <span className="title-accent rotating-star">★</span> 
            <span className="title-word">A</span> 
            <span className="title-word">PLACE</span> 
            <span className="title-word">WHERE</span> 
            <span className="title-word">MEMORIES</span> 
            <span className="title-word">ARE</span> 
            <span className="title-word">MADE</span> 
            <span className="title-accent rotating-star">★</span>
          </h1>
          <h2 className="restaurant-name holographic-text">
            Welcome to <span className="brand-highlight magical-text">ENIGMA EMPORIUM</span>
          </h2>
          <div className="star-constellation">
            <span className="constellation-star star-1">★</span>
            <span className="constellation-star star-2">★</span>
            <span className="constellation-star star-3">★</span>
            <span className="constellation-star star-4">★</span>
            <span className="constellation-star star-5">★</span>
          </div>
          <div className="subtitle-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-gem">💎</span>
            <span className="decoration-line"></span>
          </div>
        </div>
      </header>

      <div className="main-content">
        {/* Restaurant & Client Info Cards */}
        <div className="info-section">
          <div className="info-card restaurant-card morphing-card">
            <div className="card-aurora"></div>
            <div className="card-header">
              <h3>Restaurant Details</h3>
              <div className="card-icon pulsing-icon">🏛️</div>
            </div>
            <div className="card-content">
              <div className="detail-item">
                <span className="label">Type:</span>
                <span className="value luxury-badge rainbow-badge">5-Star Luxury</span>
              </div>
            </div>
            <div className="card-sparkles">
              <div className="sparkle sparkle-1">✨</div>
              <div className="sparkle sparkle-2">✨</div>
              <div className="sparkle sparkle-3">✨</div>
            </div>
          </div>

          <div className="info-card client-card morphing-card">
            <div className="card-aurora"></div>
            <div className="card-header">
              <h3>Guest Information</h3>
              <div className="card-icon pulsing-icon">👤</div>
            </div>
            <div className="card-content">
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value glowing-text">{client.name}</span>
              </div>
              <div className="detail-item">
                <span className="label">Booking ID:</span>
                <span className="value digital-text">{client.id}</span>
              </div>
              <div className="detail-item">
                <span className="label">Guests:</span>
                <span className="value badge-number">{client.client_no}</span>
              </div>
              <div className="detail-item">
                <span className="label">Card:</span>
                <span className="value premium-card">{client.card_num}</span>
              </div>
            </div>
            <div className="card-sparkles">
              <div className="sparkle sparkle-1">✨</div>
              <div className="sparkle sparkle-2">✨</div>
              <div className="sparkle sparkle-3">✨</div>
            </div>
          </div>
        </div>

        {/* Reservation Section */}
        <div className="reservation-section">
          <div className="section-card crystal-card">
            <div className="crystal-background"></div>
            <div className="section-header">
              <h3 className="section-title rainbow-text">Table Reservation</h3>
              <div className="animated-line"></div>
            </div>
            <div className="reservation-content">
              <div className="reservation-row">
                <label className="reservation-label glowing-label">Dining Experience:</label>
                <select
                  className="magical-select"
                  value={reservation.dining}
                  onChange={(e) => setReservation({ ...reservation, dining: e.target.value })}
                >
                  <option value="">✨ Choose your experience ✨</option>
                  <option value="Family dining">👨‍👩‍👧‍👦 Family Dining</option>
                  <option value="Couple dining">💕 Romantic Dining</option>
                  <option value="Single dining">🍽️ Solo Dining</option>
                </select>
              </div>
              <div className="reservation-details">
                <div className="detail-pill neon-pill">
                  <span className="pill-icon">🌟</span>
                  <span className="pill-label">Ambiance:</span>
                  <span className="pill-value">{reservation.type}</span>
                </div>
                {reservation.dining && (
                  <div className="detail-pill cosmic-pill">
                    <span className="pill-icon">🎭</span>
                    <span className="pill-label">Experience:</span>
                    <span className="pill-value">{reservation.dining}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="menu-section">
          <div className="menu-header">
            <h2 className="menu-title cosmic-title">
              <span className="title-decoration">🌟</span>
              Culinary Universe
              <span className="title-decoration">🌟</span>
            </h2>
            <div className="cosmic-line"></div>
            <p className="menu-subtitle">Embark on a gastronomic journey through the stars</p>
          </div>
          
          <div className="menu-galaxy">
            {['Main Course', 'Appetizers', 'Desserts'].map((category, categoryIndex) => (
              <div key={category} className={`menu-planet planet-${categoryIndex + 1}`}>
                <div className="planet-rings"></div>
                <div className="planet-atmosphere"></div>
                <h3 className="category-title cosmic-category">
                  <span className="category-orbit">
                    <span className="category-icon rotating-icon">
                      {category === 'Main Course' ? '🍽️' : category === 'Appetizers' ? '🥗' : '🍰'}
                    </span>
                  </span>
                  <span className="category-name">{category}</span>
                </h3>
                <div className="menu-constellation">
                  {menu
                    .filter((item) => item.category === category)
                    .map((item, idx) => (
                      <div key={idx} className="menu-star">
                        <div className="star-glow"></div>
                        <div className="item-info">
                          <span className="item-name stellar-text">{item.name}</span>
                          <span className="item-price cosmic-price">₹{item.price}</span>
                        </div>
                        <button
                          className="quantum-button"
                          onClick={() => handleOrder(item)}
                        >
                          <span className="button-particles"></span>
                          <span className="button-text">Add</span>
                          <span className="button-icon">⚡</span>
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-section">
          <div className="section-card order-portal">
            <div className="portal-energy"></div>
            <div className="section-header">
              <h2 className="portal-title">Order Dimension</h2>
              <div className="energy-line"></div>
            </div>
            <div className="order-content">
              {orders.length === 0 ? (
                <div className="empty-dimension">
                  <div className="void-icon">🌌</div>
                  <p className="void-text">Your culinary dimension awaits activation...</p>
                  <div className="void-particles">
                    <div className="void-particle"></div>
                    <div className="void-particle"></div>
                    <div className="void-particle"></div>
                  </div>
                </div>
              ) : (
                <div className="order-matrix">
                  {orders.map((order, i) => (
                    <div key={i} className="matrix-item">
                      <div className="item-energy"></div>
                      <span className="matrix-name">{order.name}</span>
                      <span className="matrix-price energy-text">₹{order.price}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="total-nexus">
                <div className="nexus-energy"></div>
                <div className="total-amount quantum-total">
                  <span className="total-label">Total Cosmic Value:</span>
                  <span className="total-price dimensional-price">₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="cosmic-footer">
        <div className="footer-nebula"></div>
        <div className="footer-content">
          <div className="contact-constellation">
            <div className="contact-star">
              <span className="contact-icon">📞</span>
              <span className="contact-text">8072497758</span>
            </div>
            <div className="contact-star">
              <span className="contact-icon">📍</span>
              <span className="contact-text">No.6, Dubai Kurukku Sandhu, Vivekanandhar Theru, Dubai Main Road, Dubai</span>
            </div>
          </div>
          <div className="farewell-universe">
            <h3 className="farewell-title supernova-text">THANK YOU! PLEASE VISIT AGAIN!</h3>
            <div className="universe-decoration">
              <span className="cosmic-symbol">🌟</span>
              <span className="cosmic-symbol">✨</span>
              <span className="cosmic-symbol">🌟</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}