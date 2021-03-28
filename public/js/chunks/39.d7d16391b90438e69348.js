(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./resources/routes/wallets/components/AccountsTable/components/AddressesTable/index.js":
/*!**********************************************************************************************!*\
  !*** ./resources/routes/wallets/components/AccountsTable/components/AddressesTable/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
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







var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
  actionSuccessful: {
    "id": "wallet.action_successful",
    "defaultMessage": "Your action was successful."
  }
});

var AddressesTable = /*#__PURE__*/function (_Component) {
  _inherits(AddressesTable, _Component);

  var _super = _createSuper(AddressesTable);

  function AddressesTable(props) {
    var _this;

    _classCallCheck(this, AddressesTable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getColumn", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Address",
          id: "wallet.address"
        }),
        dataIndex: 'address'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Total Received",
          id: "wallet.address_total_received"
        }),
        dataIndex: 'total_received'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "wallet.action"
        }),
        key: 'action',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.reset_webhook && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
            title: "Reset Webhook"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            className: "m-0 mx-1",
            shape: "circle",
            onClick: function onClick() {
              return _this.resetWebhook(record);
            },
            type: "primary",
            icon: "sync"
          })));
        }
      }];
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return _this;
  }

  _createClass(AddressesTable, [{
    key: "resetWebhook",
    value: function resetWebhook(address) {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var _this$props = this.props,
          intl = _this$props.intl,
          walletAccountId = _this$props.walletAccountId;
      var endpoint = route('user.wallet-account.wallet-address.reset-webhook', {
        walletAccount: walletAccountId,
        walletAddress: address.id
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleSuccess"])(response, function () {
          _this2.table.fetchData();
        }, intl.formatMessage(messages.actionSuccessful));
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var walletAccountId = this.props.walletAccountId;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_4__["route"])("user.wallet-account.wallet-address.table", {
        walletAccount: walletAccountId
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        route: endpoint.url(),
        pagination: {
          pageSize: 3
        },
        size: "small",
        ref: function ref(_ref) {
          return _this3.table = _ref;
        },
        columns: this.getColumn(),
        className: "mt-1"
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

  return AddressesTable;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(AddressesTable);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(AddressesTable, "AddressesTable", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(AddressesTable, "AddressesTable", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\components\\AddressesTable\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/AccountsTable/index.js":
/*!********************************************************************!*\
  !*** ./resources/routes/wallets/components/AccountsTable/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AddressesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddressesTable */ "./resources/routes/wallets/components/AccountsTable/components/AddressesTable/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux/actions/Wallet */ "./resources/redux/actions/Wallet.js");
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










var AccountTable = /*#__PURE__*/function (_Component) {
  _inherits(AccountTable, _Component);

  var _super = _createSuper(AccountTable);

  function AccountTable() {
    var _this;

    _classCallCheck(this, AccountTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "wallet.coin"
        }),
        dataIndex: 'coin'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Available",
          id: "wallet.available"
        }),
        dataIndex: 'available'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "On Trade",
          id: "wallet.on_trade"
        }),
        dataIndex: 'balance_on_trade'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Valuation",
          id: "wallet.valuation"
        }),
        dataIndex: 'formatted_available_price'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "table.action"
        }),
        key: 'action',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
            onClick: function onClick(e) {
              return _this.showDepositModal(record.id);
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            defaultMessage: "Deposit",
            id: "wallet.deposit"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
            type: "vertical"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
            onClick: function onClick(e) {
              return _this.showWithdrawModal(record.id);
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            defaultMessage: "Withdraw",
            id: "wallet.withdraw"
          })));
        }
      }];
    });

    return _this;
  }

  _createClass(AccountTable, [{
    key: "showDepositModal",
    value: function showDepositModal(id) {
      this.props.showDepositModal(id);
    }
  }, {
    key: "showWithdrawModal",
    value: function showWithdrawModal(id) {
      this.props.showWithdrawModal(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          accounts = _this$props.accounts,
          accountsLoading = _this$props.accountsLoading,
          auth = _this$props.auth;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Accounts List",
          id: "wallet.account_list"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Currency ({currency})",
          id: "wallet.currency_highlight",
          values: {
            currency: auth.user.currency
          }
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
        columns: this.columns(),
        className: "mt-1",
        expandedRowRender: function expandedRowRender(record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AddressesTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
            pagination: {
              pageSize: 3
            },
            walletAccountId: record.id
          });
        },
        loading: accountsLoading,
        size: "middle",
        rowKey: "id",
        scroll: {
          x: true,
          y: false
        },
        dataSource: accounts
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

  return AccountTable;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$wallet = _ref.wallet,
      accountsLoading = _ref$wallet.accountsLoading,
      accounts = _ref$wallet.accounts,
      auth = _ref.auth;
  return {
    accountsLoading: accountsLoading,
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_4__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  showDepositModal: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_9__["showDepositModal"],
  showWithdrawModal: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_9__["showWithdrawModal"]
}))(AccountTable);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AccountTable, "AccountTable", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(AccountTable, "AccountTable", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\AccountsTable\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/DepositModal/index.js":
/*!*******************************************************************!*\
  !*** ./resources/routes/wallets/components/DepositModal/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/result */ "./node_modules/antd/lib/result/index.js");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/typography */ "./node_modules/antd/lib/typography/index.js");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/actions/Wallet */ "./resources/redux/actions/Wallet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_15__);
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










