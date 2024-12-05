"use strict";

// disable inspect
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 1805) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
// END

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "semua") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

//========================== TESTI PERTAMA ================================
// testimonials variables
const testimonialsItemSertif = document.querySelectorAll(
  "[data-testimonials-item-sertif]"
);
const modalContainerSertif = document.querySelector(
  "[data-modal-container-sertif]"
);
const modalCloseBtnSertif = document.querySelector(
  "[data-modal-close-btn-sertif]"
);
const overlaySertif = document.querySelector("[data-overlay-sertif]");

// modal variable
const modalImgSertif = document.querySelector("[data-modal-img-sertif]");
const modalTitleSertif = document.querySelector("[data-modal-title-sertif]");
const modalTextSertif = document.querySelector("[data-modal-text-sertif]");

// modal toggle function
const testimonialsModalSertifFunc = function () {
  modalContainerSertif.classList.toggle("active");
  overlaySertif.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertif.length; i++) {
  testimonialsItemSertif[i].addEventListener("click", function () {
    modalImgSertif.src = this.querySelector(
      "[data-testimonials-avatar-sertif]"
    ).src;
    modalImgSertif.alt = this.querySelector(
      "[data-testimonials-avatar-sertif]"
    ).alt;
    modalTitleSertif.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif]"
    ).innerHTML;
    modalTextSertif.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif]"
    ).innerHTML;

    testimonialsModalSertifFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertif.addEventListener("click", testimonialsModalSertifFunc);
overlaySertif.addEventListener("click", testimonialsModalSertifFunc);

//========================== TESTI KEDUA ================================
// testimonials variables 2
const testimonialsItemSertifKedua = document.querySelectorAll(
  "[data-testimonials-item-sertif-kedua]"
);
const modalContainerSertifKedua = document.querySelector(
  "[data-modal-container-sertif-kedua]"
);
const modalCloseBtnSertifKedua = document.querySelector(
  "[data-modal-close-btn-sertif-kedua]"
);
const overlaySertifKedua = document.querySelector(
  "[data-overlay-sertif-kedua]"
);

// modal variable
const modalImgSertifKedua = document.querySelector(
  "[data-modal-img-sertif-kedua]"
);
const modalTitleSertifKedua = document.querySelector(
  "[data-modal-title-sertif-kedua]"
);
const modalTextSertifKedua = document.querySelector(
  "[data-modal-text-sertif-kedua]"
);

// modal toggle function
const testimonialsModalSertifKeduaFunc = function () {
  modalContainerSertifKedua.classList.toggle("active");
  overlaySertifKedua.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKedua.length; i++) {
  testimonialsItemSertifKedua[i].addEventListener("click", function () {
    modalImgSertifKedua.src = this.querySelector(
      "[data-testimonials-avatar-sertif-kedua]"
    ).src;
    modalImgSertifKedua.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-kedua]"
    ).alt;
    modalTitleSertifKedua.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-kedua]"
    ).innerHTML;
    modalTextSertifKedua.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-kedua]"
    ).innerHTML;

    testimonialsModalSertifKeduaFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKedua.addEventListener(
  "click",
  testimonialsModalSertifKeduaFunc
);
overlaySertifKedua.addEventListener("click", testimonialsModalSertifKeduaFunc);

//========================== TESTI KETIGA ================================
// testimonials variables 3
const testimonialsItemSertifKetiga = document.querySelectorAll(
  "[data-testimonials-item-sertif-ketiga]"
);
const modalContainerSertifKetiga = document.querySelector(
  "[data-modal-container-sertif-ketiga]"
);
const modalCloseBtnSertifKetiga = document.querySelector(
  "[data-modal-close-btn-sertif-ketiga]"
);
const overlaySertifKetiga = document.querySelector(
  "[data-overlay-sertif-ketiga]"
);

// modal variable
const modalImgSertifKetiga = document.querySelector(
  "[data-modal-img-sertif-ketiga]"
);
const modalTitleSertifKetiga = document.querySelector(
  "[data-modal-title-sertif-ketiga]"
);
const modalTextSertifKetiga = document.querySelector(
  "[data-modal-text-sertif-ketiga]"
);

