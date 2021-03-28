exports.ids = [24];
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

/***/ "./resources/routes/chat/components/Body/components/ActivityCell/index.js":
/*!********************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/ActivityCell/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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





var ActivityCell = /*#__PURE__*/function (_Component) {
  _inherits(ActivityCell, _Component);

  var _super = _createSuper(ActivityCell);

  function ActivityCell() {
    _classCallCheck(this, ActivityCell);

    return _super.apply(this, arguments);
  }

  _createClass(ActivityCell, [{
    key: "getTimestamp",
    value: function getTimestamp() {
      var message = this.props.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "font-weight-semi-bold"
      }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["utcDateCalendarTime"])(message.created_at));
    }
  }, {
    key: "getUserName",
    value: function getUserName() {
      var message = this.props.message;

      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(message.user)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Unknown User",
          id: "common.unknown_user"
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "font-weight-medium"
        }, message.user.name, ":");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var message = this.props.message;
      var activity = message.activity;

      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(activity) || !activity.body) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "font-weight-normal",
        dashed: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "chat.activity_body",
        defaultMessage: "{user} {body} {time}",
        values: {
          time: this.getTimestamp(),
          body: activity.body,
          user: this.getUserName()
        }
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

  return ActivityCell;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var _default = ActivityCell;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ActivityCell, "ActivityCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(ActivityCell, "ActivityCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ActivityCell\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/AttachmentCell/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/AttachmentCell/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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







var AttachmentCell = /*#__PURE__*/function (_Component) {
  _inherits(AttachmentCell, _Component);

  var _super = _createSuper(AttachmentCell);

  function AttachmentCell() {
    var _this;

    _classCallCheck(this, AttachmentCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getUserAvatar", function () {
      var message = _this.props.message;
      var user = message.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/profile/".concat(user.name)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "align-self-end",
        user: user,
        size: 40
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "isImageType", function (mimeType) {
      return mimeType === 'image/jpeg' || mimeType === 'image/png';
    });

    return _this;
  }

  _createClass(AttachmentCell, [{
    key: "getAttachmentDetail",
    value: function getAttachmentDetail() {
      var message = this.props.message;
      var attachment = message.attachment;
      var link = attachment.url;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(attachment)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "cp-attachment d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
          className: "la la-paperclip cp-fs-lg"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          className: "mr-2 fs-sm"
        }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["truncate"])(attachment.name, 20)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
          className: "ml-0 mb-0",
          type: "dashed",
          shape: "circle",
          href: link,
          icon: "download"
        })));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "cp-attachment d-flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
          className: "la la-ban cp-fs-lg mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Attachment Deleted",
          id: "chats.attachment_deleted"
        })));
      }
    }
  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      var message = this.props.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
        className: "text-muted"
      }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["utcDateCalendarTime"])(message.created_at));
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.props.mode;
      var itemClass = mode === 'right' ? "cp-chat-item flex-row-reverse" : "cp-chat-item";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: itemClass
      }, this.getUserAvatar(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-bubble-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-bubble d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-message mb-2"
      }, this.getAttachmentDetail()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "cp-time text-right"
      }, this.getTimestamp()))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AttachmentCell;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = AttachmentCell;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AttachmentCell, "AttachmentCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(AttachmentCell, "AttachmentCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\AttachmentCell\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/ChatNotFound/index.js":
/*!********************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/ChatNotFound/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/result */ "./node_modules/antd/lib/result/index.js");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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




var NotFound = /*#__PURE__*/function (_Component) {
  _inherits(NotFound, _Component);

  var _super = _createSuper(NotFound);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _super.apply(this, arguments);
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      var onToggleDrawer = this.props.onToggleDrawer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "d-flex align-items-center w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "text-center w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_0___default.a, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Chat could not be found.",
          id: "chats.chat_not_found_title"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "primary",
          className: "d-inline-block d-lg-none mt-3",
          onClick: onToggleDrawer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Show Chats",
          id: "chat.show_chats"
        })),
        subTitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Please, select a new chat to display!",
          id: "chats.chat_not_found_sub_title"
        }),
        status: "404"
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

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = NotFound;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFound, "NotFound", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(NotFound, "NotFound", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\ChatNotFound\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/MarketplaceRating/index.js":
/*!*************************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/MarketplaceRating/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/comment */ "./node_modules/antd/lib/comment/index.js");
/* harmony import */ var antd_lib_comment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_comment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/rate */ "./node_modules/antd/lib/rate/index.js");
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
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









var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a.TextArea;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({
  successful: {
    "id": "admin.review_submitted_successful",
    "defaultMessage": "You review has been submitted."
  },
  review: {
    "id": "admin.textarea_review_placeholder",
    "defaultMessage": "Write a review..."
  }
});

var MarketplaceRating = /*#__PURE__*/function (_Component) {
  _inherits(MarketplaceRating, _Component);

  var _super = _createSuper(MarketplaceRating);

  function MarketplaceRating(props) {
    var _this;

    _classCallCheck(this, MarketplaceRating);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          trade = _this$props.trade;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('chats.marketplace.submit-review', {
        trade: trade.id
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                loading: false,
                submitted: true
              });
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleFormError"])(error, form, values, function () {
              _this.setState({
                loading: false
              });
            });
          });

          _this.setState({
            loading: true
          });
        }
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.state = {
      submitted: false,
      loading: false
    };
    return _this;
  }

  _createClass(MarketplaceRating, [{
    key: "canSubmitReview",
    value: function canSubmitReview() {
      var _this$props2 = this.props,
          trade = _this$props2.trade,
          auth = _this$props2.auth;
      var submitted = this.state.submitted;
      if (trade.status !== 'successful') return false;

      if (trade.buyer_id === auth.user.id) {
        return trade.seller_rateable && !submitted;
      }

      if (trade.seller_id === auth.user.id) {
        return trade.buyer_rateable && !submitted;
      }

      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.canSubmitReview()) return null;
      var _this$props3 = this.props,
          intl = _this$props3.intl,
          form = _this$props3.form;
      var getFieldDecorator = form.getFieldDecorator;
      var loading = this.state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "px-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_comment__WEBPACK_IMPORTED_MODULE_0___default.a, {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, getFieldDecorator('comment', {
          rules: [{
            type: 'string',
            required: true,
            min: 3,
            max: 200
          }]
        })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(TextArea, {
          style: {
            resize: 'none'
          },
          placeholder: intl.formatMessage(messages.review),
          rows: 3
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }), ":"), getFieldDecorator('rating', {
          rules: [{
            type: 'number',
            required: true,
            min: 1,
            max: 5
          }]
        })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_rate__WEBPACK_IMPORTED_MODULE_2___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
          htmlType: "submit",
          loading: loading,
          className: "mb-0",
          shape: "round",
          type: "primary"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Submit Review",
          id: "marketplace.submit_review"
        })))))
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

  return MarketplaceRating;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_7__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_13__["default"])())(MarketplaceRating);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(MarketplaceRating, "MarketplaceRating", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(MarketplaceRating, "MarketplaceRating", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceRating\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/MarketplaceTrade/components/PriceCard/index.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/MarketplaceTrade/components/PriceCard/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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



var PriceCard = /*#__PURE__*/function (_Component) {
  _inherits(PriceCard, _Component);

  var _super = _createSuper(PriceCard);

  function PriceCard() {
    _classCallCheck(this, PriceCard);

    return _super.apply(this, arguments);
  }

  _createClass(PriceCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styleName = _this$props.styleName,
          name = _this$props.name,
          price = _this$props.price;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(styleName, " cp-card-price mb-0")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "text-muted"
      }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "font-weight-medium"
      }, price));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PriceCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = PriceCard;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PriceCard, "PriceCard", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(PriceCard, "PriceCard", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\PriceCard\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/MarketplaceTrade/components/VerificationForm/index.js":
/*!****************************************************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/MarketplaceTrade/components/VerificationForm/index.js ***!
  \****************************************************************************************************************/
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
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
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





var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  twoFactorCode: {
    "id": "marketplace.input_two_factor_code_placeholder",
    "defaultMessage": "Enter your Two Factor code."
  },
  password: {
    "id": "marketplace.input_password_placeholder",
    "defaultMessage": "Enter your Password."
  }
});

