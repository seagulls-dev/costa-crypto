(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/admin/routes/platform/components/customize/components/Brand/components/Favicon/index.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Brand/components/Favicon/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
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
  successful: {
    "id": "admin.brand.upload_successful",
    "defaultMessage": "Your upload was successful."
  },
  invalidType: {
    "id": "admin.brand.invalid_file_type",
    "defaultMessage": "Invalid file type selected."
  }
});

var Favicon = /*#__PURE__*/function (_Component) {
  _inherits(Favicon, _Component);

  var _super = _createSuper(Favicon);

  function Favicon(props) {
    var _this;

    _classCallCheck(this, Favicon);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var intl = _this.props.intl;
      var status = file.type === 'image/x-icon';

      if (!status) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(intl.formatMessage(messages.invalidType));
      }

      _this.setState({
        uploading: status
      });

      return status;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (errors) {
      _this.setState({
        uploading: false
      });

      if (lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(errors, 'file')) {
        errors.file.forEach(function (error) {
          return antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(error);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function () {
      _this.setState({
        uploading: false
      });

      var intl = _this.props.intl;

      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success(intl.formatMessage(messages.successful));

      window.location.reload();
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      uploading: false
    };
    return _this;
  }

  _createClass(Favicon, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var uploading = this.state.uploading;
      var route = this.api.route;
      var endpoint = route('admin.platform.customize.brand.upload-favicon').url();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Favicon",
          id: "admin.brand.favicon"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 4,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "font-weight-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Favicon",
        id: "common.favicon"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 20
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default.a, {
        beforeUpload: this.beforeUpload,
        action: endpoint,
        customRequest: admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["uploadRequest"],
        withCredentials: true,
        onSuccess: this.handleUploadSuccess,
        showUploadList: false,
        onError: this.handleUploadError,
        accept: ".ico"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        icon: "upload",
        shape: "round",
        loading: uploading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Upload Favicon",
        id: "admin.upload_favicon"
      })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default.a, {
        color: "red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Requirement",
        id: "common.requirement"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "File Type: {type}",
        values: {
          type: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "ICO")
        },
        id: "admin.brand.favicon_requirement"
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

  return Favicon;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(Favicon);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(Favicon, "Favicon", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(Favicon, "Favicon", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Favicon\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Brand/components/Logo/index.js":
/*!********************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Brand/components/Logo/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/context */ "./resources/admin/context/index.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(admin_context__WEBPACK_IMPORTED_MODULE_12__);
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
  successful: {
    "id": "admin.brand.upload_successful",
    "defaultMessage": "Your upload was successful."
  },
  invalidType: {
    "id": "admin.brand.invalid_file_type",
    "defaultMessage": "Invalid file type selected."
  }
});

var Logo = /*#__PURE__*/function (_Component) {
  _inherits(Logo, _Component);

  var _super = _createSuper(Logo);

  function Logo(props) {
    var _this;

    _classCallCheck(this, Logo);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var intl = _this.props.intl;
      var status = file.type === 'image/png';

      if (!status) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(intl.formatMessage(messages.invalidType));
      }

      _this.setState({
        uploading: status
      });

      return status;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (errors) {
      _this.setState({
        uploading: false
      });

      if (lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(errors, 'file')) {
        errors.file.forEach(function (error) {
          return antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(error);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function () {
      _this.setState({
        uploading: false
      });

      var intl = _this.props.intl;

      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success(intl.formatMessage(messages.successful));

      window.location.reload();
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      uploading: false
    };
    return _this;
  }

  _createClass(Logo, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var uploading = this.state.uploading;
      var route = this.api.route;
      var endpoint = route('admin.platform.customize.brand.upload-logo').url();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Logo",
          id: "admin.brand.logo"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 4,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "font-weight-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Logo",
        id: "common.logo"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 20
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default.a, {
        beforeUpload: this.beforeUpload,
        action: endpoint,
        customRequest: admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["uploadRequest"],
        withCredentials: true,
        onSuccess: this.handleUploadSuccess,
        showUploadList: false,
        onError: this.handleUploadError,
        accept: ".png"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        icon: "upload",
        shape: "round",
        loading: uploading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Upload Logo",
        id: "admin.upload_logo"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, !admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.logoUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Example (with dark background)",
        id: "common.example_with_dark_background"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cp-bg-dark-primary rounded p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.name,
        src: __webpack_require__(/*! assets/images/logo.png */ "./resources/assets/images/logo.png")
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Current",
        id: "common.current"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cp-bg-dark-primary rounded p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.name,
        src: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.logoUrl
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default.a, {
        color: "red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Requirement",
        id: "common.requirement"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Max Width: {maxWidth}, Max Height: {maxHeight}, File Type: {type}",
        values: {
          maxWidth: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "550px"),
          type: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "PNG"),
          maxHeight: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "150px")
        },
        id: "admin.brand.logo_requirement"
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

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(Logo);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(Logo, "Logo", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(Logo, "Logo", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\Logo\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Brand/components/LogoDark/index.js":
/*!************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Brand/components/LogoDark/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/context */ "./resources/admin/context/index.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(admin_context__WEBPACK_IMPORTED_MODULE_12__);
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
  successful: {
    "id": "admin.brand.upload_successful",
    "defaultMessage": "Your upload was successful."
  },
  invalidType: {
    "id": "admin.brand.invalid_file_type",
    "defaultMessage": "Invalid file type selected."
  }
});

var LogoDark = /*#__PURE__*/function (_Component) {
  _inherits(LogoDark, _Component);

  var _super = _createSuper(LogoDark);

  function LogoDark(props) {
    var _this;

    _classCallCheck(this, LogoDark);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var intl = _this.props.intl;
      var status = file.type === 'image/png';

      if (!status) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(intl.formatMessage(messages.invalidType));
      }

      _this.setState({
        uploading: status
      });

      return status;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (errors) {
      _this.setState({
        uploading: false
      });

      if (lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(errors, 'file')) {
        errors.file.forEach(function (error) {
          return antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(error);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function () {
      _this.setState({
        uploading: false
      });

      var intl = _this.props.intl;

      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success(intl.formatMessage(messages.successful));

      window.location.reload();
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      uploading: false
    };
    return _this;
  }

  _createClass(LogoDark, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var uploading = this.state.uploading;
      var route = this.api.route;
      var endpoint = route('admin.platform.customize.brand.upload-logo-dark').url();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Logo Dark",
          id: "admin.brand.logo_dark"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 4,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "font-weight-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Logo Dark",
        id: "common.logo_dark"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 20
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default.a, {
        beforeUpload: this.beforeUpload,
        action: endpoint,
        customRequest: admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["uploadRequest"],
        withCredentials: true,
        onSuccess: this.handleUploadSuccess,
        showUploadList: false,
        onError: this.handleUploadError,
        accept: ".png"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        icon: "upload",
        shape: "round",
        loading: uploading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Upload Logo Dark",
        id: "admin.upload_logo_dark"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, !admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.logoDarkUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Example",
        id: "common.example"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rounded p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.name,
        src: __webpack_require__(/*! assets/images/logo-dark.png */ "./resources/assets/images/logo-dark.png")
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Current",
        id: "common.current"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rounded p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.name,
        src: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.logoDarkUrl
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default.a, {
        color: "red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Requirement",
        id: "common.requirement"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Max Width: {maxWidth}, Max Height: {maxHeight}, File Type: {type}",
        values: {
          maxWidth: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "550px"),
          type: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "PNG"),
          maxHeight: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "150px")
        },
        id: "admin.brand.logo_dark_requirement"
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

  return LogoDark;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(LogoDark);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(LogoDark, "LogoDark", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(LogoDark, "LogoDark", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoDark\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Brand/components/LogoIcon/index.js":
/*!************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Brand/components/LogoIcon/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/context */ "./resources/admin/context/index.js");
/* harmony import */ var admin_context__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(admin_context__WEBPACK_IMPORTED_MODULE_12__);
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
  successful: {
    "id": "admin.brand.upload_successful",
    "defaultMessage": "Your upload was successful."
  },
  invalidType: {
    "id": "admin.brand.invalid_file_type",
    "defaultMessage": "Invalid file type selected."
  }
});

var LogoIcon = /*#__PURE__*/function (_Component) {
  _inherits(LogoIcon, _Component);

  var _super = _createSuper(LogoIcon);

  function LogoIcon(props) {
    var _this;

    _classCallCheck(this, LogoIcon);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var intl = _this.props.intl;
      var status = file.type === 'image/png';

      if (!status) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(intl.formatMessage(messages.invalidType));
      }

      _this.setState({
        uploading: status
      });

      return status;
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadError", function (errors) {
      _this.setState({
        uploading: false
      });

      if (lodash_has__WEBPACK_IMPORTED_MODULE_5___default()(errors, 'file')) {
        errors.file.forEach(function (error) {
          return antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error(error);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadSuccess", function () {
      _this.setState({
        uploading: false
      });

      var intl = _this.props.intl;

      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success(intl.formatMessage(messages.successful));

      window.location.reload();
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      uploading: false
    };
    return _this;
  }

  _createClass(LogoIcon, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var uploading = this.state.uploading;
      var route = this.api.route;
      var endpoint = route('admin.platform.customize.brand.upload-logo-icon').url();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Logo Icon",
          id: "admin.brand.logo_icon"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 4,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "font-weight-medium"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Logo Icon",
        id: "common.logo_icon"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 20
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default.a, {
        beforeUpload: this.beforeUpload,
        action: endpoint,
        customRequest: admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["uploadRequest"],
        withCredentials: true,
        onSuccess: this.handleUploadSuccess,
        showUploadList: false,
        onError: this.handleUploadError,
        accept: ".png"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        icon: "upload",
        shape: "round",
        loading: uploading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Upload Logo Icon",
        id: "admin.upload_logo_icon"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        sm: 12
      }, !admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.logoIconUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Example",
        id: "common.example"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rounded p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.name,
        src: __webpack_require__(/*! assets/images/logo-icon.png */ "./resources/assets/images/logo-icon.png")
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Current",
        id: "common.current"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "rounded p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.name,
        src: admin_context__WEBPACK_IMPORTED_MODULE_12___default.a.logoIconUrl
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_0___default.a, {
        color: "red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Requirement",
        id: "common.requirement"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Max Width: {maxWidth}, Max Height: {maxHeight}, File Type: {type}",
        values: {
          maxWidth: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "100px"),
          type: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "PNG"),
          maxHeight: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "100px")
        },
        id: "admin.brand.logo_icon_requirement"
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

  return LogoIcon;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_11__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(LogoIcon);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(LogoIcon, "LogoIcon", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(LogoIcon, "LogoIcon", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\components\\LogoIcon\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Brand/index.js":
/*!****************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Brand/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LogoIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LogoIcon */ "./resources/admin/routes/platform/components/customize/components/Brand/components/LogoIcon/index.js");
/* harmony import */ var _components_LogoDark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LogoDark */ "./resources/admin/routes/platform/components/customize/components/Brand/components/LogoDark/index.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Logo */ "./resources/admin/routes/platform/components/customize/components/Brand/components/Logo/index.js");
/* harmony import */ var _components_Favicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Favicon */ "./resources/admin/routes/platform/components/customize/components/Brand/components/Favicon/index.js");
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







var Brand = /*#__PURE__*/function (_Component) {
  _inherits(Brand, _Component);

  var _super = _createSuper(Brand);

  function Brand() {
    _classCallCheck(this, Brand);

    return _super.apply(this, arguments);
  }

  _createClass(Brand, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoIcon__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogoDark__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Favicon__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Brand;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _default = Brand;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Brand, "Brand", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(Brand, "Brand", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Brand\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Page/components/Footer/index.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Page/components/Footer/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/components/Editor */ "./resources/admin/components/Editor/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
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








var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["defineMessages"])({
  successful: {
    "id": "admin.customize.updated_footer_successfully",
    "defaultMessage": "Footer updated successfully."
  }
});

var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(errors)) {
          var endpoint = route('admin.platform.customize.page.footer.update');
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleFormError"])(error, form, values, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      confirmLoading: false,
      loading: false
    };
    return _this;
  }

  _createClass(Footer, [{
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
      var form = this.props.form;
      var endpoint = route('admin.platform.customize.page.footer.data');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleSuccess"])(response, function (data) {
          var body = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(data, 'body');

          if (typeof body === "string") {
            form.setFieldsValue({
              body: body
            });
          }

          _this2.setState({
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
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var form = this.props.form;
      var _this$state = this.state,
          loading = _this$state.loading,
          confirmLoading = _this$state.confirmLoading;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Body",
          id: "admin.customize.body"
        })
      }, getFieldDecorator("body", {
        initialValue: "",
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(admin_components_Editor__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "primary",
        icon: "save",
        htmlType: "submit",
        shape: "round",
        loading: confirmLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Submit",
        id: "common.submit"
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

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__["default"])())(Footer);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(Footer, "Footer", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(Footer, "Footer", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\components\\Footer\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Page/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Page/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./resources/admin/routes/platform/components/customize/components/Page/components/Footer/index.js");
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





var Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);

  var _super = _createSuper(Page);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleTabChange", function (activeTab) {
      _this.setState({
        activeTab: activeTab
      });
    });

    _this.state = {
      activeTab: "footer"
    };
    return _this;
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var activeTab = this.state.activeTab;
      var tabList = [{
        key: 'footer',
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Footer",
          id: "admin.footer"
        })))
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "cp-card-widget",
        onTabChange: this.handleTabChange,
        tabList: tabList,
        activeTabKey: activeTab
      }, activeTab === 'footer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Page;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Page, "Page", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(Page, "Page", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Page\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Template/components/ColorPicker/index.js":
/*!******************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Template/components/ColorPicker/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-color-picker */ "./node_modules/rc-color-picker/lib/index.js");
/* harmony import */ var rc_color_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_color_picker__WEBPACK_IMPORTED_MODULE_4__);
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




var ColorPicker = /*#__PURE__*/function (_Component) {
  _inherits(ColorPicker, _Component);

  var _super = _createSuper(ColorPicker);

  function ColorPicker() {
    var _this;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var color = _ref.color;
      clearTimeout(_this.colorChanged);
      var onChange = _this.props.onChange;
      _this.colorChanged = setTimeout(function () {
        if (onChange) onChange(color);
      }, 500);
    });

    return _this;
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          name = _this$props.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "d-flex mb-2 mr-3 align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
        title: lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default()(name),
        placement: "top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
        trigger: "click",
        overlayClassName: "full-content",
        placement: "bottom",
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(rc_color_picker__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
          enableAlpha: false,
          onChange: this.onChange,
          defaultColor: color
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        style: {
          display: 'inline-block',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          padding: '2px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          background: color,
          cursor: "pointer"
        }
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

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var _default = ColorPicker;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ColorPicker, "ColorPicker", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(ColorPicker, "ColorPicker", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\components\\ColorPicker\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Template/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Template/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_redux_actions_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/redux/actions/Settings */ "./resources/admin/redux/actions/Settings.js");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ColorPicker */ "./resources/admin/routes/platform/components/customize/components/Template/components/ColorPicker/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! admin/constants/ThemeSettings */ "./resources/admin/constants/ThemeSettings.js");
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












var Template = /*#__PURE__*/function (_Component) {
  _inherits(Template, _Component);

  var _super = _createSuper(Template);

  function Template(props) {
    var _this;

    _classCallCheck(this, Template);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onThemeTypeChange", function (e) {
      _this.props.setThemeType(e.target.value);

      _this.updateThemeType(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onNavStyleChange", function (navStyle) {
      _this.props.setNavStyle(navStyle);

      _this.updateNavStyle(navStyle);
    });

    _defineProperty(_assertThisInitialized(_this), "onLayoutTypeChange", function (layoutType) {
      _this.props.setLayoutType(layoutType);

      _this.updateLayoutType(layoutType);
    });

    _defineProperty(_assertThisInitialized(_this), "onColorPaletteChange", function (name, color) {
      var colorPalettes = _this.state.colorPalettes;
      colorPalettes[name] = color;

      _this.setState({
        colorPalettes: colorPalettes
      });

      _this.updateColorPalettes(colorPalettes);

      _this.modifyVars(colorPalettes);

      _this.setStoreValue(colorPalettes);
    });

    _defineProperty(_assertThisInitialized(_this), "getStorageKey", function () {
      return 'color-palettes';
    });

    var _colorPalettes = props.colorPalettes;
    _this.state = {
      colorPalettes: lodash_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, _colorPalettes, _this.getStoreValue())
    };
    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_13__["default"]();
    return _this;
  }

  _createClass(Template, [{
    key: "updateLayoutType",
    value: function updateLayoutType(layoutType) {
      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.platform.customize.template.set-layout-type');
      axios.post(endpoint.url(), {
        type: layoutType
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error);
      });
    }
  }, {
    key: "updateNavStyle",
    value: function updateNavStyle(navStyle) {
      var _this$api2 = this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('admin.platform.customize.template.set-nav-style');
      axios.post(endpoint.url(), {
        style: navStyle
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error);
      });
    }
  }, {
    key: "updateColorPalettes",
    value: function updateColorPalettes(colorPalettes) {
      var _this$api3 = this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var endpoint = route('admin.platform.customize.template.set-color-palettes');
      axios.post(endpoint.url(), {
        palettes: colorPalettes
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error);
      });
    }
  }, {
    key: "updateThemeType",
    value: function updateThemeType(themeType) {
      var _this$api4 = this.api,
          axios = _this$api4.axios,
          route = _this$api4.route;
      var endpoint = route('admin.platform.customize.template.set-theme-type');
      axios.post(endpoint.url(), {
        type: themeType
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error);
      });
    }
  }, {
    key: "getStoreValue",
    value: function getStoreValue() {
      var value = {};

      if (typeof sessionStorage !== "undefined") {
        try {
          value = JSON.parse(sessionStorage.getItem(this.getStorageKey()));
        } catch (e) {
          console.warn(e);
        }
      }

      return value;
    }
  }, {
    key: "setStoreValue",
    value: function setStoreValue(value) {
      if (typeof sessionStorage !== "undefined") {
        try {
          sessionStorage.setItem(this.getStorageKey(), JSON.stringify(value));
        } catch (e) {
          console.warn(e);
        }
      }
    }
  }, {
    key: "modifyVars",
    value: function modifyVars(colorPalettes) {
      if (typeof window !== "undefined") {
        window.less.modifyVars(colorPalettes)["catch"](function (error) {
          console.error(error);
        });
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
      var _this2 = this;

      var colorPalettes = this.state.colorPalettes;
      var _this$props = this.props,
          themeType = _this$props.themeType,
          navStyle = _this$props.navStyle,
          layoutType = _this$props.layoutType;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Template",
          id: "admin.customize.template"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Some customizations require reloading to effect changes. " + "You should make changes while considering users experience!",
          id: "admin.customize.template_info"
        }),
        showIcon: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Theme",
        id: "common.theme"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
        value: themeType,
        onChange: this.onThemeTypeChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["THEME_TYPE_LITE"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Lite",
        id: "theme.lite"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["THEME_TYPE_SEMI_DARK"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Semi Dark",
        id: "theme.semi_dark"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_1___default.a.Button, {
        value: admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["THEME_TYPE_DARK"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Dark",
        id: "theme.dark"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Color Palettes",
        id: "admin.color_palettes"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(colorPalettes).map(function (name) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ColorPicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
          color: colorPalettes[name],
          key: name,
          onChange: function onChange(color) {
            return _this2.onColorPaletteChange(name, color);
          },
          name: name
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Nav Style",
        id: "admin.nav_style"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center cp-nav-option"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_VERTICAL_FIXED"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_VERTICAL_FIXED"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_vertical_fixed.png */ "./resources/assets/images/layouts/nav_style_vertical_fixed.png"),
        alt: "Vertical Fixed"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_VERTICAL_MINI_SIDEBAR"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_VERTICAL_MINI_SIDEBAR"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_vertical_mini_sidebar.png */ "./resources/assets/images/layouts/nav_style_vertical_mini_sidebar.png"),
        alt: "Vertical Mini Sidebar"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_VERTICAL_DRAWER"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_VERTICAL_DRAWER"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_vertical_drawer.png */ "./resources/assets/images/layouts/nav_style_vertical_drawer.png"),
        alt: "Vertical Drawer"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_TOP"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_TOP"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_horizontal_top.png */ "./resources/assets/images/layouts/nav_style_horizontal_top.png"),
        alt: "Horizontal Top"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_BOTTOM"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_BOTTOM"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_horizontal_bottom.png */ "./resources/assets/images/layouts/nav_style_horizontal_bottom.png"),
        alt: "Horizontal Bottom"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_DARK"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_DARK"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_horizontal_dark.png */ "./resources/assets/images/layouts/nav_style_horizontal_dark.png"),
        alt: "Horizontal Dark"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_INSIDE"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_INSIDE"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_horizontal_inside.png */ "./resources/assets/images/layouts/nav_style_horizontal_inside.png"),
        alt: "Horizontal Inside"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(navStyle === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_LIGHT"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onNavStyleChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["NAV_STYLE_HORIZONTAL_LIGHT"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/nav_style_horizontal_light.png */ "./resources/assets/images/layouts/nav_style_horizontal_light.png"),
        alt: "Horizontal Light"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        defaultMessage: "Layout Type",
        id: "admin.layout_type"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center cp-layout-option"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(layoutType === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["LAYOUT_TYPE_BOXED"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onLayoutTypeChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["LAYOUT_TYPE_BOXED"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/layout_type_boxed.png */ "./resources/assets/images/layouts/layout_type_boxed.png"),
        alt: "Boxed"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(layoutType === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["LAYOUT_TYPE_FRAMED"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onLayoutTypeChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["LAYOUT_TYPE_FRAMED"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/layout_type_framed.png */ "./resources/assets/images/layouts/layout_type_framed.png"),
        alt: "Framed"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "m-2 ".concat(layoutType === admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["LAYOUT_TYPE_FULL"] && 'active'),
        onClick: function onClick(e) {
          return _this2.onLayoutTypeChange(admin_constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_14__["LAYOUT_TYPE_FULL"]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! assets/images/layouts/layout_type_full.png */ "./resources/assets/images/layouts/layout_type_full.png"),
        alt: "Full"
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

  return Template;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$settings = _ref.settings,
      themeType = _ref$settings.themeType,
      colorPalettes = _ref$settings.colorPalettes,
      navStyle = _ref$settings.navStyle,
      layoutType = _ref$settings.layoutType;
  return {
    themeType: themeType,
    colorPalettes: colorPalettes,
    navStyle: navStyle,
    layoutType: layoutType
  };
};

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  setThemeType: admin_redux_actions_Settings__WEBPACK_IMPORTED_MODULE_11__["setThemeType"],
  setNavStyle: admin_redux_actions_Settings__WEBPACK_IMPORTED_MODULE_11__["setNavStyle"],
  setLayoutType: admin_redux_actions_Settings__WEBPACK_IMPORTED_MODULE_11__["setLayoutType"]
}))(Template);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Template, "Template", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(Template, "Template", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Template\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Widgets/components/AdminHome/index.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Widgets/components/AdminHome/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/transfer */ "./node_modules/antd/lib/transfer/index.js");
/* harmony import */ var antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
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
  successful: {
    "id": "admin.widget.action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var AdminHome = /*#__PURE__*/function (_Component) {
  _inherits(AdminHome, _Component);

  var _super = _createSuper(AdminHome);

  function AdminHome(props) {
    var _this;

    _classCallCheck(this, AdminHome);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleEnabled", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var intl = _this.props.intl;
      var targetKeys = _this.state.targetKeys;
      var endpoint = route('admin.platform.customize.widgets.toggle-enabled', {
        category: 'admin.home'
      });

      _this.setState({
        confirmLoading: true
      });

      axios.post(endpoint.url(), {
        names: targetKeys
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleSuccess"])(response, function (data) {
          var items = !lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default()(data) ? [] : data.map(function (o) {
            return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, o, {
              key: o.name
            });
          });
          var enabled = items.filter(function (i) {
            return i.enabled;
          }).map(function (i) {
            return i.key;
          });

          _this.setState({
            data: items,
            targetKeys: enabled,
            confirmLoading: false
          });
        }, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleError"])(error, function () {
          _this.setState({
            confirmLoading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (targetKeys) {
      _this.setState({
        targetKeys: targetKeys
      });
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_7__["default"]();
    _this.state = {
      data: [],
      targetKeys: [],
      confirmLoading: false,
      loading: false
    };
    return _this;
  }

  _createClass(AdminHome, [{
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
      var endpoint = route('admin.platform.customize.widgets.data', {
        category: 'admin.home'
      });
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleSuccess"])(response, function (data) {
          var items = !lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default()(data) ? [] : data.map(function (o) {
            return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, o, {
              key: o.name
            });
          });
          var enabled = items.filter(function (i) {
            return i.enabled;
          }).map(function (i) {
            return i.key;
          });

          _this2.setState({
            data: items,
            targetKeys: enabled,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleError"])(error, function () {
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
          targetKeys = _this$state.targetKeys,
          confirmLoading = _this$state.confirmLoading,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2___default.a, {
        dataSource: data,
        onChange: this.handleChange,
        targetKeys: targetKeys,
        titles: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Available",
          id: "admin.available"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Enabled",
          id: "admin.enabled"
        })],
        filterOption: function filterOption(search, item) {
          return item.title.indexOf(search) > -1;
        },
        className: "my-3 text-center",
        listStyle: {
          minWidth: 250,
          width: "45%",
          height: 300,
          textAlign: "left"
        },
        render: function render(item) {
          return item.title;
        },
        showSearch: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        icon: "save",
        shape: "round",
        loading: confirmLoading,
        onClick: this.toggleEnabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Save",
        id: "admin.save"
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

  return AdminHome;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(AdminHome);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(AdminHome, "AdminHome", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(AdminHome, "AdminHome", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\AdminHome\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Widgets/components/UserHome/index.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Widgets/components/UserHome/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/transfer */ "./node_modules/antd/lib/transfer/index.js");
/* harmony import */ var antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
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
  successful: {
    "id": "admin.widget.action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var UserHome = /*#__PURE__*/function (_Component) {
  _inherits(UserHome, _Component);

  var _super = _createSuper(UserHome);

  function UserHome(props) {
    var _this;

    _classCallCheck(this, UserHome);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleEnabled", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var intl = _this.props.intl;
      var targetKeys = _this.state.targetKeys;
      var endpoint = route('admin.platform.customize.widgets.toggle-enabled', {
        category: 'index.home'
      });

      _this.setState({
        confirmLoading: true
      });

      axios.post(endpoint.url(), {
        names: targetKeys
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleSuccess"])(response, function (data) {
          var items = !lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default()(data) ? [] : data.map(function (o) {
            return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, o, {
              key: o.name
            });
          });
          var enabled = items.filter(function (i) {
            return i.enabled;
          }).map(function (i) {
            return i.key;
          });

          _this.setState({
            data: items,
            targetKeys: enabled,
            confirmLoading: false
          });
        }, intl.formatMessage(messages.successful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleError"])(error, function () {
          _this.setState({
            confirmLoading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (targetKeys) {
      _this.setState({
        targetKeys: targetKeys
      });
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_7__["default"]();
    _this.state = {
      data: [],
      targetKeys: [],
      confirmLoading: false,
      loading: false
    };
    return _this;
  }

  _createClass(UserHome, [{
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
      var endpoint = route('admin.platform.customize.widgets.data', {
        category: 'index.home'
      });
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleSuccess"])(response, function (data) {
          var items = !lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default()(data) ? [] : data.map(function (o) {
            return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, o, {
              key: o.name
            });
          });
          var enabled = items.filter(function (i) {
            return i.enabled;
          }).map(function (i) {
            return i.key;
          });

          _this2.setState({
            data: items,
            targetKeys: enabled,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleError"])(error, function () {
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
          targetKeys = _this$state.targetKeys,
          confirmLoading = _this$state.confirmLoading,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_transfer__WEBPACK_IMPORTED_MODULE_2___default.a, {
        dataSource: data,
        onChange: this.handleChange,
        targetKeys: targetKeys,
        titles: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Available",
          id: "admin.available"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Enabled",
          id: "admin.enabled"
        })],
        filterOption: function filterOption(search, item) {
          return item.title.indexOf(search) > -1;
        },
        className: "my-3 text-center",
        listStyle: {
          minWidth: 250,
          width: "45%",
          height: 300,
          textAlign: "left"
        },
        render: function render(item) {
          return item.title;
        },
        showSearch: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "primary",
        icon: "save",
        shape: "round",
        loading: confirmLoading,
        onClick: this.toggleEnabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Save",
        id: "admin.save"
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

  return UserHome;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(UserHome);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(UserHome, "UserHome", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(UserHome, "UserHome", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\components\\UserHome\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/components/Widgets/index.js":
/*!******************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/components/Widgets/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_UserHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserHome */ "./resources/admin/routes/platform/components/customize/components/Widgets/components/UserHome/index.js");
/* harmony import */ var _components_AdminHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AdminHome */ "./resources/admin/routes/platform/components/customize/components/Widgets/components/AdminHome/index.js");
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






var Widgets = /*#__PURE__*/function (_Component) {
  _inherits(Widgets, _Component);

  var _super = _createSuper(Widgets);

  function Widgets(props) {
    var _this;

    _classCallCheck(this, Widgets);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleTabChange", function (activeTab) {
      _this.setState({
        activeTab: activeTab
      });
    });

    _this.state = {
      activeTab: "index.home"
    };
    return _this;
  }

  _createClass(Widgets, [{
    key: "render",
    value: function render() {
      var activeTab = this.state.activeTab;
      var tabList = [{
        key: 'index.home',
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "User Home",
          id: "admin.user_home"
        })))
      }, {
        key: 'admin.home',
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "Admin Home",
          id: "admin.admin_home"
        })))
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "cp-card-widget",
        onTabChange: this.handleTabChange,
        tabList: tabList,
        activeTabKey: activeTab
      }, activeTab === "admin.home" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AdminHome__WEBPACK_IMPORTED_MODULE_4__["default"], null), activeTab === "index.home" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UserHome__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Widgets;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Widgets;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Widgets, "Widgets", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(Widgets, "Widgets", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\components\\Widgets\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/customize/index.js":
/*!***********************************************************************!*\
  !*** ./resources/admin/routes/platform/components/customize/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var admin_components_PageTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/components/PageTabs */ "./resources/admin/components/PageTabs/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_Widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Widgets */ "./resources/admin/routes/platform/components/customize/components/Widgets/index.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Template */ "./resources/admin/routes/platform/components/customize/components/Template/index.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Page */ "./resources/admin/routes/platform/components/customize/components/Page/index.js");
/* harmony import */ var _components_Brand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Brand */ "./resources/admin/routes/platform/components/customize/components/Brand/index.js");
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








var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane;

var Customize = /*#__PURE__*/function (_Component) {
  _inherits(Customize, _Component);

  var _super = _createSuper(Customize);

  function Customize() {
    _classCallCheck(this, Customize);

    return _super.apply(this, arguments);
  }

  _createClass(Customize, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_PageTabs__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPane, {
        key: "template",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "la la-magic cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Template",
          id: "common.template"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPane, {
        key: "brand",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "la la-copyright cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Brand",
          id: "common.brand"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Brand__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPane, {
        key: "page",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "la la-globe cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Page",
          id: "common.page"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPane, {
        key: "widgets",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "la la-puzzle-piece cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Widgets",
          id: "common.widgets"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Widgets__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Customize;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Customize;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(Customize, "Customize", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(Customize, "Customize", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\customize\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/integration/components/OAuth/components/NewClientModal/index.js":
/*!********************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/integration/components/OAuth/components/NewClientModal/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
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
  successful: {
    "id": "admin.integration.oauth_create_account_successful",
    "defaultMessage": "A new client has been created successfully."
  }
});

var NewClientModal = /*#__PURE__*/function (_Component) {
  _inherits(NewClientModal, _Component);

  var _super = _createSuper(NewClientModal);

  function NewClientModal(props) {
    var _this;

    _classCallCheck(this, NewClientModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.platform.integration.oauth.client-create');
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_8__["handleFormError"])(error, form, values, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(NewClientModal, [{
    key: "triggerSuccess",
    value: function triggerSuccess() {
      var onSuccess = this.props.onSuccess;

      if (typeof onSuccess === "function") {
        return onSuccess();
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
          form = _this$props2.form;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "cp-modal-sm",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Create New Client",
          id: "admin.integration.oauth_create_new_client"
        }),
        visible: visible,
        confirmLoading: confirmLoading,
        onCancel: onCancel,
        onOk: this.handleSubmit,
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Create",
          id: "common.create"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelCol: {
          xs: 8
        },
        wrapperCol: {
          xs: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Name",
          id: "common.name"
        })
      }, getFieldDecorator('name', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, null))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return NewClientModal;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__["default"])())(NewClientModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(NewClientModal, "NewClientModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(NewClientModal, "NewClientModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\components\\NewClientModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/integration/components/OAuth/index.js":
/*!******************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/integration/components/OAuth/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var _components_NewClientModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/NewClientModal */ "./resources/admin/routes/platform/components/integration/components/OAuth/components/NewClientModal/index.js");
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








var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  actionSuccessful: {
    "id": "admin.integration.oauth_action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var OAuth = /*#__PURE__*/function (_Component) {
  _inherits(OAuth, _Component);

  var _super = _createSuper(OAuth);

  function OAuth(props) {
    var _this;

    _classCallCheck(this, OAuth);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Name",
          id: "admin.integration.oauth_client_name"
        }),
        dataIndex: 'name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "ID",
          id: "admin.integration.oauth_client_id"
        }),
        dataIndex: 'id'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Client Secret",
          id: "admin.integration.oauth_client_secret"
        }),
        dataIndex: 'secret'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
            className: "m-0",
            shape: "circle",
            onClick: function onClick(e) {
              return _this.deleteClient(record);
            },
            type: "danger",
            icon: "delete"
          });
        }
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "toggleNewClientModal", function () {
      _this.setState(function (_ref) {
        var newClient = _ref.newClient;
        return {
          newClient: !newClient
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleNewClientSuccess", function () {
      _this.toggleNewClientModal();

      _this.fetchClients();
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      newClient: false,
      data: [],
      loading: false
    };
    return _this;
  }

  _createClass(OAuth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchClients();
    }
  }, {
    key: "fetchClients",
    value: function fetchClients() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.platform.integration.oauth.client-list');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_7__["handleSuccess"])(response, function (data) {
          _this2.setState({
            data: data,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_7__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
    }
  }, {
    key: "deleteClient",
    value: function deleteClient(client) {
      var _this3 = this;

      var _this$api2 = this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var intl = this.props.intl;
      var endpoint = route('admin.platform.integration.oauth.client-delete', {
        client: client.id
      });
      axios["delete"](endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_7__["handleSuccess"])(response, function () {
          _this3.fetchClients();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_7__["handleError"])(error);
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
          data = _this$state.data,
          newClient = _this$state.newClient;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "OAuth Clients",
          id: "admin.integration.oauth_clients"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
          type: "primary",
          shape: "circle",
          onClick: this.toggleNewClientModal,
          className: "m-0",
          icon: "plus"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "The OAuth2 password grant allows your other first-party clients, " + "such as a mobile application, to obtain an access token using an " + "e-mail address / username and password. You should refer to the " + "documentation for the available API endpoints and their responses.",
          id: "admin.integration.oauth_info"
        }),
        showIcon: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_NewClientModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onCancel: this.toggleNewClientModal,
        onSuccess: this.handleNewClientSuccess,
        visible: newClient
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "mt-1",
        rowKey: "id",
        columns: this.columns(),
        loading: loading,
        size: "middle",
        scroll: {
          x: true,
          y: false
        },
        dataSource: data
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

  return OAuth;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(OAuth);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(OAuth, "OAuth", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(OAuth, "OAuth", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\components\\OAuth\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/integration/index.js":
/*!*************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/integration/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_PageTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/components/PageTabs */ "./resources/admin/components/PageTabs/index.js");
/* harmony import */ var _components_OAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/OAuth */ "./resources/admin/routes/platform/components/integration/components/OAuth/index.js");
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





var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane;

var Integration = /*#__PURE__*/function (_Component) {
  _inherits(Integration, _Component);

  var _super = _createSuper(Integration);

  function Integration() {
    _classCallCheck(this, Integration);

    return _super.apply(this, arguments);
  }

  _createClass(Integration, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_PageTabs__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabPane, {
        key: "oauth",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "la la-cubes cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          defaultMessage: "OAuth",
          id: "common.oauth"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_OAuth__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Integration;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Integration;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(Integration, "Integration", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(Integration, "Integration", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\integration\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/translation/components/Edit/components/EditKeyModal/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/translation/components/Edit/components/EditKeyModal/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
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
  successful: {
    "id": "admin.translation.translation_key_saved",
    "defaultMessage": "Translation key saved."
  }
});

var EditKeyModal = /*#__PURE__*/function (_Component) {
  _inherits(EditKeyModal, _Component);

  var _super = _createSuper(EditKeyModal);

  function EditKeyModal(props) {
    var _this;

    _classCallCheck(this, EditKeyModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          group = _this$props.group;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.platform.translation.group-update', {
        group: group
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess(data);
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_9__["handleFormError"])(error, form, values, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_5__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(EditKeyModal, [{
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
          locales = _this$props2.locales;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        confirmLoading: confirmLoading,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Edit Key",
          id: "admin.translation.edit_key"
        }),
        onCancel: onCancel,
        onOk: this.handleSubmit,
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Submit",
          id: "common.submit"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelCol: {
          xs: 8
        },
        wrapperCol: {
          xs: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Key",
          id: "admin.translation.key"
        })
      }, getFieldDecorator("key")( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        disabled: true
      }))), locales.map(function (locale) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
          key: locale,
          labelCol: {
            xs: 8
          },
          wrapperCol: {
            xs: 16
          },
          labelAlign: "left",
          label: locale
        }, getFieldDecorator(locale, {
          rules: [{
            required: true
          }]
        })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
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

  return EditKeyModal;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_6__["pipe"])(Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_7__["default"])())(EditKeyModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(EditKeyModal, "EditKeyModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(EditKeyModal, "EditKeyModal", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\EditKeyModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/translation/components/Edit/components/FilterResult/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/translation/components/Edit/components/FilterResult/index.js ***!
  \*****************************************************************************************************************/
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
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/values */ "./node_modules/lodash/values.js");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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
  filter: {
    "id": "admin.translation.input_edit_filter_placeholder",
    "defaultMessage": "Filter by default message..."
  }
});

var FilterResult = /*#__PURE__*/function (_Component) {
  _inherits(FilterResult, _Component);

  var _super = _createSuper(FilterResult);

  function FilterResult() {
    var _this;

    _classCallCheck(this, FilterResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "applyFilter", function () {
      var _this$props = _this.props,
          onApply = _this$props.onApply,
          form = _this$props.form;
      form.validateFields(function (errors, values) {
        if (typeof onApply === "function" && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(errors)) {
          return onApply(values);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearFilter", function () {
      var _this$props2 = _this.props,
          onClear = _this$props2.onClear,
          form = _this$props2.form;
      form.resetFields();

      if (typeof onClear === "function") {
        return onClear();
      }
    });

    return _this;
  }

  _createClass(FilterResult, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          intl = _this$props3.intl,
          form = _this$props3.form;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldsValue = form.getFieldsValue;

      var hasFilter = lodash_values__WEBPACK_IMPORTED_MODULE_5___default()(getFieldsValue()).some(function (x) {
        return x;
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        sm: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, getFieldDecorator('value')( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
        placeholder: intl.formatMessage(messages.filter)
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        sm: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        icon: "search",
        shape: "round",
        onClick: this.applyFilter
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
        defaultMessage: "Apply",
        id: "admin.translation.apply"
      }))), hasFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        icon: "close",
        shape: "circle",
        onClick: this.clearFilter
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

  return FilterResult;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__["default"])())(FilterResult);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(FilterResult, "FilterResult", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(FilterResult, "FilterResult", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\components\\FilterResult\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/translation/components/Edit/index.js":
/*!*****************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/translation/components/Edit/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_components_AsyncTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/components/AsyncTable */ "./resources/admin/components/AsyncTable/index.js");
/* harmony import */ var _components_EditKeyModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/EditKeyModal */ "./resources/admin/routes/platform/components/translation/components/Edit/components/EditKeyModal/index.js");
/* harmony import */ var _components_FilterResult__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/FilterResult */ "./resources/admin/routes/platform/components/translation/components/Edit/components/FilterResult/index.js");
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
  exportSuccessful: {
    "id": "admin.translation.translation_exported",
    "defaultMessage": "Translation exported into file."
  }
});

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clearFilter", function () {
      _this.table.clearFilter();
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilter", function (filters) {
      _this.table.applyFilter(filters);
    });

    _defineProperty(_assertThisInitialized(_this), "exportTranslation", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var _this$props = _this.props,
          intl = _this$props.intl,
          match = _this$props.match;
      var endpoint = route('admin.platform.translation.group-export', {
        group: match.params.group
      });

      _this.setState({
        exportLoading: true
      });

      axios.post(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleSuccess"])(response, function () {
          _this.setState({
            exportLoading: false
          });
        }, intl.formatMessage(messages.exportSuccessful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleError"])(error, function () {
          _this.setState({
            exportLoading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditSuccess", function (item) {
      _this.toggleEditKeyModal();

      _this.table.updateItem(item);
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Key",
          id: "admin.translation.key"
        }),
        dataIndex: 'key'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Default Message",
          id: "admin.translation.default_message"
        }),
        key: 'message',
        render: function render(text, record) {
          return lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(record, 'en.value');
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
            className: "m-0 mr-2",
            shape: "circle",
            onClick: function onClick(e) {
              return _this.edit(record);
            },
            type: "primary",
            icon: "edit"
          }));
        }
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "toggleEditKeyModal", function () {
      _this.setState(function (_ref) {
        var editKey = _ref.editKey;
        return {
          editKey: !editKey
        };
      });
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      locales: [],
      editKey: false,
      totalChanged: 0,
      total: 0,
      exportLoading: false,
      loading: false
    };
    return _this;
  }

  _createClass(Edit, [{
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
      var match = this.props.match;
      var endpoint = route('admin.platform.translation.group-data', {
        group: match.params.group
      });
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleSuccess"])(response, function (data) {
          _this2.setState({
            loading: false,
            locales: data.locales || [],
            totalChanged: data.total_changed || 0,
            total: data.total || 0
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
    }
  }, {
    key: "edit",
    value: function edit(record) {
      this.editKeyForm.resetFields();

      var fields = lodash_mapValues__WEBPACK_IMPORTED_MODULE_2___default()(record, function (o, k) {
        return k !== "key" ? o.value : o;
      });

      this.editKeyForm.setFieldsValue(fields);
      this.toggleEditKeyModal();
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

      var match = this.props.match;
      var _this$state = this.state,
          locales = _this$state.locales,
          totalChanged = _this$state.totalChanged,
          total = _this$state.total,
          editKey = _this$state.editKey,
          exportLoading = _this$state.exportLoading;
      var route = this.api.route;
      var group = match.params.group;
      var endpoint = route("admin.platform.translation.group-table", {
        group: group
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_11__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Edit {group} Keys",
          id: "admin.translation.edit_group_keys",
          values: {
            group: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, lodash_upperCase__WEBPACK_IMPORTED_MODULE_1___default()(group))
          }
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "d-inline-block mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "{total} Total",
          id: "admin.translation.total_details",
          values: {
            total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, total)
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "d-inline-block mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "{total} Changed",
          id: "admin.translation.total_changed_details",
          values: {
            total: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, totalChanged)
          }
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_EditKeyModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSuccess: this.handleEditSuccess,
        locales: locales,
        group: group,
        ref: function ref(form) {
          return _this3.editKeyForm = form;
        },
        visible: editKey,
        onCancel: this.toggleEditKeyModal
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Heads up! Do not change the words that are of the form {first} or {second}. " + "They are called parameters and they are meant to be replaced with a value. " + "e.g :name will be replaced with the actual name of the user.",
          values: {
            first: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, ":word"),
            second: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "{word}")
          },
          id: "admin.translation.edit_keys_warning"
        }),
        showIcon: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-block px-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_FilterResult__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onApply: this.applyFilter,
        onClear: this.clearFilter
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(admin_components_AsyncTable__WEBPACK_IMPORTED_MODULE_12__["default"], {
        columns: this.columns(),
        route: endpoint.url(),
        rowKey: "key",
        ref: function ref(table) {
          return _this3.table = table;
        },
        className: "mt-1",
        scroll: {
          x: true,
          y: false
        },
        size: "middle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-3 text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        icon: "save",
        loading: exportLoading,
        shape: "round",
        onClick: this.exportTranslation
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "Publish",
        id: "common.publish"
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

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["injectIntl"], react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Edit);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(Edit, "Edit", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(Edit, "Edit", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Edit\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/translation/components/Home/components/AddLocale/index.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/translation/components/Home/components/AddLocale/index.js ***!
  \**************************************************************************************************************/
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
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/support/Helpers/Form */ "./resources/admin/support/Helpers/Form/index.js");
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
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







var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  locale: {
    "id": "admin.translation.input_locale_code_placeholder",
    "defaultMessage": "Enter a valid locale ISO-2 code..."
  },
  successful: {
    "id": "admin.translation.locale_added_successfully",
    "defaultMessage": "Locale added successfully."
  }
});

var AddLocale = /*#__PURE__*/function (_Component) {
  _inherits(AddLocale, _Component);

  var _super = _createSuper(AddLocale);

  function AddLocale(props) {
    var _this;

    _classCallCheck(this, AddLocale);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('admin.platform.translation.add-locale');
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.triggerSuccess();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_11__["handleFormError"])(error, form, values, function () {
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

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_10__["default"]();
    _this.state = {
      confirmLoading: false
    };
    return _this;
  }

  _createClass(AddLocale, [{
    key: "triggerSuccess",
    value: function triggerSuccess() {
      var onSuccess = this.props.onSuccess;

      if (typeof onSuccess === "function") {
        return onSuccess();
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
          form = _this$props2.form;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, getFieldDecorator('locale', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
        placeholder: intl.formatMessage(messages.locale)
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        icon: "plus",
        htmlType: "submit",
        shape: "round",
        loading: confirmLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "Add",
        id: "admin.translation.add"
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

  return AddLocale;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(admin_support_Helpers_Form__WEBPACK_IMPORTED_MODULE_9__["default"])())(AddLocale);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(AddLocale, "AddLocale", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(AddLocale, "AddLocale", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\components\\AddLocale\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/translation/components/Home/index.js":
/*!*****************************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/translation/components/Home/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! admin/support/Services/Api */ "./resources/admin/support/Services/Api/index.js");
/* harmony import */ var admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! admin/support/utils/promise */ "./resources/admin/support/utils/promise.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var admin_components_Widget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! admin/components/Widget */ "./resources/admin/components/Widget/index.js");
/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var _components_AddLocale__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/AddLocale */ "./resources/admin/routes/platform/components/translation/components/Home/components/AddLocale/index.js");
/* harmony import */ var admin_containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! admin/containers/utils/menuItemLinks */ "./resources/admin/containers/utils/menuItemLinks.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
  importSuccessful: {
    "id": "admin.translation.import_action_successful",
    "defaultMessage": "Translation imported successfully."
  },
  exportSuccessful: {
    "id": "admin.translation.export_action_successful",
    "defaultMessage": "Translation exported successfully."
  },
  actionSuccessful: {
    "id": "admin.translation.action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "importTranslation", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var intl = _this.props.intl;
      var importType = _this.state.importType;
      var endpoint = route('admin.platform.translation.import');
      axios.post(endpoint.url(), {
        type: importType
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function (data) {
          _this.setState({
            importLoading: false
          });

          _this.fetchData();
        }, intl.formatMessage(messages.importSuccessful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, function () {
          _this.setState({
            importLoading: false
          });
        });
      });

      _this.setState({
        importLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "editSelectedGroup", function () {
      var selectedGroup = _this.state.selectedGroup;
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["generatePath"])(admin_containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_17__["default"]['platform.translation.edit'].path, {
        group: selectedGroup
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(history) && selectedGroup) {
        return history.push(path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupSelect", function (selectedGroup) {
      _this.setState({
        selectedGroup: selectedGroup
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImportTypeChange", function (importType) {
      _this.setState({
        importType: importType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "localeTableColumns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Name",
          id: "admin.translation.locale_name"
        }),
        dataIndex: 'name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Native",
          id: "admin.translation.locale_native"
        }),
        dataIndex: 'native'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        render: function render(text, record) {
          return record.locale !== 'en' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            className: "m-0",
            shape: "circle",
            onClick: function onClick() {
              return _this.removeLocale(record);
            },
            type: "danger",
            icon: "delete"
          });
        }
      }];
    });

    _this.api = new admin_support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.state = {
      groups: [],
      selectedGroup: "",
      locales: [],
      importType: 1,
      importLoading: false,
      loading: false
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
      var endpoint = route('admin.platform.translation.data');
      this.setState({
        loading: true
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function (data) {
          _this2.setState({
            groups: data.groups || [],
            locales: data.locales || [],
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
    }
  }, {
    key: "removeLocale",
    value: function removeLocale(record) {
      var _this3 = this;

      var _this$api3 = this.api,
          axios = _this$api3.axios,
          route = _this$api3.route;
      var intl = this.props.intl;
      var endpoint = route('admin.platform.translation.remove-locale');
      axios.post(endpoint.url(), {
        locale: record.locale
      }).then(function (response) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function () {
          _this3.fetchData();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(admin_support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error);
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
      var _this4 = this;

      var _this$state = this.state,
          locales = _this$state.locales,
          groups = _this$state.groups,
          selectedGroup = _this$state.selectedGroup,
          importType = _this$state.importType,
          importLoading = _this$state.importLoading,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(admin_components_Widget__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Translation",
          id: "admin.translation"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "warning",
        className: "mb-3",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "Publishing all changes made to translation keys may take a while to complete. " + "Please consider using SSH command: {command}. Make sure the web server is granted " + "write permission on the folder {folder} i.e 775.",
          values: {
            command: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("code", null, "php artisan translations:export"),
            folder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("code", null, "resource/lang")
          },
          id: "admin.translation.export_info"
        }),
        showIcon: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a, {
        value: importType,
        onChange: this.handleImportTypeChange,
        className: "w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a.Option, {
        value: 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Replace existing translation.",
        id: "admin.translation.replace_existing_translation"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a.Option, {
        value: 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Append new translation.",
        id: "admin.translation.append_new_translation"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "default",
        icon: "download",
        loading: importLoading,
        shape: "round",
        onClick: this.importTranslation
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Import",
        id: "admin.translation.import"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a, {
        value: selectedGroup,
        onChange: this.handleGroupSelect,
        className: "w-100"
      }, groups.map(function (group, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a.Option, {
          key: index,
          value: group
        }, lodash_upperCase__WEBPACK_IMPORTED_MODULE_3___default()(group));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "primary",
        icon: "edit",
        disabled: importLoading,
        shape: "round",
        onClick: this.editSelectedGroup
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Edit",
        id: "admin.translation.edit"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "my-3 mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
        defaultMessage: "Locale Setup",
        id: "admin.translation.locale_setup"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "info",
        className: "mb-3",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], {
          defaultMessage: "You may add as many language you want your platform to support. " + "Look up the ISO-2 code for the locale and submit it with the form below. " + "All newly added locales, needs to be translated and published before " + "it can be available to the public.",
          id: "admin.translation.locale_info"
        }),
        showIcon: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_AddLocale__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onSuccess: function onSuccess() {
          return _this4.fetchData();
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "mt-1",
        rowKey: "regional",
        columns: this.localeTableColumns(),
        size: "middle",
        scroll: {
          x: true,
          y: false
        },
        dataSource: locales
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

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_15__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_13__["injectIntl"])(Home);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(Home, "Home", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(Home, "Home", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\components\\Home\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/components/translation/index.js":
/*!*************************************************************************!*\
  !*** ./resources/admin/routes/platform/components/translation/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./resources/admin/routes/platform/components/translation/components/Home/index.js");
/* harmony import */ var _components_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Edit */ "./resources/admin/routes/platform/components/translation/components/Edit/index.js");
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






var Translation = /*#__PURE__*/function (_Component) {
  _inherits(Translation, _Component);

  var _super = _createSuper(Translation);

  function Translation() {
    _classCallCheck(this, Translation);

    return _super.apply(this, arguments);
  }

  _createClass(Translation, [{
    key: "render",
    value: function render() {
      var match = this.props.match;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "".concat(match.path, "/"),
        exact: true,
        component: _components_Home__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "".concat(match.path, "/:group"),
        component: _components_Edit__WEBPACK_IMPORTED_MODULE_3__["default"]
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

  return Translation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _default = Translation;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Translation, "Translation", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(Translation, "Translation", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\components\\translation\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/admin/routes/platform/index.js":
/*!**************************************************!*\
  !*** ./resources/admin/routes/platform/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var admin_support_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/support/utils/common */ "./resources/admin/support/utils/common.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var admin_components_CustomRedirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/components/CustomRedirect */ "./resources/admin/components/CustomRedirect/index.js");
/* harmony import */ var admin_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/components/ProtectedRoute */ "./resources/admin/components/ProtectedRoute/index.js");
/* harmony import */ var admin_components_PageNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/components/PageNotFound */ "./resources/admin/components/PageNotFound/index.js");
/* harmony import */ var _components_customize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customize */ "./resources/admin/routes/platform/components/customize/index.js");
/* harmony import */ var _components_translation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/translation */ "./resources/admin/routes/platform/components/translation/index.js");
/* harmony import */ var _components_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/integration */ "./resources/admin/routes/platform/components/integration/index.js");
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











var Platform = /*#__PURE__*/function (_Component) {
  _inherits(Platform, _Component);

  var _super = _createSuper(Platform);

  function Platform() {
    _classCallCheck(this, Platform);

    return _super.apply(this, arguments);
  }

  _createClass(Platform, [{
    key: "render",
    value: function render() {
      var match = this.props.match;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_CustomRedirect__WEBPACK_IMPORTED_MODULE_3__["default"], {
        from: "".concat(match.path, "/"),
        to: "".concat(match.path, "/customize"),
        exact: true,
        status: 301
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
        path: "".concat(match.path, "/integration"),
        component: _components_integration__WEBPACK_IMPORTED_MODULE_8__["default"],
        can: "manage_integration"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
        path: "".concat(match.path, "/customize"),
        component: _components_customize__WEBPACK_IMPORTED_MODULE_6__["default"],
        can: "manage_customization"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(admin_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
        path: "".concat(match.path, "/translation"),
        component: _components_translation__WEBPACK_IMPORTED_MODULE_7__["default"],
        can: "manage_translation"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        component: admin_components_PageNotFound__WEBPACK_IMPORTED_MODULE_5__["default"]
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

  return Platform;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Object(admin_support_utils_common__WEBPACK_IMPORTED_MODULE_0__["pipe"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Platform);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Platform, "Platform", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(Platform, "Platform", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\routes\\platform\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/images/layouts/layout_type_boxed.png":
/*!***************************************************************!*\
  !*** ./resources/assets/images/layouts/layout_type_boxed.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/layout_type_boxed.png?d739a2c2f13c036742f9e2cf294f78d0";

/***/ }),

/***/ "./resources/assets/images/layouts/layout_type_framed.png":
/*!****************************************************************!*\
  !*** ./resources/assets/images/layouts/layout_type_framed.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/layout_type_framed.png?ed1d120034b75a07a0fcfb73f326aa52";

/***/ }),

/***/ "./resources/assets/images/layouts/layout_type_full.png":
/*!**************************************************************!*\
  !*** ./resources/assets/images/layouts/layout_type_full.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/layout_type_full.png?6bd743c71d7e438b100404f6d5b2f54e";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_horizontal_bottom.png":
/*!*************************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_horizontal_bottom.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_horizontal_bottom.png?3f84e0987d0852e571529d3a27c0c6ed";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_horizontal_dark.png":
/*!***********************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_horizontal_dark.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_horizontal_dark.png?c0f067d4972b0dfa88ce6aa8786ae2e3";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_horizontal_inside.png":
/*!*************************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_horizontal_inside.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_horizontal_inside.png?41abce569f0d0d97e6adec915f3d9395";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_horizontal_light.png":
/*!************************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_horizontal_light.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_horizontal_light.png?ce4437175201ad31c94cd6be50bdaab1";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_horizontal_top.png":
/*!**********************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_horizontal_top.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_horizontal_top.png?ee515d4dfa5e088766d63daaad00af7b";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_vertical_drawer.png":
/*!***********************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_vertical_drawer.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_vertical_drawer.png?8fc0785efed68a6e2b17650f899661ed";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_vertical_fixed.png":
/*!**********************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_vertical_fixed.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_vertical_fixed.png?b5ec4d5500209eda2bf8738468356ee6";

/***/ }),

/***/ "./resources/assets/images/layouts/nav_style_vertical_mini_sidebar.png":
/*!*****************************************************************************!*\
  !*** ./resources/assets/images/layouts/nav_style_vertical_mini_sidebar.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_style_vertical_mini_sidebar.png?8cf144bcfda66654d92f3775b8d3ec30";

/***/ }),

/***/ "./resources/assets/images/logo-icon.png":
/*!***********************************************!*\
  !*** ./resources/assets/images/logo-icon.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-icon.png?d762cdead034842bcfa8a2aafb1c6b97";

/***/ })

}]);
//# sourceMappingURL=29.d4de6701e3afbcd9e99a.js.map