// modal toggle function
const testimonialsModalSertifKetigaFunc = function () {
  modalContainerSertifKetiga.classList.toggle("active");
  overlaySertifKetiga.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKetiga.length; i++) {
  testimonialsItemSertifKetiga[i].addEventListener("click", function () {
    modalImgSertifKetiga.src = this.querySelector(
      "[data-testimonials-avatar-sertif-ketiga]"
    ).src;
    modalImgSertifKetiga.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-ketiga]"
    ).alt;
    modalTitleSertifKetiga.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-ketiga]"
    ).innerHTML;
    modalTextSertifKetiga.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-ketiga]"
    ).innerHTML;

    testimonialsModalSertifKetigaFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKetiga.addEventListener(
  "click",
  testimonialsModalSertifKetigaFunc
);
overlaySertifKetiga.addEventListener(
  "click",
  testimonialsModalSertifKetigaFunc
);

//========================== TESTI KEEMPAT ================================
// testimonials variables 2
const testimonialsItemSertifKeempat = document.querySelectorAll(
  "[data-testimonials-item-sertif-keempat]"
);
const modalContainerSertifKeempat = document.querySelector(
  "[data-modal-container-sertif-keempat]"
);
const modalCloseBtnSertifKeempat = document.querySelector(
  "[data-modal-close-btn-sertif-keempat]"
);
const overlaySertifKeempat = document.querySelector(
  "[data-overlay-sertif-keempat]"
);

// modal variable
const modalImgSertifKeempat = document.querySelector(
  "[data-modal-img-sertif-keempat]"
);
const modalTitleSertifKeempat = document.querySelector(
  "[data-modal-title-sertif-keempat]"
);
const modalTextSertifKeempat = document.querySelector(
  "[data-modal-text-sertif-keempat]"
);

// modal toggle function
const testimonialsModalSertifKeempatFunc = function () {
  modalContainerSertifKeempat.classList.toggle("active");
  overlaySertifKeempat.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKeempat.length; i++) {
  testimonialsItemSertifKeempat[i].addEventListener("click", function () {
    modalImgSertifKeempat.src = this.querySelector(
      "[data-testimonials-avatar-sertif-keempat]"
    ).src;
    modalImgSertifKeempat.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-keempat]"
    ).alt;
    modalTitleSertifKeempat.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-keempat]"
    ).innerHTML;
    modalTextSertifKeempat.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-keempat]"
    ).innerHTML;

    testimonialsModalSertifKeempatFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKeempat.addEventListener(
  "click",
  testimonialsModalSertifKeempatFunc
);
overlaySertifKeempat.addEventListener(
  "click",
  testimonialsModalSertifKeempatFunc
);

//========================== TESTI KELIMA ================================
// testimonials variables 2
const testimonialsItemSertifKelima = document.querySelectorAll(
  "[data-testimonials-item-sertif-kelima]"
);
const modalContainerSertifKelima = document.querySelector(
  "[data-modal-container-sertif-kelima]"
);
const modalCloseBtnSertifKelima = document.querySelector(
  "[data-modal-close-btn-sertif-kelima]"
);
const overlaySertifKelima = document.querySelector(
  "[data-overlay-sertif-kelima]"
);

// modal variable
const modalImgSertifKelima = document.querySelector(
  "[data-modal-img-sertif-kelima]"
);
const modalTitleSertifKelima = document.querySelector(
  "[data-modal-title-sertif-kelima]"
);
const modalTextSertifKelima = document.querySelector(
  "[data-modal-text-sertif-kelima]"
);

// modal toggle function
const testimonialsModalSertifKelimaFunc = function () {
  modalContainerSertifKelima.classList.toggle("active");
  overlaySertifKelima.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKelima.length; i++) {
  testimonialsItemSertifKelima[i].addEventListener("click", function () {
    modalImgSertifKelima.src = this.querySelector(
      "[data-testimonials-avatar-sertif-kelima]"
    ).src;
    modalImgSertifKelima.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-kelima]"
    ).alt;
    modalTitleSertifKelima.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-kelima]"
    ).innerHTML;
    modalTextSertifKelima.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-kelima]"
    ).innerHTML;

    testimonialsModalSertifKelimaFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKelima.addEventListener(
  "click",
  testimonialsModalSertifKelimaFunc
);
overlaySertifKelima.addEventListener(
  "click",
  testimonialsModalSertifKelimaFunc
);

