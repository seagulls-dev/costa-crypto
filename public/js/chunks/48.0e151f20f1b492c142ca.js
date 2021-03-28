(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./resources/admin/components/Widget/index.js":
/*!****************************************************!*\
  !*** ./resources/admin/components/Widget/index.js ***!
  \****************************************************/
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Widget = function Widget(_ref) {
  var styleName = _ref.styleName,
      otherProps = _objectWithoutProperties(_ref, ["styleName"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({
    bordered: false,
    className: "cp-card-widget ".concat(styleName)
  }, otherProps));
};

Widget.defaultProps = {
  styleName: ''
};
var _default = Widget;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Widget, "Widget", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
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

  reactHotLoader.register(_extends, "_extends", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(_objectWithoutProperties, "_objectWithoutProperties", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(_objectWithoutPropertiesLoose, "_objectWithoutPropertiesLoose", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(Widget, "Widget", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\Widget\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/roles/components/EditRoleModal/index.js":
/*!************************************************************************!*\
  !*** ./resources/admin/routes/roles/components/EditRoleModal/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
    "id": "admin.role.updated_successfully",
    "defaultMessage": "Role updated successfully."
  }
});

var EditRoleModal = /*#__PURE__*/function (_Component) {
  _inherits(EditRoleModal, _Component);

  var _super = _createSuper(EditRoleModal);

  function EditRoleModal(props) {
    var _this;

    _classCallCheck(this, EditRoleModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(errors)) {
          var endpoint = route('admin.roles.update', {
            role: values.id
          });
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_14__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess(data);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_14__["handleFormError"])(error, form, values, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(EditRoleModal, [{
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
          visible = _this$props2.visible,
          onCancel = _this$props2.onCancel,
          form = _this$props2.form,
          permissions = _this$props2.permissions;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        confirmLoading: confirmLoading,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Edit Role",
          id: "admin.role.edit_role"
        }),
        onCancel: onCancel,
        onOk: this.handleSubmit,
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Submit",
          id: "common.submit"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "info",
        className: "mb-3",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "The level assigned to a role is used to prioritize user actions.",
          id: "admin.roles.info"
        }),
        showIcon: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        labelCol: {
          xs: 8
        },
        wrapperCol: {
          xs: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Name",
          id: "admin.role.name"
        })
      }, getFieldDecorator("name", {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        labelCol: {
          xs: 8
        },
        wrapperCol: {
          xs: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Level",
          id: "admin.role.level"
        })
      }, getFieldDecorator("level", {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default.a, {
        min: 1,
        max: 99
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Permissions",
        id: "common.permissions"
      })), permissions.map(function (permission) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
          key: permission.id,
          className: "mb-0 mx-3"
        }, getFieldDecorator(permission.name, {
          valuePropName: 'checked'
        })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, null, lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default()(permission.name))));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        className: "d-none"
      }, getFieldDecorator("id", {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EditRoleModal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var coins = _ref.collections.coins;
  return {
    coins: coins
  };
};

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_12__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps), Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_13__["default"])())(EditRoleModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(EditRoleModal, "EditRoleModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(EditRoleModal, "EditRoleModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\EditRoleModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/roles/components/NewRoleModal/index.js":
/*!***********************************************************************!*\
  !*** ./resources/admin/routes/roles/components/NewRoleModal/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
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
    "id": "admin.roles.create_role_successful",
    "defaultMessage": "A new role has been created successfully."
  }
});

var NewRoleModal = /*#__PURE__*/function (_Component) {
  _inherits(NewRoleModal, _Component);

  var _super = _createSuper(NewRoleModal);

  function NewRoleModal(props) {
    var _this;

    _classCallCheck(this, NewRoleModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.roles.create');
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess(data);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleFormError"])(error, form, values, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(NewRoleModal, [{
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
          visible = _this$props2.visible,
          onCancel = _this$props2.onCancel,
          form = _this$props2.form,
          permissions = _this$props2.permissions;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        confirmLoading: confirmLoading,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Create Role",
          id: "admin.role.create_role"
        }),
        onCancel: onCancel,
        onOk: this.handleSubmit,
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Submit",
          id: "common.submit"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "info",
        className: "mb-3",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "The level assigned to a role is used to prioritize user actions.",
          id: "admin.role.level_info"
        }),
        showIcon: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        labelCol: {
          xs: 8
        },
        wrapperCol: {
          xs: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Name",
          id: "admin.role.name"
        })
      }, getFieldDecorator("name", {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
        labelCol: {
          xs: 8
        },
        wrapperCol: {
          xs: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
          defaultMessage: "Level",
          id: "admin.role.level"
        })
      }, getFieldDecorator("level", {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default.a, {
        min: 1,
        max: 99
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Permissions",
        id: "common.permissions"
      })), permissions.map(function (permission) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
          key: permission.id,
          className: "mb-0 mx-3"
        }, getFieldDecorator(permission.name, {
          valuePropName: 'checked'
        })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, null, lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default()(permission.name))));
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

  return NewRoleModal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_14__["default"])())(NewRoleModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(NewRoleModal, "NewRoleModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(NewRoleModal, "NewRoleModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\components\\NewRoleModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/roles/index.js":
/*!***********************************************!*\
  !*** ./resources/admin/routes/roles/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var _components_EditRoleModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/EditRoleModal */ "./resources/admin/routes/roles/components/EditRoleModal/index.js");
/* harmony import */ var _components_NewRoleModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/NewRoleModal */ "./resources/admin/routes/roles/components/NewRoleModal/index.js");
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









