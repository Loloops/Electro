export default class Popup {
  constructor({popupBlock, popupBlockClose, timeMS}){
    this.popup = document.querySelector(popupBlock)
    this.popupClose = document.querySelector(popupBlockClose)
    this.time = timeMS;
  }

  show(){
    setTimeout(() => {
      this.popup.style.display = 'block';
    }, this.time);
  }
  close(){
    this.popup.style.display = '';
  }
  

  init(){
    this.show()
    this.popupClose.addEventListener('click', () => {
      this.close()
    })
  }


}