//========================== TESTI KEENAM ================================
// testimonials variables 2
const testimonialsItemSertifKeenam = document.querySelectorAll(
  "[data-testimonials-item-sertif-keenam]"
);
const modalContainerSertifKeenam = document.querySelector(
  "[data-modal-container-sertif-keenam]"
);
const modalCloseBtnSertifKeenam = document.querySelector(
  "[data-modal-close-btn-sertif-keenam]"
);
const overlaySertifKeenam = document.querySelector(
  "[data-overlay-sertif-keenam]"
);

// modal variable
const modalImgSertifKeenam = document.querySelector(
  "[data-modal-img-sertif-keenam]"
);
const modalTitleSertifKeenam = document.querySelector(
  "[data-modal-title-sertif-keenam]"
);
const modalTextSertifKeenam = document.querySelector(
  "[data-modal-text-sertif-keenam]"
);

// modal toggle function
const testimonialsModalSertifKeenamFunc = function () {
  modalContainerSertifKeenam.classList.toggle("active");
  overlaySertifKeenam.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKeenam.length; i++) {
  testimonialsItemSertifKeenam[i].addEventListener("click", function () {
    modalImgSertifKeenam.src = this.querySelector(
      "[data-testimonials-avatar-sertif-keenam]"
    ).src;
    modalImgSertifKeenam.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-keenam]"
    ).alt;
    modalTitleSertifKeenam.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-keenam]"
    ).innerHTML;
    modalTextSertifKeenam.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-keenam]"
    ).innerHTML;

    testimonialsModalSertifKeenamFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKeenam.addEventListener(
  "click",
  testimonialsModalSertifKeenamFunc
);
overlaySertifKeenam.addEventListener(
  "click",
  testimonialsModalSertifKeenamFunc
);

//========================== TESTI KETUJUH ================================
// testimonials variables 2
const testimonialsItemSertifKetujuh = document.querySelectorAll(
  "[data-testimonials-item-sertif-ketujuh]"
);
const modalContainerSertifKetujuh = document.querySelector(
  "[data-modal-container-sertif-ketujuh]"
);
const modalCloseBtnSertifKetujuh = document.querySelector(
  "[data-modal-close-btn-sertif-ketujuh]"
);
const overlaySertifKetujuh = document.querySelector(
  "[data-overlay-sertif-ketujuh]"
);

// modal variable
const modalImgSertifKetujuh = document.querySelector(
  "[data-modal-img-sertif-ketujuh]"
);
const modalTitleSertifKetujuh = document.querySelector(
  "[data-modal-title-sertif-ketujuh]"
);
const modalTextSertifKetujuh = document.querySelector(
  "[data-modal-text-sertif-ketujuh]"
);

// modal toggle function
const testimonialsModalSertifKetujuhFunc = function () {
  modalContainerSertifKetujuh.classList.toggle("active");
  overlaySertifKetujuh.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKetujuh.length; i++) {
  testimonialsItemSertifKetujuh[i].addEventListener("click", function () {
    modalImgSertifKetujuh.src = this.querySelector(
      "[data-testimonials-avatar-sertif-ketujuh]"
    ).src;
    modalImgSertifKetujuh.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-ketujuh]"
    ).alt;
    modalTitleSertifKetujuh.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-ketujuh]"
    ).innerHTML;
    modalTextSertifKetujuh.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-ketujuh]"
    ).innerHTML;

    testimonialsModalSertifKetujuhFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKetujuh.addEventListener(
  "click",
  testimonialsModalSertifKetujuhFunc
);
overlaySertifKetujuh.addEventListener(
  "click",
  testimonialsModalSertifKetujuhFunc
);

