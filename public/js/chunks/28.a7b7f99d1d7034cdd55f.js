(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/antd/lib/_util/triggerEvent.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/_util/triggerEvent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = triggerEvent;

function triggerEvent(el, type) {
  if ('createEvent' in document) {
    // modern browsers, IE9+
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, false, true);
    el.dispatchEvent(e);
  }
}

/***/ }),

/***/ "./node_modules/antd/lib/transfer/ListItem.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/transfer/ListItem.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _PureRenderMixin = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/PureRenderMixin */ "./node_modules/rc-util/lib/PureRenderMixin.js"));

var _reactLazyLoad = _interopRequireDefault(__webpack_require__(/*! react-lazy-load */ "./node_modules/react-lazy-load/lib/LazyLoad.js"));

var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../checkbox */ "./node_modules/antd/lib/checkbox/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ListItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ListItem, _React$Component);

  var _super = _createSuper(ListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _PureRenderMixin["default"].shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          renderedText = _this$props.renderedText,
          renderedEl = _this$props.renderedEl,
          item = _this$props.item,
          lazy = _this$props.lazy,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          prefixCls = _this$props.prefixCls,
          onClick = _this$props.onClick;
      var className = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-content-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _classNames));
      var title;

      if (typeof renderedText === 'string' || typeof renderedText === 'number') {
        title = String(renderedText);
      }

      var listItem = /*#__PURE__*/React.createElement("li", {
        className: className,
        title: title,
        onClick: disabled || item.disabled ? undefined : function () {
          return onClick(item);
        }
      }, /*#__PURE__*/React.createElement(_checkbox["default"], {
        checked: checked,
        disabled: disabled || item.disabled
      }), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-content-item-text")
      }, renderedEl));
      var children = null;

      if (lazy) {
        var lazyProps = _extends({
          height: 32,
          offset: 500,
          throttle: 0,
          debounce: false
        }, lazy);

        children = /*#__PURE__*/React.createElement(_reactLazyLoad["default"], lazyProps, listItem);
      } else {
        children = listItem;
      }

      return children;
    }
  }]);

  return ListItem;
}(React.Component);

exports["default"] = ListItem;

/***/ }),

/***/ "./node_modules/antd/lib/transfer/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/transfer/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _list = _interopRequireDefault(__webpack_require__(/*! ./list */ "./node_modules/antd/lib/transfer/list.js"));

var _operation = _interopRequireDefault(__webpack_require__(/*! ./operation */ "./node_modules/antd/lib/transfer/operation.js"));

var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ "./node_modules/antd/lib/transfer/search.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Transfer = /*#__PURE__*/function (_React$Component) {
  _inherits(Transfer, _React$Component);

  var _super = _createSuper(Transfer);

  function Transfer(props) {
    var _this;

    _classCallCheck(this, Transfer);

    _this = _super.call(this, props);
    _this.separatedDataSource = null;

    _this.getLocale = function (transferLocale, renderEmpty) {
      // Keep old locale props still working.
      var oldLocale = {
        notFoundContent: renderEmpty('Transfer')
      };

      if ('notFoundContent' in _this.props) {
        oldLocale.notFoundContent = _this.props.notFoundContent;
      }

      if ('searchPlaceholder' in _this.props) {
        oldLocale.searchPlaceholder = _this.props.searchPlaceholder;
      }

      return _extends(_extends(_extends({}, transferLocale), oldLocale), _this.props.locale);
    };

    _this.moveTo = function (direction) {
      var _this$props = _this.props,
          _this$props$targetKey = _this$props.targetKeys,
          targetKeys = _this$props$targetKey === void 0 ? [] : _this$props$targetKey,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
          onChange = _this$props.onChange;
      var _this$state = _this.state,
          sourceSelectedKeys = _this$state.sourceSelectedKeys,
          targetSelectedKeys = _this$state.targetSelectedKeys;
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys; // filter the disabled options

      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      }); // move items to target box

      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return newMoveKeys.indexOf(targetKey) === -1;
      }); // empty checked keys

      var oppositeDirection = direction === 'right' ? 'left' : 'right';

      _this.setState(_defineProperty({}, _this.getSelectedKeysName(oppositeDirection), []));

      _this.handleSelectChange(oppositeDirection, []);

      if (onChange) {
        onChange(newTargetKeys, direction, newMoveKeys);
      }
    };

    _this.moveToLeft = function () {
      return _this.moveTo('left');
    };

    _this.moveToRight = function () {
      return _this.moveTo('right');
    };

    _this.onItemSelectAll = function (direction, selectedKeys, checkAll) {
      var originalSelectedKeys = _this.state[_this.getSelectedKeysName(direction)] || [];
      var mergedCheckedKeys = [];

      if (checkAll) {
        // Merge current keys with origin key
        mergedCheckedKeys = Array.from(new Set([].concat(_toConsumableArray(originalSelectedKeys), _toConsumableArray(selectedKeys))));
      } else {
        // Remove current keys from origin keys
        mergedCheckedKeys = originalSelectedKeys.filter(function (key) {
          return selectedKeys.indexOf(key) === -1;
        });
      }

      _this.handleSelectChange(direction, mergedCheckedKeys);

      if (!_this.props.selectedKeys) {
        _this.setState(_defineProperty({}, _this.getSelectedKeysName(direction), mergedCheckedKeys));
      }
    };

    _this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
      (0, _warning["default"])(false, 'Transfer', '`handleSelectAll` will be removed, please use `onSelectAll` instead.');

      _this.onItemSelectAll(direction, filteredDataSource.map(function (_ref) {
        var key = _ref.key;
        return key;
      }), !checkAll);
    }; // [Legacy] Old prop `body` pass origin check as arg. It's confusing.
    // TODO: Remove this in next version.


    _this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
      return _this.handleSelectAll('left', filteredDataSource, !checkAll);
    };

    _this.handleRightSelectAll = function (filteredDataSource, checkAll) {
      return _this.handleSelectAll('right', filteredDataSource, !checkAll);
    };

    _this.onLeftItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('left', selectedKeys, checkAll);
    };

    _this.onRightItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('right', selectedKeys, checkAll);
    };

    _this.handleFilter = function (direction, e) {
      var _this$props2 = _this.props,
          onSearchChange = _this$props2.onSearchChange,
          onSearch = _this$props2.onSearch;
      var value = e.target.value;

      if (onSearchChange) {
        (0, _warning["default"])(false, 'Transfer', '`onSearchChange` is deprecated. Please use `onSearch` instead.');
        onSearchChange(direction, e);
      }

      if (onSearch) {
        onSearch(direction, value);
      }
    };

    _this.handleLeftFilter = function (e) {
      return _this.handleFilter('left', e);
    };

    _this.handleRightFilter = function (e) {
      return _this.handleFilter('right', e);
    };

    _this.handleClear = function (direction) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(direction, '');
      }
    };

    _this.handleLeftClear = function () {
      return _this.handleClear('left');
    };

    _this.handleRightClear = function () {
      return _this.handleClear('right');
    };

    _this.onItemSelect = function (direction, selectedKey, checked) {
      var _this$state2 = _this.state,
          sourceSelectedKeys = _this$state2.sourceSelectedKeys,
          targetSelectedKeys = _this$state2.targetSelectedKeys;
      var holder = direction === 'left' ? _toConsumableArray(sourceSelectedKeys) : _toConsumableArray(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);

      if (index > -1) {
        holder.splice(index, 1);
      }

      if (checked) {
        holder.push(selectedKey);
      }

      _this.handleSelectChange(direction, holder);

      if (!_this.props.selectedKeys) {
        _this.setState(_defineProperty({}, _this.getSelectedKeysName(direction), holder));
      }
    };

    _this.handleSelect = function (direction, selectedItem, checked) {
      (0, _warning["default"])(false, 'Transfer', '`handleSelect` will be removed, please use `onSelect` instead.');

      _this.onItemSelect(direction, selectedItem.key, checked);
    };

    _this.handleLeftSelect = function (selectedItem, checked) {
      return _this.handleSelect('left', selectedItem, checked);
    };

    _this.handleRightSelect = function (selectedItem, checked) {
      return _this.handleSelect('right', selectedItem, checked);
    };

    _this.onLeftItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('left', selectedKey, checked);
    };

    _this.onRightItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('right', selectedKey, checked);
    };

    _this.handleScroll = function (direction, e) {
      var onScroll = _this.props.onScroll;

      if (onScroll) {
        onScroll(direction, e);
      }
    };

    _this.handleLeftScroll = function (e) {
      return _this.handleScroll('left', e);
    };

    _this.handleRightScroll = function (e) {
      return _this.handleScroll('right', e);
    };

    _this.handleListStyle = function (listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }

      return listStyle;
    };

    _this.renderTransfer = function (transferLocale) {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref2) {
        var _classNames;

        var getPrefixCls = _ref2.getPrefixCls,
            renderEmpty = _ref2.renderEmpty;
        var _this$props3 = _this.props,
            customizePrefixCls = _this$props3.prefixCls,
            className = _this$props3.className,
            disabled = _this$props3.disabled,
            _this$props3$operatio = _this$props3.operations,
            operations = _this$props3$operatio === void 0 ? [] : _this$props3$operatio,
            showSearch = _this$props3.showSearch,
            body = _this$props3.body,
            footer = _this$props3.footer,
            style = _this$props3.style,
            listStyle = _this$props3.listStyle,
            operationStyle = _this$props3.operationStyle,
            filterOption = _this$props3.filterOption,
            render = _this$props3.render,
            lazy = _this$props3.lazy,
            children = _this$props3.children,
            showSelectAll = _this$props3.showSelectAll;
        var prefixCls = getPrefixCls('transfer', customizePrefixCls);

        var locale = _this.getLocale(transferLocale, renderEmpty);

        var _this$state3 = _this.state,
            sourceSelectedKeys = _this$state3.sourceSelectedKeys,
            targetSelectedKeys = _this$state3.targetSelectedKeys;

        var _this$separateDataSou = _this.separateDataSource(),
            leftDataSource = _this$separateDataSou.leftDataSource,
            rightDataSource = _this$separateDataSou.rightDataSource;

        var leftActive = targetSelectedKeys.length > 0;
        var rightActive = sourceSelectedKeys.length > 0;
        var cls = (0, _classnames["default"])(className, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-customize-list"), !!children), _classNames));

        var titles = _this.getTitles(locale);

        return /*#__PURE__*/React.createElement("div", {
          className: cls,
          style: style
        }, /*#__PURE__*/React.createElement(_list["default"], _extends({
          prefixCls: "".concat(prefixCls, "-list"),
          titleText: titles[0],
          dataSource: leftDataSource,
          filterOption: filterOption,
          style: _this.handleListStyle(listStyle, 'left'),
          checkedKeys: sourceSelectedKeys,
          handleFilter: _this.handleLeftFilter,
          handleClear: _this.handleLeftClear,
          handleSelect: _this.handleLeftSelect,
          handleSelectAll: _this.handleLeftSelectAll,
          onItemSelect: _this.onLeftItemSelect,
          onItemSelectAll: _this.onLeftItemSelectAll,
          render: render,
          showSearch: showSearch,
          body: body,
          renderList: children,
          footer: footer,
          lazy: lazy,
          onScroll: _this.handleLeftScroll,
          disabled: disabled,
          direction: "left",
          showSelectAll: showSelectAll
        }, locale)), /*#__PURE__*/React.createElement(_operation["default"], {
          className: "".concat(prefixCls, "-operation"),
          rightActive: rightActive,
          rightArrowText: operations[0],
          moveToRight: _this.moveToRight,
          leftActive: leftActive,
          leftArrowText: operations[1],
          moveToLeft: _this.moveToLeft,
          style: operationStyle,
          disabled: disabled
        }), /*#__PURE__*/React.createElement(_list["default"], _extends({
          prefixCls: "".concat(prefixCls, "-list"),
          titleText: titles[1],
          dataSource: rightDataSource,
          filterOption: filterOption,
          style: _this.handleListStyle(listStyle, 'right'),
          checkedKeys: targetSelectedKeys,
          handleFilter: _this.handleRightFilter,
          handleClear: _this.handleRightClear,
          handleSelect: _this.handleRightSelect,
          handleSelectAll: _this.handleRightSelectAll,
          onItemSelect: _this.onRightItemSelect,
          onItemSelectAll: _this.onRightItemSelectAll,
          render: render,
          showSearch: showSearch,
          body: body,
          renderList: children,
          footer: footer,
          lazy: lazy,
          onScroll: _this.handleRightScroll,
          disabled: disabled,
          direction: "right",
          showSelectAll: showSelectAll
        }, locale)));
      });
    };

    (0, _warning["default"])(!('notFoundContent' in props || 'searchPlaceholder' in props), 'Transfer', '`notFoundContent` and `searchPlaceholder` will be removed, ' + 'please use `locale` instead.');
    (0, _warning["default"])(!('body' in props), 'Transfer', '`body` is internal usage and will bre removed, please use `children` instead.');
    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys;
    _this.state = {
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }

  _createClass(Transfer, [{
    key: "getSelectedKeysName",
    // eslint-disable-next-line
    value: function getSelectedKeysName(direction) {
      return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
    }
  }, {
    key: "getTitles",
    value: function getTitles(transferLocale) {
      var props = this.props;

      if (props.titles) {
        return props.titles;
      }

      return transferLocale.titles;
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(direction, holder) {
      var _this$state4 = this.state,
          sourceSelectedKeys = _this$state4.sourceSelectedKeys,
          targetSelectedKeys = _this$state4.targetSelectedKeys;
      var onSelectChange = this.props.onSelectChange;

      if (!onSelectChange) {
        return;
      }

      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: "separateDataSource",
    value: function separateDataSource() {
      var _this$props4 = this.props,
          dataSource = _this$props4.dataSource,
          rowKey = _this$props4.rowKey,
          _this$props4$targetKe = _this$props4.targetKeys,
          targetKeys = _this$props4$targetKe === void 0 ? [] : _this$props4$targetKe;
      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record.key = rowKey(record);
        } // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource


        var indexOfKey = targetKeys.indexOf(record.key);

        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });
      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
        componentName: "Transfer",
        defaultLocale: _default2["default"].Transfer
      }, this.renderTransfer);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.selectedKeys) {
        var targetKeys = nextProps.targetKeys || [];
        return {
          sourceSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return !targetKeys.includes(key);
          }),
          targetSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return targetKeys.includes(key);
          })
        };
      }

      return null;
    }
  }]);

  return Transfer;
}(React.Component); // For high-level customized Transfer @dqaria


