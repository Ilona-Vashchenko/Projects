/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/social.js":
/*!**************************!*\
  !*** ./src/js/social.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function () {\r\n  var radius = 240;\r\n  var autoRotate = true;\r\n  var rotateSpeed = -60;\r\n  var imgWidth = 250;\r\n  var imgHeight = 300;\r\n\r\n  setTimeout(init, 1000);\r\n\r\n  var odrag = document.getElementById(\"drag-shell\");\r\n  var ospin = document.getElementById(\"spin-shell\");\r\n  var aImg = ospin.getElementsByTagName(\"img\");\r\n  var aVid = ospin.getElementsByTagName(\"video\");\r\n  var aEle = [...aImg, ...aVid];\r\n\r\n  ospin.style.width = imgWidth + \"px\";\r\n  ospin.style.height = imgHeight + \"px\";\r\n\r\n  function init(delayTime) {\r\n    for (var i = 0; i < aEle.length; i++) {\r\n      aEle[i].style.transform =\r\n        \"rotateY(\" +\r\n        i * (360 / aEle.length) +\r\n        \"deg) translateZ(\" +\r\n        radius +\r\n        \"px)\";\r\n      aEle[i].style.transition = \"transform 1s\";\r\n      aEle[i].style.transitionDelay =\r\n        delayTime || (aEle.length - i) / 4 + \"s\";\r\n    }\r\n  }\r\n\r\n  function applyTransform(obj) {\r\n    if (tY > 180) tY = 180;\r\n    if (tY < 0) tY = 0;\r\n\r\n    obj.style.transform = \"rotateX(\" + -tY + \"deg) rotateY(\" + tX + \"deg\";\r\n  }\r\n\r\n  function playSpin(yes) {\r\n    ospin.style.animationPlayState = yes ? \"running\" : \"paused\";\r\n  }\r\n\r\n  var sX,\r\n    sY,\r\n    nX,\r\n    nY,\r\n    desX = 0,\r\n    desY = 0,\r\n    tX = 0,\r\n    tY = 10;\r\n\r\n  if (autoRotate) {\r\n    var animationName = rotateSpeed > 0 ? \"spin\" : \"spinRevert\";\r\n    ospin.style.animation = `${animationName} ${Math.abs(\r\n      rotateSpeed\r\n    )}s infinite linear`;\r\n  }\r\n\r\n  document.onpointerdown = function (e) {\r\n    console.log('mouse down');\r\n    clearInterval(odrag.timer);\r\n    e = e || window.Event;\r\n    var sX = e.clientX,\r\n      sY = e.clientY;\r\n\r\n    this.onpointermove = function (e) {\r\n      console.log('mouse move');\r\n      e = e || window.Event;\r\n      var nX = e.clientX,\r\n        nY = e.clientY;\r\n      desX = nX - sX;\r\n      desY = nY - sY;\r\n      tX += desX * 0.1;\r\n      tY += desY * 0.1;\r\n      applyTransform(odrag);\r\n      sX = nX;\r\n      sY = nY;\r\n    };\r\n\r\n    this.onpointerup = function (e) {\r\n      console.log('click up');\r\n      odrag.timer = setInterval(function () {\r\n        desX *= 0.95;\r\n        desY *= 0.95;\r\n        tX += desX * 0.1;\r\n        tY += desY * 0.1;\r\n        applyTransform(odrag);\r\n        playSpin(false);\r\n        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {\r\n          clearInterval(odrag.timer);\r\n          playSpin(true);\r\n        }\r\n      }, 17);\r\n      this.opointermove = this.opointerup = null;\r\n    };\r\n\r\n    return false;\r\n  };\r\n\r\n  document.onmousewheel = function (e) {\r\n    e = e || window.Event;\r\n    var d = e.wheelDelta / 20 || -e.detail;\r\n    radius += d;\r\n    init(1);\r\n  };\r\n\r\n  // Функция для изменения радиуса в зависимости от ширины окна\r\n  function changeRadius() {\r\n    // Получаем текущую ширину окна браузера\r\n    var windowWidth = window.innerWidth;\r\n\r\n    // Вычисляем новый радиус в зависимости от ширины окна\r\n    if (windowWidth < 420) {\r\n      radius = 130; // Устанавливаем радиус 150 для очень маленького окна\r\n    } else if (windowWidth < 545) {\r\n      radius = 170; // Устанавливаем радиус 170 для маленького окна\r\n    } else if (windowWidth < 810) {\r\n      radius = 210; // Устанавливаем радиус 210 для среднего размера окна\r\n    } else {\r\n      radius = 240; // Устанавливаем радиус 240 для большого окна\r\n    }\r\n\r\n    // Вызываем функцию инициализации с новым значением радиуса\r\n    init();\r\n  }\r\n\r\n  // Вызываем функцию при загрузке страницы и при изменении размера окна\r\n  window.onload = function () {\r\n    init();\r\n    changeRadius(); // Вызываем один раз при загрузке страницы, чтобы установить начальный радиус\r\n  };\r\n  window.onresize = changeRadius;\r\n\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    var burger = document.querySelector(\".header__burger\");\r\n    var menu = document.querySelector(\".header__menu\");\r\n    var body = document.querySelector(\"body\");\r\n\r\n    burger.addEventListener(\"click\", function (event) {\r\n      burger.classList.toggle(\"active\");\r\n      menu.classList.toggle(\"active\");\r\n      body.classList.toggle(\"lock\");\r\n    });\r\n\r\n    // Добавляем обработчик события \"click\" на body для закрытия меню\r\n    body.addEventListener(\"click\", function (event) {\r\n      if (\r\n        !event.target.closest(\".header__burger\") &&\r\n        !event.target.closest(\".header__menu\")\r\n      ) {\r\n        burger.classList.remove(\"active\");\r\n        menu.classList.remove(\"active\");\r\n        body.classList.remove(\"lock\");\r\n      }\r\n    });\r\n  });\r\n\r\n\r\n\r\n  function resetSpin() {\r\n    tX = 0;\r\n    tY = 10;\r\n    applyTransform(odrag);\r\n    playSpin(true);\r\n  }\r\n\r\n  document.onpointerup = function (e) {\r\n    odrag.timer = setInterval(function () {\r\n      desX *= 0.95;\r\n      desY *= 0.95;\r\n      tX += desX * 0.1;\r\n      tY += desY * 0.1;\r\n      applyTransform(odrag);\r\n      playSpin(false);\r\n      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {\r\n        clearInterval(odrag.timer);\r\n        resetSpin(); // Вызываем функцию сброса вращения\r\n      }\r\n    }, 17);\r\n    this.onpointermove = this.onpointerup = null;\r\n    return false;\r\n  };\r\n\r\n  document.addEventListener('mouseup', function (e) {\r\n    resetSpin(); // Вызываем функцию сброса вращения\r\n  });\r\n\r\n})\n\n//# sourceURL=webpack://site-the-wynd-cafe-and-bistro/./src/js/social.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/social.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;