//========================== TESTI KEDELAPAN ================================
// testimonials variables 2
const testimonialsItemSertifKedelapan = document.querySelectorAll(
  "[data-testimonials-item-sertif-kedelapan]"
);
const modalContainerSertifKedelapan = document.querySelector(
  "[data-modal-container-sertif-kedelapan]"
);
const modalCloseBtnSertifKedelapan = document.querySelector(
  "[data-modal-close-btn-sertif-kedelapan]"
);
const overlaySertifKedelapan = document.querySelector(
  "[data-overlay-sertif-kedelapan]"
);

// modal variable
const modalImgSertifKedelapan = document.querySelector(
  "[data-modal-img-sertif-kedelapan]"
);
const modalTitleSertifKedelapan = document.querySelector(
  "[data-modal-title-sertif-kedelapan]"
);
const modalTextSertifKedelapan = document.querySelector(
  "[data-modal-text-sertif-kedelapan]"
);

// modal toggle function
const testimonialsModalSertifKedelapanFunc = function () {
  modalContainerSertifKedelapan.classList.toggle("active");
  overlaySertifKedelapan.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKedelapan.length; i++) {
  testimonialsItemSertifKedelapan[i].addEventListener("click", function () {
    modalImgSertifKedelapan.src = this.querySelector(
      "[data-testimonials-avatar-sertif-kedelapan]"
    ).src;
    modalImgSertifKedelapan.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-kedelapan]"
    ).alt;
    modalTitleSertifKedelapan.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-kedelapan]"
    ).innerHTML;
    modalTextSertifKedelapan.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-kedelapan]"
    ).innerHTML;

    testimonialsModalSertifKedelapanFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKedelapan.addEventListener(
  "click",
  testimonialsModalSertifKedelapanFunc
);
overlaySertifKedelapan.addEventListener(
  "click",
  testimonialsModalSertifKedelapanFunc
);

//========================== TESTI KESEMBILAN ================================
// testimonials variables 2
const testimonialsItemSertifKesembilan = document.querySelectorAll(
  "[data-testimonials-item-sertif-kesembilan]"
);
const modalContainerSertifKesembilan = document.querySelector(
  "[data-modal-container-sertif-kesembilan]"
);
const modalCloseBtnSertifKesembilan = document.querySelector(
  "[data-modal-close-btn-sertif-kesembilan]"
);
const overlaySertifKesembilan = document.querySelector(
  "[data-overlay-sertif-kesembilan]"
);

// modal variable
const modalImgSertifKesembilan = document.querySelector(
  "[data-modal-img-sertif-kesembilan]"
);
const modalTitleSertifKesembilan = document.querySelector(
  "[data-modal-title-sertif-kesembilan]"
);
const modalTextSertifKesembilan = document.querySelector(
  "[data-modal-text-sertif-kesembilan]"
);

// modal toggle function
const testimonialsModalSertifKesembilanFunc = function () {
  modalContainerSertifKesembilan.classList.toggle("active");
  overlaySertifKesembilan.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKesembilan.length; i++) {
  testimonialsItemSertifKesembilan[i].addEventListener("click", function () {
    modalImgSertifKesembilan.src = this.querySelector(
      "[data-testimonials-avatar-sertif-kesembilan]"
    ).src;
    modalImgSertifKesembilan.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-kesembilan]"
    ).alt;
    modalTitleSertifKesembilan.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-kesembilan]"
    ).innerHTML;
    modalTextSertifKesembilan.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-kesembilan]"
    ).innerHTML;

    testimonialsModalSertifKesembilanFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKesembilan.addEventListener(
  "click",
  testimonialsModalSertifKesembilanFunc
);
overlaySertifKesembilan.addEventListener(
  "click",
  testimonialsModalSertifKesembilanFunc
);
//========================== TESTI KESEPULUH ================================
// testimonials variables 2
const testimonialsItemSertifKesepuluh = document.querySelectorAll(
  "[data-testimonials-item-sertif-kesepuluh]"
);
const modalContainerSertifKesepuluh = document.querySelector(
  "[data-modal-container-sertif-kesepuluh]"
);
const modalCloseBtnSertifKesepuluh = document.querySelector(
  "[data-modal-close-btn-sertif-kesepuluh]"
);
const overlaySertifKesepuluh = document.querySelector(
  "[data-overlay-sertif-kesepuluh]"
);

