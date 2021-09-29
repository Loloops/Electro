/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/MainSlider.js":
/*!**********************************!*\
  !*** ./js/modules/MainSlider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainSlider; }
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./js/modules/Slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MainSlider = /*#__PURE__*/function (_Slider) {
  _inherits(MainSlider, _Slider);

  var _super = _createSuper(MainSlider);

  function MainSlider(contentClass, next, prev, sliderContainer) {
    var _this;

    _classCallCheck(this, MainSlider);

    _this = _super.call(this, contentClass, next, prev, sliderContainer);
    _this.slideIndex = 1;
    _this.dots = [];
    return _this;
  }

  _createClass(MainSlider, [{
    key: "showSlide",
    value: function showSlide(n) {
      if (n > this.contentClass.length) {
        this.slideIndex = 1;
      }

      if (n < 1) {
        this.slideIndex = this.contentClass.length;
      }

      this.contentClass.forEach(function (item) {
        item.style.display = 'none';
      });
      this.contentClass[this.slideIndex - 1].style.display = 'flex';
    }
  }, {
    key: "changeSlide",
    value: function changeSlide(n) {
      this.showSlide(this.slideIndex += n);
    } // DOTS

  }, {
    key: "addDots",
    value: function addDots(_ref) {
      var elementAdd = _ref.elementAdd,
          elementClassAdd = _ref.elementClassAdd,
          attributeAdd = _ref.attributeAdd,
          subElement = _ref.subElement,
          subElementClass = _ref.subElementClass;
      var indicators = document.createElement(elementAdd);
      indicators.classList.add(elementClassAdd);
      this.sliderContainer.append(indicators);

      for (var i = 0; i < this.contentClass.length; i++) {
        //Для динамического добавления элементов, сколько слайдов столько и Dots
        var dot = document.createElement(subElement); //Сам Dots

        dot.setAttribute(attributeAdd, i + 1); //Атрибут назначиться всем дотсам по порядку увеличивая значение

        dot.classList.add(subElementClass);

        if (i == 0) {
          dot.style.opacity = 1; //Первому элементу делаем прозрачность 1
        }

        indicators.append(dot); //Добавляем на страницу

        this.dots.push(dot); //Пушим в массив все дотсы для контроля
      }
    }
  }, {
    key: "dotsChanges",
    value: function dotsChanges() {
      //Метод для переключения прозрачности дотсов вызывается на кнопках next prev
      this.dots.forEach(function (dot) {
        return dot.style.opacity = '.5';
      });
      this.dots[this.slideIndex - 1].style.opacity = 1;
    }
  }, {
    key: "dotsChangesClick",
    value: function dotsChangesClick(_ref2) {
      var _this2 = this;

      var attribute = _ref2.attribute;
      // Метод позволяющий кликать на дотсы и переключать на нужный слайд
      this.dots.forEach(function (dot) {
        dot.addEventListener('click', function (e) {
          var slideTo = e.target.getAttribute(attribute);
          _this2.slideIndex = +slideTo; //???????? Была ошибка пока не привел к числу

          _this2.showSlide(_this2.slideIndex);

          _this2.dots.forEach(function (dot) {
            return dot.style.opacity = '.5';
          });

          _this2.dots[_this2.slideIndex - 1].style.opacity = 1;
        });
      });
    } //----

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // DOTS
      this.addDots({
        elementAdd: 'ol',
        elementClassAdd: 'mainSlider-dots',
        attributeAdd: 'data-slide-to',
        subElement: 'li',
        subElementClass: 'mainSlider-dots__dot'
      });
      this.dotsChangesClick({
        attribute: 'data-slide-to'
      }); // ----

      this.prev.addEventListener('click', function () {
        _this3.changeSlide(-1);

        _this3.dotsChanges();
      });
      this.next.addEventListener('click', function () {
        _this3.changeSlide(1);

        _this3.dotsChanges();
      });
    }
  }]);

  return MainSlider;
}(_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/modules/MiniSlider.js":
/*!**********************************!*\
  !*** ./js/modules/MiniSlider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MiniSlider; }
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./js/modules/Slider.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MiniSlider = /*#__PURE__*/function (_Slider) {
  _inherits(MiniSlider, _Slider);

  var _super = _createSuper(MiniSlider);

  function MiniSlider(contentClass, next, prev, sliderWrapper, sliderInner) {
    var _this;

    _classCallCheck(this, MiniSlider);

    _this = _super.call(this, contentClass, next, prev, sliderWrapper, sliderInner);
    _this.width = window.getComputedStyle(_this.sliderWrapper).width;
    _this.offset = 0;
    return _this;
  }

  _createClass(MiniSlider, [{
    key: "show",
    value: function show() {
      var _this2 = this;

      this.sliderInner.style.width = 33.333333333 * this.contentClass.length + '%';
      this.sliderInner.style.display = 'flex';
      this.sliderInner.style.transition = '0.5s all';
      this.sliderWrapper.style.overflow = 'hidden';
      this.contentClass.forEach(function (slide) {
        slide.style.width = parseInt(_this2.width) / 3 + 'px';
      });
    }
  }, {
    key: "replaces",
    value: function replaces(width) {
      return +width.replace(/\D/g, '');
    }
  }, {
    key: "changeNext",
    value: function changeNext() {
      if (this.offset == this.replaces(this.width) * Math.ceil((this.contentClass.length - 3) / 3)) {
        this.offset = 0;
      } else {
        this.offset += this.replaces(this.width);
      }

      this.sliderInner.style.transform = "translateX(-".concat(this.offset, "px)");
    }
  }, {
    key: "changePrev",
    value: function changePrev() {
      if (this.offset == 0) {
        this.offset = this.replaces(this.width) * Math.ceil((this.contentClass.length - 3) / 3);
      } else {
        this.offset -= this.replaces(this.width);
      }

      this.sliderInner.style.transform = "translateX(-".concat(this.offset, "px)");
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.show();
      this.next.addEventListener('click', function () {
        _this3.changeNext();
      });
      this.prev.addEventListener('click', function () {
        _this3.changePrev();
      });
    }
  }]);

  return MiniSlider;
}(_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./js/modules/Slider.js":
/*!******************************!*\
  !*** ./js/modules/Slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function Slider(_ref) {
  var contentClass = _ref.contentClass,
      next = _ref.next,
      prev = _ref.prev,
      sliderContainer = _ref.sliderContainer,
      sliderWrapper = _ref.sliderWrapper,
      sliderInner = _ref.sliderInner;

  _classCallCheck(this, Slider);

  this.contentClass = document.querySelectorAll(contentClass);
  this.next = document.querySelector(next);
  this.prev = document.querySelector(prev);
  this.sliderContainer = document.querySelector(sliderContainer);
  this.sliderWrapper = document.querySelector(sliderWrapper);
  this.sliderInner = document.querySelector(sliderInner);
};



/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Header-logo.svg */ "./img/Header-logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/eye.svg */ "./img/eye.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Header-arrow.svg */ "./img/Header-arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header-message.svg */ "./img/header-message.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Header-user.svg */ "./img/Header-user.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ZALupa.svg */ "./img/ZALupa.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrowBtn.svg */ "./img/arrowBtn.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Slider-1.png */ "./img/Slider-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Slider-2.png */ "./img/Slider-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrowSlider.svg */ "./img/arrowSlider.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Link-1.svg */ "./img/Link-1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/arrow-LINK.svg */ "./img/arrow-LINK.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Link-2.svg */ "./img/Link-2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Link3.svg */ "./img/Link3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Link4.svg */ "./img/Link4.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Link-5.svg */ "./img/Link-5.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Link-6.svg */ "./img/Link-6.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/keyboard_arrow_left_24px.svg */ "./img/keyboard_arrow_left_24px.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news1.png */ "./img/news1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news2.png */ "./img/news2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news3.png */ "./img/news3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/BlockLinks-1.png */ "./img/BlockLinks-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/BlockLinks-2.png */ "./img/BlockLinks-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/BlockLinks-3.png */ "./img/BlockLinks-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Footer-logo.svg */ "./img/Footer-logo.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Ставрополькоммунэлектро - Главная</title>\r\n</head>\r\n<body>\r\n  <!-- Header -->\r\n <header class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"header-inner\">\r\n      <div class=\"header-inner__item header-inner__item--logo\">\r\n        <div class=\"header-inner__item-logo\">\r\n          <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип-Ставрополькоммунэлектро\"></a>\r\n        </div>\r\n        <div class=\"header-inner__item-titles\">\r\n          <p class=\"header-inner__item-titles-suptitle\">\r\n            Государственное Унитарное предприятие Ставропольского края\r\n          </p>\r\n          <h2 class=\"header-inner__item-titles-title\">\r\n            Ставрополькоммунэлектро\r\n          </h2>\r\n        </div>\r\n      </div> <!--//header-inner__item-->\r\n      <div class=\"header-inner__item\">\r\n        <div class=\"header-inner__item-blindness\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"для слабовидящиx\">\r\n          <a href=\"\">Версия для слабовидящиx</a> \r\n        </div>\r\n        <div class=\"header-inner__item-old\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Старая версия сайта\">\r\n          <a href=\"\">Старая версия сайта</a> \r\n        </div>\r\n      </div> <!--//header-inner__item-->\r\n      <div class=\"header-inner__item\">\r\n        <div class=\"header-inner__item-message\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Интернет приемная\">\r\n          <a href=\"#\">Интернет <br> приемная</a>\r\n        </div>\r\n      </div> <!--//header-inner__item-->\r\n      <div class=\"header-inner__item\">\r\n        <div class=\"header-inner__item-area\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Личный кабинет\">\r\n          <a href=\"#\">Личный <br> кабинет</a>\r\n        </div>\r\n      </div> <!--//header-inner__item-->\r\n    </div><!--//header-inner-->\r\n  </div>\r\n<!-- header-menu -->\r\n  <div class=\"header-menu\">\r\n    <div class=\"container\">\r\n      <div class=\"header-menu__items\">\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\">О предприятии</a>\r\n        </div>\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\">Новости</a>\r\n        </div>\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\">Потребителям</a>\r\n        </div>\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\">Закупки</a>\r\n        </div>\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\">Раскрытие информации</a>\r\n        </div>\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\">Контакты</a>\r\n        </div>\r\n        <div class=\"header-menu__item\">\r\n          <a href=\"#\" class=\"header-menu__item-link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Search\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div><!--//header-menu-->\r\n </header>\r\n  <!-- //Header -->\r\n\r\n  <section class=\"mainSlider\">\r\n    <div class=\"mainSlider-bg\"><!--*-->\r\n\r\n      <div class=\"container  container--slider\">\r\n        <div class=\"mainSlider-items\">\r\n          \r\n          <div class=\"mainSlider-items__content\" style=\"display: flex;\"><!--*-->\r\n            \r\n            <h1>Передавайте показания вовремя</h1>\r\n            <p>Передавайте показания и оплачивайте без комиссии и очередей!</p>\r\n            <div class=\"mainSlider-items__content-button\">\r\n              <button type=\"button\">Подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"#\"></button>\r\n            </div>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" class=\"mainSlider-items__content-img\">\r\n          </div>\r\n\r\n          <div class=\"mainSlider-items__content\" style=\"display: none;\"><!--*-->\r\n            <h1>Оплачивайте онлайн</h1>\r\n            <p>Оплачивайте услуги онлайн круглосуточно и без комиссии!</p>\r\n            <div class=\"mainSlider-items__content-button\">\r\n              <button type=\"button\">Подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"#\"></button>\r\n            </div>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\" class=\"mainSlider-items__content-img\">\r\n          </div>\r\n\r\n          <div class=\"mainSlider-items__content\" style=\"display: none;\"><!--*-->\r\n            <h1>Интернет-приемная</h1>\r\n            <p>Поможем вам получить ответы на возникшие вопросы по электроснабжению.</p>\r\n            <div class=\"mainSlider-items__content-button\">\r\n              <button type=\"button\">Подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"#\"></button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mainSlider-items__content\" style=\"display: none;\"><!--*-->\r\n            <h1>Живите без ограничений</h1>\r\n            <p>Наличие задолженности за энергоресурсы – основание для отключения</p>\r\n            <div class=\"mainSlider-items__content-button\">\r\n              <button type=\"button\">Подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"#\"></button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mainSlider-items__content\" style=\"display: none;\"><!--*-->\r\n            <h1>Живите без ограничений</h1>\r\n            <p>Наличие задолженности за энергоресурсы – основание для отключения</p>\r\n            <div class=\"mainSlider-items__content-button\">\r\n              <button type=\"button\">Подробнее <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"#\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mainSlider-items__arrows\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"#\" class=\"mainSlider-items__arrows-prev\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"#\" class=\"mainSlider-items__arrows-next\"> \r\n        </div>\r\n        \r\n      </div> <!--//container--slider-->\r\n      \r\n    </div><!--mainSlider-bg-->\r\n  </section>\r\n\r\n  <section class=\"groupLink\">\r\n    <div class=\"container\">\r\n      <div class=\"groupLink-rows\">\r\n\r\n        <div class=\"groupLink-row\">\r\n          <div class=\"groupLink-row__item\">\r\n            <a href=\"#\" class=\"groupLink-row__item-link\"> \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" class=\"groupLink-row__item-imgOne\">\r\n              Как стать нашим клиентом \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"groupLink-row__item-imgTwo\">\r\n            </a>\r\n          </div>\r\n          <div class=\"groupLink-row__item\">\r\n            <a href=\"#\" class=\"groupLink-row__item-link\"> \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"groupLink-row__item-imgOne\">\r\n              Тарифы на электроэнергию для населения\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"groupLink-row__item-imgTwo\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"groupLink-row\">\r\n          <div class=\"groupLink-row__item\">\r\n            <a href=\"#\" class=\"groupLink-row__item-link\"> \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" class=\"groupLink-row__item-imgOne\">\r\n              Как стать нашим клиентом \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"groupLink-row__item-imgTwo\">\r\n            </a>\r\n          </div>\r\n          <div class=\"groupLink-row__item\">\r\n            <a href=\"#\" class=\"groupLink-row__item-link\"> \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" class=\"groupLink-row__item-imgOne\">\r\n              Тарифы на электроэнергию для населения\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"groupLink-row__item-imgTwo\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"groupLink-row\">\r\n          <div class=\"groupLink-row__item\">\r\n            <a href=\"#\" class=\"groupLink-row__item-link\"> \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" class=\"groupLink-row__item-imgOne\">\r\n              Как стать нашим клиентом \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"groupLink-row__item-imgTwo\">\r\n            </a>\r\n          </div>\r\n          <div class=\"groupLink-row__item\">\r\n            <a href=\"#\" class=\"groupLink-row__item-link\"> \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" class=\"groupLink-row__item-imgOne\">\r\n              Тарифы на электроэнергию для населения\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" class=\"groupLink-row__item-imgTwo\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"news\">\r\n    <div class=\"container\">\r\n      <div class=\"sectionTitle\">\r\n        <div class=\"sectionTitle-title\">\r\n          <h2>Новости</h2>\r\n        </div>\r\n        <div class=\"sectionTitle-arrows\">\r\n          <div class=\"sectionTitle-arrows__arrow\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" class=\"sectionTitle-arrows__arrow-prev\" data-arrow-prev=\"1\">\r\n          </div>\r\n          <div class=\"sectionTitle-arrows__arrow\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" class=\"sectionTitle-arrows__arrow-next\" data-arrow-next=\"2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n  <div class=\"news-Slider\">\r\n    <div class=\"news-SliderWrapper\" data-news-wrapper>\r\n      <div class=\"news-SliderWrapper__inner\" data-news-wrapperInner>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"news-SliderWrapper__item\" data-news-item>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" class=\"news-SliderWrapper__item-img\">\r\n          <p class=\"news-SliderWrapper__item-date\">\r\n            13.07.2020\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-title\">\r\n            Правила предоставления коммунальных услуг собственникам и пользователям помещений\r\n          </p>\r\n          <p class=\"news-SliderWrapper__item-subtitle\">\r\n            Напоминаем, что в соответствии с Правилами предоставления Правил предоставлени...\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"links\">\r\n    <div class=\"container\">\r\n      <div class=\"sectionTitle\">\r\n        <div class=\"sectionTitle-title\">\r\n          <h2>Полезные ссылки</h2>\r\n        </div>\r\n        <div class=\"sectionTitle-arrows\">\r\n          <div class=\"sectionTitle-arrows__arrow\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" class=\"sectionTitle-arrows__arrow-prev\" data-arrow-prev=\"3\">\r\n          </div>\r\n          <div class=\"sectionTitle-arrows__arrow\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" class=\"sectionTitle-arrows__arrow-next\" data-arrow-next=\"4\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"links-SliderWrapper\" data-links-wrapper>\r\n        <div class=\"links-SliderWrapper__inner\" data-links-wrapperInner>\r\n  \r\n          <div class=\"links-SliderWrapper__item\" data-links-item>\r\n            \r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" class=\"links-SliderWrapper__item-img\">\r\n              <p class=\"links-SliderWrapper__item-title\">\r\n                <a href=\"#\">Управление Федеральной службы судебных приставов по Ставропольскому краю</a>\r\n              </p>\r\n\r\n          </div>\r\n\r\n          <div class=\"links-SliderWrapper__item\" data-links-item>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" class=\"links-SliderWrapper__item-img\">\r\n            <p class=\"links-SliderWrapper__item-title\">\r\n              <a href=\"#\">Год памяти и славы 2020</a>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"links-SliderWrapper__item\" data-links-item>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\" class=\"links-SliderWrapper__item-img\">\r\n            <p class=\"links-SliderWrapper__item-title\">\r\n              <a href=\"#\">Свеча памяти</a>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"links-SliderWrapper__item\" data-links-item>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" class=\"links-SliderWrapper__item-img\">\r\n            <p class=\"links-SliderWrapper__item-title\">\r\n              <a href=\"#\">Управление Федеральной службы судебных приставов по Ставропольскому краю</a>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"links-SliderWrapper__item\" data-links-item>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" class=\"links-SliderWrapper__item-img\">\r\n            <p class=\"links-SliderWrapper__item-title\">\r\n              <a href=\"#\">Год памяти и славы 2020</a>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"links-SliderWrapper__item\" data-links-item>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" alt=\"\" class=\"links-SliderWrapper__item-img\">\r\n            <p class=\"links-SliderWrapper__item-title\">\r\n              <a href=\"#\">Свеча памяти</a>\r\n            </p>\r\n          </div>\r\n  \r\n          \r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n  </section>\r\n\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"footer-inner\">\r\n\r\n        <div class=\"footer-inner__column\">\r\n          <div class=\"footer-inner__column-title\">\r\n            О предприятии\r\n          </div>\r\n          <div class=\"footer-inner__column-links\">\r\n            <a href=\"#\">Руководство предприятия</a>\r\n            <a href=\"#\">Учредительные документы</a>\r\n            <a href=\"#\">Структура предприятия</a>\r\n            <a href=\"#\">Персональные данные\t</a>\r\n            <a href=\"#\">Стандарты обслуживания</a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"footer-inner__column\">\r\n          <div class=\"footer-inner__column-title\">\r\n            Потребителям\r\n          </div>\r\n          <div class=\"footer-inner__column-links\">\r\n            <a href=\"#\">Юридическим лицам</a>\r\n            <a href=\"#\">Население</a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"footer-inner__column\">\r\n          <div class=\"footer-inner__column-title\">\r\n            Закупки\r\n          </div>\r\n          <div class=\"footer-inner__column-links\">\r\n            <a href=\"#\">Положение о закупках</a>\r\n            <a href=\"#\">План закупок</a>\r\n            <a href=\"#\">Реестр закупок</a>\r\n            <a href=\"#\">Сведения о заключенных договорах</a>\r\n            <a href=\"#\">Реестр договоров</a>\r\n            <a href=\"#\">НПА по 223-ФЗ</a>\r\n            <a href=\"#\">Информация, размещенная в соответствии с п. 13 ст. 4 223-ФЗ</a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"footer-inner__column\">\r\n          <div class=\"footer-inner__column-title\">\r\n            Раскрытие информации\r\n          </div>\r\n          <div class=\"footer-inner__column-links\">\r\n            <a href=\"#\">Субъекты оптового и розничного рынка</a>\r\n            <a href=\"#\">Стандарты раскрытия информации</a>\r\n            <a href=\"#\">Иная информация, подлежащая опубликованию</a>\r\n          <div class=\"footer-inner__column-subtitle\">\r\n           <a href=\"#\">Интернет-приемная</a> \r\n          </div>\r\n          <div class=\"footer-inner__column-subtitle\">\r\n            <a href=\"#\">Личный кабинет</a> \r\n           </div>\r\n           <div class=\"footer-inner__column-subtitle\">\r\n            <a href=\"#\">Контакты</a> \r\n           </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"footer-logo\">\r\n        <div class=\"footer-logo__item\">\r\n          <div class=\"footer-logo__item-logo\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" alt=\"\">\r\n          </div>\r\n          <div class=\"footer-logo__item-titles\">\r\n            <h2 class=\"footer-logo__item-title\">\r\n              Ставрополькоммунэлектро\r\n            </h2>\r\n            <p class=\"footer-logo__item-subtitle\">\r\n              © 1998-2020 ГУП СК «Ставрополькоммунэлектро»\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer-logo__item\">\r\n          <a href=\"#\" class=\"footer-logo__item-link\">Политика в отношении обработки персональных данных</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./page2.html":
/*!********************!*\
  !*** ./page2.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Page 2</title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/BlockLinks-1.png":
/*!******************************!*\
  !*** ./img/BlockLinks-1.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/BlockLinks-1.png";

/***/ }),

