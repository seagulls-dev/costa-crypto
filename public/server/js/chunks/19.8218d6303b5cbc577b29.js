exports.ids = [19];
exports.modules = {

/***/ "./resources/components/ConfirmAction/index.js":
/*!*****************************************************!*\
  !*** ./resources/components/ConfirmAction/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popconfirm */ "./node_modules/antd/lib/popconfirm/index.js");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var ConfirmAction = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmAction, _Component);

  var _super = _createSuper(ConfirmAction);

  function ConfirmAction() {
    _classCallCheck(this, ConfirmAction);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmAction, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Are you sure?",
          id: "common.popconfirm_title"
        }),
        cancelText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "No",
          id: "common.no"
        }),
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Yes",
          id: "common.yes"
        })
      }, this.props));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ConfirmAction;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = ConfirmAction;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfirmAction, "ConfirmAction", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_extends, "_extends", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(ConfirmAction, "ConfirmAction", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\components\\ConfirmAction\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/contacts/components/Context/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/routes/profile/components/contacts/components/Context/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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







var Context = /*#__PURE__*/function (_Component) {
  _inherits(Context, _Component);

  var _super = _createSuper(Context);

  function Context() {
    var _this;

    _classCallCheck(this, Context);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "trustContact", function () {
      var _this$props = _this.props,
          status = _this$props.status,
          auth = _this$props.auth;
      if (status === 'block') return null;
      return !status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "trust",
        onClick: _this.trust
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-star"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Trust",
        id: "profile.trust"
      }))) : status === 'trust' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "untrust",
        onClick: _this.resetStatus
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-star-o"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Untrust",
        id: "profile.untrust"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "blockContact", function () {
      var _this$props2 = _this.props,
          status = _this$props2.status,
          auth = _this$props2.auth;
      if (status === 'trust') return null;
      return !status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "block",
        onClick: _this.block
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-ban"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Block",
        id: "profile.block"
      }))) : status === 'block' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "unblock",
        onClick: _this.resetStatus
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-check-circle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Unblock",
        id: "profile.unblock"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "deleteContact", function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        key: "delete",
        onClick: _this["delete"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-trash"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        defaultMessage: "Delete",
        id: "common.delete"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "delete", function () {
      var _this$props3 = _this.props,
          onDelete = _this$props3.onDelete,
          item = _this$props3.item;
      if (onDelete) onDelete(item);
    });

    _defineProperty(_assertThisInitialized(_this), "trust", function () {
      var _this$props4 = _this.props,
          onTrust = _this$props4.onTrust,
          item = _this$props4.item;
      if (onTrust) onTrust(item);
    });

    _defineProperty(_assertThisInitialized(_this), "block", function () {
      var _this$props5 = _this.props,
          onBlock = _this$props5.onBlock,
          item = _this$props5.item;
      if (onBlock) onBlock(item);
    });

    _defineProperty(_assertThisInitialized(_this), "resetStatus", function () {
      var _this$props6 = _this.props,
          onResetStatus = _this$props6.onResetStatus,
          item = _this$props6.item;
      if (onResetStatus) onResetStatus(item);
    });

    return _this;
  }

  _createClass(Context, [{
    key: "getMenu",
    value: function getMenu() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, null, this.trustContact(), this.blockContact(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Divider, null), this.deleteContact());
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0___default.a, {
        trigger: ['click'],
        placement: "bottomRight",
        overlay: this.getMenu(),
        children: children
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

  return Context;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_4__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(Context);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Context, "Context", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(Context, "Context", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\Context\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/contacts/components/UserList/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/routes/profile/components/contacts/components/UserList/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
/* harmony import */ var components_UserRating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UserRating */ "./resources/components/UserRating/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Context */ "./resources/routes/profile/components/contacts/components/Context/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_Flag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Flag */ "./resources/components/Flag/index.js");
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










var Item = antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item;
var ItemMeta = Item.Meta;

var UserList = /*#__PURE__*/function (_Component) {
  _inherits(UserList, _Component);

  var _super = _createSuper(UserList);

  function UserList() {
    var _this;

    _classCallCheck(this, UserList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onSelectData", function (e) {
      var onSelectData = _this.props.onSelectData;
      if (onSelectData) onSelectData(e);
    });

    _defineProperty(_assertThisInitialized(_this), "trust", function (item) {
      var onTrust = _this.props.onTrust;
      if (onTrust) onTrust(item);
    });

    _defineProperty(_assertThisInitialized(_this), "delete", function (item) {
      var onDelete = _this.props.onDelete;
      if (onDelete) onDelete(item);
    });

    _defineProperty(_assertThisInitialized(_this), "block", function (item) {
      var onBlock = _this.props.onBlock;
      if (onBlock) onBlock(item);
    });

    _defineProperty(_assertThisInitialized(_this), "resetStatus", function (item) {
      var onResetStatus = _this.props.onResetStatus;
      if (onResetStatus) onResetStatus(item);
    });

    return _this;
  }

  _createClass(UserList, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(nextProps, this.props) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(nextState, this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          selectedData = _this$props.selectedData;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
        dataSource: data,
        rowKey: function rowKey(record) {
          return record.id;
        },
        renderItem: function renderItem(item) {
          var lastSeen = item.last_seen_at;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
            className: "cp-card-list"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
            className: "px-3",
            actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "d-none d-sm-flex"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
              className: "cp-icon-btn",
              checked: lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(selectedData, item.id),
              value: item.id,
              onChange: _this2.onSelectData
            })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_11__["default"], {
              status: item.pivot.status,
              onDelete: _this2["delete"],
              onTrust: _this2.trust,
              item: item,
              onResetStatus: _this2.resetStatus,
              onBlock: _this2.block
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
              className: "cp-icon-btn d-flex cp-fs-xxl la la-ellipsis-h"
            }))]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ItemMeta, {
            avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
              size: "large",
              user: item
            }),
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "mr-2"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
              to: "/profile/".concat(item.name)
            }, " ", item.name, " ")), item.pivot.status === "block" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
              className: "la la-ban cp-text-red mr-2"
            }), item.pivot.status === "trust" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
              className: "la la-star cp-text-green mr-2"
            }), item.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Flag__WEBPACK_IMPORTED_MODULE_13__["default"], {
              code: item.location.iso_code
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "border-left pl-3 d-none d-sm-inline"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_UserRating__WEBPACK_IMPORTED_MODULE_10__["default"], {
              value: item.average_marketplace_rating
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "ml-2"
            }, "(", Object(millify__WEBPACK_IMPORTED_MODULE_9__["default"])(item.total_marketplace_rating), ")")))),
            description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "d-inline-block mr-2"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "font-weight-bold"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
              defaultMessage: "Successful Trades",
              id: "profile.successful_trades"
            }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "ml-2"
            }, Object(millify__WEBPACK_IMPORTED_MODULE_9__["default"])(item.marketplace_stats.total_successful_trades)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "d-inline"
            }, ",")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "d-inline-block mr-2"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "font-weight-bold"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
              defaultMessage: "Offers",
              id: "profile.offers"
            }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "ml-2"
            }, Object(millify__WEBPACK_IMPORTED_MODULE_9__["default"])(item.marketplace_stats.total_offers)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "d-none d-sm-inline"
            }, ",")), lastSeen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "d-none d-sm-inline-block"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
              className: "mr-2 font-weight-bold"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
              defaultMessage: "Last Seen",
              id: "profile.last_seen"
            }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_7__["utcDateCalendarTime"])(lastSeen))))
          })));
        }
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

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = UserList;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Item, "Item", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(ItemMeta, "ItemMeta", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(UserList, "UserList", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(Item, "Item", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(ItemMeta, "ItemMeta", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(UserList, "UserList", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\components\\UserList\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/contacts/index.js":
/*!***************************************************************!*\
  !*** ./resources/routes/profile/components/contacts/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/remove */ "./node_modules/lodash/remove.js");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/difference */ "./node_modules/lodash/difference.js");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_Helpers_Pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/Helpers/Pagination */ "./resources/support/Helpers/Pagination/index.js");
/* harmony import */ var components_ConfirmAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/ConfirmAction */ "./resources/components/ConfirmAction/index.js");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/UserList */ "./resources/routes/profile/components/contacts/components/UserList/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_25__);
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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
















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_12__["defineMessages"])({
  searchUsers: {
    "id": "profile.contacts.search_users_placeholder",
    "defaultMessage": "Search users..."
  },
  actionSuccessful: {
    "id": "profile.contacts.action_successful",
    "defaultMessage": "Your action was successful."
  },
  chooseDate: {
    "id": "profile.contacts.choose_date_placeholder",
    "defaultMessage": "Choose date..."
  },
  invalidInput: {
    "id": "profile.contacts.invalid_input_message",
    "defaultMessage": "You input was invalid, please try again!"
  },
  pageTitle: {
    "id": "meta.title.profile_contacts",
    "defaultMessage": "Contacts - Profile | {name}"
  }
});