// modal variable
const modalImgSertifKesepuluh = document.querySelector(
  "[data-modal-img-sertif-kesepuluh]"
);
const modalTitleSertifKesepuluh = document.querySelector(
  "[data-modal-title-sertif-kesepuluh]"
);
const modalTextSertifKesepuluh = document.querySelector(
  "[data-modal-text-sertif-kesepuluh]"
);

// modal toggle function
const testimonialsModalSertifKesepuluhFunc = function () {
  modalContainerSertifKesepuluh.classList.toggle("active");
  overlaySertifKesepuluh.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemSertifKesepuluh.length; i++) {
  testimonialsItemSertifKesepuluh[i].addEventListener("click", function () {
    modalImgSertifKesepuluh.src = this.querySelector(
      "[data-testimonials-avatar-sertif-kesepuluh]"
    ).src;
    modalImgSertifKesepuluh.alt = this.querySelector(
      "[data-testimonials-avatar-sertif-kesepuluh]"
    ).alt;
    modalTitleSertifKesepuluh.innerHTML = this.querySelector(
      "[data-testimonials-title-sertif-kesepuluh]"
    ).innerHTML;
    modalTextSertifKesepuluh.innerHTML = this.querySelector(
      "[data-testimonials-text-sertif-kesepuluh]"
    ).innerHTML;

    testimonialsModalSertifKesepuluhFunc();
  });
}

// add click event to modal close button
modalCloseBtnSertifKesepuluh.addEventListener(
  "click",
  testimonialsModalSertifKesepuluhFunc
);
overlaySertifKesepuluh.addEventListener(
  "click",
  testimonialsModalSertifKesepuluhFunc
);

//========================== PORTFOLIO PERTAMA ================================
// testimonials variables
const testimonialsItemPort = document.querySelectorAll(
  "[data-testimonials-item-portfolio]"
);
const modalContainerPort = document.querySelector(
  "[data-modal-container-portfolio]"
);
const modalCloseBtnPort = document.querySelector(
  "[data-modal-close-btn-portfolio]"
);
const overlayPort = document.querySelector("[data-overlay-portfolio]");

// modal variable
const modalImgPort = document.querySelector("[data-modal-img-portfolio]");
const modalTitlePort = document.querySelector("[data-modal-title-portfolio]");
const modalTextPort = document.querySelector("[data-modal-text-portfolio]");

// modal toggle function
const testimonialsModalPortFunc = function () {
  modalContainerPort.classList.toggle("active");
  overlayPort.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPort.length; i++) {
  testimonialsItemPort[i].addEventListener("click", function () {
    modalImgPort.src = this.querySelector(
      "[data-testimonials-avatar-portfolio]"
    ).src;
    modalImgPort.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio]"
    ).alt;
    modalTitlePort.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio]"
    ).innerHTML;
    modalTextPort.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio]"
    ).innerHTML;

    testimonialsModalPortFunc();
  });
}

// add click event to modal close button
modalCloseBtnPort.addEventListener("click", testimonialsModalPortFunc);
overlayPort.addEventListener("click", testimonialsModalPortFunc);

//========================== PORTFOLIO KEDUA ================================
// testimonials variables
const testimonialsItemPortKedua = document.querySelectorAll(
  "[data-testimonials-item-portfolio-kedua]"
);
const modalContainerPortKedua = document.querySelector(
  "[data-modal-container-portfolio-kedua]"
);
const modalCloseBtnPortKedua = document.querySelector(
  "[data-modal-close-btn-portfolio-kedua]"
);
const overlayPortKedua = document.querySelector(
  "[data-overlay-portfolio-kedua]"
);

// modal variable
const modalImgPortKedua = document.querySelector(
  "[data-modal-img-portfolio-kedua]"
);
const modalTitlePortKedua = document.querySelector(
  "[data-modal-title-portfolio-kedua]"
);
const modalTextPortKedua = document.querySelector(
  "[data-modal-text-portfolio-kedua]"
);

