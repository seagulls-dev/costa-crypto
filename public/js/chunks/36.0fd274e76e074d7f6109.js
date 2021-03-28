(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./resources/components/ChartCard/index.js":
/*!*************************************************!*\
  !*** ./resources/components/ChartCard/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var ChartCard = function ChartCard(_ref) {
  var value = _ref.value,
      title = _ref.title,
      children = _ref.children,
      styleName = _ref.styleName,
      icon = _ref.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styleName: "cp-card-full ".concat(styleName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cp-actchart px-3 pt-3 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ant-row-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "mb-0 fs-xxl font-weight-medium"
  }, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fs-xl ml-auto fs-2x"
  }, icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 fs-sm cp-text-grey"
  }, title)), children);
};

var _default = ChartCard;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChartCard, "ChartCard", "D:\\CostaRica\\source\\resources\\components\\ChartCard\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\components\\ChartCard\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\components\\ChartCard\\index.js");
  reactHotLoader.register(ChartCard, "ChartCard", "D:\\CostaRica\\source\\resources\\components\\ChartCard\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\components\\ChartCard\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\components\\ChartCard\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/components/WidgetGridLayout/index.js":
/*!********************************************************!*\
  !*** ./resources/components/WidgetGridLayout/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_forOwn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");
/* harmony import */ var lodash_forOwn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_forOwn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_7__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var ResponsiveLayout = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_7__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_7__["Responsive"]);

var WidgetGridLayout = /*#__PURE__*/function (_Component) {
  _inherits(WidgetGridLayout, _Component);

  var _super = _createSuper(WidgetGridLayout);

  function WidgetGridLayout() {
    var _this;

    _classCallCheck(this, WidgetGridLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "convertToLayouts", function (dimensions) {
      var output = {};

      lodash_forOwn__WEBPACK_IMPORTED_MODULE_5___default()(dimensions, function (dimension, key) {
        lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(dimension, function (o) {
          if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_3___default()(output[o.breakpoint])) {
            output[o.breakpoint] = [];
          }

          var layout = lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(o, ['breakpoint']), {
            i: key
          });

          _this.autoCorrect(layout);

          output[o.breakpoint].push(layout);
        });
      });

      return output;
    });

    _defineProperty(_assertThisInitialized(_this), "validateUnit", function (n) {
      return typeof n === "number" && !lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(n);
    });

    _defineProperty(_assertThisInitialized(_this), "convertToDimensions", function (layouts) {
      var output = {};

      lodash_forOwn__WEBPACK_IMPORTED_MODULE_5___default()(layouts, function (layout, breakpoint) {
        lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(layout, function (o) {
          if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_3___default()(output[o.i])) {
            output[o.i] = [];
          }

          var dimension = lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(o, ['i']), {
            breakpoint: breakpoint
          });

          output[o.i].push(dimension);
        });
      });

      return output;
    });

    _defineProperty(_assertThisInitialized(_this), "handleLayoutChange", function (current, all) {
      var onDimensionChange = _this.props.onDimensionChange;

      if (typeof onDimensionChange === "function") {
        var dimensions = _this.convertToDimensions(all);

        return onDimensionChange(dimensions);
      }
    });

    return _this;
  }

  _createClass(WidgetGridLayout, [{
    key: "autoCorrect",
    value: function autoCorrect(units) {
      if (this.validateUnit(units.minW) && units.minW > units.w) {
        units.minW = units.w;
      }

      if (this.validateUnit(units.minH) && units.minH > units.h) {
        units.minH = units.h;
      }

      if (this.validateUnit(units.maxW) && units.maxW < units.w) {
        units.maxW = units.w;
      }

      if (this.validateUnit(units.maxH) && units.maxH < units.h) {
        units.maxH = units.h;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rowHeight = _this$props.rowHeight,
          cols = _this$props.cols,
          breakpoints = _this$props.breakpoints,
          dimensions = _this$props.dimensions,
          isDraggable = _this$props.isDraggable,
          isResizable = _this$props.isResizable;
      var layouts = this.convertToLayouts(dimensions);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ResponsiveLayout, {
        rowHeight: rowHeight,
        margin: [10, 15],
        isDraggable: isDraggable,
        isResizable: isResizable // compactType="horizontal"
        ,
        onLayoutChange: this.handleLayoutChange,
        cols: cols,
        measureBeforeMount: true,
        children: children,
        breakpoints: breakpoints,
        layouts: layouts
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return WidgetGridLayout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

WidgetGridLayout.defaultProps = {
  rowHeight: 100,
  cols: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};
var _default = WidgetGridLayout;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ResponsiveLayout, "ResponsiveLayout", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(WidgetGridLayout, "WidgetGridLayout", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(ResponsiveLayout, "ResponsiveLayout", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(WidgetGridLayout, "WidgetGridLayout", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\components\\WidgetGridLayout\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/ActiveTrades/index.js":
/*!****************************************************************!*\
  !*** ./resources/routes/home/components/ActiveTrades/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var ActiveTrades = /*#__PURE__*/function (_Component) {
  _inherits(ActiveTrades, _Component);

  var _super = _createSuper(ActiveTrades);

  function ActiveTrades() {
    var _this;

    _classCallCheck(this, ActiveTrades);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getStatusColor", function (status) {
      switch (status) {
        case 'successful':
          return "#52c41a";

        case 'active':
          return "#2db7f5";

        case 'dispute':
          return "#faad14";

        case "cancelled":
          return "#f5222d";

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "goToChat", function (chatId) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_13__["default"]['chat.view'].path, {
        token: chatId
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(history)) {
        return history.push(path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Amount",
          id: "common.amount"
        }),
        dataIndex: 'formatted_amount_price'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Seller",
          id: "common.seller"
        }),
        dataIndex: 'seller',
        render: function render(seller) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
            user: seller
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Buyer",
          id: "common.buyer"
        }),
        dataIndex: 'buyer',
        render: function render(buyer) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
            user: buyer
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Payment Method",
          id: "common.payment_method"
        }),
        dataIndex: 'payment_method_name',
        render: function render(payment_method_name, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            className: "mr-2"
          }, payment_method_name), record.payment_method_description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
            overlayStyle: {
              maxWidth: 250
            },
            content: record.payment_method_description,
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
              id: "common.payment_method_description",
              defaultMessage: "Description"
            }),
            trigger: "click"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
            type: "question-circle",
            theme: "filled"
          })));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            type: "primary",
            onClick: function onClick() {
              return _this.goToChat(record.chat_id);
            },
            icon: "link"
          });
        }
      }];
    });

    return _this;
  }

  _createClass(ActiveTrades, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var auth = this.props.auth;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["route"])("user.trades.table", {
        name: auth.user.name
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        styleName: "cp-card-table full-grid-item scroll",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Active Trades",
          id: "home.widget.active_trades"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        columns: this.columns(),
        ref: function ref(table) {
          return _this2.table = table;
        },
        route: endpoint.url(),
        size: "middle",
        scroll: {
          x: true,
          y: false
        },
        className: "mt-1"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ActiveTrades;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_10__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps), react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(ActiveTrades);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ActiveTrades, "ActiveTrades", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(ActiveTrades, "ActiveTrades", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ActiveTrades\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/Authentication/index.js":
/*!******************************************************************!*\
  !*** ./resources/routes/home/components/Authentication/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_actions_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/actions/Auth */ "./resources/redux/actions/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var Authentication = /*#__PURE__*/function (_Component) {
  _inherits(Authentication, _Component);

  var _super = _createSuper(Authentication);

  function Authentication() {
    var _this;

    _classCallCheck(this, Authentication);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleSignUp", function () {
      _this.props.showSignUpForm();
    });

    return _this;
  }

  _createClass(Authentication, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
        styleName: "cp-widget-bg m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "fs-xxl font-weight-semi-bold mb-3 d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-shield-alt fs-3x mr-2"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Secure Escrow Trading",
        id: "widget.authentication.title"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-4",
        style: {
          lineHeight: 1.4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Join the peer-to-peer finance revolution. " + "The {name} Marketplace is here to radically transform the way you spend money. " + "Use hundreds of different payment methods to buy and sell bitcoin.",
        values: {
          name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, context__WEBPACK_IMPORTED_MODULE_4___default.a.name)
        },
        id: "widget.authentication.body"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "dashed",
        icon: "user-add",
        onClick: this.handleSignUp
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Register Now",
        id: "widget.authentication.button_content"
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Authentication;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, {
  showSignInForm: redux_actions_Auth__WEBPACK_IMPORTED_MODULE_5__["showSignInForm"],
  showSignUpForm: redux_actions_Auth__WEBPACK_IMPORTED_MODULE_5__["showSignUpForm"]
}), react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Authentication);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Authentication, "Authentication", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(Authentication, "Authentication", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\Authentication\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/BitcoinCashPrice/index.js":
/*!********************************************************************!*\
  !*** ./resources/routes/home/components/BitcoinCashPrice/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mean */ "./node_modules/lodash/mean.js");
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mean__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/slice */ "./node_modules/lodash/slice.js");
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ChartCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ChartCard */ "./resources/components/ChartCard/index.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cryptocoins/dist/icons/BTC */ "./node_modules/react-cryptocoins/dist/icons/BTC.js");
/* harmony import */ var react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};














