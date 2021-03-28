(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./resources/admin/components/Editor/index.js":
/*!****************************************************!*\
  !*** ./resources/admin/components/Editor/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_themes_modern_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/themes/modern/theme */ "./node_modules/tinymce/themes/modern/theme.js");
/* harmony import */ var tinymce_themes_modern_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_modern_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/plugins/wordcount */ "./node_modules/tinymce/plugins/wordcount/index.js");
/* harmony import */ var tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_wordcount__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/plugins/autolink */ "./node_modules/tinymce/plugins/autolink/index.js");
/* harmony import */ var tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autolink__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/plugins/charmap */ "./node_modules/tinymce/plugins/charmap/index.js");
/* harmony import */ var tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_charmap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tinymce_plugins_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/plugins/contextmenu */ "./node_modules/tinymce/plugins/contextmenu/index.js");
/* harmony import */ var tinymce_plugins_contextmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_contextmenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tinymce_plugins_hr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/plugins/hr */ "./node_modules/tinymce/plugins/hr/index.js");
/* harmony import */ var tinymce_plugins_hr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_hr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinymce_plugins_imagetools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/plugins/imagetools */ "./node_modules/tinymce/plugins/imagetools/index.js");
/* harmony import */ var tinymce_plugins_imagetools__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_imagetools__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce/plugins/insertdatetime */ "./node_modules/tinymce/plugins/insertdatetime/index.js");
/* harmony import */ var tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_insertdatetime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tinymce/plugins/media */ "./node_modules/tinymce/plugins/media/index.js");
/* harmony import */ var tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_media__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tinymce_plugins_paste__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tinymce/plugins/paste */ "./node_modules/tinymce/plugins/paste/index.js");
/* harmony import */ var tinymce_plugins_paste__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_paste__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinymce/plugins/searchreplace */ "./node_modules/tinymce/plugins/searchreplace/index.js");
/* harmony import */ var tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_searchreplace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var tinymce_plugins_tabfocus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tinymce/plugins/tabfocus */ "./node_modules/tinymce/plugins/tabfocus/index.js");
/* harmony import */ var tinymce_plugins_tabfocus__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_tabfocus__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tinymce/plugins/anchor */ "./node_modules/tinymce/plugins/anchor/index.js");
/* harmony import */ var tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_anchor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tinymce/plugins/autoresize */ "./node_modules/tinymce/plugins/autoresize/index.js");
/* harmony import */ var tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_autoresize__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tinymce/plugins/directionality */ "./node_modules/tinymce/plugins/directionality/index.js");
/* harmony import */ var tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_directionality__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tinymce/plugins/image */ "./node_modules/tinymce/plugins/image/index.js");
/* harmony import */ var tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_image__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tinymce/plugins/importcss */ "./node_modules/tinymce/plugins/importcss/index.js");
/* harmony import */ var tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_importcss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tinymce/plugins/nonbreaking */ "./node_modules/tinymce/plugins/nonbreaking/index.js");
/* harmony import */ var tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_nonbreaking__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tinymce/plugins/pagebreak */ "./node_modules/tinymce/plugins/pagebreak/index.js");
/* harmony import */ var tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_pagebreak__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tinymce/plugins/preview */ "./node_modules/tinymce/plugins/preview/index.js");
/* harmony import */ var tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_preview__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var tinymce_plugins_textcolor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tinymce/plugins/textcolor */ "./node_modules/tinymce/plugins/textcolor/index.js");
/* harmony import */ var tinymce_plugins_textcolor__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_textcolor__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tinymce/plugins/emoticons */ "./node_modules/tinymce/plugins/emoticons/index.js");
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_26__);
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





























var Editor = /*#__PURE__*/function (_Component) {
  _inherits(Editor, _Component);

  var _super = _createSuper(Editor);

  function Editor() {
    _classCallCheck(this, Editor);

    return _super.apply(this, arguments);
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var value = this.props.value;
      tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1___default.a.init({
        target: this.textarea,
        skin: false,
        toolbar: ['undo redo', 'bold italic forecolor underline strikethrough', 'alignleft aligncenter alignright', 'image editimage link media emoticons'].join(" | "),
        plugins: ['autolink lists link image charmap preview hr anchor', 'pagebreak searchreplace wordcount importcss', 'insertdatetime media nonbreaking table contextmenu', 'directionality paste textcolor imagetools hr'],
        setup: function setup(editor) {
          editor.on('init', function () {
            editor.setContent(value);
          });
          editor.on('keyup change', function () {
            clearTimeout(_this.timer);
            var content = editor.getContent();
            _this.isTyping = true;
            _this.timer = setTimeout(function () {
              _this.isTyping = false;
            }, 500);

            _this.triggerChange(content);
          });
          _this.editor = editor;
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var value = this.props.value;

      if (prevProps.value !== value && !this.isTyping) {
        this.editor && this.editor.setContent(value);
        console.log("TinyMce Updated");
      }
    }
  }, {
    key: "triggerChange",
    value: function triggerChange(value) {
      var onChange = this.props.onChange;

      if (typeof onChange === "function") {
        return onChange(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      tinymce_tinymce__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.editor);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        ref: function ref(_ref) {
          return _this2.textarea = _ref;
        }
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

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _default = Editor;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Editor, "Editor", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_default, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
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

  reactHotLoader.register(_typeof, "_typeof", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_createClass, "_createClass", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_inherits, "_inherits", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_createSuper, "_createSuper", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(__signature__, "__signature__", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(Editor, "Editor", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_default, "_default", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
  reactHotLoader.register(_default2, "default", "D:\\CostaRica\\source\\resources\\admin\\components\\Editor\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=24.09c916a90a8173681e12.js.map