import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageSetup from '../usePageSetup';
import { pageLinks } from '../links';

const images = Array.from({ length: 18 }, (_, i) => `/images/gallery_page/grid-${i + 1}.jpeg`);

export default function Gallery() {
  usePageSetup('Gallery | Panchhi Royal Palace', 'coloured-page');

  return (
    <>
      <Navbar links={pageLinks} cta="book" />

      {/* ================= GALLERY TITLE ================= */}

      <section className="gallery-section">
        <h2 className="gallery-title">GALLERY</h2>

        <div className="gallery-grid">
          {images.map(src => (
            <img key={src} src={src} />
          ))}
        </div>
      </section>

      <Footer links={pageLinks} />
    </>
  );
}
