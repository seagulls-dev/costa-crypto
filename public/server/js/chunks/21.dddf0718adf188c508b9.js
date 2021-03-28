exports.ids = [21];
exports.modules = {

/***/ "./resources/routes/marketplace/components/buyCoin/index.js":
/*!******************************************************************!*\
  !*** ./resources/routes/marketplace/components/buyCoin/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_FilterResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/FilterResult */ "./resources/components/FilterResult/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_17__);
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
  pageTitle: {
    "id": "meta.title.marketplace_buy_coin",
    "defaultMessage": "Buy Coin - Marketplace | {name}"
  }
});

var BuyCoin = /*#__PURE__*/function (_Component) {
  _inherits(BuyCoin, _Component);

  var _super = _createSuper(BuyCoin);

  function BuyCoin(props) {
    var _this;

    _classCallCheck(this, BuyCoin);

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

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Seller",
          id: "common.seller"
        }),
        dataIndex: 'user',
        render: function render(user) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_12__["default"], {
            user: user
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Payment",
          id: "common.payment"
        }),
        dataIndex: 'payment_method',
        render: function render(paymentMethod, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            className: "d-block"
          }, paymentMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", null, record.label));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Currency",
          id: "common.currency"
        }),
        dataIndex: 'currency'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Range",
          id: "common.range"
        }),
        key: 'range',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_min_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            className: "font-weight-semi-bold mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
            defaultMessage: "To",
            id: "common.to"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_real_max_amount));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_14__["default"]['marketplace.offer'].path, {
            slug: record.slug
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
            to: path
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            type: "default",
            className: "cp-btn-success",
            size: "small"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
            defaultMessage: "Buy",
            id: "common.buy"
          }))));
        }
      }];
    });

    _this.state = {
      drawerState: false
    };
    return _this;
  }

  _createClass(BuyCoin, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var location = this.props.location;
      var prevLocation = prevProps.location;

      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(location, prevLocation)) {
        var filters = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(location, 'state.filters');

        this.applyFilter(filters);
      }
    }
  }, {
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_16___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var drawerState = this.state.drawerState;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_11__["route"])("marketplace.buy-coin.table");
      var filterResultComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_FilterResult__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onApplyFilter: this.applyFilter,
        onClearFilter: this.clearFilter
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_17__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        lg: 8,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_7__["default"], {
        styleName: "d-none d-lg-block",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Filter Result",
          id: "common.filter_result"
        })
      }, filterResultComponent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        lg: 16,
        xl: 18
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        visible: drawerState,
        onClose: this.toggleDrawer,
        placement: "right",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Filter Result",
          id: "common.filter_result"
        }),
        closable: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-2"
      }, filterResultComponent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_7__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Available Offers",
          id: "marketplace.available_offers"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "primary",
          shape: "circle",
          className: "mb-0 material-shadow d-block d-lg-none",
          icon: "filter",
          onClick: this.toggleDrawer
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
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

  return BuyCoin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_15__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["injectIntl"])(BuyCoin);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(BuyCoin, "BuyCoin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(BuyCoin, "BuyCoin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\buyCoin\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/OfferInformation/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/OfferInformation/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
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





var OfferInformation = /*#__PURE__*/function (_Component) {
  _inherits(OfferInformation, _Component);

  var _super = _createSuper(OfferInformation);

  function OfferInformation() {
    _classCallCheck(this, OfferInformation);

    return _super.apply(this, arguments);
  }

  _createClass(OfferInformation, [{
    key: "getMinimumAmount",
    value: function getMinimumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('min_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMaximumAmount",
    value: function getMaximumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('max_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMarketPricePercentage",
    value: function getMarketPricePercentage() {
      var getFieldValue = this.props.form.getFieldValue;
      var profitMargin = getFieldValue('profit_margin');
      return 100 + (profitMargin || 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          form = _this$props.form,
          marketplaceFee = _this$props.marketplaceFee,
          paymentMethod = _this$props.paymentMethod,
          walletAccount = _this$props.walletAccount;
      var currency = form.getFieldValue('currency');
      var minimumAmount = this.getMinimumAmount();
      var marketPricePercentage = this.getMarketPricePercentage();
      var maximumAmount = this.getMaximumAmount();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "font-weight-medium"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Offer Information",
          id: "create_offer.buy_offer_information"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
          className: "mt-1 pl-3 mb-0"
        }, walletAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You are buying coin for your {wallet} account",
          id: "create_offer.buy_summary_wallet_account_information",
          values: {
            wallet: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, walletAccount.wallet.coin.name)
          }
        })), paymentMethod && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You want to pay with {method}",
          id: "create_offer.buy_summary_payment_method_information",
          values: {
            method: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, paymentMethod.name)
          }
        })), marketplaceFee && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "The escrow fee for your selected payment method is {fee}%",
          id: "create_offer.sell_summary_escrow_fee_information",
          values: {
            fee: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, marketplaceFee)
          }
        })), currency && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Your preferred currency of trade is {currency}",
          id: "create_offer.buy_summary_currency_information",
          values: {
            currency: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, lodash_upperCase__WEBPACK_IMPORTED_MODULE_1___default()(currency))
          }
        })), minimumAmount && !maximumAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You accept trade starting from {minimum}!",
          id: "create_offer.buy_summary_minimum_amount_information",
          values: {
            minimum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, minimumAmount)
          }
        })), maximumAmount && minimumAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You accept trade between {minimum} and {maximum}!",
          id: "create_offer.buy_summary_amount_range_information",
          values: {
            minimum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, minimumAmount),
            maximum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, maximumAmount)
          }
        })))),
        showIcon: true
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

  return OfferInformation;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = OfferInformation;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OfferInformation, "OfferInformation", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(OfferInformation, "OfferInformation", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\OfferInformation\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/PaymentSetup/index.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/PaymentSetup/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var _OfferInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../OfferInformation */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/OfferInformation/index.js");
/* harmony import */ var components_Flag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Flag */ "./resources/components/Flag/index.js");
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








var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option,
    OptGroup = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.OptGroup;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  paymentMethod: {
    "id": "create_offer.buy_select_payment_method_placeholder",
    "defaultMessage": "Select payment method..."
  },
  currency: {
    "id": "create_offer.buy_select_currency_placeholder",
    "defaultMessage": "Select currency..."
  },
  walletAccount: {
    "id": "create_offer.buy_select_wallet_account_placeholder",
    "defaultMessage": "Select wallet account..."
  }
});

