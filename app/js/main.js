document.addEventListener("DOMContentLoaded", function () {
  class Slider {
    constructor(owlElement, owlOptions) {
      this.owlElement = owlElement;
      this.owlOptions = owlOptions;
    }

    addSlider(owlElement, owlOptions) {
      $(owlElement).owlCarousel(owlOptions);
    }
  }

  const mainPageBannerSlider = new Slider();
  const mainPageNewsSlider = new Slider();

  mainPageBannerSlider.addSlider(".bannerSlider", {
    items: 1,
    animateOut: "fadeOut",
    mouseDrag: false,
  });

  mainPageNewsSlider.addSlider(".newsSlider", {
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      500: {
        items: 2,
        margin: 30,
      },
      1100: {
        items: 3,
        margin: 40,
      },
    },
  });

  function openMobileSidebar() {
    const burgerBtn = document.querySelector(".header__burger");
    const closeMenuBtn = document.querySelector(".sidebar__close");
    const mobMenu = document.querySelector(".sidebar");

    burgerBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(0%)";
    });

    closeMenuBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(-200%)";
    });
  }
  openMobileSidebar();

  function openHelpForm() {
    const formBtn = document.querySelectorAll(".help__button");
    const closeFormBtn = document.querySelectorAll(".modal__close");
    const modalForm = document.querySelector(".modal");

    formBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "block";
      });
    });

    closeFormBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "none";
      });
    });
  }
  openHelpForm();

  function dropDown() {
    $(".sidebar__menu").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });

    $(".sidebar__menu-sub").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });

    $(".header__menu").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });

    $(".header__menu-sub").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });

    $(".header__lung-ru").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });

    $(".sidebar__lung-ru").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });

    $(".city__vacancy").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });
  }
  dropDown();

  function changeVacancy() {
    const gomel = document.querySelector(".city__container-gomel");
    const lida = document.querySelector(".city__container-lida");
    const not = document.querySelector(".city__not");
    const notOverlay = document.querySelector(".city__overlay");
    var city = document.getElementById("city");

    city.addEventListener("click", function () {
      if (city.selectedIndex === 1) {
        gomel.style.display = "flex";
        lida.style.display = "none";
        not.style.display = "none";
        notOverlay.style.display = "none";
      }
      if (city.selectedIndex === 2) {
        gomel.style.display = "none";
        lida.style.display = "flex";
        not.style.display = "none";
        notOverlay.style.display = "none";
      }
      if (city.selectedIndex === 3) {
        gomel.style.display = "none";
        lida.style.display = "none";
        not.style.display = "flex";
        notOverlay.style.display = "flex";
      }
    });
  }
  changeVacancy();

  const cities = document.querySelectorAll(".addresses__map-city");
  const modalBG = document.querySelector(".addresses__modal-bg");
  const modal = document.querySelector(".addresses__modal");
  cities.forEach((city) => {
    city.addEventListener("click", (e) => {
      modal.querySelector(".addresses__modal-text").innerText =
        city.dataset.name;
      modal
        .querySelector(".addresses__modal-img")
        .setAttribute("src", city.dataset.img);
      modal.style.top = e.y + 70 + "px";
      modal.style.left = e.x + 230 + "px";
      modalBG.classList.add("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target === modalBG) {
      modalBG.classList.remove("active");
    }
  });
});