Transfer.List = _list["default"];
Transfer.Operation = _operation["default"];
Transfer.Search = _search["default"];
Transfer.defaultProps = {
  dataSource: [],
  locale: {},
  showSearch: false,
  listStyle: function listStyle() {}
};
Transfer.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  dataSource: PropTypes.array,
  render: PropTypes.func,
  targetKeys: PropTypes.array,
  onChange: PropTypes.func,
  height: PropTypes.number,
  style: PropTypes.object,
  listStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  operationStyle: PropTypes.object,
  className: PropTypes.string,
  titles: PropTypes.array,
  operations: PropTypes.array,
  showSearch: PropTypes.bool,
  filterOption: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  notFoundContent: PropTypes.node,
  locale: PropTypes.object,
  body: PropTypes.func,
  footer: PropTypes.func,
  rowKey: PropTypes.func,
  lazy: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};
(0, _reactLifecyclesCompat.polyfill)(Transfer);
var _default = Transfer;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/transfer/list.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/transfer/list.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ReactDOM = _interopRequireWildcard(__webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _PureRenderMixin = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/PureRenderMixin */ "./node_modules/rc-util/lib/PureRenderMixin.js"));

var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../checkbox */ "./node_modules/antd/lib/checkbox/index.js"));

var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ "./node_modules/antd/lib/transfer/search.js"));

var _renderListBody = _interopRequireWildcard(__webpack_require__(/*! ./renderListBody */ "./node_modules/antd/lib/transfer/renderListBody.js"));

var _triggerEvent = _interopRequireDefault(__webpack_require__(/*! ../_util/triggerEvent */ "./node_modules/antd/lib/_util/triggerEvent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaultRender = function defaultRender() {
  return null;
};

function isRenderResultPlainObject(result) {
  return result && ! /*#__PURE__*/React.isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

function renderListNode(renderList, props) {
  var bodyContent = renderList ? renderList(props) : null;
  var customize = !!bodyContent;

  if (!customize) {
    bodyContent = (0, _renderListBody["default"])(props);
  }

  return {
    customize: customize,
    bodyContent: bodyContent
  };
}

var TransferList = /*#__PURE__*/function (_React$Component) {
  _inherits(TransferList, _React$Component);

  var _super = _createSuper(TransferList);

  function TransferList(props) {
    var _this;

    _classCallCheck(this, TransferList);

    _this = _super.call(this, props);

    _this.handleFilter = function (e) {
      var handleFilter = _this.props.handleFilter;
      var filterValue = e.target.value;

      _this.setState({
        filterValue: filterValue
      });

      handleFilter(e);

      if (!filterValue) {
        return;
      } // Manually trigger scroll event for lazy search bug
      // https://github.com/ant-design/ant-design/issues/5631


      _this.triggerScrollTimer = window.setTimeout(function () {
        var transferNode = ReactDOM.findDOMNode(_assertThisInitialized(_this));
        var listNode = transferNode.querySelectorAll('.ant-transfer-list-content')[0];

        if (listNode) {
          (0, _triggerEvent["default"])(listNode, 'scroll');
        }
      }, 0);
    };

    _this.handleClear = function () {
      var handleClear = _this.props.handleClear;

      _this.setState({
        filterValue: ''
      });

      handleClear();
    };

    _this.matchFilter = function (text, item) {
      var filterValue = _this.state.filterValue;
      var filterOption = _this.props.filterOption;

      if (filterOption) {
        return filterOption(filterValue, item);
      }

      return text.indexOf(filterValue) >= 0;
    };

    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
          render = _this$props$render === void 0 ? defaultRender : _this$props$render;
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };

    _this.state = {
      filterValue: ''
    };
    return _this;
  }

  _createClass(TransferList, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _PureRenderMixin["default"].shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(filteredItems) {
      var checkedKeys = this.props.checkedKeys;

      if (checkedKeys.length === 0) {
        return 'none';
      }

      if (filteredItems.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }

      return 'part';
    }
  }, {
    key: "getFilteredItems",
    value: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;

      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItem(item);

        var renderedText = renderedItem.renderedText; // Filter skip

        if (filterValue && filterValue.trim() && !_this2.matchFilter(renderedText, item)) {
          return null;
        }

        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    }
  }, {
    key: "getListBody",
    value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/React.createElement(_search["default"], {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      })) : null;
      var listBody = bodyDom;

      if (!listBody) {
        var bodyNode;

        var _renderListNode = renderListNode(renderList, _extends(_extends({}, (0, _omit["default"])(this.props, _renderListBody.OmitProps)), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        })),
            bodyContent = _renderListNode.bodyContent,
            customize = _renderListNode.customize; // We should wrap customize list body in a classNamed div to use flex layout.


        if (customize) {
          bodyNode = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-body-customize-wrapper")
          }, bodyContent);
        } else {
          bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-body-not-found")
          }, notFoundContent);
        }

        listBody = /*#__PURE__*/React.createElement("div", {
          className: (0, _classnames["default"])(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
        }, search, bodyNode);
      }

      return listBody;
    }
  }, {
    key: "getCheckBox",
    value: function getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled) {
      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = showSelectAll !== false && /*#__PURE__*/React.createElement(_checkbox["default"], {
        disabled: disabled,
        checked: checkedAll,
        indeterminate: checkStatus === 'part',
        onChange: function onChange() {
          // Only select enabled items
          onItemSelectAll(filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref) {
            var key = _ref.key;
            return key;
          }), !checkedAll);
        }
      });
      return checkAllCheckbox;
    }
  }, {
    key: "render",
    value: function render() {
      var filterValue = this.state.filterValue;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          dataSource = _this$props.dataSource,
          titleText = _this$props.titleText,
          checkedKeys = _this$props.checkedKeys,
          disabled = _this$props.disabled,
          body = _this$props.body,
          footer = _this$props.footer,
          showSearch = _this$props.showSearch,
          style = _this$props.style,
          searchPlaceholder = _this$props.searchPlaceholder,
          notFoundContent = _this$props.notFoundContent,
          itemUnit = _this$props.itemUnit,
          itemsUnit = _this$props.itemsUnit,
          renderList = _this$props.renderList,
          onItemSelectAll = _this$props.onItemSelectAll,
          showSelectAll = _this$props.showSelectAll; // Custom Layout

      var footerDom = footer && footer(this.props);
      var bodyDom = body && body(this.props);
      var listCls = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-with-footer"), !!footerDom)); // ====================== Get filtered, checked item list ======================

      var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
          filteredItems = _this$getFilteredItem.filteredItems,
          filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


      var unit = dataSource.length > 1 ? itemsUnit : itemUnit;
      var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled); // ================================ List Footer ================================

      var listFooter = footerDom ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footerDom) : null;
      var checkAllCheckbox = this.getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled); // ================================== Render ===================================

      return /*#__PURE__*/React.createElement("div", {
        className: listCls,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, checkAllCheckbox, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-selected")
      }, /*#__PURE__*/React.createElement("span", null, (checkedKeys.length > 0 ? "".concat(checkedKeys.length, "/") : '') + filteredItems.length, ' ', unit), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-title")
      }, titleText))), listBody, listFooter);
    }
  }]);

  return TransferList;
}(React.Component);

