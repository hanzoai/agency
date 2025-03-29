const Navigation = () => {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        {/* ... existing nav items ... */}
        <div className="nav-item">
          <button className="nav-trigger">Services</button>
          <div className="nav-dropdown">
            <div className="nav-dropdown-content">
              {/* Your services content */}
            </div>
          </div>
        </div>
        
        <div className="nav-item">
          <button className="nav-trigger">Solutions</button>
          <div className="nav-dropdown">
            <div className="nav-dropdown-content">
              {/* Your solutions content */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 