import React, { useState } from 'react';
import './AdminDashboard.css';
import laptops from '../data/laptops.js';

const mockUsers = [
  { id: 1, name: 'Alice Admin', email: 'alice@admin.com' },
  { id: 2, name: 'Bob User', email: 'bob@user.com' },
  { id: 3, name: 'Charlie User', email: 'charlie@user.com' },
];

const mockUploads = [
  { id: 1, filename: 'report.pdf', uploadedBy: 'Alice Admin', date: '2024-05-01' },
  { id: 2, filename: 'laptop.jpg', uploadedBy: 'Bob User', date: '2024-05-02' },
];

const AdminDashboard = ({ onNavigate, admin }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [users, setUsers] = useState(mockUsers);
  const [uploads] = useState(mockUploads);
  const [laptopList, setLaptopList] = useState(laptops);
  const [showAddLaptop, setShowAddLaptop] = useState(false);
  const [editingLaptop, setEditingLaptop] = useState(null);

  // New laptop form state
  const [newLaptop, setNewLaptop] = useState({
    name: '',
    brand: '',
    price: '',
    originalPrice: '',
    image: '',
    processor: '',
    ram: '',
    storage: '',
    display: '',
    os: '',
    inStock: true,
    isNew: false
  });

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleDeleteLaptop = (id) => {
    if (window.confirm('Are you sure you want to delete this laptop?')) {
      setLaptopList(laptopList.filter(laptop => laptop.id !== id));
    }
  };

  const handleAddLaptop = (e) => {
    e.preventDefault();
    const laptopToAdd = {
      ...newLaptop,
      id: Math.max(...laptopList.map(l => l.id)) + 1,
      price: parseInt(newLaptop.price),
      originalPrice: parseInt(newLaptop.originalPrice),
      rating: 4.0,
      reviews: 0,
      discount: Math.round(((newLaptop.originalPrice - newLaptop.price) / newLaptop.originalPrice) * 100),
      specs: {
        processor: newLaptop.processor,
        ram: newLaptop.ram,
        storage: newLaptop.storage,
        display: newLaptop.display,
        os: newLaptop.os
      }
    };
    setLaptopList([...laptopList, laptopToAdd]);
    setNewLaptop({
      name: '',
      brand: '',
      price: '',
      originalPrice: '',
      image: '',
      processor: '',
      ram: '',
      storage: '',
      display: '',
      os: '',
      inStock: true,
      isNew: false
    });
    setShowAddLaptop(false);
  };

  const handleEditLaptop = (laptop) => {
    setEditingLaptop(laptop);
    setNewLaptop({
      name: laptop.name,
      brand: laptop.brand,
      price: laptop.price.toString(),
      originalPrice: laptop.originalPrice.toString(),
      image: laptop.image,
      processor: laptop.specs.processor,
      ram: laptop.specs.ram,
      storage: laptop.specs.storage,
      display: laptop.specs.display,
      os: laptop.specs.os,
      inStock: laptop.inStock,
      isNew: laptop.isNew
    });
    setShowAddLaptop(true);
  };

  const handleUpdateLaptop = (e) => {
    e.preventDefault();
    const updatedLaptop = {
      ...editingLaptop,
      ...newLaptop,
      price: parseInt(newLaptop.price),
      originalPrice: parseInt(newLaptop.originalPrice),
      discount: Math.round(((newLaptop.originalPrice - newLaptop.price) / newLaptop.originalPrice) * 100),
      specs: {
        processor: newLaptop.processor,
        ram: newLaptop.ram,
        storage: newLaptop.storage,
        display: newLaptop.display,
        os: newLaptop.os
      }
    };
    setLaptopList(laptopList.map(laptop => 
      laptop.id === editingLaptop.id ? updatedLaptop : laptop
    ));
    setEditingLaptop(null);
    setNewLaptop({
      name: '',
      brand: '',
      price: '',
      originalPrice: '',
      image: '',
      processor: '',
      ram: '',
      storage: '',
      display: '',
      os: '',
      inStock: true,
      isNew: false
    });
    setShowAddLaptop(false);
  };

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="welcome-section">
        <h2>Welcome, {admin?.name || 'Admin'}! 👑</h2>
        <p>Admin control panel overview.</p>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{users.length}</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💻</div>
          <div className="stat-content">
            <h3>{laptopList.length}</h3>
            <p>Total Laptops</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📁</div>
          <div className="stat-content">
            <h3>{uploads.length}</h3>
            <p>Files Uploaded</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>NPR {laptopList.reduce((sum, laptop) => sum + laptop.price, 0).toLocaleString()}</h3>
            <p>Total Value</p>
          </div>
        </div>
      </div>
      <div className="recent-activity">
        <h3>Recent Admin Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">💻</div>
            <div className="activity-content">
              <p><strong>Added</strong> new laptop to inventory</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🗑️</div>
            <div className="activity-content">
              <p><strong>Deleted</strong> user John Doe</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📁</div>
            <div className="activity-content">
              <p><strong>Uploaded</strong> report.pdf</p>
              <span className="activity-time">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLaptopManagement = () => (
    <div className="laptop-management">
      <div className="section-header">
        <h3>Laptop Management</h3>
        <button 
          className="btn-primary" 
          onClick={() => {
            setShowAddLaptop(true);
            setEditingLaptop(null);
            setNewLaptop({
              name: '',
              brand: '',
              price: '',
              originalPrice: '',
              image: '',
              processor: '',
              ram: '',
              storage: '',
              display: '',
              os: '',
              inStock: true,
              isNew: false
            });
          }}
        >
          ➕ Add New Laptop
        </button>
      </div>

      {showAddLaptop && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h4>{editingLaptop ? 'Edit Laptop' : 'Add New Laptop'}</h4>
              <button 
                className="close-btn" 
                onClick={() => {
                  setShowAddLaptop(false);
                  setEditingLaptop(null);
                }}
              >
                ✕
              </button>
            </div>
            <form onSubmit={editingLaptop ? handleUpdateLaptop : handleAddLaptop}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={newLaptop.name}
                    onChange={(e) => setNewLaptop({...newLaptop, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Brand</label>
                  <input
                    type="text"
                    value={newLaptop.brand}
                    onChange={(e) => setNewLaptop({...newLaptop, brand: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Price (NPR)</label>
                  <input
                    type="number"
                    value={newLaptop.price}
                    onChange={(e) => setNewLaptop({...newLaptop, price: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Original Price (NPR)</label>
                  <input
                    type="number"
                    value={newLaptop.originalPrice}
                    onChange={(e) => setNewLaptop({...newLaptop, originalPrice: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="url"
                    value={newLaptop.image}
                    onChange={(e) => setNewLaptop({...newLaptop, image: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Processor</label>
                  <input
                    type="text"
                    value={newLaptop.processor}
                    onChange={(e) => setNewLaptop({...newLaptop, processor: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>RAM</label>
                  <input
                    type="text"
                    value={newLaptop.ram}
                    onChange={(e) => setNewLaptop({...newLaptop, ram: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Storage</label>
                  <input
                    type="text"
                    value={newLaptop.storage}
                    onChange={(e) => setNewLaptop({...newLaptop, storage: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Display</label>
                  <input
                    type="text"
                    value={newLaptop.display}
                    onChange={(e) => setNewLaptop({...newLaptop, display: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Operating System</label>
                  <input
                    type="text"
                    value={newLaptop.os}
                    onChange={(e) => setNewLaptop({...newLaptop, os: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>In Stock</label>
                  <select
                    value={newLaptop.inStock}
                    onChange={(e) => setNewLaptop({...newLaptop, inStock: e.target.value === 'true'})}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Is New</label>
                  <select
                    value={newLaptop.isNew}
                    onChange={(e) => setNewLaptop({...newLaptop, isNew: e.target.value === 'true'})}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-primary">
                  {editingLaptop ? 'Update Laptop' : 'Add Laptop'}
                </button>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => {
                    setShowAddLaptop(false);
                    setEditingLaptop(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price (NPR)</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {laptopList.map(laptop => (
              <tr key={laptop.id}>
                <td>{laptop.id}</td>
                <td>
                  <img 
                    src={laptop.image} 
                    alt={laptop.name} 
                    style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px'}}
                  />
                </td>
                <td>{laptop.name}</td>
                <td>{laptop.brand}</td>
                <td>NPR {laptop.price.toLocaleString()}</td>
                <td>
                  <span className={`status ${laptop.inStock ? 'in-stock' : 'out-of-stock'}`}>
                    {laptop.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn-secondary" 
                    onClick={() => handleEditLaptop(laptop)}
                    style={{marginRight: '5px'}}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-danger" 
                    onClick={() => handleDeleteLaptop(laptop.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="user-management">
      <h3>User Management</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn-secondary" onClick={() => alert(`Viewing user ${user.name}`)}>View</button>
                <button className="btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderFileUploads = () => (
    <div className="file-uploads">
      <h3>File Uploads</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Filename</th>
            <th>Uploaded By</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map(file => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.filename}</td>
              <td>{file.uploadedBy}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'laptops':
        return renderLaptopManagement();
      case 'users':
        return renderUserManagement();
      case 'uploads':
        return renderFileUploads();
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
          <span>Admin: {admin?.name || 'Admin'}</span>
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
              className={`nav-item ${activeSection === 'laptops' ? 'active' : ''}`}
              onClick={() => setActiveSection('laptops')}
            >
              💻 Laptop Management
            </button>
            <button 
              className={`nav-item ${activeSection === 'users' ? 'active' : ''}`}
              onClick={() => setActiveSection('users')}
            >
              👥 User Management
            </button>
            <button 
              className={`nav-item ${activeSection === 'uploads' ? 'active' : ''}`}
              onClick={() => setActiveSection('uploads')}
            >
              📁 File Uploads
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

export default AdminDashboard; 