var VerificationForm = /*#__PURE__*/function (_Component) {
  _inherits(VerificationForm, _Component);

  var _super = _createSuper(VerificationForm);

  function VerificationForm() {
    var _this;

    _classCallCheck(this, VerificationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "cancel", function () {
      var onCancel = _this.props.onCancel;

      if (typeof onCancel === "function") {
        return onCancel();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function () {
      var _this$props = _this.props,
          form = _this$props.form,
          onSubmit = _this$props.onSubmit;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors) && typeof onSubmit === "function") {
          return onSubmit(values.code);
        }
      });
    });

    return _this;
  }

  _createClass(VerificationForm, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          withTwoFactor = _this$props2.withTwoFactor,
          intl = _this$props2.intl;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "p-2 text-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, null, withTwoFactor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Token",
          id: "marketplace.token"
        })
      }, getFieldDecorator('code', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        placeholder: intl.formatMessage(messages.twoFactorCode)
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Password",
          id: "marketplace.password"
        })
      }, getFieldDecorator('code', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        placeholder: intl.formatMessage(messages.password)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "mt-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        block: true,
        onClick: this.submit,
        className: "mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        defaultMessage: "Approve Trade",
        id: "marketplace.approve_trade"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "dashed",
        block: true,
        onClick: this.cancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        defaultMessage: "Cancel",
        id: "marketplace.cancel"
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

  return VerificationForm;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_6__["pipe"])(Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__["default"])())(VerificationForm);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(VerificationForm, "VerificationForm", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(VerificationForm, "VerificationForm", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\components\\VerificationForm\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/MarketplaceTrade/index.js":
/*!************************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/MarketplaceTrade/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js");
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_statistic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/statistic */ "./node_modules/antd/lib/statistic/index.js");
/* harmony import */ var antd_lib_statistic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_statistic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_PriceCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PriceCard */ "./resources/routes/chat/components/Body/components/MarketplaceTrade/components/PriceCard/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_ConfirmAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/ConfirmAction */ "./resources/components/ConfirmAction/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var _components_VerificationForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/VerificationForm */ "./resources/routes/chat/components/Body/components/MarketplaceTrade/components/VerificationForm/index.js");
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












var Countdown = antd_lib_statistic__WEBPACK_IMPORTED_MODULE_11___default.a.Countdown;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_13__["defineMessages"])({
  approved: {
    "id": "chats.marketplace_approved_successful",
    "defaultMessage": "Trade has been approved."
  },
  disputed: {
    "id": "chats.marketplace_disputed_successful",
    "defaultMessage": "A moderator will be in touch soon."
  },
  cancelled: {
    "id": "chats.marketplace_cancelled_successful",
    "defaultMessage": "Trade has been cancelled."
  },
  confirmed: {
    "id": "chats.marketplace_confirmed_successful",
    "defaultMessage": "Trade has been marked as paid."
  }
});

