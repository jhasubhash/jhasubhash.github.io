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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/websites/jhasubhash.github.io/components/Post.tsx\";\n\n\nfunction Post(_ref) {\n  var post = _ref.post,\n      key = _ref.key;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"card\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: post.frontMatter.cover_image,\n      alt: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"post-date\",\n      children: [\"Posted on \", post.frontMatter.date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: post.frontMatter.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      style: {\n        color: 'grey'\n      },\n      children: post.frontMatter.excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/blog/\".concat(post.slug),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"btn\",\n        children: \"Read More\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this)]\n  }, key, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 12\n  }, this);\n}\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LnRzeD8xNmQ5Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0Iiwia2V5IiwiZnJvbnRNYXR0ZXIiLCJjb3Zlcl9pbWFnZSIsImRhdGUiLCJ0aXRsZSIsImNvbG9yIiwiZXhjZXJwdCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxPQUEyQjtBQUFBLE1BQVpDLElBQVksUUFBWkEsSUFBWTtBQUFBLE1BQU5DLEdBQU0sUUFBTkEsR0FBTTtBQUN2QixzQkFBTztBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0g7QUFBSyxTQUFHLEVBQUVELElBQUksQ0FBQ0UsV0FBTCxDQUFpQkMsV0FBM0I7QUFBd0MsU0FBRyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUVIO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSwrQkFBc0NILElBQUksQ0FBQ0UsV0FBTCxDQUFpQkUsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkcsZUFHSDtBQUFBLGdCQUFLSixJQUFJLENBQUNFLFdBQUwsQ0FBaUJHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRyxlQUlIO0FBQUcsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBQztBQUFQLE9BQVY7QUFBQSxnQkFBMkJOLElBQUksQ0FBQ0UsV0FBTCxDQUFpQks7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpHLGVBS0gsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLGtCQUFXUCxJQUFJLENBQUNRLElBQWhCLENBQVY7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRztBQUFBLEtBQTJCUCxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFTSDs7S0FWUUYsSTtBQVlULCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcblxuZnVuY3Rpb24gUG9zdCh7cG9zdCwga2V5fSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY2FyZCcga2V5PXtrZXl9PlxuICAgICAgICA8aW1nIHNyYz17cG9zdC5mcm9udE1hdHRlci5jb3Zlcl9pbWFnZX0gYWx0PVwiIFwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj5Qb3N0ZWQgb24ge3Bvc3QuZnJvbnRNYXR0ZXIuZGF0ZX08L2Rpdj5cbiAgICAgICAgPGgzPntwb3N0LmZyb250TWF0dGVyLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2dyZXknfX0+e3Bvc3QuZnJvbnRNYXR0ZXIuZXhjZXJwdH08L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.tsx\n");

/***/ })

});