var BitcoinCashPrice = /*#__PURE__*/function (_Component) {
  _inherits(BitcoinCashPrice, _Component);

  var _super = _createSuper(BitcoinCashPrice);

  function BitcoinCashPrice(props) {
    var _this;

    _classCallCheck(this, BitcoinCashPrice);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buildAreaChartData", function (data) {
      if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default()(data)) return [];
      return lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_slice__WEBPACK_IMPORTED_MODULE_4___default()(data, -7), function (value) {
        var price = lodash_mean__WEBPACK_IMPORTED_MODULE_3___default()([value.high, value.low]);

        return {
          price: lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(price, 2),
          name: value.time,
          time: value.time
        };
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_15__["default"]();
    _this.state = {
      currency: 'USD',
      price: 0,
      formattedPrice: "",
      history: {},
      loading: false
    };
    return _this;
  }

  _createClass(BitcoinCashPrice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('home.widget.price.data', {
        identifier: 'bch'
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleSuccess"])(response, function (data) {
          _this2.setState({
            currency: data.currency || 'USD',
            price: data.price || 0,
            formattedPrice: data.formatted_price || "",
            history: data.history || {},
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
      this.setState({
        loading: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          formattedPrice = _this$state.formattedPrice,
          history = _this$state.history,
          currency = _this$state.currency;
      var chartData = this.buildAreaChartData(history['Data']);

      var TooltipContent = function TooltipContent(props) {
        var active = props.active,
            payload = props.payload;
        if (!active) return null;

        var data = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payload, '[0].payload');

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "rounded p-1 cp-bg-white"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "d-inline-block mr-1"
        }, moment__WEBPACK_IMPORTED_MODULE_17___default.a.utc(data.time, 'X').local().fromNow(), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "font-weight-medium d-inline-block"
        }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_18__["currencyFormat"])(data.price, currency)));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_ChartCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: formattedPrice,
        title: "BitcoinCash Price",
        styleName: "mb-0",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            color: '#41750a'
          }
        }),
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
          width: "100%",
          height: 32
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default.a, {
          data: chartData,
          margin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TooltipContent, null)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("linearGradient", {
          id: "bitcoinCashColor",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "5%",
          stopColor: "#8dc351",
          stopOpacity: 0.9
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "95%",
          stopColor: "#41750a",
          stopOpacity: 0.9
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "number",
          domain: ['dataMin', 'dataMax'],
          hide: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
          dataKey: "price",
          type: "monotone",
          strokeWidth: 0,
          fill: "url(#bitcoinCashColor)",
          fillOpacity: 1
        })))
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinCashPrice;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = BitcoinCashPrice;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinCashPrice, "BitcoinCashPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(BitcoinCashPrice, "BitcoinCashPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinCashPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/BitcoinPrice/index.js":
/*!****************************************************************!*\
  !*** ./resources/routes/home/components/BitcoinPrice/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mean */ "./node_modules/lodash/mean.js");
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mean__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/slice */ "./node_modules/lodash/slice.js");
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ChartCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ChartCard */ "./resources/components/ChartCard/index.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cryptocoins/dist/icons/BTC */ "./node_modules/react-cryptocoins/dist/icons/BTC.js");
/* harmony import */ var react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};














