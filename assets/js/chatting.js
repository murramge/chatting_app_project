/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/js/chatting.js":
/*!*******************************!*\
  !*** ./client/js/chatting.js ***!
  \*******************************/
/***/ (() => {

eval("$(function () {\n  var socket = io.connect();\n  socket.on('message', function (data) {\n    var output = '';\n    output += '<div class=\"alert alert-info\"><strong>';\n    output += data.name;\n    output += '</strong> : ';\n    output += data.message;\n    output += '</div>';\n    $(output).prependTo('#content');\n  });\n  socket.on('preload', function (data) {\n    var output = '';\n    output += '<div class=\"alert alert-info\"><strong>';\n    output += data.name;\n    output += '</strong> : ';\n    output += data.message;\n    output += '</div>';\n    $(output).prependTo('#content');\n  });\n  $(document).on(\"click\", '#button', function () {\n    socket.emit('message', {\n      name: $('#name').val(),\n      message: $('#message').val()\n    });\n    $('#message').val('');\n  });\n});\n\n//# sourceURL=webpack://chatting_app_project/./client/js/chatting.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/js/chatting.js"]();
/******/ 	
/******/ })()
;