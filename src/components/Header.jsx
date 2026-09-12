import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          💍 Marriage Biodata
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/create" className={`nav-link ${isActive('/create')}`}>Create</Link>
          <Link to="/templates" className={`nav-link ${isActive('/templates')}`}>Templates</Link>
          <Link to="/faq" className={`nav-link ${isActive('/faq')}`}>FAQ</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
