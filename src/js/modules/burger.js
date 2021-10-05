export default class Burger{
  constructor({burgerSelector}){
    this.burger = document.querySelector(burgerSelector)
  }

  burgerActiveClass(burger){
    burger.addEventListener('click', (e) => {
      e.preventDefault()
      burger.classList.toggle('active')
    })
  }



  init(){
    this.burgerActiveClass(this.burger)
  }
}