exports["default"] = TransferList;
TransferList.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false,
  lazy: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/transfer/operation.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/transfer/operation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Operation = function Operation(_ref) {
  var disabled = _ref.disabled,
      moveToLeft = _ref.moveToLeft,
      moveToRight = _ref.moveToRight,
      _ref$leftArrowText = _ref.leftArrowText,
      leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
      _ref$rightArrowText = _ref.rightArrowText,
      rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
      leftActive = _ref.leftActive,
      rightActive = _ref.rightActive,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(_button["default"], {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: "right"
  }, rightArrowText), /*#__PURE__*/React.createElement(_button["default"], {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: "left"
  }, leftArrowText));
};

var _default = Operation;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/transfer/renderListBody.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/transfer/renderListBody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OmitProps = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");

var _rcAnimate = _interopRequireDefault(__webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! ../_util/raf */ "./node_modules/antd/lib/_util/raf.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _ListItem = _interopRequireDefault(__webpack_require__(/*! ./ListItem */ "./node_modules/antd/lib/transfer/ListItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OmitProps = (0, _type.tuple)('handleFilter', 'handleSelect', 'handleSelectAll', 'handleClear', 'body', 'checkedKeys');
exports.OmitProps = OmitProps;

var ListBody = /*#__PURE__*/function (_React$Component) {
  _inherits(ListBody, _React$Component);

  var _super = _createSuper(ListBody);

  function ListBody() {
    var _this;

    _classCallCheck(this, ListBody);

    _this = _super.apply(this, arguments);
    _this.state = {
      mounted: false
    };

    _this.onItemSelect = function (item) {
      var _this$props = _this.props,
          onItemSelect = _this$props.onItemSelect,
          selectedKeys = _this$props.selectedKeys;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      onItemSelect(item.key, !checked);
    };

    return _this;
  }

  _createClass(ListBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mountId = (0, _raf["default"])(function () {
        _this2.setState({
          mounted: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          filteredRenderItems = _this$props2.filteredRenderItems,
          lazy = _this$props2.lazy;

      if (prevProps.filteredRenderItems.length !== filteredRenderItems.length && lazy !== false) {
        // TODO: Replace this with ref when react 15 support removed.
        var container = (0, _reactDom.findDOMNode)(this);

        _raf["default"].cancel(this.lazyId);

        this.lazyId = (0, _raf["default"])(function () {
          if (container) {
            var scrollEvent = new Event('scroll', {
              bubbles: true
            });
            container.dispatchEvent(scrollEvent);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _raf["default"].cancel(this.mountId);

      _raf["default"].cancel(this.lazyId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var mounted = this.state.mounted;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          onScroll = _this$props3.onScroll,
          filteredRenderItems = _this$props3.filteredRenderItems,
          lazy = _this$props3.lazy,
          selectedKeys = _this$props3.selectedKeys,
          globalDisabled = _this$props3.disabled;
      return /*#__PURE__*/React.createElement(_rcAnimate["default"], {
        component: "ul",
        componentProps: {
          onScroll: onScroll
        },
        className: "".concat(prefixCls, "-content"),
        transitionName: mounted ? "".concat(prefixCls, "-content-item-highlight") : '',
        transitionLeave: false
      }, filteredRenderItems.map(function (_ref) {
        var renderedEl = _ref.renderedEl,
            renderedText = _ref.renderedText,
            item = _ref.item;
        var disabled = item.disabled;
        var checked = selectedKeys.indexOf(item.key) >= 0;
        return /*#__PURE__*/React.createElement(_ListItem["default"], {
          disabled: globalDisabled || disabled,
          key: item.key,
          item: item,
          lazy: lazy,
          renderedText: renderedText,
          renderedEl: renderedEl,
          checked: checked,
          prefixCls: prefixCls,
          onClick: _this3.onItemSelect
        });
      }));
    }
  }]);

  return ListBody;
}(React.Component);

var ListBodyWrapper = function ListBodyWrapper(props) {
  return /*#__PURE__*/React.createElement(ListBody, props);
};

var _default = ListBodyWrapper;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/transfer/search.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/transfer/search.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _input = _interopRequireDefault(__webpack_require__(/*! ../input */ "./node_modules/antd/lib/input/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.apply(this, arguments);

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }
    };

    _this.handleClear = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          handleClear = _this$props.handleClear,
          disabled = _this$props.disabled;

      if (!disabled && handleClear) {
        handleClear(e);
      }
    };

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          placeholder = _this$props2.placeholder,
          value = _this$props2.value,
          prefixCls = _this$props2.prefixCls,
          disabled = _this$props2.disabled;
      var icon = value && value.length > 0 ? /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "".concat(prefixCls, "-action"),
        onClick: this.handleClear
      }, /*#__PURE__*/React.createElement(_icon["default"], {
        type: "close-circle",
        theme: "filled"
      })) : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-action")
      }, /*#__PURE__*/React.createElement(_icon["default"], {
        type: "search"
      }));
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_input["default"], {
        placeholder: placeholder,
        className: prefixCls,
        value: value,
        onChange: this.handleChange,
        disabled: disabled
      }), icon);
    }
  }]);

  return Search;
}(React.Component);

exports["default"] = Search;
Search.defaultProps = {
  placeholder: ''
};

/***/ }),

/***/ "./node_modules/eventlistener/eventlistener.js":
/*!*****************************************************!*\
  !*** ./node_modules/eventlistener/eventlistener.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root,factory){
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
	function wrap(standard, fallback) {
		return function (el, evtName, listener, useCapture) {
			if (el[standard]) {
				el[standard](evtName, listener, useCapture);
			} else if (el[fallback]) {
				el[fallback]('on' + evtName, listener);
			}
		}
	}

    return {
		add: wrap('addEventListener', 'attachEvent'),
		remove: wrap('removeEventListener', 'detachEvent')
	};
}));

/***/ }),

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

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


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

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


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

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


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

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


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

/***/ "./node_modules/lodash/startCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),

/***/ "./node_modules/lodash/uniqBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/uniqBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "./node_modules/lodash/upperCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/upperCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.upperCase('--foo-bar');
 * // => 'FOO BAR'
 *
 * _.upperCase('fooBar');
 * // => 'FOO BAR'
 *
 * _.upperCase('__foo_bar__');
 * // => 'FOO BAR'
 */
var upperCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toUpperCase();
});

module.exports = upperCase;


/***/ }),

/***/ "./node_modules/rc-color-picker/lib/Alpha.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/Alpha.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function rgbaColor(r, g, b, a) {
  return 'rgba(' + [r, g, b, a / 100].join(',') + ')';
}

var Alpha = function (_React$Component) {
  _inherits(Alpha, _React$Component);

  function Alpha(props) {
    _classCallCheck(this, Alpha);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onMouseDown = function (e) {
      var x = e.clientX;
      var y = e.clientY;

      _this.pointMoveTo({
        x: x,
        y: y
      });

      _this.dragListener = (0, _addEventListener2["default"])(window, 'mousemove', _this.onDrag);
      _this.dragUpListener = (0, _addEventListener2["default"])(window, 'mouseup', _this.onDragEnd);
    };

    _this.onDrag = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
    };

    _this.onDragEnd = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
      _this.removeListeners();
    };

    _this.getBackground = function () {
      var _this$props$color = _this.props.color,
          red = _this$props$color.red,
          green = _this$props$color.green,
          blue = _this$props$color.blue;

      var opacityGradient = 'linear-gradient(to right, ' + rgbaColor(red, green, blue, 0) + ' , ' + rgbaColor(red, green, blue, 100) + ')'; // eslint-disable-line max-len
      return opacityGradient;
    };

    _this.getPrefixCls = function () {
      return _this.props.rootPrefixCls + '-alpha';
    };

    _this.pointMoveTo = function (coords) {
      var rect = (0, _reactDom.findDOMNode)(_this).getBoundingClientRect();
      var width = rect.width;
      var left = coords.x - rect.left;

      left = Math.max(0, left);
      left = Math.min(left, width);

      var alpha = Math.round(left / width * 100);

      _this.props.onChange(alpha);
    };

    _this.removeListeners = function () {
      if (_this.dragListener) {
        _this.dragListener.remove();
        _this.dragListener = null;
      }
      if (_this.dragUpListener) {
        _this.dragUpListener.remove();
        _this.dragUpListener = null;
      }
    };

    return _this;
  }

  Alpha.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeListeners();
  };

  Alpha.prototype.render = function render() {
    var prefixCls = this.getPrefixCls();
    return _react2["default"].createElement(
      'div',
      { className: prefixCls },
      _react2["default"].createElement('div', { ref: 'bg', className: prefixCls + '-bg', style: { background: this.getBackground() } }),
      _react2["default"].createElement('span', { style: { left: this.props.alpha + '%' } }),
      _react2["default"].createElement('div', { className: prefixCls + '-handler', onMouseDown: this.onMouseDown })
    );
  };

  return Alpha;
}(_react2["default"].Component);

exports["default"] = Alpha;


