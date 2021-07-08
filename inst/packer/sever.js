(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Shiny"));
	else if(typeof define === 'function' && define.amd)
		define(["Shiny"], factory);
	else if(typeof exports === 'object')
		exports["sever"] = factory(require("Shiny"));
	else
		root["sever"] = factory(root["Shiny"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_shiny__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/exts/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Hide Button */\n#ss-connect-dialog{\n  display: none !important;\n}\n\n#shiny-disconnected-overlay{\n  cursor: not-allowed !important;\n  z-index: 999999!;\n  background-size: cover;\n}\n\n@keyframes expand {\n  from {\n    transform: scale(.5);\n  }\n}\n\n/* Custom */\n.cleave-overlay{\n  z-index:999;\n  color: black;\n}\n\n.staticParent{\n  position: static;\n}\n\n", "",{"version":3,"sources":["webpack://./srcjs/exts/style.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF;;AAEA,WAAW;AACX;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["/* Hide Button */\n#ss-connect-dialog{\n  display: none !important;\n}\n\n#shiny-disconnected-overlay{\n  cursor: not-allowed !important;\n  z-index: 999999!;\n  background-size: cover;\n}\n\n@keyframes expand {\n  from {\n    transform: scale(.5);\n  }\n}\n\n/* Custom */\n.cleave-overlay{\n  z-index:999;\n  color: black;\n}\n\n.staticParent{\n  position: static;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./srcjs/exts/style.css":
/*!******************************!*\
  !*** ./srcjs/exts/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./srcjs/exts/cleave.js":
/*!******************************!*\
  !*** ./srcjs/exts/cleave.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleave": () => (/* binding */ cleave)
/* harmony export */ });
// compute offset position of waiter overlay
const getOffset = (element) => {
  let elementPosition = {};

  let width = element.offsetWidth;
  let height = element.offsetHeight;

  if(height < 20)
    height = 20;

  if(width < 20)
    width = 20;

  //set width and height
  // -6 pixels to keep margin between plot if stacked up/side by side
  elementPosition.width = width;
  elementPosition.height = height;

  //calculate element top and left
  let _x = element.offsetLeft;
  let _y = element.offsetTop;
  if(isNaN(_x))
    _x = 0;
  if(isNaN(_y))
    _y = 0;
  
  //set top and left
  //use 3 margin (6/2)
  elementPosition.top = _y;
  elementPosition.left = _x;

  return elementPosition;
}

// elements to hide on recomputed
var waiter_to_hide = [];

// show waiter overlay
const cleave = (
	id, 
	html, 
	color, 
	bg_color, 
	duration, 
	center_vertical, 
	center_horizontal
) => {
  // declare
  let dom;
  let exists = false;
  let to_hide = false;

  // get parent
  dom = document.getElementById(id);
  if(dom == undefined){
    console.log("Cannot find", id);
    return ;
  }

  // if(dom.offsetHeight < 10)
  //   return ;
  
  // allow missing for testing
  to_hide = to_hide || false;

  // add to array
  if(to_hide)
    waiter_to_hide.push(id);

  let el = getOffset(dom); // get dimensions
  
  // force static if position relative
  // otherwise overlay is completely off
  let pos = window.getComputedStyle(dom, null).position;
  if(pos == 'relative')
    dom.className += ' staticParent';

  // check if overlay exists
  dom.childNodes.forEach(function(el){
    if(el.className === 'cleave-overlay')
      exists = true;
  });

  if(exists === true){
    console.log("cleave on", id, "already exists");
    return;
  }

  // create overlay
  let overlay = document.createElement("DIV");
  // create overlay content
  let overlay_content = document.createElement("DIV");
  // insert html
  overlay_content.innerHTML = html;
  overlay_content.classList.add("cleave-overlay-content");

  // some elements are too small in height
  if(center_vertical && el.height > 50)
    overlay_content.style.paddingTop = (el.height / 2) - 10 + 'px';

  if(center_horizontal)
    overlay_content.style.textAlign = "center";
  

  // add styles
  overlay.style.height = el.height + 'px';
  overlay.style.width = el.width + 'px';
  overlay.style.top = el.top + 'px';
  overlay.style.left = el.left + 'px';
  overlay.style.color = color;
  overlay.style.backgroundColor = bg_color;
  overlay.style.position = "absolute";
  overlay.style.zIndex = 999;
  overlay.style.animation = "expand " + duration + "s ease-in-out";
  overlay.classList.add("cleave-overlay");

  // append overlay content in overlay
  overlay.appendChild(overlay_content);

  // append overlay to dom
  dom.innerHTML = '';
  dom.appendChild(overlay);
  
}


