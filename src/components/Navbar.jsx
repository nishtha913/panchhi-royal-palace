import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* cta: "call" (Call Now → phone) or "book" (Book Now → contact page) */
export default function Navbar({ links, cta = 'book' }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const maxHeight = open && menuRef.current ? menuRef.current.scrollHeight + 'px' : '0';

  return (
    <header className="navbar">
      <div className="logo">Panchhi Royal Palace</div>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        {links.map(link => (
          <Link key={link.to} to={link.to}>{link.label}</Link>
        ))}
      </nav>

      {cta === 'call' ? (
        <a href="tel:+918410855000" className="call-btn">
          <i className="fa-solid fa-phone"></i> Call Now
        </a>
      ) : (
        <Link to="/contact" className="call-btn">
          <i className="fa-solid fa-calendar"></i> Book Now
        </Link>
      )}

      {/* Hamburger */}
      <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={open ? 'mobile-menu show' : 'mobile-menu'}
        style={{ maxHeight }}
      >
        {links.map(link => (
          <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
        ))}
      </div>
    </header>
  );
}