Alpha.propTypes = {
  color: _propTypes2["default"].object,
  onChange: _propTypes2["default"].func,
  rootPrefixCls: _propTypes2["default"].string,
  alpha: _propTypes2["default"].number
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/Board.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/Board.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _color = __webpack_require__(/*! ./helpers/color */ "./node_modules/rc-color-picker/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var WIDTH = 200;
var HEIGHT = 150;

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onBoardMouseDown = function (e) {
      var buttons = e.buttons;

      // only work on left click
      // @see https://developer.mozilla.org/en-US/docs/Web/Events/mousedown
      if (buttons !== 1) return;

      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
      _this.removeListeners();
      _this.dragListener = (0, _addEventListener2["default"])(window, 'mousemove', _this.onBoardDrag);
      _this.dragUpListener = (0, _addEventListener2["default"])(window, 'mouseup', _this.onBoardDragEnd);
    };

    _this.onBoardTouchStart = function (e) {
      if (e.touches.length !== 1) {
        return;
      }
      _this.removeTouchListeners();
      var x = e.targetTouches[0].clientX;
      var y = e.targetTouches[0].clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
      _this.touchMoveListener = (0, _addEventListener2["default"])(window, 'touchmove', _this.onBoardTouchMove);
      _this.touchEndListener = (0, _addEventListener2["default"])(window, 'touchend', _this.onBoardTouchEnd);
    };

    _this.onBoardTouchMove = function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

      var x = e.targetTouches[0].clientX;
      var y = e.targetTouches[0].clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
    };

    _this.onBoardTouchEnd = function () {
      _this.removeTouchListeners();
    };

    _this.onBoardDrag = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
    };

    _this.onBoardDragEnd = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
      _this.removeListeners();
    };

    _this.getPrefixCls = function () {
      return _this.props.rootPrefixCls + '-board';
    };

    _this.removeTouchListeners = function () {
      if (_this.touchMoveListener) {
        _this.touchMoveListener.remove();
        _this.touchMoveListener = null;
      }
      if (_this.touchEndListener) {
        _this.touchEndListener.remove();
        _this.touchEndListener = null;
      }
    };

    _this.removeListeners = function () {
      if (_this.dragListener) {
        _this.dragListener.remove();
        _this.dragListener = null;
      }
      if (_this.dragUpListener) {
        _this.dragUpListener.remove();
        _this.dragUpListener = null;
      }
    };

    _this.pointMoveTo = function (pos) {
      var rect = _reactDom2["default"].findDOMNode(_this).getBoundingClientRect();
      var left = pos.x - rect.left;
      var top = pos.y - rect.top;

      var rWidth = rect.width || WIDTH;
      var rHeight = rect.height || HEIGHT;

      left = Math.max(0, left);
      left = Math.min(left, rWidth);
      top = Math.max(0, top);
      top = Math.min(top, rHeight);

      var color = _this.props.color;


      color.saturation = left / rWidth;
      color.brightness = 1 - top / rHeight;

      _this.props.onChange(color);
    };

    return _this;
  }

  Board.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeListeners();
    this.removeTouchListeners();
  };

  /**
   * 移动光标位置到
   * @param  {object} pos X Y 全局坐标点
   */


  Board.prototype.render = function render() {
    var prefixCls = this.getPrefixCls();
    var color = this.props.color;

    var hueHsv = {
      h: color.hue,
      s: 1,
      v: 1
    };

    var hueColor = new _color2["default"](hueHsv).toHexString();

    var xRel = color.saturation * 100;
    var yRel = (1 - color.brightness) * 100;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-hsv', style: { backgroundColor: hueColor } },
        _react2["default"].createElement('div', { className: prefixCls + '-value' }),
        _react2["default"].createElement('div', { className: prefixCls + '-saturation' })
      ),
      _react2["default"].createElement('span', { style: { left: xRel + '%', top: yRel + '%' } }),
      _react2["default"].createElement('div', {
        className: prefixCls + '-handler',
        onMouseDown: this.onBoardMouseDown,
        onTouchStart: this.onBoardTouchStart
      })
    );
  };

  return Board;
}(_react2["default"].Component);

/**
 * hsv
 * h: range(0, 359)
 * s: range(0, 1)
 * v: range(0, 1)
 */

exports["default"] = Board;
Board.propTypes = {
  color: _propTypes2["default"].object,
  onChange: _propTypes2["default"].func,
  rootPrefixCls: _propTypes2["default"].string
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/ColorPicker.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/ColorPicker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTrigger = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _Panel = __webpack_require__(/*! ./Panel */ "./node_modules/rc-color-picker/lib/Panel.js");

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = __webpack_require__(/*! ./placements */ "./node_modules/rc-color-picker/lib/placements.js");

var _placements2 = _interopRequireDefault(_placements);

var _color = __webpack_require__(/*! ./helpers/color */ "./node_modules/rc-color-picker/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function refFn(field, component) {
  this[field] = component;
}

function prevent(e) {
  e.preventDefault();
}

var ColorPicker = function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    var alpha = typeof props.alpha === 'undefined' ? props.defaultAlpha : Math.min(props.alpha, props.defaultAlpha);

    _this.state = {
      color: props.color || props.defaultColor,
      alpha: alpha,
      open: false
    };

    var events = ['onTriggerClick', 'onChange', 'onBlur', 'getPickerElement', 'getRootDOMNode', 'getTriggerDOMNode', 'onVisibleChange', 'onPanelMount', 'setOpen', 'open', 'close', 'focus'];

    events.forEach(function (e) {
      _this[e] = _this[e].bind(_this);
    });

    _this.saveTriggerRef = refFn.bind(_this, 'triggerInstance');
    return _this;
  }

  ColorPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      this.setState({
        color: nextProps.color
      });
    }
    if (nextProps.alpha !== null && nextProps.alpha !== undefined) {
      this.setState({
        alpha: nextProps.alpha
      });
    }
  };

  ColorPicker.prototype.onTriggerClick = function onTriggerClick() {
    this.setState({
      open: !this.state.open
    });
  };

  ColorPicker.prototype.onChange = function onChange(colors) {
    var _this2 = this;

    this.setState(_extends({}, colors), function () {
      _this2.props.onChange(_this2.state);
    });
  };

  ColorPicker.prototype.onBlur = function onBlur() {
    this.setOpen(false);
  };

  ColorPicker.prototype.onVisibleChange = function onVisibleChange(open) {
    this.setOpen(open);
  };

  ColorPicker.prototype.onPanelMount = function onPanelMount(panelDOMRef) {
    if (this.state.open) {
      setTimeout(function () {
        panelDOMRef.focus();
      }, 1);
    }
  };

  ColorPicker.prototype.setOpen = function setOpen(open, callback) {
    var _this3 = this;

    if (this.state.open !== open) {
      this.setState({
        open: open
      }, function () {
        if (typeof callback === 'function') callback();
        var _props = _this3.props,
            onOpen = _props.onOpen,
            onClose = _props.onClose;

        if (_this3.state.open) {
          onOpen(_this3.state);
        } else {
          onClose(_this3.state);
        }
      });
    }
  };

  ColorPicker.prototype.getRootDOMNode = function getRootDOMNode() {
    return (0, _reactDom.findDOMNode)(this);
  };

  ColorPicker.prototype.getTriggerDOMNode = function getTriggerDOMNode() {
    return (0, _reactDom.findDOMNode)(this.triggerInstance);
  };

  ColorPicker.prototype.getPickerElement = function getPickerElement() {
    // const state = this.state;
    return _react2["default"].createElement(_Panel2["default"], {
      onMount: this.onPanelMount,
      defaultColor: this.state.color,
      alpha: this.state.alpha,
      enableAlpha: this.props.enableAlpha,
      prefixCls: this.props.prefixCls + '-panel',
      onChange: this.onChange,
      onBlur: this.onBlur,
      mode: this.props.mode,
      className: this.props.className
    });
  };

  ColorPicker.prototype.open = function open(callback) {
    this.setOpen(true, callback);
  };

  ColorPicker.prototype.close = function close(callback) {
    this.setOpen(false, callback);
  };

  ColorPicker.prototype.focus = function focus() {
    if (!this.state.open) {
      (0, _reactDom.findDOMNode)(this).focus();
    }
  };

  ColorPicker.prototype.render = function render() {
    var props = this.props;
    var state = this.state;
    var classes = [props.prefixCls + '-wrap', props.className];
    if (state.open) {
      classes.push(props.prefixCls + '-open');
    }

    var children = props.children;

    var _RGB = _slicedToArray(new _color2["default"](this.state.color).RGB, 3),
        r = _RGB[0],
        g = _RGB[1],
        b = _RGB[2];

    var RGBA = [r, g, b];

    RGBA.push(this.state.alpha / 100);

    if (children) {
      children = _react2["default"].cloneElement(children, {
        ref: this.saveTriggerRef,
        unselectable: 'unselectable',
        style: {
          backgroundColor: 'rgba(' + RGBA.join(',') + ')'
        },
        onClick: this.onTriggerClick,
        onMouseDown: prevent
      });
    }

    var prefixCls = props.prefixCls,
        placement = props.placement,
        style = props.style,
        getCalendarContainer = props.getCalendarContainer,
        align = props.align,
        animation = props.animation,
        disabled = props.disabled,
        transitionName = props.transitionName;


    return _react2["default"].createElement(
      'div',
      { className: classes.join(' ') },
      _react2["default"].createElement(
        _rcTrigger2["default"],
        {
          popup: this.getPickerElement(),
          popupAlign: align,
          builtinPlacements: _placements2["default"],
          popupPlacement: placement,
          action: disabled ? [] : ['click'],
          destroyPopupOnHide: true,
          getPopupContainer: getCalendarContainer,
          popupStyle: style,
          popupAnimation: animation,
          popupTransitionName: transitionName,
          popupVisible: state.open,
          onPopupVisibleChange: this.onVisibleChange,
          prefixCls: prefixCls
        },
        children
      )
    );
  };

  return ColorPicker;
}(_react2["default"].Component);

exports["default"] = ColorPicker;


ColorPicker.propTypes = {
  defaultColor: _propTypes2["default"].string,
  defaultAlpha: _propTypes2["default"].number,
  // can custom
  alpha: _propTypes2["default"].number,
  children: _propTypes2["default"].node.isRequired,
  className: _propTypes2["default"].string,
  color: _propTypes2["default"].string,
  enableAlpha: _propTypes2["default"].bool,
  mode: _propTypes2["default"].oneOf(['RGB', 'HSL', 'HSB']),
  onChange: _propTypes2["default"].func,
  onClose: _propTypes2["default"].func,
  onOpen: _propTypes2["default"].func,
  placement: _propTypes2["default"].oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  prefixCls: _propTypes2["default"].string.isRequired,
  style: _propTypes2["default"].object
};