var Contacts = /*#__PURE__*/function (_Component) {
  _inherits(Contacts, _Component);

  var _super = _createSuper(Contacts);

  function Contacts(props) {
    var _this;

    _classCallCheck(this, Contacts);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onToggleDrawer", function () {
      _this.setState(function (state) {
        return {
          drawerState: !state.drawerState
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchContacts", function () {
      var _this$state = _this.state,
          params = _this$state.params,
          filters = _this$state.filters;

      var nextParams = _objectSpread(_objectSpread({}, params), {}, {
        current: 1
      });

      _this.setState({
        loading: true
      });

      _this.pagination.fetchData(nextParams, filters, function (page) {
        _this.setState(function () {
          return {
            data: page.data,
            loading: false,
            hasMore: Boolean(page.links.next),
            params: _objectSpread(_objectSpread({}, nextParams), {}, {
              total: page.meta.total
            })
          };
        });
      }, function () {
        _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadMore", function () {
      if (!_this.canLoadMore()) return;
      var _this$state2 = _this.state,
          params = _this$state2.params,
          filters = _this$state2.filters;

      var nextParams = _objectSpread(_objectSpread({}, params), {}, {
        current: params.current + 1
      });

      _this.setState({
        loadingMore: true
      });

      _this.pagination.fetchData(nextParams, filters, function (page) {
        _this.setState(function (_ref) {
          var data = _ref.data;
          return {
            data: data.concat(page.data),
            params: _objectSpread(_objectSpread({}, nextParams), {}, {
              total: page.meta.total
            }),
            loadingMore: false,
            hasMore: Boolean(page.links.next)
          };
        });
      }, function () {
        _this.setState({
          loadingMore: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectData", function (e) {
      var checkbox = e.target;

      if (!checkbox.checked) {
        _this.setState(function (_ref2) {
          var selectedData = _ref2.selectedData;
          return {
            selectedData: lodash_difference__WEBPACK_IMPORTED_MODULE_10___default()(selectedData, [checkbox.value])
          };
        });
      } else {
        _this.setState(function (_ref3) {
          var selectedData = _ref3.selectedData;
          return {
            selectedData: lodash_union__WEBPACK_IMPORTED_MODULE_9___default()(selectedData, [checkbox.value])
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAllData", function (e) {
      _this.setState({
        selectedData: e.target.checked ? _this.dataKeys() : []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (e) {
      clearTimeout(_this.searching);
      var value = e.target.value;
      var _this$state3 = _this.state,
          params = _this$state3.params,
          filters = _this$state3.filters;
      if (!_this.canSearchContact()) return;

      _this.setState({
        filters: lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(filters, {
          name: value
        }),
        params: lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(params, {
          current: 1
        })
      });

      _this.searching = setTimeout(_this.fetchContacts, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchKeyUp", function (e) {
      if (e.key === 'Enter') {
        clearTimeout(_this.searching);

        _this.fetchContacts();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "applyStatusFilter", function (status) {
      var _this$state4 = _this.state,
          loading = _this$state4.loading,
          loadingMore = _this$state4.loadingMore;
      if (loading || loadingMore) return;

      _this.setState({
        params: lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(_this.state.params, {
          current: 1
        }),
        filters: lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(_this.state.filters, {
          status: status
        })
      }, function () {
        _this.fetchContacts();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearStatusFilter", function () {
      var _this$state5 = _this.state,
          loading = _this$state5.loading,
          loadingMore = _this$state5.loadingMore;
      if (loading || loadingMore) return;

      _this.setState({
        params: lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(_this.state.params, {
          current: 1
        }),
        filters: lodash_assign__WEBPACK_IMPORTED_MODULE_8___default()(_this.state.filters, {
          status: null
        })
      }, function () {
        _this.fetchContacts();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "trust", function (item) {
      var filters = _this.state.filters;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var _this$props = _this.props,
          intl = _this$props.intl,
          auth = _this$props.auth;
      var endpoint = route('user.contacts.trust', {
        'name': auth.user.name
      });
      axios.post(endpoint.url(), {
        id: item.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleSuccess"])(response, function (data) {
          if (!filters.status || filters.status === "trust") {
            _this.updateItem(data);
          } else {
            _this.removeItem(item);
          }
        }, intl.formatMessage(messages.actionSuccessful));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "delete", function (item) {
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var _this$props2 = _this.props,
          intl = _this$props2.intl,
          auth = _this$props2.auth;
      var endpoint = route('user.contacts.remove', {
        'name': auth.user.name
      });
      axios.post(endpoint.url(), {
        id: item.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleSuccess"])(response, function (data) {
          _this.removeItem(item);
        }, intl.formatMessage(messages.actionSuccessful));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAll", function () {
      var _this$api3 = _this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var _this$props3 = _this.props,
          intl = _this$props3.intl,
          auth = _this$props3.auth;
      var endpoint = route('user.contacts.batch-remove', {
        'name': auth.user.name
      });
      var selectedData = _this.state.selectedData;
      axios.post(endpoint.url(), {
        users: selectedData
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleSuccess"])(response, function (data) {
          _this.fetchContacts();
        }, intl.formatMessage(messages.actionSuccessful));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "block", function (item) {
      var filters = _this.state.filters;
      var _this$api4 = _this.api,
          axios = _this$api4.axios,
          route = _this$api4.route;
      var _this$props4 = _this.props,
          intl = _this$props4.intl,
          auth = _this$props4.auth;
      var endpoint = route('user.contacts.block', {
        'name': auth.user.name
      });
      axios.post(endpoint.url(), {
        id: item.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleSuccess"])(response, function (data) {
          if (!filters.status || filters.status === "block") {
            _this.updateItem(data);
          } else {
            _this.removeItem(item);
          }
        }, intl.formatMessage(messages.actionSuccessful));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetStatus", function (item) {
      var filters = _this.state.filters;
      var _this$api5 = _this.api,
          axios = _this$api5.axios,
          route = _this$api5.route;
      var _this$props5 = _this.props,
          intl = _this$props5.intl,
          auth = _this$props5.auth;
      var endpoint = route('user.contacts.reset-status', {
        'name': auth.user.name
      });
      axios.post(endpoint.url(), {
        id: item.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleSuccess"])(response, function (data) {
          if (!filters.status) {
            _this.updateItem(data);
          } else {
            _this.removeItem(item);
          }
        }, intl.formatMessage(messages.actionSuccessful));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setScrollWrapper", function (ref) {
      if (ref !== _this.scrollWrapper && ref !== null) {
        var simpleBar = new simplebar__WEBPACK_IMPORTED_MODULE_23__["default"](ref);
        _this.scrollParent = simpleBar.getScrollElement();
        _this.scrollWrapper = ref;
      }
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_13__["default"]();
    _this.state = {
      drawerState: false,
      data: [],
      filters: {
        name: "",
        status: null
      },
      hasMore: false,
      selectedData: [],
      params: {
        total: 0,
        pageSize: 20,
        current: 1
      },
      loading: false,
      loadingMore: false
    };

    var _route = _this.api.route('user.contacts.table', {
      name: props.match.params.name
    }).url();

    _this.pagination = new support_Helpers_Pagination__WEBPACK_IMPORTED_MODULE_14__["default"](_this.api, _route);
    return _this;
  }

  _createClass(Contacts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchContacts();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "canLoadMore",
    value: function canLoadMore() {
      var _this$state6 = this.state,
          hasMore = _this$state6.hasMore,
          loadingMore = _this$state6.loadingMore,
          loading = _this$state6.loading;
      return hasMore && !loadingMore && !loading;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var matchParams = this.props.match.params;
      var prevMatchParams = prevProps.match.params;

      if (matchParams.name !== prevMatchParams.name) {
        this.fetchContacts();
        console.log('Updated Contacts');
      }
    }
  }, {
    key: "dataKeys",
    value: function dataKeys() {
      return lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(this.state.data, 'id');
    }
  }, {
    key: "updateItem",
    value: function updateItem(item) {
      var data = this.state.data;

      var index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_6___default()(data, function (o) {
        return o.id === item.id;
      });

      var newData = _toConsumableArray(data);

      if (index >= 0) newData[index] = item;
      this.setState({
        data: newData
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      var data = this.state.data;

      var index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_6___default()(data, function (o) {
        return o.id === item.id;
      });

      var newData = _toConsumableArray(data);

      if (index >= 0) {
        lodash_remove__WEBPACK_IMPORTED_MODULE_5___default()(newData, function (v, i) {
          return i === index;
        });
      }

      this.setState({
        data: newData
      });
    }
  }, {
    key: "canSearchContact",
    value: function canSearchContact() {
      var _this$state7 = this.state,
          loading = _this$state7.loading,
          loadingMore = _this$state7.loadingMore;
      return !loading && !loadingMore;
    }
  }, {
    key: "sidebarComponent",
    value: function sidebarComponent() {
      var _this2 = this;

      var _this$props6 = this.props,
          auth = _this$props6.auth,
          match = _this$props6.match;
      var filters = this.state.filters;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-side"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-side-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-logo"
      }, auth.user.name !== match.params.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Contacts",
        id: "profile.contacts"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "My Contacts",
        id: "profile.my_contacts"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-side-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-side-scroll",
        "data-simplebar": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-side-nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "cp-module-nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mx-4 mb-3 cp-fs-lg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Filter By Status",
        id: "admin.filter_by_status"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "cp-nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "cp-link ".concat(filters.status ? "" : "active"),
        onClick: this.clearStatusFilter
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "la la-list"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "All",
        id: "common.all"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this2.applyStatusFilter("trust");
        },
        className: "cp-link ".concat(filters.status !== "trust" ? "" : "active")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "la la-check-circle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Trusted",
        id: "profile.contacts.trusted"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this2.applyStatusFilter("block");
        },
        className: "cp-link ".concat(filters.status !== "block" ? "" : "active")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "la la-ban"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Blocked",
        id: "profile.contacts.blocked"
      })))))))));
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_25___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var intl = this.props.intl;
      var _this$state8 = this.state,
          data = _this$state8.data,
          drawerState = _this$state8.drawerState,
          hasMore = _this$state8.hasMore,
          loading = _this$state8.loading,
          loadingMore = _this$state8.loadingMore,
          selectedData = _this$state8.selectedData,
          filters = _this$state8.filters;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-app-module"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_24__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onClose: this.onToggleDrawer,
        placement: "left",
        closable: false,
        visible: drawerState
      }, this.sidebarComponent())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-sidenav d-none d-lg-flex"
      }, this.sidebarComponent()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-box-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "cp-drawer-btn d-flex d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "la la-ellipsis-v cp-icon-btn",
        "aria-label": "Menu",
        onClick: this.onToggleDrawer
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-box-header-inner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-search-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        suffix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "search"
        }),
        placeholder: intl.formatMessage(messages.searchUsers),
        onKeyUp: this.onSearchKeyUp,
        size: "large",
        value: filters.name,
        disabled: !this.canSearchContact(),
        onChange: this.onSearchChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-box-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "cp-module-box-topbar justify-content-end"
      }, selectedData.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "mr-2 d-none d-sm-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Selected {count} contacts",
        id: "profile.contacts.selected_count_contact",
        values: {
          count: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", null, selectedData.length)
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "d-none d-sm-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components_ConfirmAction__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onConfirm: this.deleteAll
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i", {
        className: "cp-icon-btn cp-fs-xl la la-trash"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "d-none d-sm-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "cp-icon-btn mr-0",
        checked: this.dataKeys().length && selectedData.length === this.dataKeys().length,
        indeterminate: selectedData.length && selectedData.length < this.dataKeys().length,
        onChange: this.onSelectAllData,
        color: "primary"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        ref: this.setScrollWrapper,
        className: "cp-module-content-scroll",
        "data-simplebar": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_21___default.a, {
        useWindow: false,
        loadMore: this.onLoadMore,
        getScrollParent: function getScrollParent() {
          return _this3.scrollParent;
        },
        pageStart: 1,
        hasMore: !loadingMore && hasMore,
        initialLoad: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_UserList__WEBPACK_IMPORTED_MODULE_16__["default"], {
        data: data,
        hasMore: hasMore,
        loadingMore: loadingMore,
        onSelectData: this.onSelectData,
        onLoadMore: this.onLoadMore,
        onTrust: this.trust,
        onDelete: this["delete"],
        onBlock: this.block,
        onResetStatus: this.resetStatus,
        selectedData: selectedData
      }), loadingMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_22__["default"], null) : null))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Contacts;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var mapStateToProps = function mapStateToProps(_ref4) {
  var auth = _ref4.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_18__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_17__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_12__["injectIntl"])(Contacts);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(Contacts, "Contacts", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(Contacts, "Contacts", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\contacts\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/offers/index.js":
/*!*************************************************************!*\
  !*** ./resources/routes/profile/components/offers/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js");
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_FilterResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/FilterResult */ "./resources/components/FilterResult/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_20__);
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















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["defineMessages"])({
  actionSuccessful: {
    "id": "profile.offers.action_successful",
    "defaultMessage": "Your action was successful."
  },
  pageTitle: {
    "id": "meta.title.profile_offers",
    "defaultMessage": "{user}'s Offers - Profile | {name}"
  }
});

var Offers = /*#__PURE__*/function (_Component) {
  _inherits(Offers, _Component);

  var _super = _createSuper(Offers);

  function Offers(props) {
    var _this;

    _classCallCheck(this, Offers);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "applyFilter", function (filters) {
      _this.setState({
        drawerState: false
      }, function () {
        _this.table.applyFilter(filters);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearFilter", function () {
      _this.setState({
        drawerState: false
      }, function () {
        _this.table.clearFilter();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDrawer", function () {
      _this.setState(function (_ref) {
        var drawerState = _ref.drawerState;
        return {
          drawerState: !drawerState
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToOffer", function (offer) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_18__["default"]['marketplace.offer'].path, {
        slug: offer.slug
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(history)) {
        return history.push(path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "editOffer", function (offer) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_18__["default"]['marketplace.create_offer'].path);

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(history)) {
        return history.push(path, {
          offer: offer
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deleteOffer", function (offer) {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var _this$props = _this.props,
          intl = _this$props.intl,
          match = _this$props.match;
      var endpoint = route('user.offers.delete', {
        name: match.params.name
      });
      axios.post(endpoint.url(), {
        id: offer.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleSuccess"])(response, function (data) {
          _this.table.fetchData();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideOffer", function (offer) {
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var _this$props2 = _this.props,
          intl = _this$props2.intl,
          match = _this$props2.match;
      var endpoint = route('user.offers.hide', {
        name: match.params.name
      });
      axios.post(endpoint.url(), {
        id: offer.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleSuccess"])(response, function (data) {
          _this.table.fetchData();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showOffer", function (offer) {
      var _this$api3 = _this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var _this$props3 = _this.props,
          intl = _this$props3.intl,
          match = _this$props3.match;
      var endpoint = route('user.offers.show', {
        name: match.params.name
      });
      axios.post(endpoint.url(), {
        id: offer.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleSuccess"])(response, function (data) {
          _this.table.fetchData();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      var auth = _this.props.auth;
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Type",
          id: "common.type"
        }),
        dataIndex: 'type',
        render: function render(text) {
          return lodash_startCase__WEBPACK_IMPORTED_MODULE_5___default()(text);
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Payment",
          id: "common.payment"
        }),
        dataIndex: 'payment_method',
        render: function render(paymentMethod, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "d-block"
          }, paymentMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", null, record.label));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Currency",
          id: "common.currency"
        }),
        dataIndex: 'currency'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Range",
          id: "common.range"
        }),
        key: 'range',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_min_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "font-weight-semi-bold mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
            defaultMessage: "To",
            id: "common.to"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_real_max_amount));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        render: function render(text, record) {
          if (auth.user.id === record.user.id || auth.can('manage_marketplace')) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
              style: {
                whiteSpace: 'nowrap'
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: function onClick(e) {
                return _this.editOffer(record);
              },
              icon: "edit"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: function onClick(e) {
                return _this.deleteOffer(record);
              },
              icon: "delete"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: function onClick(e) {
                return _this.goToOffer(record);
              },
              icon: "eye"
            }), record.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: function onClick(e) {
                return _this.hideOffer(record);
              },
              type: "default",
              className: "cp-btn-danger",
              icon: "poweroff"
            }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: function onClick(e) {
                return _this.showOffer(record);
              },
              type: "default",
              className: "cp-btn-success",
              icon: "poweroff"
            }));
          } else {
            var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_18__["default"]['marketplace.offer'].path, {
              slug: record.slug
            });
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Link"], {
              to: path
            }, record.type === 'sell' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "default",
              className: "cp-btn-success",
              size: "small"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
              defaultMessage: "Buy",
              id: "common.buy"
            }))), record.type === 'buy' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
              type: "default",
              className: "cp-btn-danger",
              size: "small"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
              defaultMessage: "Sell",
              id: "common.sell"
            }))));
          }
        }
      }];
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_14__["default"]();
    _this.state = {
      drawerState: false
    };
    return _this;
  }

  _createClass(Offers, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var _this$props4 = this.props,
          intl = _this$props4.intl,
          match = _this$props4.match;
      return intl.formatMessage(messages.pageTitle, {
        user: match.params.name,
        name: context__WEBPACK_IMPORTED_MODULE_19___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var match = this.props.match;
      var drawerState = this.state.drawerState;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_14__["route"])("user.offers.table", {
        name: match.params.name
      });
      var filterResultComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_FilterResult__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onApplyFilter: this.applyFilter,
        onClearFilter: this.clearFilter
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_20__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 8,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        styleName: "d-none d-lg-block",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Filter Result",
          id: "common.filter_result"
        })
      }, filterResultComponent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        lg: 16,
        xl: 18
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
        visible: drawerState,
        onClose: this.toggleDrawer,
        placement: "right",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Filter Result",
          id: "common.filter_result"
        }),
        closable: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "p-2"
      }, filterResultComponent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "{name} Offers",
          id: "profile.offers.title",
          values: {
            name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, lodash_upperFirst__WEBPACK_IMPORTED_MODULE_1___default()(match.params.name), "'s")
          }
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
          type: "primary",
          shape: "circle",
          className: "mb-0 material-shadow d-block d-lg-none",
          icon: "filter",
          onClick: this.toggleDrawer
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_13__["default"], {
        route: endpoint.url(),
        columns: this.columns(),
        className: "mt-1",
        ref: function ref(table) {
          return _this2.table = table;
        },
        scroll: {
          x: true,
          y: false
        },
        size: "middle"
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Offers;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_16__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_10__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"], react_router_dom__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Offers);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(Offers, "Offers", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(Offers, "Offers", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\offers\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/overview/components/About/index.js":
/*!********************************************************************************!*\
  !*** ./resources/routes/profile/components/overview/components/About/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
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







var About = /*#__PURE__*/function (_Component) {
  _inherits(About, _Component);

  var _super = _createSuper(About);

  function About() {
    _classCallCheck(this, About);

    return _super.apply(this, arguments);
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "About",
          id: "common.about"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8,
        className: "d-flex flex-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media cp-flex-nowrap mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-calendar cp-fs-3x cp-text-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "mb-1 cp-text-grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Registered on",
        id: "profile.registered_on"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "cp-fs-xl"
      }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_6__["formatUTCDate"])(user.created_at, 'MMMM Do YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media cp-flex-nowrap mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-exchange-alt cp-fs-3x cp-text-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "mb-1 cp-text-grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Successful Trades",
        id: "profile.successful_trades"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "cp-fs-xl"
      }, Object(millify__WEBPACK_IMPORTED_MODULE_5__["default"])(user.marketplace_stats.total_successful_trades))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media cp-flex-nowrap mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-clock cp-fs-3x cp-text-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "mb-1 cp-text-grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Last Seen",
        id: "profile.last_seen"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "cp-fs-xl"
      }, !user.last_seen_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Not Available",
        id: "common.not_available"
      }) : Object(support_utils_common__WEBPACK_IMPORTED_MODULE_6__["utcDateCalendarTime"])(user.last_seen_at))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media cp-flex-nowrap mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-star cp-fs-3x cp-text-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "mb-1 cp-text-grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Trusted By",
        id: "profile.trusted_by"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "cp-fs-xl"
      }, Object(millify__WEBPACK_IMPORTED_MODULE_5__["default"])(user.trusted_by_count))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8,
        lg: 12,
        md: 12,
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media cp-flex-nowrap mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "la la-ban cp-fs-3x cp-text-primary"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-media-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "mb-1 cp-text-grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Blocked By",
        id: "profile.blocked_by"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "cp-fs-xl"
      }, Object(millify__WEBPACK_IMPORTED_MODULE_5__["default"])(user.blocked_by_count)))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = About;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, "About", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(About, "About", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\About\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/overview/components/Biography/index.js":
/*!************************************************************************************!*\
  !*** ./resources/routes/profile/components/overview/components/Biography/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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





var Biography = /*#__PURE__*/function (_Component) {
  _inherits(Biography, _Component);

  var _super = _createSuper(Biography);

  function Biography() {
    _classCallCheck(this, Biography);

    return _super.apply(this, arguments);
  }

  _createClass(Biography, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Biography",
          id: "common.biography"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          minHeight: 200
        }
      }, user.profile && user.profile.bio ? user.profile.bio : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "Hey there! I trade here on this platform also.",
        id: "profile.default_bio"
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

  return Biography;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _default = Biography;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Biography, "Biography", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(Biography, "Biography", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Biography\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/overview/components/Header/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/routes/profile/components/overview/components/Header/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/rate */ "./node_modules/antd/lib/rate/index.js");
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
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












var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addContact", function () {
      var _this$props = _this.props,
          user = _this$props.user,
          auth = _this$props.auth,
          onAddContact = _this$props.onAddContact;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.contacts.add', {
        name: auth.user.name
      }).url();
      axios.post(endpoint, {
        id: user.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function (data) {
          if (onAddContact) onAddContact();
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeContact", function () {
      var _this$props2 = _this.props,
          user = _this$props2.user,
          auth = _this$props2.auth,
          onRemoveContact = _this$props2.onRemoveContact;
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('user.contacts.remove', {
        name: auth.user.name
      }).url();
      axios.post(endpoint, {
        id: user.id
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function (data) {
          if (onRemoveContact) onRemoveContact();
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error);
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["default"]();
    return _this;
  }

  _createClass(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          user = _this$props3.user,
          auth = _this$props3.auth;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner-top-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "cp-fs-3x",
        size: 90,
        user: user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner-avatar-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
        className: "mb-2 mb-sm-3 cp-fs-xxl font-weight-light text-sm-left text-center"
      }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "mb-0 cp-fs-lg  text-sm-left text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_rate__WEBPACK_IMPORTED_MODULE_2___default.a, {
        value: user.average_marketplace_rating,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "ml-2"
      }, "(", Object(millify__WEBPACK_IMPORTED_MODULE_5__["default"])(user.total_marketplace_rating), ")")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner-top-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        className: "cp-follower-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-follower-title cp-fs-lg font-weight-medium"
      }, Object(millify__WEBPACK_IMPORTED_MODULE_5__["default"])(user.marketplace_stats.total_trades)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-fs-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Trades",
        id: "common.trades"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-follower-title cp-fs-lg font-weight-medium"
      }, Object(millify__WEBPACK_IMPORTED_MODULE_5__["default"])(user.marketplace_stats.total_offers)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-fs-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-fs-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Offers",
        id: "common.offers"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-banner-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-tab-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        className: "cp-navbar-nav d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/profile/".concat(user.name, "/offers")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
        className: "la la-suitcase cp-fs-lg mr-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "My Offers",
        id: "common.my_offers"
      })))), typeof user.authenticated_contact_pivot !== "undefined" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(user.authenticated_contact_pivot) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        size: "small",
        className: "mb-0",
        shape: "round",
        onClick: this.addContact,
        icon: "plus"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Add to Contacts",
        id: "common.add_to_contacts"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "default",
        size: "small",
        className: "mb-0",
        shape: "round",
        onClick: this.removeContact,
        icon: "minus"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Remove from Contacts",
        id: "common.remove_from_contacts"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-profile-setting mt-3 mt-sm-0 d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "vertical-align-middle"
      }, (auth.can('manage_users') || auth.user.id === user.id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/profile/".concat(user.name, "/settings")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        defaultMessage: "Settings",
        id: "common.settings"
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

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_8__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps))(Header);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(Header, "Header", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Header\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/overview/components/Verification/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/routes/profile/components/overview/components/Verification/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
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





var Verification = /*#__PURE__*/function (_Component) {
  _inherits(Verification, _Component);

  var _super = _createSuper(Verification);

  function Verification() {
    _classCallCheck(this, Verification);

    return _super.apply(this, arguments);
  }

  _createClass(Verification, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      var data = [{
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Phone Verification",
          id: "common.phone_verification"
        }),
        status: !!user.phone_verified_at
      }, {
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Email Verification",
          id: "common.email_verification"
        }),
        status: !!user.email_verified_at
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Verification",
          id: "common.verification"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a, {
        dataSource: data,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a.Item.Meta, {
            title: item.name
          }), item.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            className: "la la-check-circle cp-fs-xl cp-text-green"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            className: "la la-times cp-fs-xl cp-text-red"
          }));
        }
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

  return Verification;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Verification;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Verification, "Verification", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(Verification, "Verification", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\components\\Verification\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/overview/index.js":
/*!***************************************************************!*\
  !*** ./resources/routes/profile/components/overview/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Verification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Verification */ "./resources/routes/profile/components/overview/components/Verification/index.js");