/***/ "./img/BlockLinks-2.png":
/*!******************************!*\
  !*** ./img/BlockLinks-2.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/BlockLinks-2.png";

/***/ }),

/***/ "./img/BlockLinks-3.png":
/*!******************************!*\
  !*** ./img/BlockLinks-3.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/BlockLinks-3.png";

/***/ }),

/***/ "./img/Footer-logo.svg":
/*!*****************************!*\
  !*** ./img/Footer-logo.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Footer-logo.svg";

/***/ }),

/***/ "./img/Header-arrow.svg":
/*!******************************!*\
  !*** ./img/Header-arrow.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Header-arrow.svg";

/***/ }),

/***/ "./img/Header-logo.svg":
/*!*****************************!*\
  !*** ./img/Header-logo.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Header-logo.svg";

/***/ }),

/***/ "./img/Header-user.svg":
/*!*****************************!*\
  !*** ./img/Header-user.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Header-user.svg";

/***/ }),

/***/ "./img/Link-1.svg":
/*!************************!*\
  !*** ./img/Link-1.svg ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Link-1.svg";

/***/ }),

/***/ "./img/Link-2.svg":
/*!************************!*\
  !*** ./img/Link-2.svg ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Link-2.svg";

/***/ }),

/***/ "./img/Link-5.svg":
/*!************************!*\
  !*** ./img/Link-5.svg ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Link-5.svg";

/***/ }),

