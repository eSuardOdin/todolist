/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n}\n\n.hidden.form-container {\n    display: none;\n}\n\n\n/* \n-----------------------\n\n    BASE LAYOUT\n    \n------------------------\n*/\n\n.base-page-container{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 100px 1fr 40px;\n    height: 100vh;\n}\n\n.blur{\n    filter: blur(2px);\n}\n\n\n/* \n-----------------------\n\n    HEADER\n    \n------------------------\n*/\n\n.header{\n    grid-column: 1/3;\n    grid-row: 1/2;\n    background-color: red;\n    border: solid black 1px;\n}\n\n\n\n/* \n-----------------------\n\n    SIDEBAR\n    \n------------------------\n*/\n\n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/3;\n    background-color: antiquewhite;\n    border: solid black 1px;\n}\n\n.project-list {\n    color: gray;\n}\n\n.project-list > li {\n    cursor: pointer;\n}\n.project-list > li:hover {\n    color: black;\n    font-size: 1.1rem;\n}\n\n\n\n/* \n-----------------------\n\n    MAIN\n    \n------------------------\n*/\n\n.main{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: aqua;\n    border: solid black 1px;\n}\n\n\n/* \n-----------------------\n\n    FOOTER\n    \n------------------------\n*/\n\n.footer{\n    grid-column: 1/3;\n    grid-row: 3/4;\n    background-color: green;\n    border: solid black 1px;\n}\n\n\n\n\n\n\n/* \n-----------------------\n\n    FORM\n    \n------------------------\n*/\n\n.form-container {\nposition: fixed;\ntop: 20vh;\nleft: 20vw;\n\npadding: 20px;\nborder: solid black 4px;\nborder-radius: 5px;\n\nbackground-color: antiquewhite;\nbox-shadow: 4px 4px 5px 0px #493eaa;\n\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\ngap: 20px;\n}\n.project-form-title {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n\n\n.tasks-viewer {\n    display: flex;\n    gap: 40px;\n}\n\n.task-card-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    border: solid gray 5px;\n    width: 30vw;\n}\n.task-card-title {\n    font-size: 1.6rem;\n    font-weight: 600;\n}\n.task-card-description {\n    font-style: italic;\n    color: rgb(43, 43, 43);\n}\n.task-card-pre-footer {\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n    gap: 10px;\n}\n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;;AAGA;;;;;;CAMC;;AAED;IACI,aAAa;IACb,gCAAgC;IAChC,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;;;;;;CAMC;;AAED;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;AAC3B;;;;AAIA;;;;;;CAMC;;AAED;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;;;;AAIA;;;;;;CAMC;;AAED;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;;AAGA;;;;;;CAMC;;AAED;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,uBAAuB;AAC3B;;;;;;;AAOA;;;;;;CAMC;;AAED;AACA,eAAe;AACf,SAAS;AACT,UAAU;;AAEV,aAAa;AACb,uBAAuB;AACvB,kBAAkB;;AAElB,8BAA8B;AAC9B,mCAAmC;;AAEnC,aAAa;AACb,sBAAsB;AACtB,uBAAuB;AACvB,mBAAmB;;AAEnB,SAAS;AACT;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,0BAA0B;IAC1B,SAAS;AACb","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n}\n\n.hidden.form-container {\n    display: none;\n}\n\n\n/* \n-----------------------\n\n    BASE LAYOUT\n    \n------------------------\n*/\n\n.base-page-container{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 100px 1fr 40px;\n    height: 100vh;\n}\n\n.blur{\n    filter: blur(2px);\n}\n\n\n/* \n-----------------------\n\n    HEADER\n    \n------------------------\n*/\n\n.header{\n    grid-column: 1/3;\n    grid-row: 1/2;\n    background-color: red;\n    border: solid black 1px;\n}\n\n\n\n/* \n-----------------------\n\n    SIDEBAR\n    \n------------------------\n*/\n\n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/3;\n    background-color: antiquewhite;\n    border: solid black 1px;\n}\n\n.project-list {\n    color: gray;\n}\n\n.project-list > li {\n    cursor: pointer;\n}\n.project-list > li:hover {\n    color: black;\n    font-size: 1.1rem;\n}\n\n\n\n/* \n-----------------------\n\n    MAIN\n    \n------------------------\n*/\n\n.main{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: aqua;\n    border: solid black 1px;\n}\n\n\n/* \n-----------------------\n\n    FOOTER\n    \n------------------------\n*/\n\n.footer{\n    grid-column: 1/3;\n    grid-row: 3/4;\n    background-color: green;\n    border: solid black 1px;\n}\n\n\n\n\n\n\n/* \n-----------------------\n\n    FORM\n    \n------------------------\n*/\n\n.form-container {\nposition: fixed;\ntop: 20vh;\nleft: 20vw;\n\npadding: 20px;\nborder: solid black 4px;\nborder-radius: 5px;\n\nbackground-color: antiquewhite;\nbox-shadow: 4px 4px 5px 0px #493eaa;\n\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\ngap: 20px;\n}\n.project-form-title {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n\n\n.tasks-viewer {\n    display: flex;\n    gap: 40px;\n}\n\n.task-card-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    border: solid gray 5px;\n    width: 30vw;\n}\n.task-card-title {\n    font-size: 1.6rem;\n    font-weight: 600;\n}\n.task-card-description {\n    font-style: italic;\n    color: rgb(43, 43, 43);\n}\n.task-card-pre-footer {\n    display: flex;\n    justify-content: center;\n    align-items: space-between;\n    gap: 10px;\n}\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The project creator module
 */
const createProject = (name) => {

    // Name of the project and it's array of tasks
    const _tasks = [];
    const _name = name;
    
    // Return Project's name
    const getName = () => _name;

    // Add a task in array
    const addTask = (task) => {
        _tasks.push(task);
    };

    // Remove a task from array with it's index
    const removeTask = (index) => {
        if(_tasks.length > index) {
            _tasks.splice(index, 1);
        } else {
            console.error('Error, the task is not in this project');
        }
    };

    // Return a specific task
    const getTask = (index) => {
        if(_tasks.length > index) {
            return _tasks[index];
        } else {
            console.error(`Error : Cannot get task at index ${index}`);
        }
    }

    // Return all tasks (only for dev / debug I think)
    const getAllTasks = () => _tasks;
    return {getName, addTask, removeTask, getTask, getAllTasks};
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/classes/ProjectManager.js":
/*!***************************************!*\
  !*** ./src/classes/ProjectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createProjectMan = () => {
    const _projects = [];

    // Add a project
    const addProject = (project) => {
        _projects.push(project);
    }
    const removeProject = (index) => {
        if(_projects.length <= index) {
            console.error('Project not found');
        } else {
            _projects.slice(index, 1);
        }
    }
    const getProjects = () => _projects;

    return {
        addProject,
        removeProject,
        getProjects,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectMan);

/***/ }),

