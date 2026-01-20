/* ===============================
   GO TO TOP ON REFRESH
   =============================== */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  // Safari needs delay
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 60);
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};


/* ===============================
   FADE-IN ANIMATION
   =============================== */

const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => observer.observe(el));


/* ===============================
   ENQUIRY FORM
   =============================== */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

  // Prevent past dates
  const dateInput = enquiryForm.querySelector('input[type="date"]');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mandatory validation
    if (
      !this.name.value.trim() ||
      !this.phone.value.trim() ||
      !this.date.value ||
      !this.eventType.value ||
      !this.guests.value
    ) {
      alert("Please fill all required fields marked with *");
      return;
    }

    const btn = enquiryForm.querySelector("button");
    btn.disabled = true;
    btn.innerText = "Sending...";

    // Send enquiry email (ADMIN)
    emailjs.sendForm(
      "service_rve0a19",
      "template_jwl74q9",
      enquiryForm
    )
    .then(() => {
      alert("Thank you! Your enquiry has been sent.");
      enquiryForm.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerText = "Submit Enquiry";
    });
  });
}
