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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/work/websites/jhasubhash.github.io/pages/blog/[slug].tsx\";\n\n\n\n\n\nmarked__WEBPACK_IMPORTED_MODULE_2__.marked.setOptions({\n  langPrefix: \"hljs language-\",\n  highlight: function highlight(code, lang) {\n    return highlight_js__WEBPACK_IMPORTED_MODULE_4___default().highlight('c++', code).value;\n  }\n});\nvar __N_SSG = true;\nfunction PostPage(_ref) {\n  var _ref$frontMatter = _ref.frontMatter,\n      title = _ref$frontMatter.title,\n      date = _ref$frontMatter.date,\n      cover_image = _ref$frontMatter.cover_image,\n      slug = _ref.slug,\n      content = _ref.content,\n      url = _ref.url;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: \"/blog\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn btn-back\",\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card card-page\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"post-title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-date\",\n        children: [\"Posted on \", date]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: cover_image,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"post-body\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          dangerouslySetInnerHTML: {\n            __html: marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(content)\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shareDiv\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.EmailShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.EmailIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 41\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 44\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.LinkedinShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.LinkedinIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 44\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.TwitterShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 43\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappShareButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappIcon, {\n            size: 32,\n            round: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 44\n          }, this),\n          url: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: \"/blog\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"btn btn-back\",\n        children: \"Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n_c = PostPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10udHN4P2FkZjkiXSwibmFtZXMiOlsibWFya2VkIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwiaGxqcyIsInZhbHVlIiwiUG9zdFBhZ2UiLCJmcm9udE1hdHRlciIsInRpdGxlIiwiZGF0ZSIsImNvdmVyX2ltYWdlIiwic2x1ZyIsImNvbnRlbnQiLCJ1cmwiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBYUFBLHFEQUFBLENBQWtCO0FBQ2RDLFlBQVUsRUFBRSxnQkFERTtBQUVkQyxXQUFTLEVBQUUsbUJBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUM5QixXQUFPQyw2REFBQSxDQUFlLEtBQWYsRUFBc0JGLElBQXRCLEVBQTRCRyxLQUFuQztBQUNEO0FBSmEsQ0FBbEI7O0FBT2UsU0FBU0MsUUFBVCxPQUFrRjtBQUFBLDhCQUEvREMsV0FBK0Q7QUFBQSxNQUFoREMsS0FBZ0Qsb0JBQWhEQSxLQUFnRDtBQUFBLE1BQXpDQyxJQUF5QyxvQkFBekNBLElBQXlDO0FBQUEsTUFBbkNDLFdBQW1DLG9CQUFuQ0EsV0FBbUM7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsT0FBZSxRQUFmQSxPQUFlO0FBQUEsTUFBTkMsR0FBTSxRQUFOQSxHQUFNO0FBQzdGLHNCQUFPO0FBQUEsNEJBQ1AsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsT0FBWDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGVBSVA7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGtCQUE0Qkw7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FBc0NDLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxXQUFHLEVBQUVDLFdBQVY7QUFBdUIsV0FBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0k7QUFBSyxpQ0FBdUIsRUFBRTtBQUFDSSxrQkFBTSxFQUFFZixnREFBQSxDQUFhYSxPQUFiO0FBQVQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU9JO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0ksOERBQUMseURBQUQ7QUFBa0Isa0JBQVEsZUFBRSw4REFBQyxrREFBRDtBQUFXLGdCQUFJLEVBQUUsRUFBakI7QUFBcUIsaUJBQUssRUFBRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE1QjtBQUFpRSxhQUFHLEVBQUVDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyw0REFBRDtBQUFxQixrQkFBUSxlQUFFLDhEQUFDLHFEQUFEO0FBQWMsZ0JBQUksRUFBRSxFQUFwQjtBQUF3QixpQkFBSyxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQS9CO0FBQXVFLGFBQUcsRUFBRUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLDhEQUFDLDREQUFEO0FBQXFCLGtCQUFRLGVBQUUsOERBQUMscURBQUQ7QUFBYyxnQkFBSSxFQUFFLEVBQXBCO0FBQXdCLGlCQUFLLEVBQUU7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBL0I7QUFBdUUsYUFBRyxFQUFFQTtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUksOERBQUMsMkRBQUQ7QUFBb0Isa0JBQVEsZUFBRSw4REFBQyxvREFBRDtBQUFhLGdCQUFJLEVBQUUsRUFBbkI7QUFBdUIsaUJBQUssRUFBRTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE5QjtBQUFxRSxhQUFHLEVBQUVBO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSSw4REFBQyw0REFBRDtBQUFxQixrQkFBUSxlQUFFLDhEQUFDLHFEQUFEO0FBQWMsZ0JBQUksRUFBRSxFQUFwQjtBQUF3QixpQkFBSyxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQS9CO0FBQXVFLGFBQUcsRUFBRUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKTyxlQW1CUCw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxPQUFYO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJPO0FBQUEsa0JBQVA7QUF1Qkg7S0F4QnVCUCxRIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQge21hcmtlZH0gZnJvbSAnbWFya2VkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuaW1wb3J0IGhsanMgZnJvbSBcImhpZ2hsaWdodC5qc1wiO1xuXG5pbXBvcnQge1xuICAgIEVtYWlsU2hhcmVCdXR0b24sXG4gICAgRW1haWxJY29uLFxuICAgIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gICAgTGlua2VkaW5TaGFyZUJ1dHRvbixcbiAgICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gICAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcbiAgICBGYWNlYm9va0ljb24sXG4gICAgTGlua2VkaW5JY29uLFxuICAgIFR3aXR0ZXJJY29uLFxuICAgIFdoYXRzYXBwSWNvblxuICB9IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG5tYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgbGFuZ1ByZWZpeDogXCJobGpzIGxhbmd1YWdlLVwiLFxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oY29kZSwgbGFuZykge1xuICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0KCdjKysnLCBjb2RlKS52YWx1ZTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2Uoe2Zyb250TWF0dGVyIDoge3RpdGxlLCBkYXRlLCBjb3Zlcl9pbWFnZX0sIHNsdWcsIGNvbnRlbnQsIHVybH0pIHtcbiAgICByZXR1cm4gPD5cbiAgICA8TGluayBocmVmPScvYmxvZyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1iYWNrXCI+QmFjazwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1wYWdlXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+UG9zdGVkIG9uIHtkYXRlfTwvZGl2PlxuICAgICAgICA8aW1nIHNyYz17Y292ZXJfaW1hZ2V9IGFsdD0nJy8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtYXJrZWQucGFyc2UoY29udGVudCl9fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaGFyZURpdic+XG4gICAgICAgICAgICA8RW1haWxTaGFyZUJ1dHRvbiBjaGlsZHJlbj17PEVtYWlsSWNvbiBzaXplPXszMn0gcm91bmQ9e3RydWV9Lz59IHVybD17dXJsfS8+XG4gICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvbiBjaGlsZHJlbj17PEZhY2Vib29rSWNvbiBzaXplPXszMn0gcm91bmQ9e3RydWV9Lz59IHVybD17dXJsfS8+XG4gICAgICAgICAgICA8TGlua2VkaW5TaGFyZUJ1dHRvbiBjaGlsZHJlbj17PExpbmtlZGluSWNvbiBzaXplPXszMn0gcm91bmQ9e3RydWV9Lz59IHVybD17dXJsfS8+XG4gICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uIGNoaWxkcmVuPXs8VHdpdHRlckljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfS8+fSB1cmw9e3VybH0vPlxuICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b24gY2hpbGRyZW49ezxXaGF0c2FwcEljb24gc2l6ZT17MzJ9IHJvdW5kPXt0cnVlfS8+fSB1cmw9e3VybH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8TGluayBocmVmPScvYmxvZyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1iYWNrXCI+QmFjazwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKCdwb3N0cycpKTtcbiAgICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZU5hbWUpPT4oe1xuICAgICAgICBwYXJhbXMgOiB7XG4gICAgICAgICAgICBzbHVnIDogZmlsZU5hbWUucmVwbGFjZSgnLm1kJywnJylcbiAgICAgICAgfVxuICAgIH0pKVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjayA6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtcyA6IHtzbHVnfX0pIHtcbiAgICBjb25zdCBtYXJrZG93bldpdGhNZXRhID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbigncG9zdHMnLHNsdWcrJy5tZCcpLCAndXRmLTgnKTtcbiAgICBjb25zdCB7ZGF0YTpmcm9udE1hdHRlciwgY29udGVudH0gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YSlcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9zdWJoYXNoamhhLmluL2Jsb2cvJytzbHVnO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzIDoge1xuICAgICAgICAgICAgZnJvbnRNYXR0ZXIsXG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n");

/***/ })

});