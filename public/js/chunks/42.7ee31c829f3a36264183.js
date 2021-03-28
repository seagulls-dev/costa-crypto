(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./resources/admin/components/WidgetGridLayout/index.js":
/*!**************************************************************!*\
  !*** ./resources/admin/components/WidgetGridLayout/index.js ***!
  \**************************************************************/
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
        rowHeight: rowHeight // margin={[10, 10]}
        ,
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

  reactHotLoader.register(ResponsiveLayout, "ResponsiveLayout", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(WidgetGridLayout, "WidgetGridLayout", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(ResponsiveLayout, "ResponsiveLayout", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(WidgetGridLayout, "WidgetGridLayout", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\WidgetGridLayout\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/FailedJobs/index.js":
/*!********************************************************************!*\
  !*** ./resources/admin/routes/home/components/FailedJobs/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_components_AsyncTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/components/AsyncTable */ "./resources/admin/components/AsyncTable/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/Auth */ "./resources/admin/support/Auth.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
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












var FailedJobs = /*#__PURE__*/function (_Component) {
  _inherits(FailedJobs, _Component);

  var _super = _createSuper(FailedJobs);

  function FailedJobs(props) {
    var _this;

    _classCallCheck(this, FailedJobs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.home.widget.failed-jobs.clear');

      _this.setState({
        confirmLoading: true
      });

      axios.post(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleSuccess"])(response, function () {
          _this.setState({
            confirmLoading: false
          });

          _this.table.fetchData();
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleError"])(error, function () {
          _this.setState({
            confirmLoading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showException", function (message) {
      antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        width: 1000,
        maskClosable: true,
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          style: {
            whiteSpace: 'pre-line'
          }
        }, message)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Queue",
          id: "failed_jobs.queue"
        }),
        dataIndex: 'queue'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Exception",
          id: "failed_jobs.exception"
        }),
        dataIndex: 'exception',
        render: function render(exception) {
          return Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["truncate"])(exception, 100);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Failed At",
          id: "failed_jobs.failed_at"
        }),
        dataIndex: 'failed_at',
        render: function render(date) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["formatUTCDate"])(date));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            onClick: function onClick() {
              return _this.showException(record.exception);
            },
            type: "primary",
            icon: "eye"
          });
        }
      }];
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(FailedJobs, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var confirmLoading = this.state.confirmLoading;
      var endpoint = Object(admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["route"])("admin.home.widget.failed-jobs.table");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
        styleName: "cp-card-table full-grid-item scroll",
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
          type: "danger",
          shape: "circle",
          loading: confirmLoading,
          className: "m-0",
          icon: "delete",
          onClick: this.clear
        }),
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Failed Jobs",
          id: "admin.widget.failed_jobs"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(admin_components_AsyncTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

  return FailedJobs;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new admin_support_Auth__WEBPACK_IMPORTED_MODULE_8__["default"](auth)
  };
};

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps), react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(FailedJobs);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FailedJobs, "FailedJobs", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(FailedJobs, "FailedJobs", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\FailedJobs\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/MarketplaceEarningsChart/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/admin/routes/home/components/MarketplaceEarningsChart/index.js ***!
  \**********************************************************************************/
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
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/cartesian/XAxis.js */ "./node_modules/recharts/lib/cartesian/XAxis.js");
/* harmony import */ var recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/CartesianGrid.js */ "./node_modules/recharts/lib/cartesian/CartesianGrid.js");
/* harmony import */ var recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! admin/context */ "./resources/admin/context/index.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(admin_context__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
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















var colorPalettes = admin_context__WEBPACK_IMPORTED_MODULE_16___default.a.settings.colorPalettes;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  month: {
    "id": "widget.marketplace_earnings_chart.month",
    "defaultMessage": "Month"
  },
  date: {
    "id": "widget.marketplace_earnings_chart.date",
    "defaultMessage": "Date"
  },
  amount: {
    "id": "widget.marketplace_earnings_chart.amount",
    "defaultMessage": "Amount"
  }
});