var PaymentSetup = /*#__PURE__*/function (_Component) {
  _inherits(PaymentSetup, _Component);

  var _super = _createSuper(PaymentSetup);

  function PaymentSetup() {
    _classCallCheck(this, PaymentSetup);

    return _super.apply(this, arguments);
  }

  _createClass(PaymentSetup, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$props = this.props,
          intl = _this$props.intl,
          accounts = _this$props.accounts,
          currencies = _this$props.currencies,
          paymentMethods = _this$props.paymentMethods,
          marketplaceFee = _this$props.marketplaceFee,
          auth = _this$props.auth,
          form = _this$props.form,
          visible = _this$props.visible,
          paymentMethod = _this$props.paymentMethod,
          walletAccount = _this$props.walletAccount;

      var groupedPaymentMethods = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(paymentMethods, function (o) {
        return o.category.name;
      });

      var userLocation = auth.user.location;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(visible ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 16,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Monedero",
          id: "create_offer.buy_select_wallet_account_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Seleccione una billetera para recibir los fondos!",
          id: "create_offer.buy_select_wallet_account_extra"
        })
      }, getFieldDecorator('wallet_account', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.walletAccount),
        optionFilterProp: "children"
      }, accounts.map(function (account) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
          key: account.id,
          value: account.id
        }, account.wallet.coin.name);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Fulfill payment with",
          id: "create_offer.buy_select_payment_method_label"
        })
      }, getFieldDecorator('payment_method', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.paymentMethod),
        optionFilterProp: "children"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_2___default()(groupedPaymentMethods).map(function (category, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OptGroup, {
          key: index,
          label: category
        }, groupedPaymentMethods[category].map(function (method) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
            key: method.id,
            value: method.id
          }, method.name);
        }));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Specify currency to trade with",
          id: "create_offer.buy_select_currency_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Your offer will be posted for the selected currency.",
          id: "create_offer.buy_select_currency_extra"
        })
      }, getFieldDecorator('currency', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.currency),
        optionFilterProp: "children"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_2___default()(currencies).map(function (code) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
          key: code,
          value: code
        }, currencies[code].name, " (", currencies[code].code, ")");
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "px-xl-3 ml-xl-3 cp-border-left-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "About this page",
        id: "create_offer.buy_about_page"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "Brindamos soporte para varios métodos de pago. " + "Siempre puede sugerir uno nuevo para que nuestro equipo lo considere.",
        id: "create_offer.buy_payment_method_information"
      })), userLocation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "Esta oferta se incluirá en su país.: " + "{country}. Esto se usa para mejorar el algoritmo de búsqueda, " + "sus ofertas seguirán siendo visibles para todos.",
        id: "create_offer.buy_country_information",
        values: {
          country: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            className: "mr-2"
          }, userLocation.country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Flag__WEBPACK_IMPORTED_MODULE_12__["default"], {
            code: userLocation.iso_code
          }))
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_OfferInformation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        marketplaceFee: marketplaceFee,
        paymentMethod: paymentMethod,
        walletAccount: walletAccount,
        form: form
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

  return PaymentSetup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      currencies = _ref.collections.currencies,
      accounts = _ref.wallet.accounts;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_10__["default"](auth),
    currencies: currencies
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps))(PaymentSetup);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(PaymentSetup, "PaymentSetup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(PaymentSetup, "PaymentSetup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\PaymentSetup\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/ProfitMargin/index.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/ProfitMargin/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OfferInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../OfferInformation */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/OfferInformation/index.js");
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









var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option,
    OptGroup = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.OptGroup;

var ProfitMargin = /*#__PURE__*/function (_Component) {
  _inherits(ProfitMargin, _Component);

  var _super = _createSuper(ProfitMargin);

  function ProfitMargin(props) {
    var _this;

    _classCallCheck(this, ProfitMargin);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchMarketPrice", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('marketplace.create-offer.price');
      var _this$props = _this.props,
          walletAccount = _this$props.walletAccount,
          form = _this$props.form;
      var getFieldValue = form.getFieldValue;

      _this.setState({
        marketPriceLoading: true
      });

      var data = {
        wallet: walletAccount.wallet.id,
        currency: getFieldValue('currency')
      };
      axios.post(endpoint.url(), data).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleSuccess"])(response, function (data) {
          _this.setState({
            marketPrice: data.price,
            marketPriceLoading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error, function () {
          _this.setState({
            marketPriceLoading: false
          });
        });
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_12__["default"]();
    _this.state = {
      marketPrice: null,
      marketPriceLoading: false
    };
    return _this;
  }

  _createClass(ProfitMargin, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getMinimumAmount",
    value: function getMinimumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('min_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMaximumAmount",
    value: function getMaximumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('max_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMarketPricePercentage",
    value: function getMarketPricePercentage() {
      var getFieldValue = this.props.form.getFieldValue;
      var profitMargin = getFieldValue('profit_margin');
      return 100 + (profitMargin || 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          marketPrice = _this$state.marketPrice,
          marketPriceLoading = _this$state.marketPriceLoading;
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          accounts = _this$props2.accounts,
          currencies = _this$props2.currencies,
          visible = _this$props2.visible,
          form = _this$props2.form,
          marketplaceFee = _this$props2.marketplaceFee,
          paymentMethod = _this$props2.paymentMethod,
          walletAccount = _this$props2.walletAccount;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldValue = form.getFieldValue;
      var minimumAmount = this.getMinimumAmount();
      var marketPricePercentage = this.getMarketPricePercentage();
      var maximumAmount = this.getMaximumAmount();
      var currency = getFieldValue('currency');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(visible ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 16,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        },
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Margin",
          id: "create_offer.buy_input_margin_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, marketPrice && !isNaN(marketPricePercentage) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "The current market price is {marketPrice} while this offer will be sold for {price}",
          id: "create_offer.buy_input_margin_extra",
          values: {
            price: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["currencyFormat"])(marketPricePercentage * marketPrice / 100, currency)),
            marketPrice: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["currencyFormat"])(marketPrice, currency))
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
          spin: marketPriceLoading,
          onClick: this.fetchMarketPrice,
          type: "sync"
        }))
      }, getFieldDecorator('profit_margin', {
        initialValue: 5,
        rules: [{
          type: 'number',
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Min Amount",
          id: "create_offer.buy_input_min_amount_label"
        }),
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        }
      }, getFieldDecorator('min_amount', {
        rules: [{
          type: 'number',
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default.a, {
        min: 1,
        style: {
          width: '100%'
        },
        parser: function parser(value) {
          var parsed = parseFloat(value);
          if (!isNaN(parsed)) return parsed;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Max Amount",
          id: "create_offer.buy_input_max_amount_label"
        }),
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        }
      }, getFieldDecorator('max_amount', {
        rules: [{
          type: 'number',
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default.a, {
        min: 1,
        style: {
          width: '100%'
        },
        parser: function parser(value) {
          var parsed = parseFloat(value);
          if (!isNaN(parsed)) return parsed;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Time Frame",
          id: "create_offer.buy_input_confirmation_time_frame_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Indicates the amount of time in {minutes} you will be able make their payment. " + "The trade will automatically be canceled if you have not clicked {confirmed} button " + "before the above payment window expires.",
          id: "create_offer.buy_input_confirmation_time_frame_extra",
          values: {
            confirmed: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
              defaultMessage: "Mark as Paid",
              id: "common.buy_mark_as_paid"
            })),
            minutes: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "minutes")
          }
        }),
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        }
      }, getFieldDecorator('confirmation_time_frame', {
        rules: [{
          type: 'number',
          required: true,
          min: 30,
          max: 4350
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default.a, {
        min: 1,
        step: 1,
        style: {
          width: '100%'
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "px-xl-3 ml-xl-3 cp-border-left-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "About this page",
        id: "create_offer.buy_about_page"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "Sellers often look for the best value and great vendor ratings. " + "Choose a margin that you think your target seller will find attractive. " + "Here, you can set your exact offers limits, and advanced options.",
        id: "create_offer.buy_margin_information"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_OfferInformation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        marketplaceFee: marketplaceFee,
        form: form,
        paymentMethod: paymentMethod,
        walletAccount: walletAccount
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

  return ProfitMargin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      currencies = _ref.collections.currencies,
      accounts = _ref.wallet.accounts;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_9__["default"](auth),
    currencies: currencies
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, null, null, {
  forwardRef: true
}))(ProfitMargin);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(ProfitMargin, "ProfitMargin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(ProfitMargin, "ProfitMargin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\ProfitMargin\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/TermsOfTrade/index.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/TermsOfTrade/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OfferInformation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../OfferInformation */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/OfferInformation/index.js");
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







var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a.TextArea;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a.Option;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_12__["defineMessages"])({
  label: {
    "id": "create_offer.buy_input_label_placeholder",
    "defaultMessage": "Maximum of 25 characters..."
  },
  country: {
    "id": "create_offer.buy_select_country_placeholder",
    "defaultMessage": "Choose country of offer..."
  },
  tags: {
    "id": "create_offer.buy_select_tags_placeholder",
    "defaultMessage": "Select up to 3 tags..."
  }
});

var TermsOfTrade = /*#__PURE__*/function (_Component) {
  _inherits(TermsOfTrade, _Component);

  var _super = _createSuper(TermsOfTrade);

  function TermsOfTrade() {
    _classCallCheck(this, TermsOfTrade);

    return _super.apply(this, arguments);
  }

  _createClass(TermsOfTrade, [{
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
      var _this$props = this.props,
          tags = _this$props.tags,
          visible = _this$props.visible,
          paymentMethod = _this$props.paymentMethod,
          form = _this$props.form,
          intl = _this$props.intl,
          accounts = _this$props.accounts,
          currencies = _this$props.currencies,
          countries = _this$props.countries,
          walletAccount = _this$props.walletAccount,
          marketplaceFee = _this$props.marketplaceFee,
          auth = _this$props.auth;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(visible ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 16,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Terms",
          id: "create_offer.buy_input_terms_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This will be shown to seller before starting a trade",
          id: "create_offer.buy_input_terms_extra"
        })
      }, getFieldDecorator('terms', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(TextArea, {
        autosize: {
          minRows: 5
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Instruction",
          id: "create_offer.buy_input_instruction_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This will be shown to seller after starting a trade",
          id: "create_offer.buy_input_instruction_extra"
        })
      }, getFieldDecorator('instructions', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(TextArea, {
        autosize: {
          minRows: 5
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Label",
          id: "create_offer.buy_input_label_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This will appear after your payment method",
          id: "create_offer.buy_input_label_extra"
        })
      }, getFieldDecorator('label', {
        rules: [{
          required: true,
          max: 25
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
        placeholder: intl.formatMessage(messages.label)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Tags",
          id: "create_offer.buy_select_tags_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This is used to improve search presence of your offer.",
          id: "create_offer.buy_select_tags_extra"
        })
      }, getFieldDecorator('tags', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
        showSearch: true,
        mode: "multiple",
        placeholder: intl.formatMessage(messages.tags),
        optionFilterProp: "children"
      }, tags.map(function (tag) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, {
          key: tag.id,
          value: tag.name
        }, tag.name);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Country",
          id: "create_offer.buy_select_country_label"
        })
      }, getFieldDecorator('country', {
        initialValue: lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(auth.user, 'location.iso_code'),
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.country),
        optionFilterProp: "children"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_6___default()(countries).map(function (code) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, {
          key: code,
          value: lodash_upperCase__WEBPACK_IMPORTED_MODULE_5___default()(code)
        }, countries[code]);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Privacy",
        id: "create_offer.buy_privacy"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, null, getFieldDecorator('privacy', {
        initialValue: 'none'
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: "none",
        className: "d-block my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "None",
        id: "create_offer.buy_filter_none"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: "all_contacts",
        className: "d-block my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Show your contacts only",
        id: "create_offer.buy_filter_all_contacts"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: "trusted_contacts",
        className: "d-block my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Show your trusted contacts only",
        id: "create_offer.buy_filter_trusted_contacts"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Requirements",
        id: "create_offer.buy_requirements"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        className: "mb-1"
      }, getFieldDecorator('require_phone_verification', {
        valuePropName: 'checked',
        initialValue: true
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Require Phone Verification",
        id: "create_offer.buy_require_phone_verification"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        className: "mb-1"
      }, getFieldDecorator('require_email_verification', {
        valuePropName: 'checked',
        initialValue: true
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Require Email Verification",
        id: "create_offer.buy_require_email_verification"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "px-xl-3 ml-xl-3 cp-border-left-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "About this page",
        id: "create_offer.buy_about_page"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "When a customer clicks into your offer, your terms and " + "instructions will tell them what to provide during the trade.",
        id: "create_offer.buy_terms_of_trade_information"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "You also have the option of moderating who is able to see " + "and who is able to start trade with your offer.",
        id: "create_offer.buy_filter_requirements_information"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_OfferInformation__WEBPACK_IMPORTED_MODULE_16__["default"], {
        marketplaceFee: marketplaceFee,
        paymentMethod: paymentMethod,
        walletAccount: walletAccount,
        form: form
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

  return TermsOfTrade;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      _ref$collections = _ref.collections,
      currencies = _ref$collections.currencies,
      countries = _ref$collections.countries,
      accounts = _ref.wallet.accounts;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_14__["default"](auth),
    currencies: currencies,
    countries: countries
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps))(TermsOfTrade);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(TermsOfTrade, "TermsOfTrade", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(TermsOfTrade, "TermsOfTrade", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\components\\TermsOfTrade\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/index.js":
/*!************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/index.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/intersection */ "./node_modules/lodash/intersection.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/concat */ "./node_modules/lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/steps */ "./node_modules/antd/lib/steps/index.js");
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_steps__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var _components_PaymentSetup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/PaymentSetup */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/PaymentSetup/index.js");
/* harmony import */ var _components_ProfitMargin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ProfitMargin */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/ProfitMargin/index.js");
/* harmony import */ var _components_TermsOfTrade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/TermsOfTrade */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/components/TermsOfTrade/index.js");
/* harmony import */ var constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! constants/ThemeSettings */ "./resources/constants/ThemeSettings.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
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















var Step = antd_lib_steps__WEBPACK_IMPORTED_MODULE_11___default.a.Step;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["defineMessages"])({
  createdSuccessful: {
    "id": "create_offer.offer_created",
    "defaultMessage": "Offer created successfully!."
  },
  updatedSuccessful: {
    "id": "create_offer.offer_updated",
    "defaultMessage": "Offer updated successfully!."
  }
});

var CreateBuyOffer = /*#__PURE__*/function (_Component) {
  _inherits(CreateBuyOffer, _Component);

  var _super = _createSuper(CreateBuyOffer);

  function CreateBuyOffer(props) {
    var _this;

    _classCallCheck(this, CreateBuyOffer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          history = _this$props.history,
          offer = _this$props.offer;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('marketplace.create-offer.buy');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(errors)) {
          if (offer && offer.id) {
            values = lodash_assign__WEBPACK_IMPORTED_MODULE_9___default()({}, values, {
              id: offer.id
            });
          }

          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_25__["default"]['marketplace.offer'].path, {
                slug: data.slug
              });
              if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(history)) history.replace(path);
            }, offer && offer.id ? intl.formatMessage(messages.updatedSuccessful) : intl.formatMessage(messages.createdSuccessful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });

              if (error.response && error.response.data) {
                var _errors = error.response.data.errors;
                if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(_errors)) _this.handleErrors(_errors);
              }
            });
          });

          _this.setState({
            confirmLoading: true
          });
        } else {
          _this.handleErrors(errors);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToTop", function () {
      var layoutType = _this.props.layoutType;

      if (layoutType === constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_23__["LAYOUT_TYPE_FRAMED"]) {
        if (typeof document !== "undefined") {
          var root = document.getElementById('root');

          if (root) {
            root.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
      } else {
        if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_19__["default"]();
    _this.state = {
      current: 0,
      confirmLoading: false
    };
    _this.paymentSetupFields = ['wallet_account', 'payment_method', 'currency'];
    _this.profitMarginFields = ['profit_margin', 'min_amount', 'max_amount', 'confirmation_time_frame'];
    _this.termsOfTradeFields = ['terms', 'instructions', 'label', 'tags', 'privacy', 'require_phone_verification', 'require_email_verification'];
    return _this;
  }

  _createClass(CreateBuyOffer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setOfferFields();
    }
  }, {
    key: "setOfferFields",
    value: function setOfferFields() {
      var _this$props2 = this.props,
          offer = _this$props2.offer,
          form = _this$props2.form;
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(offer)) return;

      var values = lodash_pick__WEBPACK_IMPORTED_MODULE_8___default()(offer, lodash_concat__WEBPACK_IMPORTED_MODULE_7___default()(this.paymentSetupFields, this.profitMarginFields, this.termsOfTradeFields));

      var fields = lodash_mapValues__WEBPACK_IMPORTED_MODULE_6___default()(values, function (v) {
        return _typeof(v) === "object" && v !== null && !Array.isArray(v) ? v.id || null : v;
      });

      form.setFieldsValue(fields);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getMarketPlaceFee",
    value: function getMarketPlaceFee() {
      var _this$props3 = this.props,
          accounts = _this$props3.accounts,
          form = _this$props3.form,
          paymentMethods = _this$props3.paymentMethods;
      var walletAccountId = form.getFieldValue('wallet_account');

      if (walletAccountId) {
        this.walletAccount = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(accounts, {
          id: walletAccountId
        });
      }

      var paymentMethodId = form.getFieldValue('payment_method');

      if (paymentMethodId) {
        this.paymentMethod = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(paymentMethods, {
          id: paymentMethodId
        });
      }

      if (!this.walletAccount || !this.paymentMethod) return;
      var wallet = this.walletAccount.wallet;
      var walletFees = this.paymentMethod.wallet_fees;

      var walletFee = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(walletFees, {
        wallet_id: wallet.id
      });

      if (walletFee) {
        return walletFee.marketplace_fee || wallet.marketplace_fee;
      } else {
        return wallet.marketplace_fee;
      }
    }
  }, {
    key: "handleErrors",
    value: function handleErrors(errors) {
      var _this2 = this;

      var errorFields = lodash_keys__WEBPACK_IMPORTED_MODULE_4___default()(errors);

      var paymentSetupErrorFields = lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default()(errorFields, this.paymentSetupFields);

      var profitMarginErrorFields = lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default()(errorFields, this.profitMarginFields);

      if (paymentSetupErrorFields.length > 0) {
        this.setState({
          current: 0
        }, function () {
          _this2.scrollToTop();
        });
      } else if (profitMarginErrorFields.length > 0) {
        this.setState({
          current: 1
        }, function () {
          _this2.scrollToTop();
        });
      } else {
        this.setState({
          current: 2
        }, function () {
          _this2.scrollToTop();
        });
      }
    }
  }, {
    key: "next",
    value: function next() {
      var _this3 = this;

      var current = this.state.current;
      var form = this.props.form;

      if (current === 0) {
        form.validateFields(this.paymentSetupFields, function (errors) {
          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(errors)) {
            _this3.setState({
              current: 1
            }, function () {
              _this3.scrollToTop();

              _this3.profitMarginRef.fetchMarketPrice();
            });
          }
        });
      }

      if (current === 1) {
        form.validateFields(this.profitMarginFields, function (errors) {
          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(errors)) {
            _this3.setState({
              current: 2
            }, function () {
              _this3.scrollToTop();
            });
          }
        });
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      var _this4 = this;

      var current = this.state.current;
      this.setState({
        current: current - 1
      }, function () {
        _this4.scrollToTop();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var marketplaceFee = this.getMarketPlaceFee();
      var _this$props4 = this.props,
          intl = _this$props4.intl,
          form = _this$props4.form,
          offer = _this$props4.offer,
          paymentMethods = _this$props4.paymentMethods,
          marketplaceTags = _this$props4.marketplaceTags;
      var _this$state = this.state,
          current = _this$state.current,
          confirmLoading = _this$state.confirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: offer && offer.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Edit Buy Offer",
          id: "marketplace.edit_buy_offer"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Create Buy Offer",
          id: "marketplace.create_buy_offer"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "mb-5 d-none d-sm-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_steps__WEBPACK_IMPORTED_MODULE_11___default.a, {
        current: current
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Step, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Payment Setup",
          id: "create_offer.buy_payment_setup"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Choose currency.",
          id: "create_offer.buy_payment_setup_desc"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Step, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Profit Margin",
          id: "create_offer.buy_profit_margin"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Set trade limits.",
          id: "create_offer.buy_profit_margin_desc"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Step, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Terms of Trade",
          id: "create_offer.buy_terms_of_trade"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "State your terms.",
          id: "create_offer.buy_terms_of_trade_desc"
        })
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PaymentSetup__WEBPACK_IMPORTED_MODULE_20__["default"], {
        intl: intl,
        form: form,
        marketplaceFee: marketplaceFee,
        paymentMethod: this.paymentMethod,
        walletAccount: this.walletAccount,
        paymentMethods: paymentMethods,
        visible: current === 0
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ProfitMargin__WEBPACK_IMPORTED_MODULE_21__["default"], {
        intl: intl,
        form: form,
        paymentMethod: this.paymentMethod,
        walletAccount: this.walletAccount,
        marketplaceFee: marketplaceFee,
        ref: function ref(_ref) {
          return _this5.profitMarginRef = _ref;
        },
        visible: current === 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_TermsOfTrade__WEBPACK_IMPORTED_MODULE_22__["default"], {
        intl: intl,
        form: form,
        tags: marketplaceTags,
        paymentMethod: this.paymentMethod,
        walletAccount: this.walletAccount,
        marketplaceFee: marketplaceFee,
        visible: current === 2
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
        className: "mt-4",
        wrapperCol: {
          xl: {
            offset: 16
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "px-xl-3"
      }, current > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: function onClick() {
          return _this5.prev();
        },
        type: "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-left"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Previous",
        id: "common.buy_previous"
      }))), current < 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "cp-btn-primary",
        onClick: function onClick() {
          return _this5.next();
        },
        type: "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Next",
        id: "common.buy_next"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-right"
      })), current === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        loading: confirmLoading,
        icon: 'save',
        className: "cp-btn-success",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, offer && offer.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Edit Offer",
        id: "common.buy_edit_offer"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Create Offer",
        id: "common.buy_create_offer"
      })))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return CreateBuyOffer;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var layoutType = _ref2.settings.layoutType,
      _ref2$collections = _ref2.collections,
      marketplaceTags = _ref2$collections.marketplaceTags,
      currencies = _ref2$collections.currencies,
      paymentMethods = _ref2$collections.paymentMethods,
      accounts = _ref2.wallet.accounts;
  return {
    layoutType: layoutType,
    accounts: accounts,
    marketplaceTags: marketplaceTags,
    currencies: currencies,
    paymentMethods: paymentMethods
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_17__["default"])(), react_router_dom__WEBPACK_IMPORTED_MODULE_24__["withRouter"])(CreateBuyOffer);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Step, "Step", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(CreateBuyOffer, "CreateBuyOffer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(Step, "Step", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(CreateBuyOffer, "CreateBuyOffer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateBuyOffer\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/OfferInformation/index.js":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/OfferInformation/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
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





var OfferInformation = /*#__PURE__*/function (_Component) {
  _inherits(OfferInformation, _Component);

  var _super = _createSuper(OfferInformation);

  function OfferInformation() {
    _classCallCheck(this, OfferInformation);

    return _super.apply(this, arguments);
  }

  _createClass(OfferInformation, [{
    key: "getMinimumAmount",
    value: function getMinimumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('min_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMaximumAmount",
    value: function getMaximumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('max_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_4__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMarketPricePercentage",
    value: function getMarketPricePercentage() {
      var getFieldValue = this.props.form.getFieldValue;
      var profitMargin = getFieldValue('profit_margin');
      return 100 + (profitMargin || 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          form = _this$props.form,
          marketplaceFee = _this$props.marketplaceFee,
          paymentMethod = _this$props.paymentMethod,
          walletAccount = _this$props.walletAccount;
      var currency = form.getFieldValue('currency');
      var minimumAmount = this.getMinimumAmount();
      var marketPricePercentage = this.getMarketPricePercentage();
      var maximumAmount = this.getMaximumAmount();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "font-weight-medium"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Offer Information",
          id: "create_offer.sell_offer_information"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
          className: "mt-1 pl-3 mb-0"
        }, walletAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You are selling from your {wallet} account",
          id: "create_offer.sell_summary_wallet_account_information",
          values: {
            wallet: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, walletAccount.wallet.coin.name)
          }
        })), paymentMethod && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You want to get paid with {method}",
          id: "create_offer.sell_summary_payment_method_information",
          values: {
            method: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, paymentMethod.name)
          }
        })), marketplaceFee && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "The escrow fee for your selected payment method is {fee}%",
          id: "create_offer.sell_summary_escrow_fee_information",
          values: {
            fee: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, marketplaceFee)
          }
        })), currency && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "Your preferred currency of trade is {currency}",
          id: "create_offer.sell_summary_currency_information",
          values: {
            currency: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, lodash_upperCase__WEBPACK_IMPORTED_MODULE_1___default()(currency))
          }
        })), minimumAmount && !maximumAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You accept trade starting from {minimum}!",
          id: "create_offer.sell_summary_minimum_amount_information",
          values: {
            minimum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, minimumAmount)
          }
        })), maximumAmount && minimumAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          defaultMessage: "You accept trade between {minimum} and {maximum}!",
          id: "create_offer.sell_summary_amount_range_information",
          values: {
            minimum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, minimumAmount),
            maximum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, maximumAmount)
          }
        })))),
        showIcon: true
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

  return OfferInformation;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

