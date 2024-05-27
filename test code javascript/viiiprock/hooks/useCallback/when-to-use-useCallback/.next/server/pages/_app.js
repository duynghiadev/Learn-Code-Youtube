module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: API_URL, STORAGE_KEY, StatusEnum, STATUS_ICONS, STATUS_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_KEY", function() { return STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusEnum", function() { return StatusEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ICONS", function() { return STATUS_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_COLORS", function() { return STATUS_COLORS; });
const API_URL = "http://localhost:8080";
const STORAGE_KEY = "tasks";
let StatusEnum;

(function (StatusEnum) {
  StatusEnum["TODO"] = "todo";
  StatusEnum["IN_PROGRESS"] = "in-progress";
  StatusEnum["DONE"] = "done";
  StatusEnum["DELETE"] = "deleted";
  StatusEnum["CANCELED"] = "canceled";
})(StatusEnum || (StatusEnum = {}));

const STATUS_ICONS = {
  [StatusEnum.TODO]: "assignment",
  [StatusEnum.IN_PROGRESS]: "autorenew",
  [StatusEnum.DONE]: "assignment_turned_in",
  [StatusEnum.DELETE]: "delete",
  [StatusEnum.CANCELED]: "cancel"
};
const STATUS_COLORS = {
  [StatusEnum.TODO]: "grey",
  [StatusEnum.IN_PROGRESS]: "#01579b",
  [StatusEnum.DONE]: "green",
  [StatusEnum.DELETE]: "red",
  [StatusEnum.CANCELED]: "black"
};

/***/ }),

/***/ "./common/utils.ts":
/*!*************************!*\
  !*** ./common/utils.ts ***!
  \*************************/
/*! exports provided: updateTodos, updateTodo, updateLocalTodoStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodos", function() { return updateTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodo", function() { return updateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocalTodoStatus", function() { return updateLocalTodoStatus; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./common/constants.ts");
 // updateTodos batch update todo list in local
// use for #2 requirement

function updateTodos(currentItems, newItem) {
  const updated = [newItem, ...currentItems];
  return localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__["STORAGE_KEY"], JSON.stringify(updated));
} // updateTodo updates specific data (batch update) 
// use for #2 requirement

function updateTodo(currentItems, {
  id,
  status
}) {
  const indexedId = currentItems.findIndex(item => item.id === id);
  currentItems[indexedId].status = status;
  return localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__["STORAGE_KEY"], JSON.stringify(currentItems));
} // updateLocalTodoStatus updates local status for individual todo
// use for #1 requirement

const updateLocalTodoStatus = (taskId, status) => {
  let localData = [];
  const getLocalData = localStorage.getItem("tasks");

  if (getLocalData) {
    localData = JSON.parse(getLocalData);
  }

  const indexedId = localData.findIndex(item => item.id === taskId);
  localData[indexedId].status = status;
  return localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__["STORAGE_KEY"], JSON.stringify(localData));
};

/***/ }),

/***/ "./mocks/handlers.ts":
/*!***************************!*\
  !*** ./mocks/handlers.ts ***!
  \***************************/
/*! exports provided: handlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlers", function() { return handlers; });
/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw */ "msw");
/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(msw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var queries_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! queries/endpoints */ "./queries/endpoints.ts");
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/utils */ "./common/utils.ts");
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/constants */ "./common/constants.ts");




const handlers = [// get all todos
msw__WEBPACK_IMPORTED_MODULE_0__["rest"].get(queries_endpoints__WEBPACK_IMPORTED_MODULE_1__["TODOS"], (_, res, ctx) => {
  let data = [];
  const localData = localStorage.getItem(common_constants__WEBPACK_IMPORTED_MODULE_3__["STORAGE_KEY"]);

  if (localData) {
    data = JSON.parse(localData);
  }

  return res(ctx.status(200), ctx.json(data));
}), // add new todo
msw__WEBPACK_IMPORTED_MODULE_0__["rest"].post(queries_endpoints__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO"], (req, res, ctx) => {
  let data = [];
  const localData = localStorage.getItem(common_constants__WEBPACK_IMPORTED_MODULE_3__["STORAGE_KEY"]);

  if (localData) {
    data = JSON.parse(localData);
  }

  Object(common_utils__WEBPACK_IMPORTED_MODULE_2__["updateTodos"])(data, req.body);
  return res(ctx.status(200), ctx.json(req.body));
}), // update status
msw__WEBPACK_IMPORTED_MODULE_0__["rest"].post(queries_endpoints__WEBPACK_IMPORTED_MODULE_1__["UPDATE_TODO"], (req, res, ctx) => {
  let data = [];
  const localData = localStorage.getItem(common_constants__WEBPACK_IMPORTED_MODULE_3__["STORAGE_KEY"]);

  if (localData) {
    data = JSON.parse(localData);
  }

  Object(common_utils__WEBPACK_IMPORTED_MODULE_2__["updateTodo"])(data, req.body);
  return res(ctx.status(200), ctx.json(req.body));
})];

