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
}
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
overlaySertifKeempat.addEventListener("click", testimonialsModalSertifKeempatFunc);

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
overlaySertifKelima.addEventListener("click", testimonialsModalSertifKelimaFunc);