var _default = OfferInformation;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OfferInformation, "OfferInformation", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(OfferInformation, "OfferInformation", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\OfferInformation\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/PaymentSetup/index.js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/PaymentSetup/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var _OfferInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../OfferInformation */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/OfferInformation/index.js");
/* harmony import */ var components_Flag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Flag */ "./resources/components/Flag/index.js");
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








var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option,
    OptGroup = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.OptGroup;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["defineMessages"])({
  paymentMethod: {
    "id": "create_offer.sell_select_payment_method_placeholder",
    "defaultMessage": "Select payment method..."
  },
  currency: {
    "id": "create_offer.sell_select_currency_placeholder",
    "defaultMessage": "Select currency..."
  },
  walletAccount: {
    "id": "create_offer.sell_select_wallet_account_placeholder",
    "defaultMessage": "Select wallet account..."
  }
});

var PaymentSetup = /*#__PURE__*/function (_Component) {
  _inherits(PaymentSetup, _Component);

  var _super = _createSuper(PaymentSetup);

  function PaymentSetup() {
    _classCallCheck(this, PaymentSetup);

    return _super.apply(this, arguments);
  }

  _createClass(PaymentSetup, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$props = this.props,
          intl = _this$props.intl,
          accounts = _this$props.accounts,
          currencies = _this$props.currencies,
          paymentMethods = _this$props.paymentMethods,
          marketplaceFee = _this$props.marketplaceFee,
          auth = _this$props.auth,
          form = _this$props.form,
          visible = _this$props.visible,
          paymentMethod = _this$props.paymentMethod,
          walletAccount = _this$props.walletAccount;

      var groupedPaymentMethods = lodash_groupBy__WEBPACK_IMPORTED_MODULE_4___default()(paymentMethods, function (o) {
        return o.category.name;
      });

      var userLocation = auth.user.location;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(visible ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 16,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Sell from Wallet Account",
          id: "create_offer.sell_select_wallet_account_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Select your wallet account to sell from!",
          id: "create_offer.sell_select_wallet_account_extra"
        })
      }, getFieldDecorator('wallet_account', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.walletAccount),
        optionFilterProp: "children"
      }, accounts.map(function (account) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
          key: account.id,
          value: account.id
        }, account.wallet.coin.name);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Receive payment with",
          id: "create_offer.sell_select_payment_method_label"
        })
      }, getFieldDecorator('payment_method', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.paymentMethod),
        optionFilterProp: "children"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_2___default()(groupedPaymentMethods).map(function (category, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OptGroup, {
          key: index,
          label: category
        }, groupedPaymentMethods[category].map(function (method) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
            key: method.id,
            value: method.id
          }, method.name);
        }));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Specify currency to trade with",
          id: "create_offer.sell_select_currency_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          defaultMessage: "Your offer will be posted for the selected currency.",
          id: "create_offer.sell_select_currency_extra"
        })
      }, getFieldDecorator('currency', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.currency),
        optionFilterProp: "children"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_2___default()(currencies).map(function (code) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
          key: code,
          value: code
        }, currencies[code].name, " (", currencies[code].code, ")");
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "px-xl-3 ml-xl-3 cp-border-left-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "About this page",
        id: "create_offer.sell_about_page"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "We provide support for several payment methods. " + "You can always suggest a new one for our team to consider. ",
        id: "create_offer.sell_payment_method_information"
      })), userLocation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        defaultMessage: "This offer will be listed under your country: " + "{country}. This is used to improve the search algorithm, " + "your offers will still be visible for all.",
        id: "create_offer.sell_country_information",
        values: {
          country: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            className: "mr-2"
          }, userLocation.country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Flag__WEBPACK_IMPORTED_MODULE_12__["default"], {
            code: userLocation.iso_code
          }))
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_OfferInformation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        marketplaceFee: marketplaceFee,
        paymentMethod: paymentMethod,
        walletAccount: walletAccount,
        form: form
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

  return PaymentSetup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      currencies = _ref.collections.currencies,
      accounts = _ref.wallet.accounts;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_10__["default"](auth),
    currencies: currencies
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_8__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps))(PaymentSetup);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(PaymentSetup, "PaymentSetup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(PaymentSetup, "PaymentSetup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\PaymentSetup\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/ProfitMargin/index.js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/ProfitMargin/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OfferInformation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../OfferInformation */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/OfferInformation/index.js");
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









var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a.Option,
    OptGroup = antd_lib_select__WEBPACK_IMPORTED_MODULE_6___default.a.OptGroup;

var ProfitMargin = /*#__PURE__*/function (_Component) {
  _inherits(ProfitMargin, _Component);

  var _super = _createSuper(ProfitMargin);

  function ProfitMargin(props) {
    var _this;

    _classCallCheck(this, ProfitMargin);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchMarketPrice", function () {
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('marketplace.create-offer.price');
      var _this$props = _this.props,
          walletAccount = _this$props.walletAccount,
          form = _this$props.form;
      var getFieldValue = form.getFieldValue;

      _this.setState({
        marketPriceLoading: true
      });

      var data = {
        wallet: walletAccount.wallet.id,
        currency: getFieldValue('currency')
      };
      axios.post(endpoint.url(), data).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_14__["handleSuccess"])(response, function (data) {
          _this.setState({
            marketPrice: data.price,
            marketPriceLoading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_14__["handleError"])(error, function () {
          _this.setState({
            marketPriceLoading: false
          });
        });
      });
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_13__["default"]();
    _this.state = {
      marketPrice: null,
      marketPriceLoading: false
    };
    return _this;
  }

  _createClass(ProfitMargin, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getMinimumAmount",
    value: function getMinimumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('min_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMaximumAmount",
    value: function getMaximumAmount() {
      var getFieldValue = this.props.form.getFieldValue;
      var currency = getFieldValue('currency');
      var amount = getFieldValue('max_amount');
      if (!amount) return;
      return Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["currencyFormat"])(amount, currency);
    }
  }, {
    key: "getMarketPricePercentage",
    value: function getMarketPricePercentage() {
      var getFieldValue = this.props.form.getFieldValue;
      var profitMargin = getFieldValue('profit_margin');
      return 100 + (profitMargin || 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          marketPrice = _this$state.marketPrice,
          marketPriceLoading = _this$state.marketPriceLoading;
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          accounts = _this$props2.accounts,
          currencies = _this$props2.currencies,
          visible = _this$props2.visible,
          form = _this$props2.form,
          marketplaceFee = _this$props2.marketplaceFee,
          paymentMethod = _this$props2.paymentMethod,
          walletAccount = _this$props2.walletAccount;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldValue = form.getFieldValue;
      var minimumAmount = this.getMinimumAmount();
      var marketPricePercentage = this.getMarketPricePercentage();
      var maximumAmount = this.getMaximumAmount();
      var currency = getFieldValue('currency');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(visible ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        xl: 16,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        },
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Margin",
          id: "create_offer.sell_input_margin_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, marketPrice && !isNaN(marketPricePercentage) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "mr-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "The current market price is {marketPrice} while this offer will be sold for {price}",
          id: "create_offer.sell_input_margin_extra",
          values: {
            price: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["currencyFormat"])(marketPricePercentage * marketPrice / 100, currency)),
            marketPrice: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["currencyFormat"])(marketPrice, currency))
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
          spin: marketPriceLoading,
          onClick: this.fetchMarketPrice,
          type: "sync"
        }))
      }, getFieldDecorator('profit_margin', {
        initialValue: 5,
        rules: [{
          type: 'number',
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          width: '100%'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Min Amount",
          id: "create_offer.sell_input_min_amount_label"
        }),
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        }
      }, getFieldDecorator('min_amount', {
        rules: [{
          type: 'number',
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default.a, {
        min: 1,
        style: {
          width: '100%'
        },
        parser: function parser(value) {
          var parsed = parseFloat(value);
          if (!isNaN(parsed)) return parsed;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Max Amount",
          id: "create_offer.sell_input_max_amount_label"
        }),
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        }
      }, getFieldDecorator('max_amount', {
        rules: [{
          type: 'number',
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default.a, {
        min: 1,
        style: {
          width: '100%'
        },
        parser: function parser(value) {
          var parsed = parseFloat(value);
          if (!isNaN(parsed)) return parsed;
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Time Frame",
          id: "create_offer.sell_input_confirmation_time_frame_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Indicates the amount of time in {minutes} your buyer has to make their payment. " + "The trade will automatically be canceled if the buyer has not clicked {confirmed} " + "before the payment window expires.",
          id: "create_offer.sell_input_confirmation_time_frame_extra",
          values: {
            confirmed: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
              defaultMessage: "Mark as Paid",
              id: "common.sell_mark_as_paid"
            })),
            minutes: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "minutes")
          }
        }),
        wrapperCol: {
          xs: 16
        },
        labelCol: {
          xs: 8
        }
      }, getFieldDecorator('confirmation_time_frame', {
        rules: [{
          type: 'number',
          required: true,
          min: 30,
          max: 4350
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default.a, {
        min: 1,
        step: 1,
        style: {
          width: '100%'
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "px-xl-3 ml-xl-3 cp-border-left-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "About this page",
        id: "create_offer.sell_about_page"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
        defaultMessage: "Buyers often look for the best value and great vendor ratings. " + "Choose a margin that you think your target buyers will find attractive. " + "Here, you can set your exact offers limits, and advanced options.",
        id: "create_offer.sell_margin_information"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, (maximumAmount || minimumAmount) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Your offer will not be shown to the public unless you comply with the following:",
          id: "create_offer.sell_offer_visibility_info"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
          className: "mt-2 pl-3"
        }, maximumAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Your wallet account has at least {maximum} available, which is the maximum amount of your offer!",
          id: "create_offer.sell_offer_visibility_max_amount_requirement",
          values: {
            maximum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, maximumAmount)
          }
        })), !maximumAmount && minimumAmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Your wallet account has at least {minimum} available, which is the minimum amount of your offer!",
          id: "create_offer.sell_offer_visibility_min_amount_requirement",
          values: {
            minimum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, minimumAmount)
          }
        })))),
        showIcon: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_OfferInformation__WEBPACK_IMPORTED_MODULE_12__["default"], {
        marketplaceFee: marketplaceFee,
        form: form,
        paymentMethod: paymentMethod,
        walletAccount: walletAccount
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

  return ProfitMargin;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      currencies = _ref.collections.currencies,
      accounts = _ref.wallet.accounts;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_10__["default"](auth),
    currencies: currencies
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, null, null, {
  forwardRef: true
}))(ProfitMargin);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(ProfitMargin, "ProfitMargin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(OptGroup, "OptGroup", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(ProfitMargin, "ProfitMargin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\ProfitMargin\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/TermsOfTrade/index.js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/TermsOfTrade/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/upperCase */ "./node_modules/lodash/upperCase.js");
/* harmony import */ var lodash_upperCase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_upperCase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OfferInformation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../OfferInformation */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/OfferInformation/index.js");
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







