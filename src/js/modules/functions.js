//Проверка потдержки webp, добавление класс webp или nowebp в HTML

export function isWebp() {
  //Проверка потдержка Webp---------------------------------------------------------------------------------
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

//Бургер--------------------------------------------------------------------------------------------------
export function menuBurger() {
  $(document).ready(function () {
    $(".header__burger").click(function (event) {
      $(".header__burger,.header__menu").toggleClass("active");
      $(".menu__body").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });
}

//IBG адаптив------------------------------------------------------------------------------------------------
export function imgIbg() {
  function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
  ibg();
}

//Табы-----------------------------------------------------------------------------------------------------------
//снипет для табов - "tabs-my"

export function tabsMenu() {
  let tabNavItem = document.querySelectorAll(".tab-nav__item");
  let tabContent = document.querySelectorAll(".tab__content");

  tabNavItem.forEach(function (elem) {
    elem.addEventListener("click", activeTab);
  });
  function activeTab() {
    tabNavItem.forEach(function (elem) {
      elem.classList.remove("active");
    });
    this.classList.add("active");
    let tabName = this.getAttribute("data-tab");

    activeTabContent(tabName);
  }

  function activeTabContent(tabName) {
    tabContent.forEach(function (item) {
      if (item.classList.contains(tabName)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

//SwiperSlider------------------------------------------------------------------------------------------------------
export function swiperSlider() {
  const swiper = new Swiper(".swiper-slider", {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

//Аккордион - спойлер--------------------------------------------------------------------------------------------

export function accordinoSpiler() {
  let accordions = document.querySelectorAll(".container__box");

  for (let index = 0; index < accordions.length; index++) {
    const accordion = accordions[index];

    accordion.addEventListener("click", function () {
      console.log(accordion);
      accordion.classList.toggle("active");
    });
  }

  let accordionTitles = document.querySelectorAll(".accordion__title");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", (Event) => {
      accordionTitle.classList.toggle("active");
    });
  });
}

//PopUpMenu-----------------------------------------------------------------------------------------------------

export function popUpMenu() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}
