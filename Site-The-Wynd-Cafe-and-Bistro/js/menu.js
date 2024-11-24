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

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Здесь ваш код из файла menu.js\r\n\r\n\r\n\r\nfunction zoomIn(imgSrc) {\r\n    var modalImg = document.getElementById(\"modal-img\");\r\n    modalImg.src = imgSrc;\r\n    document.getElementById(\"modal-container\").style.display = \"block\";\r\n    document.body.classList.add(\"modal-open\");\r\n  }\r\n\r\n\r\n  function openModal(imageSrc) {\r\n    var modal = document.getElementById(\"modal-container\");\r\n    var modalImg = document.getElementById(\"modal-img\");\r\n    modal.style.display = \"block\";\r\n    modalImg.src = imageSrc;\r\n    document.body.classList.add(\"modal-open\"); // Добавляем класс для блокировки прокрутки страницы\r\n    updateCloseButtonPosition(); // Меняем позицию крестика относительно адаптированной картинки\r\n  }\r\n\r\n  function closeModal() {\r\n    var modal = document.getElementById(\"modal-container\");\r\n    modal.style.display = \"none\";\r\n    document.body.classList.remove(\"modal-open\"); // Удаляем класс для разблокировки прокрутки страницы\r\n  }\r\n  \r\n\r\n\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    var burger = document.querySelector(\".header__burger\");\r\n    var menu = document.querySelector(\".header__menu\");\r\n    var body = document.querySelector(\"body\");\r\n\r\n    burger.addEventListener(\"click\", function (event) {\r\n      burger.classList.toggle(\"active\");\r\n      menu.classList.toggle(\"active\");\r\n      body.classList.toggle(\"lock\");\r\n    });\r\n\r\n    body.addEventListener(\"click\", function (event) {\r\n      if (\r\n        !event.target.closest(\".header__burger\") &&\r\n        !event.target.closest(\".header__menu\")\r\n      ) {\r\n        burger.classList.remove(\"active\");\r\n        menu.classList.remove(\"active\");\r\n        body.classList.remove(\"lock\");\r\n      }\r\n    });\r\n  });\r\n\r\n\r\n    function updateCloseButtonPosition() {\r\n    var img = document.getElementById('modal-img');\r\n    var btn = document.querySelector('.close-modal');\r\n\r\n    if (img && btn) {\r\n      // Позиционируем крестик в правом верхнем углу изображения\r\n      btn.style.top = `${img.offsetTop}px`; // Y-координата верхнего края картинки\r\n      btn.style.left = `${img.offsetLeft + img.clientWidth - btn.offsetWidth}px`; // X-координата левого края картинки плюс её ширина минус ширина крестика\r\n    }\r\n  }\r\n\r\n    // Вызываем функцию при изменении размеров окна и после полной загрузки изображения\r\n    window.addEventListener('resize', updateCloseButtonPosition);\r\n  window.addEventListener('load', updateCloseButtonPosition);\r\n  \r\n  });\n\n//# sourceURL=webpack://site-the-wynd-cafe-and-bistro/./src/js/menu.js?");

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
/******/ 	__webpack_modules__["./src/js/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;