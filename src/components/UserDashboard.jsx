import React, { useState } from 'react';
import './UserDashboard.css';

const UserDashboard = ({ onNavigate, user }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [userName] = useState(user?.name || 'User');

  // Mock data - in a real app, this would come from your backend
  const purchasedLaptops = [
    {
      id: 1,
      name: "MacBook Pro 13-inch M2",
      brand: "Apple",
      price: 1299,
      purchaseDate: "2024-01-15",
      status: "Delivered",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Dell XPS 15 9520",
      brand: "Dell",
      price: 1099,
      purchaseDate: "2024-01-10",
      status: "In Transit",
      image: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const wishlist = [
    {
      id: 3,
      name: "ThinkPad X1 Carbon Gen 10",
      brand: "Lenovo",
      price: 899,
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "ASUS ROG Strix G15",
      brand: "ASUS",
      price: 1199,
      image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  // Shopping Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: 5,
      name: "HP Spectre x360 14",
      brand: "HP",
      price: 799,
      quantity: 1,
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Surface Laptop Studio",
      brand: "Microsoft",
      price: 1399,
      quantity: 1,
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]);

  const [savedForLater, setSavedForLater] = useState([
    {
      id: 7,
      name: "MacBook Air M1",
      brand: "Apple",
      price: 999,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    }
  ]);

  // Recently Viewed State
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 8,
      name: "Lenovo ThinkPad T14",
      brand: "Lenovo",
      price: 1299,
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      viewedAt: "2024-01-20"
    },
    {
      id: 9,
      name: "Dell Inspiron 15",
      brand: "Dell",
      price: 699,
      image: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=400",
      viewedAt: "2024-01-19"
    }
  ]);

  // Price Alerts State
  const [priceAlerts, setPriceAlerts] = useState([
    {
      id: 3,
      name: "ThinkPad X1 Carbon Gen 10",
      brand: "Lenovo",
      currentPrice: 899,
      targetPrice: 850,
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      alertSet: "2024-01-15"
    }
  ]);

  const currentOrders = [
    {
      id: "ORD-001",
      laptopName: "HP Spectre x360 14",
      price: 799,
      orderDate: "2024-01-20",
      status: "Processing",
      estimatedDelivery: "2024-01-25"
    },
    {
      id: "ORD-002", 
      laptopName: "Surface Laptop Studio",
      price: 1399,
      orderDate: "2024-01-18",
      status: "Shipped",
      estimatedDelivery: "2024-01-23"
    }
  ];

  // Cart Functions
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const moveToSavedForLater = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      setSavedForLater(prev => [...prev, { ...item, quantity: 1 }]);
      removeFromCart(itemId);
    }
  };

  const moveToCart = (itemId) => {
    const item = savedForLater.find(item => item.id === itemId);
    if (item) {
      setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
      setSavedForLater(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const removeFromSaved = (itemId) => {
    setSavedForLater(prev => prev.filter(item => item.id !== itemId));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="welcome-section">
        <h2>Welcome back, {userName}! 👋</h2>
        <p>Here's what's happening with your account today.</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🛒</div>
          <div className="stat-content">
            <h3>{getCartItemCount()}</h3>
            <p>Cart Items</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>{purchasedLaptops.length}</h3>
            <p>Purchased Laptops</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <div className="stat-content">
            <h3>{wishlist.length}</h3>
            <p>Wishlist Items</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>{currentOrders.length}</h3>
            <p>Active Orders</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-content">
            <h3>{recentlyViewed.length}</h3>
            <p>Recently Viewed</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔔</div>
          <div className="stat-content">
            <h3>{priceAlerts.length}</h3>
            <p>Price Alerts</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">🛒</div>
            <div className="activity-content">
              <p><strong>Order placed</strong> for HP Spectre x360 14</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">❤️</div>
            <div className="activity-content">
              <p><strong>Added</strong> ASUS ROG Strix G15 to wishlist</p>
              <span className="activity-time">3 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📦</div>
            <div className="activity-content">
              <p><strong>Received</strong> MacBook Pro 13-inch M2</p>
              <span className="activity-time">1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPurchasedLaptops = () => (
    <div className="purchased-laptops">
      <h3>My Purchased Laptops</h3>
      <div className="laptops-grid">
        {purchasedLaptops.map(laptop => (
          <div key={laptop.id} className="laptop-card">
            <img src={laptop.image} alt={laptop.name} />
            <div className="laptop-info">
              <h4>{laptop.name}</h4>
              <p className="brand">{laptop.brand}</p>
              <p className="price">${laptop.price}</p>
              <p className="purchase-date">Purchased: {laptop.purchaseDate}</p>
              <span className={`status ${laptop.status.toLowerCase().replace(' ', '-')}`}>
                {laptop.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="wishlist">
      <h3>My Wishlist</h3>
      <div className="laptops-grid">
        {wishlist.map(laptop => (
          <div key={laptop.id} className="laptop-card">
            <img src={laptop.image} alt={laptop.name} />
            <div className="laptop-info">
              <h4>{laptop.name}</h4>
              <p className="brand">{laptop.brand}</p>
              <p className="price">${laptop.price}</p>
              <div className="wishlist-actions">
                <button className="btn-primary">Add to Cart</button>
                <button className="btn-secondary">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="orders">
      <h3>My Orders</h3>
      <div className="orders-list">
        {currentOrders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h4>Order #{order.id}</h4>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className="order-details">
              <p><strong>Product:</strong> {order.laptopName}</p>
              <p><strong>Price:</strong> ${order.price}</p>
              <p><strong>Order Date:</strong> {order.orderDate}</p>
              <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
            </div>
            <div className="order-actions">
              <button className="btn-secondary">Track Order</button>
              <button className="btn-secondary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderShoppingCart = () => (
    <div className="shopping-cart">
      <h3>Shopping Cart ({getCartItemCount()} items)</h3>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="btn-primary" onClick={() => onNavigate('home')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="brand">{item.brand}</p>
                  <p className="price">${item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="item-actions">
                  <button 
                    className="btn-secondary"
                    onClick={() => moveToSavedForLater(item.id)}
                  >
                    Save for Later
                  </button>
                  <button 
                    className="btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h4>Order Summary</h4>
            <div className="summary-item">
              <span>Subtotal ({getCartItemCount()} items):</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button className="btn-primary checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {savedForLater.length > 0 && (
        <div className="saved-for-later">
          <h4>Saved for Later ({savedForLater.length} items)</h4>
          <div className="saved-items">
            {savedForLater.map(item => (
              <div key={item.id} className="saved-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h5>{item.name}</h5>
                  <p className="brand">{item.brand}</p>
                  <p className="price">${item.price}</p>
                </div>
                <div className="saved-actions">
                  <button 
                    className="btn-primary"
                    onClick={() => moveToCart(item.id)}
                  >
                    Move to Cart
                  </button>
                  <button 
                    className="btn-danger"
                    onClick={() => removeFromSaved(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderRecentlyViewed = () => (
    <div className="recently-viewed">
      <h3>Recently Viewed</h3>
      <div className="laptops-grid">
        {recentlyViewed.map(laptop => (
          <div key={laptop.id} className="laptop-card">
            <img src={laptop.image} alt={laptop.name} />
            <div className="laptop-info">
              <h4>{laptop.name}</h4>
              <p className="brand">{laptop.brand}</p>
              <p className="price">${laptop.price}</p>
              <p className="viewed-date">Viewed: {laptop.viewedAt}</p>
              <div className="recent-actions">
                <button className="btn-primary">Add to Cart</button>
                <button className="btn-secondary">Add to Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPriceAlerts = () => (
    <div className="price-alerts">
      <h3>Price Alerts</h3>
      <div className="alerts-list">
        {priceAlerts.map(alert => (
          <div key={alert.id} className="alert-card">
            <img src={alert.image} alt={alert.name} />
            <div className="alert-info">
              <h4>{alert.name}</h4>
              <p className="brand">{alert.brand}</p>
              <div className="price-info">
                <p className="current-price">Current: ${alert.currentPrice}</p>
                <p className="target-price">Target: ${alert.targetPrice}</p>
                <p className="difference">
                  ${alert.currentPrice - alert.targetPrice} more needed
                </p>
              </div>
              <p className="alert-set">Alert set: {alert.alertSet}</p>
            </div>
            <div className="alert-actions">
              <button className="btn-primary">View Product</button>
              <button className="btn-secondary">Edit Alert</button>
              <button className="btn-danger">Remove Alert</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="account-settings">
      <h3>Account Settings</h3>
      <div className="settings-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" defaultValue={userName} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" defaultValue="user@example.com" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" defaultValue="+1 (555) 123-4567" />
        </div>
        <div className="form-group">
          <label>Shipping Address</label>
          <textarea defaultValue="123 Main St, City, State 12345"></textarea>
        </div>
        <button className="btn-primary">Save Changes</button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'purchased':
        return renderPurchasedLaptops();
      case 'wishlist':
        return renderWishlist();
      case 'cart':
        return renderShoppingCart();
      case 'recently-viewed':
        return renderRecentlyViewed();
      case 'price-alerts':
        return renderPriceAlerts();
      case 'orders':
        return renderOrders();
      case 'settings':
        return renderAccountSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="user-info">
          <span>Welcome, {userName}</span>
          <button className="logout-btn" onClick={() => onNavigate('home')}>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`nav-item ${activeSection === 'cart' ? 'active' : ''}`}
              onClick={() => setActiveSection('cart')}
            >
              🛒 Shopping Cart ({getCartItemCount()})
            </button>
            <button 
              className={`nav-item ${activeSection === 'purchased' ? 'active' : ''}`}
              onClick={() => setActiveSection('purchased')}
            >
              💻 My Laptops
            </button>
            <button 
              className={`nav-item ${activeSection === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveSection('wishlist')}
            >
              ❤️ Wishlist
            </button>
            <button 
              className={`nav-item ${activeSection === 'recently-viewed' ? 'active' : ''}`}
              onClick={() => setActiveSection('recently-viewed')}
            >
              👁️ Recently Viewed
            </button>
            <button 
              className={`nav-item ${activeSection === 'price-alerts' ? 'active' : ''}`}
              onClick={() => setActiveSection('price-alerts')}
            >
              🔔 Price Alerts ({priceAlerts.length})
            </button>
            <button 
              className={`nav-item ${activeSection === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveSection('orders')}
            >
              📋 My Orders
            </button>
            <button 
              className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              ⚙️ Account Settings
            </button>
          </nav>
        </aside>

        <main className="dashboard-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard; 