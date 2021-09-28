import Slider from "./Slider";
export default class MiniSlider extends Slider {
  constructor(contentClass, next, prev, sliderWrapper, sliderInner) {
    super(contentClass, next, prev, sliderWrapper, sliderInner);
    this.width = window.getComputedStyle(this.sliderWrapper).width;
    this.offset = 0;
  }


  show() {
    this.sliderInner.style.width = 33.333333333 * this.contentClass.length + '%';
    this.sliderInner.style.display = 'flex';
    this.sliderInner.style.transition = '0.5s all';
    this.sliderWrapper.style.overflow = 'hidden';

    this.contentClass.forEach(slide => {
      slide.style.width = (parseInt(this.width) / 3) + 'px';

    })
  }

  replaces(width) {
    return +width.replace(/\D/g, '');
  }


  changeNext() {
    if (this.offset == this.replaces(this.width) * (Math.ceil((this.contentClass.length - 3) / 3))) {
      this.offset = 0;
    } else {
      this.offset += this.replaces(this.width)
    }
    this.sliderInner.style.transform = `translateX(-${this.offset}px)`;

  }

  changePrev() {
    if (this.offset == 0) {
      this.offset = this.replaces(this.width) * (Math.ceil((this.contentClass.length - 3) / 3));
    } else {
      this.offset -= this.replaces(this.width)
    }
    this.sliderInner.style.transform = `translateX(-${this.offset}px)`;

  }


  init() {
    this.show()

    this.next.addEventListener('click', () => {
      this.changeNext()
    })

    this.prev.addEventListener('click', () => {
      this.changePrev()
    })
  }



}