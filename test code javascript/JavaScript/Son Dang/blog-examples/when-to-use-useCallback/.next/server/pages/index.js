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
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn Code YouTube\\test code javascript\\JavaScript\\Son Dang\\blog-examples\\when-to-use-useCallback\\components\\ActionGroup.tsx";

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
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn Code YouTube\\test code javascript\\JavaScript\\Son Dang\\blog-examples\\when-to-use-useCallback\\components\\TaskInput.tsx";

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
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn Code YouTube\\test code javascript\\JavaScript\\Son Dang\\blog-examples\\when-to-use-useCallback\\components\\TaskListItem.tsx";

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
      lineNumber: 27,
      columnNumber: 7
    }
  }, children, error && error.message, loading && "Updating..."), __jsx(_ActionGroup__WEBPACK_IMPORTED_MODULE_5__["ActionGroup"], {
    statusState: statusState,
    onUpdateTask: handleUpdateTask,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
var _jsxFileName = "E:\\study code\\Study Code Project Youtube\\Learn Code YouTube\\test code javascript\\JavaScript\\Son Dang\\blog-examples\\when-to-use-useCallback\\pages\\index.tsx";

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
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(components_TaskInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLoading: createLoading,
    onAdd: handleAddTask,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), loading && "Loading data...", error && error.message, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, tasks.length <= 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
        lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGlvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrTGlzdEl0ZW0udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9xdWVyaWVzL2VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9xdWVyaWVzL2hvb2tzL3VzZUZldGNoLnRzIiwid2VicGFjazovLy8uL3F1ZXJpZXMvaG9va3MvdXNlUG9zdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsIlNUT1JBR0VfS0VZIiwiU3RhdHVzRW51bSIsIlNUQVRVU19JQ09OUyIsIlRPRE8iLCJJTl9QUk9HUkVTUyIsIkRPTkUiLCJERUxFVEUiLCJDQU5DRUxFRCIsIlNUQVRVU19DT0xPUlMiLCJBY3Rpb25Hcm91cCIsInN0YXR1c1N0YXRlIiwib25VcGRhdGVUYXNrIiwiQnV0dG9ucyIsIlRhc2tJbnB1dCIsIm9uQWRkIiwiaXNMb2FkaW5nIiwidGFza1RpdGxlIiwic2V0VGFza1RpdGxlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2VUaXRsZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJhZGRUYXNrIiwiaWQiLCJEYXRlIiwibm93IiwidGl0bGUiLCJzdGF0dXMiLCJwcmV2ZW50RGVmYXVsdCIsInBhZGRpbmciLCJUYXNrTGlzdEl0ZW0iLCJjaGlsZHJlbiIsInRhc2tJZCIsInNldFN0YXR1c1N0YXRlIiwicG9zdERhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VQb3N0IiwiVVBEQVRFX1RPRE8iLCJoYW5kbGVVcGRhdGVUYXNrIiwidXBkYXRlU3RhdHVzIiwiY29sb3IiLCJtZXNzYWdlIiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJmZXRjaERhdGEiLCJ1c2VGZXRjaCIsIlRPRE9TIiwidXNlRWZmZWN0IiwidGhlbiIsImRhdGEiLCJjcmVhdGVMb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJBRERfVE9ETyIsImhhbmRsZUFkZFRhc2siLCJ0YXNrIiwidXBkYXRlVGFza3MiLCJhbGVydCIsImxlbmd0aCIsIm1hcCIsImVuZHBvaW50IiwiZmV0Y2hSZXN1bHQiLCJzZXRGZXRjaFJlc3VsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyIiwic2V0RGF0YSIsImlucHV0IiwicG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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SyxDQUFDSixRQUFELEVBQVc7QUFDakNVLGNBQU0sRUFBRSxNQUR5QjtBQUVqQ0MsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQsU0FGd0I7QUFLakNDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLEtBQWY7QUFMMkIsT0FBWCxDQUF4QjtBQVFBLFlBQU1MLFFBQVEsR0FBRyxNQUFNTSxJQUFJLENBQUNKLElBQUwsRUFBdkI7QUFDQUUsYUFBTyxDQUFDSixRQUFELENBQVA7QUFDRCxLQWJELENBYUUsT0FBT0csR0FBUCxFQUFZO0FBQ1pKLG9CQUFjLENBQUM7QUFDYjVCLGVBQU8sRUFBRSxLQURJO0FBRWJDLGFBQUssRUFBRStCLEdBQUcsQ0FBQ3pCO0FBRkUsT0FBRCxDQUFkO0FBSUQ7O0FBQ0RxQixrQkFBYyxDQUFDO0FBQUU1QixhQUFPLEVBQUU7QUFBWCxLQUFELENBQWQ7QUFDRCxHQXJCRDs7QUF1QkEsU0FBTyxDQUFDRCxRQUFELEVBQVc7QUFBRWlCLFFBQUY7QUFBUWhCLFdBQVI7QUFBaUJDO0FBQWpCLEdBQVgsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDcENELDhDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG5leHBvcnQgY29uc3QgU1RPUkFHRV9LRVkgPSBcInRhc2tzXCI7XG5cbmV4cG9ydCBlbnVtIFN0YXR1c0VudW0ge1xuICBUT0RPID0gXCJ0b2RvXCIsXG4gIElOX1BST0dSRVNTID0gXCJpbi1wcm9ncmVzc1wiLFxuICBET05FID0gXCJkb25lXCIsXG4gIERFTEVURSA9IFwiZGVsZXRlZFwiLFxuICBDQU5DRUxFRCA9IFwiY2FuY2VsZWRcIixcbn1cblxuZXhwb3J0IGNvbnN0IFNUQVRVU19JQ09OUyA9IHtcbiAgW1N0YXR1c0VudW0uVE9ET106IFwiYXNzaWdubWVudFwiLFxuICBbU3RhdHVzRW51bS5JTl9QUk9HUkVTU106IFwiYXV0b3JlbmV3XCIsXG4gIFtTdGF0dXNFbnVtLkRPTkVdOiBcImFzc2lnbm1lbnRfdHVybmVkX2luXCIsXG4gIFtTdGF0dXNFbnVtLkRFTEVURV06IFwiZGVsZXRlXCIsXG4gIFtTdGF0dXNFbnVtLkNBTkNFTEVEXTogXCJjYW5jZWxcIixcbn07XG5cbmV4cG9ydCBjb25zdCBTVEFUVVNfQ09MT1JTID0ge1xuICBbU3RhdHVzRW51bS5UT0RPXTogXCJncmV5XCIsXG4gIFtTdGF0dXNFbnVtLklOX1BST0dSRVNTXTogXCIjMDE1NzliXCIsXG4gIFtTdGF0dXNFbnVtLkRPTkVdOiBcImdyZWVuXCIsXG4gIFtTdGF0dXNFbnVtLkRFTEVURV06IFwicmVkXCIsXG4gIFtTdGF0dXNFbnVtLkNBTkNFTEVEXTogXCJibGFja1wiLFxufTtcbiIsImltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFN0YXR1c0VudW0gfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IFRPRE8sIElOX1BST0dSRVNTLCBET05FLCBDQU5DRUxFRCwgREVMRVRFIH0gPSBTdGF0dXNFbnVtO1xuXG5leHBvcnQgY29uc3QgQWN0aW9uR3JvdXAgPSAoe1xuICBzdGF0dXNTdGF0ZSxcbiAgb25VcGRhdGVUYXNrLFxufToge1xuICBzdGF0dXNTdGF0ZTogU3RhdHVzRW51bTtcbiAgb25VcGRhdGVUYXNrOiAoc3RhdGU6IFN0YXR1c0VudW0pID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChzdGF0dXNTdGF0ZSkge1xuICAgICAgY2FzZSBUT0RPOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlVGFzayhJTl9QUk9HUkVTUyl9PlxuICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlVGFzayhERUxFVEUpfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgSU5fUFJPR1JFU1M6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZVRhc2soRE9ORSl9PlxuICAgICAgICAgICAgICBEb25lXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGVUYXNrKENBTkNFTEVEKX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICAvLyBDYW5jZWxlZCBhbmQgZG9uZSBoYXMgc2FtZSBjYXNlXG4gICAgICBjYXNlIENBTkNFTEVEOlxuICAgICAgY2FzZSBET05FOlxuICAgICAgICByZXR1cm4gPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZVRhc2soREVMRVRFKX0+RGVsZXRlPC9CdXR0b24+O1xuICAgICAgLy8gRGVsZXRlIGNhc2UgaXMgc2FtZSBhcyBkZWZhdWx0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgPEJ1dHRvbnMgLz5cbiAgICA8L0J1dHRvbkdyb3VwPlxuICApO1xufTtcbiIsImltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFRhc2tQcm9wc1R5cGUgfSBmcm9tIFwidHlwZXNcIjtcbmltcG9ydCB7IFN0YXR1c0VudW0gfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xuXG5pbnRlcmZhY2UgVGFza0lucHV0UHJvcHMge1xuICBvbkFkZDogKHRhc2s6IFRhc2tQcm9wc1R5cGUpID0+IHZvaWQ7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIFRhc2tJbnB1dCh7IG9uQWRkLCBpc0xvYWRpbmcgPSBmYWxzZSB9OiBUYXNrSW5wdXRQcm9wcykge1xuICBjb25zdCBbdGFza1RpdGxlLCBzZXRUYXNrVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlVGl0bGUgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICByZXR1cm4gc2V0VGFza1RpdGxlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBpZiAob25BZGQgJiYgdGFza1RpdGxlKSB7XG4gICAgICBvbkFkZCh7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0VudW0uVE9ETyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyByZXNldCB0aXRsZVxuICAgIHNldFRhc2tUaXRsZShcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbnB1dFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj17aXNMb2FkaW5nID8gXCJBZGRpbmcgdG9kby4uLlwiIDogXCJBZGQgbmV3IHRvZG9cIn1cbiAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgdmFsdWU9e3Rhc2tUaXRsZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVRpdGxlfVxuICAgICAgICByb2xlPVwiYWRkXCJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tJbnB1dDtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbUljb24sIEljb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IFN0YXR1c0VudW0sIFNUQVRVU19DT0xPUlMsIFNUQVRVU19JQ09OUyB9IGZyb20gXCJjb21tb24vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUYXNrTGlzdEl0ZW1Qcm9wcyB9IGZyb20gXCJ0eXBlc1wiO1xuaW1wb3J0IHsgdXNlUG9zdCB9IGZyb20gXCJxdWVyaWVzL2hvb2tzL3VzZVBvc3RcIjtcbmltcG9ydCB7IFVQREFURV9UT0RPIH0gZnJvbSBcInF1ZXJpZXMvZW5kcG9pbnRzXCI7XG5pbXBvcnQgeyBBY3Rpb25Hcm91cCB9IGZyb20gXCIuL0FjdGlvbkdyb3VwXCI7XG5cbmZ1bmN0aW9uIFRhc2tMaXN0SXRlbSh7IGNoaWxkcmVuLCBzdGF0dXMsIHRhc2tJZCB9OiBUYXNrTGlzdEl0ZW1Qcm9wcykge1xuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlPFN0YXR1c0VudW0+KHN0YXR1cyk7XG4gIGNvbnN0IFtwb3N0RGF0YSwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVBvc3QoVVBEQVRFX1RPRE8pO1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVRhc2sgPSBhc3luYyAodXBkYXRlU3RhdHVzOiBTdGF0dXNFbnVtKSA9PiB7XG4gICAgc2V0U3RhdHVzU3RhdGUodXBkYXRlU3RhdHVzKTtcbiAgICAvLyB1cGRhdGUgdG8gc2VydmVyXG4gICAgcmV0dXJuIHBvc3REYXRhKHtcbiAgICAgIGlkOiB0YXNrSWQsXG4gICAgICBzdGF0dXM6IHVwZGF0ZVN0YXR1cyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbT5cbiAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgIDxJY29uIHN0eWxlPXt7IGNvbG9yOiBTVEFUVVNfQ09MT1JTW3N0YXR1c1N0YXRlXSB9fT57U1RBVFVTX0lDT05TW3N0YXR1c1N0YXRlXX08L0ljb24+XG4gICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDxMaXN0SXRlbVRleHQgc3R5bGU9e3sgY29sb3I6IFNUQVRVU19DT0xPUlNbc3RhdHVzU3RhdGVdIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtlcnJvciAmJiBlcnJvci5tZXNzYWdlfVxuICAgICAgICB7bG9hZGluZyAmJiBcIlVwZGF0aW5nLi4uXCJ9XG4gICAgICA8L0xpc3RJdGVtVGV4dD5cbiAgICAgIDxBY3Rpb25Hcm91cCBzdGF0dXNTdGF0ZT17c3RhdHVzU3RhdGV9IG9uVXBkYXRlVGFzaz17aGFuZGxlVXBkYXRlVGFza30gLz5cbiAgICA8L0xpc3RJdGVtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdEl0ZW07XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIExpc3QsIExpc3RJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBBRERfVE9ETywgVE9ET1MgfSBmcm9tIFwicXVlcmllcy9lbmRwb2ludHNcIjtcbmltcG9ydCBUYXNrSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvVGFza0lucHV0XCI7XG5pbXBvcnQgVGFza0xpc3RJdGVtIGZyb20gXCJjb21wb25lbnRzL1Rhc2tMaXN0SXRlbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFza1Byb3BzVHlwZSB9IGZyb20gXCJ0eXBlc1wiO1xuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tIFwicXVlcmllcy9ob29rcy91c2VGZXRjaFwiO1xuaW1wb3J0IHsgdXNlUG9zdCB9IGZyb20gXCJxdWVyaWVzL2hvb2tzL3VzZVBvc3RcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrUHJvcHNUeXBlW10+KFtdKTtcbiAgY29uc3QgW2ZldGNoRGF0YSwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUZldGNoKFRPRE9TKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldFRhc2tzKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3Bvc3REYXRhLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9XSA9IHVzZVBvc3QoQUREX1RPRE8pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSBhc3luYyAodGFzazogVGFza1Byb3BzVHlwZSkgPT4ge1xuICAgIC8vIHVwZGF0ZSBsb2NhbFxuICAgIGNvbnN0IHVwZGF0ZVRhc2tzOiBUYXNrUHJvcHNUeXBlW10gPSBbdGFzaywgLi4udGFza3NdO1xuICAgIHNldFRhc2tzKHVwZGF0ZVRhc2tzKTtcblxuICAgIHJldHVybiBwb3N0RGF0YSh0YXNrKTtcbiAgfTtcblxuICBpZiAoY3JlYXRlRXJyb3IpIHtcbiAgICBhbGVydChgQ3JlYXRlIHVuc3VjY2Vzc2Z1bDogJHtjcmVhdGVFcnJvcn1gKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICA8VGFza0lucHV0IGlzTG9hZGluZz17Y3JlYXRlTG9hZGluZ30gb25BZGQ9e2hhbmRsZUFkZFRhc2t9IC8+XG5cbiAgICAgIHtsb2FkaW5nICYmIFwiTG9hZGluZyBkYXRhLi4uXCJ9XG4gICAgICB7ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX1cbiAgICAgIDxMaXN0PlxuICAgICAgICB7dGFza3MubGVuZ3RoIDw9IDAgPyAoXG4gICAgICAgICAgPExpc3RJdGVtPkVtcHR5ISEhPC9MaXN0SXRlbT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0YXNrcy5tYXAoKHRhc2s6IFRhc2tQcm9wc1R5cGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUYXNrTGlzdEl0ZW0ga2V5PXt0YXNrLmlkfSBzdGF0dXM9e3Rhc2suc3RhdHVzfSB0YXNrSWQ9e3Rhc2suaWR9PlxuICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICA8L1Rhc2tMaXN0SXRlbT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xuXG4vLyBDYW4gYmUgbG9hZGVkIGZyb20gLmVudiBidXQgbGVhdmUgaXQgaGVyZVxuZXhwb3J0IGNvbnN0IFRPRE9TID0gYCR7QVBJX1VSTH1gO1xuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gYCR7QVBJX1VSTH0vYWRkLXRvZG9gO1xuZXhwb3J0IGNvbnN0IFVQREFURV9UT0RPID0gYCR7QVBJX1VSTH0vdXBkYXRlLXRvZG9gO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgRmV0Y2hSZXN1bHRUeXBlIH0gZnJvbSBcInR5cGVzXCJcblxudHlwZSBGZXRjaFR5cGUgPSAoKSA9PiBQcm9taXNlPGFueT5cbnR5cGUgVXNlRmV0Y2hUeXBlID0gW0ZldGNoVHlwZSwgRmV0Y2hSZXN1bHRUeXBlXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmV0Y2goZW5kcG9pbnQ6c3RyaW5nKTogVXNlRmV0Y2hUeXBlIHtcbiAgY29uc3QgW2ZldGNoUmVzdWx0LCBzZXRGZXRjaFJlc3VsdF0gPSB1c2VTdGF0ZTxGZXRjaFJlc3VsdFR5cGU+KHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfSlcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldEZldGNoUmVzdWx0KHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludClcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldEZldGNoUmVzdWx0KHsgbG9hZGluZzogZmFsc2UgfSlcblxuICAgICAgcmV0dXJuIGRhdGFcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RmV0Y2hSZXN1bHQoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBcbiAgfVxuXG4gIHJldHVybiBbIGZldGNoRGF0YSwge1xuICAgIGxvYWRpbmc6IGZldGNoUmVzdWx0LmxvYWRpbmcsXG4gICAgZXJyb3I6IGZldGNoUmVzdWx0LmVycm9yIFxuICB9XVxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEZldGNoUmVzdWx0VHlwZSB9IGZyb20gXCJ0eXBlc1wiXG5cbnR5cGUgUG9zdFR5cGUgPSAoaW5wdXQ6IGFueSkgPT4gUHJvbWlzZTxhbnk+XG50eXBlIFVzZVBvc3RUeXBlID0gW1Bvc3RUeXBlLCBGZXRjaFJlc3VsdFR5cGVdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQb3N0KGVuZHBvaW50OiBzdHJpbmcpOiBVc2VQb3N0VHlwZSB7XG4gIGNvbnN0IFt7IGxvYWRpbmcsIGVycm9yIH0sIHNldEZldGNoUmVzdWx0XSA9IHVzZVN0YXRlPEZldGNoUmVzdWx0VHlwZT4oe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9KVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KClcblxuICBjb25zdCBwb3N0RGF0YTogUG9zdFR5cGUgPSBhc3luYyAoaW5wdXQpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RmV0Y2hSZXN1bHQoeyBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0KSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcG9zdC5qc29uKClcbiAgICAgIHNldERhdGEocmVzcG9uc2UpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRGZXRjaFJlc3VsdCh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgICB9KVxuICAgIH1cbiAgICBzZXRGZXRjaFJlc3VsdCh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gIH1cblxuICByZXR1cm4gW3Bvc3REYXRhLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9