ColorPicker.defaultProps = {
  defaultColor: '#F00',
  defaultAlpha: 100,
  onChange: function onChange() {},
  onOpen: function onOpen() {},
  onClose: function onClose() {},

  children: _react2["default"].createElement('span', { className: 'rc-color-picker-trigger' }),
  className: '',
  enableAlpha: true,
  placement: 'topLeft',
  prefixCls: 'rc-color-picker',
  style: {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/Panel.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/Panel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _color = __webpack_require__(/*! ./helpers/color */ "./node_modules/rc-color-picker/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _Board = __webpack_require__(/*! ./Board */ "./node_modules/rc-color-picker/lib/Board.js");

var _Board2 = _interopRequireDefault(_Board);

var _Preview = __webpack_require__(/*! ./Preview */ "./node_modules/rc-color-picker/lib/Preview.js");

var _Preview2 = _interopRequireDefault(_Preview);

var _Ribbon = __webpack_require__(/*! ./Ribbon */ "./node_modules/rc-color-picker/lib/Ribbon.js");

var _Ribbon2 = _interopRequireDefault(_Ribbon);

var _Alpha = __webpack_require__(/*! ./Alpha */ "./node_modules/rc-color-picker/lib/Alpha.js");

var _Alpha2 = _interopRequireDefault(_Alpha);

var _Params = __webpack_require__(/*! ./Params */ "./node_modules/rc-color-picker/lib/Params.js");

var _Params2 = _interopRequireDefault(_Params);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _validationColor = __webpack_require__(/*! ./utils/validationColor */ "./node_modules/rc-color-picker/lib/utils/validationColor.js");

var _validationColor2 = _interopRequireDefault(_validationColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var alpha = typeof props.alpha === 'undefined' ? props.defaultAlpha : Math.min(props.alpha, props.defaultAlpha);

    var color = new _color2["default"](props.color || props.defaultColor);

    _this.state = {
      color: color,
      alpha: alpha
    };
    return _this;
  }

  Panel.prototype.componentDidMount = function componentDidMount() {
    this.props.onMount(this.ref);
  };

  Panel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      var color = new _color2["default"](nextProps.color);
      this.setState({
        color: color
      });
    }
    if (nextProps.alpha !== undefined) {
      this.setState({
        alpha: nextProps.alpha
      });
    }
  };

  /**
   * 响应 alpha 的变更
   * @param  {Number} alpha Range 0~100
   */


  /**
   * color change
   * @param  {Object}  color      tinycolor instance
   * @param  {Boolean} syncParams Sync to <Params />
   */


  Panel.prototype.render = function render() {
    var _cx,
        _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        enableAlpha = _props.enableAlpha;
    var _state = this.state,
        color = _state.color,
        alpha = _state.alpha;


    var wrapClasses = (0, _classnames2["default"])((_cx = {}, _defineProperty(_cx, prefixCls + '-wrap', true), _defineProperty(_cx, prefixCls + '-wrap-has-alpha', enableAlpha), _cx));

    return _react2["default"].createElement(
      'div',
      {
        ref: function ref(_ref) {
          return _this2.ref = _ref;
        },
        className: [prefixCls, this.props.className].join(' '),
        style: this.props.style,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        tabIndex: '0'
      },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-inner' },
        _react2["default"].createElement(_Board2["default"], { rootPrefixCls: prefixCls, color: color, onChange: this.handleChange }),
        _react2["default"].createElement(
          'div',
          { className: wrapClasses },
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-wrap-ribbon' },
            _react2["default"].createElement(_Ribbon2["default"], { rootPrefixCls: prefixCls, color: color, onChange: this.handleChange })
          ),
          enableAlpha && _react2["default"].createElement(
            'div',
            { className: prefixCls + '-wrap-alpha' },
            _react2["default"].createElement(_Alpha2["default"], {
              rootPrefixCls: prefixCls,
              alpha: alpha,
              color: color,
              onChange: this.handleAlphaChange
            })
          ),
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-wrap-preview' },
            _react2["default"].createElement(_Preview2["default"], {
              rootPrefixCls: prefixCls,
              alpha: alpha,
              onChange: this.handleChange,
              onInputClick: this.onSystemColorPickerOpen,
              color: color
            })
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-wrap', style: { height: 40, marginTop: 6 } },
          _react2["default"].createElement(_Params2["default"], {
            rootPrefixCls: prefixCls,
            color: color,
            alpha: alpha,
            onAlphaChange: this.handleAlphaChange,
            onChange: this.handleChange,
            mode: this.props.mode,
            enableAlpha: this.props.enableAlpha
          })
        )
      )
    );
  };

  return Panel;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onSystemColorPickerOpen = function (e) {
    // only work with broswer which support color input
    if (e.target.type === 'color') {
      _this3.systemColorPickerOpen = true;
    }
  };

  this.onFocus = function () {
    if (_this3._blurTimer) {
      clearTimeout(_this3._blurTimer);
      _this3._blurTimer = null;
    } else {
      _this3.props.onFocus();
    }
  };

  this.onBlur = function () {
    if (_this3._blurTimer) {
      clearTimeout(_this3._blurTimer);
    }
    _this3._blurTimer = setTimeout(function () {
      // if is system color picker open, then stop run blur
      if (_this3.systemColorPickerOpen) {
        _this3.systemColorPickerOpen = false;
        return;
      }

      _this3.props.onBlur();
    }, 100);
  };

  this.handleAlphaChange = function (alpha) {
    var color = _this3.state.color;

    color.alpha = alpha;

    _this3.setState({
      alpha: alpha,
      color: color
    });
    _this3.props.onChange({
      color: color.toHexString(),
      alpha: alpha
    });
  };

  this.handleChange = function (color) {
    var alpha = _this3.state.alpha;

    color.alpha = alpha;

    _this3.setState({ color: color });
    _this3.props.onChange({
      color: color.toHexString(),
      alpha: color.alpha
    });
  };
};

exports["default"] = Panel;


Panel.propTypes = {
  alpha: _propTypes2["default"].number,
  className: _propTypes2["default"].string,
  color: _validationColor2["default"], // Hex string
  defaultAlpha: _propTypes2["default"].number,
  defaultColor: _validationColor2["default"], // Hex string
  enableAlpha: _propTypes2["default"].bool,
  mode: _propTypes2["default"].oneOf(['RGB', 'HSL', 'HSB']),
  onBlur: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func,
  onFocus: _propTypes2["default"].func,
  onMount: _propTypes2["default"].func,
  prefixCls: _propTypes2["default"].string,
  style: _propTypes2["default"].object
};