var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a.TextArea;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a.Option;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_12__["defineMessages"])({
  label: {
    "id": "create_offer.input_label_placeholder",
    "defaultMessage": "Maximum of 25 characters..."
  },
  country: {
    "id": "create_offer.sell_select_country_placeholder",
    "defaultMessage": "Choose country of offer..."
  },
  tags: {
    "id": "create_offer.select_tags_placeholder",
    "defaultMessage": "Select up to 3 tags..."
  }
});

var TermsOfTrade = /*#__PURE__*/function (_Component) {
  _inherits(TermsOfTrade, _Component);

  var _super = _createSuper(TermsOfTrade);

  function TermsOfTrade() {
    _classCallCheck(this, TermsOfTrade);

    return _super.apply(this, arguments);
  }

  _createClass(TermsOfTrade, [{
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
      var _this$props = this.props,
          paymentMethod = _this$props.paymentMethod,
          walletAccount = _this$props.walletAccount,
          visible = _this$props.visible,
          intl = _this$props.intl,
          accounts = _this$props.accounts,
          currencies = _this$props.currencies,
          countries = _this$props.countries,
          marketplaceFee = _this$props.marketplaceFee,
          form = _this$props.form,
          tags = _this$props.tags,
          auth = _this$props.auth;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        className: "".concat(visible ? 'd-block' : 'd-none')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 16,
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Terms",
          id: "create_offer.sell_input_terms_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This will be shown to buyer before starting a trade",
          id: "create_offer.sell_input_terms_extra"
        })
      }, getFieldDecorator('terms', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(TextArea, {
        autosize: {
          minRows: 5
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Instruction",
          id: "create_offer.sell_input_instruction_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This will be shown to buyer after starting a trade",
          id: "create_offer.sell_input_instruction_extra"
        })
      }, getFieldDecorator('instructions', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(TextArea, {
        autosize: {
          minRows: 5
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Label",
          id: "create_offer.sell_input_label_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This will appear after your payment method",
          id: "create_offer.sell_input_label_extra"
        })
      }, getFieldDecorator('label', {
        rules: [{
          required: true,
          max: 25
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
        placeholder: intl.formatMessage(messages.label)
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Tags",
          id: "create_offer.sell_select_tags_label"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "This is used to improve search presence of your offer.",
          id: "create_offer.sell_select_tags_extra"
        })
      }, getFieldDecorator('tags', {
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
        showSearch: true,
        mode: "multiple",
        placeholder: intl.formatMessage(messages.tags),
        optionFilterProp: "children"
      }, tags.map(function (tag) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, {
          key: tag.id,
          value: tag.name
        }, tag.name);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
          defaultMessage: "Country",
          id: "create_offer.sell_select_country_label"
        })
      }, getFieldDecorator('country', {
        initialValue: lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(auth.user, 'location.iso_code'),
        rules: [{
          required: true
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
        showSearch: true,
        placeholder: intl.formatMessage(messages.country),
        optionFilterProp: "children"
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_6___default()(countries).map(function (code) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, {
          key: code,
          value: lodash_upperCase__WEBPACK_IMPORTED_MODULE_5___default()(code)
        }, countries[code]);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Privacy",
        id: "create_offer.sell_privacy"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, null, getFieldDecorator('privacy', {
        initialValue: 'none'
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: "none",
        className: "d-block my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "None",
        id: "create_offer.sell_filter_none"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: "all_contacts",
        className: "d-block my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Show your contacts only",
        id: "create_offer.sell_filter_all_contacts"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: "trusted_contacts",
        className: "d-block my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Show your trusted contacts only",
        id: "create_offer.sell_filter_trusted_contacts"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Requirements",
        id: "create_offer.sell_requirements"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        className: "mb-1"
      }, getFieldDecorator('require_phone_verification', {
        valuePropName: 'checked',
        initialValue: true
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Require Phone Verification",
        id: "create_offer.sell_require_phone_verification"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
        className: "mb-1"
      }, getFieldDecorator('require_email_verification', {
        valuePropName: 'checked',
        initialValue: true
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "Require Email Verification",
        id: "create_offer.sell_require_email_verification"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
        xl: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "px-xl-3 ml-xl-3 cp-border-left-xl"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "About this page",
        id: "create_offer.sell_about_page"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "When a customer clicks into your offer, your terms and " + "instructions will tell them what to provide during the trade.",
        id: "create_offer.sell_terms_of_trade_information"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "text-justify"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], {
        defaultMessage: "You also have the option of moderating who is able to see " + "and who is able to start trade with your offer.",
        id: "create_offer.sell_filter_requirements_information"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_OfferInformation__WEBPACK_IMPORTED_MODULE_16__["default"], {
        marketplaceFee: marketplaceFee,
        paymentMethod: paymentMethod,
        walletAccount: walletAccount,
        form: form
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

  return TermsOfTrade;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      _ref$collections = _ref.collections,
      currencies = _ref$collections.currencies,
      countries = _ref$collections.countries,
      accounts = _ref.wallet.accounts;
  return {
    accounts: accounts,
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_14__["default"](auth),
    currencies: currencies,
    countries: countries
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps))(TermsOfTrade);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(TermsOfTrade, "TermsOfTrade", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(TextArea, "TextArea", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(Option, "Option", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(TermsOfTrade, "TermsOfTrade", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\components\\TermsOfTrade\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/index.js":
/*!*************************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/intersection */ "./node_modules/lodash/intersection.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/concat */ "./node_modules/lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/steps */ "./node_modules/antd/lib/steps/index.js");
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_steps__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var _components_PaymentSetup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/PaymentSetup */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/PaymentSetup/index.js");
/* harmony import */ var _components_ProfitMargin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ProfitMargin */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/ProfitMargin/index.js");
/* harmony import */ var _components_TermsOfTrade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/TermsOfTrade */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/components/TermsOfTrade/index.js");
/* harmony import */ var constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! constants/ThemeSettings */ "./resources/constants/ThemeSettings.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
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















var Step = antd_lib_steps__WEBPACK_IMPORTED_MODULE_11___default.a.Step;
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_15__["defineMessages"])({
  createdSuccessful: {
    "id": "create_offer.offer_created",
    "defaultMessage": "Offer created successfully!."
  },
  updatedSuccessful: {
    "id": "create_offer.offer_updated",
    "defaultMessage": "Offer updated successfully!."
  }
});

var CreateSellOffer = /*#__PURE__*/function (_Component) {
  _inherits(CreateSellOffer, _Component);

  var _super = _createSuper(CreateSellOffer);

  function CreateSellOffer(props) {
    var _this;

    _classCallCheck(this, CreateSellOffer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl,
          history = _this$props.history,
          offer = _this$props.offer;
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var endpoint = route('marketplace.create-offer.sell');
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(errors)) {
          if (offer && offer.id) {
            values = lodash_assign__WEBPACK_IMPORTED_MODULE_9___default()({}, values, {
              id: offer.id
            });
          }

          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_24__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_25__["default"]['marketplace.offer'].path, {
                slug: data.slug
              });
              if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(history)) history.replace(path);
            }, offer && offer.id ? intl.formatMessage(messages.updatedSuccessful) : intl.formatMessage(messages.createdSuccessful));
          })["catch"](function (error) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_18__["handleFormError"])(error, form, values, function () {
              _this.setState({
                confirmLoading: false
              });

              if (error.response && error.response.data) {
                var _errors = error.response.data.errors;
                if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(_errors)) _this.handleErrors(_errors);
              }
            });
          });

          _this.setState({
            confirmLoading: true
          });
        } else {
          _this.handleErrors(errors);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToTop", function () {
      var layoutType = _this.props.layoutType;

      if (layoutType === constants_ThemeSettings__WEBPACK_IMPORTED_MODULE_23__["LAYOUT_TYPE_FRAMED"]) {
        if (typeof document !== "undefined") {
          var root = document.getElementById('root');

          if (root) {
            root.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
      } else {
        if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_19__["default"]();
    _this.state = {
      current: 0,
      confirmLoading: false
    };
    _this.paymentSetupFields = ['wallet_account', 'payment_method', 'currency'];
    _this.profitMarginFields = ['profit_margin', 'min_amount', 'max_amount', 'confirmation_time_frame'];
    _this.termsOfTradeFields = ['terms', 'instructions', 'label', 'tags', 'privacy', 'require_phone_verification', 'require_email_verification'];
    return _this;
  }

  _createClass(CreateSellOffer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setOfferFields();
    }
  }, {
    key: "setOfferFields",
    value: function setOfferFields() {
      var _this$props2 = this.props,
          offer = _this$props2.offer,
          form = _this$props2.form;

      if (offer && offer.id) {
        var values = lodash_pick__WEBPACK_IMPORTED_MODULE_8___default()(offer, lodash_concat__WEBPACK_IMPORTED_MODULE_7___default()(this.paymentSetupFields, this.profitMarginFields, this.termsOfTradeFields));

        var fields = lodash_mapValues__WEBPACK_IMPORTED_MODULE_6___default()(values, function (v) {
          return _typeof(v) === "object" && v !== null && !Array.isArray(v) ? v.id || null : v;
        });

        form.setFieldsValue(fields);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.api.cancel();
    }
  }, {
    key: "getMarketPlaceFee",
    value: function getMarketPlaceFee() {
      var _this$props3 = this.props,
          accounts = _this$props3.accounts,
          form = _this$props3.form,
          paymentMethods = _this$props3.paymentMethods;
      var walletAccountId = form.getFieldValue('wallet_account');

      if (walletAccountId) {
        this.walletAccount = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(accounts, {
          id: walletAccountId
        });
      }

      var paymentMethodId = form.getFieldValue('payment_method');

      if (paymentMethodId) {
        this.paymentMethod = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(paymentMethods, {
          id: paymentMethodId
        });
      }

      if (!this.walletAccount || !this.paymentMethod) return;
      var wallet = this.walletAccount.wallet;
      var walletFees = this.paymentMethod.wallet_fees;

      var walletFee = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(walletFees, {
        wallet_id: wallet.id
      });

      if (walletFee) {
        return walletFee.marketplace_fee || wallet.marketplace_fee;
      } else {
        return wallet.marketplace_fee;
      }
    }
  }, {
    key: "handleErrors",
    value: function handleErrors(errors) {
      var _this2 = this;

      var errorFields = lodash_keys__WEBPACK_IMPORTED_MODULE_4___default()(errors);

      var paymentSetupErrorFields = lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default()(errorFields, this.paymentSetupFields);

      var profitMarginErrorFields = lodash_intersection__WEBPACK_IMPORTED_MODULE_3___default()(errorFields, this.profitMarginFields);

      if (paymentSetupErrorFields.length > 0) {
        this.setState({
          current: 0
        }, function () {
          _this2.scrollToTop();
        });
      } else if (profitMarginErrorFields.length > 0) {
        this.setState({
          current: 1
        }, function () {
          _this2.scrollToTop();
        });
      } else {
        this.setState({
          current: 2
        }, function () {
          _this2.scrollToTop();
        });
      }
    }
  }, {
    key: "next",
    value: function next() {
      var _this3 = this;

      var current = this.state.current;
      var form = this.props.form;

      if (current === 0) {
        form.validateFields(this.paymentSetupFields, function (errors) {
          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(errors)) {
            _this3.setState({
              current: 1
            }, function () {
              _this3.scrollToTop();

              _this3.profitMarginRef.fetchMarketPrice();
            });
          }
        });
      }

      if (current === 1) {
        form.validateFields(this.profitMarginFields, function (errors) {
          if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(errors)) {
            _this3.setState({
              current: 2
            }, function () {
              _this3.scrollToTop();
            });
          }
        });
      }
    }
  }, {
    key: "prev",
    value: function prev() {
      var _this4 = this;

      var current = this.state.current;
      this.setState({
        current: current - 1
      }, function () {
        _this4.scrollToTop();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var marketplaceFee = this.getMarketPlaceFee();
      var _this$props4 = this.props,
          intl = _this$props4.intl,
          form = _this$props4.form,
          offer = _this$props4.offer,
          paymentMethods = _this$props4.paymentMethods,
          marketplaceTags = _this$props4.marketplaceTags;
      var _this$state = this.state,
          current = _this$state.current,
          confirmLoading = _this$state.confirmLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: offer && offer.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Edit Sell Offer",
          id: "marketplace.edit_sell_offer"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Create Sell Offer",
          id: "marketplace.create_sell_offer"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "mb-5 d-none d-sm-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_steps__WEBPACK_IMPORTED_MODULE_11___default.a, {
        current: current
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Step, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Payment Setup",
          id: "create_offer.sell_payment_setup"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Choose currency.",
          id: "create_offer.sell_payment_setup_desc"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Step, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Profit Margin",
          id: "create_offer.sell_profit_margin"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Set trade limits.",
          id: "create_offer.sell_profit_margin_desc"
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Step, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "Terms of Trade",
          id: "create_offer.sell_terms_of_trade"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
          defaultMessage: "State your terms.",
          id: "create_offer.sell_terms_of_trade_desc"
        })
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a, {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_PaymentSetup__WEBPACK_IMPORTED_MODULE_20__["default"], {
        intl: intl,
        form: form,
        marketplaceFee: marketplaceFee,
        paymentMethod: this.paymentMethod,
        walletAccount: this.walletAccount,
        paymentMethods: paymentMethods,
        visible: current === 0
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ProfitMargin__WEBPACK_IMPORTED_MODULE_21__["default"], {
        intl: intl,
        form: form,
        paymentMethod: this.paymentMethod,
        walletAccount: this.walletAccount,
        marketplaceFee: marketplaceFee,
        ref: function ref(_ref) {
          return _this5.profitMarginRef = _ref;
        },
        visible: current === 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_TermsOfTrade__WEBPACK_IMPORTED_MODULE_22__["default"], {
        intl: intl,
        form: form,
        tags: marketplaceTags,
        paymentMethod: this.paymentMethod,
        walletAccount: this.walletAccount,
        marketplaceFee: marketplaceFee,
        visible: current === 2
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
        className: "mt-4",
        wrapperCol: {
          xl: {
            offset: 16
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "px-xl-3"
      }, current > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: function onClick() {
          return _this5.prev();
        },
        type: "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-left"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Previous",
        id: "common.sell_previous"
      }))), current < 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "cp-btn-primary",
        onClick: function onClick() {
          return _this5.next();
        },
        type: "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Next",
        id: "common.sell_next"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-right"
      })), current === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "default",
        loading: confirmLoading,
        icon: 'save',
        className: "cp-btn-success",
        htmlType: "submit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, offer && offer.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Edit Offer",
        id: "common.sell_edit_offer"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
        defaultMessage: "Create Offer",
        id: "common.sell_create_offer"
      })))))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return CreateSellOffer;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var layoutType = _ref2.settings.layoutType,
      _ref2$collections = _ref2.collections,
      marketplaceTags = _ref2$collections.marketplaceTags,
      currencies = _ref2$collections.currencies,
      paymentMethods = _ref2$collections.paymentMethods,
      accounts = _ref2.wallet.accounts;
  return {
    layoutType: layoutType,
    accounts: accounts,
    marketplaceTags: marketplaceTags,
    currencies: currencies,
    paymentMethods: paymentMethods
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_17__["default"])(), react_router_dom__WEBPACK_IMPORTED_MODULE_24__["withRouter"])(CreateSellOffer);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Step, "Step", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(CreateSellOffer, "CreateSellOffer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(Step, "Step", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(CreateSellOffer, "CreateSellOffer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\components\\CreateSellOffer\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/createOffer/index.js":
/*!**********************************************************************!*\
  !*** ./resources/routes/marketplace/components/createOffer/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_PageTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/PageTabs */ "./resources/components/PageTabs/index.js");
