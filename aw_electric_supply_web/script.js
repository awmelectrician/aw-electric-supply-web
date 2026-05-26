document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");
  const quoteForm = document.getElementById("quoteForm");

  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("active")));
  }

  if (quoteForm) {
    quoteForm.addEventListener("submit", event => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();
      const subject = encodeURIComponent(`Quote Request - ${name}`);
      const body = encodeURIComponent(`Hello AW Electrical Supply,\n\nI would like to request pricing / availability.\n\nCompany / Name:\n${name}\n\nEmail:\n${email}\n\nPhone:\n${phone || "Not provided"}\n\nMaterial List / Notes:\n${message}\n\nThank you.`);
      window.location.href = `mailto:Sales@awm.electrician.com?cc=Info@awm.electrician.com&subject=${subject}&body=${body}`;
    });
  }
});
