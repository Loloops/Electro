import Slider from "./Slider";
export default class MiniSlider extends Slider {
  constructor(contentClass, next, prev, sliderWrapper, sliderInner) {
    super(contentClass, next, prev, sliderWrapper, sliderInner);
    this.width = window.getComputedStyle(this.sliderWrapper).width;
    this.offset = 0;
    this.screen = window.screen.availWidth;
  }


  show() {
    
    this.sliderInner.style.width = 33.333333333 * this.contentClass.length + '%';
    if(this.screen < 1060){
      this.sliderInner.style.width = 50 * this.contentClass.length + '%';
    } 
    if (this.screen < 760){
      this.sliderInner.style.width = 100 * this.contentClass.length + '%';
    }
    this.sliderInner.style.display = 'flex';
    this.sliderInner.style.transition = '0.5s all';
    this.sliderWrapper.style.overflow = 'hidden';

    this.contentClass.forEach(slide => {
      slide.style.width = (parseInt(this.width) / 3) + 'px';
      if(this.screen < 1060){
        slide.style.width = (parseInt(this.width) / 2) + 'px';
      } 
      if(this.screen < 760){
        slide.style.width = parseInt(this.width) + 'px';
      } 
    })
  }

  replaces(width) {
    return +width.replace(/\D/g, '');
  }


  sreenWidth(){
    let widthScreen
    widthScreen = Math.ceil((this.contentClass.length - 3) / 3)//три показа

    if(this.screen < 1060){
      widthScreen = Math.ceil((this.contentClass.length - 2) / 2)//два показа
    } 
    if(this.screen < 760){
      widthScreen = Math.ceil((this.contentClass.length - 1) / 1)//один показ
    }
    return widthScreen
  }


  changeNext() {
    if (this.offset == this.replaces(this.width) * (this.sreenWidth())) {
      this.offset = 0;
    } else {
      this.offset += this.replaces(this.width)
    }
    this.sliderInner.style.transform = `translateX(-${this.offset}px)`;
  }



  changePrev() {
    if (this.offset == 0) {
      this.offset = this.replaces(this.width) * (this.sreenWidth());
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