var BitcoinPrice = /*#__PURE__*/function (_Component) {
  _inherits(BitcoinPrice, _Component);

  var _super = _createSuper(BitcoinPrice);

  function BitcoinPrice(props) {
    var _this;

    _classCallCheck(this, BitcoinPrice);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buildAreaChartData", function (data) {
      if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default()(data)) return [];
      return lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_slice__WEBPACK_IMPORTED_MODULE_4___default()(data, -7), function (value) {
        var price = lodash_mean__WEBPACK_IMPORTED_MODULE_3___default()([value.high, value.low]);

        return {
          price: lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(price, 2),
          name: value.time,
          time: value.time
        };
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_15__["default"]();
    _this.state = {
      currency: 'USD',
      price: 0,
      formattedPrice: "",
      history: {},
      loading: false
    };
    return _this;
  }

  _createClass(BitcoinPrice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('home.widget.price.data', {
        identifier: 'btc'
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleSuccess"])(response, function (data) {
          _this2.setState({
            currency: data.currency || 'USD',
            price: data.price || 0,
            formattedPrice: data.formatted_price || "",
            history: data.history || {},
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
      this.setState({
        loading: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          formattedPrice = _this$state.formattedPrice,
          history = _this$state.history,
          currency = _this$state.currency;
      var chartData = this.buildAreaChartData(history['Data']);

      var TooltipContent = function TooltipContent(props) {
        var active = props.active,
            payload = props.payload;
        if (!active) return null;

        var data = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payload, '[0].payload');

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "rounded p-1 cp-bg-white"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "d-inline-block mr-1"
        }, moment__WEBPACK_IMPORTED_MODULE_17___default.a.utc(data.time, 'X').local().fromNow(), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "font-weight-medium d-inline-block"
        }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_18__["currencyFormat"])(data.price, currency)));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_ChartCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: formattedPrice,
        title: "Bitcoin Price",
        styleName: "mb-0",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_cryptocoins_dist_icons_BTC__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            color: '#bb8414'
          }
        }),
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
          width: "100%",
          height: 32
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default.a, {
          data: chartData,
          margin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TooltipContent, null)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("linearGradient", {
          id: "bitcoinColor",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "5%",
          stopColor: "#e4cf3a",
          stopOpacity: 0.9
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "95%",
          stopColor: "#bb8414",
          stopOpacity: 0.9
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "number",
          domain: ['dataMin', 'dataMax'],
          hide: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
          dataKey: "price",
          type: "monotone",
          strokeWidth: 0,
          fill: "url(#bitcoinColor)",
          fillOpacity: 1
        })))
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinPrice;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = BitcoinPrice;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\BitcoinPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/DashPrice/index.js":
/*!*************************************************************!*\
  !*** ./resources/routes/home/components/DashPrice/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mean */ "./node_modules/lodash/mean.js");
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mean__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/slice */ "./node_modules/lodash/slice.js");
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ChartCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ChartCard */ "./resources/components/ChartCard/index.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_cryptocoins_dist_icons_DASH__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cryptocoins/dist/icons/DASH */ "./node_modules/react-cryptocoins/dist/icons/DASH.js");
/* harmony import */ var react_cryptocoins_dist_icons_DASH__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_cryptocoins_dist_icons_DASH__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};