var colorPalettes = context__WEBPACK_IMPORTED_MODULE_15___default.a.settings.colorPalettes;
var Paragraph = antd_lib_typography__WEBPACK_IMPORTED_MODULE_6___default.a.Paragraph;

var DepositModal = /*#__PURE__*/function (_Component) {
  _inherits(DepositModal, _Component);

  var _super = _createSuper(DepositModal);

  function DepositModal(props) {
    var _this;

    _classCallCheck(this, DepositModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "hideModal", function () {
      _this.props.hideDepositModal();
    });

    _defineProperty(_assertThisInitialized(_this), "generateAddress", function () {
      var accountId = _this.props.accountId;
      if (!accountId) return;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.wallet-account.generate-address', {
        walletAccount: accountId
      });
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function (data) {
          _this.setState({
            address: data.address,
            confirmLoading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, function () {
          _this.setState({
            confirmLoading: false
          });
        });
      });

      _this.setState({
        confirmLoading: true
      });
    });

    _this.state = {
      loading: false,
      confirmLoading: false,
      address: ""
    };
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_13__["default"]();
    return _this;
  }

  _createClass(DepositModal, [{
    key: "getAccount",
    value: function getAccount() {
      var _this$props = this.props,
          accounts = _this$props.accounts,
          accountId = _this$props.accountId;
      return lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(accounts, {
        id: accountId
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getLatestAddress();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.accountId !== this.props.accountId) {
        console.log('Updated DepositModal Component');
        this.getLatestAddress();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getLatestAddress",
    value: function getLatestAddress() {
      var _this2 = this;

      var accountId = this.props.accountId;
      if (!accountId) return;
      var _this$api2 = this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('user.wallet-account.latest-address', {
        walletAccount: accountId
      });
      axios.get(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleSuccess"])(response, function (data) {
          _this2.setState({
            address: data.address,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_12__["handleError"])(error, function () {
          _this2.setState({
            loading: false
          });
        });
      });
      this.setState({
        loading: true,
        address: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.visible;
      var account = this.getAccount();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Deposit {coin}",
          id: "wallet.deposit_modal_title",
          values: {
            coin: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, account ? account.wallet.coin.name : "Coin")
          }
        }),
        confirmLoading: this.state.confirmLoading,
        onCancel: this.hideModal,
        onOk: this.generateAddress,
        okButtonProps: {
          disabled: !account
        },
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Generate New Address",
          id: "wallet.deposit_modal_ok"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
        spinning: this.state.loading
      }, account && this.state.address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "mb-1",
        showIcon: true,
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          id: "wallet.deposit_confirmation_info",
          defaultMessage: "Depositing to the below address requires confirmations of the " + "entire network. It will arrive after {confirmations} confirmations.",
          values: {
            confirmations: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, account.wallet.min_confirmations)
          }
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-center my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_14___default.a, {
        value: this.state.address,
        size: 150,
        className: "img-thumbnail"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Paragraph, {
        copyable: true,
        className: "text-center my-3 cp-fs-lg"
      }, this.state.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "mb-1",
        showIcon: true,
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Receiving on multiple addresses will cause higher transaction " + "fee on your next external transfer. You should only generate new address " + "when you are receiving significant funds on it.",
          id: "wallet.generate_new_address_warning"
        })
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_2___default.a, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "frown",
          twoToneColor: colorPalettes['@primary-color'],
          theme: "twoTone"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-muted"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Account not found.",
          id: "wallet.account_not_found"
        })),
        status: "info"
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

  return DepositModal;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$wallet = _ref.wallet,
      accounts = _ref$wallet.accounts,
      visibleDepositModal = _ref$wallet.visibleDepositModal,
      depositAccountId = _ref$wallet.depositAccountId;
  return {
    accounts: accounts,
    visible: visibleDepositModal,
    accountId: depositAccountId
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  showDepositModal: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__["showDepositModal"],
  hideDepositModal: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__["hideDepositModal"]
}))(DepositModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(Paragraph, "Paragraph", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(DepositModal, "DepositModal", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(Paragraph, "Paragraph", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(DepositModal, "DepositModal", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\DepositModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/NewAccountModal/index.js":
/*!**********************************************************************!*\
  !*** ./resources/routes/wallets/components/NewAccountModal/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux/actions/Wallet */ "./resources/redux/actions/Wallet.js");
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
  wallet: {
    "id": "wallet.wallet_select_placeholder",
    "defaultMessage": "Select a wallet..."
  },
  successful: {
    "id": "wallet.added_account_successfully",
    "defaultMessage": "Your account has been added successfully."
  }
});

var NewAccountModal = /*#__PURE__*/function (_Component) {
  _inherits(NewAccountModal, _Component);

  var _super = _createSuper(NewAccountModal);

  function NewAccountModal(props) {
    var _this;

    _classCallCheck(this, NewAccountModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "hideModal", function () {
      _this.props.hideNewAccountForm();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('wallet.add-account');
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.props.hideNewAccountForm();

              _this.triggerSuccess();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_10__["handleFormError"])(error, form, values, function () {
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

  _createClass(NewAccountModal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "triggerSuccess",
    value: function triggerSuccess() {
      var onSuccess = this.props.onSuccess;

      if (typeof onSuccess === "function") {
        return onSuccess();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var confirmLoading = this.state.confirmLoading;
      var _this$props2 = this.props,
          showNewAccountModal = _this$props2.showNewAccountModal,
          form = _this$props2.form,
          intl = _this$props2.intl,
          wallets = _this$props2.wallets;
      var getFieldDecorator = form.getFieldDecorator;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "cp-modal-sm",
        visible: showNewAccountModal,
        onCancel: this.hideModal,
        confirmLoading: confirmLoading,
        onOk: this.handleSubmit,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Add Account",
          id: "wallet.add_account"
        }),
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Add",
          id: "common.add"
        }))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        labelCol: {
          xs: 24,
          sm: 8
        },
        wrapperCol: {
          xs: 24,
          sm: 16
        },
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Wallet",
          id: "common.select_wallet"
        })
      }, getFieldDecorator('wallet', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "w-100",
        placeholder: intl.formatMessage(messages.wallet)
      }, wallets.map(function (wallet) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
          key: wallet.id,
          value: wallet.id
        }, wallet.coin.name);
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

  return NewAccountModal;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var showNewAccountModal = _ref.wallet.showNewAccountModal,
      wallets = _ref.collections.wallets;
  return {
    showNewAccountModal: showNewAccountModal,
    wallets: wallets
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_5__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  showNewAccountForm: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_11__["showNewAccountForm"],
  hideNewAccountForm: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_11__["hideNewAccountForm"]
}), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_8__["default"])())(NewAccountModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(NewAccountModal, "NewAccountModal", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(NewAccountModal, "NewAccountModal", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\NewAccountModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/Portfolio/components/Balance/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/routes/wallets/components/Portfolio/components/Balance/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/Services/Broadcast/Private */ "./resources/support/Services/Broadcast/Private.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
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









var Balance = /*#__PURE__*/function (_Component) {
  _inherits(Balance, _Component);

  var _super = _createSuper(Balance);

  function Balance(props) {
    var _this;

    _classCallCheck(this, Balance);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "transferRecordSavedListener", function (e) {
      if (e.transferRecord) {
        var transferRecord = e.transferRecord;

        if (transferRecord.confirmed) {
          _this.fetchBalance();
        }
      }
    });

    _this.broadcast = new support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_3__["default"]();
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      availablePrice: 0,
      formattedAvailablePrice: "0",
      loading: false
    };
    return _this;
  }

  _createClass(Balance, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindBroadcastEvents();
      this.fetchBalance();
    }
  }, {
    key: "bindBroadcastEvents",
    value: function bindBroadcastEvents() {
      this.resetBroadcastChannel();
      this.broadcast.listen('TransferRecordSaved', this.transferRecordSavedListener);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
      this.broadcast.unbind();
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
      var user = this.props.auth.user;
      var prevUser = prevProps.auth.user;

      if (prevUser.id !== user.id) {
        console.log('Updated Balance Component');
        this.resetBroadcastChannel();
      }
    }
  }, {
    key: "fetchBalance",
    value: function fetchBalance() {
      var _this2 = this;

      var _this$api = this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('user.wallet-account.total-available-price');
      axios.post(endpoint.url()).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_7__["handleSuccess"])(response, function (data) {
          _this2.setState({
            availablePrice: data.price,
            formattedAvailablePrice: data.formattedPrice,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_7__["handleError"])(error, function () {
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: this.state.loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "my-2 my-lg-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mr-2 cp-fs-3x font-weight-medium d-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " ", this.state.formattedAvailablePrice, " "))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Balance;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_5__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps))(Balance);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Balance, "Balance", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(Balance, "Balance", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Balance\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/Portfolio/components/Distribution/activeShape.js":
/*!**********************************************************************************************!*\
  !*** ./resources/routes/wallets/components/Portfolio/components/Distribution/activeShape.js ***!
  \**********************************************************************************************/
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

  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\activeShape.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\activeShape.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\activeShape.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\activeShape.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/Portfolio/components/Distribution/index.js":
/*!****************************************************************************************!*\
  !*** ./resources/routes/wallets/components/Portfolio/components/Distribution/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/result */ "./node_modules/antd/lib/result/index.js");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/sumBy */ "./node_modules/lodash/sumBy.js");
/* harmony import */ var lodash_sumBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sumBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/echarts/lib/chart/pie.js");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _activeShape__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./activeShape */ "./resources/routes/wallets/components/Portfolio/components/Distribution/activeShape.js");
/* harmony import */ var recharts_lib_polyfill_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts/lib/polyfill.js */ "./node_modules/recharts/lib/polyfill.js");
/* harmony import */ var recharts_lib_polyfill_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_polyfill_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts/lib/component/ResponsiveContainer.js */ "./node_modules/recharts/lib/component/ResponsiveContainer.js");
/* harmony import */ var recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts/lib/chart/PieChart.js */ "./node_modules/recharts/lib/chart/PieChart.js");
/* harmony import */ var recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recharts/lib/polar/Pie.js */ "./node_modules/recharts/lib/polar/Pie.js");
/* harmony import */ var recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_16__);
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