/***/ "./img/Link-6.svg":
/*!************************!*\
  !*** ./img/Link-6.svg ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Link-6.svg";

/***/ }),

/***/ "./img/Link3.svg":
/*!***********************!*\
  !*** ./img/Link3.svg ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Link3.svg";

/***/ }),

/***/ "./img/Link4.svg":
/*!***********************!*\
  !*** ./img/Link4.svg ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Link4.svg";

/***/ }),

/***/ "./img/Slider-1.png":
/*!**************************!*\
  !*** ./img/Slider-1.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Slider-1.png";

/***/ }),

/***/ "./img/Slider-2.png":
/*!**************************!*\
  !*** ./img/Slider-2.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Slider-2.png";

/***/ }),

/***/ "./img/ZALupa.svg":
/*!************************!*\
  !*** ./img/ZALupa.svg ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ZALupa.svg";

/***/ }),

/***/ "./img/arrow-LINK.svg":
/*!****************************!*\
  !*** ./img/arrow-LINK.svg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow-LINK.svg";

/***/ }),

/***/ "./img/arrowBtn.svg":
/*!**************************!*\
  !*** ./img/arrowBtn.svg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrowBtn.svg";

/***/ }),

/***/ "./img/arrowSlider.svg":
/*!*****************************!*\
  !*** ./img/arrowSlider.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrowSlider.svg";

/***/ }),