// modal toggle function
const testimonialsModalPortKeduaFunc = function () {
  modalContainerPortKedua.classList.toggle("active");
  overlayPortKedua.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPortKedua.length; i++) {
  testimonialsItemPortKedua[i].addEventListener("click", function () {
    modalImgPortKedua.src = this.querySelector(
      "[data-testimonials-avatar-portfolio-kedua]"
    ).src;
    modalImgPortKedua.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio-kedua]"
    ).alt;
    modalTitlePortKedua.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio-kedua]"
    ).innerHTML;
    modalTextPortKedua.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio-kedua]"
    ).innerHTML;

    testimonialsModalPortKeduaFunc();
  });
}

// add click event to modal close button
modalCloseBtnPortKedua.addEventListener(
  "click",
  testimonialsModalPortKeduaFunc
);
overlayPortKedua.addEventListener("click", testimonialsModalPortKeduaFunc);

//========================== PORTFOLIO KETIGA ================================
// testimonials variables
const testimonialsItemPortKetiga = document.querySelectorAll(
  "[data-testimonials-item-portfolio-ketiga]"
);
const modalContainerPortKetiga = document.querySelector(
  "[data-modal-container-portfolio-ketiga]"
);
const modalCloseBtnPortKetiga = document.querySelector(
  "[data-modal-close-btn-portfolio-ketiga]"
);
const overlayPortKetiga = document.querySelector(
  "[data-overlay-portfolio-ketiga]"
);

// modal variable
const modalImgPortKetiga = document.querySelector(
  "[data-modal-img-portfolio-ketiga]"
);
const modalTitlePortKetiga = document.querySelector(
  "[data-modal-title-portfolio-ketiga]"
);
const modalTextPortKetiga = document.querySelector(
  "[data-modal-text-portfolio-ketiga]"
);

// modal toggle function
const testimonialsModalPortKetigaFunc = function () {
  modalContainerPortKetiga.classList.toggle("active");
  overlayPortKetiga.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPortKetiga.length; i++) {
  testimonialsItemPortKetiga[i].addEventListener("click", function () {
    modalImgPortKetiga.src = this.querySelector(
      "[data-testimonials-avatar-portfolio-ketiga]"
    ).src;
    modalImgPortKetiga.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio-ketiga]"
    ).alt;
    modalTitlePortKetiga.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio-ketiga]"
    ).innerHTML;
    modalTextPortKetiga.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio-ketiga]"
    ).innerHTML;

    testimonialsModalPortKetigaFunc();
  });
}

// add click event to modal close button
modalCloseBtnPortKetiga.addEventListener(
  "click",
  testimonialsModalPortKetigaFunc
);
overlayPortKetiga.addEventListener("click", testimonialsModalPortKetigaFunc);

//========================== PORTFOLIO KEEMPAT ================================
// testimonials variables
const testimonialsItemPortKeempat = document.querySelectorAll(
  "[data-testimonials-item-portfolio-keempat]"
);
const modalContainerPortKeempat = document.querySelector(
  "[data-modal-container-portfolio-keempat]"
);
const modalCloseBtnPortKeempat = document.querySelector(
  "[data-modal-close-btn-portfolio-keempat]"
);
const overlayPortKeempat = document.querySelector(
  "[data-overlay-portfolio-keempat]"
);

// modal variable
const modalImgPortKeempat = document.querySelector(
  "[data-modal-img-portfolio-keempat]"
);
const modalTitlePortKeempat = document.querySelector(
  "[data-modal-title-portfolio-keempat]"
);
const modalTextPortKeempat = document.querySelector(
  "[data-modal-text-portfolio-keempat]"
);

// modal toggle function
const testimonialsModalPortKeempatFunc = function () {
  modalContainerPortKeempat.classList.toggle("active");
  overlayPortKeempat.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPortKeempat.length; i++) {
  testimonialsItemPortKeempat[i].addEventListener("click", function () {
    modalImgPortKeempat.src = this.querySelector(
      "[data-testimonials-avatar-portfolio-keempat]"
    ).src;
    modalImgPortKeempat.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio-keempat]"
    ).alt;
    modalTitlePortKeempat.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio-keempat]"
    ).innerHTML;
    modalTextPortKeempat.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio-keempat]"
    ).innerHTML;

    testimonialsModalPortKeempatFunc();
  });
}