/* harmony import */ var _components_CreateBuyOffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CreateBuyOffer */ "./resources/routes/marketplace/components/createOffer/components/CreateBuyOffer/index.js");
/* harmony import */ var _components_CreateSellOffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CreateSellOffer */ "./resources/routes/marketplace/components/createOffer/components/CreateSellOffer/index.js");
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_12__);
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











var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.marketplace_create_offer",
    "defaultMessage": "Create Offer - Marketplace | {name}"
  }
});
var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane;

var CreateOffer = /*#__PURE__*/function (_Component) {
  _inherits(CreateOffer, _Component);

  var _super = _createSuper(CreateOffer);

  function CreateOffer() {
    _classCallCheck(this, CreateOffer);

    return _super.apply(this, arguments);
  }

  _createClass(CreateOffer, [{
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
      var location = this.props.location;
      var attributes = {};

      var offer = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(location, 'state.offer');

      if (offer && offer.id) {
        if (offer.type === 'sell') {
          attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()(attributes, {
            defaultActiveKey: 'create_sell_offer'
          });
        }

        if (offer.type === 'buy') {
          attributes = lodash_assign__WEBPACK_IMPORTED_MODULE_0___default()(attributes, {
            defaultActiveKey: 'create_buy_offer'
          });
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_12__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_PageTabs__WEBPACK_IMPORTED_MODULE_5__["default"], attributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabPane, {
        key: "create_sell_offer",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
          className: "la la-sign-out-alt cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Sell Offer",
          id: "marketplace.sell_offer"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_CreateSellOffer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        offer: offer && offer.type === "sell" && offer
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabPane, {
        key: "create_buy_offer",
        tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "d-flex align-items-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
          className: "la la-sign-in-alt cp-fs-xl mr-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          defaultMessage: "Buy Offer",
          id: "marketplace.buy_offer"
        })))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_CreateBuyOffer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        offer: offer && offer.type === "buy" && offer
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

  return CreateOffer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_8__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_9__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps), react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(CreateOffer);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(CreateOffer, "CreateOffer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(TabPane, "TabPane", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(CreateOffer, "CreateOffer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\createOffer\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/offer/components/AmountInput/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/routes/marketplace/components/offer/components/AmountInput/index.js ***!
  \***************************************************************************************/
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
      scale: 'price'
    };
    return _this;
  }

  _createClass(AmountInput, [{
    key: "triggerControlChange",
    value: function triggerControlChange() {
      var onChange = this.props.onChange;
      if (typeof onChange !== "function") return;
      var _this$state = this.state,
          value = _this$state.value,
          scale = _this$state.scale;

      if (scale === 'coin') {
        var price = this.convert(value, this.toPrice, 2);
        onChange(parseFloat(price));
      } else if (scale === 'price') {
        onChange(parseFloat(value));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          coinSymbol = _this$props.coinSymbol,
          currency = _this$props.currency,
          precision = _this$props.precision;
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

  reactHotLoader.register(AmountInput, "AmountInput", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(AmountInput, "AmountInput", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\components\\AmountInput\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/offer/index.js":
/*!****************************************************************!*\
  !*** ./resources/routes/marketplace/components/offer/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/rate */ "./node_modules/antd/lib/rate/index.js");
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var support_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Auth */ "./resources/support/Auth.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var support_utils_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/promise */ "./resources/support/utils/promise.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Loading */ "./resources/components/Loading/index.js");
/* harmony import */ var components_PageNotFound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/PageNotFound */ "./resources/components/PageNotFound/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_UserAvatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/UserAvatar */ "./resources/components/UserAvatar/index.js");
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! millify */ "./resources/modules/millify/index.js");
/* harmony import */ var components_Flag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/Flag */ "./resources/components/Flag/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_MarketplaceReviews__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/MarketplaceReviews */ "./resources/components/MarketplaceReviews/index.js");
/* harmony import */ var _components_AmountInput__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/AmountInput */ "./resources/routes/marketplace/components/offer/components/AmountInput/index.js");
/* harmony import */ var support_Helpers_Form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! support/Helpers/Form */ "./resources/support/Helpers/Form/index.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_27__);
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





















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_21__["defineMessages"])({
  successful: {
    "id": "offer.start_trade_action_successful",
    "defaultMessage": "Trade started successfully!"
  },
  pageTitle: {
    "id": "meta.title.marketplace_offer",
    "defaultMessage": "{title} | {name}"
  }
});

var Offer = /*#__PURE__*/function (_Component) {
  _inherits(Offer, _Component);

  var _super = _createSuper(Offer);

  function Offer(props) {
    var _this;

    _classCallCheck(this, Offer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "goToChat", function (chatId) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_20__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_25__["default"]['chat.view'].path, {
        token: chatId
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(history)) {
        return history.push(path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$api = _this.api,
          axios = _this$api.axios,
          route = _this$api.route;
      var _this$state = _this.state,
          loading = _this$state.loading,
          offer = _this$state.offer;
      var _this$props = _this.props,
          form = _this$props.form,
          intl = _this$props.intl;
      if (loading || !_this.canStartTrade()) return;
      var endpoint = route('marketplace.offer.start-trade', {
        offer: offer.slug
      });
      form.validateFields(function (errors, values) {
        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(errors)) {
          axios.post(endpoint.url(), values).then(function (response) {
            return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleFormSuccess"])(response, form, function (data) {
              _this.setState({
                confirmLoading: false
              });

              _this.goToChat(data.chat_id);
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

    _defineProperty(_assertThisInitialized(_this), "fetchOffer", function () {
      var _this$api2 = _this.api,
          axios = _this$api2.axios,
          route = _this$api2.route;
      var match = _this.props.match;

      _this.setState({
        loading: true
      });

      var endpoint = route('marketplace.offer.get', {
        offer: match.params.slug
      }).url();
      axios.get(endpoint).then(function (response) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleSuccess"])(response, function (data) {
          _this.setState({
            offer: data,
            loading: false
          });
        });
      })["catch"](function (error) {
        return Object(support_utils_promise__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error, function () {
          _this.setState({
            offer: {},
            loading: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSharableLink", function () {
      if (typeof window !== "undefined") {
        return window.location.href;
      }
    });

    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_16__["default"]();
    _this.state = {
      offer: {},
      confirmLoading: false,
      loading: false
    };
    return _this;
  }

  _createClass(Offer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchOffer();
    }
  }, {
    key: "shouldVerifyEmail",
    value: function shouldVerifyEmail() {
      var offer = this.state.offer;
      var auth = this.props.auth;
      return offer.require_email_verification && !auth.verifiedEmail();
    }
  }, {
    key: "shouldVerifyPhone",
    value: function shouldVerifyPhone() {
      var offer = this.state.offer;
      var auth = this.props.auth;
      return offer.require_phone_verification && !auth.verifiedPhone();
    }
  }, {
    key: "canStartTrade",
    value: function canStartTrade() {
      var auth = this.props.auth;
      var offer = this.state.offer;
      return offer.visibility && auth.check() && auth.user.id !== offer.user.id && !this.shouldVerifyEmail() && !this.shouldVerifyPhone();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var matchParams = this.props.match.params;
      var prevMatchParams = prevProps.match.params;

      if (matchParams.slug !== prevMatchParams.slug) {
        this.fetchOffer();
        console.log('Updated Offer Component');
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
      var offer = this.state.offer;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_26___default.a.name,
        title: offer.title
      });
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.props.auth;
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$state2 = this.state,
          loading = _this$state2.loading,
          offer = _this$state2.offer,
          confirmLoading = _this$state2.confirmLoading;
      var sharableLink = this.getSharableLink();
      return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(offer) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_27__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        xl: 16,
        lg: 14,
        md: 14
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "text-uppercase"
      }, offer.type === "sell" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
        defaultMessage: "How much do you want to buy?",
        id: "offer.how_much_buy"
      }), offer.type === "buy" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
        defaultMessage: "How much do you want to sell?",
        id: "offer.how_much_sell"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "mt-3",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        labelAlign: "left",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "Enter Amount",
          id: "offer.enter_amount"
        })
      }, getFieldDecorator('amount', {
        rules: [{
          type: 'number',
          required: true,
          min: offer.min_amount,
          max: offer.real_max_amount
        }]
      })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_AmountInput__WEBPACK_IMPORTED_MODULE_23__["default"], {
        currency: offer.currency,
        precision: offer.coin_precision,
        coinSymbol: offer.coin_symbol,
        unitPrice: offer.rate
      }))), !offer.visibility ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "mb-1",
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          id: "offer.unavailable_info",
          defaultMessage: "This offer is {unavailable}. This can be because the owner has " + "disable the offer, cannot currently interact with the platform, " + "or they do not have enough balance to fulfill the offer.",
          values: {
            unavailable: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
              className: "text-uppercase font-weight-bold"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
              defaultMessage: "Unavailable",
              id: "common.unavailable"
            }))
          }
        }),
        showIcon: true
      }) : !this.canStartTrade() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "Unable to Start Trade",
          id: "offer.unable_to_start_trade"
        }),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ol", {
          className: "mt-1 pl-3 mb-0"
        }, !auth.check() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          id: "offer.authentication_required_desc",
          defaultMessage: "You need to {register} or {login} to continue with the trade.",
          values: {
            register: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
              defaultMessage: "Register",
              id: "common.register"
            })),
            login: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
              defaultMessage: "Login",
              id: "common.login"
            }))
          }
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, auth.user.id === offer.user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "You cannot start a trade with yourself!",
          id: "offer.cannot_start_trade_with_self_desc"
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.shouldVerifyPhone() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "{phone} verification is required by the owner",
          id: "offer.phone_verification_required_desc",
          values: {
            phone: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
              defaultMessage: "Phone",
              id: "common.phone"
            }))
          }
        })), this.shouldVerifyEmail() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "{email} verification is required by the owner",
          id: "offer.email_verification_required_desc",
          values: {
            email: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
              defaultMessage: "Email",
              id: "common.email"
            }))
          }
        }))))),
        type: "warning",
        showIcon: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        type: "primary",
        size: "large",
        loading: confirmLoading,
        icon: "lock",
        disabled: !this.canStartTrade(),
        htmlType: "submit",
        block: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-uppercase"
      }, offer.type === "sell" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
        defaultMessage: "Buy Now!",
        id: "offer.buy_now"
      }), offer.type === "buy" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
        defaultMessage: "Sell Now!",
        id: "offer.sell_now"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        sm: 12,
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "info",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "font-weight-medium"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "Offer Information",
          id: "offer.offer_information"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ol", {
          className: "mt-1 pl-3 mb-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "Your amount should be between {minimum} and {maximum}!",
          id: "offer.amount_range_information",
          values: {
            maximum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, offer.formatted_real_max_amount),
            minimum: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, offer.formatted_min_amount)
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "Rate per {coin_name} is {price}. You can buy any fraction",
          id: "offer.rate_information",
          values: {
            coin_name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, offer.coin_name),
            price: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, offer.formatted_rate)
          }
        }))))
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        sm: 12,
        className: "my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "warning",
        message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "font-weight-medium"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "Payment Verification",
          id: "offer.payment_verification_warning"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "mt-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
          defaultMessage: "The buyer of this trade has a time limit of {deadline} to pay " + "for the trade before the trade is cancelled by the system. " + "Trade will not auto-cancel when buyer has marked trade as paid, " + "after which buyer has to wait for seller to release coin.",
          id: "offer.confirmation_time_information",
          values: {
            deadline: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, offer.confirmation_time_frame, " minutes")
          }
        })))
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__["FormattedMessage"], {
        defaultMessage: "Owner Terms",
        id: "offer.owner_terms"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          whiteSpace: 'pre-line'
        },
        className: "font-italic cp-fs-lg"
      }, offer.terms))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        xl: 8,
        lg: 10,
        md: 10
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        actions: sharableLink && [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "//twitter.com/intent/tweet?url=".concat(sharableLink)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "lab la-twitter cp-fs-2x"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "//reddit.com/submit?url=".concat(sharableLink)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "lab la-reddit cp-fs-2x"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "//www.facebook.com/sharer.php?u=".concat(sharableLink)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "lab la-facebook cp-fs-2x"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_UserAvatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
        user: offer.user,
        className: "cp-fs-3x",
        size: 150
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "mt-2 mb-1 cp-fs-xxl font-weight-light text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "mr-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"], {
        to: "/profile/".concat(offer.user.name)
      }, offer.user.name)), offer.user.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Flag__WEBPACK_IMPORTED_MODULE_19__["default"], {
        code: offer.user.location.iso_code
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cp-fs-lg text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_rate__WEBPACK_IMPORTED_MODULE_0___default.a, {
        value: offer.user.average_marketplace_rating,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "ml-2"
      }, "(", Object(millify__WEBPACK_IMPORTED_MODULE_18__["default"])(offer.user.total_marketplace_rating), ")")), offer.user.last_seen_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "mt-2 align-items-center d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "la la-clock cp-fs-xl"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "ml-2"
      }, Object(support_utils_common__WEBPACK_IMPORTED_MODULE_10__["utcDateCalendarTime"])(offer.user.last_seen_at)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_MarketplaceReviews__WEBPACK_IMPORTED_MODULE_22__["default"], {
        user: offer.user
      })))) : !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_PageNotFound__WEBPACK_IMPORTED_MODULE_15__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Offer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: new support_Auth__WEBPACK_IMPORTED_MODULE_9__["default"](auth)
  };
};

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_10__["pipe"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps), Object(support_Helpers_Form__WEBPACK_IMPORTED_MODULE_24__["default"])())(Offer);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(Offer, "Offer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(Offer, "Offer", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\offer\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/components/sellCoin/index.js":
/*!*******************************************************************!*\
  !*** ./resources/routes/marketplace/components/sellCoin/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_FilterResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/FilterResult */ "./resources/components/FilterResult/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var support_utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! support/utils/common */ "./resources/support/utils/common.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! context */ "./resources/context/index.js");
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(context__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_15__);
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
  pageTitle: {
    "id": "meta.title.marketplace_sell_coin",
    "defaultMessage": "Sell Coin - Marketplace | {name}"
  }
});

