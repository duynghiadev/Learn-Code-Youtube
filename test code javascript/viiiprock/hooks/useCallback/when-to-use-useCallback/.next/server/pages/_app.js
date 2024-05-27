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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21tb24vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9ja3MvaGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9ja3Mvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3F1ZXJpZXMvZW5kcG9pbnRzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXN3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXN3L25vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJTVE9SQUdFX0tFWSIsIlN0YXR1c0VudW0iLCJTVEFUVVNfSUNPTlMiLCJUT0RPIiwiSU5fUFJPR1JFU1MiLCJET05FIiwiREVMRVRFIiwiQ0FOQ0VMRUQiLCJTVEFUVVNfQ09MT1JTIiwidXBkYXRlVG9kb3MiLCJjdXJyZW50SXRlbXMiLCJuZXdJdGVtIiwidXBkYXRlZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlVG9kbyIsImlkIiwic3RhdHVzIiwiaW5kZXhlZElkIiwiZmluZEluZGV4IiwiaXRlbSIsInVwZGF0ZUxvY2FsVG9kb1N0YXR1cyIsInRhc2tJZCIsImxvY2FsRGF0YSIsImdldExvY2FsRGF0YSIsImdldEl0ZW0iLCJwYXJzZSIsImhhbmRsZXJzIiwicmVzdCIsImdldCIsIlRPRE9TIiwiXyIsInJlcyIsImN0eCIsImRhdGEiLCJqc29uIiwicG9zdCIsIkFERF9UT0RPIiwicmVxIiwiYm9keSIsIlVQREFURV9UT0RPIiwic2VydmVyIiwicmVxdWlyZSIsImxpc3RlbiIsInNldHVwU2VydmVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUcsdUJBQWhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLE9BQXBCO0FBRUEsSUFBS0MsVUFBWjs7V0FBWUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtBQUFBQSxZO0FBQUFBLFk7R0FBQUEsVSxLQUFBQSxV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QUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxTQUFELGVBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVJGLENBREY7QUFZRCxDOzs7Ozs7Ozs7Ozs7QUM5QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLE1BQU1sQixLQUFLLEdBQUksR0FBRWpDLHdEQUFRLEVBQXpCO0FBQ0EsTUFBTXdDLFFBQVEsR0FBSSxHQUFFeEMsd0RBQVEsV0FBNUI7QUFDQSxNQUFNMkMsV0FBVyxHQUFJLEdBQUUzQyx3REFBUSxjQUEvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQLDBEOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XHJcbmV4cG9ydCBjb25zdCBTVE9SQUdFX0tFWSA9IFwidGFza3NcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFN0YXR1c0VudW0ge1xyXG4gIFRPRE8gPSBcInRvZG9cIixcclxuICBJTl9QUk9HUkVTUyA9IFwiaW4tcHJvZ3Jlc3NcIixcclxuICBET05FID0gXCJkb25lXCIsXHJcbiAgREVMRVRFID0gXCJkZWxldGVkXCIsXHJcbiAgQ0FOQ0VMRUQgPSBcImNhbmNlbGVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVNfSUNPTlMgPSB7XHJcbiAgW1N0YXR1c0VudW0uVE9ET106IFwiYXNzaWdubWVudFwiLFxyXG4gIFtTdGF0dXNFbnVtLklOX1BST0dSRVNTXTogXCJhdXRvcmVuZXdcIixcclxuICBbU3RhdHVzRW51bS5ET05FXTogXCJhc3NpZ25tZW50X3R1cm5lZF9pblwiLFxyXG4gIFtTdGF0dXNFbnVtLkRFTEVURV06IFwiZGVsZXRlXCIsXHJcbiAgW1N0YXR1c0VudW0uQ0FOQ0VMRURdOiBcImNhbmNlbFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVRVU19DT0xPUlMgPSB7XHJcbiAgW1N0YXR1c0VudW0uVE9ET106IFwiZ3JleVwiLFxyXG4gIFtTdGF0dXNFbnVtLklOX1BST0dSRVNTXTogXCIjMDE1NzliXCIsXHJcbiAgW1N0YXR1c0VudW0uRE9ORV06IFwiZ3JlZW5cIixcclxuICBbU3RhdHVzRW51bS5ERUxFVEVdOiBcInJlZFwiLFxyXG4gIFtTdGF0dXNFbnVtLkNBTkNFTEVEXTogXCJibGFja1wiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBUYXNrUHJvcHNUeXBlIH0gZnJvbSBcInR5cGVzXCI7XHJcbmltcG9ydCB7IFN0YXR1c0VudW0sIFNUT1JBR0VfS0VZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG4vLyB1cGRhdGVUb2RvcyBiYXRjaCB1cGRhdGUgdG9kbyBsaXN0IGluIGxvY2FsXHJcbi8vIHVzZSBmb3IgIzIgcmVxdWlyZW1lbnRcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvZG9zPFQ+KGN1cnJlbnRJdGVtczogVFtdLCBuZXdJdGVtOiBUKSB7XHJcbiAgY29uc3QgdXBkYXRlZCA9IFtuZXdJdGVtLCAuLi5jdXJyZW50SXRlbXNdO1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZCkpO1xyXG59XHJcblxyXG4vLyB1cGRhdGVUb2RvIHVwZGF0ZXMgc3BlY2lmaWMgZGF0YSAoYmF0Y2ggdXBkYXRlKVxyXG4vLyB1c2UgZm9yICMyIHJlcXVpcmVtZW50XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvKGN1cnJlbnRJdGVtczogYW55W10sIHsgaWQsIHN0YXR1cyB9OiBhbnkpIHtcclxuICBjb25zdCBpbmRleGVkSWQgPSBjdXJyZW50SXRlbXMuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICBjdXJyZW50SXRlbXNbaW5kZXhlZElkXS5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShjdXJyZW50SXRlbXMpKTtcclxufVxyXG5cclxuLy8gdXBkYXRlTG9jYWxUb2RvU3RhdHVzIHVwZGF0ZXMgbG9jYWwgc3RhdHVzIGZvciBpbmRpdmlkdWFsIHRvZG9cclxuLy8gdXNlIGZvciAjMSByZXF1aXJlbWVudFxyXG5leHBvcnQgY29uc3QgdXBkYXRlTG9jYWxUb2RvU3RhdHVzID0gKHRhc2tJZDogbnVtYmVyLCBzdGF0dXM6IFN0YXR1c0VudW0pID0+IHtcclxuICBsZXQgbG9jYWxEYXRhOiBhbnkgPSBbXTtcclxuICBjb25zdCBnZXRMb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpO1xyXG4gIGlmIChnZXRMb2NhbERhdGEpIHtcclxuICAgIGxvY2FsRGF0YSA9IEpTT04ucGFyc2UoZ2V0TG9jYWxEYXRhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluZGV4ZWRJZCA9IGxvY2FsRGF0YS5maW5kSW5kZXgoXHJcbiAgICAoaXRlbTogVGFza1Byb3BzVHlwZSkgPT4gaXRlbS5pZCA9PT0gdGFza0lkXHJcbiAgKTtcclxuICBsb2NhbERhdGFbaW5kZXhlZElkXS5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShsb2NhbERhdGEpKTtcclxufTtcclxuIiwiaW1wb3J0IHsgcmVzdCB9IGZyb20gXCJtc3dcIjtcclxuaW1wb3J0IHsgQUREX1RPRE8sIFRPRE9TLCBVUERBVEVfVE9ETyB9IGZyb20gXCJxdWVyaWVzL2VuZHBvaW50c1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVUb2RvcywgdXBkYXRlVG9kbyB9IGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHsgU1RPUkFHRV9LRVkgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gIC8vIGdldCBhbGwgdG9kb3NcclxuICByZXN0LmdldChUT0RPUywgKF8sIHJlcywgY3R4KSA9PiB7XHJcbiAgICBsZXQgZGF0YTogW10gPSBbXTtcclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgIGlmIChsb2NhbERhdGEpIHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzKGN0eC5zdGF0dXMoMjAwKSwgY3R4Lmpzb24oZGF0YSkpO1xyXG4gIH0pLFxyXG4gIC8vIGFkZCBuZXcgdG9kb1xyXG4gIHJlc3QucG9zdChBRERfVE9ETywgKHJlcSwgcmVzLCBjdHgpID0+IHtcclxuICAgIGxldCBkYXRhOiBbXSA9IFtdO1xyXG4gICAgY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xyXG4gICAgaWYgKGxvY2FsRGF0YSkge1xyXG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShsb2NhbERhdGEpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVG9kb3MoZGF0YSwgcmVxLmJvZHkpO1xyXG5cclxuICAgIHJldHVybiByZXMoY3R4LnN0YXR1cygyMDApLCBjdHguanNvbihyZXEuYm9keSkpO1xyXG4gIH0pLFxyXG4gIC8vIHVwZGF0ZSBzdGF0dXNcclxuICByZXN0LnBvc3QoVVBEQVRFX1RPRE8sIChyZXEsIHJlcywgY3R4KSA9PiB7XHJcbiAgICBsZXQgZGF0YTogW10gPSBbXTtcclxuICAgIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcclxuICAgIGlmIChsb2NhbERhdGEpIHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxEYXRhKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRvZG8oZGF0YSwgcmVxLmJvZHkpO1xyXG5cclxuICAgIHJldHVybiByZXMoY3R4LnN0YXR1cygyMDApLCBjdHguanNvbihyZXEuYm9keSkpO1xyXG4gIH0pLFxyXG5dO1xyXG4iLCJpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGNvbnN0IHsgc2VydmVyIH0gPSByZXF1aXJlKFwibW9ja3Mvc2VydmVyXCIpO1xyXG4gIHNlcnZlci5saXN0ZW4oKTtcclxufSBlbHNlIHtcclxuICBjb25zdCB7IHdvcmtlciB9ID0gcmVxdWlyZShcIm1vY2tzL2Jyb3dzZXJcIik7XHJcbiAgd29ya2VyLnN0YXJ0KCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgc2V0dXBTZXJ2ZXIgfSBmcm9tIFwibXN3L25vZGVcIjtcclxuaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tIFwibW9ja3MvaGFuZGxlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBzZXR1cFNlcnZlciguLi5oYW5kbGVycyk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcblxyXG4vLyBhZGQgbW9ja1xyXG5yZXF1aXJlKFwibW9ja3NcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wczogYW55KSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudCEucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ub2RvIFRhc2sgV2ViIEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJjb21tb24vY29uc3RhbnRzXCI7XHJcblxyXG4vLyBDYW4gYmUgbG9hZGVkIGZyb20gLmVudiBidXQgbGVhdmUgaXQgaGVyZVxyXG5leHBvcnQgY29uc3QgVE9ET1MgPSBgJHtBUElfVVJMfWA7XHJcbmV4cG9ydCBjb25zdCBBRERfVE9ETyA9IGAke0FQSV9VUkx9L2FkZC10b2RvYDtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9UT0RPID0gYCR7QVBJX1VSTH0vdXBkYXRlLXRvZG9gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXN3L25vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=