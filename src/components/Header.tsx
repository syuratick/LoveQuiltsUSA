import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Love Quilts USA
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>

              {/* For Parents dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Parents
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/guidelines">
                      Guidelines for Parents
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/request-quilt">
                      Apply for a Quilt
                    </Link>
                  </li>
                </ul>
              </li>

              {/* For Stitchers dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Stitchers
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/directions">
                      Directions for Stitchers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mailing">
                      Mailing and Donations
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign up to Stitch
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

            <Link to="/request-quilt" className="btn-request">
              Request A Quilt <span>&#9825;</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
