import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageSetup from '../usePageSetup';
import { pageLinks } from '../links';

const faqs = [
  {
    q: 'What is the guest capacity of Panchhi Royal Palace?',
    a: 'Panchhi Royal Palace is an exquisite wedding and event venue in Rohtak, capable of hosting grand celebrations for 1,500+ guests.',
  },
  {
    q: 'What types of events can be hosted?',
    a: 'Weddings, receptions, engagements, cocktail parties, corporate events, and social gatherings.',
  },
  {
    q: 'How can I book the venue?',
    a: 'Contact our team directly, visit the venue, or submit an enquiry through the website.',
  },
  {
    q: 'How early should we book?',
    a: 'We recommend booking 3–6 months in advance for peak wedding seasons.',
  },
  {
    q: 'Does the venue offer indoor & outdoor spaces?',
    a: 'Yes, both indoor banquet halls and outdoor lawns are available.',
  },
  {
    q: 'Can décor be customised?',
    a: 'Yes, décor can be tailored to your preferences at an additional cost.',
  },
  {
    q: 'Is outside catering allowed?',
    a: 'Yes, outside catering is allowed.',
  },
  {
    q: 'Where is the venue located?',
    a: 'Panchhi Royal Palace is strategically located in Rohtak with excellent connectivity.',
  },
  {
    q: 'Is it convenient for outstation guests?',
    a: 'Yes, easy access via highways and navigation services.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, ample on-site parking is available.',
  },
  {
    q: 'Are there event timing restrictions?',
    a: 'Timings follow local regulations and venue guidelines.',
  },
  {
    q: 'Why choose Panchhi Royal Palace?',
    a: 'Royal architecture, large capacity, flexible catering, custom décor, prime location.',
  },
  {
    q: 'Can corporate events be hosted?',
    a: 'Yes, ideal for conferences and elite social gatherings.',
  },
  {
    q: 'How to arrange a site visit?',
    a: 'Contact us via phone or website enquiry to schedule a tour.',
  },
];

/* =====================
   FAQs Expand/Collapse
===================== */

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span className="faq-icon">{open ? '▲' : '▼'}</span>
        {' '}{question}
      </button>
      <div
        ref={answerRef}
        className="faq-answer"
        style={open && answerRef.current ? { maxHeight: answerRef.current.scrollHeight + 'px' } : undefined}
      >
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}

export default function Faqs() {
  usePageSetup('FAQs | Panchhi Royal Palace', 'coloured-page');

  return (
    <>
      <Navbar links={pageLinks} cta="book" />

      {/* ================= FAQs ================= */}

      <section className="section faq-section">
        <h2 className="faq-title">FAQs</h2>

        <div className="faq-container">
          {faqs.map(faq => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      <Footer links={pageLinks} />
    </>
  );
}
