import '../styles/style.scss'
import '../page2.html'
import '../index.html'
// import 'bootstrap';


// import Post from "./modules/post";

import MainSlider from './modules/MainSlider'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

const slider = new MainSlider({
  contentClass: '.mainSlider-items__content',
  next: '.mainSlider-items__arrows-next',
  prev: '.mainSlider-items__arrows-prev',
  sliderContainer: '.container--slider'
})
slider.init()

})

