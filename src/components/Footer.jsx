import { Link } from 'react-router-dom';

export default function Footer({ links }) {
  return (
    <footer>
      <div>
        <h3>Panchhi Royal Palace</h3>
        <p>Creating royal celebrations in the heart of Rohtak</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        {links.map(link => (
          <Link key={link.to} to={link.to}>{link.label}</Link>
        ))}
      </div>

      <div>
        <h4>Follow Us</h4>

        <a
          href="https://www.instagram.com/panchhi_royalpalace?igsh=bXRmaHZ1bjNrN3cy&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer">
          Instagram
        </a>

        <a
          href="https://www.facebook.com/share/18E3RhR2gz/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer">
          Facebook
        </a>
      </div>
    </footer>
  );
}