var BitcoinPrice = /*#__PURE__*/function (_Component) {
  _inherits(BitcoinPrice, _Component);

  var _super = _createSuper(BitcoinPrice);

  function BitcoinPrice(props) {
    var _this;

    _classCallCheck(this, BitcoinPrice);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buildAreaChartData", function (data) {
      if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default()(data)) return [];
      return lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_slice__WEBPACK_IMPORTED_MODULE_4___default()(data, -7), function (value) {
        var price = lodash_mean__WEBPACK_IMPORTED_MODULE_3___default()([value.high, value.low]);

        return {
          price: lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(price, 2),
          name: value.time,
          time: value.time
        };
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_15__["default"]();
    _this.state = {
      currency: 'USD',
      price: 0,
      formattedPrice: "",
      history: {},
      loading: false
    };
    return _this;
  }

  _createClass(BitcoinPrice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('home.widget.price.data', {
        identifier: 'dash'
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleSuccess"])(response, function (data) {
          _this2.setState({
            currency: data.currency || 'USD',
            price: data.price || 0,
            formattedPrice: data.formatted_price || "",
            history: data.history || {},
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
      this.setState({
        loading: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          formattedPrice = _this$state.formattedPrice,
          history = _this$state.history,
          currency = _this$state.currency;
      var chartData = this.buildAreaChartData(history['Data']);

      var TooltipContent = function TooltipContent(props) {
        var active = props.active,
            payload = props.payload;
        if (!active) return null;

        var data = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payload, '[0].payload');

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "rounded p-1 cp-bg-white"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "d-inline-block mr-1"
        }, moment__WEBPACK_IMPORTED_MODULE_17___default.a.utc(data.time, 'X').local().fromNow(), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "font-weight-medium d-inline-block"
        }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_18__["currencyFormat"])(data.price, currency)));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_ChartCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: formattedPrice,
        title: "Dash Price",
        styleName: "mb-0",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_cryptocoins_dist_icons_DASH__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            color: '#1c379c'
          }
        }),
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
          width: "100%",
          height: 32
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default.a, {
          data: chartData,
          margin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TooltipContent, null)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("linearGradient", {
          id: "dashColor",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "5%",
          stopColor: "#008DE4",
          stopOpacity: 0.9
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "95%",
          stopColor: "#1c379c",
          stopOpacity: 0.9
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "number",
          domain: ['dataMin', 'dataMax'],
          hide: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
          dataKey: "price",
          type: "monotone",
          strokeWidth: 0,
          fill: "url(#dashColor)",
          fillOpacity: 1
        })))
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinPrice;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = BitcoinPrice;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\DashPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/LitecoinPrice/index.js":
/*!*****************************************************************!*\
  !*** ./resources/routes/home/components/LitecoinPrice/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mean */ "./node_modules/lodash/mean.js");
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mean__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/slice */ "./node_modules/lodash/slice.js");
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ChartCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ChartCard */ "./resources/components/ChartCard/index.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_cryptocoins_dist_icons_LTC__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cryptocoins/dist/icons/LTC */ "./node_modules/react-cryptocoins/dist/icons/LTC.js");
/* harmony import */ var react_cryptocoins_dist_icons_LTC__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_cryptocoins_dist_icons_LTC__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};














