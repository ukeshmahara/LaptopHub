import React, { useState } from 'react';
import './AdminDashboard.css';

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

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
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
          <div className="stat-icon">📁</div>
          <div className="stat-content">
            <h3>{uploads.length}</h3>
            <p>Files Uploaded</p>
          </div>
        </div>
      </div>
      <div className="recent-activity">
        <h3>Recent Admin Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">🗑️</div>
            <div className="activity-content">
              <p><strong>Deleted</strong> user John Doe</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📁</div>
            <div className="activity-content">
              <p><strong>Uploaded</strong> report.pdf</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
        </div>
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