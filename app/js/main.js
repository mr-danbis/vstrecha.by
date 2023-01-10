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
        animateOut: 'fadeOut',
        mouseDrag: false,
    });

});