import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageSetup from '../usePageSetup';
import { pageLinks } from '../links';

const services = [
  'Wedding',
  'Engagement',
  'Corporate Events',
  'Reception',
  'Birthdays',
  'Haldi & Mehendi',
];

const features = [
  'Royal palace-style architecture',
  'Capacity: 500-2000 guests',
  'Spacious indoor & outdoor areas',
  'Fully air-conditioned hall',
  'Dedicated parking for 130+ vehicles',
  'Professional sound & lighting',
  'Catering services available',
  'Separate bride & groom rooms',
  'Experienced on-ground support team',
];

export default function About() {
  usePageSetup('About Us | Panchhi Royal Palace');

  return (
    <>
      <Navbar links={pageLinks} cta="book" />

      {/* ================= ABOUT TITLE ================= */}

      <section className="section">
        <h2 className="page-title">ABOUT US</h2>

        <div className="about-paragraph">
          <p>
            Inspired by majestic palace-style architecture, our venue reflects elegance,
            luxury, and grandeur at every corner. From the magnificent entrance to the
            beautifully designed interiors, Panchhi Royal Palace offers a regal atmosphere
            that elevates weddings, receptions, and grand celebrations.
          </p>

          <p>
            With the capacity to accommodate 500 to 2000 guests comfortably, our venue
            features both spacious indoor banquet halls and beautifully maintained outdoor lawns.
          </p>

          <p>
            Conveniently located near Chamaria Road, Rohtak, with dedicated parking
            space for over 130 vehicles, we ensure your guests experience both comfort
            and convenience.
          </p>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}

      <section className="section light">
        <h2 className="page-title">OUR SERVICES</h2>

        <div className="services-carousel">
          {services.map((service, i) => (
            <div key={service} className={`service-card card${i + 1}`}>{service}</div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="section">
        <h2 className="page-title">WHY CHOOSE US?</h2>

        <div className="features-grid">
          {features.map(feature => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </section>

      <Footer links={pageLinks} />
    </>
  );
}
