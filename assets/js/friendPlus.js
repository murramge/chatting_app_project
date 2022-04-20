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

/***/ "./src/client/js/friendPlus.js":
/*!*************************************!*\
  !*** ./src/client/js/friendPlus.js ***!
  \*************************************/
/***/ (() => {

eval("var friendName = document.querySelector(\".friend-name\");\nvar friendPlus = document.querySelector(\".friend-plus\");\nvar userid = document.querySelector(\"#user_id\");\n\nvar handlePlus = function handlePlus(event) {\n  event.preventDefault();\n  console.log(\"hi\");\n  var friendUserName = friendName.textContent;\n  var user_id = userid.value;\n  console.log(friendUserName);\n  fetch(\"/api/search/add\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      friendUserName: friendUserName\n    })\n  });\n  friendUserName.value = \"\"; // window.location.href=`/friend/${user_id}`; \n\n  location.reload(location.href = \"/friend/\".concat(user_id));\n};\n\nfriendPlus.addEventListener(\"click\", handlePlus);\n\n//# sourceURL=webpack://chatting_app_project/./src/client/js/friendPlus.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/friendPlus.js"]();
/******/ 	
/******/ })()
;