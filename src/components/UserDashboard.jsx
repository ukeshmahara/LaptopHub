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

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="welcome-section">
        <h2>Welcome back, {userName}! 👋</h2>
        <p>Here's what's happening with your account today.</p>
      </div>
      
      <div className="stats-grid">
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
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>4.8</h3>
            <p>Average Rating</p>
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