/***/ }),

/***/ "./srcjs/exts/rupture.js":
/*!*******************************!*\
  !*** ./srcjs/exts/rupture.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "watchActivity": () => (/* binding */ watchActivity),
/* harmony export */   "unrupt": () => (/* binding */ unrupt)
/* harmony export */ });
const watchActivity = (opts) => {
  const logout = () => {
    rupture(opts);
  }
  
  const resetTimer = () => {
    clearTimeout(t);
    t = setTimeout(logout, opts.ms);  // time is in milliseconds (1000 is 1 second)
  }

  var t = setTimeout(logout, opts.ms);
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions
}

const rupture = (opts) => {
  // declare
  var classes = "severed",
    dv = document.createElement("DIV"),
    bg = document.createElement("DIV"),
    parent = document.createElement("DIV");
  
  // insert content
  dv.innerHTML = opts.content;

  // bg
  bg.id = "ruptured";
  bg.style.position = 'absolute';
  bg.style.top = '0px';
  bg.style.width = window.innerWidth + 'px';
  bg.style.height = window.innerHeight + 'px';
  bg.style.backgroundColor = opts.bg_color;
  bg.style.opacity = opts.opacity;
  bg.style.zIndex = 99999998;
  if(opts.bg_image)
    bg.style.backgroundImage = "url(" + opts.bg_image + ")";

  // change classes if is box
  if(opts.box){
    classes += " panel";
    dv.className = "panel-body";
  }

  parent.className = classes;
  parent.style.zIndex = 99999999;
  parent.style.textAlign = "center";
  parent.style.position = "fixed";
  parent.style.top = "50%";
  parent.style.left = "50%";
  parent.style.transform = "translate(-50%, -50%)";
  parent.style.color = opts.color;

  parent.appendChild(dv);

  document.body.appendChild(bg);
  document.body.appendChild(parent);
}

const unrupt = () => {
  removeRupture();
  if(!Shiny.shinyapp.isConnected())
    Shiny.shinyapp.reconnect();
}

const removeRupture = () => {
  let ruptured = document.getElementById('ruptured');
  ruptured.remove();
  let severed = document.getElementsByClassName('severed');
  for (let s of severed) {
    s.remove();
  }
}

/***/ }),

/***/ "./srcjs/exts/sever-foo.js":
/*!*********************************!*\
  !*** ./srcjs/exts/sever-foo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSever": () => (/* binding */ handleSever)
/* harmony export */ });
const changeDefault = (opts) => {
  // set css
  let css,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
  
  let bgColor = opts.bg_color;

  if(bgColor == undefined || bgColor == null)
    bgColor = "none";

  css = "#shiny-disconnected-overlay{background-color: " + bgColor + "; opacity: " + opts.opacity + "; background-size: cover; background-image: url('" + opts.bg_image + "')}";

  head.appendChild(style);

  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

const sever = (opts) => {
  // declare
  var classes = "severed";
  var dv = document.createElement("DIV"),
      parent = document.createElement("DIV");
  
  // insert content
  dv.innerHTML = opts.content;

  // change classes if is box
  if(opts.box){
    classes += " panel";
    dv.className = "panel-body";
  }

  parent.className = classes;
  parent.style.zIndex = 99999999;
  parent.style.textAlign = "center";
  parent.style.position = "fixed";
  parent.style.top = "50%";
  parent.style.left = "50%";
  parent.style.transform = "translate(-50%, -50%)";
  parent.style.color = opts.color;

  parent.appendChild(dv);

  document.body.appendChild(parent);
}

const removeSever = () => {
  let severed = document.getElementsByClassName("severed");
  for (let s of severed) {
    s.remove();
  }
}

const handleSever = (opts) => {
	removeSever();
	changeDefault(opts);
	sever(opts);
}

/***/ }),

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_shiny__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./srcjs/exts/sever.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unrupt": () => (/* reexport safe */ _rupture__WEBPACK_IMPORTED_MODULE_2__.unrupt)
/* harmony export */ });
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sever_foo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sever-foo */ "./srcjs/exts/sever-foo.js");
/* harmony import */ var _rupture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rupture */ "./srcjs/exts/rupture.js");
/* harmony import */ var _cleave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleave */ "./srcjs/exts/cleave.js");