/* harmony import */ var _components_Biography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Biography */ "./resources/routes/profile/components/overview/components/Biography/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Header */ "./resources/routes/profile/components/overview/components/Header/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/About */ "./resources/routes/profile/components/overview/components/About/index.js");
/* harmony import */ var components_MarketplaceReviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/MarketplaceReviews */ "./resources/components/MarketplaceReviews/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_PageNotFound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/PageNotFound */ "./resources/components/PageNotFound/index.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_18__);
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

















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_16__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.profile_overview",
    "defaultMessage": "{user}'s Profile | {name}"
  }
});

var Overview = /*#__PURE__*/function (_Component) {
  _inherits(Overview, _Component);

  var _super = _createSuper(Overview);

  function Overview(props) {
    var _this;

    _classCallCheck(this, Overview);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchUser", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var match = _this.props.match;

      _this.setState({
        loading: true
      });

      var endpoint = route('user.get', {
        name: match.params.name
      }).url();
      axios.post(endpoint).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleSuccess"])(response, function (data) {
          _this.setState({
            user: data,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleError"])(error, function () {
          _this.setState({
            user: {},
            loading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAddContact", function () {
      _this.fetchUser();
    });

    _defineProperty(_assertThisInitialized(_this), "onRemoveContact", function () {
      _this.fetchUser();
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_13__["default"]();
    _this.state = {
      user: {},
      loading: false
    };
    return _this;
  }

  _createClass(Overview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchUser();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var prevMatchParams = prevProps.match.params;
      var matchParams = this.props.match.params;

      if (matchParams.name !== prevMatchParams.name) {
        console.log('Updated Overview Component');
        this.fetchUser();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      var user = this.state.user;
      return intl.formatMessage(messages.pageTitle, {
        user: user.name,
        name: context__WEBPACK_IMPORTED_MODULE_17___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          user = _this$state.user;
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(user) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_18__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onAddContact: this.onAddContact,
        onRemoveContact: this.onRemoveContact,
        user: user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-profile-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 16,
        lg: 14,
        md: 14
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_11__["default"], {
        user: user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Biography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8,
        lg: 10,
        md: 10
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Verification__WEBPACK_IMPORTED_MODULE_7__["default"], {
        user: user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_MarketplaceReviews__WEBPACK_IMPORTED_MODULE_12__["default"], {
        user: user
      }))))) : !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_PageNotFound__WEBPACK_IMPORTED_MODULE_14__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_15__["default"], null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Overview;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var currencies = _ref.collections.currencies,
      auth = _ref.auth;
  return {
    currencies: currencies,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_4__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_16__["injectIntl"])(Overview);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(Overview, "Overview", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(Overview, "Overview", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\overview\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/General/components/Preference/index.js":
/*!********************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/General/components/Preference/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
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











var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option,
    OptGroup = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.OptGroup;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_13__["defineMessages"])({
  successful: {
    "id": "profile.preference_action_successful",
    "defaultMessage": "Your preference was updated successfully!"
  },
  currency: {
    "id": "profile.select_currency_placeholder",
    "defaultMessage": "Enter your currency..."
  }
});

var Preference = /*#__PURE__*/function (_Component) {
  _inherits(Preference, _Component);

  var _super = _createSuper(Preference);

  function Preference(props) {
    var _this;

    _classCallCheck(this, Preference);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handlePreferenceSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          onUserChange = _this$props.onUserChange,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.update-preference', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(errors)) {
          _this.setState({
            preferenceConfirmLoading: true
          });

          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                preferenceConfirmLoading: false
              });

              if (typeof onUserChange === "function") onUserChange();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleFormError"])(error, form, values, function () {
              _this.setState({
                preferenceConfirmLoading: false
              });
            });
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleNotificationSubmit", function (e) {
      e.preventDefault();
      var requestData = new FormData(e.currentTarget);
      var _this$props2 = _this.props,
          onUserChange = _this$props2.onUserChange,
          user = _this$props2.user,
          intl = _this$props2.intl;
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('user.profile.update-notification-settings', {
        name: user.name
      });

      _this.setState({
        notificationsConfirmLoading: true
      });

      axios.post(endpoint.url(), requestData).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleSuccess"])(response, function (data) {
          _this.setState({
            notificationsConfirmLoading: false
          });

          if (typeof onUserChange === "function") onUserChange();
        }, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, function () {
          _this.setState({
            notificationsConfirmLoading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchNotifications", function () {
      var _this$api3 = _this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var user = _this.props.user;
      var endpoint = route('user.profile.notification-settings', {
        name: user.name
      }).url();
      axios.post(endpoint).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleSuccess"])(response, function (data) {
          _this.setState({
            notifications: data
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_17__["handleError"])(error, function () {
          _this.setState({
            notifications: {}
          });
        });
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_16__["default"]();
    _this.state = {
      preferenceConfirmLoading: false,
      notifications: [],
      notificationsConfirmLoading: false
    };
    return _this;
  }

  _createClass(Preference, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchNotifications();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var prevUser = prevProps.user;
      var user = this.props.user;

      if (user.name !== prevUser.name) {
        console.log('Updated Preference Component');
        this.fetchNotifications();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$props3 = this.props,
          intl = _this$props3.intl,
          user = _this$props3.user,
          currencies = _this$props3.currencies;
      var _this$state = this.state,
          notifications = _this$state.notifications,
          notificationsConfirmLoading = _this$state.notificationsConfirmLoading,
          preferenceConfirmLoading = _this$state.preferenceConfirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Preference",
          id: "profile.preference"
        })
      }, notifications.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Notifications",
        id: "profile.notifications"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 16,
        className: "d-none d-sm-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Type",
        id: "common.type"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex justify-content-around"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "la la-bell cp-fs-xl"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "la la-envelope cp-fs-xl"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "la la-phone cp-fs-xl"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleNotificationSubmit
      }, notifications.map(function (notification) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "mb-2",
          key: notification.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
          sm: 16
        }, notification.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
          sm: 8
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "d-flex justify-content-around"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "checkbox",
          name: "notification[".concat(notification.name, "][database]"),
          defaultChecked: notification.database,
          disabled: typeof notification.database === "undefined",
          value: 1
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "checkbox",
          className: "ant-checkbox",
          name: "notification[".concat(notification.name, "][email]"),
          defaultChecked: notification.email,
          disabled: typeof notification.email === "undefined",
          value: 1
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "checkbox",
          className: "ant-checkbox",
          name: "notification[".concat(notification.name, "][sms]"),
          defaultChecked: notification.sms,
          disabled: typeof notification.sms === "undefined",
          value: 1
        })))));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex justify-content-end mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "primary",
        loading: notificationsConfirmLoading,
        className: "ml-auto",
        size: "small",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Update",
        id: "common.update"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Others",
        id: "common.others"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handlePreferenceSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Currency",
          id: "profile.currency"
        })
      }, getFieldDecorator('currency', {
        initialValue: user.currency,
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
        optionFilterProp: "children",
        placeholder: intl.formatMessage(messages.currency),
        showSearch: true
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(currencies).map(function (code) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {
          key: code,
          value: code
        }, currencies[code].name, " (", currencies[code].code, ")");
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "d-flex justify-content-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "primary",
        loading: preferenceConfirmLoading,
        className: "ml-auto",
        size: "small",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Update",
        id: "common.update"
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

  return Preference;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var currencies = _ref.collections.currencies,
      auth = _ref.auth;
  return {
    currencies: currencies,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_9__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_10__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__["default"])(), react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Preference);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(Preference, "Preference", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(Preference, "Preference", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Preference\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/General/components/ProfileDetails/index.js":
/*!************************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/General/components/ProfileDetails/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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











var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.TextArea;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  successful: {
    "id": "profile.details_action_successful",
    "defaultMessage": "Your profile was updated successfully!"
  }
});

var ProfileDetails = /*#__PURE__*/function (_Component) {
  _inherits(ProfileDetails, _Component);

  var _super = _createSuper(ProfileDetails);

  function ProfileDetails(props) {
    var _this;

    _classCallCheck(this, ProfileDetails);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          onUserChange = _this$props.onUserChange,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.update-details', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(errors)) {
          _this.setState({
            confirmLoading: true
          });

          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              if (typeof onUserChange === "function") onUserChange();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });
            });
          });
        }
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_12__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(ProfileDetails, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          user = _this$props2.user;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var confirmLoading = this.state.confirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Details",
          id: "profile.details"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "First Name",
          id: "profile.first_name"
        })
      }, getFieldDecorator('first_name', {
        initialValue: user.profile.first_name,
        rules: [{
          max: 25
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Last Name",
          id: "profile.last_name"
        })
      }, getFieldDecorator('last_name', {
        initialValue: user.profile.last_name,
        rules: [{
          max: 25
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Bio",
          id: "profile.bio"
        })
      }, getFieldDecorator('bio', {
        initialValue: user.profile.bio,
        rules: [{
          max: 1000
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TextArea, {
        autosize: {
          minRows: 5
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "d-flex justify-content-end mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        loading: confirmLoading,
        className: "ml-auto",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        defaultMessage: "Update",
        id: "common.update"
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

  return ProfileDetails;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_7__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__["default"])(), react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(ProfileDetails);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(ProfileDetails, "ProfileDetails", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(ProfileDetails, "ProfileDetails", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\ProfileDetails\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/General/components/UploadPhoto/index.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/General/components/UploadPhoto/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.esm.js");
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










var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({
  successful: {
    "id": "profile.upload_successful",
    "defaultMessage": "Your upload was successful."
  },
  invalidType: {
    "id": "profile.invalid_picture_type",
    "defaultMessage": "You can only upload JPG/PNG file!"
  }
});

var UploadPhoto = /*#__PURE__*/function (_Component) {
  _inherits(UploadPhoto, _Component);

  var _super = _createSuper(UploadPhoto);

  function UploadPhoto(props) {
    var _this;

    _classCallCheck(this, UploadPhoto);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "transformFile", function (file) {
      var component = _assertThisInitialized(_this);

      var signal = _this.controller.signal;
      return new Promise(function (resolve, reject) {
        // Initialize FileReader which reads uploaded file
        var reader = new FileReader();

        reader.onloadend = function () {
          if (!signal.aborted) {
            component.setState({
              cropperSrc: reader.result
            }, function () {
              var current = component.cropperImg.current; // Initialize cropper for uploaded image

              var cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_13__["default"](current, {
                aspectRatio: 1,
                autoCropArea: 1,
                movable: false,
                cropBoxResizable: true,
                // minContainerWidth  : '100%',
                minContainerHeight: 250,
                viewMode: 1
              });

              if (!signal.aborted) {
                component.setState({
                  onOkCrop: function () {
                    if (!signal.aborted) {
                      var canvas = cropper.getCroppedCanvas(); // Set preview Image and Hide Modal

                      component.setState({
                        previewSrc: canvas.toDataURL(file.type),
                        showCropper: false
                      }); // We destroy the cropper!

                      cropper.destroy(); // Transform it to Blob object

                      canvas.toBlob(resolve, file.type);
                    }
                  }.bind(component),
                  onCancelCrop: function () {
                    cropper.destroy();

                    if (!signal.aborted) {
                      component.setState({
                        showCropper: false
                      });
                    }

                    reject();
                  }.bind(component)
                });
              }
            });
          }
        };

        if (!signal.aborted) {
          component.setState({
            showCropper: true
          });
        } // Read uploaded file (triggers code above)


        reader.readAsDataURL(file);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var intl = _this.props.intl;
      var status = file.type === 'image/jpeg' || file.type === 'image/png';

      if (!status) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default.a.error(intl.formatMessage(messages.invalidType));
      }

      return status;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function () {
      var intl = _this.props.intl;

      antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default.a.success(intl.formatMessage(messages.successful));
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (errors) {
      if (lodash_has__WEBPACK_IMPORTED_MODULE_3___default()(errors, 'file')) {
        errors.file.forEach(function (error) {
          return antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default.a.error(error);
        });
      }
    });

    _this.cropperImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.controller = new AbortController();
    _this.state = {
      loading: false,
      showCropper: false,
      previewSrc: undefined,
      cropperSrc: undefined,
      onCancelCrop: undefined,
      onOkCrop: undefined
    };
    return _this;
  }

  _createClass(UploadPhoto, [{
    key: "getPlaceholder",
    value: function getPlaceholder() {
      var _this$state = this.state,
          loading = _this$state.loading,
          previewSrc = _this$state.previewSrc;
      var user = this.props.user;

      if (previewSrc) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: previewSrc,
          style: {
            width: '100%'
          },
          alt: "preview"
        });
      }

      if (user && user.profile && user.profile.picture) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: user.profile.picture,
          style: {
            width: '100%'
          },
          alt: "preview"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "cp-fs-2x mb-2",
        type: loading ? 'loading' : 'plus'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ant-upload-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Upload",
        id: "common.upload"
      })));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.controller.abort();
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["route"])('user.profile.upload-picture', {
        name: user.name
      }).url();
      var _this$state2 = this.state,
          showCropper = _this$state2.showCropper,
          cropperSrc = _this$state2.cropperSrc,
          onOkCrop = _this$state2.onOkCrop,
          onCancelCrop = _this$state2.onCancelCrop;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Upload Picture",
          id: "profile.upload_picture"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a, {
        showUploadList: false,
        beforeUpload: this.beforeUpload,
        action: endpoint,
        className: "d-flex justify-content-center",
        customRequest: support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["uploadRequest"],
        withCredentials: true,
        onError: this.handleUploadError,
        transformFile: this.transformFile,
        listType: "picture-card",
        onSuccess: this.handleUploadSuccess,
        accept: ".jpg,.jpeg,.png"
      }, this.getPlaceholder())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: showCropper,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Crop Image",
          id: "profile.crop_image"
        }),
        onOk: onOkCrop,
        onCancel: onCancelCrop,
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Crop",
          id: "common.crop"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        ref: this.cropperImg,
        src: cropperSrc,
        style: {
          maxWidth: '90%'
        },
        alt: "Upload"
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

  return UploadPhoto;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_7__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_10__["injectIntl"], react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(UploadPhoto);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(UploadPhoto, "UploadPhoto", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(UploadPhoto, "UploadPhoto", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\UploadPhoto\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/General/components/Verification/index.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/General/components/Verification/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var components_PhoneInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/PhoneInput */ "./resources/components/PhoneInput/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
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












var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["defineMessages"])({
  invalidPhone: {
    "id": "profile.invalid_phone",
    "defaultMessage": "You phone is invalid!"
  },
  emailCodePlaceholder: {
    "id": "profile.verification_email_code_placeholder",
    "defaultMessage": "Enter the code sent to your email..."
  },
  phoneCodePlaceholder: {
    "id": "profile.verification_phone_code_placeholder",
    "defaultMessage": "Enter the code sent to your phone..."
  },
  tokenRequired: {
    "id": "profile.token_required",
    "defaultMessage": "Token is required to complete verification!"
  },
  successful: {
    "id": "profile.verification_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var Verification = /*#__PURE__*/function (_Component) {
  _inherits(Verification, _Component);

  var _super = _createSuper(Verification);

  function Verification(props) {
    var _this;

    _classCallCheck(this, Verification);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "resendEmailToken", function () {
      var _this$props = _this.props,
          intl = _this$props.intl,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.resend-email-token', {
        name: user.name
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, null, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "verifyEmailToken", function () {
      var _this$props2 = _this.props,
          intl = _this$props2.intl,
          user = _this$props2.user;
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var emailToken = _this.state.emailToken;

      if (!emailToken) {
        return antd_lib_message__WEBPACK_IMPORTED_MODULE_9___default.a.error(intl.formatMessage(messages.tokenRequired));
      }

      var endpoint = route('user.profile.verify-email-token', {
        name: user.name
      });
      axios.post(endpoint.url(), {
        token: emailToken
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, function () {
          _this.setState({
            emailToken: ""
          });

          _this.setState({
            emailVerifyLoading: false
          });

          _this.change();
        }, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error, function () {
          _this.setState({
            emailToken: ""
          });

          _this.setState({
            emailVerifyLoading: false
          });
        });
      });

      _this.setState({
        emailVerifyLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeEmailToken", function (e) {
      _this.setState({
        emailToken: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resendPhoneToken", function () {
      var _this$props3 = _this.props,
          intl = _this$props3.intl,
          user = _this$props3.user;
      var _this$api3 = _this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var endpoint = route('user.profile.resend-phone-token', {
        name: user.name
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, null, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "verifyPhoneToken", function () {
      var _this$props4 = _this.props,
          intl = _this$props4.intl,
          user = _this$props4.user;
      var _this$api4 = _this.api,
          axios = _this$api4.axios,
          route = _this$api4.route;
      var phoneToken = _this.state.phoneToken;

      if (!phoneToken) {
        return antd_lib_message__WEBPACK_IMPORTED_MODULE_9___default.a.error(intl.formatMessage(messages.tokenRequired));
      }

      var endpoint = route('user.profile.verify-phone-token', {
        name: user.name
      });
      axios.post(endpoint.url(), {
        token: phoneToken
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, function () {
          _this.setState({
            phoneToken: ""
          });

          _this.setState({
            phoneVerifyLoading: false
          });

          _this.change();
        }, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error, function () {
          _this.setState({
            phoneToken: ""
          });

          _this.setState({
            phoneVerifyLoading: false
          });
        });
      });

      _this.setState({
        phoneVerifyLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangePhoneToken", function (e) {
      _this.setState({
        phoneToken: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props5 = _this.props,
          form = _this$props5.form,
          intl = _this$props5.intl,
          user = _this$props5.user;
      var _this$api5 = _this.api,
          axios = _this$api5.axios,
          route = _this$api5.route;
      var endpoint = route('user.profile.update-verification', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(errors)) {
          var data = lodash_assign__WEBPACK_IMPORTED_MODULE_7___default()({}, values);

          if (_this.itl) {
            var countryData = _this.itl.getSelectedCountryData();

            data['phone_country'] = countryData.iso2;
          }

          axios.post(endpoint.url(), data).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.change();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleFormError"])(error, form, data, function () {
              _this.setState({
                confirmLoading: false
              });
            });
          });

          _this.setState({
            confirmLoading: true
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "editEmail", function () {
      _this.setState({
        canEditEmail: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "editPhone", function () {
      _this.setState({
        canEditPhone: true
      });
    });

    _this.state = {
      canEditEmail: !props.user.email,
      canEditPhone: !props.user.phone,
      emailToken: "",
      phoneToken: "",
      phoneVerifyLoading: false,
      emailVerifyLoading: false,
      confirmLoading: false
    };
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_20__["default"]();
    return _this;
  }

  _createClass(Verification, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var user = this.props.user;

      if (prevProps.user.email !== user.email) {
        console.log('User Email Updated');
        this.setState({
          canEditEmail: !user.email
        });
      }

      if (prevProps.user.phone !== user.phone) {
        console.log('User Phone Updated');
        this.setState({
          canEditPhone: !user.phone
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "change",
    value: function change() {
      var onUserChange = this.props.onUserChange;

      if (typeof onUserChange === "function") {
        return onUserChange();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          intl = _this$props6.intl,
          user = _this$props6.user;
      var _this$state = this.state,
          canEditEmail = _this$state.canEditEmail,
          canEditPhone = _this$state.canEditPhone,
          confirmLoading = _this$state.confirmLoading,
          emailToken = _this$state.emailToken,
          phoneToken = _this$state.phoneToken,
          phoneVerifyLoading = _this$state.phoneVerifyLoading,
          emailVerifyLoading = _this$state.emailVerifyLoading;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var component = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Basic Verification",
          id: "profile.basic_verification"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Phone",
          id: "profile.phone"
        }),
        extra: (user.phone || !canEditPhone) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "d-flex align-items-center justify-content-between"
        }, user.phone && !user.phone_verified_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "red",
          className: "m-0 mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Unverified",
          id: "common.unverified"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: this.resendPhoneToken
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Resend Code",
          id: "profile.resend_code"
        }))), user.phone && user.phone_verified_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "green",
          className: "m-0 mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Verified",
          id: "common.verified"
        }))), !canEditPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: this.editPhone,
          className: "ml-auto"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "edit"
        })))
      }, getFieldDecorator('phone', {
        initialValue: user.phone,
        rules: [{
          validator: function validator(rule, value, callback) {
            if (component.itl && !component.itl.isValidNumber() && value) {
              callback(intl.formatMessage(messages.invalidPhone));
            }

            callback();
          }
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components_PhoneInput__WEBPACK_IMPORTED_MODULE_18__["default"], {
        itl: function itl(_itl) {
          return component.itl = _itl;
        },
        disabled: !canEditPhone
      }))), user.phone && !user.phone_verified_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onChange: this.onChangePhoneToken,
        placeholder: intl.formatMessage(messages.phoneCodePlaceholder),
        value: phoneToken
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        onClick: this.verifyPhoneToken,
        loading: phoneVerifyLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Verify",
        id: "common.verify"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Email",
          id: "profile.email"
        }),
        extra: (user.email || !canEditEmail) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "d-flex align-items-center justify-content-between"
        }, user.email && !user.email_verified_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "red",
          className: "m-0 mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Unverified",
          id: "common.unverified"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: this.resendEmailToken
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Resend Code",
          id: "profile.resend_code"
        }))), user.email && user.email_verified_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "green",
          className: "m-0 mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Verified",
          id: "common.verified"
        }))), !canEditEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          onClick: this.editEmail,
          className: "ml-auto"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "edit"
        })))
      }, getFieldDecorator('email', {
        initialValue: user.email,
        rules: [{
          type: 'email'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        disabled: !canEditEmail
      }))), user.email && !user.email_verified_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onChange: this.onChangeEmailToken,
        placeholder: intl.formatMessage(messages.emailCodePlaceholder),
        value: emailToken
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        onClick: this.verifyEmailToken,
        loading: emailVerifyLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Verify",
        id: "common.verify"
      })))))), (canEditEmail || canEditPhone) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        className: "mt-3",
        labelAlign: "left",
        wrapperCol: {
          xs: 24,
          sm: 16
        },
        labelCol: {
          xs: 24,
          sm: 8
        },
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Password",
          id: "common.password"
        })
      }, getFieldDecorator('current_password', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        className: "d-flex justify-content-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        loading: confirmLoading,
        className: "ml-auto",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Submit",
        id: "common.submit"
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

  return Verification;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_12__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_11__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_17__["default"])(), react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Verification);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(Verification, "Verification", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(Verification, "Verification", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\components\\Verification\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/General/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/General/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var _components_UploadPhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UploadPhoto */ "./resources/routes/profile/components/settings/components/General/components/UploadPhoto/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_Verification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Verification */ "./resources/routes/profile/components/settings/components/General/components/Verification/index.js");
/* harmony import */ var _components_Preference__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Preference */ "./resources/routes/profile/components/settings/components/General/components/Preference/index.js");
/* harmony import */ var _components_ProfileDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ProfileDetails */ "./resources/routes/profile/components/settings/components/General/components/ProfileDetails/index.js");
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











