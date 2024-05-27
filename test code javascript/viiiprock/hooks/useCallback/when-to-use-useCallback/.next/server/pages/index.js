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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
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

/***/ "./components/ActionGroup.tsx":
/*!************************************!*\
  !*** ./components/ActionGroup.tsx ***!
  \************************************/
/*! exports provided: ActionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return ActionGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/constants */ "./common/constants.ts");
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn-Code-Youtube\\test code javascript\\viiiprock\\hooks\\useCallback\\when-to-use-useCallback\\components\\ActionGroup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TODO,
  IN_PROGRESS,
  DONE,
  CANCELED,
  DELETE
} = common_constants__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"];
const ActionGroup = ({
  statusState,
  onUpdateTask
}) => {
  const Buttons = () => {
    switch (statusState) {
      case TODO:
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          color: "primary",
          onClick: () => onUpdateTask(IN_PROGRESS),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }
        }, "Start"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: () => onUpdateTask(DELETE),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }
        }, "Delete"));

      case IN_PROGRESS:
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          color: "secondary",
          onClick: () => onUpdateTask(DONE),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }
        }, "Done"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: () => onUpdateTask(CANCELED),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }
        }, "Cancel"));
      // Canceled and done has same case

      case CANCELED:
      case DONE:
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: () => onUpdateTask(DELETE),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 16
          }
        }, "Delete");
      // Delete case is same as default

      default:
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(Buttons, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/TaskInput.tsx":
/*!**********************************!*\
  !*** ./components/TaskInput.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/constants */ "./common/constants.ts");
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn-Code-Youtube\\test code javascript\\viiiprock\\hooks\\useCallback\\when-to-use-useCallback\\components\\TaskInput.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function TaskInput({
  onAdd,
  isLoading = false
}) {
  const {
    0: taskTitle,
    1: setTaskTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleChangeTitle = e => {
    return setTaskTitle(e.currentTarget.value);
  };

  const addTask = () => {
    if (onAdd && taskTitle) {
      onAdd({
        id: Date.now(),
        title: taskTitle,
        status: common_constants__WEBPACK_IMPORTED_MODULE_2__["StatusEnum"].TODO
      });
    } // reset title


    setTaskTitle("");
  };

  return __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      addTask();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    fullWidth: true,
    type: "text",
    placeholder: isLoading ? "Adding todo..." : "Add new todo",
    disabled: isLoading,
    required: true,
    value: taskTitle,
    onChange: handleChangeTitle,
    role: "add",
    tabIndex: -1,
    style: {
      padding: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TaskInput);

/***/ }),

/***/ "./components/TaskListItem.tsx":
/*!*************************************!*\
  !*** ./components/TaskListItem.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/constants */ "./common/constants.ts");
