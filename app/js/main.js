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
  }
  dropDown();

});
