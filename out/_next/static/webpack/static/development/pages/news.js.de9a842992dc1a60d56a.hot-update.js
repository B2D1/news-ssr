webpackHotUpdate("static\\development\\pages\\news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime-corejs2@7.4.5@@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@16.9.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Paper/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/_isomorphic-unfetch@3.0.0@isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/_@material-ui_core@4.4.2@@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _components_Msg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Msg */ "./components/Msg.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.24.0@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "C:\\Users\\BBD\\Desktop\\news-ssr\\pages\\news.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












moment__WEBPACK_IMPORTED_MODULE_15___default.a.locale('zh-CN');
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto'
    },
    table: {
      minWidth: 650
    },
    img: {
      width: 100,
      height: 100,
      objectFit: 'cover'
    }
  };
});
function News(_ref) {
  var news = _ref.news;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('info'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      type = _React$useState2[0],
      setType = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      msg = _React$useState6[0],
      setMsg = _React$useState6[1];

  var classes = useStyles();

  function handleClose() {
    setOpen(false);
  }

  function handleDelete(_x, _x2) {
    return _handleDelete.apply(this, arguments);
  }

  function _handleDelete() {
    _handleDelete = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(news, id) {
      var res, text, data, rIndex;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("http://localhost:8080/api/news?id=".concat(id), {
                method: 'DELETE'
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.text();

            case 5:
              text = _context.sent;
              data = text ? JSON.parse(text) : {};

              if (data.errorCode) {
                setType('error');
                setMsg(data.msg);
                setOpen(true);
              } else {
                rIndex = news.findIndex(function (_news) {
                  return _news._id === id;
                });
                news.splice(rIndex, 1);
                setType('success');
                setMsg('删除新闻成功！');
                setOpen(true);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleDelete.apply(this, arguments);
  }

  return __jsx("div", {
    title: "\u65B0\u95FB\u7BA1\u7406",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u65B0\u95FB ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u65B0\u95FB\u6807\u9898"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u65B0\u95FB\u7C7B\u76EE"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u65B0\u95FB\u4F5C\u8005"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u65B0\u95FB\u5C01\u9762"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u65B0\u95FB\u5185\u5BB9"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u65B0\u95FB\u9605\u8BFB\u6570"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u521B\u5EFA\u65F6\u95F4"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\u4FEE\u6539\u65F6\u95F4"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u64CD\u4F5C"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, news.map(function (_news) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: _news._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, _news._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, _news.title), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, _news.category.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, _news.author), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("img", {
      className: classes.img,
      src: "http://localhost:8080/static/".concat(_news.cover),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, _news.content), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, _news.readNums), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_15___default()(_news.createTime).format('lll')), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_15___default()(_news.createTime).format('lll')), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        return handleDelete(news, _news._id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "\u5220\u9664")));
  })))), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    open: open,
    autoHideDuration: 1000,
    onClose: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_components_Msg__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: handleClose,
    variant: type,
    message: msg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })));
}

News.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = _ref2.req;
            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:8080/api/news');

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            json = _context2.sent;
            return _context2.abrupt("return", {
              news: json.data
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=news.js.de9a842992dc1a60d56a.hot-update.js.map