/***/ "./src/classes/Task.js":
/*!*****************************!*\
  !*** ./src/classes/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTask = (title, description, dueDate, priority, checkList, isDue = false ,isDone = false) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _checkList = checkList;
    let _isDue = isDue;  // Not sure if it belongs here
    let _isDone = isDone;

    const printTask = () => {
        console.log(`
        Title : ${_title}
        Description : ${_description}
        Due Date : ${_dueDate}
        Priority : ${_priority}
        CheckList : ${_checkList}
        isDone : ${_isDone}
        `);
    };

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getIsDue = () => _isDue;
    const getIsDone = () => _isDone;

    const getTimeLeft = () => {
        const now = new Date().getTime();
        const dueTime = _dueDate.getTime();
        const timeLeft = dueTime - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 *24));
        const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        return ({days, hours});
    }


    // Change the done status of task
    const setIsDone = () => _isDone = !_isDone;

    return {
        printTask, 
        getTimeLeft, 
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getIsDue,
        getIsDone,
        setIsDone
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./src/classes/UserInterfaceManager.js":
/*!*********************************************!*\
  !*** ./src/classes/UserInterfaceManager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createUserInterfaceManager = (body) => {
    
    
    // Instanciate base page skeleton and UI elements to manage
    const _body = body;
    const _container = document.createElement('div');
    _container.classList.add('base-page-container');
    const _header = document.createElement('div');
    _header.classList.add('header');
    const _sidebar = document.createElement('div');
    _sidebar.classList.add('sidebar');
    _sidebar.innerHTML = `
        <h2>Projects</h2>
        <ul class="project-list"></ul>
        <button class="project-form-btn">+ Project</button>`;
    const _main = document.createElement('div');
    _main.classList.add('main');
    const _footer = document.createElement('div');



    // Creating hidden elements
    const _formContainer = document.createElement('div');
        _formContainer.classList.add('form-container');
        _formContainer.classList.add('hidden');

        _formContainer.innerHTML = `
        <p class="project-form-title">Create a new project : </p>
        <form action="#">
            <label for="project-name">Project name : </label>
            <input type="text" name="project-name" id="project-name">
        </form>
        <p class="project-error"></p>
        <div>
            <button class="create-project-btn">Create Project</button>
            <button class="cancel-project-btn">Cancel</button>
        </div>
        `;


    _container.appendChild(_header);
    _container.appendChild(_sidebar);
    _container.appendChild(_main);
    _container.appendChild(_footer);
    
    _body.appendChild(_container);
    _body.appendChild(_formContainer);
    





// ----------------------------------------------------------------------

    /**
     * Create an HTML task card 
     * @param {task} task 
     * @returns a task as a card in order to append it as an html element
     */
    const createTaskCard = (task) => {
        // Card container
        const container = document.createElement('div');
        container.classList.add('task-card-container');
        // Card title
        const title = document.createElement('p');
        title.innerText = task.getTitle();
        title.classList.add('task-card-title');
        // Card description
        const description = document.createElement('p');
        description.innerText = task.getDescription();
        description.classList.add('task-card-description');
        // Pre footer
        const preFooter = document.createElement('div');
        preFooter.classList.add('task-card-pre-footer');

        const dueDate = document.createElement('p');
        dueDate.innerText = task.getDueDate().toDateString();
        const timeLeftText = document.createElement('p');
        const timeLeft = task.getTimeLeft();
        timeLeftText.innerText = `${timeLeft.days} days and ${timeLeft.hours} hours left`;
        const priority = document.createElement('p');
        priority.innerText = `Priority : ${task.getPriority()}`;
        preFooter.appendChild(dueDate);
        preFooter.appendChild(timeLeftText);
        preFooter.appendChild(priority)


        // Append all to container  
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(preFooter);
        return container;
    }



