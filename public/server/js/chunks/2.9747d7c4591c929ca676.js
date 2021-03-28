exports.ids = [2];
exports.modules = {

/***/ "./resources/modules/millify/index.js":
/*!********************************************!*\
  !*** ./resources/modules/millify/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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

var DEFAULT_BASE = 1000;
var DEFAULT_PRECISION = 2;
var DEFAULT_DECIMAL_SEPARATOR = '.';
var ERROR_INVALID_VALUE = 'Value must be a valid number';
var ERROR_UNSAFE_VALUE = 'Value is either too big or too small';
var ERROR_INFINITE_VALUE = 'Value must be a finite number';
var ERROR_INVALID_PRECISION = 'Precision must be a non-negative integer';
var ERROR_INVALID_UNITS = 'Units must be an array';
var UNIT_THOUSAND = 'K';
var UNIT_MILLION = 'M';
var UNIT_BILLION = 'B';
var UNIT_TRILLION = 'T';
var UNIT_QUADRILLION = 'P';
var UNIT_QUINTILLION = 'E';
var defaultOptions = {
  base: DEFAULT_BASE,
  precision: DEFAULT_PRECISION,
  decimalSeparator: DEFAULT_DECIMAL_SEPARATOR,
  lowerCase: false,
  space: false,
  units: ['', UNIT_THOUSAND, UNIT_MILLION, UNIT_BILLION, UNIT_TRILLION, UNIT_QUADRILLION, UNIT_QUINTILLION]
};
/**
 * parseValue ensures the value is a number and within accepted range.
 *
 * @param {number} value
 */

var parseValue = function parseValue(value) {
  var val = parseFloat(value);

  if (Number.isNaN(val)) {
    throw new Error(ERROR_INVALID_VALUE);
  }

  if (val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER) {
    throw new RangeError(ERROR_UNSAFE_VALUE);
  }

  return val;
};
/**
 * divider is a generator that divides a value by a denominator defined
 * by the grouping base (default 1000). Each successive turn multipies
 * the base by itself, resulting in a decimal and a unit (count).
 *
 * @param {number} value - Number to be divided
 * @param {number} base - Grouping base/interval
 */


var divider = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function divider(value, base) {
  var denominator, count, result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function divider$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          denominator = base;
          count = 0;

        case 2:
          if (false) {}

          result = value / denominator;

          if (!(result < 1)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return");

        case 6:
          _context.next = 8;
          return {
            result: result,
            count: ++count
          };

        case 8:
          // Increase the denominator each turn
          denominator *= base;
          _context.next = 2;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, divider);
});
/**
 * round up a number to specified precision
 *
 * @param {number} value - Number to be rounded
 * @param {number} precision - Significant places
 */


var round = function round(value, precision) {
  if (!Number.isFinite(value)) {
    throw new Error(ERROR_INFINITE_VALUE);
  }

  if (!Number.isInteger(precision) || precision < 0) {
    throw new Error(ERROR_INVALID_PRECISION);
  }

  if (Number.isInteger(value)) {
    return value;
  }

  return parseFloat(value.toFixed(precision));
};
/**
 * Millify converts long numbers to human-readable strings.
 *
 * @param {number} value - Number to convert
 * @param {Object} options
 * @param {number} options.precision - Number of significant figures
 * @param {string} options.decimalSeparator - Type of decimal marker
 * @param {boolean} options.lowerCase - Lowercase units
 * @param {boolean} options.space - Space between number and abbreviation
 * @param {number} options.base - Numerical group
 * @param {Array<string>} options.units - List of units
 */


var Millify = function Millify(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // Override default options with supplied ones

  var opts = _objectSpread(_objectSpread({}, defaultOptions), options);

  if (!Array.isArray(opts.units) || !opts.units.length) {
    throw new Error(ERROR_INVALID_UNITS);
  } // Validate value for type and length


  var val = parseValue(value); // Add a minus sign (-) prefix if it's a negative number

  var prefix = val < 0 ? '-' : ''; // Work with positive values

  val = Math.abs(val); // Keep dividing the input value by the numerical grouping value (base)
  // until the decimal and unit is deciphered

  var unit = 0;

  var _iterator = _createForOfIteratorHelper(divider(val, opts.base)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var div = _step.value;
      val = div.result;
      unit = div.count;
    } // Avoid out of bounds error by using the last available unit

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  unit = unit > opts.units.length ? opts.units.length - 1 : unit; // Calculate the unit suffix and apply lowercase option

  var suffix = opts.lowerCase ? opts.units[unit].toLowerCase() : opts.units[unit]; // Add a space between number and abbreviation

  var space = opts.space ? ' ' : ''; // Round decimal up to desired precision

  var rounded = round(val, opts.precision); // Replace decimal mark if desired

  var formatted = rounded.toString().replace(DEFAULT_DECIMAL_SEPARATOR, opts.decimalSeparator);
  return "".concat(prefix).concat(formatted).concat(space).concat(suffix);
};

var _default = Millify;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DEFAULT_BASE, "DEFAULT_BASE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(DEFAULT_PRECISION, "DEFAULT_PRECISION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(DEFAULT_DECIMAL_SEPARATOR, "DEFAULT_DECIMAL_SEPARATOR", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INVALID_VALUE, "ERROR_INVALID_VALUE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_UNSAFE_VALUE, "ERROR_UNSAFE_VALUE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INFINITE_VALUE, "ERROR_INFINITE_VALUE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INVALID_PRECISION, "ERROR_INVALID_PRECISION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INVALID_UNITS, "ERROR_INVALID_UNITS", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_THOUSAND, "UNIT_THOUSAND", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_MILLION, "UNIT_MILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_BILLION, "UNIT_BILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_TRILLION, "UNIT_TRILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_QUADRILLION, "UNIT_QUADRILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_QUINTILLION, "UNIT_QUINTILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(parseValue, "parseValue", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(divider, "divider", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(round, "round", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(Millify, "Millify", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
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

  reactHotLoader.register(_createForOfIteratorHelper, "_createForOfIteratorHelper", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ownKeys, "ownKeys", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(DEFAULT_BASE, "DEFAULT_BASE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(DEFAULT_PRECISION, "DEFAULT_PRECISION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(DEFAULT_DECIMAL_SEPARATOR, "DEFAULT_DECIMAL_SEPARATOR", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INVALID_VALUE, "ERROR_INVALID_VALUE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_UNSAFE_VALUE, "ERROR_UNSAFE_VALUE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INFINITE_VALUE, "ERROR_INFINITE_VALUE", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INVALID_PRECISION, "ERROR_INVALID_PRECISION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(ERROR_INVALID_UNITS, "ERROR_INVALID_UNITS", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_THOUSAND, "UNIT_THOUSAND", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_MILLION, "UNIT_MILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_BILLION, "UNIT_BILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_TRILLION, "UNIT_TRILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_QUADRILLION, "UNIT_QUADRILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(UNIT_QUINTILLION, "UNIT_QUINTILLION", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(parseValue, "parseValue", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(divider, "divider", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(round, "round", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(Millify, "Millify", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\modules\\millify\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

};;
//# sourceMappingURL=2.9747d7c4591c929ca676.js.map