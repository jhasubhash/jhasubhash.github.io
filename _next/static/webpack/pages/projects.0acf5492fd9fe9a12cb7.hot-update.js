/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProejctItem.tsx":
/*!************************************!*\
  !*** ./components/ProejctItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/work/websites/jhasubhash.github.io/components/ProejctItem.tsx\";\n\nfunction ProjectItem(_ref) {\n  var project = _ref.project;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"projectcard\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: project.frontMatter.cover_image,\n      alt: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, this), \"\\xA0\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: project.frontMatter.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      style: {\n        color: 'grey'\n      },\n      children: project.frontMatter.excerpt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-between'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"btn\",\n        style: {\n          borderRadius: '5px'\n        },\n        href: project.frontMatter.web_url,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n          children: \"Check it out\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 109\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"btn\",\n        style: {\n          borderRadius: '5px'\n        },\n        href: project.frontMatter.code_url,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n          children: \"source_code\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 110\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 12\n  }, this);\n}\n\n_c = ProjectItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9lamN0SXRlbS50c3g/OWEzYyJdLCJuYW1lcyI6WyJQcm9qZWN0SXRlbSIsInByb2plY3QiLCJmcm9udE1hdHRlciIsImNvdmVyX2ltYWdlIiwidGl0bGUiLCJjb2xvciIsImV4Y2VycHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJ3ZWJfdXJsIiwiY29kZV91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFULE9BQWdDO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQzVCLHNCQUFPO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDSDtBQUFLLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxXQUE5QjtBQUEyQyxTQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLHVCQUdIO0FBQUEsZ0JBQUtGLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQkU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhHLGVBSUg7QUFBRyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFDO0FBQVAsT0FBVjtBQUFBLGdCQUEyQkosT0FBTyxDQUFDQyxXQUFSLENBQW9CSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkcsZUFLSDtBQUFLLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUMsTUFBVDtBQUFpQkMsc0JBQWMsRUFBQztBQUFoQyxPQUFaO0FBQUEsOEJBQ0E7QUFBRyxpQkFBUyxFQUFDLEtBQWI7QUFBbUIsYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUU7QUFBZixTQUExQjtBQUFpRCxZQUFJLEVBQUVSLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQlEsT0FBM0U7QUFBb0YsY0FBTSxFQUFDLFFBQTNGO0FBQUEsK0JBQW9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUcsaUJBQVMsRUFBQyxLQUFiO0FBQW1CLGFBQUssRUFBRTtBQUFDRCxzQkFBWSxFQUFFO0FBQWYsU0FBMUI7QUFBaUQsWUFBSSxFQUFFUixPQUFPLENBQUNDLFdBQVIsQ0FBb0JTLFFBQTNFO0FBQXFGLGNBQU0sRUFBQyxRQUE1RjtBQUFBLCtCQUFxRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFVSDs7S0FYUVgsVztBQWFULCtEQUFlQSxXQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9lamN0SXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RJdGVtKHtwcm9qZWN0fSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncHJvamVjdGNhcmQnPlxuICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5mcm9udE1hdHRlci5jb3Zlcl9pbWFnZX0gYWx0PVwiIFwiLz5cbiAgICAgICAgJm5ic3A7XG4gICAgICAgIDxoMz57cHJvamVjdC5mcm9udE1hdHRlci50aXRsZX08L2gzPlxuICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidncmV5J319Pntwcm9qZWN0LmZyb250TWF0dGVyLmV4Y2VycHR9PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJ319PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17e2JvcmRlclJhZGl1czogJzVweCd9fSBocmVmPXtwcm9qZWN0LmZyb250TWF0dGVyLndlYl91cmx9IHRhcmdldD1cIl9ibGFua1wiPjxjb2RlPkNoZWNrIGl0IG91dDwvY29kZT48L2E+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNXB4J319IGhyZWY9e3Byb2plY3QuZnJvbnRNYXR0ZXIuY29kZV91cmx9IHRhcmdldD1cIl9ibGFua1wiPjxjb2RlPnNvdXJjZV9jb2RlPC9jb2RlPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SXRlbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProejctItem.tsx\n");

/***/ })

});