var SellCoin = /*#__PURE__*/function (_Component) {
  _inherits(SellCoin, _Component);

  var _super = _createSuper(SellCoin);

  function SellCoin(props) {
    var _this;

    _classCallCheck(this, SellCoin);

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

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Buyer",
          id: "common.buyer"
        }),
        dataIndex: 'user',
        render: function render(user) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
            user: user
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Payment",
          id: "common.payment"
        }),
        dataIndex: 'payment_method',
        render: function render(paymentMethod, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            className: "d-block"
          }, paymentMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", {
            className: "d-block"
          }, record.label));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Currency",
          id: "common.currency"
        }),
        dataIndex: 'currency'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Range",
          id: "common.range"
        }),
        key: 'range',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_min_amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            className: "font-weight-semi-bold mx-2"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            defaultMessage: "To",
            id: "common.to"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            style: {
              whiteSpace: 'nowrap'
            }
          }, record.formatted_real_max_amount));
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_12__["default"]['marketplace.offer'].path, {
            slug: record.slug
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            to: path
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
            type: "default",
            className: "cp-btn-danger",
            size: "small"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
            defaultMessage: "Sell",
            id: "common.sell"
          }))));
        }
      }];
    });

    _this.state = {
      drawerState: false
    };
    return _this;
  }

  _createClass(SellCoin, [{
    key: "getPageTitle",
    value: function getPageTitle() {
      var intl = this.props.intl;
      return intl.formatMessage(messages.pageTitle, {
        name: context__WEBPACK_IMPORTED_MODULE_14___default.a.name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var drawerState = this.state.drawerState;
      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_9__["route"])("marketplace.sell-coin.table");
      var filterResultComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_FilterResult__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onApplyFilter: this.applyFilter,
        onClearFilter: this.clearFilter
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_15__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
        gutter: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        lg: 8,
        xl: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        styleName: "d-none d-lg-block",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Filter Result",
          id: "common.filter_result"
        })
      }, filterResultComponent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
        lg: 16,
        xl: 18
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        visible: drawerState,
        onClose: this.toggleDrawer,
        placement: "right",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Filter Result",
          id: "common.filter_result"
        }),
        closable: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "p-2"
      }, filterResultComponent))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
          defaultMessage: "Available Offers",
          id: "marketplace.available_offers"
        }),
        extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "primary",
          shape: "circle",
          className: "mb-0 material-shadow d-block d-lg-none",
          icon: "filter",
          onClick: this.toggleDrawer
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

  return SellCoin;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(SellCoin);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(SellCoin, "SellCoin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(SellCoin, "SellCoin", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\components\\sellCoin\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/marketplace/index.js":
/*!***********************************************!*\
  !*** ./resources/routes/marketplace/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_CustomRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/CustomRedirect */ "./resources/components/CustomRedirect/index.js");