var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["defineMessages"])({
  actionSuccessful: {
    "id": "admin.role.action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var Roles = /*#__PURE__*/function (_Component) {
  _inherits(Roles, _Component);

  var _super = _createSuper(Roles);

  function Roles(props) {
    var _this;

    _classCallCheck(this, Roles);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Name",
          id: "admin.roles.name"
        }),
        dataIndex: 'name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Level",
          id: "admin.roles.level"
        }),
        dataIndex: 'level'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Total Users",
          id: "admin.roles.total_users"
        }),
        dataIndex: 'users_count'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: "m-0 mr-2",
            shape: "circle",
            onClick: function onClick() {
              return _this.edit(record);
            },
            type: "primary",
            icon: "edit"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: "m-0",
            shape: "circle",
            onClick: function onClick() {
              return _this["delete"](record);
            },
            type: "danger",
            icon: "delete"
          }));
        }
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "toggleNewRoleModal", function () {
      _this.setState(function (_ref) {
        var newRole = _ref.newRole;
        return {
          newRole: !newRole
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleEditRoleModal", function () {
      _this.setState(function (_ref2) {
        var editRole = _ref2.editRole;
        return {
          editRole: !editRole
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditRoleSuccess", function () {
      _this.toggleEditRoleModal();

      _this.fetchData();
    });

    _defineProperty(_assertThisInitialized(_this), "handleNewRoleSuccess", function () {
      _this.toggleNewRoleModal();

      _this.fetchData();
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      newRole: false,
      editRole: false,
      roles: [],
      permissions: [],
      loading: false
    };
    return _this;
  }

  _createClass(Roles, [{
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
      var endpoint = route('admin.roles.data');
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleSuccess"])(response, function (data) {
          _this2.setState({
            roles: data.roles || [],
            permissions: data.permissions || [],
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleError"])(error, function () {
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
    key: "delete",
    value: function _delete(role) {
      var _this3 = this;

      var _this$api2 = this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var intl = this.props.intl;
      var endpoint = route('admin.roles.delete', {
        role: role.id
      });
      axios["delete"](endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleSuccess"])(response, function () {
          _this3.fetchData();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleError"])(error);
      });
    }
  }, {
    key: "edit",
    value: function edit(record) {
      var permissions = this.state.permissions;
      this.editRoleForm.resetFields();

      var names = lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(permissions, 'name');

      var rolePermissions = lodash_filter__WEBPACK_IMPORTED_MODULE_4___default()(record.permissions, function (o) {
        return names.includes(o.name);
      });

      var fields = lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(record, ['name', 'level', 'id']);

      lodash_forEach__WEBPACK_IMPORTED_MODULE_2___default()(rolePermissions, function (o) {
        fields = lodash_assign__WEBPACK_IMPORTED_MODULE_1___default()(fields, _defineProperty({}, o.name, true));
      });

      this.editRoleForm.setFieldsValue(fields);
      this.toggleEditRoleModal();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          roles = _this$state.roles,
          permissions = _this$state.permissions,
          loading = _this$state.loading,
          newRole = _this$state.newRole,
          editRole = _this$state.editRole;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_9__["default"], {
        styleName: "cp-card-table",
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          className: "m-0",
          shape: "circle",
          onClick: this.toggleNewRoleModal,
          type: "primary",
          icon: "plus"
        }),
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Manage Roles",
          id: "admin.manage_roles"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_EditRoleModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        permissions: permissions,
        onSuccess: this.handleEditRoleSuccess,
        ref: function ref(form) {
          return _this4.editRoleForm = form;
        },
        visible: editRole,
        onCancel: this.toggleEditRoleModal
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "mt-1",
        columns: this.columns(),
        rowKey: "id",
        scroll: {
          x: true,
          y: false
        },
        size: "middle",
        dataSource: roles,
        loading: loading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_NewRoleModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        permissions: permissions,
        onSuccess: this.handleNewRoleSuccess,
        ref: function ref(form) {
          return _this4.newRoleForm = form;
        },
        visible: newRole,
        onCancel: this.toggleNewRoleModal
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

  return Roles;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_12__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["injectIntl"])(Roles);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(Roles, "Roles", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(Roles, "Roles", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\roles\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=48.0e151f20f1b492c142ca.js.map