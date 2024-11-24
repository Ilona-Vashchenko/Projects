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

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n      window.addEventListener(\"scroll\", function () {\r\n        var box = document.getElementById(\"space\"); // id вашего меню\r\n        var scrollPosition = window.scrollY;\r\n\r\n        if (scrollPosition > 350) {\r\n          box.classList.add(\"scrolled\"); // название класса, который добавиться к меню, когда вы просрочили страницу на 200пх\r\n        } else {\r\n          box.classList.remove(\"scrolled\");\r\n        }\r\n      });\r\n\r\n      document.addEventListener(\"DOMContentLoaded\", function () {\r\n        var burger = document.querySelector(\".header__burger\");\r\n        var menu = document.querySelector(\".header__menu\");\r\n        var body = document.querySelector(\"body\");\r\n\r\n        burger.addEventListener(\"click\", function (event) {\r\n          burger.classList.toggle(\"active\");\r\n          menu.classList.toggle(\"active\");\r\n          body.classList.toggle(\"lock\");\r\n        });\r\n\r\n        // Добавляем обработчик события \"click\" на body для закрытия меню\r\n        body.addEventListener(\"click\", function (event) {\r\n          if (\r\n            !event.target.closest(\".header__burger\") &&\r\n            !event.target.closest(\".header__menu\")\r\n          ) {\r\n            burger.classList.remove(\"active\");\r\n            menu.classList.remove(\"active\");\r\n            body.classList.remove(\"lock\");\r\n          }\r\n        });\r\n      });\r\n\n\n//# sourceURL=webpack://site-the-wynd-cafe-and-bistro/./src/js/home.js?");

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
/******/ 	__webpack_modules__["./src/js/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;