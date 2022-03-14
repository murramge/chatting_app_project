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

eval("$(function () {\n  var socket = io.connect();\n  socket.on('message', function (data) {\n    var chat_id = document.getElementById(\"chat_id\").value;\n    var chattingroom_id = document.getElementById(\"chattingroom_id\").value;\n    var messages = data.message;\n    console.log(messages);\n\n    if (chattingroom_id == data.chattingroom_id) {\n      $('#content').append($('<p class=\"talk me\">').text(messages));\n    }\n  });\n  socket.on('preload', function (data) {\n    var chat_id = document.getElementById(\"chat_id\").value;\n    var chattingroom_id = document.getElementById(\"chattingroom_id\").value;\n    var messages = data.message;\n    console.log(messages);\n\n    if (chattingroom_id == data.chattingroom_id) {\n      for (var i = 0; i < messages.length; i++) {\n        $('#content').append($('<p class=\"talk me\">').text(messages[i]));\n      }\n    }\n  });\n  $(document).on(\"click\", '#button', function () {\n    socket.emit('message', {\n      chat_id: $('#chat_id').val(),\n      chattingroom_id: $('#chattingroom_id').val(),\n      message: $('#message').val()\n    });\n    $('#message').val('');\n  });\n});\n\n//# sourceURL=webpack://chatting_app_project/./client/js/chatting.js?");

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