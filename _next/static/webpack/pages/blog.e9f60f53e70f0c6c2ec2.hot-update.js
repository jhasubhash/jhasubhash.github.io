/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var next_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-pagination */ \"./node_modules/next-pagination/dist/index.modern.js\");\n/* harmony import */ var next_pagination_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-pagination/dist/index.css */ \"./node_modules/next-pagination/dist/index.css\");\n/* harmony import */ var next_pagination_dist_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_pagination_dist_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/work/websites/jhasubhash.github.io/pages/blog.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar page = 1;\nvar size = 9;\n\nfunction Blog(_ref) {\n  _s();\n\n  var _this = this;\n\n  var posts = _ref.posts;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  page = router.query.page ? Number(router.query.page) : page;\n  size = router.query.size ? Number(router.query.size) : size;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        style: {\n          color: \"grey\",\n          fontSize: \"0.8rem\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n          children: \"\\\" Interested in reading random stuff? Here are my thoughts and opinions on just about everything. \\\"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"posts\",\n      children: posts.filter(function (post, index) {\n        return index >= (page - 1) * size && index < page * size;\n      }).map(function (post, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_1__.default, {\n          post: post\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_pagination__WEBPACK_IMPORTED_MODULE_2__.default, {\n      total: posts.length,\n      sizes: [9, 18, 27, 36]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Blog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy50c3g/NzRhMCJdLCJuYW1lcyI6WyJwYWdlIiwic2l6ZSIsIkJsb2ciLCJwb3N0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiTnVtYmVyIiwiY29sb3IiLCJmb250U2l6ZSIsImZpbHRlciIsInBvc3QiLCJpbmRleCIsIm1hcCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLElBQUksR0FBRyxDQUFYO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLENBQVg7O0FBQ0EsU0FBU0MsSUFBVCxPQUF5QjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FMLE1BQUksR0FBR0ksTUFBTSxDQUFDRSxLQUFQLENBQWFOLElBQWIsR0FBb0JPLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRSxLQUFQLENBQWFOLElBQWQsQ0FBMUIsR0FBZ0RBLElBQXZEO0FBQ0FDLE1BQUksR0FBR0csTUFBTSxDQUFDRSxLQUFQLENBQWFMLElBQWIsR0FBb0JNLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRSxLQUFQLENBQWFMLElBQWQsQ0FBMUIsR0FBZ0RBLElBQXZEO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDZCQUNFO0FBQU0sYUFBSyxFQUFFO0FBQUVPLGVBQUssRUFBRSxNQUFUO0FBQWlCQyxrQkFBUSxFQUFFO0FBQTNCLFNBQWI7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFjRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsZ0JBQ0dOLEtBQUssQ0FDSE8sTUFERixDQUVHLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGVBQWlCQSxLQUFLLElBQUksQ0FBQ1osSUFBSSxHQUFHLENBQVIsSUFBYUMsSUFBdEIsSUFBOEJXLEtBQUssR0FBR1osSUFBSSxHQUFHQyxJQUE5RDtBQUFBLE9BRkgsRUFJRVksR0FKRixDQUlNLFVBQUNGLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNILDhEQUFDLHFEQUFEO0FBQU0sY0FBSSxFQUFFRDtBQUFaLFdBQXVCQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FKTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQXVCRSw4REFBQyxvREFBRDtBQUFZLFdBQUssRUFBRVQsS0FBSyxDQUFDVyxNQUF6QjtBQUFpQyxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsZUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBLGtCQURGO0FBNEJEOztHQWhDUVosSTtVQUNRRyxrRDs7O0tBRFJILEk7O0FBa0NULCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCB7IHNvcnRCeURhdGUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJuZXh0LXBhZ2luYXRpb25cIjtcbmltcG9ydCBcIm5leHQtcGFnaW5hdGlvbi9kaXN0L2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmxldCBwYWdlID0gMTtcbmxldCBzaXplID0gOTtcbmZ1bmN0aW9uIEJsb2coeyBwb3N0cyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgPyBOdW1iZXIocm91dGVyLnF1ZXJ5LnBhZ2UpIDogcGFnZTtcbiAgc2l6ZSA9IHJvdXRlci5xdWVyeS5zaXplID8gTnVtYmVyKHJvdXRlci5xdWVyeS5zaXplKSA6IHNpemU7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCbG9nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiwgZm9udFNpemU6IFwiMC44cmVtXCIgfX0+XG4gICAgICAgICAgPGk+XG4gICAgICAgICAgICBcIiBJbnRlcmVzdGVkIGluIHJlYWRpbmcgcmFuZG9tIHN0dWZmPyBIZXJlIGFyZSBteSB0aG91Z2h0cyBhbmRcbiAgICAgICAgICAgIG9waW5pb25zIG9uIGp1c3QgYWJvdXQgZXZlcnl0aGluZy4gXCJcbiAgICAgICAgICA8L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIj5cbiAgICAgICAge3Bvc3RzXG4gICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgIChwb3N0LCBpbmRleCkgPT4gaW5kZXggPj0gKHBhZ2UgLSAxKSAqIHNpemUgJiYgaW5kZXggPCBwYWdlICogc2l6ZVxuICAgICAgICAgIClcbiAgICAgICAgICAubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhZ2luYXRpb24gdG90YWw9e3Bvc3RzLmxlbmd0aH0gc2l6ZXM9e1s5LCAxOCwgMjcsIDM2XX0gLz5cbiAgICAgIDxiciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKFwicG9zdHNcIikpO1xuXG4gIGNvbnN0IHBvc3RzID0gZmlsZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHNsdWcgPSBmaWxlTmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpO1xuICAgIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXG4gICAgICBwYXRoLmpvaW4oXCJwb3N0c1wiLCBmaWxlTmFtZSksXG4gICAgICBcInV0Zi04XCJcbiAgICApO1xuICAgIGNvbnN0IHsgZGF0YTogZnJvbnRNYXR0ZXIgfSA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKTtcbiAgICByZXR1cm4geyBzbHVnLCBmcm9udE1hdHRlciB9O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IHBvc3RzLnNvcnQoc29ydEJ5RGF0ZSksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.tsx\n");

/***/ })

});