var General = /*#__PURE__*/function (_Component) {
  _inherits(General, _Component);

  var _super = _createSuper(General);

  function General() {
    var _this;

    _classCallCheck(this, General);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "userChange", function () {
      var onUserChange = _this.props.onUserChange;
      if (typeof onUserChange === "function") onUserChange();
    });

    return _this;
  }

  _createClass(General, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Preference__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onUserChange: this.userChange,
        user: user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Verification__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onUserChange: this.userChange,
        user: user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_UploadPhoto__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onUserChange: this.userChange,
        user: user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ProfileDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onUserChange: this.userChange,
        user: user
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

  return General;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_3__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_7__["injectIntl"])(General);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(General, "General", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(General, "General", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\General\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/Security/components/Password/index.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/Security/components/Password/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
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










var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["defineMessages"])({
  password: {
    "id": "profile.input_password_placeholder",
    "defaultMessage": "Enter your password..."
  },
  newPassword: {
    "id": "profile.input_new_password_placeholder",
    "defaultMessage": "Enter a new password..."
  },
  newPasswordConfirmation: {
    "id": "profile.input_new_password_confirmation_placeholder",
    "defaultMessage": "Confirm your new password..."
  },
  successful: {
    "id": "profile.password_action_successful",
    "defaultMessage": "Your password was updated successfully!"
  }
});

var Password = /*#__PURE__*/function (_Component) {
  _inherits(Password, _Component);

  var _super = _createSuper(Password);

  function Password(props) {
    var _this;

    _classCallCheck(this, Password);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.change-password', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });
            });
          });

          _this.setState({
            confirmLoading: true
          });
        }
      });
    });

    _this.state = {
      confirmLoading: false
    };
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_12__["default"]();
    return _this;
  }

  _createClass(Password, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          user = _this$props2.user;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var confirmLoading = this.state.confirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Change Password",
          id: "profile.change_password"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Current Password",
          id: "profile.current_password"
        })
      }, getFieldDecorator('password', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, {
        placeholder: intl.formatMessage(messages.password)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "New Password",
        id: "profile.new_password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "New Password",
          id: "profile.new_password"
        })
      }, getFieldDecorator('new_password', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, {
        placeholder: intl.formatMessage(messages.newPassword)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Confirm New Password",
          id: "profile.confirm_new_password"
        })
      }, getFieldDecorator('new_password_confirmation', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, {
        placeholder: intl.formatMessage(messages.newPasswordConfirmation)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "danger",
        block: true,
        htmlType: "submit",
        loading: confirmLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Change Password",
        id: "profile.change_password"
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

  return Password;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_8__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__["default"])())(Password);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(Password, "Password", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(Password, "Password", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\Password\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Configure/index.js":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Configure/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
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









var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({
  twoFactorCode: {
    "id": "profile.input_two_factor_code_placeholder",
    "defaultMessage": "Enter two factor code..."
  },
  password: {
    "id": "profile.input_password_placeholder",
    "defaultMessage": "Enter your password..."
  },
  successful: {
    "id": "profile.two_factor_configure_action_successful",
    "defaultMessage": "Your Two Factor settings was updated successfully!"
  }
});

var Configure = /*#__PURE__*/function (_Component) {
  _inherits(Configure, _Component);

  var _super = _createSuper(Configure);

  function Configure(props) {
    var _this;

    _classCallCheck(this, Configure);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.two-factor-configure', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });
            });
          });

          _this.setState({
            confirmLoading: true
          });
        }
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_12__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(Configure, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          user = _this$props2.user;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var confirmLoading = this.state.confirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Settings",
        id: "profile.two_factor_settings"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, getFieldDecorator('authentication', {
        valuePropName: 'checked',
        initialValue: user.two_factor_setting.authentication
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Require for Authentication",
        id: "profile.two_factor_authentication"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, getFieldDecorator('outgoing_transfer', {
        valuePropName: 'checked',
        initialValue: user.two_factor_setting.outgoing_transfer
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Require for Outgoing Transfer",
        id: "profile.two_factor_outgoing_transfer"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, getFieldDecorator('marketplace', {
        valuePropName: 'checked',
        initialValue: user.two_factor_setting.marketplace
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Require for Marketplace",
        id: "profile.two_factor_marketplace"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Verify",
        id: "profile.two_factor_verify"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Token",
          id: "profile.token"
        })
      }, getFieldDecorator('token', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        placeholder: intl.formatMessage(messages.twoFactorCode)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        block: true,
        icon: "save",
        htmlType: "submit",
        loading: confirmLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Save Settings",
        id: "profile.two_factor_save_settings"
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Configure;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_7__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__["default"])())(Configure);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(Configure, "Configure", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(Configure, "Configure", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Configure\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Enable/index.js":
/*!**************************************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Enable/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
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










var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({
  twoFactorCode: {
    "id": "profile.input_two_factor_code_placeholder",
    "defaultMessage": "Enter two factor code..."
  },
  successful: {
    "id": "profile.two_factor_enable_action_successful",
    "defaultMessage": "Two Factor was enabled successfully."
  }
});

var Enable = /*#__PURE__*/function (_Component) {
  _inherits(Enable, _Component);

  var _super = _createSuper(Enable);

  function Enable(props) {
    var _this;

    _classCallCheck(this, Enable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.two-factor-enable', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_14__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_14__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });
            });
          });

          _this.setState({
            confirmLoading: true
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "triggerSuccess", function () {
      var onSuccess = _this.props.onSuccess;

      if (typeof onSuccess === "function") {
        return onSuccess();
      }
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_13__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(Enable, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var confirmLoading = this.state.confirmLoading;
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          secret = _this$props2.secret,
          url = _this$props2.url,
          form = _this$props2.form,
          twoFactorEnabled = _this$props2.twoFactorEnabled;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_12___default.a, {
        value: url,
        className: "img-thumbnail",
        size: 150
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Scan the QR code with {google} or {authy} Mobile App.",
        values: {
          authy: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Authy"),
          google: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Google Authenticator")
        },
        id: "profile.two_factor_setup_info"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onSubmit: this.handleSubmit
      }, !twoFactorEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "SECRET: {secret}",
        id: "profile.security.display_secret",
        values: {
          secret: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, secret)
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Token",
          id: "profile.token"
        })
      }, getFieldDecorator('token', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        placeholder: intl.formatMessage(messages.twoFactorCode)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        block: true,
        icon: "poweroff",
        htmlType: "submit",
        loading: confirmLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Enable",
        id: "profile.enable"
      }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "SECRET: {secret}",
        id: "profile.security.display_secret",
        values: {
          secret: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, secret)
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        onClick: this.onSuccess,
        className: "mt-4",
        icon: "check",
        block: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Confirm",
        id: "profile.confirm"
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

  return Enable;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_7__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_11__["default"])())(Enable);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(Enable, "Enable", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(Enable, "Enable", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Enable\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Request/index.js":
/*!***************************************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Request/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
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









var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["defineMessages"])({
  twoFactorCode: {
    "id": "profile.input_two_factor_code_placeholder",
    "defaultMessage": "Enter two factor code..."
  },
  password: {
    "id": "profile.input_password_placeholder",
    "defaultMessage": "Enter your password..."
  },
  successful: {
    "id": "profile.two_factor_request_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var Request = /*#__PURE__*/function (_Component) {
  _inherits(Request, _Component);

  var _super = _createSuper(Request);

  function Request(props) {
    var _this;

    _classCallCheck(this, Request);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          onSuccess = _this$props.onSuccess,
          user = _this$props.user;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.profile.two-factor-request', {
        name: user.name
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess(data);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });
            });
          });

          _this.setState({
            confirmLoading: true
          });
        }
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(Request, [{
    key: "triggerSuccess",
    value: function triggerSuccess(data) {
      var onSuccess = this.props.onSuccess;

      if (typeof onSuccess === "function") {
        return onSuccess(data);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var confirmLoading = this.state.confirmLoading;
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          twoFactorEnabled = _this$props2.twoFactorEnabled,
          form = _this$props2.form;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, !twoFactorEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "To setup your Two Factor with {google} or {authy}, " + "you will need your unique two factor secret. " + "Please verify your identity using your password.",
          values: {
            authy: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Authy"),
            google: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Google Authenticator")
          },
          id: "profile.request_for_secret_with_password_info"
        }),
        showIcon: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Password",
          id: "profile.password"
        })
      }, getFieldDecorator('password', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        placeholder: intl.formatMessage(messages.password)
      })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "You need to verify your identity using your previous " + "Two Factor setup before you can proceed.",
          id: "profile.request_for_secret_with_token_info"
        }),
        showIcon: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Token",
          id: "profile.token"
        })
      }, getFieldDecorator('token', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        placeholder: intl.formatMessage(messages.twoFactorCode)
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        block: true,
        icon: "lock",
        htmlType: "submit",
        loading: confirmLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Request For Secret",
        id: "profile.request_for_secret"
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Request;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_6__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_10__["default"])())(Request);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(Request, "Request", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(Request, "Request", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\components\\Request\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/index.js":
/*!********************************************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/Security/components/TwoFactor/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Enable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Enable */ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Enable/index.js");
/* harmony import */ var _components_Request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Request */ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Request/index.js");
/* harmony import */ var _components_Configure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Configure */ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/components/Configure/index.js");
/* harmony import */ var _support_TwoFactorSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../support/TwoFactorSetting */ "./resources/support/TwoFactorSetting.js");
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












var TwoFactor = /*#__PURE__*/function (_Component) {
  _inherits(TwoFactor, _Component);

  var _super = _createSuper(TwoFactor);

  function TwoFactor(props) {
    var _this;

    _classCallCheck(this, TwoFactor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleRequest", function (data) {
      _this.setState({
        secret: data.secret,
        url: data.url
      });
    });

    _defineProperty(_assertThisInitialized(_this), "enable", function () {
      _this.setState({
        secret: "",
        request: false
      }, function () {
        _this.update();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "request", function () {
      _this.setState({
        request: true
      });
    });

    _this.state = {
      secret: "",
      request: false,
      url: ""
    };
    return _this;
  }

  _createClass(TwoFactor, [{
    key: "update",
    value: function update() {
      var onUserChange = this.props.onUserChange;

      if (typeof onUserChange === "function") {
        return onUserChange();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          url = _this$state.url,
          secret = _this$state.secret,
          request = _this$state.request;
      var user = this.props.user;
      var twoFactorSetting = new _support_TwoFactorSetting__WEBPACK_IMPORTED_MODULE_9__["default"](user);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Two Factor",
          id: "profile.two_factor"
        }),
        extra: twoFactorSetting.enabled() && !request && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          onClick: this.request
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Add Device",
          id: "profile.two_factor_add_device"
        }))
      }, !twoFactorSetting.enabled() || request ? !secret ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Request__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSuccess: this.handleRequest,
        twoFactorEnabled: twoFactorSetting.enabled(),
        user: user
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Enable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSuccess: this.enable,
        user: user,
        twoFactorEnabled: twoFactorSetting.enabled(),
        url: url,
        secret: secret
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Configure__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: user
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

  return TwoFactor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_3__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(TwoFactor);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TwoFactor, "TwoFactor", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(TwoFactor, "TwoFactor", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\components\\TwoFactor\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/components/Security/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/routes/profile/components/settings/components/Security/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_TwoFactor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TwoFactor */ "./resources/routes/profile/components/settings/components/Security/components/TwoFactor/index.js");
/* harmony import */ var _components_Password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Password */ "./resources/routes/profile/components/settings/components/Security/components/Password/index.js");
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









var Security = /*#__PURE__*/function (_Component) {
  _inherits(Security, _Component);

  var _super = _createSuper(Security);

  function Security() {
    var _this;

    _classCallCheck(this, Security);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "changeUser", function () {
      var onUserChange = _this.props.onUserChange;

      if (typeof onUserChange === "function") {
        return onUserChange();
      }
    });

    return _this;
  }

  _createClass(Security, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Password__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onUserChange: this.changeUser,
        user: user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TwoFactor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onUserChange: this.changeUser,
        user: user
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

  return Security;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_3__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(Security);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Security, "Security", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(Security, "Security", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\components\\Security\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/settings/index.js":
/*!***************************************************************!*\
  !*** ./resources/routes/profile/components/settings/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_PageTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/PageTabs */ "./resources/components/PageTabs/index.js");
/* harmony import */ var _components_General__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/General */ "./resources/routes/profile/components/settings/components/General/index.js");
/* harmony import */ var _components_Security__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Security */ "./resources/routes/profile/components/settings/components/Security/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_PageNotFound__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/PageNotFound */ "./resources/components/PageNotFound/index.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_16__);
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















 // import Developer from "./components/Developer";

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.profile_settings",
    "defaultMessage": "Settings - Profile | {name}"
  }
});
var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane;

