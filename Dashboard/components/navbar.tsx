import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link href="/dashboard" className="logo">
          CryptoBoard
        </Link>
      </div>

      <div className={`nav-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span style={{ marginRight: '8px' }}></span>
            {link.label}
          </Link>
        ))}
        
        <div className="nav-actions">    
          <div className="user-profile">
            <div className="user-avatar">SS</div>
            <div className="user-info">
              <div className="user-name">User</div>
              <div className="user-status">Online</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;