/* harmony import */ var components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ProtectedRoute */ "./resources/components/ProtectedRoute/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_buyCoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buyCoin */ "./resources/routes/marketplace/components/buyCoin/index.js");
/* harmony import */ var _components_createOffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/createOffer */ "./resources/routes/marketplace/components/createOffer/index.js");
/* harmony import */ var _components_sellCoin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sellCoin */ "./resources/routes/marketplace/components/sellCoin/index.js");
/* harmony import */ var _components_offer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/offer */ "./resources/routes/marketplace/components/offer/index.js");
/* harmony import */ var components_PageNotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/PageNotFound */ "./resources/components/PageNotFound/index.js");
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











var Marketplace = function Marketplace(_ref) {
  var match = _ref.match;
  var path = match.path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomRedirect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    from: "".concat(path, "/"),
    to: "".concat(path, "/buy_coin"),
    exact: true,
    status: 301
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "".concat(path, "/offer/:slug"),
    component: _components_offer__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "".concat(path, "/buy_coin"),
    component: _components_buyCoin__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "".concat(path, "/create_offer"),
    component: _components_createOffer__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "".concat(path, "/sell_coin"),
    component: _components_sellCoin__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: components_PageNotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
  }));
};

var _default = Marketplace;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

if (false) {}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Marketplace, "Marketplace", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\index.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\index.js");
  reactHotLoader.register(Marketplace, "Marketplace", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\marketplace\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};;
//# sourceMappingURL=21.dddf0718adf188c508b9.js.map