var Settings = /*#__PURE__*/function (_Component) {
  _inherits(Settings, _Component);

  var _super = _createSuper(Settings);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchUser", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var match = _this.props.match;

      _this.setState({
        loading: true
      });

      var endpoint = route('user.data', {
        name: match.params.name
      }).url();
      axios.post(endpoint).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleSuccess"])(response, function (data) {
          _this.setState({
            user: data,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleError"])(error, function () {
          _this.setState({
            user: {},
            loading: false
          });
        });
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      user: {},
      loading: false
    };
    return _this;
  }

  _createClass(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchUser();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var prevMatchParams = prevProps.match.params;
      var matchParams = this.props.match.params;

      if (matchParams.name !== prevMatchParams.name) {
        console.log('Updated Settings Component');
        this.fetchUser();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_15___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          loading = _this$state.loading,
          user = _this$state.user;
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(user) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_16__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_PageTabs__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
        key: "general",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
          className: "la la-cog cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "General",
          id: "profile.general"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_General__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: user,
        onUserChange: function onUserChange() {
          return _this2.fetchUser();
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {
        key: "security",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
          className: "la la-shield-alt cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Security",
          id: "profile.security"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Security__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: user,
        onUserChange: function onUserChange() {
          return _this2.fetchUser();
        }
      })))) : !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_PageNotFound__WEBPACK_IMPORTED_MODULE_13__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_3__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps), react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"], react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(Settings);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2); // {/*<TabPane key="developer"*/}