/***/ }),

/***/ "./mocks/index.js":
/*!************************!*\
  !*** ./mocks/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  const {
    server
  } = __webpack_require__(/*! mocks/server */ "./mocks/server.ts");

  server.listen();
} else {}

/***/ }),

/***/ "./mocks/server.ts":
/*!*************************!*\
  !*** ./mocks/server.ts ***!
  \*************************/
/*! exports provided: server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
/* harmony import */ var msw_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw/node */ "msw/node");
/* harmony import */ var msw_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(msw_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mocks_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mocks/handlers */ "./mocks/handlers.ts");


const server = Object(msw_node__WEBPACK_IMPORTED_MODULE_0__["setupServer"])(...mocks_handlers__WEBPACK_IMPORTED_MODULE_1__["handlers"]);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn-Code-Youtube\\test code javascript\\viiiprock\\hooks\\useCallback\\when-to-use-useCallback\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // add mock

__webpack_require__(/*! mocks */ "./mocks/index.js");

function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Todo Task Web App"), __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./queries/endpoints.ts":
/*!******************************!*\
  !*** ./queries/endpoints.ts ***!
  \******************************/
/*! exports provided: TODOS, ADD_TODO, UPDATE_TODO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS", function() { return TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TODO", function() { return UPDATE_TODO; });
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/constants */ "./common/constants.ts");
 // Can be loaded from .env but leave it here

const TODOS = `${common_constants__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}`;
const ADD_TODO = `${common_constants__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}/add-todo`;
const UPDATE_TODO = `${common_constants__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}/update-todo`;

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "msw":
/*!**********************!*\
  !*** external "msw" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("msw");

/***/ }),

