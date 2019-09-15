webpackHotUpdate("static\\development\\pages\\addNews.js",{

/***/ "./pages/addNews.js":
/*!**************************!*\
  !*** ./pages/addNews.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddNews; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.9.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Grid/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/_isomorphic-unfetch@3.0.0@isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _components_Msg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Msg */ "./components/Msg.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/MenuItem/index.js");




var _jsxFileName = "C:\\Users\\BBD\\Desktop\\news-ssr\\pages\\addNews.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    menu: {
      width: 200
    }
  };
});
function AddNews(_ref) {
  var categories = _ref.categories;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('info'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      type = _React$useState2[0],
      setType = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      msg = _React$useState6[0],
      setMsg = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      title = _React$useState8[0],
      setTitle = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState9, 2),
      author = _React$useState10[0],
      setAuthor = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState11, 2),
      cover = _React$useState12[0],
      setCover = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState13, 2),
      content = _React$useState14[0],
      setContent = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState15, 2),
      category = _React$useState16[0],
      setCategory = _React$useState16[1];

  var classes = useStyles();

  function handleClose() {
    setOpen(false);
  }

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleAuthorChange(evt) {
    setAuthor(evt.target.value);
  }

  function handleCoverChange(_x) {
    return _handleCoverChange.apply(this, arguments);
  }

  function _handleCoverChange() {
    _handleCoverChange = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(evt) {
      var file, formData, res, json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = document.getElementById('cover').files[0];
              formData = new FormData();
              formData.append('cover', file, file.name);
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://localhost:8080/api/uploadImg', {
                method: 'POST',
                body: formData
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              json = _context.sent;

              if (json.errorCode) {
                setType('error');
                setMsg(json.msg);
                setOpen(true);
              } else {
                setCover(json.data.filename);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleCoverChange.apply(this, arguments);
  }

  function handleContentChange(evt) {
    setContent(evt.target.value);
  }

  function handleCategoryChange(evt) {
    setCategory(evt.target.value);
  }

  function handleSubmit() {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var res, json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!title || !author || !cover || !content || !category)) {
                _context2.next = 5;
                break;
              }

              setType('warning');
              setMsg('字段不能为空！');
              setOpen(true);
              return _context2.abrupt("return");

            case 5:
              _context2.next = 7;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://localhost:8080/api/news', {
                method: 'POST',
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
                  title: title,
                  author: author,
                  cover: cover,
                  content: content,
                  category: category
                }),
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              });

            case 7:
              res = _context2.sent;
              _context2.next = 10;
              return res.json();

            case 10:
              json = _context2.sent;

              if (json.errorCode) {
                setType('error');
                setMsg(json.msg);
                setOpen(true);
              } else {
                setType('success');
                setMsg('新增新闻成功！');
                setOpen(true);
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return __jsx("div", {
    title: "\u65B0\u589E\u65B0\u95FB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    id: "title",
    fullWidth: true,
    label: "\u65B0\u95FB\u6807\u9898",
    type: "text",
    name: "title",
    onChange: handleTitleChange,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "standard-select-currency",
    select: true,
    required: true,
    fullWidth: true,
    value: category,
    label: "\u65B0\u95FB\u7C7B\u76EE",
    onChange: handleCategoryChange,
    SelectProps: {
      MenuProps: {
        className: classes.menu
      }
    },
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, categories.map(function (option) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: option._id,
      value: option._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, option.name);
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    id: "author",
    label: "\u65B0\u95FB\u4F5C\u8005",
    fullWidth: true,
    type: "text",
    name: "author",
    onChange: handleAuthorChange,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    id: "cover",
    fullWidth: true,
    type: "file",
    name: "cover",
    onChange: handleCoverChange,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    sm: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    id: "content",
    label: "\u65B0\u95FB\u5185\u5BB9",
    fullWidth: true,
    type: "text",
    name: "content",
    onChange: handleContentChange,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
    mt: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "\u63D0\u4EA4")))), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    open: open,
    autoHideDuration: 1000,
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(_components_Msg__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClose: handleClose,
    variant: type,
    message: msg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })));
}
AddNews.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('http://localhost:8080/api/categories');

        case 2:
          res = _context3.sent;
          _context3.next = 5;
          return res.json();

        case 5:
          json = _context3.sent;
          return _context3.abrupt("return", {
            shellTitle: '新增新闻',
            pageTitle: '72 Kr | 新闻管理',
            layout: 1,
            categories: json.data
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}));

/***/ })

})
//# sourceMappingURL=addNews.js.2797a644924560ecbd74.hot-update.js.map