// {/*         tab={*/}
// {/*             <span className="d-flex align-items-center">*/}
// {/*							         <i className="la la-puzzle-piece cp-fs-xl mr-2"/>*/}
// {/*							         <span>*/}
// {/*								         <FormattedMessage*/}
// {/*                                             defaultMessage="Developer"*/}
// {/*                                             id="profile.developer"/>*/}
// {/*							         </span>*/}
// {/*						         </span>*/}
// {/*         }>*/}
// {/*    <Developer user={user}/>*/}
// {/*</TabPane>*/}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(Settings, "Settings", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(Settings, "Settings", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\settings\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/components/trades/index.js":
/*!*************************************************************!*\
  !*** ./resources/routes/profile/components/trades/index.js ***!
  \*************************************************************/
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
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js");
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_18__);
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














var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.profile_trades",
    "defaultMessage": "Trades - Profile | {name}"
  }
});

var Trades = /*#__PURE__*/function (_Component) {
  _inherits(Trades, _Component);

  var _super = _createSuper(Trades);

  function Trades(props) {
    var _this;

    _classCallCheck(this, Trades);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "goToChat", function (chatId) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_9__["default"]['chat.view'].path, {
        token: chatId
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(history)) {
        return history.push(path);
      }
    });

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

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Amount",
          id: "common.amount"
        }),
        dataIndex: 'formatted_amount_price'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Seller",
          id: "common.seller"
        }),
        dataIndex: 'seller',
        render: function render(seller) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
            user: seller
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Buyer",
          id: "common.buyer"
        }),
        dataIndex: 'buyer',
        render: function render(buyer) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
            user: buyer
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Status",
          id: "common.status"
        }),
        dataIndex: 'status',
        render: function render(status) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_3___default.a, {
            color: _this.getStatusColor(status)
          }, lodash_upperFirst__WEBPACK_IMPORTED_MODULE_4___default()(status));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Payment Method",
          id: "common.payment_method"
        }),
        dataIndex: 'payment_method_name',
        render: function render(payment_method_name, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            className: "mr-2"
          }, payment_method_name), record.payment_method_description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
            overlayStyle: {
              maxWidth: 250
            },
            content: record.payment_method_description,
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
              id: "common.payment_method_description",
              defaultMessage: "Description"
            }),
            trigger: "click"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
            type: "question-circle",
            theme: "filled"
          })));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            type: "primary",
            onClick: function onClick(e) {
              return _this.goToChat(record.chat_id);
            },
            icon: "link"
          });
        }
      }];
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_8__["default"]();
    return _this;
  }

  _createClass(Trades, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_17___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var match = this.props.match;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_8__["route"])("user.trades.table", {
        name: match.params.name
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_18__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_16__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "{name} Trades",
          id: "profile.trades.title",
          values: {
            name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, lodash_upperFirst__WEBPACK_IMPORTED_MODULE_4___default()(match.params.name), "'s")
          }
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_15__["default"], {
        route: endpoint.url(),
        columns: this.columns(),
        className: "mt-1",
        ref: function ref(table) {
          return _this2.table = table;
        },
        scroll: {
          x: true,
          y: false
        },
        size: "middle"
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

  return Trades;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_12__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_7__["injectIntl"], react_router_dom__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Trades);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(Trades, "Trades", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(Trades, "Trades", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\components\\trades\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/profile/index.js":
/*!*******************************************!*\
  !*** ./resources/routes/profile/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_trades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/trades */ "./resources/routes/profile/components/trades/index.js");
/* harmony import */ var components_PageNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PageNotFound */ "./resources/components/PageNotFound/index.js");
/* harmony import */ var components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ProtectedRoute */ "./resources/components/ProtectedRoute/index.js");
/* harmony import */ var _components_offers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/offers */ "./resources/routes/profile/components/offers/index.js");
/* harmony import */ var _support_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var _components_overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/overview */ "./resources/routes/profile/components/overview/index.js");
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacts */ "./resources/routes/profile/components/contacts/index.js");
/* harmony import */ var _components_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings */ "./resources/routes/profile/components/settings/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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














var Profile = function Profile(_ref) {
  var match = _ref.match,
      auth = _ref.auth;
  var path = match.path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    path: "".concat(path, "/"),
    exact: true,
    component: _components_overview__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "".concat(path, "/contacts"),
    fallbackCondition: auth.user.name === match.params.name,
    can: "manage_users",
    component: _components_contacts__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "".concat(path, "/settings"),
    fallbackCondition: auth.user.name === match.params.name,
    can: "manage_users",
    component: _components_settings__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: "".concat(path, "/trades"),
    fallbackCondition: auth.user.name === match.params.name,
    can: "manage_users",
    component: _components_trades__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    path: "".concat(path, "/offers"),
    component: _components_offers__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
    component: components_PageNotFound__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: new _support_Auth__WEBPACK_IMPORTED_MODULE_5__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_10__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps))(Profile);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Profile, "Profile", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
  reactHotLoader.register(Profile, "Profile", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\profile\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};;
//# sourceMappingURL=19.8218d6303b5cbc577b29.js.map