var MarketplaceEarningsChart = /*#__PURE__*/function (_Component) {
  _inherits(MarketplaceEarningsChart, _Component);

  var _super = _createSuper(MarketplaceEarningsChart);

  function MarketplaceEarningsChart(props) {
    var _this;

    _classCallCheck(this, MarketplaceEarningsChart);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeType", function (type) {
      _this.setState({
        type: type
      }, function () {
        _this.fetchData();
      });
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_17__["default"]();
    _this.state = {
      type: "month",
      data: [],
      loading: false
    };
    return _this;
  }

  _createClass(MarketplaceEarningsChart, [{
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
      var endpoint = route('admin.home.widget.marketplace-statistics.earnings-by-date-data');
      var type = this.state.type;
      this.setState({
        loading: true
      });
      axios.post(endpoint.url(), {
        type: type
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleSuccess"])(response, function (data) {
          _this2.setState({
            loading: false,
            data: data
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleError"])(error, function () {
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
      var intl = this.props.intl;
      var _this$state = this.state,
          type = _this$state.type,
          data = _this$state.data,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
        styleName: "cp-card-table full-grid-item",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Marketplace Earnings",
          id: "admin.widget.marketplace_earnings_chart"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
          onChange: this.onChangeType,
          style: {
            width: 100
          },
          value: type
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.Option, {
          value: "month"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "This Month",
          id: "widget.marketplace_earnings_chart.this_month"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.Option, {
          value: "year"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "This Year",
          id: "widget.marketplace_earnings_chart.this_year"
        })))
      }, !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(data) && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14___default.a, {
        margin: {
          top: 20,
          right: 10,
          left: 10,
          bottom: 20
        },
        data: data
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
        dataKey: "date",
        hide: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "monotone",
        name: intl.formatMessage(messages.amount),
        fill: colorPalettes['@primary-color'],
        stroke: colorPalettes['@primary-color'],
        dataKey: "amount"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default.a, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "frown",
          twoToneColor: colorPalettes['@primary-color'],
          theme: "twoTone"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "text-muted"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "widget.marketplace_earnings_chart.no_data",
          defaultMessage: "No Data Yet."
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

  return MarketplaceEarningsChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_7__["injectIntl"])(MarketplaceEarningsChart);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(MarketplaceEarningsChart, "MarketplaceEarningsChart", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(MarketplaceEarningsChart, "MarketplaceEarningsChart", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceEarningsChart\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/MarketplaceStatistics/index.js":
/*!*******************************************************************************!*\
  !*** ./resources/admin/routes/home/components/MarketplaceStatistics/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var MarketplaceStatistics = /*#__PURE__*/function (_Component) {
  _inherits(MarketplaceStatistics, _Component);

  var _super = _createSuper(MarketplaceStatistics);

  function MarketplaceStatistics(props) {
    var _this;

    _classCallCheck(this, MarketplaceStatistics);

    _this = _super.call(this, props);
    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_5__["default"]();
    _this.state = {
      totalOffers: 0,
      totalActiveTrades: 0,
      totalSuccessfulTrades: 0,
      totalDisputeTrades: 0,
      totalCancelledTrades: 0,
      loading: false
    };
    return _this;
  }

  _createClass(MarketplaceStatistics, [{
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
      var endpoint = route('admin.home.widget.marketplace-statistics.data');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleSuccess"])(response, function (data) {
          _this2.setState({
            totalOffers: data.total_offers || 0,
            totalActiveTrades: data.total_active_trades || 0,
            totalSuccessfulTrades: data.total_successful_trades || 0,
            totalDisputeTrades: data.total_dispute_trades || 0,
            totalCancelledTrades: data.total_cancelled_trades || 0,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error, function () {
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
          totalOffers = _this$state.totalOffers,
          totalActiveTrades = _this$state.totalActiveTrades,
          totalSuccessfulTrades = _this$state.totalSuccessfulTrades,
          totalDisputeTrades = _this$state.totalDisputeTrades,
          totalCancelledTrades = _this$state.totalCancelledTrades,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
        styleName: "full-grid-item cp-card-full",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Marketplace Statistics",
          id: "admin.widget.marketplace_statistics"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "cp-list-group m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-clock fs-lg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "{total} Active Trades",
        id: "admin.widget.marketplace_statistics.active_trades",
        values: {
          total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, Object(millify__WEBPACK_IMPORTED_MODULE_4__["default"])(totalActiveTrades))
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-check-circle fs-lg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "{total} Successful Trades",
        id: "admin.widget.marketplace_statistics.successful_trades",
        values: {
          total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, Object(millify__WEBPACK_IMPORTED_MODULE_4__["default"])(totalSuccessfulTrades))
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-exclamation-triangle fs-lg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "{total} Disputed Trades",
        id: "admin.widget.marketplace_statistics.disputed_trades",
        values: {
          total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, Object(millify__WEBPACK_IMPORTED_MODULE_4__["default"])(totalDisputeTrades))
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-stop fs-lg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "{total} Cancelled Trades",
        id: "admin.widget.marketplace_statistics.cancelled_trades",
        values: {
          total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, Object(millify__WEBPACK_IMPORTED_MODULE_4__["default"])(totalCancelledTrades))
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-briefcase fs-lg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "{total} Offers",
        id: "admin.widget.marketplace_statistics.offers",
        values: {
          total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, Object(millify__WEBPACK_IMPORTED_MODULE_4__["default"])(totalOffers))
        }
      })))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MarketplaceStatistics;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = MarketplaceStatistics;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MarketplaceStatistics, "MarketplaceStatistics", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(MarketplaceStatistics, "MarketplaceStatistics", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\MarketplaceStatistics\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/TotalRevenue/index.js":
/*!**********************************************************************!*\
  !*** ./resources/admin/routes/home/components/TotalRevenue/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var TotalRevenue = /*#__PURE__*/function (_Component) {
  _inherits(TotalRevenue, _Component);

  var _super = _createSuper(TotalRevenue);

  function TotalRevenue(props) {
    var _this;

    _classCallCheck(this, TotalRevenue);

    _this = _super.call(this, props);
    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.state = {
      totalEarnings: 0,
      formattedTotalEarnings: "",
      loading: false,
      currency: "USD"
    };
    return _this;
  }

  _createClass(TotalRevenue, [{
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
      var endpoint = route('admin.home.widget.statistics.total-earnings');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(response, function (data) {
          _this2.setState({
            totalEarnings: data.total_earnings || 0,
            formattedTotalEarnings: data.formatted_total_earnings || "",
            loading: false,
            currency: data.currency || "USD"
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_5__["handleError"])(error, function () {
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
          loading = _this$state.loading,
          formattedTotalEarnings = _this$state.formattedTotalEarnings;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
        styleName: "cp-card-full p-4 text-center m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-media align-items-center flex-nowrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-funnel-dollar fs-3x"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "fs-xxl font-weight-semi-bold mb-2"
      }, formattedTotalEarnings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Total Revenue",
        id: "admin.total_revenue"
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TotalRevenue;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = TotalRevenue;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TotalRevenue, "TotalRevenue", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(TotalRevenue, "TotalRevenue", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalRevenue\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/TotalUsers/index.js":
/*!********************************************************************!*\
  !*** ./resources/admin/routes/home/components/TotalUsers/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var TotalUsers = /*#__PURE__*/function (_Component) {
  _inherits(TotalUsers, _Component);

  var _super = _createSuper(TotalUsers);

  function TotalUsers(props) {
    var _this;

    _classCallCheck(this, TotalUsers);

    _this = _super.call(this, props);
    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _this.state = {
      total: 0,
      loading: false
    };
    return _this;
  }

  _createClass(TotalUsers, [{
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
      var endpoint = route('admin.home.widget.statistics.total-users');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_5__["handleSuccess"])(response, function (data) {
          _this2.setState({
            total: data.total || 0,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_5__["handleError"])(error, function () {
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
          total = _this$state.total,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
        styleName: "cp-card-full p-4 text-center m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-media align-items-center flex-nowrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-user-plus fs-3x"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "fs-xxl font-weight-semi-bold mb-2"
      }, Object(millify__WEBPACK_IMPORTED_MODULE_3__["default"])(total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Total Users",
        id: "admin.total_users"
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TotalUsers;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = TotalUsers;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TotalUsers, "TotalUsers", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(TotalUsers, "TotalUsers", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\TotalUsers\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/UserRegistrationsChart/index.js":
/*!********************************************************************************!*\
  !*** ./resources/admin/routes/home/components/UserRegistrationsChart/index.js ***!
  \********************************************************************************/
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
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts/lib/cartesian/YAxis.js */ "./node_modules/recharts/lib/cartesian/YAxis.js");
/* harmony import */ var recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts/lib/cartesian/XAxis.js */ "./node_modules/recharts/lib/cartesian/XAxis.js");
/* harmony import */ var recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts/lib/component/Tooltip.js */ "./node_modules/recharts/lib/component/Tooltip.js");
/* harmony import */ var recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/cartesian/CartesianGrid.js */ "./node_modules/recharts/lib/cartesian/CartesianGrid.js");
/* harmony import */ var recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts/lib/chart/AreaChart.js */ "./node_modules/recharts/lib/chart/AreaChart.js");
/* harmony import */ var recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts/lib/cartesian/Area.js */ "./node_modules/recharts/lib/cartesian/Area.js");
/* harmony import */ var recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! admin/context */ "./resources/admin/context/index.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(admin_context__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
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















var colorPalettes = admin_context__WEBPACK_IMPORTED_MODULE_16___default.a.settings.colorPalettes;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  date: {
    "id": "widget.user_registrations_chart.date",
    "defaultMessage": "Date"
  },
  month: {
    "id": "widget.user_registrations_chart.month",
    "defaultMessage": "Month"
  },
  total: {
    "id": "widget.user_registrations_chart.total",
    "defaultMessage": "Total"
  }
});

var UserRegistrationsChart = /*#__PURE__*/function (_Component) {
  _inherits(UserRegistrationsChart, _Component);

  var _super = _createSuper(UserRegistrationsChart);

  function UserRegistrationsChart(props) {
    var _this;

    _classCallCheck(this, UserRegistrationsChart);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeType", function (type) {
      _this.setState({
        type: type
      }, function () {
        _this.fetchData();
      });
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_17__["default"]();
    _this.state = {
      type: "month",
      data: [],
      loading: false
    };
    return _this;
  }

  _createClass(UserRegistrationsChart, [{
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
      var endpoint = route('admin.home.widget.user-statistics.registrations-by-date-data');
      var type = this.state.type;
      this.setState({
        loading: true
      });
      axios.post(endpoint.url(), {
        type: type
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleSuccess"])(response, function (data) {
          _this2.setState({
            loading: false,
            data: data
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleError"])(error, function () {
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
      var intl = this.props.intl;
      var _this$state = this.state,
          type = _this$state.type,
          data = _this$state.data,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
        styleName: "cp-card-table full-grid-item",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "User Registrations",
          id: "admin.widget.user_registrations_chart"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
          onChange: this.onChangeType,
          style: {
            width: 100
          },
          value: type
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.Option, {
          value: "month"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "This Month",
          id: "widget.user_registrations_chart.this_month"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.Option, {
          value: "year"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "This Year",
          id: "widget.user_registrations_chart.this_year"
        })))
      }, !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(data) && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_12___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_chart_AreaChart_js__WEBPACK_IMPORTED_MODULE_14___default.a, {
        margin: {
          top: 20,
          right: 10,
          left: 10,
          bottom: 20
        },
        data: data
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_XAxis_js__WEBPACK_IMPORTED_MODULE_10___default.a, {
        dataKey: "date",
        hide: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_CartesianGrid_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_YAxis_js__WEBPACK_IMPORTED_MODULE_9___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_component_Tooltip_js__WEBPACK_IMPORTED_MODULE_11___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts_lib_cartesian_Area_js__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "monotone",
        name: intl.formatMessage(messages.total),
        fill: colorPalettes['@primary-color'],
        stroke: colorPalettes['@primary-color'],
        dataKey: "total"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default.a, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "frown",
          twoToneColor: colorPalettes['@primary-color'],
          theme: "twoTone"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "text-muted"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "widget.user_registrations_chart.no_data",
          defaultMessage: "No Data Yet."
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

  return UserRegistrationsChart;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_7__["injectIntl"])(UserRegistrationsChart);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(UserRegistrationsChart, "UserRegistrationsChart", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(UserRegistrationsChart, "UserRegistrationsChart", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\UserRegistrationsChart\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/components/WelcomeCard/index.js":
/*!*********************************************************************!*\
  !*** ./resources/admin/routes/home/components/WelcomeCard/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/components/UserAvatar */ "./resources/admin/components/UserAvatar/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/Auth */ "./resources/admin/support/Auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_11__["defineMessages"])({
  profile: {
    "id": "admin.profile",
    "defaultMessage": "Profile"
  },
  settings: {
    "id": "admin.settings",
    "defaultMessage": "Settings"
  }
});

var WelcomeCard = /*#__PURE__*/function (_Component) {
  _inherits(WelcomeCard, _Component);

  var _super = _createSuper(WelcomeCard);

  function WelcomeCard() {
    _classCallCheck(this, WelcomeCard);

    return _super.apply(this, arguments);
  }

  _createClass(WelcomeCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          superAdminRole = _this$props.superAdminRole,
          intl = _this$props.intl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        styleName: "cp-card-full py-3 m-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "text-center px-3 pt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "d-flex justify-content-around align-items-center mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3___default.a, {
        title: intl.formatMessage(messages.settings)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/profile/".concat(auth.user.name, "/settings")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "la la-cog cp-fs-xxl cp-text-grey"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(admin_components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        user: auth.user,
        showPresence: false,
        size: 80
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3___default.a, {
        title: intl.formatMessage(messages.profile)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "/profile/".concat(auth.user.name)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "la la-user cp-fs-xxl cp-text-grey"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
        defaultMessage: "Welcome, {name}",
        id: "admin.widget.welcome_card.greetings",
        values: {
          name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, auth.user.name)
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "cp-text-grey mb-4"
      }, auth.user.all_roles.map(function (role) {
        return role === superAdminRole ? lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default()(role) : role;
      }).join(", ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "mb-3"
      }, auth.user.last_login_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "mb-1 d-flex align-items-center justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "la la-clock cp-fs-lg mr-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
        defaultMessage: "Login: {date}",
        id: "admin.widget.welcome_card.last_login",
        values: {
          date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            className: "font-weight-medium"
          }, Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["utcDateCalendarTime"])(auth.user.last_login_at))
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "mb-1 d-flex align-items-center justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "la la-money-bill cp-fs-lg mr-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "mr-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
        defaultMessage: "Currency: {currency}",
        id: "admin.widget.welcome_card.currency",
        values: {
          currency: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, auth.user.currency)
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a, {
        trigger: "click",
        overlayStyle: {
          maxWidth: 250
        },
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
          defaultMessage: "Financial statistics will be shown to you in your base currency. " + "You can update this in your settings.",
          id: "admin.widget.welcome_card.currency_info"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "question-circle",
        theme: "filled"
      }))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return WelcomeCard;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    superAdminRole: auth.superAdminRole,
    auth: new admin_support_Auth__WEBPACK_IMPORTED_MODULE_8__["default"](auth)
  };
};

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps), react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"], react_intl__WEBPACK_IMPORTED_MODULE_11__["injectIntl"])(WelcomeCard);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(WelcomeCard, "WelcomeCard", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(WelcomeCard, "WelcomeCard", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\components\\WelcomeCard\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/index.js":
/*!**********************************************!*\
  !*** ./resources/admin/routes/home/index.js ***!
  \**********************************************/
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
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_components_WidgetGridLayout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! admin/components/WidgetGridLayout */ "./resources/admin/components/WidgetGridLayout/index.js");
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./widgets */ "./resources/admin/routes/home/widgets.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Auth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! admin/support/Auth */ "./resources/admin/support/Auth.js");
/* harmony import */ var admin_components_Loading__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! admin/components/Loading */ "./resources/admin/components/Loading/index.js");
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
  layoutSaved: {
    "id": "admin.layout_saved",
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
      var endpoint = route('admin.home.widget.set-dimensions');
      axios.post(endpoint.url(), {
        dimensions: dimensions
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleSuccess"])(response, function () {
          _this.setState({
            saving: false
          });

          _this.fetchData();
        }, intl.formatMessage(messages.layoutSaved));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleError"])(error, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_20__["default"]();
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
      var endpoint = route('admin.home.widget.list');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleSuccess"])(response, function (data) {
          _this2.setState({
            data: data,
            dimensions: _this2.buildDimensions(data),
            loading: false,
            editable: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleError"])(error, function () {
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

      var items = lodash_filter__WEBPACK_IMPORTED_MODULE_7___default()(_widgets__WEBPACK_IMPORTED_MODULE_23__["default"], function (o) {
        return lodash_isObject__WEBPACK_IMPORTED_MODULE_6___default()(o.component) && enabledKeys.includes(o.name) && (typeof o.canShow !== "function" || o.canShow(auth) || editable);
      });

      return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_5___default()(items, function (o) {
        return o.name;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_18___default.a.Fragment, null, !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(items) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_4___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(admin_components_WidgetGridLayout__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
      }))) : loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(admin_components_Loading__WEBPACK_IMPORTED_MODULE_27__["default"], null), auth.can("manage_customization") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_page_header__WEBPACK_IMPORTED_MODULE_0___default.a, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", {
          className: "mr-2 font-weight-normal"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
          defaultMessage: "Manage Widgets",
          id: "admin.manage_widgets"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_2___default.a, {
          trigger: "click",
          overlayStyle: {
            maxWidth: 250
          },
          content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
            defaultMessage: "Layouts can be set for different screen sizes. " + "You may use your browser's developer menu to emulate different screen sizes, " + "in order to set different layouts.",
            id: "admin.widgets_customization_info"
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
    auth: new admin_support_Auth__WEBPACK_IMPORTED_MODULE_26__["default"](auth)
  };
};

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_25__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_24__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_19__["injectIntl"])(Home);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(columns, "columns", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(Home, "Home", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(columns, "columns", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(Home, "Home", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/home/widgets.js":
/*!************************************************!*\
  !*** ./resources/admin/routes/home/widgets.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_WelcomeCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/WelcomeCard */ "./resources/admin/routes/home/components/WelcomeCard/index.js");
/* harmony import */ var _components_TotalUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TotalUsers */ "./resources/admin/routes/home/components/TotalUsers/index.js");
/* harmony import */ var _components_TotalRevenue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TotalRevenue */ "./resources/admin/routes/home/components/TotalRevenue/index.js");
/* harmony import */ var _components_MarketplaceEarningsChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MarketplaceEarningsChart */ "./resources/admin/routes/home/components/MarketplaceEarningsChart/index.js");
/* harmony import */ var _components_MarketplaceStatistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MarketplaceStatistics */ "./resources/admin/routes/home/components/MarketplaceStatistics/index.js");
/* harmony import */ var _components_UserRegistrationsChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UserRegistrationsChart */ "./resources/admin/routes/home/components/UserRegistrationsChart/index.js");
/* harmony import */ var _components_FailedJobs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FailedJobs */ "./resources/admin/routes/home/components/FailedJobs/index.js");
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
  name: 'welcome_card',
  component: _components_WelcomeCard__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  name: 'total_users',
  component: _components_TotalUsers__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: 'total_revenue',
  component: _components_TotalRevenue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: 'marketplace_earnings_chart',
  component: _components_MarketplaceEarningsChart__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'marketplace_statistics',
  component: _components_MarketplaceStatistics__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: 'user_registrations_chart',
  component: _components_UserRegistrationsChart__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: 'failed_jobs',
  component: _components_FailedJobs__WEBPACK_IMPORTED_MODULE_6__["default"]
}];
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\widgets.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\widgets.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\widgets.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\home\\widgets.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=42.7ee31c829f3a36264183.js.map