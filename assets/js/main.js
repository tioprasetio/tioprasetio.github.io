/*=============== ALERT JS ===============*/
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  // Pilih ikon berdasarkan tipe
  const icon =
    type === "success"
      ? '<i class="ri-checkbox-circle-line"></i>&nbsp;'
      : '<i class="ri-close-circle-line"></i>&nbsp;';

  // Set pesan dengan ikon
  alertMessage.innerHTML = `${icon}${message}`;
  alertBox.className = `alert ${type}`; // Tambahkan kelas tipe
  alertBox.classList.remove("hidden"); // Tampilkan alert

  // Sembunyikan alert secara otomatis setelah 3 detik
  setTimeout(hideAlert, 3000);
}


// Menyembunyikan alert
function hideAlert() {
  const alertBox = document.getElementById("customAlert");
  alertBox.classList.add("hidden");
}

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(".perfil, .contact__form");
sr.reveal(".info", { origin: "left", delay: 800 });
sr.reveal(".skills", { origin: "left", delay: 1000 });
sr.reveal(".about", { origin: "right", delay: 1200 });
sr.reveal(
  ".projects__card, .sertif__card, .services__card, .experience__card, .pendidikan__card",
  { interval: 100 }
);