// add click event to modal close button
modalCloseBtnPortKeempat.addEventListener(
  "click",
  testimonialsModalPortKeempatFunc
);
overlayPortKeempat.addEventListener("click", testimonialsModalPortKeempatFunc);

//========================== PORTFOLIO KELIMA ================================
// testimonials variables
const testimonialsItemPortKelima = document.querySelectorAll(
  "[data-testimonials-item-portfolio-kelima]"
);
const modalContainerPortKelima = document.querySelector(
  "[data-modal-container-portfolio-kelima]"
);
const modalCloseBtnPortKelima = document.querySelector(
  "[data-modal-close-btn-portfolio-kelima]"
);
const overlayPortKelima = document.querySelector(
  "[data-overlay-portfolio-kelima]"
);

// modal variable
const modalImgPortKelima = document.querySelector(
  "[data-modal-img-portfolio-kelima]"
);
const modalTitlePortKelima = document.querySelector(
  "[data-modal-title-portfolio-kelima]"
);
const modalTextPortKelima = document.querySelector(
  "[data-modal-text-portfolio-kelima]"
);

// modal toggle function
const testimonialsModalPortKelimaFunc = function () {
  modalContainerPortKelima.classList.toggle("active");
  overlayPortKelima.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPortKelima.length; i++) {
  testimonialsItemPortKelima[i].addEventListener("click", function () {
    modalImgPortKelima.src = this.querySelector(
      "[data-testimonials-avatar-portfolio-kelima]"
    ).src;
    modalImgPortKelima.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio-kelima]"
    ).alt;
    modalTitlePortKelima.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio-kelima]"
    ).innerHTML;
    modalTextPortKelima.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio-kelima]"
    ).innerHTML;

    testimonialsModalPortKelimaFunc();
  });
}

// add click event to modal close button
modalCloseBtnPortKelima.addEventListener(
  "click",
  testimonialsModalPortKelimaFunc
);
overlayPortKelima.addEventListener("click", testimonialsModalPortKelimaFunc);

//========================== PORTFOLIO KEENAM ================================
// testimonials variables
const testimonialsItemPortKeenam = document.querySelectorAll(
  "[data-testimonials-item-portfolio-keenam]"
);
const modalContainerPortKeenam = document.querySelector(
  "[data-modal-container-portfolio-keenam]"
);
const modalCloseBtnPortKeenam = document.querySelector(
  "[data-modal-close-btn-portfolio-keenam]"
);
const overlayPortKeenam = document.querySelector(
  "[data-overlay-portfolio-keenam]"
);

// modal variable
const modalImgPortKeenam = document.querySelector(
  "[data-modal-img-portfolio-keenam]"
);
const modalTitlePortKeenam = document.querySelector(
  "[data-modal-title-portfolio-keenam]"
);
const modalTextPortKeenam = document.querySelector(
  "[data-modal-text-portfolio-keenam]"
);

// modal toggle function
const testimonialsModalPortKeenamFunc = function () {
  modalContainerPortKeenam.classList.toggle("active");
  overlayPortKeenam.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPortKeenam.length; i++) {
  testimonialsItemPortKeenam[i].addEventListener("click", function () {
    modalImgPortKeenam.src = this.querySelector(
      "[data-testimonials-avatar-portfolio-keenam]"
    ).src;
    modalImgPortKeenam.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio-keenam]"
    ).alt;
    modalTitlePortKeenam.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio-keenam]"
    ).innerHTML;
    modalTextPortKeenam.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio-keenam]"
    ).innerHTML;

    testimonialsModalPortKeenamFunc();
  });
}

// add click event to modal close button
modalCloseBtnPortKeenam.addEventListener(
  "click",
  testimonialsModalPortKeenamFunc
);
overlayPortKeenam.addEventListener("click", testimonialsModalPortKeenamFunc);