var Distribution = /*#__PURE__*/function (_Component) {
  _inherits(Distribution, _Component);

  var _super = _createSuper(Distribution);

  function Distribution(props) {
    var _this;

    _classCallCheck(this, Distribution);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onPieEnter", function (data, index) {
      _this.setState({
        activeIndex: index
      });
    });

    _this.state = {
      activeIndex: 0
    };
    return _this;
  }

  _createClass(Distribution, [{
    key: "getData",
    value: function getData() {
      var accounts = this.props.accounts;
      return lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(accounts, function (o) {
        return {
          value: o.available_price,
          name: o.wallet.coin.name
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var activeIndex = this.state.activeIndex;
      var data = this.getData();

      var total = lodash_sumBy__WEBPACK_IMPORTED_MODULE_2___default()(data, 'value');

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "Wallet Distribution",
          id: "wallet.distribution"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "text-center text-lg-left"
      }, total > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(recharts_lib_component_ResponsiveContainer_js__WEBPACK_IMPORTED_MODULE_14___default.a, {
        height: 200
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(recharts_lib_chart_PieChart_js__WEBPACK_IMPORTED_MODULE_15___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(recharts_lib_polar_Pie_js__WEBPACK_IMPORTED_MODULE_16___default.a, {
        dataKey: "value",
        fill: colorPalettes['@primary-color'],
        activeIndex: activeIndex,
        activeShape: _activeShape__WEBPACK_IMPORTED_MODULE_12__["default"],
        innerRadius: "50%",
        outerRadius: "70%",
        onMouseEnter: this.onPieEnter,
        data: data
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_0___default.a, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "frown",
          twoToneColor: colorPalettes['@primary-color'],
          theme: "twoTone"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "text-muted"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
          defaultMessage: "You have no wallet balance.",
          id: "wallet.no_wallet_balance"
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

  return Distribution;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var accounts = _ref.wallet.accounts,
      auth = _ref.auth;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_6__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_7__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"], Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps))(Distribution);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(Distribution, "Distribution", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(Distribution, "Distribution", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\Distribution\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/Portfolio/components/PriceList/components/CoinPrice/index.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/routes/wallets/components/Portfolio/components/PriceList/components/CoinPrice/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var CoinPrice = function CoinPrice(_ref) {
  var styleName = _ref.styleName,
      coin = _ref.coin,
      price = _ref.price,
      priceColor = _ref.priceColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "".concat(styleName, " cp-card-price d-inline-block")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "text-muted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "{coin} Price",
    id: "wallet.coin_price",
    values: {
      coin: coin
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cp-fs-2x font-weight-medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      color: priceColor
    }
  }, price)));
};

var _default = CoinPrice;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CoinPrice, "CoinPrice", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\components\\CoinPrice\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\components\\CoinPrice\\index.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\components\\CoinPrice\\index.js");
  reactHotLoader.register(CoinPrice, "CoinPrice", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\components\\CoinPrice\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\components\\CoinPrice\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\components\\CoinPrice\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/Portfolio/components/PriceList/index.js":
/*!*************************************************************************************!*\
  !*** ./resources/routes/wallets/components/Portfolio/components/PriceList/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CoinPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CoinPrice */ "./resources/routes/wallets/components/Portfolio/components/PriceList/components/CoinPrice/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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







var PriceList = /*#__PURE__*/function (_Component) {
  _inherits(PriceList, _Component);

  var _super = _createSuper(PriceList);

  function PriceList(props) {
    var _this;

    _classCallCheck(this, PriceList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function () {
      _this.setState({
        scroll: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOut", function () {
      _this.setState({
        scroll: true
      });
    });

    _this.state = {
      scroll: true
    };
    return _this;
  }

  _createClass(PriceList, [{
    key: "render",
    value: function render() {
      var accounts = this.props.accounts;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "marquee my-3",
        onMouseOver: this.onMouseOver,
        onMouseOut: this.onMouseOut
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(this.state.scroll ? '' : 'pause')
      }, accounts.map(function (account) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CoinPrice__WEBPACK_IMPORTED_MODULE_1__["default"], {
          coin: account.wallet.coin.name,
          key: account.id,
          styleName: "mx-1",
          price: account.formatted_price,
          priceColor: account.wallet.coin.color
        });
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

  return PriceList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var accounts = _ref.wallet.accounts,
      auth = _ref.auth;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_2__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps))(PriceList);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PriceList, "PriceList", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(PriceList, "PriceList", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\components\\PriceList\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/Portfolio/index.js":
/*!****************************************************************!*\
  !*** ./resources/routes/wallets/components/Portfolio/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Distribution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Distribution */ "./resources/routes/wallets/components/Portfolio/components/Distribution/index.js");
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Balance */ "./resources/routes/wallets/components/Portfolio/components/Balance/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_PriceList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PriceList */ "./resources/routes/wallets/components/Portfolio/components/PriceList/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/actions/Wallet */ "./resources/redux/actions/Wallet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
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












var Portfolio = /*#__PURE__*/function (_Component) {
  _inherits(Portfolio, _Component);

  var _super = _createSuper(Portfolio);

  function Portfolio() {
    var _this;

    _classCallCheck(this, Portfolio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "showNewAccountForm", function () {
      _this.props.showNewAccountForm();
    });

    return _this;
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      var accountsLoading = this.props.accountsLoading;
      var sellCoinPath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_12__["default"]['marketplace.sell_coin'].path);
      var buyCoinPath = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_12__["default"]['marketplace.buy_coin'].path);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
        className: "h4 text-sm-left text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Your Wallet Balance",
        id: "wallet.your_balance"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Balance__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "text-sm-left mb-3 mt-2 mb-md-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: buyCoinPath
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mr-2 cp-btn-success",
        type: "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
        className: "la la-sign-in-alt"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Buy",
        id: "common.buy"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: sellCoinPath
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mr-2",
        type: "danger"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
        className: "la la-sign-out-alt"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Sell",
        id: "common.sell"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PriceList__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "cp-text-primary cp-pointer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "mr-2",
        type: "default",
        onClick: this.showNewAccountForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
        className: "la la-plus-circle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "ml-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        defaultMessage: "Add Account",
        id: "wallet.add_account"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        sm: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
        spinning: accountsLoading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Distribution__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$wallet = _ref.wallet,
      accountsLoading = _ref$wallet.accountsLoading,
      showNewAccountModal = _ref$wallet.showNewAccountModal,
      accounts = _ref$wallet.accounts;
  return {
    accountsLoading: accountsLoading,
    showNewAccountModal: showNewAccountModal,
    accounts: accounts
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
  showNewAccountForm: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__["showNewAccountForm"],
  hideNewAccountForm: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__["hideNewAccountForm"]
}))(Portfolio);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Portfolio, "Portfolio", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(Portfolio, "Portfolio", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\Portfolio\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/RecordsTable/index.js":
/*!*******************************************************************!*\
  !*** ./resources/routes/wallets/components/RecordsTable/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/values */ "./node_modules/lodash/values.js");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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










var RecordsTable = /*#__PURE__*/function (_Component) {
  _inherits(RecordsTable, _Component);

  var _super = _createSuper(RecordsTable);

  function RecordsTable() {
    var _this;

    _classCallCheck(this, RecordsTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      var accounts = _this.props.accounts;
      return [{
        title: 'Amount',
        dataIndex: 'formatted_value_price',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, record.type === 'receive' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            className: "cp-text-success"
          }, text) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            className: "cp-text-danger"
          }, text));
        }
      }, {
        title: 'Date',
        dataIndex: 'created_at',
        sorter: function sorter(a, b) {
          return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["sortDate"])(a.created_at, b.created_at);
        },
        render: function render(text) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["formatUTCDate"])(text));
        }
      }, {
        title: 'Status',
        dataIndex: 'confirmed',
        render: function render(text) {
          var isConfirmed = text === "true" || typeof text === "boolean" && text;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, isConfirmed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_2___default.a, {
            color: "green"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            defaultMessage: "confirmed",
            id: "wallet.transaction_confirmed"
          })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_2___default.a, {
            color: "red"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
            defaultMessage: "unconfirmed",
            id: "wallet.transaction_unconfirmed"
          })));
        }
      }, {
        title: 'Value',
        dataIndex: 'value'
      }, {
        title: 'Hash',
        dataIndex: 'hash'
      }, {
        title: 'Coin',
        dataIndex: 'coin',
        fixed: 'right',
        onFilter: function onFilter(value, record) {
          return record.coin.includes(value);
        },
        filters: lodash_values__WEBPACK_IMPORTED_MODULE_1___default()(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(accounts, function (o) {
          return {
            text: o.wallet.coin.name,
            value: o.wallet.coin.name
          };
        }))
      }];
    });

    return _this;
  }

  _createClass(RecordsTable, [{
    key: "render",
    value: function render() {
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_7__["route"])("user.transfer-records-table");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          defaultMessage: "Transfer Records",
          id: "wallet.transfer_records"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        route: endpoint.url(),
        columns: this.columns(),
        className: "mt-1",
        scroll: {
          x: true,
          y: false
        },
        size: "middle"
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

  return RecordsTable;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var accounts = _ref.wallet.accounts,
      auth = _ref.auth;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_8__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"], Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps))(RecordsTable);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RecordsTable, "RecordsTable", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(RecordsTable, "RecordsTable", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\RecordsTable\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/WithdrawModal/components/AmountInput/index.js":
/*!*******************************************************************************************!*\
  !*** ./resources/routes/wallets/components/WithdrawModal/components/AmountInput/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
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




var AmountInput = /*#__PURE__*/function (_Component) {
  _inherits(AmountInput, _Component);

  var _super = _createSuper(AmountInput);

  function AmountInput(props) {
    var _this;

    _classCallCheck(this, AmountInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "convert", function (value, converter, precision) {
      var input = parseFloat(value);
      if (Number.isNaN(input)) return "";
      var output = converter(input);

      var rounded = lodash_round__WEBPACK_IMPORTED_MODULE_3___default()(output, precision);

      return rounded.toString();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePriceChange", function (e) {
      _this.setState({
        value: e.target.value,
        scale: 'price'
      }, function () {
        _this.triggerControlChange();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCoinChange", function (e) {
      _this.setState({
        value: e.target.value,
        scale: 'coin'
      }, function () {
        _this.triggerControlChange();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toCoin", function (price) {
      var unitPrice = _this.props.unitPrice;
      return price / unitPrice;
    });

    _defineProperty(_assertThisInitialized(_this), "toPrice", function (coin) {
      var unitPrice = _this.props.unitPrice;
      return coin * unitPrice;
    });

    _this.state = {
      value: props.value,
      scale: 'coin'
    };
    return _this;
  }

  _createClass(AmountInput, [{
    key: "triggerControlChange",
    value: function triggerControlChange() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          precision = _this$props.precision;
      if (typeof onChange !== "function") return;
      var _this$state = this.state,
          value = _this$state.value,
          scale = _this$state.scale;

      if (scale === 'price') {
        var coin = this.convert(value, this.toCoin, precision);
        onChange(parseFloat(coin));
      } else if (scale === 'coin') {
        onChange(parseFloat(value));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          coinSymbol = _this$props2.coinSymbol,
          currency = _this$props2.currency,
          precision = _this$props2.precision;
      var _this$state2 = this.state,
          value = _this$state2.value,
          scale = _this$state2.scale;
      var price = scale === 'coin' ? this.convert(value, this.toPrice, 2) : value;
      var coin = scale === 'price' ? this.convert(value, this.toCoin, precision) : value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xs: 12,
        style: {
          marginBottom: '0'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        addonAfter: coinSymbol,
        onChange: this.handleCoinChange,
        value: coin
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xs: 12,
        style: {
          marginBottom: '0'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        addonAfter: currency,
        onChange: this.handlePriceChange,
        value: price
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

  return AmountInput;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

AmountInput.protoType = {
  coinSymbol: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  unitPrice: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
var _default = AmountInput;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AmountInput, "AmountInput", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(AmountInput, "AmountInput", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\components\\AmountInput\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/components/WithdrawModal/index.js":
/*!********************************************************************!*\
  !*** ./resources/routes/wallets/components/WithdrawModal/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/result */ "./node_modules/antd/lib/result/index.js");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux/actions/Wallet */ "./resources/redux/actions/Wallet.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var _components_AmountInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/AmountInput */ "./resources/routes/wallets/components/WithdrawModal/components/AmountInput/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_22__);
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












var colorPalettes = context__WEBPACK_IMPORTED_MODULE_22___default.a.settings.colorPalettes;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["defineMessages"])({
  successful: {
    "id": "wallet.transaction_sent",
    "defaultMessage": "Transaction was sent successfully!"
  }
});

var WithdrawModal = /*#__PURE__*/function (_Component) {
  _inherits(WithdrawModal, _Component);

  var _super = _createSuper(WithdrawModal);

  function WithdrawModal(props) {
    var _this;

    _classCallCheck(this, WithdrawModal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getTransactionFee", function () {
      var account = _this.getAccount();

      if (!account) return false;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var form = _this.props.form;
      var getFieldsValue = form.getFieldsValue;
      var endpoint = route('user.wallet-account.calc-fee', {
        walletAccount: account.id
      });
      var values = getFieldsValue(['amount']);
      axios.post(endpoint.url(), values).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleFormSuccess"])(response, form, function (data) {
          _this.setState({
            feeLoading: false,
            fee: data.fee,
            formattedFee: data.formatted_fee
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleFormError"])(error, form, values, function () {
          _this.setState({
            feeLoading: false
          });
        });
      });

      _this.setState({
        feeLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideModal", function () {
      _this.props.hideWithdrawModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      var account = _this.getAccount();

      if (!account) return false;
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var endpoint = route('user.wallet-account.send', {
        walletAccount: account.id
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleFormSuccess"])(response, form, function () {
              _this.setState({
                confirmLoading: false
              });

              _this.hideModal();

              _this.triggerSuccess();
            }, intl.formatMessage(messages.successful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_20__["handleFormError"])(error, form, values, function () {
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
      formattedFee: null,
      fee: 0,
      feeLoading: false,
      confirmLoading: false
    };
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_17__["default"]();
    return _this;
  }

  _createClass(WithdrawModal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getAccount",
    value: function getAccount() {
      var _this$props2 = this.props,
          accounts = _this$props2.accounts,
          accountId = _this$props2.accountId;
      return lodash_find__WEBPACK_IMPORTED_MODULE_10___default()(accounts, {
        id: accountId
      });
    }
  }, {
    key: "calcTotal",
    value: function calcTotal() {
      var account = this.getAccount();
      if (!account) return null;
      var getFieldValue = this.props.form.getFieldValue;
      var fee = this.state.fee;
      var precision = account.wallet.coin.precision;
      var amount = getFieldValue('amount');

      if (typeof amount !== "number" || !amount) {
        return null;
      }

      var total = !this.shouldChargeFee() ? amount : amount + fee;
      return lodash_round__WEBPACK_IMPORTED_MODULE_9___default()(total, precision);
    }
  }, {
    key: "shouldChargeFee",
    value: function shouldChargeFee() {
      var getFieldValue = this.props.form.getFieldValue;
      var address = getFieldValue('address');
      return !/\S+@\S+\.\S+/.test(address);
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      var total = this.calcTotal();
      var account = this.getAccount();
      if (!account) return false;
      return typeof total === "number" && total && total > 0 && total <= account.available;
    }
  }, {
    key: "triggerSuccess",
    value: function triggerSuccess() {
      var onSuccess = this.props.onSuccess;

      if (typeof onSuccess === "function") {
        return onSuccess();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          form = _this$props3.form,
          auth = _this$props3.auth;
      var getFieldDecorator = form.getFieldDecorator;
      var _this$state = this.state,
          confirmLoading = _this$state.confirmLoading,
          fee = _this$state.fee,
          formattedFee = _this$state.formattedFee,
          feeLoading = _this$state.feeLoading;
      var account = this.getAccount();
      var total = this.calcTotal();
      var twoFactorSetting = auth.twoFactorSetting();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
        visible: visible,
        confirmLoading: confirmLoading,
        onCancel: this.hideModal,
        okButtonProps: {
          disabled: !this.canSubmit()
        },
        onOk: this.handleSubmit,
        destroyOnClose: true,
        okText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Confirm",
          id: "common.confirm"
        })),
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Withdraw {coin}",
          id: "wallet.withdraw_modal_title",
          values: {
            coin: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, account ? account.wallet.coin.name : "Coin")
          }
        })
      }, account ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        showIcon: true,
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Please make sure you check the withdraw address information carefully " + "before the withdraw operation. You can use email address for internal " + "transfer to avoid transaction fee.",
          id: "wallet.withdrawal_info"
        }),
        type: "info"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "mt-3",
        wrapperCol: {
          xs: 24,
          sm: 16
        },
        labelCol: {
          xs: 24,
          sm: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Address",
          id: "common.address_or_email"
        })
      }, getFieldDecorator('address', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Amount",
          id: "common.amount"
        })
      }, getFieldDecorator('amount', {
        rules: [{
          type: 'number',
          required: true,
          min: account.min_transferable,
          max: account.max_transferable
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_AmountInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        currency: account.user.currency,
        coinSymbol: account.wallet.coin.symbol,
        precision: account.wallet.coin.precision,
        unitPrice: account.price
      }))), this.shouldChargeFee() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "d-flex align-items-center mb-2",
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "px-3",
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Fee",
        id: "wallet.fee"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16
      }, fee > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-1"
      }, fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-1"
      }, "(", formattedFee, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
        spin: feeLoading,
        onClick: this.getTransactionFee,
        type: "sync"
      }))), total && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "d-flex align-items-center mb-2",
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "px-3",
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Total",
        id: "common.total"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16
      }, total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "d-flex align-items-center mb-2",
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "px-3",
        span: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Available",
        id: "common.available"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 16
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "".concat(this.canSubmit() && 'cp-text-success')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "mr-1"
      }, account.available), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, "(", account.formatted_available_price, ")")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Verify Identity",
        id: "wallet.verify_identity"
      })), twoFactorSetting.outgoingTransfer() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Token",
          id: "common.token"
        })
      }, getFieldDecorator('token', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        showIcon: true,
        className: "mb-3",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "You should setup two factor authentication to add an extra layer of security.",
          id: "wallet.validate_identity"
        }),
        type: "error"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Password",
          id: "common.password"
        })
      }, getFieldDecorator('password', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a.Password, {
        prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
          type: "lock"
        }),
        autoComplete: "off"
      })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default.a, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
          type: "frown",
          twoToneColor: colorPalettes['@primary-color'],
          theme: "twoTone"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
          className: "text-muted"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Account not found.",
          id: "wallet.account_not_found"
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

  return WithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$wallet = _ref.wallet,
      withdrawAccountId = _ref$wallet.withdrawAccountId,
      visibleWithdrawModal = _ref$wallet.visibleWithdrawModal,
      accounts = _ref$wallet.accounts,
      auth = _ref.auth;
  return {
    accountId: withdrawAccountId,
    visible: visibleWithdrawModal,
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_21__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_14__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, {
  hideWithdrawModal: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_13__["hideWithdrawModal"]
}), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_18__["default"])())(WithdrawModal);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(WithdrawModal, "WithdrawModal", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(colorPalettes, "colorPalettes", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(WithdrawModal, "WithdrawModal", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\components\\WithdrawModal\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/wallets/index.js":
/*!*******************************************!*\
  !*** ./resources/routes/wallets/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Portfolio */ "./resources/routes/wallets/components/Portfolio/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! support/Services/Broadcast/Private */ "./resources/support/Services/Broadcast/Private.js");
/* harmony import */ var _components_NewAccountModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NewAccountModal */ "./resources/routes/wallets/components/NewAccountModal/index.js");
/* harmony import */ var _components_RecordsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/RecordsTable */ "./resources/routes/wallets/components/RecordsTable/index.js");
/* harmony import */ var _components_AccountsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AccountsTable */ "./resources/routes/wallets/components/AccountsTable/index.js");
/* harmony import */ var redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux/actions/Wallet */ "./resources/redux/actions/Wallet.js");
/* harmony import */ var _components_DepositModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/DepositModal */ "./resources/routes/wallets/components/DepositModal/index.js");
/* harmony import */ var redux_actions_Auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux/actions/Auth */ "./resources/redux/actions/Auth.js");
/* harmony import */ var _components_WithdrawModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/WithdrawModal */ "./resources/routes/wallets/components/WithdrawModal/index.js");
/* harmony import */ var redux_actions_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux/actions/Settings */ "./resources/redux/actions/Settings.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_18__);
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


















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_17__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.wallets",
    "defaultMessage": "Wallets | {name}"
  }
});

