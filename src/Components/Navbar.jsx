import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-content">

          <a href="#" className="logo" onClick={closeMenu}>
            <span className="logo-icon">✦</span>
            Nexora
          </a>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="login-link">
              Log in
            </a>

            <a href="#contact" className="nav-button">
              Get Started
            </a>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How It Works
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#contact" onClick={closeMenu}>
            Get Started
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;