//========================== PORTFOLIO KETUJUH ================================
// testimonials variables
const testimonialsItemPortKetujuh = document.querySelectorAll(
  "[data-testimonials-item-portfolio-ketujuh]"
);
const modalContainerPortKetujuh = document.querySelector(
  "[data-modal-container-portfolio-ketujuh]"
);
const modalCloseBtnPortKetujuh = document.querySelector(
  "[data-modal-close-btn-portfolio-ketujuh]"
);
const overlayPortKetujuh = document.querySelector(
  "[data-overlay-portfolio-ketujuh]"
);

// modal variable
const modalImgPortKetujuh = document.querySelector(
  "[data-modal-img-portfolio-ketujuh]"
);
const modalTitlePortKetujuh = document.querySelector(
  "[data-modal-title-portfolio-ketujuh]"
);
const modalTextPortKetujuh = document.querySelector(
  "[data-modal-text-portfolio-ketujuh]"
);

// modal toggle function
const testimonialsModalPortKetujuhFunc = function () {
  modalContainerPortKetujuh.classList.toggle("active");
  overlayPortKetujuh.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItemPortKetujuh.length; i++) {
  testimonialsItemPortKetujuh[i].addEventListener("click", function () {
    modalImgPortKetujuh.src = this.querySelector(
      "[data-testimonials-avatar-portfolio-ketujuh]"
    ).src;
    modalImgPortKetujuh.alt = this.querySelector(
      "[data-testimonials-avatar-portfolio-ketujuh]"
    ).alt;
    modalTitlePortKetujuh.innerHTML = this.querySelector(
      "[data-testimonials-title-portfolio-ketujuh]"
    ).innerHTML;
    modalTextPortKetujuh.innerHTML = this.querySelector(
      "[data-testimonials-text-portfolio-ketujuh]"
    ).innerHTML;

    testimonialsModalPortKetujuhFunc();
  });
}

// add click event to modal close button
modalCloseBtnPortKetujuh.addEventListener(
  "click",
  testimonialsModalPortKetujuhFunc
);
overlayPortKetujuh.addEventListener("click", testimonialsModalPortKetujuhFunc);

// =================== MENYUSUN SERTIF DARI YANG TERBARU ====================

// Mendapatkan daftar elemen sertifikat
const sertifikatItems = document.querySelectorAll(".blog-post-item");

// Mengubah daftar elemen menjadi array untuk mempermudah pengurutan
const sertifikatArray = Array.from(sertifikatItems);

// Fungsi untuk membandingkan tanggal dari dua elemen sertifikat
function compareDates(a, b) {
  const dateA = new Date(a.querySelector("time").getAttribute("datetime"));
  const dateB = new Date(b.querySelector("time").getAttribute("datetime"));
  return dateB - dateA; // Mengurutkan dari yang terbaru ke yang terlama
}

// Mengurutkan array sertifikat berdasarkan tanggal
sertifikatArray.sort(compareDates);

// Menghapus semua elemen sertifikat dari daftar
const blogPostsList = document.querySelector(".blog-posts-list");
blogPostsList.innerHTML = "";

// Menambahkan kembali elemen sertifikat ke daftar dalam urutan yang baru (terbaru di bagian atas)
sertifikatArray.forEach((sertifikat) => blogPostsList.appendChild(sertifikat));

// =================== MENYUSUN PORTFOLIO DARI YANG TERBARU ====================

// Mendapatkan daftar elemen proyek
const projectItems = document.querySelectorAll(".project-item");

// Mengubah daftar elemen menjadi array untuk mempermudah pengurutan
const projectArray = Array.from(projectItems);

// Fungsi untuk membandingkan tanggal dari dua elemen proyek
function compareProjectDates(a, b) {
  const dateA = new Date(a.getAttribute("data-project-date"));
  const dateB = new Date(b.getAttribute("data-project-date"));
  return dateB - dateA; // Mengurutkan dari yang terbaru ke yang terlama
}

// Mengurutkan array proyek berdasarkan tanggal
projectArray.sort(compareProjectDates);

// Menghapus semua elemen proyek dari daftar
const projectList = document.querySelector(".project-list");
projectList.innerHTML = "";

// Menambahkan kembali elemen proyek ke daftar dalam urutan yang baru (terbaru di bagian atas)
projectArray.forEach((project) => projectList.prepend(project));
