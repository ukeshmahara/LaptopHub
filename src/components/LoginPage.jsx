import React, { useState } from 'react';

const LoginPage = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    if (role === 'admin') {
      if (email === 'rohitshrestha@gmail.com' && password === 'rohit@1212') {
        const userData = {
          name: 'Rohit Shrestha',
          email: email,
          isAdmin: true
        };
        if (onLogin) {
          onLogin(userData);
          onNavigate('admin-dashboard');
        } else {
          alert('Logged in as Admin!');
          onNavigate('admin-dashboard');
        }
      } else {
        setError('Invalid admin credentials.');
        return;
      }
    } else {
      const userData = {
        name: email.split('@')[0],
        email: email,
        id: Date.now(),
        isAdmin: false
      };
      if (onLogin) {
        onLogin(userData);
        onNavigate('dashboard');
      } else {
        alert('Logged in!');
        onNavigate('home');
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-image" style={{background: '#94e498'}}>
        {/* You can add an image or illustration here if desired */}
      </div>
      <div className="auth-form-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-header">
            <div className="auth-title">Login</div>
            <div className="auth-subtitle">Welcome back! Please login to your account.</div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              className="form-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="login-role">Role</label>
            <select
              id="login-role"
              className="form-input"
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          <button className="auth-submit" type="submit">Login</button>
          <div className="auth-switch">
            Don't have an account?{' '}
            <a href="#" onClick={() => onNavigate('register')}>Register</a>
          </div>
          <div className="auth-switch" style={{marginTop: 10}}>
            <a href="#" onClick={() => onNavigate('home')}>Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage; 