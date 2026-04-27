const Header = () => {
  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Get Involved', href: '#involved', hasDropdown: true },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container">
          <a className="navbar-brand" href="#">
            Love Quilts USA
          </a>

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
                  <a className="nav-link" href={item.href}>
                    {item.label}
                    {item.hasDropdown && (
                      <span className="ms-1">&#9662;</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#request" className="btn-request">
              Request A Quilt <span>&#9825;</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
