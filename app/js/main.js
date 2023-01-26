document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
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
  const newsListPageSlider = new Slider();
  const newsItemPageSlider = new Slider();

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

  newsListPageSlider.addSlider(".newsList__slider", {
    items: 1,
    margin: 40,
  });

  newsItemPageSlider.addSlider(".otherNews__slider", {
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

  function not18Age() {
    const not18 = document.querySelector(".not18");
    const not = document.querySelector(".is18__not");
    const text = document.querySelector(".is18__not-text");
    const overlay = document.querySelector(".is18__overlay");

    not18.addEventListener("click", () => {
      not.style.display = "block";
      overlay.style.display = "block";
      text.classList.add("show");
    });

    text.addEventListener("click", () => {
      not.style.display = "none";
      text.style.display = "none";
      overlay.style.display = "none";
    });
  }
  if (wrapper.classList.contains("is18_page")) {
    not18Age();
  }

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
  if (wrapper.classList.contains("form")) {
    openMobileSidebar();
  }

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

    $(".vacancy__vacancy").click(function (event) {
      $(this).toggleClass("active").next().slideToggle();
    });
  }
  if (wrapper.classList.contains("form")) {
    dropDown();
  }

  function checkRadio() {
    $(".modal__radio-check").change(function () {
      if ($("#pickup").prop("checked")) {
        $(".modal__form-group--pickup").fadeIn(300);
      } else {
        $(".modal__form-group--pickup").fadeOut(300);
      }

      if ($("#post").prop("checked")) {
        $(".modal__form-group--post").fadeIn(300);
      } else {
        $(".modal__form-group--post").fadeOut(300);
      }

      if ($("#courier").prop("checked")) {
        $(".modal__form-group--courier").fadeIn(300);
      } else {
        $(".modal__form-group--courier").fadeOut(300);
      }
    });
  }
  checkRadio();

  function openForm() {
    const formBtn = document.querySelectorAll(".modal-btn-open");
    const formtest = document.querySelectorAll(".modal-test-open");
    const formProg = document.querySelectorAll(".modal-prog-open");
    const formSur = document.querySelectorAll(".modal-sur-open");
    const formRes = document.querySelectorAll(".modal-res-open");
    // const formQuest = document.querySelectorAll(".modal-quest-open");
    const modal = document.querySelectorAll(".modal");

    const formDone = document.querySelectorAll(".modal__btn-cons");
    const formDoneTest = document.querySelectorAll(".modal__btn-test");
    // const formDoneQest = document.querySelectorAll(".modal__btn-qest");
    const formDoneSur = document.querySelectorAll(".modal__btn-sur");
    const formDoneRes = document.querySelectorAll(".modal__btn-res");

    const modalSuccess = document.querySelectorAll(".modal-complite");

    const closeFormBtn = document.querySelectorAll(".modal__close");

    const modalForm = document.querySelector(".modal-consultation");
    const modaltestForm = document.querySelector(".modal-test");
    const modalSurForm = document.querySelector(".modal-survey");
    // const modalQuestForm = document.querySelector(".modal-question");
    const modalProgForm = document.querySelector(".modal-program");
    const modalResForm = document.querySelector(".modal-res");

    const modalDone = document.querySelector(".modal-complite__cons");
    const modalDoneTest = document.querySelector(".modal-complite__test");
    // const modalDoneQest = document.querySelector(".modal-complite__qest");
    const modalDoneSur = document.querySelector(".modal-complite__sur");
    const modalDoneRes = document.querySelector(".modal-complite__res");

    const formHelpBtn = document.querySelectorAll(".form-btn");
    const closeHelpFormBtn = document.querySelectorAll(".modal-help__close");
    const modalHelpForm = document.querySelector(".modal-help");

    formHelpBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalHelpForm.style.display = "block";
      });
    });

    closeHelpFormBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalHelpForm.style.display = "none";
      });
    });

    formBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "block";
      });
    });

    formRes.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalResForm.style.display = "block";
      });
    });

    formtest.forEach((btn) => {
      btn.addEventListener("click", () => {
        modaltestForm.style.display = "block";
      });
    });

    formProg.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalProgForm.style.display = "block";
      });
    });

    formSur.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalSurForm.style.display = "block";
      });
    });

    // formQuest.forEach((btn) => {
    //   btn.addEventListener("click", () => {
    //     modalQuestForm.style.display = "block";
    //   });
    // });

    formDone.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalDone.style.display = "block";
        modal.forEach((modal) => {
          modal.style.display = "none";
        });
      });
    });

    formDoneTest.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalDoneTest.style.display = "block";
        modal.forEach((modal) => {
          modal.style.display = "none";
        });
      });
    });

    // formDoneQest.forEach((btn) => {
    //   btn.addEventListener("click", () => {
    //     modalDoneQest.style.display = "block";
    //     modal.forEach((modal) => {
    //       modal.style.display = "none";
    //     });
    //   });
    // });

    formDoneSur.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalDoneSur.style.display = "block";
        modal.forEach((modal) => {
          modal.style.display = "none";
        });
      });
    });

    formDoneRes.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalDoneRes.style.display = "block";
        modal.forEach((modal) => {
          modal.style.display = "none";
        });
      });
    });

    closeFormBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.forEach((modal) => {
          modal.style.display = "none";
        });
        modalSuccess.forEach((mod) => {
          mod.style.display = "none";
        });
      });
    });
  }
  if (wrapper.classList.contains("form")) {
    openForm();
  }

  function changeVacancy() {
    const gomel = document.querySelector(".vacancy__container-gomel");
    const lida = document.querySelector(".vacancy__container-lida");
    const not = document.querySelector(".vacancy__not");
    const notOverlay = document.querySelector(".vacancy__overlay");
    var vacancy = document.getElementById("vacancy");

    vacancy.addEventListener("click", function () {
      if (vacancy.selectedIndex === 1) {
        gomel.style.display = "flex";
        lida.style.display = "none";
        not.style.display = "none";
        notOverlay.style.display = "none";
      }
      if (vacancy.selectedIndex === 2) {
        gomel.style.display = "none";
        lida.style.display = "flex";
        not.style.display = "none";
        notOverlay.style.display = "none";
      }
      if (vacancy.selectedIndex === 3) {
        gomel.style.display = "none";
        lida.style.display = "none";
        not.style.display = "flex";
        notOverlay.style.display = "flex";
      }
    });
  }

  if (wrapper.classList.contains("vacancyPage")) {
    changeVacancy();
  }

  function addNumberToSlider() {
    const owlDots = document.querySelector(".newsList__slider>.owl-dots");
    const owlDotsNumber = owlDots.querySelectorAll("button>span");

    owlDotsNumber.forEach((item, i) => {
      item.innerHTML = i + 1;
    });
  }
  if (wrapper.classList.contains("newsListPage")) {
    addNumberToSlider();
  }

  function mapCity() {
    const cities = document.querySelectorAll(".addresses__map-city");
    const modalBG = document.querySelector(".cityInfo__bg");
    const modal = document.querySelector(".cityInfo");

    const cityImg = modal.querySelector(".cityInfo__address-img");
    const cityAddress = modal.querySelector(".cityInfo__address-text");
    const cityMap = modal.querySelector(".cityInfo__address-map");

    class Cities {
      constructor(img, name, address, map) {
        this.img = img;
        this.name = name;
        this.address = address;
        this.map = map;
      }

      creatModal(img, name, address, map) {
        modalBG.classList.add("active");

        cityImg.setAttribute("src", img);
        cityImg.setAttribute("alt", name);
        cityAddress.innerText = address;
        cityMap.setAttribute("href", map);
      }
    }

    cities.forEach((city) => {
      city.addEventListener("click", (e) => {
        new Cities().creatModal(
          city.dataset.img,
          city.dataset.name,
          city.dataset.address,
          city.dataset.map
        );

        modal.style.top = e.y + 30 + "px";
        modal.style.left = e.x + 230 + "px";
      });
    });

    document.addEventListener("click", (e) => {
      if (e.target === modalBG) {
        modalBG.classList.remove("active");
      }
    });
  }
  if (wrapper.classList.contains("mainPage")) {
    mapCity();
  }

  $(".contacts__item-title").click(function (event) {
    $(this).next().slideToggle();
  });
});