/* harmony import */ var queries_hooks_usePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! queries/hooks/usePost */ "./queries/hooks/usePost.ts");
/* harmony import */ var queries_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! queries/endpoints */ "./queries/endpoints.ts");
/* harmony import */ var _ActionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionGroup */ "./components/ActionGroup.tsx");
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn-Code-Youtube\\test code javascript\\viiiprock\\hooks\\useCallback\\when-to-use-useCallback\\components\\TaskListItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function TaskListItem({
  children,
  status,
  taskId
}) {
  const {
    0: statusState,
    1: setStatusState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(status);
  const [postData, {
    loading,
    error
  }] = Object(queries_hooks_usePost__WEBPACK_IMPORTED_MODULE_3__["usePost"])(queries_endpoints__WEBPACK_IMPORTED_MODULE_4__["UPDATE_TODO"]);

  const handleUpdateTask = async updateStatus => {
    setStatusState(updateStatus); // update to server

    return postData({
      id: taskId,
      status: updateStatus
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    style: {
      color: common_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS_COLORS"][statusState]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, common_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS_ICONS"][statusState])), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    style: {
      color: common_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS_COLORS"][statusState]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, children, error && error.message, loading && "Updating..."), __jsx(_ActionGroup__WEBPACK_IMPORTED_MODULE_5__["ActionGroup"], {
    statusState: statusState,
    onUpdateTask: handleUpdateTask,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TaskListItem);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var queries_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! queries/endpoints */ "./queries/endpoints.ts");
/* harmony import */ var components_TaskInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TaskInput */ "./components/TaskInput.tsx");
/* harmony import */ var components_TaskListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TaskListItem */ "./components/TaskListItem.tsx");
/* harmony import */ var queries_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! queries/hooks/useFetch */ "./queries/hooks/useFetch.ts");
/* harmony import */ var queries_hooks_usePost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! queries/hooks/usePost */ "./queries/hooks/usePost.ts");
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn-Code-Youtube\\test code javascript\\viiiprock\\hooks\\useCallback\\when-to-use-useCallback\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Home() {
  const {
    0: tasks,
    1: setTasks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [fetchData, {
    loading,
    error
  }] = Object(queries_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__["useFetch"])(queries_endpoints__WEBPACK_IMPORTED_MODULE_2__["TODOS"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData().then(data => {
      setTasks(data);
    });
  }, []);
  const [postData, {
    loading: createLoading,
    error: createError
  }] = Object(queries_hooks_usePost__WEBPACK_IMPORTED_MODULE_6__["usePost"])(queries_endpoints__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"]);

  const handleAddTask = async task => {
    // update local
    const updateTasks = [task, ...tasks];
    setTasks(updateTasks);
    return postData(task);
  };

  if (createError) {
    alert(`Create unsuccessful: ${createError}`);
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(components_TaskInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLoading: createLoading,
    onAdd: handleAddTask,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), loading && "Loading data...", error && error.message, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, tasks.length <= 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Empty!!!") : tasks.map(task => {
    return __jsx(components_TaskListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: task.id,
      status: task.status,
      taskId: task.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, task.title);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./queries/hooks/useFetch.ts":
/*!***********************************!*\
  !*** ./queries/hooks/useFetch.ts ***!
  \***********************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFetch(endpoint) {
  const {
    0: fetchResult,
    1: setFetchResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: false
  });

  const fetchData = async () => {
    try {
      setFetchResult({
        loading: true
      });
      const response = await fetch(endpoint);
      const data = await response.json();
      setFetchResult({
        loading: false
      });
      return data;
    } catch (err) {
      setFetchResult({
        loading: false,
        error: err.message
      });
    }
  };

  return [fetchData, {
    loading: fetchResult.loading,
    error: fetchResult.error
  }];
}

/***/ }),

/***/ "./queries/hooks/usePost.ts":
/*!**********************************!*\
  !*** ./queries/hooks/usePost.ts ***!
  \**********************************/
/*! exports provided: usePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePost", function() { return usePost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePost(endpoint) {
  const {
    0: {
      loading,
      error
    },
    1: setFetchResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: false
  });
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const postData = async input => {
    try {
      setFetchResult({
        loading: true
      });
      const post = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });
      const response = await post.json();
      setData(response);
    } catch (err) {
      setFetchResult({
        loading: false,
        error: err.message
      });
    }

    setFetchResult({
      loading: false
    });
  };

  return [postData, {
    data,
    loading,
    error
  }];
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGlvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrTGlzdEl0ZW0udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9xdWVyaWVzL2VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9xdWVyaWVzL2hvb2tzL3VzZUZldGNoLnRzIiwid2VicGFjazovLy8uL3F1ZXJpZXMvaG9va3MvdXNlUG9zdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsIlNUT1JBR0VfS0VZIiwiU3RhdHVzRW51bSIsIlNUQVRVU19JQ09OUyIsIlRPRE8iLCJJTl9QUk9HUkVTUyIsIkRPTkUiLCJERUxFVEUiLCJDQU5DRUxFRCIsIlNUQVRVU19DT0xPUlMiLCJBY3Rpb25Hcm91cCIsInN0YXR1c1N0YXRlIiwib25VcGRhdGVUYXNrIiwiQnV0dG9ucyIsIlRhc2tJbnB1dCIsIm9uQWRkIiwiaXNMb2FkaW5nIiwidGFza1RpdGxlIiwic2V0VGFza1RpdGxlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJhZGRUYXNrIiwiaWQiLCJEYXRlIiwibm93IiwidGl0bGUiLCJzdGF0dXMiLCJwcmV2ZW50RGVmYXVsdCIsInBhZGRpbmciLCJUYXNrTGlzdEl0ZW0iLCJjaGlsZHJlbiIsInRhc2tJZCIsInNldFN0YXR1c1N0YXRlIiwicG9zdERhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VQb3N0IiwiVVBEQVRFX1RPRE8iLCJoYW5kbGVVcGRhdGVUYXNrIiwidXBkYXRlU3RhdHVzIiwiY29sb3IiLCJtZXNzYWdlIiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJmZXRjaERhdGEiLCJ1c2VGZXRjaCIsIlRPRE9TIiwidXNlRWZmZWN0IiwidGhlbiIsImRhdGEiLCJjcmVhdGVMb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJBRERfVE9ETyIsImhhbmRsZUFkZFRhc2siLCJ0YXNrIiwidXBkYXRlVGFza3MiLCJhbGVydCIsImxlbmd0aCIsIm1hcCIsImVuZHBvaW50IiwiZmV0Y2hSZXN1bHQiLCJzZXRGZXRjaFJlc3VsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyIiwic2V0RGF0YSIsImlucHV0IiwicG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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Q0osUUFBRCxFQUFXO0FBQ2pDVSxjQUFNLEVBQUUsTUFEeUI7QUFFakNDLGVBQU8sRUFBRTtBQUNQLDBCQUFnQjtBQURULFNBRndCO0FBS2pDQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixLQUFmO0FBTDJCLE9BQVgsQ0FBeEI7QUFRQSxZQUFNTCxRQUFRLEdBQUcsTUFBTU0sSUFBSSxDQUFDSixJQUFMLEVBQXZCO0FBQ0FFLGFBQU8sQ0FBQ0osUUFBRCxDQUFQO0FBQ0QsS0FiRCxDQWFFLE9BQU9HLEdBQVAsRUFBWTtBQUNaSixvQkFBYyxDQUFDO0FBQ2I1QixlQUFPLEVBQUUsS0FESTtBQUViQyxhQUFLLEVBQUUrQixHQUFHLENBQUN6QjtBQUZFLE9BQUQsQ0FBZDtBQUlEOztBQUNEcUIsa0JBQWMsQ0FBQztBQUFFNUIsYUFBTyxFQUFFO0FBQVgsS0FBRCxDQUFkO0FBQ0QsR0FyQkQ7O0FBdUJBLFNBQU8sQ0FBQ0QsUUFBRCxFQUFXO0FBQUVpQixRQUFGO0FBQVFoQixXQUFSO0FBQWlCQztBQUFqQixHQUFYLENBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3BDRCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVkgPSBcInRhc2tzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXNFbnVtIHtcclxuICBUT0RPID0gXCJ0b2RvXCIsXHJcbiAgSU5fUFJPR1JFU1MgPSBcImluLXByb2dyZXNzXCIsXHJcbiAgRE9ORSA9IFwiZG9uZVwiLFxyXG4gIERFTEVURSA9IFwiZGVsZXRlZFwiLFxyXG4gIENBTkNFTEVEID0gXCJjYW5jZWxlZFwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBVFVTX0lDT05TID0ge1xyXG4gIFtTdGF0dXNFbnVtLlRPRE9dOiBcImFzc2lnbm1lbnRcIixcclxuICBbU3RhdHVzRW51bS5JTl9QUk9HUkVTU106IFwiYXV0b3JlbmV3XCIsXHJcbiAgW1N0YXR1c0VudW0uRE9ORV06IFwiYXNzaWdubWVudF90dXJuZWRfaW5cIixcclxuICBbU3RhdHVzRW51bS5ERUxFVEVdOiBcImRlbGV0ZVwiLFxyXG4gIFtTdGF0dXNFbnVtLkNBTkNFTEVEXTogXCJjYW5jZWxcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVNfQ09MT1JTID0ge1xyXG4gIFtTdGF0dXNFbnVtLlRPRE9dOiBcImdyZXlcIixcclxuICBbU3RhdHVzRW51bS5JTl9QUk9HUkVTU106IFwiIzAxNTc5YlwiLFxyXG4gIFtTdGF0dXNFbnVtLkRPTkVdOiBcImdyZWVuXCIsXHJcbiAgW1N0YXR1c0VudW0uREVMRVRFXTogXCJyZWRcIixcclxuICBbU3RhdHVzRW51bS5DQU5DRUxFRF06IFwiYmxhY2tcIixcclxufTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBTdGF0dXNFbnVtIH0gZnJvbSBcImNvbW1vbi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgVE9ETywgSU5fUFJPR1JFU1MsIERPTkUsIENBTkNFTEVELCBERUxFVEUgfSA9IFN0YXR1c0VudW07XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uR3JvdXAgPSAoe1xyXG4gIHN0YXR1c1N0YXRlLFxyXG4gIG9uVXBkYXRlVGFzayxcclxufToge1xyXG4gIHN0YXR1c1N0YXRlOiBTdGF0dXNFbnVtO1xyXG4gIG9uVXBkYXRlVGFzazogKHN0YXRlOiBTdGF0dXNFbnVtKSA9PiB2b2lkO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgQnV0dG9ucyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhdHVzU3RhdGUpIHtcclxuICAgICAgY2FzZSBUT0RPOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlVGFzayhJTl9QUk9HUkVTUyl9PlxyXG4gICAgICAgICAgICAgIFN0YXJ0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlVGFzayhERUxFVEUpfT5EZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgSU5fUFJPR1JFU1M6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZVRhc2soRE9ORSl9PlxyXG4gICAgICAgICAgICAgIERvbmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGVUYXNrKENBTkNFTEVEKX0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICAvLyBDYW5jZWxlZCBhbmQgZG9uZSBoYXMgc2FtZSBjYXNlXHJcbiAgICAgIGNhc2UgQ0FOQ0VMRUQ6XHJcbiAgICAgIGNhc2UgRE9ORTpcclxuICAgICAgICByZXR1cm4gPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZVRhc2soREVMRVRFKX0+RGVsZXRlPC9CdXR0b24+O1xyXG4gICAgICAvLyBEZWxldGUgY2FzZSBpcyBzYW1lIGFzIGRlZmF1bHRcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPD48Lz47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgPEJ1dHRvbnMgLz5cclxuICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFRhc2tQcm9wc1R5cGUgfSBmcm9tIFwidHlwZXNcIjtcclxuaW1wb3J0IHsgU3RhdHVzRW51bSB9IGZyb20gXCJjb21tb24vY29uc3RhbnRzXCI7XHJcblxyXG5pbnRlcmZhY2UgVGFza0lucHV0UHJvcHMge1xyXG4gIG9uQWRkOiAodGFzazogVGFza1Byb3BzVHlwZSkgPT4gdm9pZDtcclxuICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYXNrSW5wdXQoeyBvbkFkZCwgaXNMb2FkaW5nID0gZmFsc2UgfTogVGFza0lucHV0UHJvcHMpIHtcclxuICBjb25zdCBbdGFza1RpdGxlLCBzZXRUYXNrVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRpdGxlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICByZXR1cm4gc2V0VGFza1RpdGxlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcclxuICAgIGlmIChvbkFkZCAmJiB0YXNrVGl0bGUpIHtcclxuICAgICAgb25BZGQoe1xyXG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXHJcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNFbnVtLlRPRE8sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzZXQgdGl0bGVcclxuICAgIHNldFRhc2tUaXRsZShcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFkZFRhc2soKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtpc0xvYWRpbmcgPyBcIkFkZGluZyB0b2RvLi4uXCIgOiBcIkFkZCBuZXcgdG9kb1wifVxyXG4gICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17dGFza1RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUaXRsZX1cclxuICAgICAgICByb2xlPVwiYWRkXCJcclxuICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0lucHV0O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUljb24sIEljb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RhdHVzRW51bSwgU1RBVFVTX0NPTE9SUywgU1RBVFVTX0lDT05TIH0gZnJvbSBcImNvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVGFza0xpc3RJdGVtUHJvcHMgfSBmcm9tIFwidHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlUG9zdCB9IGZyb20gXCJxdWVyaWVzL2hvb2tzL3VzZVBvc3RcIjtcclxuaW1wb3J0IHsgVVBEQVRFX1RPRE8gfSBmcm9tIFwicXVlcmllcy9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHsgQWN0aW9uR3JvdXAgfSBmcm9tIFwiLi9BY3Rpb25Hcm91cFwiO1xyXG5cclxuZnVuY3Rpb24gVGFza0xpc3RJdGVtKHsgY2hpbGRyZW4sIHN0YXR1cywgdGFza0lkIH06IFRhc2tMaXN0SXRlbVByb3BzKSB7XHJcbiAgY29uc3QgW3N0YXR1c1N0YXRlLCBzZXRTdGF0dXNTdGF0ZV0gPSB1c2VTdGF0ZTxTdGF0dXNFbnVtPihzdGF0dXMpO1xyXG4gIGNvbnN0IFtwb3N0RGF0YSwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVBvc3QoVVBEQVRFX1RPRE8pO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVUYXNrID0gYXN5bmMgKHVwZGF0ZVN0YXR1czogU3RhdHVzRW51bSkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUodXBkYXRlU3RhdHVzKTtcclxuICAgIC8vIHVwZGF0ZSB0byBzZXJ2ZXJcclxuICAgIHJldHVybiBwb3N0RGF0YSh7XHJcbiAgICAgIGlkOiB0YXNrSWQsXHJcbiAgICAgIHN0YXR1czogdXBkYXRlU3RhdHVzLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8SWNvbiBzdHlsZT17eyBjb2xvcjogU1RBVFVTX0NPTE9SU1tzdGF0dXNTdGF0ZV0gfX0+XHJcbiAgICAgICAgICB7U1RBVFVTX0lDT05TW3N0YXR1c1N0YXRlXX1cclxuICAgICAgICA8L0ljb24+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7IGNvbG9yOiBTVEFUVVNfQ09MT1JTW3N0YXR1c1N0YXRlXSB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAge2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAge2xvYWRpbmcgJiYgXCJVcGRhdGluZy4uLlwifVxyXG4gICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgPEFjdGlvbkdyb3VwIHN0YXR1c1N0YXRlPXtzdGF0dXNTdGF0ZX0gb25VcGRhdGVUYXNrPXtoYW5kbGVVcGRhdGVUYXNrfSAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdEl0ZW07XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQUREX1RPRE8sIFRPRE9TIH0gZnJvbSBcInF1ZXJpZXMvZW5kcG9pbnRzXCI7XHJcbmltcG9ydCBUYXNrSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvVGFza0lucHV0XCI7XHJcbmltcG9ydCBUYXNrTGlzdEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvVGFza0xpc3RJdGVtXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFza1Byb3BzVHlwZSB9IGZyb20gXCJ0eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gXCJxdWVyaWVzL2hvb2tzL3VzZUZldGNoXCI7XHJcbmltcG9ydCB7IHVzZVBvc3QgfSBmcm9tIFwicXVlcmllcy9ob29rcy91c2VQb3N0XCI7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1Byb3BzVHlwZVtdPihbXSk7XHJcbiAgY29uc3QgW2ZldGNoRGF0YSwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUZldGNoKFRPRE9TKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgc2V0VGFza3MoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtwb3N0RGF0YSwgeyBsb2FkaW5nOiBjcmVhdGVMb2FkaW5nLCBlcnJvcjogY3JlYXRlRXJyb3IgfV0gPVxyXG4gICAgdXNlUG9zdChBRERfVE9ETyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSBhc3luYyAodGFzazogVGFza1Byb3BzVHlwZSkgPT4ge1xyXG4gICAgLy8gdXBkYXRlIGxvY2FsXHJcbiAgICBjb25zdCB1cGRhdGVUYXNrczogVGFza1Byb3BzVHlwZVtdID0gW3Rhc2ssIC4uLnRhc2tzXTtcclxuICAgIHNldFRhc2tzKHVwZGF0ZVRhc2tzKTtcclxuXHJcbiAgICByZXR1cm4gcG9zdERhdGEodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNyZWF0ZUVycm9yKSB7XHJcbiAgICBhbGVydChgQ3JlYXRlIHVuc3VjY2Vzc2Z1bDogJHtjcmVhdGVFcnJvcn1gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgPFRhc2tJbnB1dCBpc0xvYWRpbmc9e2NyZWF0ZUxvYWRpbmd9IG9uQWRkPXtoYW5kbGVBZGRUYXNrfSAvPlxyXG5cclxuICAgICAge2xvYWRpbmcgJiYgXCJMb2FkaW5nIGRhdGEuLi5cIn1cclxuICAgICAge2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHt0YXNrcy5sZW5ndGggPD0gMCA/IChcclxuICAgICAgICAgIDxMaXN0SXRlbT5FbXB0eSEhITwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHRhc2tzLm1hcCgodGFzazogVGFza1Byb3BzVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUYXNrTGlzdEl0ZW0ga2V5PXt0YXNrLmlkfSBzdGF0dXM9e3Rhc2suc3RhdHVzfSB0YXNrSWQ9e3Rhc2suaWR9PlxyXG4gICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9UYXNrTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xyXG5cclxuLy8gQ2FuIGJlIGxvYWRlZCBmcm9tIC5lbnYgYnV0IGxlYXZlIGl0IGhlcmVcclxuZXhwb3J0IGNvbnN0IFRPRE9TID0gYCR7QVBJX1VSTH1gO1xyXG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSBgJHtBUElfVVJMfS9hZGQtdG9kb2A7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVE9ETyA9IGAke0FQSV9VUkx9L3VwZGF0ZS10b2RvYDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmV0Y2hSZXN1bHRUeXBlIH0gZnJvbSBcInR5cGVzXCI7XHJcblxyXG50eXBlIEZldGNoVHlwZSA9ICgpID0+IFByb21pc2U8YW55PjtcclxudHlwZSBVc2VGZXRjaFR5cGUgPSBbRmV0Y2hUeXBlLCBGZXRjaFJlc3VsdFR5cGVdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoKGVuZHBvaW50OiBzdHJpbmcpOiBVc2VGZXRjaFR5cGUge1xyXG4gIGNvbnN0IFtmZXRjaFJlc3VsdCwgc2V0RmV0Y2hSZXN1bHRdID0gdXNlU3RhdGU8RmV0Y2hSZXN1bHRUeXBlPih7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0RmV0Y2hSZXN1bHQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RmV0Y2hSZXN1bHQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEZldGNoUmVzdWx0KHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICBmZXRjaERhdGEsXHJcbiAgICB7XHJcbiAgICAgIGxvYWRpbmc6IGZldGNoUmVzdWx0LmxvYWRpbmcsXHJcbiAgICAgIGVycm9yOiBmZXRjaFJlc3VsdC5lcnJvcixcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZXRjaFJlc3VsdFR5cGUgfSBmcm9tIFwidHlwZXNcIjtcclxuXHJcbnR5cGUgUG9zdFR5cGUgPSAoaW5wdXQ6IGFueSkgPT4gUHJvbWlzZTxhbnk+O1xyXG50eXBlIFVzZVBvc3RUeXBlID0gW1Bvc3RUeXBlLCBGZXRjaFJlc3VsdFR5cGVdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc3QoZW5kcG9pbnQ6IHN0cmluZyk6IFVzZVBvc3RUeXBlIHtcclxuICBjb25zdCBbeyBsb2FkaW5nLCBlcnJvciB9LCBzZXRGZXRjaFJlc3VsdF0gPSB1c2VTdGF0ZTxGZXRjaFJlc3VsdFR5cGU+KHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgY29uc3QgcG9zdERhdGE6IFBvc3RUeXBlID0gYXN5bmMgKGlucHV0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRGZXRjaFJlc3VsdCh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgICBjb25zdCBwb3N0ID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXQpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdC5qc29uKCk7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEZldGNoUmVzdWx0KHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0RmV0Y2hSZXN1bHQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gW3Bvc3REYXRhLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=