/***/ "./img/eye.svg":
/*!*********************!*\
  !*** ./img/eye.svg ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eye.svg";

/***/ }),

/***/ "./img/header-message.svg":
/*!********************************!*\
  !*** ./img/header-message.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/header-message.svg";

/***/ }),

/***/ "./img/keyboard_arrow_left_24px.svg":
/*!******************************************!*\
  !*** ./img/keyboard_arrow_left_24px.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/keyboard_arrow_left_24px.svg";

/***/ }),

/***/ "./img/news1.png":
/*!***********************!*\
  !*** ./img/news1.png ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news1.png";

/***/ }),

/***/ "./img/news2.png":
/*!***********************!*\
  !*** ./img/news2.png ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news2.png";

/***/ }),

/***/ "./img/news3.png":
/*!***********************!*\
  !*** ./img/news3.png ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _page2_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page2.html */ "./page2.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _modules_MainSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/MainSlider */ "./js/modules/MainSlider.js");
/* harmony import */ var _modules_MiniSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MiniSlider */ "./js/modules/MiniSlider.js");


 // import 'bootstrap';
// import Post from "./modules/post";



window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var slider = new _modules_MainSlider__WEBPACK_IMPORTED_MODULE_3__["default"]({
    contentClass: '.mainSlider-items__content',
    next: '.mainSlider-items__arrows-next',
    prev: '.mainSlider-items__arrows-prev',
    sliderContainer: '.container--slider'
  });
  slider.init();
  var newsSlide = new _modules_MiniSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
    contentClass: '[data-news-item]',
    next: '[data-arrow-next="2"]',
    prev: '[data-arrow-prev="1"]',
    sliderWrapper: '[data-news-wrapper]',
    sliderInner: '[data-news-wrapperInner]'
  });
  newsSlide.init();
  var linksSlide = new _modules_MiniSlider__WEBPACK_IMPORTED_MODULE_4__["default"]({
    contentClass: '[data-links-item]',
    next: '[data-arrow-next="4"]',
    prev: '[data-arrow-prev="3"]',
    sliderWrapper: '[data-links-wrapper]',
    sliderInner: '[data-links-wrapperInner]'
  });
  linksSlide.init();
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map