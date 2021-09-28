export default class Slider {
  constructor({contentClass, next, prev, sliderContainer, sliderWrapper, sliderInner}){
    this.contentClass = document.querySelectorAll(contentClass);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.sliderContainer = document.querySelector(sliderContainer)
    this.sliderWrapper = document.querySelector(sliderWrapper)
    this.sliderInner = document.querySelector(sliderInner)
  }

}