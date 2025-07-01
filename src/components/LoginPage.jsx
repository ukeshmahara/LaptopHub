import React, { useState } from 'react';

const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    alert('Logged in!');
    onNavigate('home');
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