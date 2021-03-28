(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./resources/routes/auth/components/resetPassword/components/SendEmailToken/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/routes/auth/components/resetPassword/components/SendEmailToken/index.js ***!
  \*******************************************************************************************/
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
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var containers_components_ReCaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! containers/components/ReCaptcha */ "./resources/containers/components/ReCaptcha/index.js");
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
  successful: {
    "id": "reset_password.send_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var SendEmailToken = /*#__PURE__*/function (_Component) {
  _inherits(SendEmailToken, _Component);

  var _super = _createSuper(SendEmailToken);

  function SendEmailToken(props) {
    var _this;

    _classCallCheck(this, SendEmailToken);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('auth.reset-password.send-email-token');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSent(values.email);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleFormError"])(error, form, values, function () {
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

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(SendEmailToken, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "triggerSent",
    value: function triggerSent(target) {
      var onSent = this.props.onSent;

      if (typeof onSent === "function") {
        return onSent(target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          form = _this$props2.form,
          recaptcha = _this$props2.recaptcha;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldError = form.getFieldError;
      var confirmLoading = this.state.confirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "mt-3"
      }, getFieldDecorator('email', {
        rules: [{
          required: true
        }, {
          type: 'email'
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, null))), recaptcha.enable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, getFieldDecorator('recaptcha', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(containers_components_ReCaptcha__WEBPACK_IMPORTED_MODULE_10__["default"], {
        errors: getFieldError('recaptcha'),
        settings: recaptcha
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        loading: confirmLoading,
        type: "primary",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        defaultMessage: "Send Code",
        id: "common.send_code"
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

  return SendEmailToken;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var recaptcha = _ref.settings.recaptcha;
  return {
    recaptcha: recaptcha
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_8__["default"])())(SendEmailToken);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(SendEmailToken, "SendEmailToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(SendEmailToken, "SendEmailToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendEmailToken\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/auth/components/resetPassword/components/SendPhoneToken/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/routes/auth/components/resetPassword/components/SendPhoneToken/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_PhoneInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/PhoneInput */ "./resources/components/PhoneInput/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var containers_components_ReCaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! containers/components/ReCaptcha */ "./resources/containers/components/ReCaptcha/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
  invalidPhone: {
    "id": "reset_password.invalid_phone",
    "defaultMessage": "You phone is invalid."
  },
  successful: {
    "id": "reset_password.send_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var SendPhoneToken = /*#__PURE__*/function (_Component) {
  _inherits(SendPhoneToken, _Component);

  var _super = _createSuper(SendPhoneToken);

  function SendPhoneToken(props) {
    var _this;

    _classCallCheck(this, SendPhoneToken);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('auth.reset-password.send-phone-token');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          var data = lodash_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, values);

          if (_this.itl) {
            var countryData = _this.itl.getSelectedCountryData();

            data['phone_country'] = countryData.iso2;
          }

          axios.post(endpoint.url(), data).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSent(data.phone);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleFormError"])(error, form, data, function () {
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

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_7__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(SendPhoneToken, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "triggerSent",
    value: function triggerSent(target) {
      var onSent = this.props.onSent;

      if (typeof onSent === "function") {
        return onSent(target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          form = _this$props2.form,
          recaptcha = _this$props2.recaptcha;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldError = form.getFieldError;
      var confirmLoading = this.state.confirmLoading;
      var component = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "mt-3"
      }, getFieldDecorator('phone', {
        rules: [{
          required: true
        }, {
          validator: function validator(rule, value, callback) {
            if (component.itl && !component.itl.isValidNumber() && value) {
              callback(intl.formatMessage(messages.invalidPhone));
            }

            callback();
          }
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_PhoneInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
        itl: function itl(_itl) {
          return component.itl = _itl;
        }
      }))), recaptcha.enable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, getFieldDecorator('recaptcha', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(containers_components_ReCaptcha__WEBPACK_IMPORTED_MODULE_11__["default"], {
        errors: getFieldError('recaptcha'),
        settings: recaptcha
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        loading: confirmLoading,
        type: "primary",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Send Code",
        id: "common.send_code"
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

  return SendPhoneToken;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var recaptcha = _ref.settings.recaptcha;
  return {
    recaptcha: recaptcha
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__["default"])(), react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(SendPhoneToken);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(SendPhoneToken, "SendPhoneToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(SendPhoneToken, "SendPhoneToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\SendPhoneToken\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/auth/components/resetPassword/components/VerifyEmailToken/index.js":
/*!*********************************************************************************************!*\
  !*** ./resources/routes/auth/components/resetPassword/components/VerifyEmailToken/index.js ***!
  \*********************************************************************************************/
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
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
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







var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  successful: {
    "id": "reset_password.verification_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var VerifyEmailToken = /*#__PURE__*/function (_Component) {
  _inherits(VerifyEmailToken, _Component);

  var _super = _createSuper(VerifyEmailToken);

  function VerifyEmailToken(props) {
    var _this;

    _classCallCheck(this, VerifyEmailToken);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          target = _this$props.target;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('auth.reset-password.verify-email-token');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          var requestData = _objectSpread(_objectSpread({}, values), {}, {
            email: target
          });

          axios.post(endpoint.url(), requestData).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerVerified(data.token);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleFormError"])(error, form, requestData, function () {
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

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(VerifyEmailToken, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "triggerVerified",
    value: function triggerVerified(nonce) {
      var onVerified = this.props.onVerified;

      if (typeof onVerified === "function") {
        return onVerified(nonce);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          form = _this$props2.form;
      var confirmLoading = this.state.confirmLoading;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "mt-3"
      }, getFieldDecorator('token', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        loading: confirmLoading,
        type: "primary",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "Verify Code",
        id: "common.verify_code"
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

  return VerifyEmailToken;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_6__["default"])())(VerifyEmailToken);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(VerifyEmailToken, "VerifyEmailToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(VerifyEmailToken, "VerifyEmailToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyEmailToken\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/auth/components/resetPassword/components/VerifyPhoneToken/index.js":
/*!*********************************************************************************************!*\
  !*** ./resources/routes/auth/components/resetPassword/components/VerifyPhoneToken/index.js ***!
  \*********************************************************************************************/
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
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
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







var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  successful: {
    "id": "reset_password.verification_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var VerifyPhoneToken = /*#__PURE__*/function (_Component) {
  _inherits(VerifyPhoneToken, _Component);

  var _super = _createSuper(VerifyPhoneToken);

  function VerifyPhoneToken(props) {
    var _this;

    _classCallCheck(this, VerifyPhoneToken);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          target = _this$props.target;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('auth.reset-password.verify-phone-token');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          var requestData = _objectSpread(_objectSpread({}, values), {}, {
            phone: target
          });

          axios.post(endpoint.url(), requestData).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerVerified(data.token);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleFormError"])(error, form, requestData, function () {
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

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(VerifyPhoneToken, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "triggerVerified",
    value: function triggerVerified(nonce) {
      var onVerified = this.props.onVerified;

      if (typeof onVerified === "function") {
        return onVerified(nonce);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          form = _this$props2.form;
      var confirmLoading = this.state.confirmLoading;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "mt-3"
      }, getFieldDecorator('token', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        loading: confirmLoading,
        type: "primary",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "Verify Code",
        id: "common.verify_code"
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

  return VerifyPhoneToken;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_6__["default"])())(VerifyPhoneToken);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(VerifyPhoneToken, "VerifyPhoneToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(VerifyPhoneToken, "VerifyPhoneToken", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\components\\VerifyPhoneToken\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/auth/components/resetPassword/index.js":
/*!*****************************************************************!*\
  !*** ./resources/routes/auth/components/resetPassword/index.js ***!
  \*****************************************************************/
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
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var routes_auth_components_resetPassword_components_SendEmailToken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! routes/auth/components/resetPassword/components/SendEmailToken */ "./resources/routes/auth/components/resetPassword/components/SendEmailToken/index.js");
/* harmony import */ var routes_auth_components_resetPassword_components_SendPhoneToken__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! routes/auth/components/resetPassword/components/SendPhoneToken */ "./resources/routes/auth/components/resetPassword/components/SendPhoneToken/index.js");
/* harmony import */ var routes_auth_components_resetPassword_components_VerifyEmailToken__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! routes/auth/components/resetPassword/components/VerifyEmailToken */ "./resources/routes/auth/components/resetPassword/components/VerifyEmailToken/index.js");
/* harmony import */ var routes_auth_components_resetPassword_components_VerifyPhoneToken__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! routes/auth/components/resetPassword/components/VerifyPhoneToken */ "./resources/routes/auth/components/resetPassword/components/VerifyPhoneToken/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var containers_components_ReCaptcha__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! containers/components/ReCaptcha */ "./resources/containers/components/ReCaptcha/index.js");
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














var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["defineMessages"])({
  successful: {
    "id": "reset_password.successful",
    "defaultMessage": "Password changed Successfully."
  },
  password: {
    "id": "reset_password.password",
    "defaultMessage": "Password"
  },
  verifyPassword: {
    "id": "reset_password.verify_password",
    "defaultMessage": "Verify Password"
  }
});

var ResetPassword = /*#__PURE__*/function (_Component) {
  _inherits(ResetPassword, _Component);

  var _super = _createSuper(ResetPassword);

  function ResetPassword(props) {
    var _this;

    _classCallCheck(this, ResetPassword);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleVerificationChange", function (e) {
      _this.setState({
        verification: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTokenSent", function (target) {
      _this.setState({
        target: target,
        tokenSent: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTokenVerified", function (nonce) {
      _this.setState({
        nonce: nonce
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resendToken", function () {
      _this.setState({
        target: "",
        tokenSent: false,
        nonce: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          nonce = _this$state.nonce,
          verification = _this$state.verification,
          target = _this$state.target;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          history = _this$props.history;
      var endpoint = route('auth.reset-password.reset');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(errors)) {
          var requestData = _objectSpread(_objectSpread({}, values), {}, {
            token: nonce
          });

          requestData[verification] = target;
          axios.post(endpoint.url(), requestData).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(history)) history.replace("/");
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_16__["handleFormError"])(error, form, requestData, function () {
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

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this.state = {
      target: "",
      verification: "email",
      nonce: "",
      confirmLoading: false,
      tokenSent: false
    };
    return _this;
  }

  _createClass(ResetPassword, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          form = _this$props2.form,
          recaptcha = _this$props2.recaptcha;
      var _this$state2 = this.state,
          verification = _this$state2.verification,
          tokenSent = _this$state2.tokenSent,
          target = _this$state2.target,
          nonce = _this$state2.nonce,
          confirmLoading = _this$state2.confirmLoading;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldError = form.getFieldError;
      var radioStyle = {
        display: 'block',
        padding: '10px 0'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cp-login-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cp-login-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-center cp-login-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "cp-login-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "Reset Password",
        id: "common.reset_password"
      }))), !nonce && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-justify"
      }, !tokenSent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Select your preferred {verification} method to reset your password." + " We will send you a code if this method is associated with any account and has been verified.",
          id: "reset_password.select_method_info",
          values: {
            verification: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
              className: "font-weight-semi-bold"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
              defaultMessage: "Verification",
              id: "common.verification"
            }))
          }
        })
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "success",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "A code has been sent to your selected method, " + "you should receive it if it is associated with an account and has been verified. " + "Enter the code received below to continue. {resend}",
          id: "reset_password.verify_token_info",
          values: {
            resend: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
              className: "font-weight-semi-bold",
              onClick: this.resendToken
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
              defaultMessage: "Resend Code?",
              id: "common.resend_code"
            }))
          }
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-3"
      }, !tokenSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Group, {
        onChange: this.handleVerificationChange,
        value: verification
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: radioStyle,
        value: "email"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "font-weight-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "Email Address",
        id: "common.email_address"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: radioStyle,
        value: "phone"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "font-weight-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "Phone Number",
        id: "common.phone_number"
      })))), !nonce ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, verification === "email" && (tokenSent && target ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(routes_auth_components_resetPassword_components_VerifyEmailToken__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onVerified: this.handleTokenVerified,
        target: target
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(routes_auth_components_resetPassword_components_SendEmailToken__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onSent: this.handleTokenSent
      })), verification === "phone" && (tokenSent && target ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(routes_auth_components_resetPassword_components_VerifyPhoneToken__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onVerified: this.handleTokenVerified,
        target: target
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(routes_auth_components_resetPassword_components_SendPhoneToken__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onSent: this.handleTokenSent
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, getFieldDecorator('password', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        placeholder: intl.formatMessage(messages.password),
        prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "lock"
        })
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, getFieldDecorator('password_confirmation', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        placeholder: intl.formatMessage(messages.verifyPassword),
        prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "lock"
        })
      }))), recaptcha.enable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, getFieldDecorator('recaptcha', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(containers_components_ReCaptcha__WEBPACK_IMPORTED_MODULE_19__["default"], {
        errors: getFieldError('recaptcha'),
        settings: recaptcha
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        loading: confirmLoading,
        htmlType: "submit",
        type: "primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "Change Password",
        id: "common.change_password"
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

  return ResetPassword;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var recaptcha = _ref.settings.recaptcha;
  return {
    recaptcha: recaptcha
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_14__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_15__["default"])(), react_router_dom__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(ResetPassword);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(ResetPassword, "ResetPassword", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(ResetPassword, "ResetPassword", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\components\\resetPassword\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/auth/index.js":
/*!****************************************!*\
  !*** ./resources/routes/auth/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_CustomRedirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomRedirect */ "./resources/components/CustomRedirect/index.js");
/* harmony import */ var _components_resetPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resetPassword */ "./resources/routes/auth/components/resetPassword/index.js");
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









var Auth = function Auth(_ref) {
  var auth = _ref.auth,
      match = _ref.match;

  if (auth.check()) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomRedirect__WEBPACK_IMPORTED_MODULE_5__["default"], {
      to: "/",
      status: 302
    });
  }

  var path = match.path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomRedirect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    from: "".concat(path, "/"),
    to: "".concat(path, "/reset_password"),
    exact: true,
    status: 301
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "".concat(path, "/reset_password"),
    component: _components_resetPassword__WEBPACK_IMPORTED_MODULE_6__["default"]
  }));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_1__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps))(Auth);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Auth, "Auth", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
  reactHotLoader.register(Auth, "Auth", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\auth\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=46.92475dc0738cb03755d4.js.map