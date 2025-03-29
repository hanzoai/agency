const Header = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <div className="nav-container">
          {/* Your nav items */}
          <div className="nav-item">
            <button className="nav-trigger">Services</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-content">
                {/* Services content */}
              </div>
            </div>
          </div>
          {/* Other nav items */}
        </div>
      </nav>
    </header>
  );
}; 