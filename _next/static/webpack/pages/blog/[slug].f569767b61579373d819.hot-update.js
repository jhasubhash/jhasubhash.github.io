/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/work/websites/jhasubhash.github.io/pages/blog/[slug].tsx\";\n\n\n\n\n\nmarked__WEBPACK_IMPORTED_MODULE_2__.marked.setOptions({\n  highlight: function highlight(code, lang) {\n    return highlight_js__WEBPACK_IMPORTED_MODULE_4___default().highlight('c', code).value;\n  }\n});\nvar __N_SSG = true;\nfunction PostPage(_ref) {\n  var _ref$frontMatter = _ref.frontMatter,\n      title = _ref$frontMatter.title,\n      date = _ref$frontMatter.date,\n      cover_image = _ref$frontMatter.cover_image,\n      slug = _ref.slug,\n      content = _ref.content,\n      url = _ref.url;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: \"/blog\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn btn-back\",\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card card-page\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"post-title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-date\",\n        children: [\"Posted on \", date]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: cover_image,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-body\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          dangerouslySetInnerHTML: {\n            __html: marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(content)\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shareDiv\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.EmailShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.EmailIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 41\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 44\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.LinkedinShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.LinkedinIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 44\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.TwitterShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 43\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 44\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: \"/blog\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn btn-back\",\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n_c = PostPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10udHN4P2FkZjkiXSwibmFtZXMiOlsibWFya2VkIiwiaGlnaGxpZ2h0IiwiY29kZSIsImxhbmciLCJobGpzIiwidmFsdWUiLCJQb3N0UGFnZSIsImZyb250TWF0dGVyIiwidGl0bGUiLCJkYXRlIiwiY292ZXJfaW1hZ2UiLCJzbHVnIiwiY29udGVudCIsInVybCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFhQUEscURBQUEsQ0FBa0I7QUFDZEMsV0FBUyxFQUFFLG1CQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDOUIsV0FBT0MsNkRBQUEsQ0FBZSxHQUFmLEVBQW9CRixJQUFwQixFQUEwQkcsS0FBakM7QUFDRDtBQUhhLENBQWxCOztBQU1lLFNBQVNDLFFBQVQsT0FBa0Y7QUFBQSw4QkFBL0RDLFdBQStEO0FBQUEsTUFBaERDLEtBQWdELG9CQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsSUFBeUMsb0JBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxXQUFtQyxvQkFBbkNBLFdBQW1DO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLE9BQWUsUUFBZkEsT0FBZTtBQUFBLE1BQU5DLEdBQU0sUUFBTkEsR0FBTTtBQUM3RixzQkFBTztBQUFBLDRCQUNQLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETyxlQUlQO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQkFBNEJMO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQXNDQyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUssV0FBRyxFQUFFQyxXQUFWO0FBQXVCLFdBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssaUNBQXVCLEVBQUU7QUFBQ0ksa0JBQU0sRUFBRWQsZ0RBQUEsQ0FBYVksT0FBYjtBQUFUO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNJLDhEQUFDLHlEQUFEO0FBQWtCLGtCQUFRLGVBQUUsOERBQUMsa0RBQUQ7QUFBVyxnQkFBSSxFQUFFLEVBQWpCO0FBQXFCLGlCQUFLLEVBQUU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBNUI7QUFBaUUsYUFBRyxFQUFFQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsNERBQUQ7QUFBcUIsa0JBQVEsZUFBRSw4REFBQyxxREFBRDtBQUFjLGdCQUFJLEVBQUUsRUFBcEI7QUFBd0IsaUJBQUssRUFBRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEvQjtBQUF1RSxhQUFHLEVBQUVBO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSw4REFBQyw0REFBRDtBQUFxQixrQkFBUSxlQUFFLDhEQUFDLHFEQUFEO0FBQWMsZ0JBQUksRUFBRSxFQUFwQjtBQUF3QixpQkFBSyxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQS9CO0FBQXVFLGFBQUcsRUFBRUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLDhEQUFDLDJEQUFEO0FBQW9CLGtCQUFRLGVBQUUsOERBQUMsb0RBQUQ7QUFBYSxnQkFBSSxFQUFFLEVBQW5CO0FBQXVCLGlCQUFLLEVBQUU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBOUI7QUFBcUUsYUFBRyxFQUFFQTtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0ksOERBQUMsNERBQUQ7QUFBcUIsa0JBQVEsZUFBRSw4REFBQyxxREFBRDtBQUFjLGdCQUFJLEVBQUUsRUFBcEI7QUFBd0IsaUJBQUssRUFBRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUEvQjtBQUF1RSxhQUFHLEVBQUVBO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSk8sZUFtQlAsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsT0FBWDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CTztBQUFBLGtCQUFQO0FBdUJIO0tBeEJ1QlAsUSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IHttYXJrZWR9IGZyb20gJ21hcmtlZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCBobGpzIGZyb20gXCJoaWdobGlnaHQuanNcIjtcblxuaW1wb3J0IHtcbiAgICBFbWFpbFNoYXJlQnV0dG9uLFxuICAgIEVtYWlsSWNvbixcbiAgICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICAgIExpbmtlZGluU2hhcmVCdXR0b24sXG4gICAgVHdpdHRlclNoYXJlQnV0dG9uLFxuICAgIFdoYXRzYXBwU2hhcmVCdXR0b24sXG4gICAgRmFjZWJvb2tJY29uLFxuICAgIExpbmtlZGluSWNvbixcbiAgICBUd2l0dGVySWNvbixcbiAgICBXaGF0c2FwcEljb25cbiAgfSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcblxubWFya2VkLnNldE9wdGlvbnMoe1xuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oY29kZSwgbGFuZykge1xuICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0KCdjJywgY29kZSkudmFsdWU7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHtmcm9udE1hdHRlciA6IHt0aXRsZSwgZGF0ZSwgY292ZXJfaW1hZ2V9LCBzbHVnLCBjb250ZW50LCB1cmx9KSB7XG4gICAgcmV0dXJuIDw+XG4gICAgPExpbmsgaHJlZj0nL2Jsb2cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYmFja1wiPkJhY2s8L2Rpdj5cbiAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtcGFnZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPlBvc3RlZCBvbiB7ZGF0ZX08L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9e2NvdmVyX2ltYWdlfSBhbHQ9JycvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbWFya2VkLnBhcnNlKGNvbnRlbnQpfX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hhcmVEaXYnPlxuICAgICAgICAgICAgPEVtYWlsU2hhcmVCdXR0b24gY2hpbGRyZW49ezxFbWFpbEljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfS8+fSB1cmw9e3VybH0vPlxuICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b24gY2hpbGRyZW49ezxGYWNlYm9va0ljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfS8+fSB1cmw9e3VybH0vPlxuICAgICAgICAgICAgPExpbmtlZGluU2hhcmVCdXR0b24gY2hpbGRyZW49ezxMaW5rZWRpbkljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfS8+fSB1cmw9e3VybH0vPlxuICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvbiBjaGlsZHJlbj17PFR3aXR0ZXJJY29uIHNpemU9ezMyfSByb3VuZD17dHJ1ZX0vPn0gdXJsPXt1cmx9Lz5cbiAgICAgICAgICAgIDxXaGF0c2FwcFNoYXJlQnV0dG9uIGNoaWxkcmVuPXs8V2hhdHNhcHBJY29uIHNpemU9ezMyfSByb3VuZD17dHJ1ZX0vPn0gdXJsPXt1cmx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPExpbmsgaHJlZj0nL2Jsb2cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYmFja1wiPkJhY2s8L2Rpdj5cbiAgICA8L0xpbms+XG4gICAgPC8+XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbigncG9zdHMnKSk7XG4gICAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKT0+KHtcbiAgICAgICAgcGFyYW1zIDoge1xuICAgICAgICAgICAgc2x1ZyA6IGZpbGVOYW1lLnJlcGxhY2UoJy5tZCcsJycpXG4gICAgICAgIH1cbiAgICB9KSlcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2sgOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXMgOiB7c2x1Z319KSB7XG4gICAgY29uc3QgbWFya2Rvd25XaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oJ3Bvc3RzJyxzbHVnKycubWQnKSwgJ3V0Zi04Jyk7XG4gICAgY29uc3Qge2RhdGE6ZnJvbnRNYXR0ZXIsIGNvbnRlbnR9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vc3ViaGFzaGpoYS5pbi9ibG9nLycrc2x1ZztcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wcyA6IHtcbiAgICAgICAgICAgIGZyb250TWF0dGVyLFxuICAgICAgICAgICAgc2x1ZyxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n");

/***/ })

});