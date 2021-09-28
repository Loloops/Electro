import '../styles/style.scss'
import '../page2.html'
import '../index.html'
// import 'bootstrap';


// import Post from "./modules/post";

import MainSlider from './modules/MainSlider'
import MiniSlider from './modules/NewsSlider'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

const slider = new MainSlider({
  contentClass: '.mainSlider-items__content',
  next: '.mainSlider-items__arrows-next',
  prev: '.mainSlider-items__arrows-prev',
  sliderContainer: '.container--slider'
})
slider.init()

const newsSlide = new MiniSlider({
  contentClass: '[data-news-item]',
  next: '[data-arrow-next="2"]',
  prev: '[data-arrow-prev="1"]',
  sliderWrapper: '[data-news-wrapper]',
  sliderInner: '[data-news-wrapperInner]'
})
newsSlide.init()

const linksSlide = new MiniSlider({
  contentClass: '[data-links-item]',
  next: '[data-arrow-next="4"]',
  prev: '[data-arrow-prev="3"]',
  sliderWrapper: '[data-links-wrapper]',
  sliderInner: '[data-links-wrapperInner]'
})
linksSlide.init()
})

