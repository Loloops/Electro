import '../styles/style.scss'
import '../page2.html'
import '../index.html'
// import 'bootstrap';


// import Post from "./modules/post";

import MainSlider from './modules/MainSlider'
import NewsSlider from './modules/NewsSlider'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

const slider = new MainSlider({
  contentClass: '.mainSlider-items__content',
  next: '.mainSlider-items__arrows-next',
  prev: '.mainSlider-items__arrows-prev',
  sliderContainer: '.container--slider'
})
slider.init()

const newsSlide = new NewsSlider({
  contentClass: '.news-SliderWrapper__item',
  next: '.sectionTitle-arrows__arrow-next',
  prev: '.sectionTitle-arrows__arrow-prev',

  sliderWrapper: '.news-SliderWrapper',
  sliderInner: '.news-SliderWrapper__inner'
})

newsSlide.init()
})