var BitcoinPrice = /*#__PURE__*/function (_Component) {
  _inherits(BitcoinPrice, _Component);

  var _super = _createSuper(BitcoinPrice);

  function BitcoinPrice(props) {
    var _this;

    _classCallCheck(this, BitcoinPrice);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buildAreaChartData", function (data) {
      if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default()(data)) return [];
      return lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_slice__WEBPACK_IMPORTED_MODULE_4___default()(data, -7), function (value) {
        var price = lodash_mean__WEBPACK_IMPORTED_MODULE_3___default()([value.high, value.low]);

        return {
          price: lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(price, 2),
          name: value.time,
          time: value.time
        };
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_15__["default"]();
    _this.state = {
      currency: 'USD',
      price: 0,
      formattedPrice: "",
      history: {},
      loading: false
    };
    return _this;
  }

  _createClass(BitcoinPrice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('home.widget.price.data', {
        identifier: 'ltc'
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleSuccess"])(response, function (data) {
          _this2.setState({
            currency: data.currency || 'USD',
            price: data.price || 0,
            formattedPrice: data.formatted_price || "",
            history: data.history || {},
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
      this.setState({
        loading: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          formattedPrice = _this$state.formattedPrice,
          history = _this$state.history,
          currency = _this$state.currency;
      var chartData = this.buildAreaChartData(history['Data']);

      var TooltipContent = function TooltipContent(props) {
        var active = props.active,
            payload = props.payload;
        if (!active) return null;

        var data = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payload, '[0].payload');

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "rounded p-1 cp-bg-white"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "d-inline-block mr-1"
        }, moment__WEBPACK_IMPORTED_MODULE_17___default.a.utc(data.time, 'X').local().fromNow(), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "font-weight-medium d-inline-block"
        }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_18__["currencyFormat"])(data.price, currency)));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_ChartCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: formattedPrice,
        title: "Litecoin Price",
        styleName: "mb-0",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_cryptocoins_dist_icons_LTC__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            color: '#4d4d4d'
          }
        }),
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
          width: "100%",
          height: 32
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default.a, {
          data: chartData,
          margin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TooltipContent, null)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("linearGradient", {
          id: "litecoinColor",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "5%",
          stopColor: "#b8b8b8",
          stopOpacity: 0.9
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "95%",
          stopColor: "#4d4d4d",
          stopOpacity: 0.9
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "number",
          domain: ['dataMin', 'dataMax'],
          hide: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
          dataKey: "price",
          type: "monotone",
          strokeWidth: 0,
          fill: "url(#litecoinColor)",
          fillOpacity: 1
        })))
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinPrice;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = BitcoinPrice;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\LitecoinPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/MarketplaceBuy/index.js":
/*!******************************************************************!*\
  !*** ./resources/routes/home/components/MarketplaceBuy/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var components_Flag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Flag */ "./resources/components/Flag/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var MarketplaceBuy = /*#__PURE__*/function (_Component) {
  _inherits(MarketplaceBuy, _Component);

  var _super = _createSuper(MarketplaceBuy);

  function MarketplaceBuy(props) {
    var _this;

    _classCallCheck(this, MarketplaceBuy);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "applyFilter", function (filters) {
      _this.table.applyFilter(filters);
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Seller",
          id: "common.seller"
        }),
        dataIndex: 'user',
        render: function render(user) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
            user: user
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Payment",
          id: "common.payment"
        }),
        dataIndex: 'payment_method',
        render: function render(paymentMethod, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            className: "d-block"
          }, paymentMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, record.label));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Range",
          id: "common.range"
        }),
        key: 'range',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_min_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            className: "font-weight-semi-bold mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            defaultMessage: "To",
            id: "common.to"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_real_max_amount));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_9__["default"]['marketplace.offer'].path, {
            slug: record.slug
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
            to: path
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            type: "default",
            className: "cp-btn-success",
            size: "small"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            defaultMessage: "Buy",
            id: "common.buy"
          }))));
        }
      }];
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      location: {}
    };
    return _this;
  }

  _createClass(MarketplaceBuy, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchIpInfo();
    }
  }, {
    key: "fetchIpInfo",
    value: function fetchIpInfo() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('ip.info');
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleSuccess"])(response, function (location) {
          _this2.setState({
            location: location
          });

          if (location.iso_code) {
            _this2.applyFilter({
              country: lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default()(location.iso_code)
            });
          }
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleError"])(error);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var location = this.state.location;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["route"])("marketplace.buy-coin.table");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
        styleName: "cp-card-table full-grid-item scroll",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Buy Offers",
          id: "home.widget.marketplace_buy_offers"
        }),
        extra: location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Flag__WEBPACK_IMPORTED_MODULE_10__["default"], {
          code: location.iso_code
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        columns: this.columns(),
        ref: function ref(table) {
          return _this3.table = table;
        },
        route: endpoint.url(),
        size: "middle",
        scroll: {
          x: true,
          y: false
        },
        className: "mt-1"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MarketplaceBuy;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = MarketplaceBuy;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MarketplaceBuy, "MarketplaceBuy", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(MarketplaceBuy, "MarketplaceBuy", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceBuy\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/MarketplaceSell/index.js":
/*!*******************************************************************!*\
  !*** ./resources/routes/home/components/MarketplaceSell/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var components_Flag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Flag */ "./resources/components/Flag/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var MarketplaceSell = /*#__PURE__*/function (_Component) {
  _inherits(MarketplaceSell, _Component);

  var _super = _createSuper(MarketplaceSell);

  function MarketplaceSell(props) {
    var _this;

    _classCallCheck(this, MarketplaceSell);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "applyFilter", function (filters) {
      _this.table.applyFilter(filters);
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Buyer",
          id: "common.buyer"
        }),
        dataIndex: 'user',
        render: function render(user) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
            user: user
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Payment",
          id: "common.payment"
        }),
        dataIndex: 'payment_method',
        render: function render(paymentMethod, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            className: "d-block"
          }, paymentMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
            className: "d-block"
          }, record.label));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Range",
          id: "common.range"
        }),
        key: 'range',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_min_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            className: "font-weight-semi-bold mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            defaultMessage: "To",
            id: "common.to"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_real_max_amount));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_9__["default"]['marketplace.offer'].path, {
            slug: record.slug
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
            to: path
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            type: "default",
            className: "cp-btn-danger",
            size: "small"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            defaultMessage: "Sell",
            id: "common.sell"
          }))));
        }
      }];
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      location: {}
    };
    return _this;
  }

  _createClass(MarketplaceSell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchIpInfo();
    }
  }, {
    key: "fetchIpInfo",
    value: function fetchIpInfo() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('ip.info');
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleSuccess"])(response, function (location) {
          _this2.setState({
            location: location
          });

          if (location.iso_code) {
            _this2.applyFilter({
              country: lodash_upperCase__WEBPACK_IMPORTED_MODULE_0___default()(location.iso_code)
            });
          }
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleError"])(error);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var location = this.state.location;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["route"])("marketplace.sell-coin.table");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
        styleName: "cp-card-table full-grid-item scroll",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Sell Offers",
          id: "home.widget.marketplace_sell_offers"
        }),
        extra: location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Flag__WEBPACK_IMPORTED_MODULE_11__["default"], {
          code: location.iso_code
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        columns: this.columns(),
        ref: function ref(table) {
          return _this3.table = table;
        },
        size: "middle",
        route: endpoint.url(),
        scroll: {
          x: true,
          y: false
        },
        className: "mt-1"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MarketplaceSell;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = MarketplaceSell;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MarketplaceSell, "MarketplaceSell", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(MarketplaceSell, "MarketplaceSell", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\MarketplaceSell\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/TradeStatusChart/activeShape.js":
/*!**************************************************************************!*\
  !*** ./resources/routes/home/components/TradeStatusChart/activeShape.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var recharts_lib_shape_Sector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recharts/lib/shape/Sector.js */ "./node_modules/recharts/lib/shape/Sector.js");
/* harmony import */ var recharts_lib_shape_Sector_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_shape_Sector_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var _default = function _default(props) {
  var RADIAN = Math.PI / 180;
  var cx = props.cx,
      cy = props.cy,
      midAngle = props.midAngle,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      fill = props.fill,
      payload = props.payload,
      percent = props.percent,
      value = props.value;
  var sin = Math.sin(-RADIAN * midAngle);
  var cos = Math.cos(-RADIAN * midAngle);
  var sx = cx + (outerRadius + 10) * cos;
  var sy = cy + (outerRadius + 10) * sin;
  var mx = cx + (outerRadius + 30) * cos;
  var my = cy + (outerRadius + 30) * sin;
  var ex = mx + (cos >= 0 ? 1 : -1) * 22;
  var ey = my;
  var textAnchor = cos >= 0 ? 'start' : 'end';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: cx,
    y: cy,
    dy: 8,
    textAnchor: "middle",
    fill: fill
  }, payload.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts_lib_shape_Sector_js__WEBPACK_IMPORTED_MODULE_0___default.a, {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    endAngle: endAngle,
    startAngle: startAngle,
    fill: fill
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(recharts_lib_shape_Sector_js__WEBPACK_IMPORTED_MODULE_0___default.a, {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey),
    stroke: fill,
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333"
  }, "".concat(Object(millify__WEBPACK_IMPORTED_MODULE_2__["default"])(value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999"
  }, "".concat((percent * 100).toFixed(2), "%")));
};

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\activeShape.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\activeShape.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\activeShape.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\activeShape.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/TradeStatusChart/index.js":
/*!********************************************************************!*\
  !*** ./resources/routes/home/components/TradeStatusChart/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/result */ "./node_modules/antd/lib/result/index.js");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/sumBy */ "./node_modules/lodash/sumBy.js");
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts/lib/chart/PieChart.js */ "./node_modules/recharts/lib/chart/PieChart.js");
/* harmony import */ var recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts/lib/polar/Pie.js */ "./node_modules/recharts/lib/polar/Pie.js");
/* harmony import */ var recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _activeShape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activeShape */ "./resources/routes/home/components/TradeStatusChart/activeShape.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var colorPalettes = context__WEBPACK_IMPORTED_MODULE_11___default.a.settings.colorPalettes;