/***/ "msw/node":
/*!***************************!*\
  !*** external "msw/node" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("msw/node");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21tb24vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9ja3MvaGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9ja3Mvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3F1ZXJpZXMvZW5kcG9pbnRzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXN3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXN3L25vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJTVE9SQUdFX0tFWSIsIlN0YXR1c0VudW0iLCJTVEFUVVNfSUNPTlMiLCJUT0RPIiwiSU5fUFJPR1JFU1MiLCJET05FIiwiREVMRVRFIiwiQ0FOQ0VMRUQiLCJTVEFUVVNfQ09MT1JTIiwidXBkYXRlVG9kb3MiLCJjdXJyZW50SXRlbXMiLCJuZXdJdGVtIiwidXBkYXRlZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlVG9kbyIsImlkIiwic3RhdHVzIiwiaW5kZXhlZElkIiwiZmluZEluZGV4IiwiaXRlbSIsInVwZGF0ZUxvY2FsVG9kb1N0YXR1cyIsInRhc2tJZCIsImxvY2FsRGF0YSIsImdldExvY2FsRGF0YSIsImdldEl0ZW0iLCJwYXJzZSIsImhhbmRsZXJzIiwicmVzdCIsImdldCIsIlRPRE9TIiwiXyIsInJlcyIsImN0eCIsImRhdGEiLCJqc29uIiwicG9zdCIsIkFERF9UT0RPIiwicmVxIiwiYm9keSIsIlVQREFURV9UT0RPIiwic2VydmVyIiwicmVxdWlyZSIsImxpc3RlbiIsInNldHVwU2VydmVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUcsdUJBQWhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLE9BQXBCO0FBRUEsSUFBS0MsVUFBWjs7V0FBWUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7R0FBQUEsVSxLQUFBQSxV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QyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLFNBQUQsZUFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUkYsQ0FERjtBQVlELEM7Ozs7Ozs7Ozs7OztBQzlCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sTUFBTWxCLEtBQUssR0FBSSxHQUFFakMsd0RBQVEsRUFBekI7QUFDQSxNQUFNd0MsUUFBUSxHQUFJLEdBQUV4Qyx3REFBUSxXQUE1QjtBQUNBLE1BQU0yQyxXQUFXLEdBQUksR0FBRTNDLHdEQUFRLGNBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFAsMEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcclxuZXhwb3J0IGNvbnN0IFNUT1JBR0VfS0VZID0gXCJ0YXNrc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU3RhdHVzRW51bSB7XHJcbiAgVE9ETyA9IFwidG9kb1wiLFxyXG4gIElOX1BST0dSRVNTID0gXCJpbi1wcm9ncmVzc1wiLFxyXG4gIERPTkUgPSBcImRvbmVcIixcclxuICBERUxFVEUgPSBcImRlbGV0ZWRcIixcclxuICBDQU5DRUxFRCA9IFwiY2FuY2VsZWRcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVU19JQ09OUyA9IHtcclxuICBbU3RhdHVzRW51bS5UT0RPXTogXCJhc3NpZ25tZW50XCIsXHJcbiAgW1N0YXR1c0VudW0uSU5fUFJPR1JFU1NdOiBcImF1dG9yZW5ld1wiLFxyXG4gIFtTdGF0dXNFbnVtLkRPTkVdOiBcImFzc2lnbm1lbnRfdHVybmVkX2luXCIsXHJcbiAgW1N0YXR1c0VudW0uREVMRVRFXTogXCJkZWxldGVcIixcclxuICBbU3RhdHVzRW51bS5DQU5DRUxFRF06IFwiY2FuY2VsXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTX0NPTE9SUyA9IHtcclxuICBbU3RhdHVzRW51bS5UT0RPXTogXCJncmV5XCIsXHJcbiAgW1N0YXR1c0VudW0uSU5fUFJPR1JFU1NdOiBcIiMwMTU3OWJcIixcclxuICBbU3RhdHVzRW51bS5ET05FXTogXCJncmVlblwiLFxyXG4gIFtTdGF0dXNFbnVtLkRFTEVURV06IFwicmVkXCIsXHJcbiAgW1N0YXR1c0VudW0uQ0FOQ0VMRURdOiBcImJsYWNrXCIsXHJcbn07XHJcbiIsImltcG9ydCB7IFRhc2tQcm9wc1R5cGUgfSBmcm9tIFwidHlwZXNcIlxyXG5pbXBvcnQgeyBTdGF0dXNFbnVtLCBTVE9SQUdFX0tFWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG4vLyB1cGRhdGVUb2RvcyBiYXRjaCB1cGRhdGUgdG9kbyBsaXN0IGluIGxvY2FsXHJcbi8vIHVzZSBmb3IgIzIgcmVxdWlyZW1lbnRcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9zPFQ+KGN1cnJlbnRJdGVtczogVFtdLCBuZXdJdGVtOiBUKSB7XHJcbiAgY29uc3QgdXBkYXRlZCA9W25ld0l0ZW0sIC4uLmN1cnJlbnRJdGVtc11cclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpKVxyXG59XHJcblxyXG4vLyB1cGRhdGVUb2RvIHVwZGF0ZXMgc3BlY2lmaWMgZGF0YSAoYmF0Y2ggdXBkYXRlKSBcclxuLy8gdXNlIGZvciAjMiByZXF1aXJlbWVudFxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kbyhjdXJyZW50SXRlbXM6IGFueVtdLCB7IGlkLCBzdGF0dXMgfTphbnkpIHtcclxuICBjb25zdCBpbmRleGVkSWQgPSBjdXJyZW50SXRlbXMuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGlkKVxyXG4gIGN1cnJlbnRJdGVtc1tpbmRleGVkSWRdLnN0YXR1cyA9IHN0YXR1c1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEl0ZW1zKSlcclxufVxyXG5cclxuLy8gdXBkYXRlTG9jYWxUb2RvU3RhdHVzIHVwZGF0ZXMgbG9jYWwgc3RhdHVzIGZvciBpbmRpdmlkdWFsIHRvZG9cclxuLy8gdXNlIGZvciAjMSByZXF1aXJlbWVudFxyXG5leHBvcnQgY29uc3QgdXBkYXRlTG9jYWxUb2RvU3RhdHVzID0gKHRhc2tJZDpudW1iZXIsIHN0YXR1czpTdGF0dXNFbnVtKSA9PiB7XHJcbiAgbGV0IGxvY2FsRGF0YTphbnkgPSBbXVxyXG4gIGNvbnN0IGdldExvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIilcclxuICBpZihnZXRMb2NhbERhdGEpIHtcclxuICAgIGxvY2FsRGF0YSA9IEpTT04ucGFyc2UoZ2V0TG9jYWxEYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5kZXhlZElkID0gbG9jYWxEYXRhLmZpbmRJbmRleCgoaXRlbTpUYXNrUHJvcHNUeXBlKSA9PiBpdGVtLmlkID09PSB0YXNrSWQpXHJcbiAgbG9jYWxEYXRhW2luZGV4ZWRJZF0uc3RhdHVzID0gc3RhdHVzXHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShsb2NhbERhdGEpKVxyXG59IiwiaW1wb3J0IHsgcmVzdCB9IGZyb20gXCJtc3dcIjtcclxuaW1wb3J0IHsgQUREX1RPRE8sIFRPRE9TLCBVUERBVEVfVE9ETyB9IGZyb20gXCJxdWVyaWVzL2VuZHBvaW50c1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVUb2RvcywgdXBkYXRlVG9kbyB9IGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgU1RPUkFHRV9LRVkgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gIC8vIGdldCBhbGwgdG9kb3NcclxuICByZXN0LmdldChUT0RPUywgKF8sIHJlcywgY3R4KSA9PiB7XHJcbiAgICBsZXQgZGF0YTogW10gPSBbXTtcclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgIGlmIChsb2NhbERhdGEpIHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzKGN0eC5zdGF0dXMoMjAwKSwgY3R4Lmpzb24oZGF0YSkpO1xyXG4gIH0pLFxyXG4gIC8vIGFkZCBuZXcgdG9kb1xyXG4gIHJlc3QucG9zdChBRERfVE9ETywgKHJlcSwgcmVzLCBjdHgpID0+IHtcclxuICAgIGxldCBkYXRhOiBbXSA9IFtdO1xyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xyXG4gICAgaWYgKGxvY2FsRGF0YSkge1xyXG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShsb2NhbERhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVG9kb3MoZGF0YSwgcmVxLmJvZHkpO1xyXG5cclxuICAgIHJldHVybiByZXMoY3R4LnN0YXR1cygyMDApLCBjdHguanNvbihyZXEuYm9keSkpO1xyXG4gIH0pLFxyXG4gIC8vIHVwZGF0ZSBzdGF0dXNcclxuICByZXN0LnBvc3QoVVBEQVRFX1RPRE8sIChyZXEsIHJlcywgY3R4KSA9PiB7XHJcbiAgICBsZXQgZGF0YTogW10gPSBbXTtcclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgIGlmIChsb2NhbERhdGEpIHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxEYXRhKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRvZG8oZGF0YSwgcmVxLmJvZHkpO1xyXG5cclxuICAgIHJldHVybiByZXMoY3R4LnN0YXR1cygyMDApLCBjdHguanNvbihyZXEuYm9keSkpO1xyXG4gIH0pLFxyXG5dO1xyXG4iLCJpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGNvbnN0IHsgc2VydmVyIH0gPSByZXF1aXJlKFwibW9ja3Mvc2VydmVyXCIpO1xyXG4gIHNlcnZlci5saXN0ZW4oKTtcclxufSBlbHNlIHtcclxuICBjb25zdCB7IHdvcmtlciB9ID0gcmVxdWlyZShcIm1vY2tzL2Jyb3dzZXJcIik7XHJcbiAgd29ya2VyLnN0YXJ0KCk7XHJcbn0iLCJpbXBvcnQgeyBzZXR1cFNlcnZlciB9IGZyb20gXCJtc3cvbm9kZVwiO1xyXG5pbXBvcnQgeyBoYW5kbGVycyB9IGZyb20gXCJtb2Nrcy9oYW5kbGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5cclxuLy8gYWRkIG1vY2tcclxucmVxdWlyZShcIm1vY2tzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VG9kbyBUYXNrIFdlYiBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xyXG5cclxuLy8gQ2FuIGJlIGxvYWRlZCBmcm9tIC5lbnYgYnV0IGxlYXZlIGl0IGhlcmVcclxuZXhwb3J0IGNvbnN0IFRPRE9TID0gYCR7QVBJX1VSTH1gO1xyXG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSBgJHtBUElfVVJMfS9hZGQtdG9kb2A7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVE9ETyA9IGAke0FQSV9VUkx9L3VwZGF0ZS10b2RvYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXN3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zdy9ub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9