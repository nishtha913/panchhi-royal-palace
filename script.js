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

if (faders.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => observer.observe(el));
}



/* ===============================
   ENQUIRY FORM
=============================== */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

  const dateInput = enquiryForm.querySelector('input[type="date"]');
  if (dateInput) {
  const today = new Date().toISOString().split('T')[0];

  dateInput.min = today;   
  dateInput.value = today; 
}


  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

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



/* =====================
   Mobile Dropdown Menu
===================== */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {

    mobileMenu.style.maxHeight = "0";

    menuToggle.addEventListener("click", () => {

      mobileMenu.classList.toggle("show");

      mobileMenu.style.maxHeight = mobileMenu.classList.contains("show")
        ? mobileMenu.scrollHeight + "px"
        : "0";

      menuToggle.innerHTML = mobileMenu.classList.contains("show")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        mobileMenu.style.maxHeight = "0";
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

  }
});



/* =====================
   FAQs Expand/Collapse
===================== */

const faqButtons = document.querySelectorAll(".faq-question");

if (faqButtons.length > 0) {

  faqButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      const answer = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        if (icon) icon.textContent = "▼";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        if (icon) icon.textContent = "▲";
      }

    });

  });

}