var Wallets = /*#__PURE__*/function (_Component) {
  _inherits(Wallets, _Component);

  var _super = _createSuper(Wallets);

  function Wallets(props) {
    var _this;

    _classCallCheck(this, Wallets);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchAccounts", function () {
      _this.props.fetchAccounts();
    });

    _defineProperty(_assertThisInitialized(_this), "transferRecordSavedListener", function (e) {
      if (e.transferRecord && e.transferRecord.confirmed) {
        _this.fetchAccounts();
      }

      _this.setState({
        recordsTableKey: Math.floor(Math.random() * 100)
      });
    });

    _this.broadcast = new support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_6__["default"]();
    _this.state = {
      recordsTableKey: 'transfer-record'
    };
    return _this;
  }

  _createClass(Wallets, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindBroadcastEvents();
      this.fetchAccounts();
    }
  }, {
    key: "bindBroadcastEvents",
    value: function bindBroadcastEvents() {
      this.resetBroadcastChannel();
      this.broadcast.listen('TransferRecordSaved', this.transferRecordSavedListener);
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
      var user = this.props.auth.user;
      var prevUser = prevProps.auth.user;

      if (prevUser.id !== user.id) {
        console.log('Wallet Updated');
        this.resetBroadcastChannel();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.broadcast.unbind();
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_18___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var recordsTableKey = this.state.recordsTableKey;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_16__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_WithdrawModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSuccess: this.fetchAccounts
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NewAccountModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSuccess: this.fetchAccounts
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_DepositModal__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Portfolio__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_0___default.a, {
        lg: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AccountsTable__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_0___default.a, {
        lg: 12,
        xs: 24
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RecordsTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: recordsTableKey
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

  return Wallets;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_15__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  fetchAuthUser: redux_actions_Auth__WEBPACK_IMPORTED_MODULE_12__["fetchAuthUser"],
  fetchLocaleData: redux_actions_Settings__WEBPACK_IMPORTED_MODULE_14__["fetchLocaleData"],
  fetchAccounts: redux_actions_Wallet__WEBPACK_IMPORTED_MODULE_10__["fetchAccounts"]
}), react_intl__WEBPACK_IMPORTED_MODULE_17__["injectIntl"])(Wallets);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(Wallets, "Wallets", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(Wallets, "Wallets", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\wallets\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=39.d7d16391b90438e69348.js.map