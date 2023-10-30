(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/VoiceRecorderWidget.editorPreview.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/VoiceRecorderWidget.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/VoiceRecorderWidget.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/******************************************* Common classes *********************************************/\np {\n  margin: 0 !important;\n  white-space: nowrap;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.p-15 {\n  padding: 15px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.max-width-100 {\n  max-width: 100%;\n}\n\n.center-content {\n  align-items: center;\n}\n\n.end-items {\n  justify-content: flex-end;\n}\n\n.sm-text {\n  font-size: 14px;\n}\n\n/******************************************* Main style *********************************************/\n.items-container {\n  display: flex;\n  align-items: center;\n  gap: 15px 60px;\n  flex-wrap: wrap;\n  padding: 15px;\n}\n\n.error-msg {\n  font-size: 13px;\n  color: red;\n}\n\n.flex-containers {\n  display: flex;\n  gap: 10px;\n}\n\n.space-items {\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.recording {\n  margin-left: 4px !important;\n}\n\n.not-clickable {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.not-clickable svg {\n  cursor: not-allowed !important;\n}\n\n.duration-container {\n  position: relative;\n  min-width: fit-content;\n}\n\n.warning {\n  position: absolute;\n  white-space: nowrap;\n  font-size: 14px;\n  color: red;\n  top: 15px;\n  animation: flashing 1s infinite;\n}\n\n.process-icon {\n  cursor: pointer;\n}\n\n/******************************************* Range Input *********************************************/\n.timeline-slider[type=range] {\n  -webkit-appearance: none;\n  background-color: inherit;\n  width: 100%;\n}\n\n.timeline-slider[type=range]::-webkit-slider-runnable-track {\n  height: 5px;\n  -webkit-appearance: none;\n  background-color: inherit;\n  border-top: 1px solid #696969;\n  cursor: pointer;\n}\n\n.timeline-slider[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-top: -5.5px;\n  background-color: #d04a02 !important;\n}\n\n.timeline-slider[type=range]::-moz-range-progress {\n  background-color: #d04a02 !important;\n}\n\n.timeline-slider[type=range]::-moz-range-track {\n  background-color: #d04a02 !important;\n}\n\n/******************************************* Recording Slider *********************************************/\n.record-process {\n  width: 300px;\n  max-width: 100%;\n  height: 2px;\n  border-top: 2px dashed #000;\n  animation: flashing 1s infinite;\n}\n\n@keyframes flashing {\n  from {\n    opacity: 0.3;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/******************************************* Loading Animation *********************************************/\n.loading-lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n}\n\n.loading-lds-ellipsis div {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #000;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.loading-lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n\n.loading-lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n\n.loading-lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n\n.loading-lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n/******************************************** Recording Animation ********************************************/\n.recording-lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n\n.recording-lds-ripple div {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #000;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.recording-lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n  5% {\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    width: 40px;\n    height: 40px;\n    opacity: 0;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/VoiceRecorderWidget.editorPreview.jsx":
/*!***************************************************!*\
  !*** ./src/VoiceRecorderWidget.editorPreview.jsx ***!
  \***************************************************/
/*! exports provided: preview, getPreviewCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preview", function() { return preview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviewCss", function() { return getPreviewCss; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var preview = /*#__PURE__*/function (_Component) {
  _inherits(preview, _Component);
  var _super = _createSuper(preview);
  function preview() {
    _classCallCheck(this, preview);
    return _super.apply(this, arguments);
  }
  _createClass(preview, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null);
    }
  }]);
  return preview;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
function getPreviewCss() {
  return __webpack_require__(/*! ./ui/VoiceRecorderWidget.css */ "./src/ui/VoiceRecorderWidget.css");
}

/***/ }),

/***/ "./src/ui/VoiceRecorderWidget.css":
/*!****************************************!*\
  !*** ./src/ui/VoiceRecorderWidget.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./VoiceRecorderWidget.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/VoiceRecorderWidget.css");

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1ZvaWNlUmVjb3JkZXJXaWRnZXQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZvaWNlUmVjb3JkZXJXaWRnZXQuZWRpdG9yUHJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1ZvaWNlUmVjb3JkZXJXaWRnZXQuY3NzP2M4ZDAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJwcmV2aWV3IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJldmlld0NzcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEw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LDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGaUQ7QUFFMUMsSUFBTUEsT0FBTywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLE9BQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixPQUFBO0VBQUEsU0FBQUEsUUFBQTtJQUFBSyxlQUFBLE9BQUFMLE9BQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsT0FBQTtJQUFBUyxHQUFBO0lBQUFDLEtBQUEsRUFDaEIsU0FBQUMsT0FBQSxFQUFTO01BQ0wsb0JBQU9DLDJEQUFBLFlBQVUsQ0FBQztJQUN0QjtFQUFDO0VBQUEsT0FBQVosT0FBQTtBQUFBLEVBSHdCYSwrQ0FBUztBQU0vQixTQUFTQyxhQUFhQSxDQUFBLEVBQUc7RUFDNUIsT0FBT0MsbUJBQU8sQ0FBQyxzRUFBOEIsQ0FBQztBQUNsRCxDOzs7Ozs7Ozs7Ozs7QUNUQSxxQkFBcUIsbUJBQU8sQ0FBQyxzT0FBa0g7O0FBRS9JO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBLGtDIiwiZmlsZSI6IndpZGdldHMvVm9pY2VSZWNvcmRlcldpZGdldC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvVm9pY2VSZWNvcmRlcldpZGdldC5lZGl0b3JQcmV2aWV3LmpzeFwiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb21tb24gY2xhc3NlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxucCB7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucC0xNSB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYXgtd2lkdGgtMTAwIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNlbnRlci1jb250ZW50IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbmQtaXRlbXMge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNtLXRleHQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBNYWluIHN0eWxlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4IDYwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnNwYWNlLWl0ZW1zIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnJlY29yZGluZyB7XFxuICBtYXJnaW4tbGVmdDogNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ub3QtY2xpY2thYmxlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5ub3QtY2xpY2thYmxlIHN2ZyB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kdXJhdGlvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZWQ7XFxuICB0b3A6IDE1cHg7XFxuICBhbmltYXRpb246IGZsYXNoaW5nIDFzIGluZmluaXRlO1xcbn1cXG5cXG4ucHJvY2Vzcy1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUmFuZ2UgSW5wdXQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi50aW1lbGluZS1zbGlkZXJbdHlwZT1yYW5nZV0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGltZWxpbmUtc2xpZGVyW3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICBoZWlnaHQ6IDVweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzY5Njk2OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lLXNsaWRlclt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtNS41cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA0YTAyICFpbXBvcnRhbnQ7XFxufVxcblxcbi50aW1lbGluZS1zbGlkZXJbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwNGEwMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGltZWxpbmUtc2xpZGVyW3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMDRhMDIgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUmVjb3JkaW5nIFNsaWRlciAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJlY29yZC1wcm9jZXNzIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjMDAwO1xcbiAgYW5pbWF0aW9uOiBmbGFzaGluZyAxcyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaGluZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBMb2FkaW5nIEFuaW1hdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmxvYWRpbmctbGRzLWVsbGlwc2lzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5sb2FkaW5nLWxkcy1lbGxpcHNpcyBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcXG59XFxuXFxuLmxvYWRpbmctbGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgbGVmdDogOHB4O1xcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XFxufVxcblxcbi5sb2FkaW5nLWxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGxlZnQ6IDhweDtcXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xcbn1cXG5cXG4ubG9hZGluZy1sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgzKSB7XFxuICBsZWZ0OiAzMnB4O1xcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XFxufVxcblxcbi5sb2FkaW5nLWxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIGxlZnQ6IDU2cHg7XFxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xcbiAgfVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogUmVjb3JkaW5nIEFuaW1hdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmVjb3JkaW5nLWxkcy1yaXBwbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5yZWNvcmRpbmctbGRzLXJpcHBsZSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDEuNXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLnJlY29yZGluZy1sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXG59XFxuXFxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aWV3Q3NzKCkge1xuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9Wb2ljZVJlY29yZGVyV2lkZ2V0LmNzc1wiKTtcbn1cbiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVm9pY2VSZWNvcmRlcldpZGdldC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuX19lc01vZHVsZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmRlZmF1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==