Panel.defaultProps = {
  className: '',
  defaultAlpha: 100,
  defaultColor: '#ff0000',
  enableAlpha: true,
  mode: 'RGB',
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  onMount: noop,
  prefixCls: 'rc-color-picker-panel',
  style: {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/Params.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/Params.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _color = __webpack_require__(/*! ./helpers/color */ "./node_modules/rc-color-picker/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

var _percentage = __webpack_require__(/*! ./helpers/percentage */ "./node_modules/rc-color-picker/lib/helpers/percentage.js");

var _percentage2 = _interopRequireDefault(_percentage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var modesMap = ['RGB', 'HSB'];

var Params = function (_React$Component) {
  _inherits(Params, _React$Component);

  function Params(props) {
    _classCallCheck(this, Params);

    // 管理 input 的状态
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.getChannelInRange = function (value, index) {
      var channelMap = {
        RGB: [[0, 255], [0, 255], [0, 255]],
        HSB: [[0, 359], [0, 100], [0, 100]]
      };
      var mode = _this.state.mode;
      var range = channelMap[mode][index];
      var result = parseInt(value, 10);
      if (isNaN(result)) {
        result = 0;
      }
      result = Math.max(range[0], result);
      result = Math.min(result, range[1]);
      return result;
    };

    _this.getPrefixCls = function () {
      return _this.props.rootPrefixCls + '-params';
    };

    _this.handleHexBlur = function () {
      var hex = _this.state.hex;

      var color = null;

      if (_color2["default"].isValidHex(hex)) {
        color = new _color2["default"](hex);
      }

      if (color !== null) {
        _this.setState({
          color: color,
          hex: hex
        });
        _this.props.onChange(color, false);
      }
    };

    _this.handleHexPress = function (event) {
      var hex = _this.state.hex;
      if (event.nativeEvent.which === 13) {
        var color = null;

        if (_color2["default"].isValidHex(hex)) {
          color = new _color2["default"](hex);
        }

        if (color !== null) {
          _this.setState({
            color: color,
            hex: hex
          });
          _this.props.onChange(color, false);
        }
      }
    };

    _this.handleHexChange = function (event) {
      var hex = event.target.value;

      _this.setState({
        hex: hex
      });
    };

    _this.handleModeChange = function () {
      var mode = _this.state.mode;

      var modeIndex = (modesMap.indexOf(mode) + 1) % modesMap.length;

      mode = modesMap[modeIndex];

      _this.setState({
        mode: mode
      });
    };

    _this.handleAlphaHandler = function (event) {
      var alpha = parseInt(event.target.value, 10);

      if (isNaN(alpha)) {
        alpha = 0;
      }
      alpha = Math.max(0, alpha);
      alpha = Math.min(alpha, 100);

      _this.props.onAlphaChange(alpha);
    };

    _this.updateColorByChanel = function (channel, value) {
      var color = _this.props.color;
      var mode = _this.state.mode;


      if (mode === 'HSB') {
        if (channel === 'H') {
          color.hue = parseInt(value, 10);
        } else if (channel === 'S') {
          color.saturation = parseInt(value, 10) / 100;
        } else if (channel === 'B') {
          color.brightness = parseInt(value, 10) / 100;
        }
      } else {
        if (channel === 'R') {
          color.red = parseInt(value, 10);
        } else if (channel === 'G') {
          color.green = parseInt(value, 10);
        } else if (channel === 'B') {
          color.blue = parseInt(value, 10);
        }
      }

      return color;
    };

    _this.handleColorChannelChange = function (index, event) {
      var value = _this.getChannelInRange(event.target.value, index);
      var mode = _this.state.mode;

      var channel = mode[index];

      var color = _this.updateColorByChanel(channel, value);

      _this.setState({
        hex: color.hex,
        color: color
      }, function () {
        _this.props.onChange(color, false);
      });
    };

    _this.state = {
      mode: props.mode,
      hex: props.color.hex,
      color: props.color // instanceof tinycolor
    };
    return _this;
  }

  Params.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextColor = nextProps.color;


    this.setState({
      color: nextColor,
      hex: nextColor.hex
    });
  };

  Params.prototype.render = function render() {
    var _cx;

    var prefixCls = this.getPrefixCls();

    var enableAlpha = this.props.enableAlpha;
    var _state = this.state,
        mode = _state.mode,
        color = _state.color;

    var colorChannel = color[mode];

    if (mode === 'HSB') {
      colorChannel[0] = parseInt(colorChannel[0], 10);
      colorChannel[1] = (0, _percentage2["default"])(colorChannel[1]);
      colorChannel[2] = (0, _percentage2["default"])(colorChannel[2]);
    }

    var paramsClasses = (0, _classnames2["default"])((_cx = {}, _defineProperty(_cx, prefixCls, true), _defineProperty(_cx, prefixCls + '-has-alpha', enableAlpha), _cx));

    return _react2["default"].createElement(
      'div',
      { className: paramsClasses },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-input' },
        _react2["default"].createElement('input', {
          className: prefixCls + '-hex',
          type: 'text',
          maxLength: '6',
          onKeyPress: this.handleHexPress,
          onBlur: this.handleHexBlur,
          onChange: this.handleHexChange,
          value: this.state.hex.toLowerCase()
        }),
        _react2["default"].createElement('input', {
          type: 'number',
          ref: 'channel_0',
          value: colorChannel[0],
          onChange: this.handleColorChannelChange.bind(null, 0)
        }),
        _react2["default"].createElement('input', {
          type: 'number',
          ref: 'channel_1',
          value: colorChannel[1],
          onChange: this.handleColorChannelChange.bind(null, 1)
        }),
        _react2["default"].createElement('input', {
          type: 'number',
          ref: 'channel_2',
          value: colorChannel[2],
          onChange: this.handleColorChannelChange.bind(null, 2)
        }),
        enableAlpha && _react2["default"].createElement('input', {
          type: 'number',
          value: Math.round(this.props.alpha),
          onChange: this.handleAlphaHandler
        })
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-lable' },
        _react2["default"].createElement(
          'label',
          { className: prefixCls + '-lable-hex' },
          'Hex'
        ),
        _react2["default"].createElement(
          'label',
          { className: prefixCls + '-lable-number', onClick: this.handleModeChange },
          mode[0]
        ),
        _react2["default"].createElement(
          'label',
          { className: prefixCls + '-lable-number', onClick: this.handleModeChange },
          mode[1]
        ),
        _react2["default"].createElement(
          'label',
          { className: prefixCls + '-lable-number', onClick: this.handleModeChange },
          mode[2]
        ),
        enableAlpha && _react2["default"].createElement(
          'label',
          { className: prefixCls + '-lable-alpha' },
          'A'
        )
      )
    );
  };

  return Params;
}(_react2["default"].Component);

exports["default"] = Params;


Params.propTypes = {
  alpha: _propTypes2["default"].number,
  enableAlpha: _propTypes2["default"].bool,
  color: _propTypes2["default"].object.isRequired,
  mode: _propTypes2["default"].oneOf(modesMap),
  onAlphaChange: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func,
  rootPrefixCls: _propTypes2["default"].string
};

Params.defaultProps = {
  mode: modesMap[0],
  enableAlpha: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/Preview.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/Preview.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _color = __webpack_require__(/*! ./helpers/color */ "./node_modules/rc-color-picker/lib/helpers/color.js");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview() {
    var _temp, _this, _ret;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onChange = function (e) {
      var value = e.target.value;
      var color = new _color2["default"](value);
      _this.props.onChange(color);
      e.stopPropagation();
    }, _this.getPrefixCls = function () {
      return _this.props.rootPrefixCls + '-preview';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Preview.prototype.render = function render() {
    var prefixCls = this.getPrefixCls();
    var hex = this.props.color.toHexString();
    return _react2["default"].createElement(
      'div',
      { className: prefixCls },
      _react2["default"].createElement('span', {
        style: {
          backgroundColor: hex,
          opacity: this.props.alpha / 100
        }
      }),
      _react2["default"].createElement('input', {
        type: 'color',
        value: hex,
        onChange: this.onChange,
        onClick: this.props.onInputClick
      })
    );
  };

  return Preview;
}(_react2["default"].Component);

exports["default"] = Preview;


Preview.propTypes = {
  rootPrefixCls: _propTypes2["default"].string,
  color: _propTypes2["default"].object,
  alpha: _propTypes2["default"].number,
  onChange: _propTypes2["default"].func,
  onInputClick: _propTypes2["default"].func
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/Ribbon.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/Ribbon.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Ribbon = function (_React$Component) {
  _inherits(Ribbon, _React$Component);

  function Ribbon(props) {
    _classCallCheck(this, Ribbon);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onMouseDown = function (e) {
      var x = e.clientX;
      var y = e.clientY;

      _this.pointMoveTo({
        x: x,
        y: y
      });

      _this.dragListener = (0, _addEventListener2["default"])(window, 'mousemove', _this.onDrag);
      _this.dragUpListener = (0, _addEventListener2["default"])(window, 'mouseup', _this.onDragEnd);
    };

    _this.onDrag = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
    };

    _this.onDragEnd = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      _this.pointMoveTo({
        x: x,
        y: y
      });
      _this.removeListeners();
    };

    _this.getPrefixCls = function () {
      return _this.props.rootPrefixCls + '-ribbon';
    };

    _this.pointMoveTo = function (coords) {
      var rect = _reactDom2["default"].findDOMNode(_this).getBoundingClientRect();
      var width = rect.width;
      var left = coords.x - rect.left;
      left = Math.max(0, left);
      left = Math.min(left, width);

      var huePercent = left / width;
      var hue = huePercent * 360;

      var color = _this.props.color;


      color.hue = hue;

      _this.props.onChange(color);
    };

    _this.removeListeners = function () {
      if (_this.dragListener) {
        _this.dragListener.remove();
        _this.dragListener = null;
      }
      if (_this.dragUpListener) {
        _this.dragUpListener.remove();
        _this.dragUpListener = null;
      }
    };

    return _this;
  }

  Ribbon.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeListeners();
  };

  Ribbon.prototype.render = function render() {
    var prefixCls = this.getPrefixCls();
    var hue = this.props.color.hue;
    var per = hue / 360 * 100;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls },
      _react2["default"].createElement('span', { ref: 'point', style: { left: per + '%' } }),
      _react2["default"].createElement('div', { className: prefixCls + '-handler', onMouseDown: this.onMouseDown })
    );
  };

  return Ribbon;
}(_react2["default"].Component);

exports["default"] = Ribbon;


Ribbon.propTypes = {
  rootPrefixCls: _propTypes2["default"].string,
  color: _propTypes2["default"].object,
  onChange: _propTypes2["default"].func
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/helpers/color.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/helpers/color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tinycolor = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = function () {
  function Color(input) {
    var _this = this;

    _classCallCheck(this, Color);

    this.initRgb = function () {
      var _color$toRgb = _this.color.toRgb(),
          r = _color$toRgb.r,
          g = _color$toRgb.g,
          b = _color$toRgb.b;

      _this.redValue = r;
      _this.greenValue = g;
      _this.blueValue = b;
    };

    this.initHsb = function () {
      var _color$toHsv = _this.color.toHsv(),
          h = _color$toHsv.h,
          s = _color$toHsv.s,
          v = _color$toHsv.v;

      _this.hueValue = h;
      _this.saturationValue = s;
      _this.brightnessValue = v;
    };

    this.toHexString = function () {
      return _this.color.toHexString();
    };

    this.toRgbString = function () {
      return _this.color.toRgbString();
    };

    this.color = (0, _tinycolor2["default"])(input);

    this.initRgb();
    this.initHsb();

    var initAlpha = input && input.alpha || this.color.toRgb().a;
    this.alphaValue = Math.min(1, initAlpha) * 100;
  }

  Color.isValidHex = function isValidHex(hex) {
    return (0, _tinycolor2["default"])(hex).isValid();
  };

  _createClass(Color, [{
    key: 'hex',
    get: function get() {
      return this.color.toHex();
    }

    // 色调

  }, {
    key: 'hue',
    set: function set(value) {
      this.color = (0, _tinycolor2["default"])({
        h: value,
        s: this.saturation,
        v: this.brightness
      });

      this.initRgb();
      this.hueValue = value;
    },
    get: function get() {
      return this.hueValue;
    }

    // 饱和度

  }, {
    key: 'saturation',
    set: function set(value) {
      this.color = (0, _tinycolor2["default"])({
        h: this.hue,
        s: value,
        v: this.brightness
      });

      this.initRgb();
      this.saturationValue = value;
    },
    get: function get() {
      return this.saturationValue;
    }

    // 亮度

  }, {
    key: 'lightness',
    set: function set(value) {
      this.color = (0, _tinycolor2["default"])({
        h: this.hue,
        s: this.saturation,
        l: value
      });

      this.initRgb();
      this.lightnessValue = value;
    },
    get: function get() {
      return this.lightnessValue;
    }
  }, {
    key: 'brightness',
    set: function set(value) {
      this.color = (0, _tinycolor2["default"])({
        h: this.hue,
        s: this.saturation,
        v: value
      });

      this.initRgb();
      this.brightnessValue = value;
    },
    get: function get() {
      return this.brightnessValue;
    }

    // red

  }, {
    key: 'red',
    set: function set(value) {
      var rgb = this.color.toRgb();
      this.color = (0, _tinycolor2["default"])(_extends({}, rgb, {
        r: value
      }));

      this.initHsb();
      this.redValue = value;
    },
    get: function get() {
      return this.redValue;
    }

    // green

  }, {
    key: 'green',
    set: function set(value) {
      var rgb = this.color.toRgb();
      this.color = (0, _tinycolor2["default"])(_extends({}, rgb, {
        g: value
      }));

      this.initHsb();
      this.greenValue = value;
    },
    get: function get() {
      return this.greenValue;
    }

    // blue

  }, {
    key: 'blue',
    set: function set(value) {
      var rgb = this.color.toRgb();
      this.color = (0, _tinycolor2["default"])(_extends({}, rgb, {
        b: value
      }));

      this.initHsb();
      this.blueValue = value;
    },
    get: function get() {
      return this.blueValue;
    }

    // alpha

  }, {
    key: 'alpha',
    set: function set(value) {
      this.color.setAlpha(value / 100);
    },
    get: function get() {
      return this.color.getAlpha() * 100;
    }
  }, {
    key: 'RGB',
    get: function get() {
      return [this.red, this.green, this.blue];
    }
  }, {
    key: 'HSB',
    get: function get() {
      return [this.hue, this.saturation, this.brightness];
    }
  }]);

  return Color;
}();

exports["default"] = Color;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/helpers/percentage.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/helpers/percentage.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = percentage;
function percentage(input) {
  return Math.round(input * 100);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./ColorPicker */ "./node_modules/rc-color-picker/lib/ColorPicker.js");
module.exports.Panel = __webpack_require__(/*! ./Panel */ "./node_modules/rc-color-picker/lib/Panel.js");

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/placements.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/placements.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -5],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -5],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 5],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 5],
    targetOffset: targetOffset
  }
};

