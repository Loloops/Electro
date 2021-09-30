export default class CookiePopup {
  constructor({
    popup,
    popupClose
  }) {
    this.popup = document.querySelector(popup)
    this.closepopup = document.querySelector(popupClose)
    this.consentPropertyType = 'site_consent';
  }

  getItem = (key) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key.trim()]: value
      }), {})
    return cookies[key]
  }

  setItem = (key, value) => {
    document.cookie = `${key}=${value};expires=Sun, 16 Jul 2022 06:21:21 GMT`
  }

  shouldShowPopup = () => {
    if (this.getItem(this.consentPropertyType) === 'true') {
      return true
    } else {
      return false
    }
  }
  saveToStorage = () => {
    setTimeout(() => {
      this.popup.style.display = ' block'
      this.setItem(this.consentPropertyType, true)
      if (this.shouldShowPopup()) {
        //logic
        logic() //*
      }
    }, 1000)
    
  }

  triggers = () => {
    this.closepopup.addEventListener('click', () => {
      this.popup.style.display = ''
    })
  }

  init = () => {
    try {
      if (this.shouldShowPopup()) {
        //logic
        logic() //*
      } else {
        this.saveToStorage()
      }
      this.triggers()
    } catch (e) {
      console.log('??');
    }
  }
}


//Сторонний скрипт который взаимодействует с куки
function logic() {
  console.log('Logic....');
}