var MarketplaceTrade = /*#__PURE__*/function (_Component) {
  _inherits(MarketplaceTrade, _Component);

  var _super = _createSuper(MarketplaceTrade);

  function MarketplaceTrade(props) {
    var _this;

    _classCallCheck(this, MarketplaceTrade);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onFinishCountDown", function () {
      _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "showInstructions", function (trade) {
      antd_lib_modal__WEBPACK_IMPORTED_MODULE_10___default.a.info({
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          style: {
            whiteSpace: 'pre-line'
          }
        }, trade.instructions)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showTerms", function (trade) {
      antd_lib_modal__WEBPACK_IMPORTED_MODULE_10___default.a.info({
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          style: {
            whiteSpace: 'pre-line'
          }
        }, trade.terms)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      var onUpdate = _this.props.onUpdate;

      if (typeof onUpdate === "function") {
        return onUpdate();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "canApproveTrade", function (trade) {
      var auth = _this.props.auth;
      if (!trade.confirmed_at) return false;
      return _this.isOnGoing(trade) && (auth.user.id === trade.seller.id || _this.userCanManageTrade(trade));
    });

    _defineProperty(_assertThisInitialized(_this), "approve", function (trade, code) {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var intl = _this.props.intl;
      var endpoint = route('chats.marketplace.approve', {
        trade: trade.id
      });

      _this.setState({
        loading: true
      });

      axios.post(endpoint.url(), {
        code: code
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleSuccess"])(response, function () {
          _this.setState({
            loading: false
          });

          _this.update();

          _this.toggleVerificationForm();
        }, intl.formatMessage(messages.approved));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleError"])(error, function () {
          _this.setState({
            loading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isOnGoing", function (trade) {
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(trade) && (trade.status === "active" || trade.status === "dispute");
    });

    _defineProperty(_assertThisInitialized(_this), "canConfirmTrade", function (trade) {
      var auth = _this.props.auth;
      var deadline = moment__WEBPACK_IMPORTED_MODULE_15___default.a.utc(trade.cancels_at);
      if (trade.confirmed_at) return false;
      if (moment__WEBPACK_IMPORTED_MODULE_15___default()().isAfter(deadline.local())) return false;
      if (trade.status !== 'active') return false;
      return auth.user.id === trade.buyer_id;
    });

    _defineProperty(_assertThisInitialized(_this), "confirm", function (trade) {
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var intl = _this.props.intl;
      var endpoint = route('chats.marketplace.confirm', {
        trade: trade.id
      });

      _this.setState({
        loading: true
      });

      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleSuccess"])(response, function () {
          _this.setState({
            loading: false
          });

          _this.update();
        }, intl.formatMessage(messages.confirmed));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleError"])(error, function () {
          _this.setState({
            loading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "canCancelTrade", function (trade) {
      var auth = _this.props.auth;
      return _this.isOnGoing(trade) && (_this.userCanManageTrade(trade) || auth.user.id === trade.buyer_id);
    });

    _defineProperty(_assertThisInitialized(_this), "cancel", function (trade) {
      var _this$api3 = _this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var intl = _this.props.intl;
      var endpoint = route('chats.marketplace.cancel', {
        trade: trade.id
      });

      _this.setState({
        loading: true
      });

      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleSuccess"])(response, function (data) {
          _this.setState({
            loading: false
          });

          _this.update();
        }, intl.formatMessage(messages.cancelled));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleError"])(error, function () {
          _this.setState({
            loading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "canDisputeTrade", function (trade) {
      if (!trade.confirmed_at) return false;
      if (trade.status !== 'active') return false;
      var confirmedAt = moment__WEBPACK_IMPORTED_MODULE_15___default.a.utc(trade.confirmed_at);
      var createdAt = moment__WEBPACK_IMPORTED_MODULE_15___default.a.utc(trade.created_at);
      var cancelsAt = moment__WEBPACK_IMPORTED_MODULE_15___default.a.utc(trade.cancels_at);
      var disputableAfter = cancelsAt.diff(createdAt);
      var timeElapsed = moment__WEBPACK_IMPORTED_MODULE_15___default()().diff(confirmedAt.local());
      return timeElapsed > disputableAfter && _this.userIsPartOfTrade(trade);
    });

    _defineProperty(_assertThisInitialized(_this), "dispute", function (trade) {
      var _this$api4 = _this.api,
          axios = _this$api4.axios,
          route = _this$api4.route;
      var intl = _this.props.intl;
      var endpoint = route('chats.marketplace.dispute', {
        trade: trade.id
      });

      _this.setState({
        loading: true
      });

      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleSuccess"])(response, function (data) {
          _this.setState({
            loading: false
          });

          _this.update();
        }, intl.formatMessage(messages.disputed));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_21__["handleError"])(error, function () {
          _this.setState({
            loading: false
          });
        });
      });
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

    _defineProperty(_assertThisInitialized(_this), "toggleVerificationForm", function () {
      _this.setState(function (_ref) {
        var showVerificationForm = _ref.showVerificationForm;
        return {
          showVerificationForm: !showVerificationForm
        };
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_20__["default"]();
    _this.state = {
      showVerificationForm: false,
      loading: false
    };
    return _this;
  }

  _createClass(MarketplaceTrade, [{
    key: "userCanManageTrade",
    value: function userCanManageTrade(trade) {
      var auth = this.props.auth;
      return auth.can('manage_marketplace') && !this.userIsPartOfTrade(trade);
    }
  }, {
    key: "userIsPartOfTrade",
    value: function userIsPartOfTrade(trade) {
      var auth = this.props.auth;
      return auth.user.id === trade.seller_id || auth.user.id === trade.buyer_id;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          trade = _this$props.trade,
          auth = _this$props.auth;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(trade) || !this.isOnGoing(trade)) return null;
      var _this$state = this.state,
          loading = _this$state.loading,
          showVerificationForm = _this$state.showVerificationForm;
      var twoFactorSetting = auth.twoFactorSetting();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "cp-trade pt-3",
        key: trade.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Trade Status",
        id: "chats.trade_status"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_7___default.a, {
        color: this.getStatusColor(trade.status)
      }, lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8___default()(trade.status)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "px-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PriceCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
        price: trade.formatted_amount_price,
        styleName: "mb-3",
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Amount",
          id: "common.amount"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PriceCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
        price: trade.formatted_rate,
        styleName: "mb-3",
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        })
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PriceCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
        price: trade.coin_name,
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PriceCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
        price: trade.formatted_fee_price,
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Fee",
          id: "common.fee"
        })
      })))), !trade.confirmed_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Countdown, {
        onFinish: this.onFinishCountDown,
        value: moment__WEBPACK_IMPORTED_MODULE_15___default.a.utc(trade.cancels_at).local(),
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Payment Deadline",
          id: "common.payment_deadline"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "my-3 text-center w-100"
      }, this.canApproveTrade(trade) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, showVerificationForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_VerificationForm__WEBPACK_IMPORTED_MODULE_22__["default"], {
        onSubmit: function onSubmit(code) {
          return _this2.approve(trade, code);
        },
        onCancel: this.toggleVerificationForm,
        withTwoFactor: twoFactorSetting.marketplace()
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "default",
        shape: "round",
        onClick: this.toggleVerificationForm,
        className: "mx-0 mb-2 cp-btn-success",
        icon: "check-circle",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Release Coin",
        id: "trade.release_coin"
      })))), this.canConfirmTrade(trade) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_ConfirmAction__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onConfirm: function onConfirm() {
          return _this2.confirm(trade);
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Are you sure you want to {action}?",
          id: "trade.mark_trade_as_paid_confirmation",
          values: {
            action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
              defaultMessage: "Mark Trade as Paid",
              id: "trade.mark_trade_as_paid"
            }))
          }
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "default",
        icon: "check",
        size: "small",
        className: "mx-0 mb-2",
        shape: "round"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Mark Trade as Paid",
        id: "trade.mark_trade_as_paid"
      }))))), this.canCancelTrade(trade) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_ConfirmAction__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onConfirm: function onConfirm() {
          return _this2.cancel(trade);
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Are you sure you want to {action}?",
          id: "offer.cancel_trade_confirmation",
          values: {
            action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
              defaultMessage: "Cancel Trade",
              id: "trade.cancel_trade"
            }))
          }
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "default",
        shape: "round",
        className: "cp-btn-danger mx-0 mb-2",
        icon: "close-circle",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Cancel Trade",
        id: "trade.cancel_trade"
      }))))), this.canDisputeTrade(trade) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_ConfirmAction__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onConfirm: function onConfirm() {
          return _this2.dispute(trade);
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Are you sure you want to {action}?",
          id: "offer.raise_dispute_confirmation",
          values: {
            action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
              defaultMessage: "Raise Dispute",
              id: "trade.raise_dispute"
            }))
          }
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "default",
        shape: "round",
        className: "cp-btn-warning mx-0 mb-2",
        icon: "flag",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Raise Dispute",
        id: "trade.raise_dispute"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "px-2 mb-3 text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "mr-2",
        onClick: function onClick() {
          return _this2.showTerms(trade);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Terms",
        id: "common.terms"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "and",
        id: "common.and"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "mr-2",
        onClick: function onClick() {
          return _this2.showInstructions(trade);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Instructions",
        id: "common.instruction"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", {
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "{buyer} to pay {offerAmount} to {seller}",
        values: {
          seller: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, trade.seller.name),
          offerAmount: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, trade.formatted_offer_amount),
          buyer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, trade.buyer.name)
        },
        id: "chats.trade_payment_instruction"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-2"
      }, trade.payment_method_name), trade.payment_method_description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
        overlayStyle: {
          maxWidth: 250
        },
        content: trade.payment_method_description,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          id: "common.payment_method_description",
          defaultMessage: "Description"
        }),
        trigger: "click"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "question-circle",
        theme: "filled"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_6___default.a, null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MarketplaceTrade;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_17__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_18__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_13__["injectIntl"])(MarketplaceTrade);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Countdown, "Countdown", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(MarketplaceTrade, "MarketplaceTrade", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(Countdown, "Countdown", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(MarketplaceTrade, "MarketplaceTrade", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\MarketplaceTrade\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/components/TextCell/index.js":
/*!****************************************************************************!*\
  !*** ./resources/routes/chat/components/Body/components/TextCell/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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







var TextCell = /*#__PURE__*/function (_Component) {
  _inherits(TextCell, _Component);

  var _super = _createSuper(TextCell);

  function TextCell() {
    var _this;

    _classCallCheck(this, TextCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getUserAvatar", function () {
      var message = _this.props.message;
      var user = message.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        to: "/profile/".concat(user.name)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "align-self-end",
        user: user,
        size: 40
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "getTextDetail", function () {
      var message = _this.props.message;

      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(message.text)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "la la-ban mr-1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Message Deleted",
          id: "chats.message_deleted"
        })));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, message.text.body);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTimestamp", function () {
      var message = _this.props.message;
      return message.created_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "text-muted"
      }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_3__["utcDateCalendarTime"])(message.created_at));
    });

    return _this;
  }

  _createClass(TextCell, [{
    key: "render",
    value: function render() {
      var mode = this.props.mode;
      var itemClass = mode === 'right' ? "cp-chat-item flex-row-reverse" : "cp-chat-item";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: itemClass
      }, this.getUserAvatar(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-bubble-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-bubble d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-message mb-2"
      }, this.getTextDetail()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-time text-right"
      }, this.getTimestamp()))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TextCell;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = TextCell;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextCell, "TextCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(TextCell, "TextCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\components\\TextCell\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Body/index.js":