exports["default"] = placements;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-color-picker/lib/utils/validationColor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rc-color-picker/lib/utils/validationColor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function validationColor(props, propName, componentName) {
  if (props[propName] && !/^#[0-9a-fA-F]{3,6}$/.test(props[propName])) {
    return new Error(componentName + ".props." + propName + " Validation failed!");
  }
};

/***/ }),

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-trigger/es/LazyRenderBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var LazyRenderBox = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LazyRenderBox, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.hiddenClassName || nextProps.visible;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hiddenClassName = _props.hiddenClassName,
          visible = _props.visible,
          props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['hiddenClassName', 'visible']);

      if (hiddenClassName || react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.count(props.children) > 1) {
        if (!visible && hiddenClassName) {
          props.className += ' ' + hiddenClassName;
        }
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', props);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(props.children);
    }
  }]);

  return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

LazyRenderBox.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/PopupInner.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");














var Popup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Popup, _Component);

  function Popup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _initialiseProps.call(_this);

    _this.savePopupRef = _utils__WEBPACK_IMPORTED_MODULE_12__["saveRef"].bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils__WEBPACK_IMPORTED_MODULE_12__["saveRef"].bind(_this, 'alignInstance');
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rootNode = this.getPopupDomNode();
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      return react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this.popupInstance);
    }
  }, {
    key: 'getMaskTransitionName',
    value: function getMaskTransitionName() {
      var props = this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;
      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }
      return transitionName;
    }
  }, {
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'getClassName',
    value: function getClassName(currentAlignClassName) {
      return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
    }
  }, {
    key: 'getPopupElement',
    value: function getPopupElement() {
      var savePopupRef = this.savePopupRef,
          props = this.props;
      var align = props.align,
          style = props.style,
          visible = props.visible,
          prefixCls = props.prefixCls,
          destroyPopupOnHide = props.destroyPopupOnHide;

      var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
      var hiddenClassName = prefixCls + '-hidden';
      if (!visible) {
        this.currentAlignClassName = null;
      }
      var newStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, this.getZIndexStyle());
      var popupInnerProps = {
        className: className,
        prefixCls: prefixCls,
        ref: savePopupRef,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: newStyle
      };
      if (destroyPopupOnHide) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"],
          {
            component: '',
            exclusive: true,
            transitionAppear: true,
            transitionName: this.getTransitionName()
          },
          visible ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            rc_align__WEBPACK_IMPORTED_MODULE_8__["default"],
            {
              target: this.getTarget,
              key: 'popup',
              ref: this.saveAlignRef,
              monitorWindowResize: true,
              align: align,
              onAlign: this.onAlign
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _PopupInner__WEBPACK_IMPORTED_MODULE_10__["default"],
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
                visible: true
              }, popupInnerProps),
              props.children
            )
          ) : null
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName(),
          showProp: 'xVisible'
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          rc_align__WEBPACK_IMPORTED_MODULE_8__["default"],
          {
            target: this.getTarget,
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            xVisible: visible,
            childrenProps: { visible: 'xVisible' },
            disabled: !visible,
            align: align,
            onAlign: this.onAlign
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _PopupInner__WEBPACK_IMPORTED_MODULE_10__["default"],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              hiddenClassName: hiddenClassName
            }, popupInnerProps),
            props.children
          )
        )
      );
    }
  }, {
    key: 'getZIndexStyle',
    value: function getZIndexStyle() {
      var style = {};
      var props = this.props;
      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }
      return style;
    }
  }, {
    key: 'getMaskElement',
    value: function getMaskElement() {
      var props = this.props;
      var maskElement = void 0;
      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LazyRenderBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
          style: this.getZIndexStyle(),
          key: 'mask',
          className: props.prefixCls + '-mask',
          hiddenClassName: props.prefixCls + '-mask-hidden',
          visible: props.visible
        });
        if (maskTransition) {
          maskElement = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"],
            {
              key: 'mask',
              showProp: 'visible',
              transitionAppear: true,
              component: '',
              transitionName: maskTransition
            },
            maskElement
          );
        }
      }
      return maskElement;
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        null,
        this.getMaskElement(),
        this.getPopupElement()
      );
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Popup.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  getClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  getRootDomNode: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  align: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this2.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this2.currentAlignClassName !== currentAlignClassName) {
      _this2.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this2.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.getTarget = function () {
    return _this2.props.getRootDomNode();
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/PopupInner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");








var PopupInner = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(PopupInner, _Component);

  function PopupInner() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PopupInner);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (PopupInner.__proto__ || Object.getPrototypeOf(PopupInner)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PopupInner, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = props.className;
      if (!props.visible) {
        className += ' ' + props.hiddenClassName;
      }
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        {
          className: className,
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave,
          style: props.style
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _LazyRenderBox__WEBPACK_IMPORTED_MODULE_6__["default"],
          { className: props.prefixCls + '-content', visible: props.visible },
          props.children
        )
      );
    }
  }]);

  return PopupInner;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

PopupInner.propTypes = {
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
};


/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js");
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");
/* harmony import */ var rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");
/* harmony import */ var rc_util_lib_getContainerRenderMixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/lib/getContainerRenderMixin */ "./node_modules/rc-util/lib/getContainerRenderMixin.js");
/* harmony import */ var rc_util_lib_getContainerRenderMixin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_util_lib_getContainerRenderMixin__WEBPACK_IMPORTED_MODULE_9__);











function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var isMobile = typeof navigator !== 'undefined' && !!navigator.userAgent.match(/(Android|iPhone|iPad|iPod|iOS|UCWEB)/i);

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

var Trigger = create_react_class__WEBPACK_IMPORTED_MODULE_4___default()({
  displayName: 'Trigger',
  propTypes: {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
    action: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    showAction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
    hideAction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
    getPopupClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
    onPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    afterPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    popup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired,
    popupStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    popupPlacement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    builtinPlacements: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    popupTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]),
    popupAnimation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
    mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    zIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    focusDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    blurDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    getDocument: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    mask: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maskClosable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    onPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    popupAlign: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    popupVisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maskTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]),
    maskAnimation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  },

  mixins: [rc_util_lib_getContainerRenderMixin__WEBPACK_IMPORTED_MODULE_9___default()({
    autoMount: false,

    isVisible: function isVisible(instance) {
      return instance.state.popupVisible;
    },
    getContainer: function getContainer(instance) {
      var props = instance.props;

      var popupContainer = document.createElement('div');
                  popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(instance)) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      return popupContainer;
    }
  })],

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      getDocument: returnDocument,
      onPopupVisibleChange: noop,
      afterPopupVisibleChange: noop,
      onPopupAlign: noop,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      mask: false,
      maskClosable: true,
      action: [],
      showAction: [],
      hideAction: []
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    return {
      popupVisible: popupVisible
    };
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    this.renderComponent(null, function () {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    });

                    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && this.isClickToHide()) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6___default()(currentDocument, 'mousedown', this.onDocumentClick);
      }
                              if (!this.touchOutsideHandler && isMobile) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6___default()(currentDocument, 'click', this.onDocumentClick);
      }
      return;
    }

    this.clearOutsideHandler();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  },
  onMouseEnter: function onMouseEnter(e) {
    this.fireEvents('onMouseEnter', e);
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  },
  onMouseLeave: function onMouseLeave(e) {
    this.fireEvents('onMouseLeave', e);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onPopupMouseEnter: function onPopupMouseEnter() {
    this.clearDelayTimer();
  },
  onPopupMouseLeave: function onPopupMouseLeave(e) {
            if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_5__["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onFocus: function onFocus(e) {
    this.fireEvents('onFocus', e);
        this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  },
  onMouseDown: function onMouseDown(e) {
    this.fireEvents('onMouseDown', e);
    this.preClickTime = Date.now();
  },
  onTouchStart: function onTouchStart(e) {
    this.fireEvents('onTouchStart', e);
    this.preTouchTime = Date.now();
  },
  onBlur: function onBlur(e) {
    this.fireEvents('onBlur', e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  },
  onClick: function onClick(event) {
    this.fireEvents('onClick', event);
        if (this.focusTime) {
      var preTime = void 0;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !this.state.popupVisible;
    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
      this.setPopupVisible(!this.state.popupVisible);
    }
  },
  onDocumentClick: function onDocumentClick(event) {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this);
    var popupNode = this.getPopupDomNode();
    if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_5__["default"])(root, target) && !Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_5__["default"])(popupNode, target)) {
      this.close();
    }
  },
  getPopupDomNode: function getPopupDomNode() {
        if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  },
  getRootDomNode: function getRootDomNode() {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this);
  },
  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getPopupClassNameFromAlign"])(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  },
  getPopupAlign: function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  },
  getComponent: function getComponent() {
    var props = this.props,
        state = this.state;

    var mouseProps = {};
    if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _Popup__WEBPACK_IMPORTED_MODULE_7__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        prefixCls: props.prefixCls,
        destroyPopupOnHide: props.destroyPopupOnHide,
        visible: state.popupVisible,
        className: props.popupClassName,
        action: props.action,
        align: this.getPopupAlign(),
        onAlign: props.onPopupAlign,
        animation: props.popupAnimation,
        getClassNameFromAlign: this.getPopupClassNameFromAlign
      }, mouseProps, {
        getRootDomNode: this.getRootDomNode,
        style: props.popupStyle,
        mask: props.mask,
        zIndex: props.zIndex,
        transitionName: props.popupTransitionName,
        maskAnimation: props.maskAnimation,
        maskTransitionName: props.maskTransitionName
      }),
      typeof props.popup === 'function' ? props.popup() : props.popup
    );
  },
  setPopupVisible: function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  },
  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible);
        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  },
  clearDelayTimer: function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  },
  clearOutsideHandler: function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  },
  createTwoChains: function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  },
  isClickToShow: function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  },
  isClickToHide: function isClickToHide() {
    var _props2 = this.props,
        action = _props2.action,
        hideAction = _props2.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  },
  isMouseEnterToShow: function isMouseEnterToShow() {
    var _props3 = this.props,
        action = _props3.action,
        showAction = _props3.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  },
  isMouseLeaveToHide: function isMouseLeaveToHide() {
    var _props4 = this.props,
        action = _props4.action,
        hideAction = _props4.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  },
  isFocusToShow: function isFocusToShow() {
    var _props5 = this.props,
        action = _props5.action,
        showAction = _props5.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  },
  isBlurToHide: function isBlurToHide() {
    var _props6 = this.props,
        action = _props6.action,
        hideAction = _props6.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  },
  forcePopupAlign: function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  },
  fireEvents: function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  },
  close: function close() {
    this.setPopupVisible(false);
  },
  render: function render() {
    var props = this.props;
    var children = props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(children);
    var newChildProps = {};
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, newChildProps);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Trigger);

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/utils.js ***!
  \*********************************************/
