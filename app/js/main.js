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

  const mainPageSlider = new Slider();

  mainPageSlider.addSlider(".mainSlider", {
    items: 1,
    animateOut: "fadeOut",
    mouseDrag: false,
  });

  function openMobileSidebar() {
    const burgerBtn = document.querySelector(".header__burger");
    const closeMenuBtn = document.querySelector(".sidebar__close");
    const mobMenu = document.querySelector(".sidebar");

    burgerBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(0)";
    });

    closeMenuBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(-200%)";
    });
  }
  openMobileSidebar();
});

$(document).ready(function () {
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
});
