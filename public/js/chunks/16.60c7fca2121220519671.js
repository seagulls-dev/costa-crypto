(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/admin/components/PageTabs/index.js":
/*!******************************************************!*\
  !*** ./resources/admin/components/PageTabs/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/constants/ThemeSettings */ "./resources/admin/constants/ThemeSettings.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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







var PageTabs = /*#__PURE__*/function (_Component) {
  _inherits(PageTabs, _Component);

  var _super = _createSuper(PageTabs);

  function PageTabs() {
    var _this;

    _classCallCheck(this, PageTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onTabChange", function (value) {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem(_this.getStorageKey(), value);
      }
    });

    return _this;
  }

  _createClass(PageTabs, [{
    key: "getStorageKey",
    value: function getStorageKey() {
      return "page.tab(".concat(this.props.location.pathname, ")");
    }
  }, {
    key: "getTabPosition",
    value: function getTabPosition() {
      var width = this.props.windowSize.width;

      if (width && width < admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_3__["TAB_BREAKPOINT"]) {
        return 'top';
      } else {
        return 'left';
      }
    }
  }, {
    key: "getDefaultActiveKey",
    value: function getDefaultActiveKey() {
      var activeKey = undefined;

      if (typeof sessionStorage !== "undefined") {
        activeKey = sessionStorage.getItem(this.getStorageKey()) || undefined;
      }

      return activeKey;
    }
  }, {
    key: "render",
    value: function render() {
      var defaultActiveKey = this.getDefaultActiveKey();
      var attributes = {};

      if (defaultActiveKey) {
        attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()(attributes, {
          defaultActiveKey: defaultActiveKey
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({
        onChange: this.onTabChange,
        tabPosition: this.getTabPosition()
      }, attributes, this.props));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PageTabs;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var windowSize = _ref.settings.windowSize;
  return {
    windowSize: windowSize
  };
};

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps), react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(PageTabs);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageTabs, "PageTabs", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_extends, "_extends", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(PageTabs, "PageTabs", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\PageTabs\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=16.60c7fca2121220519671.js.map