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
        0:{
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
        }
    }
  });


  function openMobileSidebar() {
    const burgerBtn = document.querySelector(".header__burger");
    const closeMenuBtn = document.querySelector(".sidebar__close");
    const mobMenu = document.querySelector(".sidebar");

    burgerBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(0%)";
    });

    closeMenuBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(100%)";
    });

    mobMenu.addEventListener("click", (event) => {
      if (event.target) {
        mobMenu.style.transform = "translateX(100%)";
      }
    });
  }
  openMobileSidebar();
});