/*!********************************************************!*\
  !*** ./resources/routes/chat/components/Body/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var _components_ChatNotFound__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ChatNotFound */ "./resources/routes/chat/components/Body/components/ChatNotFound/index.js");
/* harmony import */ var _components_TextCell__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/TextCell */ "./resources/routes/chat/components/Body/components/TextCell/index.js");
/* harmony import */ var support_Helpers_Pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! support/Helpers/Pagination */ "./resources/support/Helpers/Pagination/index.js");
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_ActivityCell__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/ActivityCell */ "./resources/routes/chat/components/Body/components/ActivityCell/index.js");
/* harmony import */ var _components_AttachmentCell__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/AttachmentCell */ "./resources/routes/chat/components/Body/components/AttachmentCell/index.js");
/* harmony import */ var support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! support/Services/Broadcast/Private */ "./resources/support/Services/Broadcast/Private.js");
/* harmony import */ var _components_MarketplaceTrade__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/MarketplaceTrade */ "./resources/routes/chat/components/Body/components/MarketplaceTrade/index.js");
/* harmony import */ var _components_MarketplaceRating__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/MarketplaceRating */ "./resources/routes/chat/components/Body/components/MarketplaceRating/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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





















var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_13___default.a.TextArea;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_18__["defineMessages"])({
  inputMessage: {
    "id": "chats.input_message_placeholder",
    "defaultMessage": "Type a message..."
  }
});

