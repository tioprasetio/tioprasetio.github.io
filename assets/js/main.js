// JavaScript untuk Memunculkan Popup dan Mengisi Iframe
document.addEventListener("DOMContentLoaded", function () {
  const devicePreviewPopup = document.getElementById(
    "SHOWLINK_devicePreviewPopup"
  );
  const closePopup = document.getElementById("SHOWLINK_closePopup");
  const popupContent = document.getElementById("SHOWLINK_popupContent");
  const previewIframe = document.getElementById("SHOWLINK_previewIframe");
  const desktopView = document.getElementById("SHOWLINK_desktopView");
  const tabletView = document.getElementById("SHOWLINK_tabletView");
  const phoneView = document.getElementById("SHOWLINK_phoneView");

  let previewerSettings = {
    defaultView: "desktop",
    defaultViewFromMobile: "mobile",
    reloadOnChange: false,
    closeOnOverlayClick: true,
    linkKeyword: "#showlink",
  };

  // Mencegah scroll halaman belakang ketika popup muncul
  function disablePageScroll() {
    document.body.style.overflow = "hidden";
  }

  // Mengizinkan scroll halaman belakang setelah popup ditutup
  function enablePageScroll() {
    document.body.style.overflow = "";
  }

  // Event untuk membuka popup ketika link dengan #showlink diklik
  document
    .querySelectorAll(`a[href$="${previewerSettings.linkKeyword}"]`)
    .forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const previewUrl = link.href.split("#")[0];
        // Ambil URL sebelum #
        previewIframe.style.display = "none";
        previewIframe.src = previewUrl;
        devicePreviewPopup.style.display = "flex";
        disablePageScroll();

        // Atur tampilan default sesuai pengaturan
        if (
          window.innerWidth <= 768 &&
          previewerSettings.defaultViewFromMobile === "mobile"
        ) {
          phoneView.click();
        } else {
          if (previewerSettings.defaultView === "tablet") {
            tabletView.click();
          } else if (previewerSettings.defaultView === "desktop") {
            desktopView.click();
          } else {
            phoneView.click();
          }
        }
      });
    });

  // Event untuk menutup popup
  closePopup.addEventListener("click", function () {
    devicePreviewPopup.style.display = "none";
    previewIframe.src = "";
    // Kosongkan iframe setelah ditutup
    enablePageScroll();
  });

  // Tutup popup jika area di luar konten diklik
  devicePreviewPopup.addEventListener("click", function (event) {
    if (event.target === devicePreviewPopup && event.target !== popupContent) {
      devicePreviewPopup.style.display = "none";
      previewIframe.src = "";
      enablePageScroll();
    }
  });

  // Event untuk mengganti ukuran iframe sesuai dengan mode perangkat
  desktopView.addEventListener("click", function () {
    previewIframe.style.width = "1200px";
    previewIframe.style.height = "620px";
    if (window.innerWidth <= 768) {
      previewIframe.style.transform = "scale(1)";
      previewIframe.style.height = "600px";
    } else {
      previewIframe.style.transform = "scale(1)";
      previewIframe.style.marginTop = "0";
    }
    previewIframe.style.display = "block";
  });

  tabletView.addEventListener("click", function () {
    previewIframe.style.width = "768px";
    previewIframe.style.height = "620px";
    if (window.innerWidth <= 768) {
      previewIframe.style.transform = "scale(0.5)";
      previewIframe.style.height = "720px";
    } else {
      previewIframe.style.transform = "scale(1)";
      previewIframe.style.marginTop = "0";
    }
    previewIframe.style.display = "block";
  });

  phoneView.addEventListener("click", function () {
    previewIframe.style.width = "375px";
    previewIframe.style.height = "620px";
    previewIframe.style.transform = "scale(1)";
    previewIframe.style.marginTop = "0";
    previewIframe.style.display = "block";
  });

  // Event saat iframe selesai dimuat
  previewIframe.addEventListener("load", function () {
    previewIframe.style.display = "block";
  });
});

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
