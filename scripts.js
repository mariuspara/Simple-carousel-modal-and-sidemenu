const slider = {
    position: 0,
    toggle: function (direction) {
        if (this.position < 0 && direction === "prev") {
            console.log(this.position);
            this.position += this.imgWidth;
            this.sliderContainer.style.transform = `translateX(${this.position}px)`;
        } else if (this.position > (-this.imgWidth * (this.sliderItem.length - 1)) && direction === "next") {
            console.log(this.position);
            this.position -= this.imgWidth;
            this.sliderContainer.style.transform = `translateX(${this.position}px)`;
        }

        if (this.position === 0)
            this.btnPrev.style.visibility = "hidden";
        else if (this.position / (this.sliderItem.length - 1) === -this.imgWidth)
            this.btnNext.style.visibility = "hidden";
        else {
            this.btnNext.style.visibility = "visible";
            this.btnPrev.style.visibility = "visible";
        }
    },
    init: function (arg) {
        this.sliderItem = document.getElementsByClassName(arg.sliderItem);
        this.sliderContainer = document.getElementsByClassName(arg.sliderContainer)[0];
        this.imgWidth = document.getElementsByClassName("carousel")[0].offsetWidth;
        this.btnPrev = document.getElementsByClassName(arg.btnPrev)[0];
        this.btnNext = document.getElementsByClassName(arg.btnNext)[0];
        this.btnPrev.onclick = () => this.toggle('prev');
        this.btnNext.onclick = () => this.toggle('next');
        this.toggle('prev');
    }
}

slider.init({
    sliderItem: 'carousel-item',
    sliderContainer: 'carousel-content',
    imgWidth: 'carousel',
    btnPrev: 'btnPrev',
    btnNext: 'btnNext'
})

const showElement = {
    toggleElement: function () {
        this.mainElement.classList.toggle(this.elementShow);
    },
    init: function (param) {
        this.mainElement = document.getElementsByClassName(param.element1)[0];
        console.log(this.mainElement);
        this.elementBtn = document.getElementsByClassName(param.element2);
        this.button2 = document.getElementsByClassName(param.element3)[0];
        this.elementShow = param.showClass;
        console.log(this.elementShow);
        for (let i = 0; i < this.elementBtn.length; i++) {
            this.elementBtn[i].onclick = () => this.toggleElement();
        }
        this.mainElement.onclick = (event) => {
            if (event.target === this.mainElement) {
                this.toggleElement();
            }
        }
    }
}

const showElement2 = { ...showElement};
showElement.init({
    element1: 'modal',
    element2: 'elementBtn',
    showClass: 'show-modal'
});
showElement2.init({
    element1: 'navMenu',
    element2: 'trigger2',
    showClass: 'activeNav'
});