var Body = /*#__PURE__*/function (_Component) {
  _inherits(Body, _Component);

  var _super = _createSuper(Body);

  function Body(props) {
    var _this;

    _classCallCheck(this, Body);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "marketplaceTradeSavedListener", function (e) {
      _this.fetchMarketplaceTrade();
    });

    _defineProperty(_assertThisInitialized(_this), "newChatMessageListener", function (e) {
      var auth = _this.props.auth;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(e.message)) return;
      var message = e.message;

      if (message.user_id !== auth.user.id) {
        _this.updateParticipation(message.chat_id);
      }

      _this.setState(function (_ref) {
        var data = _ref.data;
        return {
          data: _this.sortMessages(data.concat(message))
        };
      }, function () {
        _this.scrollToBottom();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMarketplaceTradeUpdate", function () {
      _this.toggleMarketplaceTradeDrawer();

      _this.fetchMarketplaceTrade();
    });

    _defineProperty(_assertThisInitialized(_this), "updateParticipation", function (chatId) {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      if (!chatId) return;
      var endpoint = route('chats.update-participation', {
        chat: chatId
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response);
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendText", function () {
      var _this$state = _this.state,
          chat = _this$state.chat,
          text = _this$state.text;
      if (!text || !_this.canSendMessage()) return;
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('chats.messages.save-text', {
        chat: chat.id
      });
      axios.post(endpoint.url(), {
        body: text
      }).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, function () {
          _this.setState({
            sendingText: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error, function () {
          _this.setState({
            sendingText: false
          });
        });
      });

      _this.setState({
        sendingText: true,
        text: ""
      }, function () {
        _this.scrollToBottom();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var status = _this.canSendMessage();

      _this.setState({
        sendingAttachment: status
      }, function () {
        if (status) _this.scrollToBottom();
      });

      return status;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function (message) {
      _this.setState(function (_ref2) {
        var data = _ref2.data;
        return {
          sendingAttachment: false,
          data: _this.sortMessages(data.concat(message))
        };
      }, function () {
        _this.scrollToBottom();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (errors) {
      if (lodash_has__WEBPACK_IMPORTED_MODULE_11___default()(errors, 'file')) {
        errors.file.forEach(function (error) {
          return antd_lib_message__WEBPACK_IMPORTED_MODULE_10___default.a.error(error);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMessages", function () {
      var _this$state2 = _this.state,
          filters = _this$state2.filters,
          chat = _this$state2.chat,
          params = _this$state2.params;

      var nextParams = _objectSpread(_objectSpread({}, params), {}, {
        current: 1
      });

      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(chat) || !chat.id) return;

      var endpoint = _this.api.route('chats.messages.table', {
        chat: chat.id
      }).url();

      _this.mesagePagination = new support_Helpers_Pagination__WEBPACK_IMPORTED_MODULE_25__["default"](_this.api, endpoint);

      _this.setState({
        loading: true,
        data: []
      });

      _this.mesagePagination.fetchData(nextParams, filters, function (page) {
        var nextHasMore = Boolean(page.links.next);

        _this.setState(function () {
          return {
            data: _this.sortMessages(page.data),
            loading: false,
            hasMore: false,
            params: _objectSpread(_objectSpread({}, nextParams), {}, {
              total: page.meta.total
            })
          };
        }, function () {
          var element = _this.scrollParent;

          if (typeof element !== "undefined") {
            element.scrollTop = element.scrollHeight;

            _this.setState({
              hasMore: nextHasMore
            });

            console.log('Showing Latest Messages');
          }
        });
      }, function () {
        _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sortMessages", function (messages) {
      if (!Array.isArray(messages)) return messages;
      messages = messages.sort(function (a, b) {
        return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_16__["sortDate"])(a.created_at, b.created_at);
      });
      return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9___default()(messages, 'id');
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadMore", function () {
      if (!_this.canLoadMoreMessages()) return;
      var _this$state3 = _this.state,
          params = _this$state3.params,
          filters = _this$state3.filters;

      var nextParams = _objectSpread(_objectSpread({}, params), {}, {
        current: params.current + 1
      });

      _this.mesagePagination.fetchData(nextParams, filters, function (page) {
        _this.setState(function (_ref3) {
          var data = _ref3.data;
          return {
            data: _this.sortMessages(data.concat(page.data)),
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

      _this.setState({
        loadingMore: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getUserAvatar", function () {
      var participant = _this.getHighlightedParticipant();

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(participant)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_22__["default"], {
          showPresence: false,
          user: participant.user,
          size: 40
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
          icon: "message",
          size: 40
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeText", function (e) {
      _this.setState({
        text: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextKeyUp", function (e) {
      if (e.key === 'Enter') _this.sendText();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMarketplaceTradeDrawer", function () {
      _this.changeFullscreen(false);

      _this.setState(function (_ref4) {
        var marketplaceTradeDrawerState = _ref4.marketplaceTradeDrawerState;
        return {
          marketplaceTradeDrawerState: !marketplaceTradeDrawerState
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setScrollWrapper", function (ref) {
      if (ref !== _this.scrollWrapper && ref !== null) {
        var simpleBar = new simplebar__WEBPACK_IMPORTED_MODULE_26__["default"](ref);
        _this.scrollParent = simpleBar.getScrollElement();
        _this.scrollWrapper = ref;
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

    _this.broadcast = new support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_30__["default"]();
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_20__["default"]();
    _this.state = {
      chat: {},
      loadingChat: false,
      data: [],
      hasMore: false,
      params: {
        total: 0,
        pageSize: 40,
        current: 1
      },
      marketplaceTrade: {},
      marketplaceTradeDrawerState: false,
      loading: false,
      loadingMore: false,
      text: "",
      sendingAttachment: false,
      sendingText: false
    };
    return _this;
  }

  _createClass(Body, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchChat();
    }
  }, {
    key: "resetBroadcastChannel",
    value: function resetBroadcastChannel() {
      var chat = this.state.chat;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(chat)) {
        this.broadcast.setChannel('App.Chat.' + chat.id);
      } else {
        this.broadcast.unbind();
      }
    }
  }, {
    key: "fetchMarketplaceTrade",
    value: function fetchMarketplaceTrade() {
      var _this2 = this;

      var chat = this.state.chat;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(chat) || !chat.id) return;
      var _this$api3 = this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var endpoint = route('chats.latest-marketplace-trade', {
        chat: chat.id
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, function (data) {
          _this2.setState({
            marketplaceTrade: data
          }, function () {
            _this2.scrollToBottom();
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error);
      });
    }
  }, {
    key: "bindBroadcastEvents",
    value: function bindBroadcastEvents() {
      this.resetBroadcastChannel();
      this.broadcast.listen('MarketplaceTradeSaved', this.marketplaceTradeSavedListener);
      this.broadcast.listen('NewChatMessage', this.newChatMessageListener);
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var container = this.scrollParent;

      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, {
    key: "canSendMessage",
    value: function canSendMessage() {
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(this.state.chat) && !this.state.sendingAttachment && !this.state.sendingText && this.showMarketplaceTrades();
    }
  }, {
    key: "canLoadMoreMessages",
    value: function canLoadMoreMessages() {
      var _this$state4 = this.state,
          hasMore = _this$state4.hasMore,
          loadingMore = _this$state4.loadingMore,
          loading = _this$state4.loading;
      return hasMore && !loadingMore && !loading;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.broadcast.unbind();
      this.api.cancel();
    }
  }, {
    key: "fetchChat",
    value: function fetchChat() {
      var _this3 = this;

      var _this$api4 = this.api,
          axios = _this$api4.axios,
          route = _this$api4.route;
      var activeChat = this.props.activeChat;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(activeChat)) return;
      var endpoint = route('chats.get', {
        chat: activeChat.token
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleSuccess"])(response, function (data) {
          _this3.setState({
            loadingChat: false,
            chat: data
          }, function () {
            _this3.fetchMessages();

            _this3.fetchMarketplaceTrade();

            _this3.updateParticipation(data.id);

            _this3.bindBroadcastEvents();
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_19__["handleError"])(error, function () {
          _this3.setState({
            loadingChat: false
          });
        });
      });
      this.setState({
        loadingChat: true,
        chat: {}
      });
    }
  }, {
    key: "getHighlightedParticipant",
    value: function getHighlightedParticipant() {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(this.highlightedParticpant)) {
        var chat = this.state.chat;
        var auth = this.props.auth;
        var participants = chat.participants;
        this.highlightedParticpant = lodash_find__WEBPACK_IMPORTED_MODULE_7___default()(participants, function (o) {
          return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(o.user) && o.user.id !== auth.user.id;
        });
      }

      return this.highlightedParticpant;
    }
  }, {
    key: "getChatTitle",
    value: function getChatTitle() {
      var chat = this.state.chat;
      var participant = this.getHighlightedParticipant();
      var participants = chat.participants;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(participant)) {
        var profileLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__["Link"], {
          to: "/profile/".concat(participant.user.name)
        }, participant.user.name);

        if (participants.length > 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["FormattedMessage"], {
            defaultMessage: "{user} and {total} other(s)",
            id: "chats.view_title",
            values: {
              total: participants.length - 1,
              user: profileLink
            }
          });
        } else {
          return profileLink;
        }
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["FormattedMessage"], {
          defaultMessage: "You and {total} other(s)",
          id: "chats.default_title",
          values: {
            total: participants.length
          }
        });
      }
    }
  }, {
    key: "changeFullscreen",
    value: function changeFullscreen(fullscreen) {
      var onChangeFullscreen = this.props.onChangeFullscreen;

      if (typeof onChangeFullscreen === "function") {
        return onChangeFullscreen(fullscreen);
      }
    }
  }, {
    key: "showMarketplaceTrades",
    value: function showMarketplaceTrades() {
      var marketplaceTrade = this.state.marketplaceTrade;
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(marketplaceTrade) && (marketplaceTrade.status === "active" || marketplaceTrade.status === "dispute");
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state5 = this.state,
          chat = _this$state5.chat,
          data = _this$state5.data,
          text = _this$state5.text,
          marketplaceTrade = _this$state5.marketplaceTrade,
          loadingChat = _this$state5.loadingChat,
          loading = _this$state5.loading,
          loadingMore = _this$state5.loadingMore,
          hasMore = _this$state5.hasMore,
          marketplaceTradeDrawerState = _this$state5.marketplaceTradeDrawerState;
      var _this$props = this.props,
          auth = _this$props.auth,
          intl = _this$props.intl,
          fullscreen = _this$props.fullscreen,
          onToggleFullscreen = _this$props.onToggleFullscreen,
          onToggleDrawer = _this$props.onToggleDrawer;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_12___default()(chat)) {
        var uploadEndpoint = this.api.route('chats.messages.save-attachment', {
          chat: chat.id
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-chat-main animated fadeIn"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-chat-main-header"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
          className: "d-block d-lg-none cp-chat-btn"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "cp-icon-btn la la-comments",
          onClick: onToggleDrawer
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-chat-main-header-info"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-chat-avatar mr-2 d-none d-sm-block"
        }, this.getUserAvatar()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-chat-contact-name"
        }, this.getChatTitle())), this.showMarketplaceTrades() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
          onClick: this.toggleMarketplaceTradeDrawer,
          type: "dollar-circle",
          theme: "filled",
          className: "animated flash infinite slow mr-2 cp-fs-2x cp-icon-btn",
          style: {
            color: this.getStatusColor(marketplaceTrade.status)
          }
        }), fullscreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "cp-icon-btn la la-compress ml-2 cp-fs-2x",
          onClick: onToggleFullscreen
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "cp-icon-btn la la-expand ml-2 cp-fs-2x",
          onClick: onToggleFullscreen
        })), this.showMarketplaceTrades() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
          visible: marketplaceTradeDrawerState,
          closable: false,
          width: 320,
          onClose: this.toggleMarketplaceTradeDrawer,
          placement: "right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_MarketplaceTrade__WEBPACK_IMPORTED_MODULE_31__["default"], {
          onUpdate: this.onMarketplaceTradeUpdate,
          trade: marketplaceTrade
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default.a, {
          spinning: loading
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          ref: this.setScrollWrapper,
          className: "cp-chat-list-scroll",
          "data-simplebar": true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_27___default.a, {
          useWindow: false,
          loadMore: this.onLoadMore,
          getScrollParent: function getScrollParent() {
            return _this4.scrollParent;
          },
          isReverse: true,
          hasMore: !loadingMore && hasMore,
          pageStart: 1,
          initialLoad: false
        }, loadingMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
          dataSource: data,
          rowKey: function rowKey(record) {
            return record.id;
          },
          renderItem: function renderItem(item) {
            var isOwner = item.user_id === auth.user.id;

            switch (item.type) {
              case 'text':
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_TextCell__WEBPACK_IMPORTED_MODULE_24__["default"], {
                  mode: isOwner ? 'right' : 'left',
                  message: item
                });

              case 'attachment':
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_AttachmentCell__WEBPACK_IMPORTED_MODULE_29__["default"], {
                  mode: isOwner ? 'right' : 'left',
                  message: item
                });

              case 'activity':
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ActivityCell__WEBPACK_IMPORTED_MODULE_28__["default"], {
                  message: item
                });

              default:
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, null);
            }
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_MarketplaceRating__WEBPACK_IMPORTED_MODULE_32__["default"], {
          trade: marketplaceTrade
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-chat-main-footer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
          gutter: 8,
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
          xs: 18,
          sm: 20
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(TextArea, {
          onKeyUp: this.handleTextKeyUp,
          placeholder: intl.formatMessage(messages.inputMessage),
          rows: 2,
          value: text,
          disabled: !this.canSendMessage(),
          autoFocus: true,
          style: {
            maxHeight: '48px',
            resize: 'none'
          },
          onChange: this.onChangeText
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
          xs: 6,
          sm: 4
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
          gutter: 4
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
          span: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "cp-icon-btn"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a, {
          showUploadList: false,
          beforeUpload: this.beforeUpload,
          action: uploadEndpoint.url(),
          customRequest: support_Services_Api__WEBPACK_IMPORTED_MODULE_20__["uploadRequest"],
          onSuccess: this.handleUploadSuccess,
          onError: this.handleUploadError,
          withCredentials: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "la la-paperclip cp-fs-2x"
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
          span: 12
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("i", {
          className: "cp-icon-btn la la-paper-plane cp-fs-2x",
          onClick: this.sendText
        })))))));
      } else if (!loadingChat) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ChatNotFound__WEBPACK_IMPORTED_MODULE_23__["default"], {
          onToggleDrawer: onToggleDrawer
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_21__["default"], null);
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

var mapStateToProps = function mapStateToProps(_ref5) {
  var auth = _ref5.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_15__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_16__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_18__["injectIntl"])(Body);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(Body, "Body", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(Body, "Body", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Body\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Empty/index.js":
/*!*********************************************************!*\
  !*** ./resources/routes/chat/components/Empty/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
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




var Empty = /*#__PURE__*/function (_Component) {
  _inherits(Empty, _Component);

  var _super = _createSuper(Empty);

  function Empty() {
    _classCallCheck(this, Empty);

    return _super.apply(this, arguments);
  }

  _createClass(Empty, [{
    key: "render",
    value: function render() {
      var onToggleDrawer = this.props.onToggleDrawer;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-comment-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-fs-80"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "la la-comments"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "text-muted"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "Select Chat to Begin!",
        id: "chat.select_to_begin"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        className: "d-block d-lg-none mt-3",
        onClick: onToggleDrawer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "Show Chats",
        id: "chat.show_chats"
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

  return Empty;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Empty;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Empty, "Empty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(Empty, "Empty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Empty\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Menu/components/ChatCell/index.js":
/*!****************************************************************************!*\
  !*** ./resources/routes/chat/components/Menu/components/ChatCell/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Services/Broadcast/Private */ "./resources/support/Services/Broadcast/Private.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
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










var ChatCell = /*#__PURE__*/function (_Component) {
  _inherits(ChatCell, _Component);

  var _super = _createSuper(ChatCell);

  function ChatCell(props) {
    var _this;

    _classCallCheck(this, ChatCell);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "chatParticipationChangedListener", function (participation) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(participation)) return;
      var auth = _this.props.auth;

      if (auth.user.id === participation.user_id) {
        _this.setState({
          participation: participation
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "chatUpdatedListener", function (e) {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(e.chat)) return;

      _this.fetchParticipation();

      var endpoint = route('chats.get', {
        chat: e.chat.id
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleSuccess"])(response, function (data) {
          _this.updateChat(data);
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getUserAvatar", function () {
      var participant = _this.getHighlightedParticipant();

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(participant)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: participant.user,
          size: 50
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
          icon: "message",
          size: 50
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMessageDetail", function (message) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;

      switch (message.type) {
        case "activity":
          return _this.getActivityDetail(message.activity, length);

        case "text":
          return _this.getTextDetail(message.text, length);

        case "attachment":
          return _this.getAttachmentDetail(message.attachment, length);

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTextDetail", function (text, length) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(text)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
          className: "la la-ban mr-1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Message Deleted",
          id: "chats.message_deleted"
        })));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["truncate"])(text.body, length));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAttachmentDetail", function (attachment, length) {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(attachment)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
          className: "la la-ban mr-1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Message Deleted",
          id: "chats.message_deleted"
        })));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
          className: "la la-paperclip mr-1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["truncate"])(attachment.name, length)));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getActivityDetail", function (activity, length) {
      return activity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["truncate"])(activity.body, length));
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          chat = _this$props.chat;

      if (typeof onOpen === "function") {
        return onOpen(chat);
      }
    });

    _this.broadcast = new support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_7__["default"]();
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_8__["default"]();
    _this.state = {
      participation: {}
    };
    return _this;
  }

  _createClass(ChatCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindBroadcastEvents();
      this.fetchParticipation();
    }
  }, {
    key: "bindBroadcastEvents",
    value: function bindBroadcastEvents() {
      this.resetBroadcastChannel();
      this.broadcast.listen('ChatParticipationChanged', this.chatParticipationChangedListener);
      this.broadcast.listen('ChatUpdated', this.chatUpdatedListener);
    }
  }, {
    key: "updateChat",
    value: function updateChat(chat) {
      var onChatUpdated = this.props.onChatUpdated;

      if (typeof onChatUpdated === "function") {
        return onChatUpdated(chat);
      }
    }
  }, {
    key: "resetBroadcastChannel",
    value: function resetBroadcastChannel() {
      var chat = this.props.chat;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(chat)) {
        this.broadcast.setChannel('App.Chat.' + chat.id);
      } else {
        this.broadcast.unbind();
      }
    }
  }, {
    key: "fetchParticipation",
    value: function fetchParticipation() {
      var _this2 = this;

      var _this$api2 = this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var chat = this.props.chat;
      var endpoint = route('chats.participation', {
        chat: chat.id
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleSuccess"])(response, function (data) {
          _this2.setState({
            participation: data
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleError"])(error);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var prevChat = prevProps.chat;
      var chat = this.props.chat;

      if (prevChat.id !== chat.id) {
        console.info('ChatCell Updated');
        this.resetBroadcastChannel();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.broadcast.unbind();
      this.api.cancel();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var chat = this.props.chat;
      var participant = this.getHighlightedParticipant();

      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(participant)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Conversation",
          id: "chats.conversation"
        });
      } else {
        var chatTitle = participant.user.name;

        if (chat.participants.length > 1) {
          chatTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            id: "chats.cell_title",
            defaultMessage: "{user} and {total} other(s)",
            values: {
              total: chat.participants.length - 1,
              user: participant.user.name
            }
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "font-weight-medium"
        }, chatTitle));
      }
    }
  }, {
    key: "getUser",
    value: function getUser(id) {
      var _this$props2 = this.props,
          chat = _this$props2.chat,
          auth = _this$props2.auth;
      var participants = chat.participants;

      if (auth.user.id === id) {
        return auth.user;
      } else {
        var participant = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(participants, function (o) {
          return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(o.user) && o.user.id === id;
        });

        return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(participant) ? participant.user : participant;
      }
    }
  }, {
    key: "getLastMessage",
    value: function getLastMessage() {
      var _this$props3 = this.props,
          chat = _this$props3.chat,
          auth = _this$props3.auth;
      var latestMessage = chat.latest_message;
      var participants = chat.participants;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(latestMessage)) return null;
      var messageBy = latestMessage.user;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(messageBy)) {
        if (messageBy.id === auth.user.id) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            className: "font-weight-medium mr-1"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            defaultMessage: "Me",
            id: "common.me"
          }), ":"), this.getMessageDetail(latestMessage, 23));
        } else if (participants.length > 1) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            className: "font-weight-medium mr-1"
          }, messageBy.name, ":"), this.getMessageDetail(latestMessage, 20));
        } else {
          return this.getMessageDetail(latestMessage, 25);
        }
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "font-weight-medium mr-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Unknown User",
          id: "common.unknown_user"
        }), ":"), this.getMessageDetail(latestMessage, 20));
      }
    }
  }, {
    key: "getHighlightedParticipant",
    value: function getHighlightedParticipant() {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(this.highlightedParticpant)) {
        var _this$props4 = this.props,
            chat = _this$props4.chat,
            auth = _this$props4.auth;
        var participants = chat.participants;
        this.highlightedParticpant = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(participants, function (o) {
          return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(o.user) && o.user.id !== auth.user.id;
        });
      }

      return this.highlightedParticpant;
    }
  }, {
    key: "getTime",
    value: function getTime() {
      var chat = this.props.chat;
      var latestMessage = chat.latest_message;
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(latestMessage) ? Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["utcDateCalendarTime"])(latestMessage.created_at) : null;
    }
  }, {
    key: "getUnreadCount",
    value: function getUnreadCount() {
      var participation = this.state.participation;
      var active = this.props.active;
      if (active || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(participation)) return null;
      var value = participation.unread_messages_count;
      if (!value || value <= 0) return null;
      return Object(millify__WEBPACK_IMPORTED_MODULE_10__["default"])(value);
    }
  }, {
    key: "render",
    value: function render() {
      var unreadCount = this.getUnreadCount();
      var active = this.props.active;
      var cellClass = "cp-chat-user-item ".concat(active && 'active');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: cellClass,
        onClick: this.handleClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-chat-user-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-chat-avatar"
      }, this.getUserAvatar()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-chat-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "cp-chat-name h4"
      }, this.getTitle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-chat-desc"
      }, this.getLastMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-chat-time"
      }, this.getTime())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "cp-chat-date"
      }, unreadCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "badge"
      }, unreadCount))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ChatCell;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var _default = ChatCell;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChatCell, "ChatCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(ChatCell, "ChatCell", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\components\\ChatCell\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/components/Menu/index.js":
