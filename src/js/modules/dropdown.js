export default class DropDownMenu {
  constructor({menuClass, dropdownClass}){
    this.menuClass = document.querySelectorAll(menuClass)
    this.menuDropDownClass = document.querySelectorAll(dropdownClass)
  }

  closeMenu(){
    this.menuDropDownClass.forEach(dropdown => {
      dropdown.style.display = 'none'
    })
  }

  init(){
    this.menuClass.forEach(menu => {
      menu.addEventListener('click', (e) => {
        const target = e.target
        try{
          if(target.className == 'header-menu__item-link'){
            let nextElem = target.nextElementSibling
            this.closeMenu()
            nextElem.style.display = 'flex'  
          }
        } catch(e){}
      })

    })
    document.addEventListener('mouseover', (e) => {
      const target = e.target
      if(!target.hasAttribute('data-dropdown')){
        this.closeMenu()
      }

    })
  }
}