// ----------------------------------------------------------------------
    // Show all projects in sidebar

    /**
     * Refresh the side bar in order to display all projects.
     * Does not returns anything as it appends to side bar in method
     * 
     * o------------------------------------------------------o
     * |                                                      |
     * | Do I need to separate element creation and display ? |
     * |                                                      |
     * o------------------------------------------------------o
     * @param {projectManager} projects 
     */
    const refreshSidebar = (projects) => {
        const list = document.querySelector('.project-list');
        list.innerHTML = '';
        projects.forEach(project => {
            const el = document.createElement('li');
            el.classList.add('side-project');
            el.innerText = project.getName();
            list.appendChild(el);
        });
    }

// ----------------------------------------------------------------------
    /**
     * Appends an element to another
     * @param {HTMLElement} parent 
     * @param {HTMLElement} child 
     */
    const appendTo = (parent, child) => {
        parent.appendChild(child);
    }


// ----------------------------------------------------------------------
    /**
     * Clears an HTML Element of all it contains
     * @param {HTMLElement} element 
     */
    const clearElement = (element) => {
        element.innerHTML = '';
    }

// ----------------------------------------------------------------------

    const showProjectForm = () => {
        _formContainer.classList.remove('hidden');
        _container.classList.add('blur');
    }

// ----------------------------------------------------------------------

    const hideProjectForm = () => {
        _formContainer.classList.add('hidden');
        _container.classList.remove('blur');
    }

// ----------------------------------------------------------------------

    const errProjectForm = (mes) => {
        document.querySelector('.project-error').innerText = mes;
    }





// ----------------------------------------------------------------------
// GETTERS SETTERS ETC...
    const getBody = () => _body;

// Return 
    return {
        createTaskCard,
        refreshSidebar,
        clearElement,
        appendTo,
        showProjectForm,
        hideProjectForm,
        errProjectForm, 
        getBody,
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUserInterfaceManager);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project */ "./src/classes/Project.js");
/* harmony import */ var _classes_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Task */ "./src/classes/Task.js");
/* harmony import */ var _classes_UserInterfaceManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/UserInterfaceManager */ "./src/classes/UserInterfaceManager.js");
/* harmony import */ var _classes_ProjectManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/ProjectManager */ "./src/classes/ProjectManager.js");