var TradeStatusChart = /*#__PURE__*/function (_Component) {
  _inherits(TradeStatusChart, _Component);

  var _super = _createSuper(TradeStatusChart);

  function TradeStatusChart(props) {
    var _this;

    _classCallCheck(this, TradeStatusChart);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onPieEnter", function (data, index) {
      _this.setState({
        activeIndex: index
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_12__["default"]();
    _this.state = {
      data: [],
      activeIndex: 0,
      loading: false
    };
    return _this;
  }

  _createClass(TradeStatusChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('home.widget.marketplace-statistics.trade-status-data');
      this.setState({
        loading: true
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleSuccess"])(response, function (data) {
          _this2.setState({
            loading: false,
            data: data
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          activeIndex = _this$state.activeIndex,
          loading = _this$state.loading;

      var total = lodash_sumBy__WEBPACK_IMPORTED_MODULE_3___default()(data, 'value');

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
        styleName: "full-grid-item",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Trades Status Chart",
          id: "home.widget.marketplace_trade_chart"
        })
      }, total > 0 && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_7___default.a, {
        dataKey: "value",
        fill: colorPalettes['@primary-color'],
        activeIndex: activeIndex,
        activeShape: _activeShape__WEBPACK_IMPORTED_MODULE_8__["default"],
        innerRadius: "50%",
        outerRadius: "70%",
        onMouseEnter: this.onPieEnter,
        data: data
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default.a, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "frown",
          twoToneColor: colorPalettes['@primary-color'],
          theme: "twoTone"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "text-muted"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "No Marketplace Trade Yet.",
          id: "widget.trade_chart.no_marketplace_trade"
        })),
        status: "info"
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TradeStatusChart;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = TradeStatusChart;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(TradeStatusChart, "TradeStatusChart", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(TradeStatusChart, "TradeStatusChart", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\TradeStatusChart\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/components/ZcashPrice/index.js":
/*!**************************************************************!*\
  !*** ./resources/routes/home/components/ZcashPrice/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mean */ "./node_modules/lodash/mean.js");
/* harmony import */ var lodash_mean__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mean__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/slice */ "./node_modules/lodash/slice.js");
/* harmony import */ var lodash_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ChartCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ChartCard */ "./resources/components/ChartCard/index.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_cryptocoins_dist_icons_ZEC_alt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cryptocoins/dist/icons/ZEC-alt */ "./node_modules/react-cryptocoins/dist/icons/ZEC-alt.js");
/* harmony import */ var react_cryptocoins_dist_icons_ZEC_alt__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_cryptocoins_dist_icons_ZEC_alt__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};














var BitcoinPrice = /*#__PURE__*/function (_Component) {
  _inherits(BitcoinPrice, _Component);

  var _super = _createSuper(BitcoinPrice);

  function BitcoinPrice(props) {
    var _this;

    _classCallCheck(this, BitcoinPrice);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buildAreaChartData", function (data) {
      if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_6___default()(data)) return [];
      return lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_slice__WEBPACK_IMPORTED_MODULE_4___default()(data, -7), function (value) {
        var price = lodash_mean__WEBPACK_IMPORTED_MODULE_3___default()([value.high, value.low]);

        return {
          price: lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(price, 2),
          name: value.time,
          time: value.time
        };
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_15__["default"]();
    _this.state = {
      currency: 'USD',
      price: 0,
      formattedPrice: "",
      history: {},
      loading: false
    };
    return _this;
  }

  _createClass(BitcoinPrice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('home.widget.price.data', {
        identifier: 'zec'
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleSuccess"])(response, function (data) {
          _this2.setState({
            currency: data.currency || 'USD',
            price: data.price || 0,
            formattedPrice: data.formatted_price || "",
            history: data.history || {},
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
      this.setState({
        loading: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          formattedPrice = _this$state.formattedPrice,
          history = _this$state.history,
          currency = _this$state.currency;
      var chartData = this.buildAreaChartData(history['Data']);

      var TooltipContent = function TooltipContent(props) {
        var active = props.active,
            payload = props.payload;
        if (!active) return null;

        var data = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(payload, '[0].payload');

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "rounded p-1 cp-bg-white"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "d-inline-block mr-1"
        }, moment__WEBPACK_IMPORTED_MODULE_17___default.a.utc(data.time, 'X').local().fromNow(), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "font-weight-medium d-inline-block"
        }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_18__["currencyFormat"])(data.price, currency)));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_ChartCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: formattedPrice,
        title: "Zcash Price",
        styleName: "mb-0",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_cryptocoins_dist_icons_ZEC_alt__WEBPACK_IMPORTED_MODULE_14___default.a, {
          style: {
            color: '#a73932'
          }
        }),
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
          width: "100%",
          height: 32
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_12___default.a, {
          data: chartData,
          margin: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TooltipContent, null)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("linearGradient", {
          id: "zcashColor",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "5%",
          stopColor: "#FF817A",
          stopOpacity: 0.9
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stop", {
          offset: "95%",
          stopColor: "#a73932",
          stopOpacity: 0.9
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
          type: "number",
          domain: ['dataMin', 'dataMax'],
          hide: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
          dataKey: "price",
          type: "monotone",
          strokeWidth: 0,
          fill: "url(#zcashColor)",
          fillOpacity: 1
        })))
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinPrice;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = BitcoinPrice;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\components\\ZcashPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/index.js":
/*!****************************************!*\
  !*** ./resources/routes/home/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/page-header */ "./node_modules/antd/lib/page-header/index.js");
/* harmony import */ var antd_lib_page_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_forOwn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/forOwn */ "./node_modules/lodash/forOwn.js");
/* harmony import */ var lodash_forOwn__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_forOwn__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_WidgetGridLayout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/WidgetGridLayout */ "./resources/components/WidgetGridLayout/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./widgets */ "./resources/routes/home/widgets.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




















(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_19__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.home",
    "defaultMessage": "Home | {name}"
  },
  layoutSaved: {
    "id": "common.layout_saved",
    "defaultMessage": "Layout was saved."
  }
});
var columns = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 4
};

