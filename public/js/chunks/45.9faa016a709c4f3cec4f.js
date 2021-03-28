(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/lodash/_basePullAt.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePullAt.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/lowerCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/lowerCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * _.lowerCase('fooBar');
 * // => 'foo bar'
 *
 * _.lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */
var lowerCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toLowerCase();
});

module.exports = lowerCase;


/***/ }),

/***/ "./node_modules/lodash/remove.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/remove.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    basePullAt = __webpack_require__(/*! ./_basePullAt */ "./node_modules/lodash/_basePullAt.js");

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

module.exports = remove;


/***/ }),

/***/ "./resources/routes/moderation/components/disputedTrades/index.js":
/*!************************************************************************!*\
  !*** ./resources/routes/moderation/components/disputedTrades/index.js ***!
  \************************************************************************/
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
/* harmony import */ var support_Services_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! support/Services/Api */ "./resources/support/Services/Api/index.js");
/* harmony import */ var containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/utils/menuItemLinks */ "./resources/containers/utils/menuItemLinks.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UserTableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UserTableCell */ "./resources/components/UserTableCell/index.js");
/* harmony import */ var components_Widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Widget */ "./resources/components/Widget/index.js");
/* harmony import */ var components_AsyncTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/AsyncTable */ "./resources/components/AsyncTable/index.js");
/* harmony import */ var support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! support/Services/Broadcast/Private */ "./resources/support/Services/Broadcast/Private.js");
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













var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["defineMessages"])({
  pageTitle: {
    "id": "meta.title.moderation_disputed_trades",
    "defaultMessage": "Disputed Trades - Moderation | {name}"
  }
});

var DisputedTrades = /*#__PURE__*/function (_Component) {
  _inherits(DisputedTrades, _Component);

  var _super = _createSuper(DisputedTrades);

  function DisputedTrades(props) {
    var _this;

    _classCallCheck(this, DisputedTrades);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "marketplaceTradeSavedListener", function (e) {
      _this.table.fetchData();
    });

    _defineProperty(_assertThisInitialized(_this), "goToChat", function (chatId) {
      var history = _this.props.history;
      var path = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["generatePath"])(containers_utils_menuItemLinks__WEBPACK_IMPORTED_MODULE_6__["default"]['chat.view'].path, {
        token: chatId
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(history)) {
        return history.push(path);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Coin",
          id: "common.coin"
        }),
        dataIndex: 'coin_name'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Amount",
          id: "common.amount"
        }),
        dataIndex: 'formatted_amount_price'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Seller",
          id: "common.seller"
        }),
        dataIndex: 'seller',
        render: function render(seller) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
            user: seller
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Buyer",
          id: "common.buyer"
        }),
        dataIndex: 'buyer',
        render: function render(buyer) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_UserTableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
            user: buyer
          });
        }
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Rate",
          id: "common.rate"
        }),
        dataIndex: 'formatted_rate'
      }, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
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
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
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
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Action",
          id: "common.action"
        }),
        key: 'action',
        fixed: 'right',
        render: function render(text, record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
            type: "primary",
            onClick: function onClick(e) {
              return _this.goToChat(record.chat_id);
            },
            icon: "link"
          });
        }
      }];
    });

    _this.broadcast = new support_Services_Broadcast_Private__WEBPACK_IMPORTED_MODULE_12__["default"]();
    _this.api = new support_Services_Api__WEBPACK_IMPORTED_MODULE_5__["default"]();
    return _this;
  }

  _createClass(DisputedTrades, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindBroadcastEvents();
    }
  }, {
    key: "bindBroadcastEvents",
    value: function bindBroadcastEvents() {
      this.resetBroadcastChannel();
      this.broadcast.listen('MarketplaceTradeSaved', this.marketplaceTradeSavedListener);
    }
  }, {
    key: "resetBroadcastChannel",
    value: function resetBroadcastChannel() {
      this.broadcast.setChannel('Permission.ManageMarketplace');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.broadcast.unbind();
      this.api.cancel();
    }
  }, {
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

      var endpoint = Object(support_Services_Api__WEBPACK_IMPORTED_MODULE_5__["route"])("moderation.disputed-trades.table");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_15__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, this.getPageTitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Widget__WEBPACK_IMPORTED_MODULE_10__["default"], {
        styleName: "cp-card-table",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
          defaultMessage: "Disputed Trades",
          id: "moderation.disputed_trades"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_AsyncTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
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

  return DisputedTrades;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var _default = Object(support_utils_common__WEBPACK_IMPORTED_MODULE_13__["pipe"])(react_intl__WEBPACK_IMPORTED_MODULE_8__["injectIntl"])(DisputedTrades);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(DisputedTrades, "DisputedTrades", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(messages, "messages", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(DisputedTrades, "DisputedTrades", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\moderation\\components\\disputedTrades\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/routes/moderation/index.js":
/*!**********************************************!*\
  !*** ./resources/routes/moderation/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_CustomRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/CustomRedirect */ "./resources/components/CustomRedirect/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_disputedTrades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/disputedTrades */ "./resources/routes/moderation/components/disputedTrades/index.js");
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






var Moderation = function Moderation(_ref) {
  var match = _ref.match;
  var path = match.path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomRedirect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    from: "".concat(path, "/"),
    to: "".concat(path, "/disputed_trades"),
    exact: true,
    status: 301
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "".concat(path, "/disputed_trades"),
    component: _components_disputedTrades__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
};

var _default = Moderation;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Moderation, "Moderation", "D:\\CostaRica\\source\\resources\\routes\\moderation\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\routes\\moderation\\index.js");
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

  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\routes\\moderation\\index.js");
  reactHotLoader.register(Moderation, "Moderation", "D:\\CostaRica\\source\\resources\\routes\\moderation\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\routes\\moderation\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\routes\\moderation\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=45.9faa016a709c4f3cec4f.js.map