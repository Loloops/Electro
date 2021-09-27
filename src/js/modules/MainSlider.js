export default class MainSlider {
  constructor({contentClass, next, prev, sliderContainer}){
    this.contentClass = document.querySelectorAll(contentClass);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slideIndex = 1;
    this.dots = [];
    this.sliderContainer = document.querySelector(sliderContainer)
  }


  showSlide(n){
    if (n > this.contentClass.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.contentClass.length;
    }

    this.contentClass.forEach(item => {
      item.style.display = 'none';
    })
    this.contentClass[this.slideIndex - 1].style.display = 'flex';
  }

  changeSlide(n){
    this.showSlide(this.slideIndex += n)
  }

  // DOTS
  addDots({elementAdd, elementClassAdd, attributeAdd, subElement, subElementClass}){
    const indicators = document.createElement(elementAdd) 
    indicators.classList.add(elementClassAdd) 
    this.sliderContainer.append(indicators) 

    for(let i = 0; i < this.contentClass.length; i++){ //Для динамического добавления элементов, сколько слайдов столько и Dots
      const dot = document.createElement(subElement) //Сам Dots
      dot.setAttribute(attributeAdd, i + 1) //Атрибут назначиться всем дотсам по порядку увеличивая значение
      dot.classList.add(subElementClass) 
      if (i == 0) {
        dot.style.opacity = 1; //Первому элементу делаем прозрачность 1
      }
      indicators.append(dot) //Добавляем на страницу
      this.dots.push(dot) //Пушим в массив все дотсы для контроля
    }
  }
  dotsChanges(){ //Метод для переключения прозрачности дотсов вызывается на кнопках next prev
      this.dots.forEach(dot => dot.style.opacity = '.5')
      this.dots[this.slideIndex - 1].style.opacity = 1
  }

  dotsChangesClick({attribute}){ // Метод позволяющий кликать на дотсы и переключать на нужный слайд
    this.dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute(attribute)
        this.slideIndex = +slideTo;//???????? Была ошибка пока не привел к числу
        this.showSlide(this.slideIndex)  
        this.dots.forEach(dot => dot.style.opacity = '.5')
        this.dots[this.slideIndex - 1].style.opacity = 1
      })
    })
  }
  //----
 

  init(){
    // DOTS
    this.addDots({
      elementAdd: 'ol',
      elementClassAdd: 'mainSlider-dots',
      attributeAdd: 'data-slide-to',
      subElement: 'li',
      subElementClass: 'mainSlider-dots__dot'
    })
    this.dotsChangesClick({
      attribute: 'data-slide-to',
    })

    
    
    // ----
 
    this.prev.addEventListener('click', () => {
      this.changeSlide(-1)
      this.dotsChanges()
    })
    this.next.addEventListener('click', () => {
      this.changeSlide(1)
      this.dotsChanges()
    })
  }

}