var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buildDimensions", function (data) {
      var dimensions = {};
      data = lodash_map__WEBPACK_IMPORTED_MODULE_17___default()(data, function (o) {
        dimensions[o.name] = [];
        return lodash_assign__WEBPACK_IMPORTED_MODULE_16___default()({}, o, {
          isValid: _this.validateDimensions(o.dimensions)
        });
      });

      lodash_forOwn__WEBPACK_IMPORTED_MODULE_15___default()(columns, function (breakpointCols, breakpoint) {
        var nextX = 0,
            nextY = 0,
            nextH = 0;

        lodash_forEach__WEBPACK_IMPORTED_MODULE_14___default()(data, function (w) {
          var cols = _this.parseUnit(w.cols, breakpointCols);

          var minCols = _this.parseUnit(w.min_cols, breakpointCols);

          var maxCols = _this.parseUnit(w.max_cols, breakpointCols);

          var rows = _this.parseUnit(w.rows);

          var minRows = _this.parseUnit(w.min_rows);

          var maxRows = _this.parseUnit(w.max_rows);

          if (lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(cols) || lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(rows)) return;

          var defaultDimension = w.isValid && lodash_find__WEBPACK_IMPORTED_MODULE_12___default()(w.dimensions, function (o) {
            return o.breakpoint === breakpoint;
          });

          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(defaultDimension)) {
            var dimension = {
              breakpoint: breakpoint,
              isResizable: w.resizable,
              w: cols,
              h: rows
            };

            if (nextX + cols <= breakpointCols) {
              dimension.x = nextX;
              dimension.y = nextY;
              nextX = dimension.x + dimension.w;
              nextH = Math.max(nextH, dimension.h);
              nextY = dimension.y;
            } else {
              dimension.x = 0;
              dimension.y = nextY + nextH;
              nextY = dimension.y;
              nextH = dimension.h;
              nextX = dimension.w;
            }

            if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(minCols)) dimension.minW = minCols;
            if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(maxCols)) dimension.maxW = maxCols;
            if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(minRows)) dimension.minH = minRows;
            if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(maxRows)) dimension.maxH = maxRows;
            dimensions[w.name].push(dimension);
          } else {
            nextH = Math.max(nextH, defaultDimension.h);
            nextX = defaultDimension.x + defaultDimension.w;
            nextY = defaultDimension.y;
            dimensions[w.name].push(defaultDimension);
          }
        });
      });

      return dimensions;
    });

    _defineProperty(_assertThisInitialized(_this), "validateDimensions", function (dimensions) {
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(dimensions) && !lodash_some__WEBPACK_IMPORTED_MODULE_10___default()(dimensions, function (o) {
        return !(lodash_has__WEBPACK_IMPORTED_MODULE_9___default()(o, 'x') && _this.validateUnit(o.x)) || !(lodash_has__WEBPACK_IMPORTED_MODULE_9___default()(o, 'y') && _this.validateUnit(o.y)) || !(lodash_has__WEBPACK_IMPORTED_MODULE_9___default()(o, 'w') && _this.validateUnit(o.w)) || !(lodash_has__WEBPACK_IMPORTED_MODULE_9___default()(o, 'h') && _this.validateUnit(o.h));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validateUnit", function (n) {
      return typeof n === "number" && !isNaN(n);
    });

    _defineProperty(_assertThisInitialized(_this), "parseUnit", function (number, limit) {
      if (!_this.validateUnit(number)) {
        return null;
      } else if (_this.validateUnit(limit)) {
        return Math.min(number, limit);
      } else {
        return number;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "editLayout", function () {
      _this.resetDimensions();

      _this.setState({
        editable: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveLayout", function () {
      var dimensions = _this.state.dimensions;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var intl = _this.props.intl;
      var endpoint = route('home.widget.set-dimensions');
      axios.post(endpoint.url(), {
        dimensions: dimensions
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_22__["handleSuccess"])(response, function () {
          _this.setState({
            saving: false
          });

          _this.fetchData();
        }, intl.formatMessage(messages.layoutSaved));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_22__["handleError"])(error, function () {
          _this.setState({
            saving: false
          });
        });
      });

      _this.setState({
        saving: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDimensionChange", function (dimensions) {
      _this.setState({
        dimensions: dimensions
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_21__["default"]();
    _this.state = {
      data: [],
      loading: false,
      dimensions: {},
      editable: false,
      saving: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      var _this$api2 = this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('home.widget.list');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_22__["handleSuccess"])(response, function (data) {
          _this2.setState({
            data: data,
            dimensions: _this2.buildDimensions(data),
            loading: false,
            editable: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_22__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
    }
  }, {
    key: "resetDimensions",
    value: function resetDimensions() {
      var _this3 = this;

      this.setState(function (_ref) {
        var data = _ref.data;
        return {
          dimensions: _this3.buildDimensions(data)
        };
      });
    }
  }, {
    key: "buildGridItem",
    value: function buildGridItem(dimensions) {
      var editable = this.state.editable;

      var enabledKeys = lodash_keys__WEBPACK_IMPORTED_MODULE_8___default()(dimensions);

      var auth = this.props.auth;

      var items = lodash_filter__WEBPACK_IMPORTED_MODULE_7___default()(_widgets__WEBPACK_IMPORTED_MODULE_24__["default"], function (o) {
        return lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default()(o.component) && enabledKeys.includes(o.name) && (typeof o.canShow !== "function" || o.canShow(auth) || editable);
      });

      return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default()(items, function (o) {
        return o.name;
      });
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_23___default.a.name
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          intl = _this$props.intl;
      var _this$state = this.state,
          dimensions = _this$state.dimensions,
          loading = _this$state.loading,
          editable = _this$state.editable,
          saving = _this$state.saving;
      var items = this.buildGridItem(dimensions);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_25__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("title", null, this.getPageTitle())), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(items) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_4___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(components_WidgetGridLayout__WEBPACK_IMPORTED_MODULE_20__["default"], {
        dimensions: dimensions,
        key: items.length,
        onDimensionChange: this.handleDimensionChange,
        cols: columns,
        isDraggable: editable,
        isResizable: editable
      }, items.map(function (item) {
        var Component = item.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
          key: item.name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Component, {
          auth: auth,
          intl: intl
        }));
      }))) : loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_29__["default"], null), auth.can("manage_customization") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_0___default.a, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", {
          className: "mr-2 font-weight-normal"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
          defaultMessage: "Manage Widgets",
          id: "common.manage_widgets"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_2___default.a, {
          trigger: "click",
          overlayStyle: {
            maxWidth: 250
          },
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
            defaultMessage: "Layouts can be set for different screen sizes. " + "You may use your browser's developer menu to emulate different screen sizes, " + "in order to set different layouts.",
            id: "common.widgets_customization_info"
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "question-circle",
          theme: "filled"
        })))),
        extra: [!editable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: "edit",
          shape: "round",
          onClick: this.editLayout,
          icon: "edit"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
          defaultMessage: "Edit",
          id: "common.edit"
        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: "edit",
          shape: "round",
          onClick: this.saveLayout,
          icon: "save",
          type: "primary",
          loading: saving
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
          defaultMessage: "Save",
          id: "common.save"
        })))],
        avatar: {
          icon: "build",
          className: "cp-bg-primary"
        },
        className: "mt-3"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_28__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_27__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_26__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_19__["injectIntl"])(Home);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(columns, "columns", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(Home, "Home", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(columns, "columns", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(Home, "Home", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/home/widgets.js":
/*!******************************************!*\
  !*** ./resources/routes/home/widgets.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_ActiveTrades__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ActiveTrades */ "./resources/routes/home/components/ActiveTrades/index.js");
/* harmony import */ var _components_Authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Authentication */ "./resources/routes/home/components/Authentication/index.js");
/* harmony import */ var _components_BitcoinCashPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BitcoinCashPrice */ "./resources/routes/home/components/BitcoinCashPrice/index.js");
/* harmony import */ var _components_BitcoinPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BitcoinPrice */ "./resources/routes/home/components/BitcoinPrice/index.js");
/* harmony import */ var _components_DashPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DashPrice */ "./resources/routes/home/components/DashPrice/index.js");
/* harmony import */ var _components_LitecoinPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LitecoinPrice */ "./resources/routes/home/components/LitecoinPrice/index.js");
/* harmony import */ var _components_MarketplaceBuy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MarketplaceBuy */ "./resources/routes/home/components/MarketplaceBuy/index.js");
/* harmony import */ var _components_MarketplaceSell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MarketplaceSell */ "./resources/routes/home/components/MarketplaceSell/index.js");
/* harmony import */ var _components_TradeStatusChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TradeStatusChart */ "./resources/routes/home/components/TradeStatusChart/index.js");
/* harmony import */ var _components_ZcashPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ZcashPrice */ "./resources/routes/home/components/ZcashPrice/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var _default = [{
  name: 'active_trades',
  canShow: function canShow(auth) {
    return auth.check();
  },
  component: _components_ActiveTrades__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  name: 'authentication',
  canShow: function canShow(auth) {
    return !auth.check();
  },
  component: _components_Authentication__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: 'bitcoin_cash_price',
  component: _components_BitcoinCashPrice__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: 'bitcoin_price',
  component: _components_BitcoinPrice__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'dash_price',
  component: _components_DashPrice__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: 'litecoin_price',
  component: _components_LitecoinPrice__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: 'zcash_price',
  component: _components_ZcashPrice__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  name: 'marketplace_buy',
  component: _components_MarketplaceBuy__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: 'marketplace_sell',
  component: _components_MarketplaceSell__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  name: 'trade_status_chart',
  canShow: function canShow(auth) {
    return auth.check();
  },
  component: _components_TradeStatusChart__WEBPACK_IMPORTED_MODULE_8__["default"]
}];
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\widgets.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\home\\widgets.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\home\\widgets.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\home\\widgets.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=36.0fd274e76e074d7f6109.js.map