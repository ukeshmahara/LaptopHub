import React, { useState } from 'react';

const RegisterPage = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert('Registered successfully!');
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
            <div className="auth-title">Register</div>
            <div className="auth-subtitle">Create your account to get started.</div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="register-name">Name</label>
            <input
              id="register-name"
              type="text"
              className="form-input"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              className="form-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="register-confirm-password">Confirm Password</label>
            <input
              id="register-confirm-password"
              type="password"
              className="form-input"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          <button className="auth-submit" type="submit">Register</button>
          <div className="auth-switch">
            Already have an account?{' '}
            <a href="#" onClick={() => onNavigate('login')}>Login</a>
          </div>
          <div className="auth-switch" style={{marginTop: 10}}>
            <a href="#" onClick={() => onNavigate('home')}>Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage; 