/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config_themeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/themeConfig */ \"./config/themeConfig.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/work/websites/jhasubhash.github.io/components/Post.tsx\";\n\nfunction _templateObject2() {\n  var data = (0,_Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    margin-bottom: 20px;\\n    padding: 3px 10px;\\n    background-color: \", \";\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    width: 100%;\\n    border-radius: 10px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar PostImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.img(_templateObject());\n_c = PostImage;\nvar PostDate = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject2(), function (_ref) {\n  var theme = _ref.theme;\n  return (0,_config_themeConfig__WEBPACK_IMPORTED_MODULE_3__.getShadowColor)(theme, 0.70, theme.body);\n});\n_c2 = PostDate;\n\nfunction Post(_ref2) {\n  var post = _ref2.post;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"card\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostImage, {\n      src: post.frontMatter.cover_image,\n      alt: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDate, {\n      children: [\"Posted on \", post.frontMatter.date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: post.frontMatter.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      style: {\n        color: 'grey'\n      },\n      children: post.frontMatter.excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/blog/\".concat(post.slug),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"btn\",\n        children: \"Read More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 12\n  }, this);\n}\n\n_c3 = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"PostImage\");\n$RefreshReg$(_c2, \"PostDate\");\n$RefreshReg$(_c3, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LnRzeD8xNmQ5Il0sIm5hbWVzIjpbIlBvc3RJbWFnZSIsInN0eWxlZCIsIlBvc3REYXRlIiwidGhlbWUiLCJnZXRTaGFkb3dDb2xvciIsImJvZHkiLCJQb3N0IiwicG9zdCIsImZyb250TWF0dGVyIiwiY292ZXJfaW1hZ2UiLCJkYXRlIiwidGl0bGUiLCJjb2xvciIsImV4Y2VycHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDBEQUFILG1CQUFmO0tBQU1ELFM7QUFLTixJQUFNRSxRQUFRLEdBQUdELDBEQUFILHFCQUdVO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUMsbUVBQWMsQ0FBQ0QsS0FBRCxFQUFPLElBQVAsRUFBYUEsS0FBSyxDQUFDRSxJQUFuQixDQUE3QjtBQUFBLENBSFYsQ0FBZDtNQUFNSCxROztBQU9OLFNBQVNJLElBQVQsUUFBc0I7QUFBQSxNQUFQQyxJQUFPLFNBQVBBLElBQU87QUFDbEIsc0JBQU87QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNILDhEQUFDLFNBQUQ7QUFBVyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkMsV0FBakM7QUFBOEMsU0FBRyxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUVILDhEQUFDLFFBQUQ7QUFBQSwrQkFBcUJGLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkUsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkcsZUFHSDtBQUFBLGdCQUFLSCxJQUFJLENBQUNDLFdBQUwsQ0FBaUJHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRyxlQUlIO0FBQUcsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBQztBQUFQLE9BQVY7QUFBQSxnQkFBMkJMLElBQUksQ0FBQ0MsV0FBTCxDQUFpQks7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpHLGVBS0gsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLGtCQUFXTixJQUFJLENBQUNPLElBQWhCLENBQVY7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVNIOztNQVZRUixJO0FBWVQsK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IHtnZXRTaGFkb3dDb2xvcn0gZnJvbSAnLi4vY29uZmlnL3RoZW1lQ29uZmlnJ1xuXG5cbmNvbnN0IFBvc3RJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbmA7XG5cbmNvbnN0IFBvc3REYXRlID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZ2V0U2hhZG93Q29sb3IodGhlbWUsMC43MCwgdGhlbWUuYm9keSl9O1xuYDtcblxuXG5mdW5jdGlvbiBQb3N0KHtwb3N0fSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgIDxQb3N0SW1hZ2Ugc3JjPXtwb3N0LmZyb250TWF0dGVyLmNvdmVyX2ltYWdlfSBhbHQ9XCIgXCIvPlxuICAgICAgICA8UG9zdERhdGU+UG9zdGVkIG9uIHtwb3N0LmZyb250TWF0dGVyLmRhdGV9PC9Qb3N0RGF0ZT5cbiAgICAgICAgPGgzPntwb3N0LmZyb250TWF0dGVyLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2dyZXknfX0+e3Bvc3QuZnJvbnRNYXR0ZXIuZXhjZXJwdH08L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.tsx\n");

/***/ })

});