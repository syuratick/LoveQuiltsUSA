import { useState } from 'react';
import headerImg from '../assets/images/header.png';

const LoginPage = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up authentication
    console.log('Login:', form);
  };

  return (
    <main className="signup-page">
      <div className="signup-banner">
        <img className="signup-banner-img" src={headerImg} alt="" aria-hidden="true" />
        <div className="signup-banner-overlay">
          <h1 className="signup-banner-title">Admin Login</h1>
        </div>
      </div>

      <div className="container">
        <div className="signup-card login-card">
          <div className="text-center mb-4">
            <h2 className="signup-intro-heading">Welcome Back</h2>
            <p className="signup-intro-text">
              Sign in to access the Love Quilts USA admin area.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="signup-label">
                Username <span className="required">(Required)</span>
              </label>
              <input
                type="text"
                name="username"
                className="signup-input"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="signup-label">
                Password <span className="required">(Required)</span>
              </label>
              <input
                type="password"
                name="password"
                className="signup-input"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-signup-submit">
                Login &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
