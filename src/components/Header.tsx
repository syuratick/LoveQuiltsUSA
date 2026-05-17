import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Get Involved', to: '/involved', hasDropdown: true },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' },
  ];

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
              {menuItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <Link className="nav-link" to={item.to}>
                    {item.label}
                    {item.hasDropdown && (
                      <span className="ms-1">&#9662;</span>
                    )}
                  </Link>
                </li>
              ))}
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