__webpack_require__(/*! ./style.css */ "./srcjs/exts/style.css");

Shiny.addCustomMessageHandler('sever-it', function(opts) {

  $(document).on('shiny:disconnected', function(event) {
    (0,_sever_foo__WEBPACK_IMPORTED_MODULE_1__.handleSever)(opts);
  });

});

Shiny.addCustomMessageHandler('rupture-it', function(opts) {
  (0,_rupture__WEBPACK_IMPORTED_MODULE_2__.watchActivity)(opts);
});

Shiny.addCustomMessageHandler('cleave-it', function(opts) {

  $(document).on('shiny:error', function(event) {

    if(!opts.silent_errors && event.error.type != null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});

// chisel
Shiny.addCustomMessageHandler('chisel-it', function(opts) {

  $(document).on('shiny:error', function(event) {
    console.log(event);

    if(event.error.type == null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          (0,_cleave__WEBPACK_IMPORTED_MODULE_3__.cleave)(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXZlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9zcmNqcy9leHRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zZXZlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9zZXZlci8uL3NyY2pzL2V4dHMvc3R5bGUuY3NzPzhkNGQiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zZXZlci8uL3NyY2pzL2V4dHMvY2xlYXZlLmpzIiwid2VicGFjazovL3NldmVyLy4vc3JjanMvZXh0cy9ydXB0dXJlLmpzIiwid2VicGFjazovL3NldmVyLy4vc3JjanMvZXh0cy9zZXZlci1mb28uanMiLCJ3ZWJwYWNrOi8vc2V2ZXIvZXh0ZXJuYWwgXCJTaGlueVwiIiwid2VicGFjazovL3NldmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NldmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXZlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V2ZXIvLi9zcmNqcy9leHRzL3NldmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0ZBQWdGLDZCQUE2QixHQUFHLGdDQUFnQyxtQ0FBbUMscUJBQXFCLDJCQUEyQixHQUFHLHVCQUF1QixVQUFVLDJCQUEyQixLQUFLLEdBQUcsa0NBQWtDLGdCQUFnQixpQkFBaUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsV0FBVyw4RkFBOEYsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGdFQUFnRSw2QkFBNkIsR0FBRyxnQ0FBZ0MsbUNBQW1DLHFCQUFxQiwyQkFBMkIsR0FBRyx1QkFBdUIsVUFBVSwyQkFBMkIsS0FBSyxHQUFHLGtDQUFrQyxnQkFBZ0IsaUJBQWlCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLHVCQUF1QjtBQUMza0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtB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O1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUMyQjtBQUNRO0FBQ2hCOztBQUVsQyxtQkFBTyxDQUFDLDJDQUFhOztBQUVyQjs7QUFFQTtBQUNBLElBQUksdURBQVc7QUFDZixHQUFHOztBQUVILENBQUM7O0FBRUQ7QUFDQSxFQUFFLHVEQUFhO0FBQ2YsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU0sK0NBQU07O0FBRVosS0FBSyxPQUFPO0FBQ1o7O0FBRUE7QUFDQSxVQUFVLCtDQUFNO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU0sK0NBQU07O0FBRVosS0FBSyxPQUFPO0FBQ1o7O0FBRUE7QUFDQSxVQUFVLCtDQUFNO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSCxDQUFDIiwiZmlsZSI6InNldmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiU2hpbnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiU2hpbnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2V2ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJTaGlueVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wic2V2ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJTaGlueVwiXSk7XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3NoaW55X18pIHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEhpZGUgQnV0dG9uICovXFxuI3NzLWNvbm5lY3QtZGlhbG9ne1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jc2hpbnktZGlzY29ubmVjdGVkLW92ZXJsYXl7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiA5OTk5OTkhO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBleHBhbmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xcbiAgfVxcbn1cXG5cXG4vKiBDdXN0b20gKi9cXG4uY2xlYXZlLW92ZXJsYXl7XFxuICB6LWluZGV4Ojk5OTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXRpY1BhcmVudHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyY2pzL2V4dHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhpZGUgQnV0dG9uICovXFxuI3NzLWNvbm5lY3QtZGlhbG9ne1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jc2hpbnktZGlzY29ubmVjdGVkLW92ZXJsYXl7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XFxuICB6LWluZGV4OiA5OTk5OTkhO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBleHBhbmQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xcbiAgfVxcbn1cXG5cXG4vKiBDdXN0b20gKi9cXG4uY2xlYXZlLW92ZXJsYXl7XFxuICB6LWluZGV4Ojk5OTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXRpY1BhcmVudHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIi8vIGNvbXB1dGUgb2Zmc2V0IHBvc2l0aW9uIG9mIHdhaXRlciBvdmVybGF5XG5jb25zdCBnZXRPZmZzZXQgPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgZWxlbWVudFBvc2l0aW9uID0ge307XG5cbiAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmKGhlaWdodCA8IDIwKVxuICAgIGhlaWdodCA9IDIwO1xuXG4gIGlmKHdpZHRoIDwgMjApXG4gICAgd2lkdGggPSAyMDtcblxuICAvL3NldCB3aWR0aCBhbmQgaGVpZ2h0XG4gIC8vIC02IHBpeGVscyB0byBrZWVwIG1hcmdpbiBiZXR3ZWVuIHBsb3QgaWYgc3RhY2tlZCB1cC9zaWRlIGJ5IHNpZGVcbiAgZWxlbWVudFBvc2l0aW9uLndpZHRoID0gd2lkdGg7XG4gIGVsZW1lbnRQb3NpdGlvbi5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgLy9jYWxjdWxhdGUgZWxlbWVudCB0b3AgYW5kIGxlZnRcbiAgbGV0IF94ID0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICBsZXQgX3kgPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgaWYoaXNOYU4oX3gpKVxuICAgIF94ID0gMDtcbiAgaWYoaXNOYU4oX3kpKVxuICAgIF95ID0gMDtcbiAgXG4gIC8vc2V0IHRvcCBhbmQgbGVmdFxuICAvL3VzZSAzIG1hcmdpbiAoNi8yKVxuICBlbGVtZW50UG9zaXRpb24udG9wID0gX3k7XG4gIGVsZW1lbnRQb3NpdGlvbi5sZWZ0ID0gX3g7XG5cbiAgcmV0dXJuIGVsZW1lbnRQb3NpdGlvbjtcbn1cblxuLy8gZWxlbWVudHMgdG8gaGlkZSBvbiByZWNvbXB1dGVkXG52YXIgd2FpdGVyX3RvX2hpZGUgPSBbXTtcblxuLy8gc2hvdyB3YWl0ZXIgb3ZlcmxheVxuZXhwb3J0IGNvbnN0IGNsZWF2ZSA9IChcblx0aWQsIFxuXHRodG1sLCBcblx0Y29sb3IsIFxuXHRiZ19jb2xvciwgXG5cdGR1cmF0aW9uLCBcblx0Y2VudGVyX3ZlcnRpY2FsLCBcblx0Y2VudGVyX2hvcml6b250YWxcbikgPT4ge1xuICAvLyBkZWNsYXJlXG4gIGxldCBkb207XG4gIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgbGV0IHRvX2hpZGUgPSBmYWxzZTtcblxuICAvLyBnZXQgcGFyZW50XG4gIGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaWYoZG9tID09IHVuZGVmaW5lZCl7XG4gICAgY29uc29sZS5sb2coXCJDYW5ub3QgZmluZFwiLCBpZCk7XG4gICAgcmV0dXJuIDtcbiAgfVxuXG4gIC8vIGlmKGRvbS5vZmZzZXRIZWlnaHQgPCAxMClcbiAgLy8gICByZXR1cm4gO1xuICBcbiAgLy8gYWxsb3cgbWlzc2luZyBmb3IgdGVzdGluZ1xuICB0b19oaWRlID0gdG9faGlkZSB8fCBmYWxzZTtcblxuICAvLyBhZGQgdG8gYXJyYXlcbiAgaWYodG9faGlkZSlcbiAgICB3YWl0ZXJfdG9faGlkZS5wdXNoKGlkKTtcblxuICBsZXQgZWwgPSBnZXRPZmZzZXQoZG9tKTsgLy8gZ2V0IGRpbWVuc2lvbnNcbiAgXG4gIC8vIGZvcmNlIHN0YXRpYyBpZiBwb3NpdGlvbiByZWxhdGl2ZVxuICAvLyBvdGhlcndpc2Ugb3ZlcmxheSBpcyBjb21wbGV0ZWx5IG9mZlxuICBsZXQgcG9zID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tLCBudWxsKS5wb3NpdGlvbjtcbiAgaWYocG9zID09ICdyZWxhdGl2ZScpXG4gICAgZG9tLmNsYXNzTmFtZSArPSAnIHN0YXRpY1BhcmVudCc7XG5cbiAgLy8gY2hlY2sgaWYgb3ZlcmxheSBleGlzdHNcbiAgZG9tLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgaWYoZWwuY2xhc3NOYW1lID09PSAnY2xlYXZlLW92ZXJsYXknKVxuICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYoZXhpc3RzID09PSB0cnVlKXtcbiAgICBjb25zb2xlLmxvZyhcImNsZWF2ZSBvblwiLCBpZCwgXCJhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjcmVhdGUgb3ZlcmxheVxuICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gIC8vIGNyZWF0ZSBvdmVybGF5IGNvbnRlbnRcbiAgbGV0IG92ZXJsYXlfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gIC8vIGluc2VydCBodG1sXG4gIG92ZXJsYXlfY29udGVudC5pbm5lckhUTUwgPSBodG1sO1xuICBvdmVybGF5X2NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNsZWF2ZS1vdmVybGF5LWNvbnRlbnRcIik7XG5cbiAgLy8gc29tZSBlbGVtZW50cyBhcmUgdG9vIHNtYWxsIGluIGhlaWdodFxuICBpZihjZW50ZXJfdmVydGljYWwgJiYgZWwuaGVpZ2h0ID4gNTApXG4gICAgb3ZlcmxheV9jb250ZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAoZWwuaGVpZ2h0IC8gMikgLSAxMCArICdweCc7XG5cbiAgaWYoY2VudGVyX2hvcml6b250YWwpXG4gICAgb3ZlcmxheV9jb250ZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIFxuXG4gIC8vIGFkZCBzdHlsZXNcbiAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBlbC5oZWlnaHQgKyAncHgnO1xuICBvdmVybGF5LnN0eWxlLndpZHRoID0gZWwud2lkdGggKyAncHgnO1xuICBvdmVybGF5LnN0eWxlLnRvcCA9IGVsLnRvcCArICdweCc7XG4gIG92ZXJsYXkuc3R5bGUubGVmdCA9IGVsLmxlZnQgKyAncHgnO1xuICBvdmVybGF5LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmdfY29sb3I7XG4gIG92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gOTk5O1xuICBvdmVybGF5LnN0eWxlLmFuaW1hdGlvbiA9IFwiZXhwYW5kIFwiICsgZHVyYXRpb24gKyBcInMgZWFzZS1pbi1vdXRcIjtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiY2xlYXZlLW92ZXJsYXlcIik7XG5cbiAgLy8gYXBwZW5kIG92ZXJsYXkgY29udGVudCBpbiBvdmVybGF5XG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQob3ZlcmxheV9jb250ZW50KTtcblxuICAvLyBhcHBlbmQgb3ZlcmxheSB0byBkb21cbiAgZG9tLmlubmVySFRNTCA9ICcnO1xuICBkb20uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIFxufVxuIiwiZXhwb3J0IGNvbnN0IHdhdGNoQWN0aXZpdHkgPSAob3B0cykgPT4ge1xuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgcnVwdHVyZShvcHRzKTtcbiAgfVxuICBcbiAgY29uc3QgcmVzZXRUaW1lciA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgdCA9IHNldFRpbWVvdXQobG9nb3V0LCBvcHRzLm1zKTsgIC8vIHRpbWUgaXMgaW4gbWlsbGlzZWNvbmRzICgxMDAwIGlzIDEgc2Vjb25kKVxuICB9XG5cbiAgdmFyIHQgPSBzZXRUaW1lb3V0KGxvZ291dCwgb3B0cy5tcyk7XG4gIHdpbmRvdy5vbm1vdXNlbW92ZSA9IHJlc2V0VGltZXI7IC8vIGNhdGNoZXMgbW91c2UgbW92ZW1lbnRzXG4gIHdpbmRvdy5vbm1vdXNlZG93biA9IHJlc2V0VGltZXI7IC8vIGNhdGNoZXMgbW91c2UgbW92ZW1lbnRzXG4gIHdpbmRvdy5vbmNsaWNrID0gcmVzZXRUaW1lcjsgICAgIC8vIGNhdGNoZXMgbW91c2UgY2xpY2tzXG4gIHdpbmRvdy5vbnNjcm9sbCA9IHJlc2V0VGltZXI7ICAgIC8vIGNhdGNoZXMgc2Nyb2xsaW5nXG4gIHdpbmRvdy5vbmtleXByZXNzID0gcmVzZXRUaW1lcjsgIC8vY2F0Y2hlcyBrZXlib2FyZCBhY3Rpb25zXG59XG5cbmNvbnN0IHJ1cHR1cmUgPSAob3B0cykgPT4ge1xuICAvLyBkZWNsYXJlXG4gIHZhciBjbGFzc2VzID0gXCJzZXZlcmVkXCIsXG4gICAgZHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpLFxuICAgIGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKSxcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICBcbiAgLy8gaW5zZXJ0IGNvbnRlbnRcbiAgZHYuaW5uZXJIVE1MID0gb3B0cy5jb250ZW50O1xuXG4gIC8vIGJnXG4gIGJnLmlkID0gXCJydXB0dXJlZFwiO1xuICBiZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGJnLnN0eWxlLnRvcCA9ICcwcHgnO1xuICBiZy5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4JztcbiAgYmcuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgJ3B4JztcbiAgYmcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0cy5iZ19jb2xvcjtcbiAgYmcuc3R5bGUub3BhY2l0eSA9IG9wdHMub3BhY2l0eTtcbiAgYmcuc3R5bGUuekluZGV4ID0gOTk5OTk5OTg7XG4gIGlmKG9wdHMuYmdfaW1hZ2UpXG4gICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBvcHRzLmJnX2ltYWdlICsgXCIpXCI7XG5cbiAgLy8gY2hhbmdlIGNsYXNzZXMgaWYgaXMgYm94XG4gIGlmKG9wdHMuYm94KXtcbiAgICBjbGFzc2VzICs9IFwiIHBhbmVsXCI7XG4gICAgZHYuY2xhc3NOYW1lID0gXCJwYW5lbC1ib2R5XCI7XG4gIH1cblxuICBwYXJlbnQuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgcGFyZW50LnN0eWxlLnpJbmRleCA9IDk5OTk5OTk5O1xuICBwYXJlbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgcGFyZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICBwYXJlbnQuc3R5bGUudG9wID0gXCI1MCVcIjtcbiAgcGFyZW50LnN0eWxlLmxlZnQgPSBcIjUwJVwiO1xuICBwYXJlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIjtcbiAgcGFyZW50LnN0eWxlLmNvbG9yID0gb3B0cy5jb2xvcjtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHYpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmcpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XG59XG5cbmV4cG9ydCBjb25zdCB1bnJ1cHQgPSAoKSA9PiB7XG4gIHJlbW92ZVJ1cHR1cmUoKTtcbiAgaWYoIVNoaW55LnNoaW55YXBwLmlzQ29ubmVjdGVkKCkpXG4gICAgU2hpbnkuc2hpbnlhcHAucmVjb25uZWN0KCk7XG59XG5cbmNvbnN0IHJlbW92ZVJ1cHR1cmUgPSAoKSA9PiB7XG4gIGxldCBydXB0dXJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdydXB0dXJlZCcpO1xuICBydXB0dXJlZC5yZW1vdmUoKTtcbiAgbGV0IHNldmVyZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXZlcmVkJyk7XG4gIGZvciAobGV0IHMgb2Ygc2V2ZXJlZCkge1xuICAgIHMucmVtb3ZlKCk7XG4gIH1cbn0iLCJjb25zdCBjaGFuZ2VEZWZhdWx0ID0gKG9wdHMpID0+IHtcbiAgLy8gc2V0IGNzc1xuICBsZXQgY3NzLFxuICAgIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBcbiAgbGV0IGJnQ29sb3IgPSBvcHRzLmJnX2NvbG9yO1xuXG4gIGlmKGJnQ29sb3IgPT0gdW5kZWZpbmVkIHx8IGJnQ29sb3IgPT0gbnVsbClcbiAgICBiZ0NvbG9yID0gXCJub25lXCI7XG5cbiAgY3NzID0gXCIjc2hpbnktZGlzY29ubmVjdGVkLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjogXCIgKyBiZ0NvbG9yICsgXCI7IG9wYWNpdHk6IFwiICsgb3B0cy5vcGFjaXR5ICsgXCI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnXCIgKyBvcHRzLmJnX2ltYWdlICsgXCInKX1cIjtcblxuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCl7XG4gICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3IgSUU4IGFuZCBiZWxvdy5cbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuY29uc3Qgc2V2ZXIgPSAob3B0cykgPT4ge1xuICAvLyBkZWNsYXJlXG4gIHZhciBjbGFzc2VzID0gXCJzZXZlcmVkXCI7XG4gIHZhciBkdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIiksXG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuICBcbiAgLy8gaW5zZXJ0IGNvbnRlbnRcbiAgZHYuaW5uZXJIVE1MID0gb3B0cy5jb250ZW50O1xuXG4gIC8vIGNoYW5nZSBjbGFzc2VzIGlmIGlzIGJveFxuICBpZihvcHRzLmJveCl7XG4gICAgY2xhc3NlcyArPSBcIiBwYW5lbFwiO1xuICAgIGR2LmNsYXNzTmFtZSA9IFwicGFuZWwtYm9keVwiO1xuICB9XG5cbiAgcGFyZW50LmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gIHBhcmVudC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTtcbiAgcGFyZW50LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgcGFyZW50LnN0eWxlLnRvcCA9IFwiNTAlXCI7XG4gIHBhcmVudC5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgcGFyZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCI7XG4gIHBhcmVudC5zdHlsZS5jb2xvciA9IG9wdHMuY29sb3I7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGR2KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmVudCk7XG59XG5cbmNvbnN0IHJlbW92ZVNldmVyID0gKCkgPT4ge1xuICBsZXQgc2V2ZXJlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZXZlcmVkXCIpO1xuICBmb3IgKGxldCBzIG9mIHNldmVyZWQpIHtcbiAgICBzLnJlbW92ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVTZXZlciA9IChvcHRzKSA9PiB7XG5cdHJlbW92ZVNldmVyKCk7XG5cdGNoYW5nZURlZmF1bHQob3B0cyk7XG5cdHNldmVyKG9wdHMpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zaGlueV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ3NoaW55JztcbmltcG9ydCB7IGhhbmRsZVNldmVyIH0gZnJvbSAnLi9zZXZlci1mb28nO1xuaW1wb3J0IHsgd2F0Y2hBY3Rpdml0eSwgdW5ydXB0IH0gZnJvbSAnLi9ydXB0dXJlJztcbmltcG9ydCB7IGNsZWF2ZSB9IGZyb20gJy4vY2xlYXZlJztcblxucmVxdWlyZSgnLi9zdHlsZS5jc3MnKTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoJ3NldmVyLWl0JywgZnVuY3Rpb24ob3B0cykge1xuXG4gICQoZG9jdW1lbnQpLm9uKCdzaGlueTpkaXNjb25uZWN0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGhhbmRsZVNldmVyKG9wdHMpO1xuICB9KTtcblxufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdydXB0dXJlLWl0JywgZnVuY3Rpb24ob3B0cykge1xuICB3YXRjaEFjdGl2aXR5KG9wdHMpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdjbGVhdmUtaXQnLCBmdW5jdGlvbihvcHRzKSB7XG5cbiAgJChkb2N1bWVudCkub24oJ3NoaW55OmVycm9yJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgIGlmKCFvcHRzLnNpbGVudF9lcnJvcnMgJiYgZXZlbnQuZXJyb3IudHlwZSAhPSBudWxsKVxuICAgICAgcmV0dXJuO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmKG9wdHMuaHRtbCA9PSBudWxsKVxuICAgICAgb3B0cy5odG1sID0gJzxzcGFuPicgKyBldmVudC5lcnJvci5tZXNzYWdlICsgJzwvc3Bhbj4nO1xuXG4gICAgaWYob3B0cy5iZ19jb2xvciA9PSBudWxsKVxuICAgICAgb3B0cy5iZ19jb2xvciA9ICdyZ2JhKDAsMCwwLDApJztcblxuICAgIC8vIGFwcGx5IHRvIGFsbCBcbiAgICBpZihvcHRzLmlkcyA9PSBudWxsKXtcblxuICAgICAgY2xlYXZlKGV2ZW50Lm5hbWUsIG9wdHMuaHRtbCwgb3B0cy5jb2xvciwgb3B0cy5iZ19jb2xvciwgb3B0cy5kdXJhdGlvbiwgb3B0cy5jZW50ZXJfdmVydGljYWwsIG9wdHMuY2VudGVyX2hvcml6b250YWwpXG4gICAgXG4gICAgfSBlbHNlIHsgLy8gYXBwbHkgdG8gcmVsZXZhbnQgaWRzKSA9PiB7XG4gICAgICBvcHRzLmlkcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblxuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBjbGVhdmUoZXZlbnQubmFtZSwgb3B0cy5odG1sLCBvcHRzLmNvbG9yLCBvcHRzLmJnX2NvbG9yLCBvcHRzLmR1cmF0aW9uLCBvcHRzLmNlbnRlcl92ZXJ0aWNhbCwgb3B0cy5jZW50ZXJfaG9yaXpvbnRhbClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignc2hpbnk6dmFsdWUgc2hpbnk6b3V0cHV0aW52YWxpZGF0ZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgaWYob3B0cy5pZHMgPT0gbnVsbCl7XG4gICAgICAkKCcuY2xlYXZlLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgeyAvLyBhcHBseSB0byByZWxldmFudCBpZHMpID0+IHtcbiAgICAgIG9wdHMuaWRzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAnIycgKyBldmVudC5uYW1lICsgJz4uY2xlYXZlLW92ZXJsYXknO1xuICAgICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG59KTtcblxuLy8gY2hpc2VsXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignY2hpc2VsLWl0JywgZnVuY3Rpb24ob3B0cykge1xuXG4gICQoZG9jdW1lbnQpLm9uKCdzaGlueTplcnJvcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgaWYoZXZlbnQuZXJyb3IudHlwZSA9PSBudWxsKVxuICAgICAgcmV0dXJuO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmKG9wdHMuaHRtbCA9PSBudWxsKVxuICAgICAgb3B0cy5odG1sID0gJzxzcGFuPicgKyBldmVudC5lcnJvci5tZXNzYWdlICsgJzwvc3Bhbj4nO1xuXG4gICAgaWYob3B0cy5iZ19jb2xvciA9PSBudWxsKVxuICAgICAgb3B0cy5iZ19jb2xvciA9ICdyZ2JhKDAsMCwwLDApJztcblxuICAgIC8vIGFwcGx5IHRvIGFsbCBcbiAgICBpZihvcHRzLmlkcyA9PSBudWxsKXtcblxuICAgICAgY2xlYXZlKGV2ZW50Lm5hbWUsIG9wdHMuaHRtbCwgb3B0cy5jb2xvciwgb3B0cy5iZ19jb2xvciwgb3B0cy5kdXJhdGlvbiwgb3B0cy5jZW50ZXJfdmVydGljYWwsIG9wdHMuY2VudGVyX2hvcml6b250YWwpXG4gICAgXG4gICAgfSBlbHNlIHsgLy8gYXBwbHkgdG8gcmVsZXZhbnQgaWRzKSA9PiB7XG4gICAgICBvcHRzLmlkcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblxuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBjbGVhdmUoZXZlbnQubmFtZSwgb3B0cy5odG1sLCBvcHRzLmNvbG9yLCBvcHRzLmJnX2NvbG9yLCBvcHRzLmR1cmF0aW9uLCBvcHRzLmNlbnRlcl92ZXJ0aWNhbCwgb3B0cy5jZW50ZXJfaG9yaXpvbnRhbClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignc2hpbnk6dmFsdWUgc2hpbnk6b3V0cHV0aW52YWxpZGF0ZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgaWYob3B0cy5pZHMgPT0gbnVsbCl7XG4gICAgICAkKCcuY2xlYXZlLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgeyAvLyBhcHBseSB0byByZWxldmFudCBpZHMpID0+IHtcbiAgICAgIG9wdHMuaWRzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZih2YWx1ZSA9PSBldmVudC5uYW1lKXtcbiAgICAgICAgICBsZXQgc2VsZWN0b3IgPSAnIycgKyBldmVudC5uYW1lICsgJz4uY2xlYXZlLW92ZXJsYXknO1xuICAgICAgICAgICQoc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG59KTtcblxuZXhwb3J0IHsgdW5ydXB0IH0iXSwic291cmNlUm9vdCI6IiJ9