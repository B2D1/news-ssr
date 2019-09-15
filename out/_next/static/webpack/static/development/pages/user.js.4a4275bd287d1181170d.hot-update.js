webpackHotUpdate("static\\development\\pages\\user.js",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
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



var _jsxFileName = "C:\\Users\\BBD\\Desktop\\news-ssr\\pages\\user.js";

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
    }
  };
});
function User(_ref) {
  var users = _ref.users;

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
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(users, id) {
      var res, text, data, rIndex;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("http://localhost:8080/api/user?id=".concat(id), {
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
                rIndex = users.findIndex(function (user) {
                  return user._id === id;
                });
                users.splice(rIndex, 1);
                setType('success');
                setMsg('删除用户成功！');
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.table,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u7528\u6237 ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u7528\u6237\u540D"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u5BC6\u7801"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\u6CE8\u518C\u65E5\u671F"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u6700\u540E\u4E00\u6B21\u767B\u5F55\u65E5\u671F"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u64CD\u4F5C"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, users.map(function (user) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: user._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, user._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, user.usr), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, user.psd), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_15___default()(user.createTime).format('lll')), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_15___default()(user.updateTime).format('lll')), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        return handleDelete(users, user._id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
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
      lineNumber: 99
    },
    __self: this
  }, __jsx(_components_Msg__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClose: handleClose,
    variant: type,
    message: msg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })));
}
User.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('http://localhost:8080/api/users');

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          json = _context2.sent;
          return _context2.abrupt("return", {
            shellTitle: '用户管理',
            title: '72 Kr | 请登录',
            layout: 1,
            users: json.data
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));

/***/ })

})
//# sourceMappingURL=user.js.4a4275bd287d1181170d.hot-update.js.map