// Only for debug
const printProjects = (projects) => {
    projects.forEach(project => {
        console.warn('-----------------------------');
        console.log(project.getName());
        console.warn('-----------------------------');

        project.getAllTasks().forEach(task => {
            task.printTask();
        })
    });
};
const UIMan = (0,_classes_UserInterfaceManager__WEBPACK_IMPORTED_MODULE_3__["default"])(document.body);

const defaultProject = (0,_classes_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('default');
const project1 = (0,_classes_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('project1');
const project2 = (0,_classes_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('project2');
const project3 = (0,_classes_Project__WEBPACK_IMPORTED_MODULE_1__["default"])('project3');
const projectsManager = (0,_classes_ProjectManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

projectsManager.addProject(defaultProject);
projectsManager.addProject(project1);
projectsManager.addProject(project2);
projectsManager.addProject(project3);

console.log(projectsManager.getProjects());
projectsManager.getProjects().forEach(proj => console.log(proj.getName()))

UIMan.refreshSidebar(projectsManager.getProjects());


// Adding the listeners

// Show the project Form
const projectFormBtn = document.querySelector('.project-form-btn');
projectFormBtn.addEventListener('click', () => {
    UIMan.showProjectForm();
    projectFormBtn.disabled = true;
});

// Create project / hide form

// NEED TO ADD ERROR / CANCEl
const createProjectBtn = document.querySelector('.create-project-btn');
createProjectBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('project-name').value;
    let isProjectExists = false;
    projectsManager.getProjects().forEach(project => {
        if(project.getName() === nameInput) isProjectExists = true;
    });

    if(isProjectExists) {
        UIMan.errProjectForm('Project already exists');
    } else {
        UIMan.hideProjectForm()
        projectFormBtn.disabled = false;
        projectsManager.addProject((0,_classes_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(nameInput));
        UIMan.refreshSidebar(projectsManager.getProjects());
    }
});



// A METTRE DANS UIMANAGER POUR PRENDRE EN COMPTE LES REFRESH
// RAJOUTER UN ATTRIBUT GLOBAL POUR ATTRIBUER DYNAMIQUEMENT LE PROJET SELECTIONNE
// Click on project in side bar
const projectsSide = document.querySelectorAll('.side-project');
projectsSide.forEach(project => {
    project.addEventListener('click', () => console.log(project.textContent));
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsNERBQWE7QUFDcEMsaUJBQWlCLDREQUFhO0FBQzlCLGlCQUFpQiw0REFBYTtBQUM5QixpQkFBaUIsNERBQWE7QUFDOUIsd0JBQXdCLG1FQUFnQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLG1DQUFtQyw0REFBYTtBQUNoRDtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbGFzc2VzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xhc3Nlcy9Qcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbGFzc2VzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xhc3Nlcy9Vc2VySW50ZXJmYWNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIEJBU0UgTEFZT1VUXFxuICAgIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiovXFxuXFxuLmJhc2UtcGFnZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmx1cntcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIEhFQURFUlxcbiAgICBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4qL1xcblxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIFNJREVCQVJcXG4gICAgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0ID4gbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0LWxpc3QgPiBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIE1BSU5cXG4gICAgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG5cXG4ubWFpbntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIEZPT1RFUlxcbiAgICBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4qL1xcblxcbi5mb290ZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4gICAgRk9STVxcbiAgICBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4qL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMjB2aDtcXG5sZWZ0OiAyMHZ3O1xcblxcbnBhZGRpbmc6IDIwcHg7XFxuYm9yZGVyOiBzb2xpZCBibGFjayA0cHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbmJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG5ib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggIzQ5M2VhYTtcXG5cXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5nYXA6IDIwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuLnRhc2tzLXZpZXdlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBncmF5IDVweDtcXG4gICAgd2lkdGg6IDMwdnc7XFxufVxcbi50YXNrLWNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnRhc2stY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuLnRhc2stY2FyZC1wcmUtZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7Ozs7OztDQU1DOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7Ozs7OztDQU1DOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOzs7O0FBSUE7Ozs7OztDQU1DOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7OztBQUlBOzs7Ozs7Q0FNQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7O0FBR0E7Ozs7OztDQU1DOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOzs7Ozs7O0FBT0E7Ozs7OztDQU1DOztBQUVEO0FBQ0EsZUFBZTtBQUNmLFNBQVM7QUFDVCxVQUFVOztBQUVWLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsa0JBQWtCOztBQUVsQiw4QkFBOEI7QUFDOUIsbUNBQW1DOztBQUVuQyxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixtQkFBbUI7O0FBRW5CLFNBQVM7QUFDVDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZGRlbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIEJBU0UgTEFZT1VUXFxuICAgIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiovXFxuXFxuLmJhc2UtcGFnZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA0MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmx1cntcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIEhFQURFUlxcbiAgICBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4qL1xcblxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIFNJREVCQVJcXG4gICAgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0ID4gbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0LWxpc3QgPiBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIE1BSU5cXG4gICAgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuKi9cXG5cXG4ubWFpbntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcblxcbi8qIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuICAgIEZPT1RFUlxcbiAgICBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4qL1xcblxcbi5mb290ZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4gICAgRk9STVxcbiAgICBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4qL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMjB2aDtcXG5sZWZ0OiAyMHZ3O1xcblxcbnBhZGRpbmc6IDIwcHg7XFxuYm9yZGVyOiBzb2xpZCBibGFjayA0cHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbmJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG5ib3gtc2hhZG93OiA0cHggNHB4IDVweCAwcHggIzQ5M2VhYTtcXG5cXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5nYXA6IDIwcHg7XFxufVxcbi5wcm9qZWN0LWZvcm0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuLnRhc2tzLXZpZXdlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBncmF5IDVweDtcXG4gICAgd2lkdGg6IDMwdnc7XFxufVxcbi50YXNrLWNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnRhc2stY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuLnRhc2stY2FyZC1wcmUtZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogVGhlIHByb2plY3QgY3JlYXRvciBtb2R1bGVcbiAqL1xuY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG5cbiAgICAvLyBOYW1lIG9mIHRoZSBwcm9qZWN0IGFuZCBpdCdzIGFycmF5IG9mIHRhc2tzXG4gICAgY29uc3QgX3Rhc2tzID0gW107XG4gICAgY29uc3QgX25hbWUgPSBuYW1lO1xuICAgIFxuICAgIC8vIFJldHVybiBQcm9qZWN0J3MgbmFtZVxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBfbmFtZTtcblxuICAgIC8vIEFkZCBhIHRhc2sgaW4gYXJyYXlcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgX3Rhc2tzLnB1c2godGFzayk7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBhIHRhc2sgZnJvbSBhcnJheSB3aXRoIGl0J3MgaW5kZXhcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmKF90YXNrcy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgICAgICAgX3Rhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciwgdGhlIHRhc2sgaXMgbm90IGluIHRoaXMgcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJldHVybiBhIHNwZWNpZmljIHRhc2tcbiAgICBjb25zdCBnZXRUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmKF90YXNrcy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF90YXNrc1tpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciA6IENhbm5vdCBnZXQgdGFzayBhdCBpbmRleCAke2luZGV4fWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFsbCB0YXNrcyAob25seSBmb3IgZGV2IC8gZGVidWcgSSB0aGluaylcbiAgICBjb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+IF90YXNrcztcbiAgICByZXR1cm4ge2dldE5hbWUsIGFkZFRhc2ssIHJlbW92ZVRhc2ssIGdldFRhc2ssIGdldEFsbFRhc2tzfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJjb25zdCBjcmVhdGVQcm9qZWN0TWFuID0gKCkgPT4ge1xuICAgIGNvbnN0IF9wcm9qZWN0cyA9IFtdO1xuXG4gICAgLy8gQWRkIGEgcHJvamVjdFxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBfcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihfcHJvamVjdHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9qZWN0IG5vdCBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Byb2plY3RzLnNsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IF9wcm9qZWN0cztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RzLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdE1hbjsiLCJjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCwgaXNEdWUgPSBmYWxzZSAsaXNEb25lID0gZmFsc2UpID0+IHtcbiAgICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gICAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBfY2hlY2tMaXN0ID0gY2hlY2tMaXN0O1xuICAgIGxldCBfaXNEdWUgPSBpc0R1ZTsgIC8vIE5vdCBzdXJlIGlmIGl0IGJlbG9uZ3MgaGVyZVxuICAgIGxldCBfaXNEb25lID0gaXNEb25lO1xuXG4gICAgY29uc3QgcHJpbnRUYXNrID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgXG4gICAgICAgIFRpdGxlIDogJHtfdGl0bGV9XG4gICAgICAgIERlc2NyaXB0aW9uIDogJHtfZGVzY3JpcHRpb259XG4gICAgICAgIER1ZSBEYXRlIDogJHtfZHVlRGF0ZX1cbiAgICAgICAgUHJpb3JpdHkgOiAke19wcmlvcml0eX1cbiAgICAgICAgQ2hlY2tMaXN0IDogJHtfY2hlY2tMaXN0fVxuICAgICAgICBpc0RvbmUgOiAke19pc0RvbmV9XG4gICAgICAgIGApO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IF9kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG4gICAgY29uc3QgZ2V0SXNEdWUgPSAoKSA9PiBfaXNEdWU7XG4gICAgY29uc3QgZ2V0SXNEb25lID0gKCkgPT4gX2lzRG9uZTtcblxuICAgIGNvbnN0IGdldFRpbWVMZWZ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgZHVlVGltZSA9IF9kdWVEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdGltZUxlZnQgPSBkdWVUaW1lIC0gbm93O1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCAqMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCAqIDYwICogMjQpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHJldHVybiAoe2RheXMsIGhvdXJzfSk7XG4gICAgfVxuXG5cbiAgICAvLyBDaGFuZ2UgdGhlIGRvbmUgc3RhdHVzIG9mIHRhc2tcbiAgICBjb25zdCBzZXRJc0RvbmUgPSAoKSA9PiBfaXNEb25lID0gIV9pc0RvbmU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcmludFRhc2ssIFxuICAgICAgICBnZXRUaW1lTGVmdCwgXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0RHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHksXG4gICAgICAgIGdldElzRHVlLFxuICAgICAgICBnZXRJc0RvbmUsXG4gICAgICAgIHNldElzRG9uZVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7IiwiY29uc3QgY3JlYXRlVXNlckludGVyZmFjZU1hbmFnZXIgPSAoYm9keSkgPT4ge1xuICAgIFxuICAgIFxuICAgIC8vIEluc3RhbmNpYXRlIGJhc2UgcGFnZSBza2VsZXRvbiBhbmQgVUkgZWxlbWVudHMgdG8gbWFuYWdlXG4gICAgY29uc3QgX2JvZHkgPSBib2R5O1xuICAgIGNvbnN0IF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jhc2UtcGFnZS1jb250YWluZXInKTtcbiAgICBjb25zdCBfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX2hlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCBfc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICBfc2lkZWJhci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtbGlzdFwiPjwvdWw+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0LWZvcm0tYnRuXCI+KyBQcm9qZWN0PC9idXR0b24+YDtcbiAgICBjb25zdCBfbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF9tYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBfZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuXG4gICAgLy8gQ3JlYXRpbmcgaGlkZGVuIGVsZW1lbnRzXG4gICAgY29uc3QgX2Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgX2Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgX2Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICAgICAgX2Zvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZm9ybS10aXRsZVwiPkNyZWF0ZSBhIG5ldyBwcm9qZWN0IDogPC9wPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC1uYW1lXCI+UHJvamVjdCBuYW1lIDogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0LW5hbWVcIiBpZD1cInByb2plY3QtbmFtZVwiPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1lcnJvclwiPjwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjcmVhdGUtcHJvamVjdC1idG5cIj5DcmVhdGUgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0LWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuXG4gICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChfaGVhZGVyKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9zaWRlYmFyKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9tYWluKTtcbiAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKF9mb290ZXIpO1xuICAgIFxuICAgIF9ib2R5LmFwcGVuZENoaWxkKF9jb250YWluZXIpO1xuICAgIF9ib2R5LmFwcGVuZENoaWxkKF9mb3JtQ29udGFpbmVyKTtcbiAgICBcblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gSFRNTCB0YXNrIGNhcmQgXG4gICAgICogQHBhcmFtIHt0YXNrfSB0YXNrIFxuICAgICAqIEByZXR1cm5zIGEgdGFzayBhcyBhIGNhcmQgaW4gb3JkZXIgdG8gYXBwZW5kIGl0IGFzIGFuIGh0bWwgZWxlbWVudFxuICAgICAqL1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tDYXJkID0gKHRhc2spID0+IHtcbiAgICAgICAgLy8gQ2FyZCBjb250YWluZXJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIC8vIENhcmQgdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2suZ2V0VGl0bGUoKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkLXRpdGxlJyk7XG4gICAgICAgIC8vIENhcmQgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1jYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIC8vIFByZSBmb290ZXJcbiAgICAgICAgY29uc3QgcHJlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNhcmQtcHJlLWZvb3RlcicpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gdGFzay5nZXREdWVEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHRpbWVMZWZ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGltZUxlZnQgPSB0YXNrLmdldFRpbWVMZWZ0KCk7XG4gICAgICAgIHRpbWVMZWZ0VGV4dC5pbm5lclRleHQgPSBgJHt0aW1lTGVmdC5kYXlzfSBkYXlzIGFuZCAke3RpbWVMZWZ0LmhvdXJzfSBob3VycyBsZWZ0YDtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eSA6ICR7dGFzay5nZXRQcmlvcml0eSgpfWA7XG4gICAgICAgIHByZUZvb3Rlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgcHJlRm9vdGVyLmFwcGVuZENoaWxkKHRpbWVMZWZ0VGV4dCk7XG4gICAgICAgIHByZUZvb3Rlci5hcHBlbmRDaGlsZChwcmlvcml0eSlcblxuXG4gICAgICAgIC8vIEFwcGVuZCBhbGwgdG8gY29udGFpbmVyICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZUZvb3Rlcik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNob3cgYWxsIHByb2plY3RzIGluIHNpZGViYXJcblxuICAgIC8qKlxuICAgICAqIFJlZnJlc2ggdGhlIHNpZGUgYmFyIGluIG9yZGVyIHRvIGRpc3BsYXkgYWxsIHByb2plY3RzLlxuICAgICAqIERvZXMgbm90IHJldHVybnMgYW55dGhpbmcgYXMgaXQgYXBwZW5kcyB0byBzaWRlIGJhciBpbiBtZXRob2RcbiAgICAgKiBcbiAgICAgKiBvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tb1xuICAgICAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICogfCBEbyBJIG5lZWQgdG8gc2VwYXJhdGUgZWxlbWVudCBjcmVhdGlvbiBhbmQgZGlzcGxheSA/IHxcbiAgICAgKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqIG8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1vXG4gICAgICogQHBhcmFtIHtwcm9qZWN0TWFuYWdlcn0gcHJvamVjdHMgXG4gICAgICovXG4gICAgY29uc3QgcmVmcmVzaFNpZGViYXIgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGFub3RoZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2hpbGQgXG4gICAgICovXG4gICAgY29uc3QgYXBwZW5kVG8gPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFuIEhUTUwgRWxlbWVudCBvZiBhbGwgaXQgY29udGFpbnNcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxuICAgICAqL1xuICAgIGNvbnN0IGNsZWFyRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdCBzaG93UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIF9mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbiAgICB9XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0IGhpZGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgX2Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgIH1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgY29uc3QgZXJyUHJvamVjdEZvcm0gPSAobWVzKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVycm9yJykuaW5uZXJUZXh0ID0gbWVzO1xuICAgIH1cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHRVRURVJTIFNFVFRFUlMgRVRDLi4uXG4gICAgY29uc3QgZ2V0Qm9keSA9ICgpID0+IF9ib2R5O1xuXG4vLyBSZXR1cm4gXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFza0NhcmQsXG4gICAgICAgIHJlZnJlc2hTaWRlYmFyLFxuICAgICAgICBjbGVhckVsZW1lbnQsXG4gICAgICAgIGFwcGVuZFRvLFxuICAgICAgICBzaG93UHJvamVjdEZvcm0sXG4gICAgICAgIGhpZGVQcm9qZWN0Rm9ybSxcbiAgICAgICAgZXJyUHJvamVjdEZvcm0sIFxuICAgICAgICBnZXRCb2R5LFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZXJJbnRlcmZhY2VNYW5hZ2VyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jbGFzc2VzL1Byb2plY3RcIjtcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NsYXNzZXMvVGFza1wiO1xuaW1wb3J0IGNyZWF0ZVVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gXCIuL2NsYXNzZXMvVXNlckludGVyZmFjZU1hbmFnZXJcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0TWFuIGZyb20gJy4vY2xhc3Nlcy9Qcm9qZWN0TWFuYWdlcic7XG4vLyBPbmx5IGZvciBkZWJ1Z1xuY29uc3QgcHJpbnRQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgICBjb25zb2xlLndhcm4oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgcHJvamVjdC5nZXRBbGxUYXNrcygpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrLnByaW50VGFzaygpO1xuICAgICAgICB9KVxuICAgIH0pO1xufTtcbmNvbnN0IFVJTWFuID0gY3JlYXRlVXNlckludGVyZmFjZU1hbmFnZXIoZG9jdW1lbnQuYm9keSk7XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgnZGVmYXVsdCcpO1xuY29uc3QgcHJvamVjdDEgPSBjcmVhdGVQcm9qZWN0KCdwcm9qZWN0MScpO1xuY29uc3QgcHJvamVjdDIgPSBjcmVhdGVQcm9qZWN0KCdwcm9qZWN0MicpO1xuY29uc3QgcHJvamVjdDMgPSBjcmVhdGVQcm9qZWN0KCdwcm9qZWN0MycpO1xuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gY3JlYXRlUHJvamVjdE1hbigpO1xuXG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0MSk7XG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0Mik7XG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0Myk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RzTWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbnByb2plY3RzTWFuYWdlci5nZXRQcm9qZWN0cygpLmZvckVhY2gocHJvaiA9PiBjb25zb2xlLmxvZyhwcm9qLmdldE5hbWUoKSkpXG5cblVJTWFuLnJlZnJlc2hTaWRlYmFyKHByb2plY3RzTWFuYWdlci5nZXRQcm9qZWN0cygpKTtcblxuXG4vLyBBZGRpbmcgdGhlIGxpc3RlbmVyc1xuXG4vLyBTaG93IHRoZSBwcm9qZWN0IEZvcm1cbmNvbnN0IHByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1idG4nKTtcbnByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFVJTWFuLnNob3dQcm9qZWN0Rm9ybSgpO1xuICAgIHByb2plY3RGb3JtQnRuLmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuXG4vLyBDcmVhdGUgcHJvamVjdCAvIGhpZGUgZm9ybVxuXG4vLyBORUVEIFRPIEFERCBFUlJPUiAvIENBTkNFbFxuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idG4nKTtcbmNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICAgIGxldCBpc1Byb2plY3RFeGlzdHMgPSBmYWxzZTtcbiAgICBwcm9qZWN0c01hbmFnZXIuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZihwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmFtZUlucHV0KSBpc1Byb2plY3RFeGlzdHMgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYoaXNQcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgIFVJTWFuLmVyclByb2plY3RGb3JtKCdQcm9qZWN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgVUlNYW4uaGlkZVByb2plY3RGb3JtKClcbiAgICAgICAgcHJvamVjdEZvcm1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcHJvamVjdHNNYW5hZ2VyLmFkZFByb2plY3QoY3JlYXRlUHJvamVjdChuYW1lSW5wdXQpKTtcbiAgICAgICAgVUlNYW4ucmVmcmVzaFNpZGViYXIocHJvamVjdHNNYW5hZ2VyLmdldFByb2plY3RzKCkpO1xuICAgIH1cbn0pO1xuXG5cblxuLy8gQSBNRVRUUkUgREFOUyBVSU1BTkFHRVIgUE9VUiBQUkVORFJFIEVOIENPTVBURSBMRVMgUkVGUkVTSFxuLy8gUkFKT1VURVIgVU4gQVRUUklCVVQgR0xPQkFMIFBPVVIgQVRUUklCVUVSIERZTkFNSVFVRU1FTlQgTEUgUFJPSkVUIFNFTEVDVElPTk5FXG4vLyBDbGljayBvbiBwcm9qZWN0IGluIHNpZGUgYmFyXG5jb25zdCBwcm9qZWN0c1NpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZS1wcm9qZWN0Jyk7XG5wcm9qZWN0c1NpZGUuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2cocHJvamVjdC50ZXh0Q29udGVudCkpO1xufSlcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==