/*!********************************************************!*\
  !*** ./resources/routes/chat/components/Menu/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/uniqBy */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var _components_ChatCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ChatCell */ "./resources/routes/chat/components/Menu/components/ChatCell/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_Helpers_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Helpers/Pagination */ "./resources/support/Helpers/Pagination/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! support/Services/Broadcast/Private */ "./resources/support/Services/Broadcast/Private.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
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

















var Item = antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a.Item;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["defineMessages"])({
  searchUsers: {
    "id": "chats.input_filter_by_contact_name_placeholder",
    "defaultMessage": "Filter by contact name..."
  }
});

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "chatParticipantCreatedListener", function (e) {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(e.participant)) return;
      var endpoint = route('chats.get', {
        chat: e.participant.chat_id
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_22__["handleSuccess"])(response, function (chat) {
          _this.setState(function (_ref) {
            var data = _ref.data;
            var chats = data.concat(chat);
            return {
              data: _this.sortChats(chats)
            };
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_22__["handleError"])(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChatUpdated", function (chat) {
      var data = _this.state.data;

      var index = lodash_findIndex__WEBPACK_IMPORTED_MODULE_5___default()(data, function (o) {
        return o.id === chat.id;
      });

      var chats = _toConsumableArray(data);

      if (index < 0) {
        chats = chats.concat(chat);
      } else {
        chats[index] = chat;
      }

      chats = _this.sortChats(chats);

      _this.setState({
        data: chats
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sortChats", function (chats) {
      if (!Array.isArray(chats)) return chats;
      chats = chats.sort(function (a, b) {
        return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["sortDate"])(b.updated_at, a.updated_at);
      });
      return lodash_uniqBy__WEBPACK_IMPORTED_MODULE_4___default()(chats, 'id');
    });

    _defineProperty(_assertThisInitialized(_this), "fetchChats", function () {
      var _this$state = _this.state,
          params = _this$state.params,
          filters = _this$state.filters;

      var nextParams = _objectSpread(_objectSpread({}, params), {}, {
        current: 1
      });

      _this.pagination.fetchData(nextParams, filters, function (page) {
        _this.setState(function () {
          return {
            params: _objectSpread(_objectSpread({}, nextParams), {}, {
              total: page.meta.total
            }),
            data: page.data,
            loading: false,
            hasMore: Boolean(page.links.next)
          };
        });
      }, function () {
        _this.setState({
          loading: false
        });
      });

      _this.setState({
        loading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeUserSearch", function (e) {
      var value = e.target.value;
      clearTimeout(_this.searching);
      var filters = _this.state.filters;
      if (!_this.canSearchUser()) return;

      _this.setState({
        filters: _objectSpread(_objectSpread({}, filters), {}, {
          user: value
        })
      });

      _this.searching = setTimeout(_this.fetchChats, 2000);
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchKeyUp", function (e) {
      if (e.key === 'Enter') {
        clearTimeout(_this.searching);

        _this.fetchChats();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadMore", function (page) {
      if (!_this.canLoadMore()) return;
      var _this$state2 = _this.state,
          params = _this$state2.params,
          filters = _this$state2.filters;

      var nextParams = _objectSpread(_objectSpread({}, params), {}, {
        current: params.current + 1
      });

      _this.pagination.fetchData(nextParams, filters, function (page) {
        _this.setState(function (_ref2) {
          var data = _ref2.data;
          var updatedData = data.concat(page.data);
          return {
            data: _this.sortChats(updatedData),
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

      _this.setState({
        loadingMore: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChatOpen", function (chat) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_23__["default"]['chat.view'].path, {
        token: chat.id
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(history)) {
        return history.replace(path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setScrollWrapper", function (ref) {
      if (ref !== _this.scrollWrapper && ref !== null) {
        var simpleBar = new simplebar__WEBPACK_IMPORTED_MODULE_20__["default"](ref);
        _this.scrollParent = simpleBar.getScrollElement();
        _this.scrollWrapper = ref;
      }
    });

    _this.broadcast = new support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_21__["default"]();
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_14__["default"]();
    _this.state = {
      data: [],
      hasMore: false,
      params: {
        total: 0,
        pageSize: 20,
        current: 1
      },
      filters: {
        user: ""
      },
      loadingMore: false,
      loading: false
    };

    var _endpoint = _this.api.route('chats.table').url();

    _this.pagination = new support_Helpers_Pagination__WEBPACK_IMPORTED_MODULE_15__["default"](_this.api, _endpoint);
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindBroadcastEvents();
      this.fetchChats();
    }
  }, {
    key: "bindBroadcastEvents",
    value: function bindBroadcastEvents() {
      this.resetBroadcastChannel();
      this.broadcast.listen('ChatParticipantCreated', this.chatParticipantCreatedListener);
    }
  }, {
    key: "resetBroadcastChannel",
    value: function resetBroadcastChannel() {
      var auth = this.props.auth;

      if (auth.check()) {
        this.broadcast.setChannel('Auth.User.' + auth.user.id);
      } else {
        this.broadcast.unbind();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var prevUser = prevProps.auth.user;
      var user = this.props.auth.user;

      if (prevUser.id !== user.id) {
        console.info('Menu Updated');
        this.resetBroadcastChannel();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.broadcast.unbind();
      this.api.cancel();
    }
  }, {
    key: "canSearchUser",
    value: function canSearchUser() {
      var _this$state3 = this.state,
          loading = _this$state3.loading,
          loadingMore = _this$state3.loadingMore;
      return !(loading || loadingMore);
    }
  }, {
    key: "canLoadMore",
    value: function canLoadMore() {
      var _this$state4 = this.state,
          hasMore = _this$state4.hasMore,
          loadingMore = _this$state4.loadingMore,
          loading = _this$state4.loading;
      return hasMore && !loadingMore && !loading;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state5 = this.state,
          loading = _this$state5.loading,
          loadingMore = _this$state5.loadingMore,
          hasMore = _this$state5.hasMore,
          filters = _this$state5.filters,
          data = _this$state5.data;
      var _this$props = this.props,
          intl = _this$props.intl,
          auth = _this$props.auth,
          activeChat = _this$props.activeChat;
      var totalActiveTrades = auth.user.marketplace_stats.total_active_trades;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-sidenav-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-sidenav-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-user-hd"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-avatar mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: auth.user,
        showPresence: false,
        size: 50
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-module-user-info flex-column justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-module-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Conversations",
        id: "chats.conversations"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-module-user-detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-text-grey d-flex my-1 align-items-center"
      }, totalActiveTrades > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
        count: totalActiveTrades,
        style: {
          backgroundColor: '#2db7f5'
        },
        className: "mb-0 mr-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Active Trades",
        id: "common.active_trades"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-search-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        suffix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "search"
        }),
        placeholder: intl.formatMessage(messages.searchUsers),
        size: "large",
        onKeyUp: this.onSearchKeyUp,
        disabled: !this.canSearchUser(),
        onChange: this.onChangeUserSearch,
        value: filters.user
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-sidenav-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        ref: this.setScrollWrapper,
        className: "cp-chat-sidenav-scroll",
        "data-simplebar": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_12___default.a, {
        useWindow: false,
        getScrollParent: function getScrollParent() {
          return _this2.scrollParent;
        },
        loadMore: this.onLoadMore,
        pageStart: 1,
        hasMore: !loadingMore && hasMore,
        initialLoad: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-chat-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a, {
        dataSource: data,
        rowKey: function rowKey(record) {
          return record.id;
        },
        renderItem: function renderItem(item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Item, {
            className: "p-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ChatCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onChatUpdated: _this2.onChatUpdated,
            active: activeChat && activeChat.token === item.id,
            auth: auth,
            chat: item,
            onOpen: _this2.handleChatOpen
          }));
        }
      })), loadingMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_18__["default"], null))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_16__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"], react_router_dom__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(Menu);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Item, "Item", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(Menu, "Menu", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(Item, "Item", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(Menu, "Menu", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\components\\Menu\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/chat/index.js":
/*!****************************************!*\
  !*** ./resources/routes/chat/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Empty */ "./resources/routes/chat/components/Empty/index.js");
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.js");
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_full_screen__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Menu */ "./resources/routes/chat/components/Menu/index.js");
/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Body */ "./resources/routes/chat/components/Body/index.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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














var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_13__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.chat",
    "defaultMessage": "Chat | {name}"
  }
});

var Chats = /*#__PURE__*/function (_Component) {
  _inherits(Chats, _Component);

  var _super = _createSuper(Chats);

  function Chats(props) {
    var _this;

    _classCallCheck(this, Chats);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onToggleDrawer", function () {
      _this.setState(function (state) {
        return {
          drawerState: !state.drawerState,
          fullscreen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleFullscreen", function () {
      _this.setState(function (state) {
        return {
          fullscreen: !state.fullscreen,
          drawerState: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeFullscreen", function (fullscreen) {
      _this.setState({
        fullscreen: fullscreen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveChatParams", function () {
      var location = _this.props.location;
      var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["matchPath"])(location.pathname, {
        exact: true,
        path: containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_10__["default"]['chat.view'].path,
        strict: false
      });
      return match && match.params;
    });

    _this.state = {
      drawerState: false,
      fullscreen: false
    };
    return _this;
  }

  _createClass(Chats, [{
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_11___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var activeChat = this.getActiveChatParams();
      var _this$state = this.state,
          drawerState = _this$state.drawerState,
          fullscreen = _this$state.fullscreen;
      var sidebar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeChat: activeChat
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_12__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_full_screen__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onChange: this.onChangeFullscreen,
        enabled: fullscreen
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-app-module cp-chat-module"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-chat-module-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: drawerState,
        closable: false,
        onClose: this.onToggleDrawer,
        placement: "left"
      }, sidebar)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "cp-chat-sidenav d-none d-lg-flex"
      }, sidebar), activeChat ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Body__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: activeChat.token,
        onChangeFullscreen: this.onChangeFullscreen,
        onToggleFullscreen: this.onToggleFullscreen,
        fullscreen: fullscreen,
        onToggleDrawer: this.onToggleDrawer,
        activeChat: activeChat
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Empty__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onToggleDrawer: this.onToggleDrawer
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

  return Chats;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_5__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_13__["injectIntl"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Chats);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(Chats, "Chats", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(Chats, "Chats", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\chat\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};;
//# sourceMappingURL=24.149ff060f09e5565233d.js.map