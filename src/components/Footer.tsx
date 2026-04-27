import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      {/* Top banner – Join community */}
      <div className="footer-cta">
        <div className="container text-center py-4">
          <h2 className="footer-cta-heading">
            Join the Love Quilts USA Community
          </h2>
          <p className="footer-cta-text">
            Become part of the Love Quilts USA community and help bring comfort,
            warmth, and hope to children and families in need.
          </p>
          <form onSubmit={handleSubscribe} className="footer-email-form">
            <input
              type="email"
              className="footer-email-input"
              placeholder="Write your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="footer-email-btn" aria-label="Subscribe">
              &#9825;
            </button>
          </form>
        </div>
      </div>

      {/* Bottom – links & info */}
      <div className="footer-main">
        <div className="container py-5">
          <div className="row">
            {/* Brand column */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h3 className="footer-brand">Love Quilts USA</h3>
              <p className="footer-brand-text">
                <span className="text-gold">Love Quilts USA</span> is a
                registered nonprofit organization serving families nationwide.
              </p>
              <a
                href="https://facebook.com"
                className="footer-fb-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-fb-icon" aria-hidden="true">f</span>
                LQUSA on Facebook
              </a>
            </div>

            {/* Links column 1 */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h4 className="footer-links-heading">Links</h4>
              <ul className="footer-links">
                <li><a href="#signup">Sign up</a></li>
                <li><a href="#guidelines">Guidelines for Parents</a></li>
                <li><a href="#stitchers">Directions for Stitchers</a></li>
              </ul>
            </div>

            {/* Links column 2 */}
            <div className="col-lg-4 col-md-6">
              <h4 className="footer-links-heading">Links</h4>
              <ul className="footer-links">
                <li><a href="#photos">Photo Site</a></li>
                <li><a href="#email">Email Us</a></li>
                <li><a href="#mailing">Mailing &amp; Donations</a></li>
              </ul>
            </div>
          </div>

          <hr className="footer-divider" />

          <p className="footer-copyright">
            Website Designed by Love Quilts USA &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