/*! exports provided: getAlignFromPlacement, getPopupClassNameFromAlign, saveRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopupClassNameFromAlign", function() { return getPopupClassNameFromAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/PureRenderMixin.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/lib/PureRenderMixin.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */
var shallowEqual = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}
/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */


var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};
module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ "./node_modules/rc-util/lib/getContainerRenderMixin.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-util/lib/getContainerRenderMixin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContainerRenderMixin;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function defaultGetContainer() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

function getContainerRenderMixin(config) {
  var _config$autoMount = config.autoMount,
      autoMount = _config$autoMount === void 0 ? true : _config$autoMount,
      _config$autoDestroy = config.autoDestroy,
      autoDestroy = _config$autoDestroy === void 0 ? true : _config$autoDestroy,
      isVisible = config.isVisible,
      isForceRender = config.isForceRender,
      getComponent = config.getComponent,
      _config$getContainer = config.getContainer,
      getContainer = _config$getContainer === void 0 ? defaultGetContainer : _config$getContainer;
  var mixin;

  function _renderComponent(instance, componentArg, ready) {
    if (!isVisible || instance._component || isVisible(instance) || isForceRender && isForceRender(instance)) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }

      var component;

      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }

      _reactDom.default.unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;

        if (ready) {
          ready.call(this);
        }
      });
    }
  }

  if (autoMount) {
    mixin = _objectSpread(_objectSpread({}, mixin), {}, {
      componentDidMount: function componentDidMount() {
        _renderComponent(this);
      },
      componentDidUpdate: function componentDidUpdate() {
        _renderComponent(this);
      }
    });
  }

  if (!autoMount || !autoDestroy) {
    mixin = _objectSpread(_objectSpread({}, mixin), {}, {
      renderComponent: function renderComponent(componentArg, ready) {
        _renderComponent(this, componentArg, ready);
      }
    });
  }

  function _removeContainer(instance) {
    if (instance._container) {
      var container = instance._container;

      _reactDom.default.unmountComponentAtNode(container);

      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = _objectSpread(_objectSpread({}, mixin), {}, {
      componentWillUnmount: function componentWillUnmount() {
        _removeContainer(this);
      }
    });
  } else {
    mixin = _objectSpread(_objectSpread({}, mixin), {}, {
      removeContainer: function removeContainer() {
        _removeContainer(this);
      }
    });
  }

  return mixin;
}

/***/ }),

/***/ "./node_modules/react-lazy-load/lib/LazyLoad.js":
/*!******************************************************!*\
  !*** ./node_modules/react-lazy-load/lib/LazyLoad.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");

var _eventlistener = __webpack_require__(/*! eventlistener */ "./node_modules/eventlistener/eventlistener.js");

var _lodash = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash4 = _interopRequireDefault(_lodash3);

var _parentScroll = __webpack_require__(/*! ./utils/parentScroll */ "./node_modules/react-lazy-load/lib/utils/parentScroll.js");

var _parentScroll2 = _interopRequireDefault(_parentScroll);

var _inViewport = __webpack_require__(/*! ./utils/inViewport */ "./node_modules/react-lazy-load/lib/utils/inViewport.js");

var _inViewport2 = _interopRequireDefault(_inViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.lazyLoadHandler = _this.lazyLoadHandler.bind(_this);

    if (props.throttle > 0) {
      if (props.debounce) {
        _this.lazyLoadHandler = (0, _lodash2.default)(_this.lazyLoadHandler, props.throttle);
      } else {
        _this.lazyLoadHandler = (0, _lodash4.default)(_this.lazyLoadHandler, props.throttle);
      }
    }

    _this.state = { visible: false };
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
      var eventNode = this.getEventNode();

      this.lazyLoadHandler();

      if (this.lazyLoadHandler.flush) {
        this.lazyLoadHandler.flush();
      }

      (0, _eventlistener.add)(window, 'resize', this.lazyLoadHandler);
      (0, _eventlistener.add)(eventNode, 'scroll', this.lazyLoadHandler);

      if (eventNode !== window) (0, _eventlistener.add)(window, 'scroll', this.lazyLoadHandler);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (!this.state.visible) {
        this.lazyLoadHandler();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_nextProps, nextState) {
      return nextState.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      if (this.lazyLoadHandler.cancel) {
        this.lazyLoadHandler.cancel();
      }

      this.detachListeners();
    }
  }, {
    key: 'getEventNode',
    value: function getEventNode() {
      return (0, _parentScroll2.default)((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var _props = this.props,
          offset = _props.offset,
          offsetVertical = _props.offsetVertical,
          offsetHorizontal = _props.offsetHorizontal,
          offsetTop = _props.offsetTop,
          offsetBottom = _props.offsetBottom,
          offsetLeft = _props.offsetLeft,
          offsetRight = _props.offsetRight,
          threshold = _props.threshold;


      var _offsetAll = threshold || offset;
      var _offsetVertical = offsetVertical || _offsetAll;
      var _offsetHorizontal = offsetHorizontal || _offsetAll;

      return {
        top: offsetTop || _offsetVertical,
        bottom: offsetBottom || _offsetVertical,
        left: offsetLeft || _offsetHorizontal,
        right: offsetRight || _offsetHorizontal
      };
    }
  }, {
    key: 'lazyLoadHandler',
    value: function lazyLoadHandler() {
      if (!this._mounted) {
        return;
      }
      var offset = this.getOffset();
      var node = (0, _reactDom.findDOMNode)(this);
      var eventNode = this.getEventNode();

      if ((0, _inViewport2.default)(node, eventNode, offset)) {
        var onContentVisible = this.props.onContentVisible;


        this.setState({ visible: true }, function () {
          if (onContentVisible) {
            onContentVisible();
          }
        });
        this.detachListeners();
      }
    }
  }, {
    key: 'detachListeners',
    value: function detachListeners() {
      var eventNode = this.getEventNode();

      (0, _eventlistener.remove)(window, 'resize', this.lazyLoadHandler);
      (0, _eventlistener.remove)(eventNode, 'scroll', this.lazyLoadHandler);

      if (eventNode !== window) (0, _eventlistener.remove)(window, 'scroll', this.lazyLoadHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          height = _props2.height,
          width = _props2.width;
      var visible = this.state.visible;


      var elStyles = { height: height, width: width };
      var elClasses = 'LazyLoad' + (visible ? ' is-visible' : '') + (className ? ' ' + className : '');

      return _react2.default.createElement(this.props.elementType, {
        className: elClasses,
        style: elStyles
      }, visible && _react.Children.only(children));
    }
  }]);

  return LazyLoad;
}(_react.Component);

exports.default = LazyLoad;


LazyLoad.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  debounce: _propTypes2.default.bool,
  elementType: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  offset: _propTypes2.default.number,
  offsetBottom: _propTypes2.default.number,
  offsetHorizontal: _propTypes2.default.number,
  offsetLeft: _propTypes2.default.number,
  offsetRight: _propTypes2.default.number,
  offsetTop: _propTypes2.default.number,
  offsetVertical: _propTypes2.default.number,
  threshold: _propTypes2.default.number,
  throttle: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onContentVisible: _propTypes2.default.func
};

LazyLoad.defaultProps = {
  elementType: 'div',
  debounce: true,
  offset: 0,
  offsetBottom: 0,
  offsetHorizontal: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetTop: 0,
  offsetVertical: 0,
  throttle: 250
};

/***/ }),

/***/ "./node_modules/react-lazy-load/lib/utils/getElementPosition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-lazy-load/lib/utils/getElementPosition.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getElementPosition;
/*
* Finds element's position relative to the whole document,
* rather than to the viewport as it is the case with .getBoundingClientRect().
*/
function getElementPosition(element) {
  var rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}

/***/ }),

/***/ "./node_modules/react-lazy-load/lib/utils/inViewport.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-lazy-load/lib/utils/inViewport.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewport;

var _getElementPosition = __webpack_require__(/*! ./getElementPosition */ "./node_modules/react-lazy-load/lib/utils/getElementPosition.js");

var _getElementPosition2 = _interopRequireDefault(_getElementPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isHidden = function isHidden(element) {
  return element.offsetParent === null;
};

function inViewport(element, container, customOffset) {
  if (isHidden(element)) {
    return false;
  }

  var top = void 0;
  var bottom = void 0;
  var left = void 0;
  var right = void 0;

  if (typeof container === 'undefined' || container === window) {
    top = window.pageYOffset;
    left = window.pageXOffset;
    bottom = top + window.innerHeight;
    right = left + window.innerWidth;
  } else {
    if (!inViewport(container, window, customOffset)) return false;

    var containerPosition = (0, _getElementPosition2.default)(container);

    top = containerPosition.top;
    left = containerPosition.left;
    bottom = top + container.offsetHeight;
    right = left + container.offsetWidth;
  }

  var elementPosition = (0, _getElementPosition2.default)(element);

  return top <= elementPosition.top + element.offsetHeight + customOffset.top && bottom >= elementPosition.top - customOffset.bottom && left <= elementPosition.left + element.offsetWidth + customOffset.left && right >= elementPosition.left - customOffset.right;
}

/***/ }),

/***/ "./node_modules/react-lazy-load/lib/utils/parentScroll.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-lazy-load/lib/utils/parentScroll.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var style = function style(element, prop) {
  return typeof getComputedStyle !== 'undefined' ? getComputedStyle(element, null).getPropertyValue(prop) : element.style[prop];
};

var overflow = function overflow(element) {
  return style(element, 'overflow') + style(element, 'overflow-y') + style(element, 'overflow-x');
};

var scrollParent = function scrollParent(element) {
  if (!(element instanceof HTMLElement)) {
    return window;
  }

  var parent = element;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }

    if (!parent.parentNode) {
      break;
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};

exports.default = scrollParent;

/***/ })

}]);
//# sourceMappingURL=28.a7b7f99d1d7034cdd55f.js.map