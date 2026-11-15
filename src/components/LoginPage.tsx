import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import headerImg from '../assets/images/header.png';
import { loginAdmin } from '../util/LoveQuiltAPI';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((currentForm) => ({ ...currentForm, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const isValid = await loginAdmin(form.username, form.password);
      if (!isValid) {
        setError('Username and password are not correct. Please check and try again.');
        return;
      }

      onLoginSuccess();
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to log in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

          <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <div className="mb-3">
              <label className="signup-label" htmlFor="login-username">
                Username <span className="required">(Required)</span>
              </label>
              <input
                type="text"
                id="login-username"
                name="username"
                className="signup-input"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="signup-label" htmlFor="login-password">
                Password <span className="required">(Required)</span>
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                className="signup-input"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <div className="text-center">
              <button type="submit" className="btn-signup-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Checking...' : <>Login &rarr;</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
